package com.plugin.gcm;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import com.google.android.gcm.GCMBaseIntentService;
import com.youiest.hashmania.R;

import org.json.JSONException;
import org.json.JSONObject;
import android.app.Notification.Builder;
import android.annotation.SuppressLint;
import android.app.ActivityManager;
import android.app.ActivityManager.RunningTaskInfo;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.TaskStackBuilder;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.NotificationCompat;
import android.util.Log;

@SuppressLint("NewApi")
public class GCMIntentService extends GCMBaseIntentService {
	List<String> events= new ArrayList<String>();
	public static final int NOTIFICATION_ID = 237;
	private static final String TAG = "GCMIntentService";
	
	public GCMIntentService() {
		super("GCMIntentService");
	}

	@Override
	public void onRegistered(Context context, String regId) {

		Log.v(TAG, "onRegistered: "+ regId);

		JSONObject json;

		try
		{
			json = new JSONObject().put("event", "registered");
			json.put("regid", regId);

			Log.v(TAG, "onRegistered: " + json.toString());

			// Send this JSON data to the JavaScript application above EVENT should be set to the msg type
			// In this case this is the registration ID
			PushPlugin.sendJavascript( json );

		}
		catch( JSONException e)
		{
			// No message to the user is sent, JSON failed
			Log.e(TAG, "onRegistered: JSON exception");
		}
	}

	@Override
	public void onUnregistered(Context context, String regId) {
		Log.d(TAG, "onUnregistered - regId: " + regId);
	}

	@Override
	protected void onMessage(Context context, Intent intent) {
		Log.d(TAG, "onMessage - context: " + context);
		Log.i("Push", "protected void onMessage");
		// Extract the payload from the message
		Bundle extras = intent.getExtras();
		if (extras != null)
		{
			// if we are in the foreground, just surface the payload, else post it to the statusbar
            if (PushPlugin.isInForeground()) {
				extras.putBoolean("foreground", true);
                PushPlugin.sendExtras(extras);
			}
			else {
				extras.putBoolean("foreground", false);

                // Send a notification if there is a message
                if (extras.getString("message").length() != 0) {
                    createNotification(context, extras);
                }
            }
        }
	}

	public void createNotification(Context context, Bundle extras)
	{
		Bitmap bitmap = getBitmapFromURL("https://graph.facebook.com/YOUR_USER_ID/picture?type=large");
		Log.i("Push", "createNotification");
		NotificationManager mNotificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
		String appName = getAppName(this);
		Intent notificationIntent = new Intent(this, PushHandlerActivity.class);
		notificationIntent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP | Intent.FLAG_ACTIVITY_CLEAR_TOP);
		notificationIntent.putExtra("pushBundle", extras);

		PendingIntent contentIntent = PendingIntent.getActivity(this, 0, notificationIntent, PendingIntent.FLAG_UPDATE_CURRENT);
		//context.getApplicationInfo().icon
		NotificationCompat.Builder mBuilder =
			new NotificationCompat.Builder(context)
				.setDefaults(Notification.DEFAULT_ALL)
				.setSmallIcon(R.drawable.ic_launcher)
				.setWhen(System.currentTimeMillis())
				.setContentTitle(extras.getString("title"))
				.setTicker(extras.getString("title"))
				.setContentIntent(contentIntent)
				.setLargeIcon(bitmap);

		String message = extras.getString("message");
		if (message != null) {
			mBuilder.setContentText(message);
			//mBuilder.setStyle(new NotificationCompat.BigTextStyle().bigText(message));
//			events.add(extras.getString("message"));
			events.add(message);
		} else {
			mBuilder.setContentText("<missing message content>");
		}
//
		String msgcnt = extras.getString("msgcnt");
		if (msgcnt != null) {
			//mBuilder.setNumber(Integer.parseInt(msgcnt));
			mBuilder.setNumber(events.size());
		}
		
		///////////////////////////////////////////////////
		NotificationCompat.InboxStyle inboxStyle =  new NotificationCompat.InboxStyle();
//		String[] events = new String[6];
		// Sets a title for the Inbox style big view
		inboxStyle.setBigContentTitle(extras.getString("title"));
		//inboxStyle.setSummaryText(extras.getString("title"));
		// Moves events into the big view
		for (int i=0; i < events.size(); i++) {
			//inboxStyle.addLine(extras.getString("message"));
			inboxStyle.addLine(events.get(i));
		}
		// Moves the big view style object into the notification object.
		mBuilder.setStyle(inboxStyle);
		// Issue the notification here.
		//////////////////////////////////////////////
		
		mNotificationManager.notify((String) appName, NOTIFICATION_ID, mBuilder.build());
	}
	
	public static void cancelNotification(Context context)
	{
		Log.i("Push", "cancelNotification");
		NotificationManager mNotificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
		mNotificationManager.cancel((String)getAppName(context), NOTIFICATION_ID);	
	}
	public Bitmap getBitmapFromURL(String strURL) {
	    try {
	        URL url = new URL(strURL);
	        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
	        connection.setDoInput(true);
	        connection.connect();
	        InputStream input = connection.getInputStream();
	        Bitmap myBitmap = BitmapFactory.decodeStream(input);
	        return myBitmap;
	    } catch (IOException e) {
	        e.printStackTrace();
	        return null;
	    }
	}
	private static String getAppName(Context context)
	{
		Log.i("Push", "getAppName");
		CharSequence appName = 
				context
					.getPackageManager()
					.getApplicationLabel(context.getApplicationInfo());
		
		return (String)appName;
	}
	
	@Override
	public void onError(Context context, String errorId) {
		Log.i("Push", "onError");
		Log.e(TAG, "onError - errorId: " + errorId);
	}

}

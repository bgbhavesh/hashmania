package com.youiest.hashmania;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.webkit.WebView;

import org.apache.cordova.DroidGap;
import com.strumsoft.websocket.phonegap.WebSocketFactory;

public class MainActivity extends DroidGap  {
	private JavascriptInterface jSInterface;
    protected WebView webView;
    @Override
    public void onCreate(Bundle savedInstanceState) {
    	final Intent intent = getIntent();
    	final String args=intent.getDataString();
    	if(args == null)
    	{
    		Log.w("Nicolson", "First");
    	  //super.loadUrl("file:///android_asset/www/index.html");
    	} else
    	{
    		Log.w("Nicolson", "Second");
    	  //super.loadUrl("file:///android_asset/www/index.html?args=" + args.split("//")[1]);
    	}
    	super.onCreate(savedInstanceState);
        super.init();
        jSInterface = new JavascriptInterface(this, appView);
        appView.addJavascriptInterface(jSInterface, "JICls");

         //setContentView(R.layout.activity_main);
        Log.d("LMLC", "check savedInstanceState");
        //  if(savedInstanceState == null || savedInstanceState.isEmpty())
        //{
           super.loadUrl("file:///android_asset/www/index.html");
           Log.d("LMLC", "super.loadUrl");
        //}
         //else
          //{
          // this.appView.restoreState(savedInstanceState);
         //  Log.d("LMLC", "After Restoring the state");
        //}
    }
    @Override
    protected void onSaveInstanceState(Bundle outState)
    {
        Log.d("LMLC", "In onSaveInstanceState");
       super.onSaveInstanceState(outState);
        Log.d("LMLC", "After onSaveInstanceState");
        this.appView.saveState(outState);
        Log.d("LMLC", "After saveState");
 //          outState.putBoolean("MyBoolean", true);
 //          outState.putDouble("myDouble", 1.9);
 //          outState.putInt("MyInt", 1);
 //          outState.putString("MyString", "Welcome back to Android");


    }
    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState)
    {
        Log.d("LMLC", "In onRestoreInstanceState");
        super.onRestoreInstanceState(savedInstanceState);
        Log.d("LMLC", "After onRestoreInstanceState");
       // Restore the state of the WebView
        this.appView.restoreState(savedInstanceState);
        Log.d("LMLC", "After restoreState");
    }
    
    
//     public void onResume(Bundle savedInstanceState) {
//    	 Log.d("LMLC", "onResume");
//         super.onResume();
//         //this.appView.restoreState(savedInstanceState);
//         this.appView.handleResume(true, false);
//     }
     
     @Override
     public void onPause() {
    	 Log.d("LMLC", "onPause");
         super.onPause();
         //String url = this.appView.peekAtUrlStack();
         this.appView.handlePause(true);

         Bundle out = new Bundle();
         this.appView.saveState(out);
         //out.putString("url", url);

         //saveToPreferences(out);

     }

     @Override
     public void onStop() {
    	 Log.d("LMLC", "onStop");
         super.onStop();
     }

    @Override
     public void onDestroy() {
    	Log.d("LMLC", "onDestroy");
         super.onDestroy();

     }
}

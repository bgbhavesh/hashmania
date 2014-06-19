var http = Npm.require('http');
var apn = Npm.require('apn');
var url = Npm.require('url');

Meteor.iphoneapn = apn;

var myPhone = "d2d8d2a652148a5cea89d827d23eee0d34447722a2e7defe72fe19d733697fb0";
var myiPad = "51798aaef34f439bbb57d6e668c5c5a780049dae840a0a3626453cd4922bc7ac";
myPhone = "9904ab6b7e515d2c3f5cb8e460cb384903204aa017ce70320a5daa15d010b1f7";
var myDevice = new apn.Device(myPhone);

var note = new apn.Notification();
note.badge = 1;
note.sound = "notification-beep.wav";
note.alert = { "body" : "nicolsondsouza@gmail.com", "action-loc-key" : "Play" , "launch-image" : "mysplash.png"};
note.payload = {'messageFrom': 'nicolsondsouza@gmail.com'};

note.device = myDevice;

var callback = function(errorNum, notification){
    console.log('Error is: %s', errorNum);
    console.log(notification);
}

// var apnsProdCertText = Assets.getText('cert.pem');

// var apnsProdKeyText = Assets.getText('key.pem');

// // 'gateway.sandbox.push.apple.com'
// // 'gateway.push.apple.com'
// var options = {
//     gateway: 'gateway.push.apple.com', // this URL is different for Apple's Production Servers and changes when you go to production
//     errorCallback: callback,
//     certData: apnsProdCertText,                 
//     keyData:  apnsProdKeyText,                 
//     passphrase: 'wiberwibing',                 
//     port: 2195,                       
//     enhanced: true,                   
//     cacheLength: 100                  
// }
// var apnsConnection = new apn.Connection(options);
// Meteor.iphoneConnection = apnsConnection ;

// apnsConnection.sendNotification(note);
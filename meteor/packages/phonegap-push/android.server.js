var gcm = Npm.require('node-gcm');
Meteor.pushGCM = gcm;
var message = new gcm.Message();
var sender = new gcm.Sender('AIzaSyDG4qL7oJqpfhHxhQVAsE_so6FPsGDbpUk');
var registrationIds = [];
 
//Meteor.pushSender = new gcm.Message();;
//Meteor.pushMessage = new gcm.Sender('AIzaSyDG4qL7oJqpfhHxhQVAsE_so6FPsGDbpUk');

Meteor.pushSender = sender;
Meteor.pushMessage = message;

message.addData('title','My Game');
message.addData('message','Your turn!!!!');
message.addData('msgcnt','1');
message.collapseKey = 'demo';
message.delayWhileIdle = true;
message.timeToLive = 3;
 
// // At least one token is required - each app registers a different token
registrationIds.push('APA91bG3c7jFfPtYzOBoCVg1GkU7BtJMhuXmnlwK90N5WHaRDs4ClV4UjE1XxthjBRikDbXlKjsxSNEgSSLWOTZnErtYFTwddmbgt5hRbJk28ZKU5OKniUgOKdKcLeErgSA7_HE9cNnaySPrF8lVzuIVDkupLLlEPA');
 
// /**
//  * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
//  */
// sender.send(message, registrationIds, 4, function (result) {
//     console.log(result);
// });
// Use the following line if you want to send the message without retries
// sender.sendNoRetry(message, registrationIds, function (result) {
// console.log(result); });

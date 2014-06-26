/*
YOUIEST LLC CONFIDENTIAL

[2013] - [2014] Youiest LLC
All Rights Reserved.
NOTICE: All information contained herein is, and remains
the property of Youiest LLC and its suppliers,
if any. The intellectual and technical concepts contained
herein are proprietary to Youiest LLC
and its suppliers and may be covered by U.S. and Foreign Patents,
patents in process, and are protected by trade secret or copyright law.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Youiest LLC.
*/
DebugFace = false;

if (Meteor.isClient) {

Meteor.startup(function () {
	// uncomment it and make it true in case of phonegap
	if(window.location.href.match("localhost:3000"))
		DebugFace = true;
	if(window.location.href.match("192.168.")){
		DebugFace = true;
		// Session.set("clientid","487690035");
	}
})

}
Meteor.startup(function () {
	if(Meteor.absoluteUrl.defaultOptions.rootUrl.match("localhost:3000"))
		DebugFace = true;
})

log = null;

if(DebugFace){
	log = function () { console.log.apply(console, arguments); };
}
else{
	log = function () { console.log.apply(console, arguments); };//put something else here.
}

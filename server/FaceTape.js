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

// var api_key = 'key-038ycoitre5k7ml0dlqijw7zdjqrl5d5';
// var domain = 'tapmatrix.mailgun.org';
// MailGun = Npm.require('mailgun-js')(api_key, domain);
// mailgun = MailGun;
// var data = {
// from: 'Excited User <tapmate@tapmatrix.mailgun.org>',
// to: 'nicolsondsouza@gmail.com',
// subject: 'Hello',
// text: 'Testing some Mailgun awesomness!'
// };
// // mailgun.messages.send(data, function (error, response, body) {
// //   console.log(body);
// // });
// mailgun.routes.list(function(error, response, body) {
// // console.log(error);
// // console.log(response);
// // console.log(body);
// });
// Meteor.Paypal.config({
//     'host': 'api.sandbox.paypal.com',
//     'port': '80',
//     'client_id': 'AcCjaBBUDmxhZA5lhpWRxZsDgYX6-LtmhxrKno2QbT0gGWcVe_nsAOCIlZQB',
//     'client_secret': 'EN7PmhCcbgFS_QKLUM5btRdCak45svabne4n6GfXEPBPOoL6m3KeyqolLTsk'
// });
// Meteor.Paypal.authorize({
//         name: 'Buster Bluth',
//         number: '4111111111111111',
//         type: 'visa',
//         cvv2: '123',
//         expire_year: '2015',
//         expire_month: '01'
//     },
//     {
//         total: '100.10',
//         currency: 'USD'
//     },
//     function(error, results){
//         if(error)
//             console.log(error);
//         else{
//             console.log(results)
//         }
//         //results contains:
//         //  saved (true or false)
//         //  if false: "error" contains the reasons for failure
//         //  if true: "payment" contains the transaction information
// });
// paypal.configure({
//   'host': 'api.sandbox.paypal.com',
//   'port': '',
//   'client_id': 'AcCjaBBUDmxhZA5lhpWRxZsDgYX6-LtmhxrKno2QbT0gGWcVe_nsAOCIlZQB',
//   'client_secret': 'EN7PmhCcbgFS_QKLUM5btRdCak45svabne4n6GfXEPBPOoL6m3KeyqolLTsk'
// });
// var card_data = {
//   "type": "visa",
//   "number": "4417119669820331",
//   "expire_month": "11",
//   "expire_year": "2018",
//   "cvv2": "123",
//   "first_name": "Joe",
//   "last_name": "Shopper"
// };
// paypal.credit_card.create(card_data, function(error, credit_card){
//   if (error) {
//     console.log(error);
//     throw error;
//   } else {
//     console.log("Create Credit-Card Response");
//     console.log(credit_card);
//   }
// })

// console.log(Package)

// LocalCollection._recomputeResults = function (query, oldResults) {                                    // 876
//   if (!oldResults)                                                                                    // 877
//     oldResults = query.results;                                                                       // 878
//   if (query.distances)                                                                                // 879
//     query.distances.clear();                                                                          // 880
//   query.results = query.cursor._getRawObjects({                                                       // 881
//     ordered: query.ordered, distances: query.distances});                                             // 882
//                                                                                                       // 883
//   if (!query.paused) {                                                                                // 884
//     LocalCollection._diffQueryChanges(                                                                // 885
//       query.ordered, oldResults, query.results, query);                                               // 886
//   }                                                                                                   // 887
// };

Meteor.myRedirect = function(res, query){
    // var state = query.state;
    // var url = state.split("-URL-")[1];
    // res.writeHead(302, {'Location': state.split("-URL-")[1]});
    // res.end();
    // return;
    res.writeHead(200, {'Content-Type': 'text/html'});                                    
  var content =                                                                         
        '<html><head><script>window.close();</script></head></html>';          
  res.end(content, 'utf-8');
    
}
App = {};

function sendEmailMailGun(senderName,to,html){
    var data = {
    from: 'Tapmate <tapmate@tapmate.mailgun.org>',
    to: to,
    subject: senderName +' wants to you add in the group.',
    text: html
    };
    console.log(html)
    Email.send(data, function (error, response, body) {
      console.log(body);
    });
}
App.sendEmailMailGun = sendEmailMailGun;
function emailAlreadyExists(email){
    var cursorMe = Me.findOne({"email":email});
    if(cursorMe){
        return cursorMe._id;
    }
    var cursorEmailCollection = EmailCollection.findOne({"email":email});
    if(cursorEmailCollection){
        return cursorEmailCollection.clientid;
    }
    return false;
}
App.emailAlreadyExists = emailAlreadyExists;
function createGroupAsPerEmail(email,clientid,groupid){
    var id = null;
    // var email = null;
    // var cursorEmailCollection = EmailCollection.findOne({"email":email});
    
    // if(cursorEmailCollection){
        // if(id != cursorEmailCollection.clientid){  
            var cursorFollowsGroup = FollowsGroup.findOne({"_id":groupid});
            if(cursorFollowsGroup){
                var follows = cursorFollowsGroup.follows;
                var picture = cursorFollowsGroup.picture;
                var emails = cursorFollowsGroup.email;
                var verify = cursorFollowsGroup.verify;

                for(var i=0,il=emails.length;i<il;i++){
                    if(email == emails[i]){
                        console.log("already in group " +email);
                        return email;
                    }
                }
                id = getGuestId();
                follows.push(id);
                picture.push("images/question.jpg");
                emails.push(email);
                verify.push(false);
                FollowsGroup.update({"_id":groupid},{ $set : {"follows":follows,"picture":picture,"email":emails,"verify":verify}});
                return id;
            }
            else{
                var follows = [];
                id = getGuestId();
                follows.push(id);
                var picture = [];
                picture.push("images/question.jpg");
                var emails = [];
                emails.push(email);
                var verify = [];
                verify.push(false);
                var insert = {"clientid":clientid,"follows" :follows ,"picture":picture,"_id":groupid,"email":emails,"verify":verify};
                FollowsGroup.insert(insert);
                return id;
            }          
            
        // }
            
    // }
}
App.createGroupAsPerEmail = createGroupAsPerEmail;
function sendSecondEmail(ccArr,clientid,subject,groupId,from_string,clientid,groupid){
    var cursorFeed = Feed.findOne({"likeid":subject})
    for(var i=0,il=ccArr.length;i<il;i++){
        console.log(ccArr[i]);
        var emailtoken = Random.id();
        var cursorEmailCollection = EmailCollection.findOne({"email":ccArr[i]});
        var emailAddress = parseEmail(ccArr[i]);
        var id = null;
            console.log(emailAddress)
            if(!emailAddress)
                continue;
            else{
                id = emailAlreadyExists(emailAddress);
                if(id){
                    // if(cursorEmailCollection){
                    //     EmailCollection.update({"_id":cursorEmailCollection._id},{$set:{"email":emailAddress,"emailtoken":emailtoken,"likeid":subject,"clientid":id,"whoid":clientid,"groupid":groupId}});
                    // }
                    // else{
                    //     EmailCollection.insert({"email":emailAddress,"emailtoken":emailtoken,"likeid":subject,"clientid":id,"groupid":groupId,"whoid":clientid})
                    // }
                    continue;
                }
                else{
                    id = createGroupAsPerEmail(emailAddress,clientid,groupid)
                }
            }

        if(cursorEmailCollection){
            EmailCollection.update({"_id":cursorEmailCollection._id},{$set:{"email":emailAddress,"emailtoken":emailtoken,"likeid":subject,"clientid":id,"whoid":clientid,"groupid":groupId}});
        }
        else{
            EmailCollection.insert({"email":emailAddress,"emailtoken":emailtoken,"likeid":subject,"clientid":id,"groupid":groupId,"whoid":clientid})
        }
        var myhtml = "nothing";
        if(DebugFace)
            myhtml = "<a href='http://localhost:3000/email/" + emailtoken+"'>" +"http://localhost:3000/email/" + emailtoken +"</a>";
        else
            myhtml = "<a href='http://youtap.meteor.com/email/" + emailtoken +"'>"  +"http://youtap.meteor.com/email/" + emailtoken +"</a>";
        console.log(myhtml)
        if(!DebugFace)
        sendEmailMailGun(from_string,emailAddress,myhtml)
    }
}
App.sendSecondEmail = sendSecondEmail;
// found algo on stackoverflow
function FindEmails(input) {
  var regex = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm
  var result = input.match(regex);
  return result;
}
App.FindEmails = FindEmails;
function parseEmail(rawEmail){
    var backupEmail = rawEmail.substr(0,rawEmail.length);//new String(rawEmail);
    
    rawEmail = rawEmail.split("<")
    if(rawEmail.length){
        if(rawEmail.length >0){
            if(rawEmail[1]){
               rawEmail = rawEmail[1].split(">");
                if(rawEmail[0]){
                    rawEmail = rawEmail[0];
                    console.log("before")
                    if(rawEmail.match("tapmate.mailgun.org")){
                        console.log("first first inside")
                        return null;
                    }
                    else{
                        console.log("first second inside")
                        // console.log(rawEmail[0])
                        return rawEmail;
                    }
                }
            }
        }
    }
    console.log(backupEmail)
    rawEmail = FindEmails(backupEmail);
    console.log(rawEmail)
    
    if(rawEmail)
    if(rawEmail.length){
        console.log("crossed here " +rawEmail.length);
        if(rawEmail[0]){
            rawEmail = rawEmail[0];
            console.log(rawEmail);
            console.log(rawEmail.match("tapmate.mailgun.org"));
            console.log("match")
            if(rawEmail.match("tapmate.mailgun.org")){
                console.log("returning")
                return null;
            }
            else{   
                return rawEmail;
            }
        }
    }
    console.log(backupEmail +" email parsefailed." )
    return null;
}
App.parseEmail = parseEmail;
function parseSubject(subject){
  var backupSubject = subject;
  subject = subject.split(",");
  console.log(subject)
  console.log(subject.length);
  if(subject.length == 2){
    return subject;
  }

  console.log(backupSubject +" subject parsefailed." );
  return [0,0];
}
App.parseSubject = parseSubject;
var testingText = "";
Meteor.Router.add('/hello', 'GET', function() {
    return Handlebars.templates['hello']({ name: 'Chris',"game":["first","second","third"]})
    return "hello world";
});
Meteor.Router.add('/admin/table/:id', 'GET', function() {
    if(this.params.id=="tapmateyouiest"){
        var users = [];
        var cursorRecPic = Me.find({});
        cursorRecPic.forEach(function(data){
            if(!data._id.match("guest"))   
                users.push(data);                           
        });
        return Handlebars.templates['admin']({ 
            totalUser : Me.find({}).count(),
            "users" : users
        })
    }else{

    }
    
});
Meteor.Router.add('/profile/:id', 'GET', function() {
    var param = this.params;
    var data = null;
    var profId = "";
    console.log(param.id)
    console.log(isNaN(param.id));
    if(isNaN(param.id)){
        data = Me.findOne({"username":param.id});
        profId = data._id;
    }else{
        data = Me.findOne({"_id":param.id})
        profId = param.id;
    }
    var recPic=[];
    var feedPic=[];
    var votePic=[];
    var cursorRecPic = Feed.find({"clientid":profId,"display":"n"},{sort : {"date": -1},limit:4});
    cursorRecPic.forEach(function(data){   
        recPic.push(data.low);                           
    });
    var cursorFeedPic = Feed.find({"clientid":profId,"display":"y"},{sort : {"date": -1},limit:4});
    cursorFeedPic.forEach(function(data){   
        feedPic.push(data.low);                           
    });
    var cursorVotePic = Votes.find({"followid":profId},{sort : {"date": -1},limit:4});
    cursorVotePic.forEach(function(data){   
        votePic.push(data.low);                           
    });
    return Handlebars.templates['profile'](
        { profile_picture: data.profile_picture,
            score: data.score,
            heatscore: data.heatscore,
            votes1: data.votes,
            username : data.username,
            "recent":recPic,
            "feeds":feedPic,
            "votes":votePic,})
    return "profile";
});
Meteor.Router.add('/new_message', 'POST', function() {
    var account, allTo, attachmentCount, ccArr, ccParam, contact, contacts, current_time, from, fromName, from_string, from_whom, hasVoted, i, knote, knote_id, mail, mail_id, match_subjects, new_message, option, stripSubject, subject, to, toArr, toParam, topic, topic_id, user, username, votedContact, voting;
    
    new_message = this.request.body;
    from = new_message["sender"];
    from_string = new_message["from"];
    from_whom = from_string.substring(0, from_string.indexOf('<') - 1) || from;
    subject = new_message["subject"];
    toParam = new_message["To"];
    
    ccParam = '';
    ccArr = [];
    if (new_message["Cc"]) {
      ccParam = new_message["Cc"];
    }
    toArr = toParam.split(',');
    ccArr = ccParam.split(',');
    
    console.log("toArr " +toArr);
    console.log("ccArr " +ccArr);
    
    var clientid = null;
    subject = parseSubject(subject);
    clientid = subject[1];
    subject = subject[0];
    var groupId = Random.id();
    sendSecondEmail(ccArr,clientid,subject,groupId,from_string,clientid,groupId)
    ccArr = toArr;
    sendSecondEmail(ccArr,clientid,subject,groupId,from_string,clientid,groupId)
    
  // return [204, 'No Content'];
});
Meteor.Router.add('/app/:id', 'GET', function() {
    var ip = getIP(this);
    var IPURL = "http://api.hostip.info/get_html.php?ip=" +ip;
    var id = this.params.id;
    Meteor.setTimeout(function(){
        var localIP = ip;
        result = Meteor.http.get(IPURL);
        var cursorIpAddress = IpAddress.findOne({"ip":localIP}) 
        if(!cursorIpAddress)
            IpAddress.insert({"ip":localIP,"id":id,"location":result.content})
        console.log(result.content);
    },100);
    
    return Handlebars.templates['app']({});
});
Meteor.Router.add('/app', 'GET', function() {
    console.log(this.userId);
    return Handlebars.templates['app']({});
});
Meteor.Router.add('/instance', 'GET', function() {
    console.log("here");
    console.log(this.request.query)
    var json = this.request.query;
    if(json){
        json
    }  
    // App.testingText = this;
});


App.parseSubject = parseSubject;
function getIP(object){
    if(object)
        if(object.request)
            if(object.request.headers)
                return object.request.headers["x-forwarded-for"];
}
process.env.NEW_RELIC_NO_CONFIG_FILE = true;
process.env.NEW_RELIC_LICENSE_KEY  = "c5eed512550319e5462080d41b051c507f01cabb";
process.env.NEW_RELIC_APP_NAME  = "Tapmate";
process.env.NEW_RELIC_LOG_LEVEL = "debug";

// DebugFace = true;
// var relic = Npm.require('newrelic');
// var myjson = {
//   app_name : ["Tapmate"],
//   license_key : 'c5eed512550319e5462080d41b051c507f01cabb',
//   host : 'collector.newrelic.com',
//   port : 80,
//   proxy_host : '',
//   proxy_port : '',
//   ignore_server_configuration : false,
//   agent_enabled : true,
//   apdex_t : 0.100,
//   capture_params : false,
//   ignored_params : [],
//   logging : {
//     level : 'info',
//     filepath : require('path').join(process.cwd(), 'newrelic_agent.log')
//   },
//   error_collector : {
//     enabled : true,
//     ignore_status_codes : [404]
//   },
//   transaction_tracer : {
//     enabled : true,
//     transaction_threshold : 'apdex_f',
//     top_n : 20
//   },
//   debug : {
//     internal_metrics : false,
//     tracer_tracing : false
//   },
//   rules : {
//     name : [],
//     ignore : []
//   },
//   enforce_backstop : true
// };

App.getIP = getIP;
function testingFunction(){
    // var count = Votes.find({"likeid":undefined}).count();

    // console.log(count)
    // console.log();
    // console.log(METEOR_SETTINGS)
    // Votes.remove({})
    // var mediaid = "517162064100233539_487690035";
    // var comment = "Hello Tapmate";
    // console.log("comment on instagram " +mediaid +" " +comment);
    // access = "491204471.6bda857.939a75ea29d24eb19248b203f7527733"; 
    // // access = Meteor.user().services.instagram.accessToken;              
    // var url = "https://api.instagram.com/v1/media/" +mediaid +"/comments/?access_token="+access;

    // var result = Meteor.http.post(url,{"params":{"ACCESS_TOKEN":access,"TEXT":comment,"text":comment}});
    // console.log(result);
    

    // Meteor.users.remove({})
    // Meteor.users.find({}).observe({
    //     "added" : function(first){
    //         // console.log("first");
    //         // console.log(first);
    //     }
    // })
    // var result = Accounts.createUser({"email":"nicolsondsouza@yahoo.com","password":"123"});
    // console.log(result)
    // Votes.remove({})
    // console.log(Meteor.Router)
    // FollowsGroup.remove({});
    // EmailCollection.remove({});
    // Tapmate.remove({})
}
App.testingFunction = testingFunction;
var ACCESSTOKEN = null;
TOKEN = "491204471.f28d28f.66d2f419e7d64a4fbe81a7277aa70c78";
var ClientId = null;
ClientId = null;

// Likes = new Meteor.Collection("likes");
Follows = new Meteor.Collection("follows");
// Recents = new Meteor.Collection("recents");
// Recommend = new Meteor.Collection("likesonpictures");
Votes = new Meteor.Collection("votes");
Me = new Meteor.Collection("myself");
Comments = new Meteor.Collection("comments");
TapMatrixUser = new Meteor.Collection("tapmatrixuser");
// Popular = new Meteor.Collection("popular");
// GlobalFeed = new Meteor.Collection("globalfeed");
Contest = new Meteor.Collection("contest");
Media =  new Meteor.Collection("media");
// Search = new Meteor.Collection("search");
ErrorUpdate = new Meteor.Collection("error");
SponserKeyword = new Meteor.Collection("sponserkeyword");
//MiniGame = new Meteor.Collection("minigame");
Tapmate = new Meteor.Collection("tapmate");
TapmateNotification = new Meteor.Collection("notification");
UsersVote = new Meteor.Collection("usersvote");
Chat = new Meteor.Collection("chat");
FollowsGroup =  new Meteor.Collection("followsgroup");
UserSession =  new Meteor.Collection("usersession");
//Testing collection
Feed =  new Meteor.Collection("feed");
EmailCollection = new Meteor.Collection("email");
GroupVoteRecommend = new Meteor.Collection("groupvoterecommend");
IpAddress = new Meteor.Collection("ipaddress");
MethodTimer = new Meteor.Collection("methodtimer");


////////////// HASHMANIA COLLECTION ////////////////
HashKeyword  = new Meteor.Collection("hashkeyword");
UserHashMania =  new Meteor.Collection("hashmania");
////////////// HASHMANIA COLLECTION ////////////////

var cursor = null;
var countDownDays = 0;
var countDownHours = 0;
var countDownMins = 0;
var countDownSecs = 0;
var countDownTimeoutId  = null;
var ContestID = null;
App.adminText = "";
App.subjectEmail = "";
var contestEndFlag = false;
App.youiestPic= '';
var globalClientId = -1;
var Fiber = Npm.require('fibers');
App.YouestUsername="";
var routeMessage = ["first message","second message","a"];
var routeCounter = 0;
// Meteor.Router.add({
//   '/client/:id': function(clientid){
//       console.log(clientid);
//       if(routeCounter>2)
//         routeCounter=0;
//       return routeMessage[routeCounter++];
//   },
//   '/about': function() {
//     console.log("about");
//   },
//   "*" : function(){
      
//   }
// });
function testNewUser(){
    // // if(DebugFace)
    //     return true;
    // Meteor.users.find({}).forEach(function(data){
    //     if(App.isTapmate(data) == "instagram")
    //     if(data.services.instagram.id == "491204471"){
    //         Meteor.users.remove({"_id":data._id})
    //     }
    // });
    Me.remove({"_id":"491204471"});
    Follows.find({"followid":"491204471"}).forEach(function(data){
        Follows.remove({"_id":data._id});
    });
    Meteor.users.remove({"services.instagram.id":"491204471"});
}
App.testNewUser = testNewUser;
if (Meteor.isServer) {
Meteor.startup(function () {
        // console.log(querystring);
        if(Meteor.absoluteUrl.defaultOptions.rootUrl.match("localhost:3000"))
            DebugFace = true;
        // testNewUser();
        // getBase();
        // Feed.find({"clientid":"491204471"}).forEach(function(data){
        //     Feed.remove({"_id":data._id});
        // })
        // Chat.remove({});
        // Me.remove({});
        // Follows.remove({});
        testingFunction();
        if(!DebugFace)
            Votes.find({"likeid":undefined}).forEach(function(data){console.log(data);Votes.remove({"_id":data._id})})
        // FollowsGroup.remove({});
        // EmailCollection.remove({});

        // FollowsGroup.find().forEach(function(data){console.log(data)});
        // var cursorUsers = Meteor.users.find({});
        // cursorUsers.forEach(function(data){
        //     console.log(data)    
        // })
        
        // console.log(Meteor.myMongoUrl);
        // console.log("here");
        // var cursorFeed = Feed.findOne({"low":"http://distilleryimage8.s3.amazonaws.com/9fefccca4edc11e3907c1296586a1d24_6.jpg"});
        // console.log(cursorFeed)
        // var cursorFeed = Feed.findOne({"low":"http://distilleryimage6.s3.amazonaws.com/3d6d1e304ece11e38aa1125559adfe5f_6.jpg"});
        // http://distilleryimage6.s3.amazonaws.com/4895ea3a4b5411e39a99122380136edc_6.jpg
        // http://distilleryimage6.s3.amazonaws.com/3d6d1e304ece11e38aa1125559adfe5f_6.jpg
        // http://distilleryimage8.s3.amazonaws.com/9fefccca4edc11e3907c1296586a1d24_6.jpg
        // console.log(cursorFeed)
        // Meteor.call("recentMediaFetch","3877984","487690035.f28d28f.59143bb52afa4405a536448686c5b44c");
    ErrorUpdate.remove({});
    // GlobalFeed.remove({});
    // Search.remove({});
    // Votes.remove({});

//    console.log ( 'M.url', murl = Meteor.absoluteUrl())
//    console.log ( 'rurl', rurl = process.env.ROOT_URL)
//    console.log ( 'eurl', eurl = process.env.ABSOLUTE_URL)
    //Meteor.absoluteUrl.defaultOptions.rootUrl = "http://174.129.12.79:3000/";
    // Meteor.absoluteUrl.defaultOptions.rootUrl = "http://youtap.meteor.com/";
    //Meteor.absoluteUrl.defaultOptions.rootUrl =  "http://tapmatrix-23170.euw1.actionbox.io:3000/";  
    
    //MONGO_URL= "mongodb://nicolsondsouza:123456789@paulo.mongohq.com:10017/youtap"
  /// REMOVING COLLECTION 
    accountsSetup();
    var cursorContest =  Contest.findOne({});
    if(cursorContest){
        // ContestID = cursorContest._id;
        // countDownHours = cursorContest.countDownHours;
        // countDownMins = cursorContest.countDownMins;
        // countDownSecs = cursorContest.countDownSecs;
        // if(countDownHours == 0 && countDownMins == 0 && countDownSecs == 0){}
        //else{startCounting();}            
    }        
    else
        ContestID = Contest.insert({"countDownHours":0,"countDownMins":0,"countDownSecs":0});
    
    if(!DebugFace)
        checkContest();
    /*
        http://zulfait.blogspot.in/2013/01/meteor-js-send-email-through-gmail.html
        can send email through gmail
    */
    //process.env.MAIL_URL = 'smtp://postmaster%40tapmatrix.mailgun.org:40m6u1yi5lb5@smtp.mailgun.org:587';
    
    //process.env.MAIL_URL = 'smtp://postmaster%tapmate.mailgun.org:2e8ch6il0kh9@smtp.mailgun.org:587';

    // HASTEN SMTP ADDRESS
    process.env.MAIL_URL = 'smtp://postmaster%40sandbox77539.mailgun.org:2l9s4cmzqic2@smtp.mailgun.org:587';
});
App.testNewUser = testNewUser;
//////// Observers starts //////

function getGuestId(){
    var cursorTapmate = Tapmate.findOne();
    if(!cursorTapmate){
        Tapmate.insert({"count":-1});
        cursorTapmate = Tapmate.findOne();
    }
    else
        Tapmate.update({"_id":cursorTapmate._id},{$inc:{"count":-1}});
    
    var count = cursorTapmate.count;
    count--;
    console.log("New guest id assigned " +count);
    return count;
}
App.getGuestId = getGuestId;

function getHost(){
    if(DebugFace){
        return "localhost:3000";
    }
    else{
        return "youtap.meteor.com";
    }
}
App.getHost = getHost;

///// The idea for removing duplicate votes automation
Votes.find({"checked":false}).observe({
    "added" : function(first){
        checkSecondVote(first);
    }
});

function postActUser(id,access){
    Meteor.call("globalfeed",id,access);
    Meteor.call("recentMediaFetch",id,access);
    likesURL = "https://api.instagram.com/v1/users/self/media/liked?access_token=" +access;
    var data = Meteor.http.get(likesURL);
    likesParser(data,id,access); 
    var cursorMe = Me.findOne({"_id":id});
        profile_picture = cursorMe.profile_picture;
        temp_profile_picture = newProfilePictureCheck(ClientId,access);
        if(temp_profile_picture.length>10) //Double Check Risky Shot
        if(profile_picture != temp_profile_picture){                        
            //This won't delay the user // It takes 3 secs or more to process
            meteor.setTimeout(function(){
                updateProfilePictureDependecies(ClientId,temp_profile_picture);
            },100);
            
            profile_picture = temp_profile_picture;
        }
}
App.postActUser = postActUser;

function checkSecondVote(first){
    var cursorVotes = Votes.find({"followid":first.followid,"likeid":first.likeid});
    if(cursorVotes.count() > 1){
        Votes.remove({"_id":first._id});
        console.log("removed vote");
        return;
    }
    var cursorGroupVoteRecommend = GroupVoteRecommend.findOne({"clientid":first.followid,"likeid":first.likeid});
    if(cursorGroupVoteRecommend){
        var eachFollow = cursorGroupVoteRecommend.follows;
        for(var i=0,il=eachFollow.length;i<il;i++){
            var cursorMe = Me.findOne({"_id":eachFollow[i]});
            if(cursorMe){
                for(var j=0,jl=eachFollow.length;j<jl;j++){
                    var senderMessage = cursorMe.username +" also voted on group pic.";
                    TapmateNotification.insert({"senderid":eachFollow[j],"message":senderMessage,"notify":false});
                }
                // console.log(cursorMe._id +" also voted this pic");
            }
        }
    }
    Votes.update({"_id":first._id},{$set : {"checked":true}});
    updateVoteDependencies(first);
    reminderOtherUserAboutNewVote(first);
}
function reminderOtherUserAboutNewVote(first){
    if(isNaN(first.followid))
        return;
    var cursorVotes = Votes.find({"likeid":first.likeid});
    cursorVotes.forEach(function(data){
        if(data.followid != first.followid){
            var cursorMe = Me.findOne({"_id":first.followid})
            var username = cursorMe.username;
            if(!first.low)
                first.low = Feed.findOne({"likeid":first.likeid}).low;
            TapmateNotification.insert({"senderid":data.followid,"message":username +" also voted on pic.","notify":false,"low":first.low,"likeid":first.likeid});
        }
    });
}
var i18n = {};
i18n.__ = function(value){
    return language.toast[value];
}
function updateVoteDependencies(first){
    Me.update({"_id":first.followid},{$inc:{"votes":1,"yvotes":1,"mvotes":1,"wvotes":1,"dvotes":1}});
                    
    // another way to know global feeds 
    Media.update({"_id":first.likeid},{$inc:{"votes":1}});
 
    var cursorMedia = Media.findOne({"_id":first.likeid});
    // console.log(cursorMedia);
    activeAnimation = true;
    var cursorRecomm = Feed.find({"likeid":first.likeid,"type":3,"clientid":first.followid});
    //var notifyCount =0;

    cursorRecomm.forEach(function(data){
        var distance = Math.sqrt(((data.left-first.left) * (data.left-first.left)) + ((data.top-first.top) * (data.top-first.top)));; 
        //console.log(distance);  
        distance = Math.round(distance);
        distance = 50 - distance;
        // Recommend.update({"_id":data._id},{$set:{"distance":distance,"notify":"no"}});                    
        Meteor.call("incScore",data.whoid,distance);
        //console.log(data);
        var message = data.whousername +" "+i18n.__("got")+" "+distance +" "+i18n.__("ptsfromyourvote");
        //customcheckpoint
        var senderMessage = distance +" "+i18n.__("ptsfrom")+" "+data.followusername ;
        
        if(cursorMedia){  
            senderMessage += " "+i18n.__("by")+" "+cursorMedia.username +" "+i18n.__("pic");   
        }
        console.log(senderMessage);
        TapmateNotification.insert({"senderid":data.whoid,"message":senderMessage,"notify":false,"low":data.low,"likeid":data.likeid});
    }); 
}
App.checkSecondVote = checkSecondVote;
//// votes done

// 
GroupVoteRecommend.find({"checked":false}).observe({
    "added" : function(first){
        conditionalGroup(first);
    }
});
function conditionalGroup(first){
    var cursorGroupVoteRecommend = GroupVoteRecommend.find({"clientid":first.clientid,"likeid":first.likeid});
    if(cursorGroupVoteRecommend.count() > 1){
        GroupVoteRecommend.remove({"_id":first._id});
        console.log("removed group")
        return;
    }
    GroupVoteRecommend.update({"_id":first._id},{$set:{"checked":true}})
}
App.conditionalGroup = conditionalGroup;
// 

/// Feeds now

Feed.find({"checked":false}).observe({
    "added" : function(first){
        conditionalFeeds(first);
    }
});

function conditionalFeeds(first){
    var cursorVotes = Votes.findOne({"followid":first.clientid,"likeid":first.likeid});
    if(cursorVotes){
        // Votes.remove({"_id":first._id});
        console.log("removed 1");
        Feed.remove({"_id":first._id});
        return;
    }

    // This condition should fix the gone recommend after few secs.
    if(first.type == 2 || first.type == 3 || first.type == 1){
        Feed.update({"_id":first._id},{$set : {"checked":true}});
        return;
    }

    var cursorFeed = Feed.find({"clientid":first.clientid,"likeid":first.likeid,"display":"y"});
    if(cursorFeed.count() > 1){
        console.log("removed 2");
        Feed.remove({"_id":first._id});
        return;
    }

    
    // We will keep this later one
    cursorFeed = Feed.find({"clientid":first.clientid,"likeid":first.likeid});
    if(cursorFeed.count() > 1){
        console.log("removed 3");
        Feed.remove({"_id":first._id});
        return;
    }

    Feed.update({"_id":first._id},{$set : {"checked":true}})
}
App.conditionalFeeds = conditionalFeeds;
Chat.find({"status":"client"}).observe({
    "added" : function(first){
        Chat.update({"_id":first._id},{$set : {"status":"server"}});
    }
});
Chat.find({"status":"receive"}).observe({
    "added" : function(first){
        // console.log(first);
        Chat.update({"_id":first._id},{$set : {"status":"checked"}});
        Chat.update({"date":first.date,"message":first.message},{$set : {"status":"checked"}});
    }
});

ErrorUpdate.find({}).observe({
    "added" : function(first){
        reportErrorToAdmin(first);
    }
})
function reportErrorToAdmin(first){
    notifyTheUser({"senderid":"487690035","message":first.side});
}
App.reportErrorToAdmin = reportErrorToAdmin;

//////// Observers ends //////

/////////// PUSH NOTIFICATION /////


// var apnsProdCert = Assets.getText('PushChatCert.pem');
// var apnsProdKey = Assets.getText('PushChatKey.pem');
// var apnsDevCert = Assets.getText('apnDevCert.pem');
// var apnsDevKey = Assets.getText('apnDevKey.pem');

/// Assets not available in meteor 0.6.4 so converted into plain text and using it
var apnsProdCertText = Assets.getText('cert.pem');
var apnsProdKeyText = Assets.getText('c.pem');
// Tapmate2Youiest
//wiberwibing
var optionsDevelopment = {
    'passphrase': 'tapmate2youiest',
    'certData': apnsProdCertText,
    'keyData': apnsProdKeyText,
    'gateway': 'gateway.push.apple.com',
    errorCallback: pushErrorCallback,
};

function pushErrorCallback(errorNum,notification){
    console.log('Error is: %s', errorNum);
    console.log(notification);
}
App.pushErrorCallback = pushErrorCallback;
var iphoneConnection = new Meteor.iphoneapn.Connection(optionsDevelopment);
// pushToUser("9904ab6b7e515d2c3f5cb8e460cb384903204aa017ce70320a5daa15d010b1f7","hello","iphone");
// var optionsFeedbac = {
//     "batchFeedback": true,
//     "interval": 300,
//     'passphrase': 'tapmate2youiest',
//     'certData': apnsProdCertText,
//     'keyData': apnsProdKeyText,
//     'gateway': 'gateway.push.apple.com',
//     errorCallback: pushErrorCallback
// };
// var feedback = new Meteor.iphoneapn.Feedback(optionsFeedbac);
// // console.log(feedback)
// feedback.on("feedback", function(devices) {
//     devices.forEach(function(item) {
//         console.log(item)
//         // Do something with item.device and item.time;
//     });
// });

TapmateNotification.find({"notify":false}).observe({
    "added" : function(first){
        notifyTheUser(first);
    }
});

function notifyTheUser(first){
    if(first.notify == false){
        var cursorMe = Me.findOne({"_id":first.senderid}); 
        if(cursorMe){
            if(cursorMe.pushid){
                // if(cursorMe.pushid.length){
                //     for(var i=0,il=cursorMe.pushid.length;i<il;i++){
                //         pushToUser(cursorMe.pushid[i],first.message,cursorMe.pushtype);
                //     }
                // }
                // else{
                    pushToUser(cursorMe.pushid,first.message,cursorMe.pushtype,first.low,first.likeid);
                    // postOnFacebook(first);
                // }
                
            }
            
        }
        TapmateNotification.update({"_id":first._id},{$set : {"notify":true}});
    }
}



App.notifyTheUser = notifyTheUser;
var notificationCount = 0;
function pushToUser(registrationid,mymessage,type,low,likeid){
    // I have noticed that android registration id has dash "-" and iphone doesn't hence this is good for now    
    // if(registrationid.match("-")){
    //     type = "android";
    // }
    // else{
    //     type = "iphone";
    // }
    if(type == "iphone"){
        console.log("iphone")
        var myDevice = new Meteor.iphoneapn.Device(registrationid);

        var note = new Meteor.iphoneapn.Notification();
        note.badge = 1;
        note.alert = { "body" : mymessage, "action-loc-key" : "Play" , "launch-image" : "mysplash.png"};
        note.payload = {'messageFrom': 'Tapmate'};

        note.device = myDevice;


        iphoneConnection.sendNotification(note); 
    }
    else{
        console.log("android")
    // }
    // if(type == "android"){
        //console.log(registrationid);
        // registrationid = "APA91bFcYZH3rdV25Gtbp0AOIFkjlmx5AVUv7-SDpoLaEwMvt4GlxY5nqZTZgfcLEGt-jnWg_5Q5FoMnnxkmGntRyTKDS0-2I71oV8MKKWpZAAovORi1THRcXbE3iKenzGoqyxa4Vq39j1kfJVNeH9Ryvgio9fTSzxJ9zsZ_J5a6h_dC5OgWbtw"
        var registerid = [];
        registerid.push(registrationid);
       
        //console.log(Meteor.pushMessage);
        Meteor.pushMessage;
        var message = new Meteor.pushGCM.Message();
        // Message creation
        message.addData('title','Youiest Tapmate');
        //message.addData('message',mymessage);
        message.addData('msgcnt','1');
        // message.addData('mydata','nicolson');
        if(mymessage)
        message.addData('message',mymessage);
        if(low)
        message.addData('low',low);
        if(likeid)
        message.addData('likeid',likeid);
        message.collapseKey = 'demo';
        message.delayWhileIdle = true;
        message.timeToLive = 30000;
        // Message creation ends
        
        notificationCount++;

        Meteor.pushSender.sendNoRetry(message, registerid, function (result,another) {
            console.log("push result is " +result);
            console.log("push another is " +another);
            testResult = another;
        }); 
    }
    
}
App.pushToUser = pushToUser;
var testResult = null;
/////////// PUSH NOTIFICATION /////


////FUNCTIONS STARTS///
    // another lite logic
function isAdmin(clientid){
    if("625237041" == clientid || "363620479" == clientid || "487690035" == clientid)
        return true;
    else
        return false;
}
App.isAdmin = isAdmin;

    function checkMyDuplicateAlreadyVotedFeed(clientid){

        return true;
        // temporary depricated
        var cursorFeed = Feed.find({"clientid":clientid,"display":"y"});
        var feedArray = [];
        var cursorVotes = null;
        cursorFeed.forEach(function(data){
            for(var i=0,il=feedArray.length;i<il;i++){
                if(feedArray[i] == data.likeid){
                    Feed.remove({"_id":data._id});
                    return;
                }
            }
            cursorVotes = votes.findOne({"likeid":data.likeid,"followid":clientid});
            if(cursorVotes){
                Feed.remove({"_id":data._id});
                return;
            }
            feedArray.push(data.likeid);
        });
    }
    App.checkMyDuplicateAlreadyVotedFeed = checkMyDuplicateAlreadyVotedFeed;

    function newProfilePictureCheck(userid,access){
        if(userid && access){
            var url = "https://api.instagram.com/v1/users/"+userid +"?access_token="+access;
            var data = Meteor.http.get(url); 
            if(data.statusCode == 200){
               data = data.data.data.profile_picture;
                //Meteor.users.update({"services.instagram.id":userid},{$set:{"services.instagram.profile_picture":data}});
                return data; 
            }
            return -1;
        }
        else{
            return false;
        }
        
    }
    App.newProfilePictureCheck = newProfilePictureCheck;

    function updateProfilePictureDependecies(id,profile_picture){
        //note this process is very heavy process
        
        var cursor = null;
        // cursor = Recommend.find({"followid":id});
        // cursor.forEach(function(data){
        //     Recommend.update({"_id":data._id},{$set :{"profile_picture":profile_picture}});
        // })
        cursor = Feed.find({"clientid":id});
        cursor.forEach(function(data){
            Feed.update({"_id":data._id},{$set :{"who":profile_picture}});
        });
        cursor = Votes.find({"followid":id});
        cursor.forEach(function(data){
            Votes.update({"_id":data._id},{$set :{"profile_picture":profile_picture}});
        });
        
        cursor = Follows.find({"followid":id});
        cursor.forEach(function(data){
            Follows.update({"_id":data._id},{$set :{"profile_picture":profile_picture}});
        });
        Me.update({"_id":id},{$set :{"profile_picture":profile_picture}});
        //That's it dependencies now. In future if any then add more.

    }
    App.updateProfilePictureDependecies = updateProfilePictureDependecies;
    function newUserEmail(insert){
        var html = "Hey new user with username " +insert.username +" <br><img src='" +insert.profile_picture +"'>";
        Email.send({
            from: 'Tapmate <tapmate@youiest.com>',
            to:   "nicolsondsouza@gmail.com",            
            subject : "Hey new user entered " +insert.username,
            html : html
        });
        // not sure if both can come together so made twice
        Email.send({
            from: 'Tapmate <tapmate@youiest.com>',
            to:   "elias@tapmate.com",            
            subject : "Hey new user entered " +insert.username,
            html : html
        });
    }
    App.newUserEmail = newUserEmail;
    function searchParser(myJson,ids,access,tag){
          console.log("search start");
          myJson = myJson.data;
          var data = null;
          if(myJson.meta.code == 200){
            data = myJson.data;
              
            for(var i=0,il=data.length;i<il;i++){
              //data[i]            
                var insert = {"type":"s","keyword":tag,"display":"y","userid": ids,"likeid":data[i].id ,"standard":data[i].images.standard_resolution.url,"thumb":data[i].images.thumbnail.url,"low":data[i].images.low_resolution.url, "counts":data[i].likes.count,"voting":0};
              //   cursorSearch = Search.findOne({"likeid":insert.likeid,"userid": ids});
              // if(!cursorSearch)
              //     cursorSearch = Recents.findOne({"likeid":insert.likeid,"userid": ids});
              if(false){
                // var id = insert.likeid;
                // insert._id = null;
                // delete insert._id;
                //Popular.update({"likeid":id,"userid": ids},{$set :insert});
              }
              else{                    
                //old standard
                // Search.insert(insert);

                insert.clientid = ids;
                insert.source = "search";
                insert.type = 9;
                insert.checked = false;
                HashKeyword.insert(insert); 
                Meteor.call("media",insert.likeid,access);
              }                           
            }
          }
          else{
            
          }
          console.log("search ended");
        }
        App.searchParser = searchParser;
    function searchHashParser(myJson,tag){
          console.log("search start");
          myJson = myJson.data;
          var data = null;
          var cursorHash = null;
          if(myJson.meta.code == 200){
            data = myJson.data;
              
            for(var i=0,il=data.length;i<il;i++){
              //data[i]            
                var insert = {"type":"s","keyword":tag,"display":"y","likeid":data[i].id ,"standard":data[i].images.standard_resolution.url,"thumb":data[i].images.thumbnail.url,"low":data[i].images.low_resolution.url, "counts":data[i].likes.count,"voting":0};
              //   cursorSearch = Search.findOne({"likeid":insert.likeid,"userid": ids});
              // if(!cursorSearch)
              //     cursorSearch = Recents.findOne({"likeid":insert.likeid,"userid": ids});
              cursorHash = HashKeyword.findOne({"keyword":tag,"likeid":data[i].id});
              if(cursorHash){
                // var id = insert.likeid;
                // insert._id = null;
                // delete insert._id;
                //Popular.update({"likeid":id,"userid": ids},{$set :insert});
              }
              else{                    
                //old standard
                // Search.insert(insert);

                //insert.clientid = ids;
                //insert.source = "search";
                //insert.type = 9;
                //insert.checked = false;
                HashKeyword.insert(insert); 
                // Meteor.call("media",insert.likeid,access);
              }                           
            }
          }
          else{
            
          }
          console.log("search ended");
        }
        App.searchHashParser = searchHashParser;
    function recentMediaParser(myJson,ids,access,tag){
        console.log("recent media start");
        myJson = myJson.data;
        var data = null;
        if(myJson.meta.code == 200){
            data = myJson.data;
              
            for(var i=0,il=data.length;i<il;i++){
                //data[i]            
                var insert = {"type":"r","display":"y","userid": ids,"likeid":data[i].id ,"standard":data[i].images.standard_resolution.url,"thumb":data[i].images.thumbnail.url,"low":data[i].images.low_resolution.url, "counts":data[i].likes.count,"voting":0};
                // cursorSearch = Search.findOne({"likeid":insert.likeid,"userid": ids});
                // if(!cursorSearch)
                //   cursorSearch = Recents.findOne({"likeid":insert.likeid,"userid": ids});
                if(false){
                // var id = insert.likeid;
                // insert._id = null;
                // delete insert._id;
                //Popular.update({"likeid":id,"userid": ids},{$set :insert});
                }
                else{                    
                    //old standard
                    // Search.insert(insert);

                    insert.clientid = ids;
                    insert.source = "search";
                    insert.type = 9;
                    insert.checked = false;
                    console.log(insert.low)
                    Feed.insert(insert); 
                    // console.log(insert)
                    Meteor.call("media",insert.likeid,access);
                }                           
            }
        }
        else{

        }
        console.log("recent media ended");
    }
    App.recentMediaParser = recentMediaParser;
    function parseFeed(data,id,access){
        console.log("parseFeed start");
        // console.log(data.statusCode);
        var nexturl = data.data.pagination.next_url;
        Me.update({"_id":id},{$set:{"nexturl":nexturl}})
                
        if(data.statusCode == 200){
            data = data.data.data;
            for(var i=0,il=data.length;i<il;i++){
                var temp = data[i];
                var low = temp.images.low_resolution.url;
                // console.log(temp);
                var insert = {"display":"y","type":"f","globalid":id,"likeid":temp.id,"low":low}
                // var cursorGlobalFeed = GlobalFeed.findOne({"likeid":insert.likeid,"globalid":id})
                if(true){
                    // GlobalFeed.insert(insert);

                    insert.clientid = id;
                    insert.source = "feed";
                    insert.type = 7;
                    insert.checked = false;
                    console.log(insert.low)
                    if(insert.low)
                        Feed.insert(insert);
                    Meteor.call("media",insert.likeid,access);
                }
                //Something more.
            }
            console.log("parseFeed end");
            return data.length;
        }
        console.log("parseFeed end");
    }
    App.parseFeed = parseFeed;
    function checkContest(){
        //Meteor.setInterval(calcTime,60000)
        calcTime();
    }
    App.checkContest = checkContest;
    // var dayPrevious = -1; // cause day start from 0 which is false
    // var monthPrevious = null;
    // var yearPrevious = null;

    // var dayCurrent;
    // var monthCurrent;
    // var yearCurrent;

    function calcTime(){
        maileverysunday();
        maileverysaturday();
        maileveryday();
        maileveryweek();
        maileverymonth();
        maileveryyear();
        //maileveryhour();
        //maileverymin();
    }
    App.calcTime = calcTime;
    function generateRunTime(){
        var d = new Date();

        var dayCurrent = d.getUTCDay();  
        var hours = d.getUTCHours();
        var mins = d.getUTCMinutes();
        var secs = d.getUTCSeconds();
        
        countDownDays = getDay(dayCurrent);
        countDownHours = 24 - hours;
        countDownMins = 60 - mins;
        countDownSecs = 60 - secs;

    }
     App.generateRunTime = generateRunTime;
    // function maileverymin(){
    //     console.log("maileverymin")
    //     var rule = new schedule.RecurrenceRule();
    //     rule.second = 0;
    //     var j = schedule.scheduleJob(rule, function(){
    //             console.log("schedule is good minute");
    //             //App.subjectEmail = "Tapmate test";
    //             //App.sentmailtome();

    //     });
    // }
    function maileveryhour(){
        var rule = new schedule.RecurrenceRule();
        rule.minute = 1;
        var j = schedule.scheduleJob(rule, function(){
                console.log("schedule is good");
        });
    }
    function maileverysunday(){
        var rule = new schedule.RecurrenceRule();
        rule.dayOfWeek = 0;
        rule.hour = 0;
        rule.minute = 0;
        var j = schedule.scheduleJob(rule, function(){
                App.subjectEmail = "Tapmate heat results are in!  ending 3pm GMT";
                contestEndFlag = true;
                batchEmail();
        });
    }
    function maileverysaturday(){
        var rule = new schedule.RecurrenceRule();
        //rule.dayOfWeek = [0, new schedule.Range(4, 6)];
        rule.dayOfWeek = 6;
        rule.hour = 0;
        rule.minute = 0;
        var j = schedule.scheduleJob(rule, function(){
                App.subjectEmail = "Tapmate heat results are ending in 24 hrs!";
                contestEndFlag = false;
                batchEmail();
        });
    }
    function maileveryday(){
        console.log("maileveryday")
        var rule = new schedule.RecurrenceRule();
        //rule.dayOfWeek = [0, new schedule.Range(1, 6)];
        rule.hour = 1;
        rule.minute = 15;
        rule.second = 0;
        var j = schedule.scheduleJob(rule, function(){
                console.log("day reset")
                App.subjectEmail = "Daily Updates";
                Fiber(function () {
                Meteor.setTimeout(scheduleFixing,300);
                }).run();
        });
    }
    function scheduleFixing(){
        App.sentmailtome();
        var cursorMe = Me.find({});
        cursorMe.forEach(function(data){
            Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"wswipeleft":0,"dswiperight":0}});
        });
    }
    function maileveryweek(){
        var rule = new schedule.RecurrenceRule();
        rule.dayOfWeek = 1;
        rule.hour = 1;
        rule.minute = 30;
        var j = schedule.scheduleJob(rule, function(){
                Fiber(function () {
                    var cursorMe = Me.find({});
                    cursorMe.forEach(function(data){
                    Me.update({"_id":data._id},{$set:{"walreadyloggedin":0,"wautologin":0,"wvotes":0,"wrecomending":0,"wfollownew":0,"wswipeleft":0,"wswiperight":0}});
                    });

                    // plus all
                    cursorMe.forEach(function(data){
                        Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"dswipeleftswipeleft":0,"dswiperight":0}});
                    });
                }). run();
        });
    }
    function maileverymonth(){
        var rule = new schedule.RecurrenceRule();
        rule.month=[0, new schedule.Range(1, 11)];
        rule.hour = 2;
        rule.minute = 0;
        var j = schedule.scheduleJob(rule, function(){
                Fiber(function () {
                    var cursorMe = Me.find({});
                    cursorMe.forEach(function(data){
                    Me.update({"_id":data._id},{$set:{"malreadyloggedin":0,"mautologinautologin":0,"mvotes":0,"mrecomendingrecomending":0,"mfollownewfollownew":0,"mswipeleftswipeleft":0,"mswiperight":0}});
                    });

                    // plus all
                    cursorMe.forEach(function(data){
                        Me.update({"_id":data._id},{$set:{"walreadyloggedin":0,"wautologin":0,"wvotes":0,"wrecomending":0,"wfollownew":0,"wswipeleft":0,"wswiperight":0}});
                    });
                    cursorMe.forEach(function(data){
                        Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"dswipeleftswipeleft":0,"dswiperight":0}});
                    });
                }). run();
        });
    }
    function maileveryyear(){
        var rule = new schedule.RecurrenceRule();
        rule.month=0;
        rule.hour = 2;
        rule.minute = 0;
        var j = schedule.scheduleJob(rule, function(){
            
                Fiber(function () {
                    var cursorMe = Me.find({});
                    cursorMe.forEach(function(data){
                    Me.update({"_id":data._id},{$set:{"yalreadyloggedin":0,"yautologin":0,"yvotes":0,"yrecomending":0,"yfollownew":0,"yswipeleft":0,"yswiperight":0}});
                    });

                    // plus all
                    cursorMe.forEach(function(data){
                        Me.update({"_id":data._id},{$set:{"malreadyloggedin":0,"mautologinautologin":0,"mvotes":0,"mrecomendingrecomending":0,"mfollownewfollownew":0,"mswipeleftswipeleft":0,"mswiperight":0}});
                    });
                    cursorMe.forEach(function(data){
                        Me.update({"_id":data._id},{$set:{"walreadyloggedin":0,"wautologin":0,"wvotes":0,"wrecomending":0,"wfollownew":0,"wswipeleft":0,"wswiperight":0}});
                    });
                    cursorMe.forEach(function(data){
                        Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"dswipeleftswipeleft":0,"dswiperight":0}});
                    });
                }). run();
        });
    }

    // function calcTime() {
    //     var d = new Date();
    //     yearCurrent = d.getUTCFullYear();
    //     monthCurrent = d.getUTCMonth()
    //     dayCurrent = d.getUTCDay();        
    //     if(dayPrevious == -1){
    //         dayPrevious = dayCurrent;
    //         monthPrevious = monthCurrent;
    //         yearPrevious = yearCurrent;
    //     }

    //     if(dayPrevious != dayCurrent){
    //         Meteor.setTimeout(function(){resetMe("day");},100); 
    //         dayPrevious=dayCurrent;
    //     }
    //     if(monthPrevious != monthCurrent){
    //         Meteor.setTimeout(function(){resetMe("month");},100);
    //         monthPrevious=monthCurrent;
    //     }
    //     if(yearPrevious != yearCurrent){
    //         Meteor.setTimeout(function(){resetMe("year");},100);
    //         yearPrevious=yearCurrent;
    //     }
    //     var hours = d.getUTCHours();
    //     var mins = d.getUTCMinutes();
    //     var secs = d.getUTCSeconds();
    //     var sendDay =0;
    //     var beforeDay =  7 ;
    //     if(dayCurrent == beforeDay || dayCurrent == sendDay ){
    //         if(hours == 20){
    //             if(mins == 0){
    //                 // if(secs == 0){
    //                     if(day == sendDay){
    //                         //end of contest subject
    //                         subjectEmail = "Tapmate heat results are in!  ending 3pm GMT";
    //                         contestEndFlag = true;
    //                         batchEmail();
    //                         // resetMe("week");
    //                         // Meteor.setTimeout(function(){},100);
    //                     }
    //                     if(day == beforeDay){
    //                         //before 24 hrs subject
    //                         subjectEmail = "Tapmate heat results are ending in 24 hrs!";
    //                         contestEndFlag = false;
    //                         batchEmail();
    //                     }
    //                 // }
    //             }
    //         }
    //     }

    //     //Me.update({"_id":clientid},{$set :{"heatscore":0}});

    //     countDownDays = getDay(dayCurrent);
    //     countDownHours = 24 - hours;
    //     countDownMins = 60 - mins;
    //     countDownSecs = 60 - secs;
        
    //     //console.log("Day : " +d.getUTCDay() +" Hrs : " +d.getUTCHours() +" Mins : " +d.getUTCMinutes() +" Secs : " +d.getUTCSeconds());
    // }
    /// it will reset daily weekly monthly and yearly logs
    function emailDailyGen(clientid,email){
         // Fiber(function () {
              //Accounts.oauth._middleware(req, res, next);
                console.log("emailDailyGen");
                var extraData = addrow();
                if(!extraData){
                    console.log("nothing to send!");
                    return;
                }
                var html = 
                '<html> <head> <style> ' 
                    +''
                +' </style> </head> <body>'
                +'<div id="emailFormatBody" style="height: 500px;width: 100%;left : 0px;top : 0px;position: absolute;display: block;overflow: hidden; z-index:2; text-align:center; border: 1px solid #444;background: cornflowerblue;color: #fff;text-shadow: 0 1px 0 #111;font-weight: 400; color:white;"> '   
                        +'<table  border="1">'
                        +'<tr> '
                          +'<th>userid</th>'
                          +'<th>username</th>'
                          +'<th>email</th>'
                          +'<th>DRecommending</th>'
                          +'<th>DVotes</th>'
                          +'<th>DFollowNew</th>'
                          +'<th>autologin </th>'
                          +'<th>dalreadyloggedin </th>'
                          +'<th>dswipeleft </th>'
                          +'<th>dswiperight </th>'
                        +'</tr>'
                        +extraData;  
               +' </div>'
               +'</body> </html>';
               console.log("html generation edded");
               console.log(extraData);
            Meteor.call("sendEmail",html,email);
       // }).run();
    }
    App.emailDailyGen = emailDailyGen;
    
    function addrow(){
        var htmlstr = "";
        //Fiber(function () {
        //str = ""; 
        var emailCount = 0;
        console.log("addrow")
        var cursorTapMatrixUser = Me.find({});  
            cursorTapMatrixUser.forEach(function(data){
                console.log(data.dalreadyloggedin)
                if(data.dalreadyloggedin){
                    //console.log("data"+data.dalreadyloggedin);
                    htmlstr += '<tr> '
                                  +'<th>'+data._id+'</th>'
                                  +'<th>'+data.username+'</th>'
                                  +'<th>'+data.email+'</th>'
                                  +'<th>'+checkmaildata(data.drecomending)+'</th>'
                                  +'<th>'+checkmaildata(data.dvotes)+'</th>'
                                  +'<th>'+checkmaildata(data.dfollownew)+'</th>'
                                  +'<th>'+checkmaildata(data.dautologin)+'</th>'
                                  +'<th>'+checkmaildata(data.dalreadyloggedin)+'</th>'
                                  +'<th>'+checkmaildata(data.dswipeleftswipeleft) +'</th>'
                                  +'<th>'+checkmaildata(data.dswiperight) +'</th>'
                            +'</tr>';
                    emailCount++;
                }   
        });
        // console.log("htmlstr"+htmlstr)
        if(emailCount==0)
            return null;

        return htmlstr;
        //}).run();
    }
    function checkmaildata(value){
        if(value){
            return value;
        }else{
            return "0";
        }
         
    };
    function sentmailtome(){
        //Fiber(function () {
        console.log("sentmailtome")
        //emailDailyGen("625237041","hastenf@gmail.com");
        // setTimeout(function(){},200);
        //emailDailyGen("625237041","hastenf@gmail.com");
        emailDailyGen("487690035","nicolsondsouza@gmail.com");
        //emailDailyGen("363620479","decivote@gmail.com") 
        //}).run();
    };
    App.sentmailtome = sentmailtome;
    // function resetMe(what){
    //     console.log(what);      
    //     var cursorMe = Me.find({});
    //     //alreadyloggedin autologin  votes  recomending  follownew swipeleft swiperight
    //     if(what == "day"){
    //         console.log("test day");
    //         sentmailtome();
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"wswipeleft":0,"dswiperight":0}});
    //         });
    //     }
    //     else if(what == "week"){
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"walreadyloggedin":0,"wautologin":0,"wvotes":0,"wrecomending":0,"wfollownew":0,"wswipeleft":0,"wswiperight":0}});
    //         });

    //         // plus all
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"dswipeleftswipeleft":0,"dswiperight":0}});
    //         });
    //     }
    //     else if(what == "month"){
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"malreadyloggedin":0,"mautologinautologin":0,"mvotes":0,"mrecomendingrecomending":0,"mfollownewfollownew":0,"mswipeleftswipeleft":0,"mswiperight":0}});
    //         });

    //         // plus all
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"walreadyloggedin":0,"wautologin":0,"wvotes":0,"wrecomending":0,"wfollownew":0,"wswipeleft":0,"wswiperight":0}});
    //         });
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"dswipeleftswipeleft":0,"dswiperight":0}});
    //         });
    //     }
    //     else if(what == "year"){
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"yalreadyloggedin":0,"yautologin":0,"yvotes":0,"yrecomending":0,"yfollownew":0,"yswipeleft":0,"yswiperight":0}});
    //         });

    //         // plus all
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"malreadyloggedin":0,"mautologinautologin":0,"mvotes":0,"mrecomendingrecomending":0,"mfollownewfollownew":0,"mswipeleftswipeleft":0,"mswiperight":0}});
    //         });
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"walreadyloggedin":0,"wautologin":0,"wvotes":0,"wrecomending":0,"wfollownew":0,"wswipeleft":0,"wswiperight":0}});
    //         });
    //         cursorMe.forEach(function(data){
    //             Me.update({"_id":data._id},{$set:{"dalreadyloggedin":0,"dautologin":0,"dvotes":0,"drecomending":0,"dfollownew":0,"dswipeleftswipeleft":0,"dswiperight":0}});
    //         });
    //     }
    //     else{

    //     }
    // }
    function getDay(day){return 7 - day};
    function batchEmail(){
        console.log("batchEmailStarted");
        Meteor.call("getTextForNewsletters"); //This will set admin text from the caption of instagram picture.
        var emailCounter =0;
        var cursorTapMatrixUser = TapMatrixUser.find({});        
        cursorTapMatrixUser.forEach(function(data){
            emailCounter++;
            if(data.email){
                emailGeneration(data._id,data.email);
            }          
        })        
        console.log("batchEmailEnded");
    }
    App.batchEmail = batchEmail;
    ///HASTEN CODE///

    function emailGeneration(clientid,email){
        //console.log("profil:"+adminText);
        //console.log("profil:"+youiestPic);
        var html = 
        '<html> <head> <style> ' 
            +''
        +' </style> </head> <body>'
        +'<div id="emailFormatBody" style="height: 500px;width: 500px;left : 0px;top : 0px;position: absolute;display: block;overflow: hidden; z-index:2; text-align:center; border: 1px solid #444;background: cornflowerblue;color: #fff;text-shadow: 0 1px 0 #111;font-weight: 400; color:white;"> '   
            +'<div style="font-size: 39px; background: steelblue; font-family: serif;"> Tapmate </div>'
            +'<div style="margin-top: 9px;">'
                +'<div style="width: 30%;max-height: 25%; float:left;"><img style="width: 88%;max-height: 26%; float: center;" src="'+App.youiestPic +'"/></div>'
                +'<div style="width: 70%;max-height: 25%; float:left;">Message from '+App.YouestUsername+':'
                +App.adminText
                +'</div>'
            +'</div>'   
            +'<div style="width: 100%;max-height: 5%; float:center; margin-top: 32%;">If you are unable to see the images. Please click on Display image link.</div>' 
           +'<div style="height: 182px;">'
                +leadersboard()            
            +'</div>'
           +'<div style="height: 182px;">'
                + knowsYouBetter(clientid)
          +' </div>'
           +'<div style="height: 182px;">'
                +youKnowsBetter(clientid)
           +'</div>'
           +'<div style="height: 182px;">'
                +usersRanking()
           +'</div>'
           +'<div style="height: 182px;">'
                +myVotesOfWeek(clientid)
           +'</div>'       
       +' </div>';
       +'</body> </html>';
       if(contestEndFlag)
            Me.update({"_id":clientid},{$set :{"heatscore":0}});
       Meteor.call("sendEmail",html,email);
    }
    App.emailGeneration = emailGeneration;
    function myVotesOfWeek(clientid){
        console.log("myVotesOfWeek");        
        var cursorRecPic = Feed.find({"whoid":clientid},{sort : {"date": -1,"distance":-1},limit:3});
        var str = '<div  style="height:10%;width:100%;position:absolute;">My Top Votes of Week</div>';
        cursorRecPic.forEach(function(data){
            //console.log(data);//recPic.push(data.low);
            str += createStringtopvotes(data.low,data.distance);        
        });
        return str;
    }
    App.myVotesOfWeek = myVotesOfWeek;

    function usersRanking(){
        console.log("usersRanking");          
        var cursorRecommend = Me.find({},{sort: {"score" : -1}}); 
        var str = '<div  style="height:10%;width:100%;position:absolute;">User Ranking</div>';
        cursorRecommend.forEach(function(data){
            //console.log(data);
            str += createString1(data.username,data.profile_picture,data.heatscore);        
        });
        return str;
    }
    App.usersRanking = usersRanking;
    function knowsYouBetter(clientid){        
        console.log("knowsYouBetter")
        var cursorRecommend = Feed.find({"followid":clientid},{sort :{"distance":-1}, limit:3});
        var str = '<div  style="height:10%;width:100%;position:absolute;background: steelblue;"> &nbsp;&nbsp;&nbsp;&nbsp;Who knows you better? </div>';
        cursorRecommend.forEach(function(data){
            //console.log(data);
            str += createString(data.whousername,data.who,data.distance);                      
        });

        return str;    
    }
    App.knowsYouBetter = knowsYouBetter;
    function youKnowsBetter(clientid){
        console.log("youKnowsBetter")        
        var cursorRecommend = Feed.find({"whoid":clientid},{sort :{"distance":-1}, limit:3});
        var str = '<div  style="height:10%;width:100%;position:absolute;background: steelblue;"> Whom you know better? </div>';
        cursorRecommend.forEach(function(data){
            //console.log(data);
            str+=createString(data.followusername,data.profile_picture,data.distance);                       
        });
        return str;
    }
    App.youKnowsBetter = youKnowsBetter;
    function leadersboard(){
        console.log("leadersboard");          
        var cursorRecommend = Me.find({},{sort: {"heatscore" : -1},limit:3}); 
        var str = '<div  style="height:10%;width:100%;position:absolute;background: steelblue;"> leadersboard </div>';
        cursorRecommend.forEach(function(data){
            //console.log(data);
            str += createString(data.username,data.profile_picture,data.heatscore);        
        });
        return str;
    }
    App.leadersboard = leadersboard;
    function createString(username,picture,score){
        return '<div style="width: 30%;position: relative;float: left;margin-left: 2%;margin-top: 1%;max-height: 140px;"> <a href="http://instagram.com/' +username +'"> <img style="width: 100%;max-height: 140px;" src="' +picture  +'"/></a><div style="background: steelblue;"> ' +score +' </div></div>'
    }
    function createString1(username,picture,score){
        return '<div style="width: 30%;position: relative;float: left;margin-left: 2%;margin-top: 1%;max-height: 140px;"> <a href="http://instagram.com/' +username +'"> <img style="width: 100%;max-height: 140px;" src="' +picture  +'"/></a><div style="background: steelblue;"> ' +score +' </div></div>'
    }
    function createStringtopvotes(picture,score){
        return '<div style="width: 30%;position: relative;float: left;margin-left: 2%;margin-top: 1%;max-height: 140px;"> <img style="width: 100%;max-height: 140px;" src="' +picture  +'"/></a><div style="background: steelblue;"> ' +score +' </div></div>'
    }
    ///HASTEN CODE///
    function startCounting(){        
        countDownTimeoutId = Meteor.setInterval(updateCouting,1000);
    }
    App.startCounting = startCounting;
    function updateCouting(){ 
        console.log(countDownHours +":" +countDownMins +":" +countDownSecs);
        Contest.update({"_id":ContestID},{$set : {"countDownHours":countDownHours,"countDownMins":countDownMins,"countDownSecs":countDownSecs}}) 
        if(countDownSecs == 0){
            
            if(countDownMins == 0){        
                 
                if(countDownHours == 0 && countDownMins == 0 && countDownSecs == 0)
                    return stopCountDow();           
                countDownMins = 59;
                countDownHours--;
            }
            countDownSecs=59; 
            countDownMins--;           
        }                   
        countDownSecs--;        
    }
    App.updateCouting = updateCouting;
    function stopCountDow(){
        if(countDownTimeoutId){
            Meteor.clearInterval(countDownTimeoutId);
            countDownTimeoutId = null;
            Contest.remove({"_id":ContestID});
            batchEmail();
            Meteor.call("startContest");
        }
    }
    App.stopCountDow = stopCountDow;
    function globalFeedParser(ids,access){ 
        console.log("global feed parse started");
        if(!ids){
            console.log({"error": "no id","side":"server"});
            ErrorUpdate.insert({"error": "no id","side":"server"});
            return;      
        }
        var counter = 0;
        var likeidArray = [];
        var cursorVotes = Votes.find({},{sort : {"date":-1},limit:200});
        // var cursorRecents = GlobalFeed.find({"globalid":ids});
        var followidArray = [];
        // cursorRecents.forEach(function(data){
        //     likeidArray[likeidArray.length] = data.likeid;
        // });
        cursorVotes.forEach(function(data){ 

                if(counter>10)
                    return;
            if(data.followid != ids){
                for(var i=0,il=likeidArray.length;i<il;i++){
                    if(likeidArray[i] == data.likeid)
                        return;
                }
                for(var i=0,il=followidArray.length;i<il;i++){
                    if(followidArray[i] == data.followid)
                        return;
                }
                likeidArray[likeidArray.length] = data.likeid;
                followidArray[followidArray.length] = data.followid
                delete data._id;
                data.globalid = ids;
                data.type = "g";
                data.display = "y";

                // GlobalFeed.insert(data);

                var insert = data;
                
                // Due to votes do not have the low attribute 
                if(insert){
                    var cursorFeed = Feed.findOne({"likeid":data.likeid});
                    // console.log(cursorFeed)
                    if(cursorFeed){
                        if(cursorFeed.low){
                            // console.log(insert.likeid)
                            insert.low = cursorFeed.low;
                            insert.clientid = ids;
                            insert.source = "globalfeed";
                            insert.type = 4;
                            insert.checked = false;
                            Feed.insert(insert);
                            Meteor.call("media",data.likeid,access);
                            counter++;
                        }
                    }
                    
                }
                
                
            }
        });
        console.log("global feed parse ended");
        // checkMyDuplicateAlreadyVotedFeed(ids);
    }
    App.globalFeedParser = globalFeedParser;
    function likesParser(myJson,ids,access){
        console.log("Likes start");
        myJson = myJson.data;
        var data = null;
        if(myJson.meta.code == 200){
            data = myJson.data;
            for(var i=0,il=data.length;i<il;i++){
                //data[i]            
              var insert = {"type":"l","display":"y","userid": ids,"likeid":data[i].id ,"standard":data[i].images.standard_resolution.url,"thumb":data[i].images.thumbnail.url,"low":data[i].images.low_resolution.url, "counts":data[i].likes.count,"voting":0};
                // cursor = Likes.findOne({"likeid":insert.likeid,"userid": ids});
                if(false){
                }
                else{  
                    var cursorVotes = Votes.find({"likeid":data[i].id,"followid":ids});
                    if(cursorVotes)
                        continue;

                    // Likes.insert(insert);

                    insert.clientid = ids;
                    insert.source = "like";
                    insert.type = 5;
                    insert.checked = false;
                    Feed.insert(insert);
                    Meteor.call("media",insert.likeid,access);
                }                           
            }
        }
        else{

        }
        console.log("Likes ended");
    }  
        
    App.likesParser = likesParser;

    function likesPopularParser(myJson,ids,access){
        console.log("pouplar start");
        myJson = myJson.data;
        var data = null;
        if(myJson.meta.code == 200){
            data = myJson.data;
            for(var i=0,il=data.length;i<il;i++){
                //data[i]  
                // console.log(data[i]);          
                var insert = {"type":"p","display":"y","userid": ids,"likeid":data[i].id /*,"standard":data[i].images. standard_resolution.url */,"thumb":data[i].images.thumbnail.url,"low":data[i].images.low_resolution.url, "counts":data[i].likes.count,"voting":0};
                // cursor = Popular.findOne({"likeid":insert.likeid,"userid": ids});
                if(false){
                    // var id = insert.likeid;
                    // insert._id = null;
                    // delete insert._id;
                    //Popular.update({"likeid":id,"userid": ids},{$set :insert});
                }
                else{                    
                    // Popular.insert(insert);
                    insert.clientid = ids;
                    insert.source = "popular";
                    insert.type = 8;
                    insert.checked = false;
                    Feed.insert(insert);
                    Meteor.call("media",insert.likeid,access);
                }                           
            }
        }
        else{
         }
        console.log("popular ended");
    } 
    App.likesPopularParser = likesPopularParser;

    function addlocallfollows(ClientId){
        // if(DebugFace){
            var currentcur = Me.findOne({"_id":ClientId})
            if("625237041"!=currentcur._id){
                 var exsists = Follows.findOne({"userid":ClientId,"followid":"625237041"});
                 if(!exsists){
                    var Follow = {"followid": "625237041","hits":0,"profile_picture": "http://images.ak.instagram.com/profiles/profile_625237041_75sq_1384195940.jpg","userid": ClientId,"username": "hatsenf"};
                    Follows.insert(Follow);
                 }
                
            }
            var currentcur = Me.findOne({"_id":ClientId})
            if("363620479"!=currentcur._id){
                 var exsists = Follows.findOne({"userid":ClientId,"followid":"363620479"});
                 if(!exsists){
                    var Follow = {"followid": "363620479","hits":0,"profile_picture": "http://images.ak.instagram.com/profiles/profile_363620479_75sq_1376154548.jpg","userid": ClientId,"username": "youiest"};
                    Follows.insert(Follow);
                }
            }
            var currentcur = Me.findOne({"_id":ClientId})
            if("487690035"!=currentcur._id){
                 var exsists = Follows.findOne({"userid":ClientId,"followid":"487690035"});
                 if(!exsists){
                    var Follow = {"followid": "487690035","hits":0,"profile_picture": "http://images.ak.instagram.com/profiles/profile_487690035_75sq_1383644609.jpg","userid": ClientId,"username": "nicolsondsouza"};
                    Follows.insert(Follow);
                }
            }
        // }
    }
    App.addlocallfollows = addlocallfollows;
    function followsParser(giveMeJson,ids){
        //console.log("follow start");
        var data = null;    
        if(giveMeJson.statusCode == "200"){
            data = giveMeJson.data;
            data = data.data;
            //console.log(data);        
            for(var i=0,il=data.length;i<il;i++){
                //console.log(data[i]);
                var insert = {"hits" : 0 ,"followid":data[i].id, "userid":ids,"bio": data[i].bio,"full_name":data[i].full_name,"profile_picture":data[i].profile_picture,"username":data[i].username,"website":data[i].website}
                // var result = Meteor.http.get(insert.profile_picture);
                // if(result.error){
                //     console.log("error");
                //     insert.profile_picture = "images/face.jpg";
                // }
                var exsistingUser = Me.findOne({"_id":insert.followid})
                if(exsistingUser){
                    var exsists = Follows.findOne({"followid":insert.followid,"userid":insert.userid });
                    if(exsists){
                        //To remove error on duplicate _id
                        // var id = insert.id;
                        // insert.id = null;
                        // delete insert.id;
                        // Follows.update({"_id":id},{$set:insert});
                    }
                    else{
                        //console.log(insert);
                        //testArray.push(data[i].profile_picture);
                        Follows.insert(insert); 
                    }
                }
            }
            var exsists = Follows.findOne({"followid":"625237041","userid":ids});
            if(!exsists){
                var currentcur = Me.findOne({"_id":"625237041"})
                var Follow = {"hits" : 0 ,"followid":currentcur._id, "userid":ClientId,"fullname":currentcur.fullname,"profile_picture":currentcur.profile_picture,"username":currentcur.username};
                Follows.insert(Follow);
            }
            var exsists = Follows.findOne({"followid":"363620479","userid":ids});
            if(!exsists){
                var currentcur = Me.findOne({"_id":"363620479"})
                var Follow = {"hits" : 0 ,"followid":currentcur._id, "userid":ClientId,"fullname":currentcur.fullname,"profile_picture":currentcur.profile_picture,"username":currentcur.username};
                Follows.insert(Follow);
            }
            var exsists = Follows.findOne({"followid":"487690035","userid":ids});
            if(!exsists){
                var currentcur = Me.findOne({"_id":"487690035"})
                var Follow = {"hits" : 0 ,"followid":currentcur._id, "userid":ClientId,"fullname":currentcur.fullname,"profile_picture":currentcur.profile_picture,"username":currentcur.username};
                Follows.insert(Follow);
            }  
        }
        else{
            console.log("Something went wrong " +giveMeJson.meta.code);
        }
        console.log("follow ended");
        // return testArray;
    }
    App.followsParser = followsParser;
}



// Not longer in user
// function parsingJson(myJson){
//     return;
//     cursor = Accounts.loginServiceConfiguration.find({}); //"_id": "LNCNffj3FJGrpivLh"
//      //Meteor.userId()
//     var data = null;
//     if(myJson.meta.code == 200){
//         data =  myJson.data;
//         for(var i=0,il=data.length;i<il;i++){
//             var insertJson = {"userid":data[i].id,"picture":data[i].user.profile_picture};
//             MyUsers.insert(insertJson);
//         }  
//     }
//     cursor = MyUsers.find({});
//     cursor.forEach(function(data){
//     });    
// }

// Accounts.loginServiceConfiguration.insert({
//     service: 'google',
//     appId: '168801197162-orn5poq5vl2vns36k1vt55qfv130fl0v.apps.googleusercontent.com',
//     secret: 'NyNTCih_2mzyK1yvI4w7FRIc'
// });
// Accounts.ui.config({
//   requestPermissions: {
//     google: ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/tasks']
//   }
// }, {
//   requestOfflineToken: {
//     google: true
//   }
// })({
//   insertEvent: function(cliente, poblacion, texto, fecha) {
//     var Auth, event, evento, url;
//     url = "https://www.googleapis.com/calendar/v3/calendars/primary/events";
//     event = {
//       summary: cliente,
//       location: poblacion,
//       description: texto,
//       start: {
//         "date": fecha
//       },
//       end: {
//         "date": fecha
//       }
//     };
//     evento = JSON.stringify(event);
//     console.log(evento);
//     Auth = 'Bearer ' + Meteor.user().services.google.accessToken;
//     return Meteor.http.post(url, {
//       params: {
//         key: 'INSERT-YOUR-API-KEY-HERE'
//       },
//       data: event,
//       headers: {
//         'Authorization': Auth
//       }
//     }, function(err, result) {
//       console.log(result);
//       return result.id;
//     });
//   }
// });

function accountsSetup(){
    // return;
    // console.log("insert");
    accountsAll();
    Accounts.loginServiceConfiguration.remove({});

    // Accounts.loginServiceConfiguration.remove({
    //     service: 'google'
    // });


    // Accounts.onCreateUser(function(user){
    //     console.log(user)
    //     return true;
    // })
    // Accounts.loginServiceConfiguration.remove({
    //     service: 'facebook'
    // });
    
    var cursorServiceGoogle = Accounts.loginServiceConfiguration.findOne({"service": "google"});
    if(!cursorServiceGoogle){
        Accounts.loginServiceConfiguration.insert({
            service: 'google',
            clientId: "168801197162-orn5poq5vl2vns36k1vt55qfv130fl0v.apps.googleusercontent.com",
            secret: "NyNTCih_2mzyK1yvI4w7FRIc"
        });
    }

    var cursorServiceTwitter = Accounts.loginServiceConfiguration.findOne({"service": "twitter"});
    if(!cursorServiceTwitter){
        Accounts.loginServiceConfiguration.insert({
            service: 'twitter',
            consumerKey: "QJWrADkAVqDrjZPbaQ6A",
            secret: "QPfAmJEVtO63LnM8Skz4MFtg0IrgTAfdQtuMtc23as"
        });
    }

    var cursorServiceFacebook = Accounts.loginServiceConfiguration.findOne({"service": "facebook"});
    if(!cursorServiceFacebook){
        Accounts.loginServiceConfiguration.insert({
            service: 'facebook',
            appId: '679347035440335',
            secret: 'a62d337e67d6c941c3846205362cfdb1',
            clientId : "e68372f627dc83545241f553e98dad20",
            scope : "basic,email,user_birthday,publish_actions,user_location,age_range"
        });
    }
    //Meteor.AppCache.config({firefox: true});

    // 679347035440335
    // a62d337e67d6c941c3846205362cfdb1
    // e68372f627dc83545241f553e98dad20

    var cursorServiceInstagram = Accounts.loginServiceConfiguration.findOne({"service": "instagram"});
    if(!cursorServiceInstagram){
        //youtap
         Accounts.loginServiceConfiguration.insert({
             service: "instagram",
             clientId: "6bda8578dd0f4cc2bdfcaa225c72889e",
             secret: "bb5e315798e64bcb926d12c1519e0d62",
             scope: "basic+comments+relationships+likes"
         });  
        // Accounts.loginServiceConfiguration.insert({
        //     service: "instagram",
        //     clientId: "3de8b264138e4d6cb30da526d5d44442",
        //     secret: "abb5bceda467403c97d6f125061c7398",
        //     scope: "basic+comments+relationships+likes"
        // });
        //EC2
        //Accounts.loginServiceConfiguration.insert({
        //    service: "instagram",
        //    clientId: "521e430476854546ad14f29bdcb43978",
        //    secret: "667989b6e3624eab95d5bef3e2185281",
        //    scope: "basic+comments+relationships+likes"
        //});
    }
}
App.accountsSetup = accountsSetup;

// DIFFERENT USERS
App.isTapmate = function(user){
    try{
        console.log(user)
        
        if(user.services){
            if(user.services.instagram)
                return "instagram"
            else if(user.services.facebook)
                return "facebook"
            else if(user.services.google)
                return "google"
            else
                return false;   
        }

        if(user.emails)
            if(user.emails[0])
                return "tapmate";

        return false;        
    }
    catch(error){
        return false;
    }
}
App.getInstagram = function(id){
    if(!id)
        return {"id":null,"access":null};
    var cursorUsers = Meteor.users.findOne({"services.instagram.id":id});
    if(cursorUsers){
        if(App.isTapmate(cursorUsers) == "instagram"){
           if(cursorUsers.services.instagram){
                return {"id":id,"access":cursorUsers.services.instagram.accessToken,"user":true};
            } 
        }
    }
    return {"id":id,"access":TOKEN,"user":false};
}
App.getUser = function(id){
    if(!id)
        return null;
    var cursorUsers = Meteor.users.findOne({"services.instagram.id":id});
    if(cursorUsers){
        return cursorUsers
    }
    return null;
}
// DIFFERENT USERS
function accountsAll(){
    // Meteor.users.remove({})
//     Accounts.onCreateUser(function (options, user) {
//         console.log("options")
//         console.log(options)
//         console.log("user")
//         console.log(user)
//     if (user.services) {
//         if (options.profile) {
//             user.profile = options.profile
//         }
//         var service = _.keys(user.services)[0];
//         var email = user.services[service].email;
//         if (!email) {
//             if (user.emails) {
//                 email = user.emails.address;
//             }
//         }
//         if (!email) {
//             email = options.email;
//         }
//         if (!email) {
//             // if email is not set, there is no way to link it with other accounts
//             return user;
//         }
        
//         // see if any existing user has this email address, otherwise create new
//         var existingUser = Meteor.users.findOne({'emails.address': email});
//         if (!existingUser) {
//             // check for email also in other services
//             var existingGitHubUser = Meteor.users.findOne({'services.github.email': email});
//             var existingGoogleUser = Meteor.users.findOne({'services.google.email': email});
//             var existingTwitterUser = Meteor.users.findOne({'services.twitter.email': email});
//             var existingFacebookUser = Meteor.users.findOne({'services.facebook.email': email});
//             var doesntExist = !existingGitHubUser && !existingGoogleUser && !existingTwitterUser && !existingFacebookUser;
//             if (doesntExist) {
//                 // return the user as it came, because there he doesn't exist in the DB yet
//                 return user;
//             } else {
//                 existingUser = existingGitHubUser || existingGoogleUser || existingTwitterUser || existingFacebookUser;
//                 if (existingUser) {
//                     if (user.emails) {
//                         // user is signing in by email, we need to set it to the existing user
//                         existingUser.emails = user.emails;
//                     }
//                 }
//             }
//         }
 
//         // precaution, these will exist from accounts-password if used
//         if (!existingUser.services) {
//             existingUser.services = { resume: { loginTokens: [] }};
//         }
 
//         // copy accross new service info
//         existingUser.services[service] = user.services[service];
//         existingUser.services.resume.loginTokens.push(
//             user.services.resume.loginTokens[0]
//         );
 
//         // even worse hackery
//         Meteor.users.remove({_id: existingUser._id}); // remove existing record
//         return existingUser;                  // record is re-inserted
//     }
// });
}
App.accountsAll = accountsAll;

function convertGuestToUser(previousClientId,currentClientId){
    // guestFYoE54WiRusyuPzCa
    // 487690035
    if(previousClientId && currentClientId){
         if(!previousClientId.match("guest"))
             return;
     }
     else{
         return; 
     }
    var cursor = null;
        // cursor = Recommend.find({"followid":id});
        // cursor.forEach(function(data){
        //     Recommend.update({"_id":data._id},{$set :{"profile_picture":profile_picture}});
        // })
        var profile_picture = null;
        var username = null;

        var user = App.getUser(currentClientId);
        if(user){
            profile_picture = user.services.instagram.picture;
            username = user.services.instagram.username;
        }
        cursor = Feed.find({"userid":previousClientId});
        cursor.forEach(function(data){
            Feed.update({"_id":data._id},{$set :{"userid":currentClientId}});
        });

        cursor = Feed.find({"whoid":previousClientId});
        cursor.forEach(function(data){
            Feed.update({"_id":data._id},{$set :{"whoid":currentClientId,"who":profile_picture,"whousername":username}});
        });

        cursor = Feed.find({"clientid":previousClientId});
        cursor.forEach(function(data){
            Feed.update({"_id":data._id},{$set :{"followid":currentClientId,"profile_picture":profile_picture,"followusername":username}});
        });
        cursor = Feed.find({"followid":previousClientId});
        cursor.forEach(function(data){
            Feed.update({"_id":data._id},{$set :{"followid":currentClientId,"profile_picture":profile_picture,"followusername":username}});
        });
        
        cursor = Votes.find({"followid":previousClientId});
        cursor.forEach(function(data){
            Votes.update({"_id":data._id},{$set :{"profile_picture":profile_picture,"followid":currentClientId}});
        });
        
        // remove my follows
        cursor = Follows.find({"userid":previousClientId});
        cursor.forEach(function(data){
            Follows.remove({"_id":data._id});
        });
        // remove other user follows
        cursor = Follows.find({"followid":previousClientId});
        cursor.forEach(function(data){
            Follows.remove({"_id":data._id});
        });
        Me.remove({"_id":previousClientId});
}
App.convertGuestToUser = convertGuestToUser;

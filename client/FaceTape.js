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

// DebugFace = true; //checkpoint debug
if(window["App"] === undefined)
    App = {};

// Modify some core package






// Reload package
modifyReload();
var providers = [];
function modifyReload(){
    var reloading = false;                                                                       // 117
Package.reload.Reload._reload = function () {                                                               // 118
    if (reloading)                                                                             // 119
        return;                                                                                  // 120
    reloading = true;                                                                          // 121
                                                                                             // 122
    var tryReload = function () {};                                                                                     // 155
                                                                                             // 156
    tryReload();                                                                               // 157
};
}
// Reload ends


// Live Data Start
// Package.livedata.LivedataTest.ClientStream = function (url, options) {
   
//     url = "ddp+sockjs://ddp--****-youtap.meteor.com/sockjs";                                                             // 4
//   var self = this;  
//   self._lostConnection();                                                                                              // 5
//   self.options = _.extend({                                                                                       // 6
//     retry: true                                                                                                   // 7
//   }, options);                                                                                                    // 8
//   self._initCommon();                                                                                             
//   self.HEARTBEAT_TIMEOUT = 60000;                                                                                 // 21
//                                                                                                                   // 22
//   self.rawUrl = url;                                                                                              // 23
//   self.socket = null;                                                                                             // 24
//                                                                                                                   // 25
//   self.heartbeatTimer = null;                                                                                     
//   if (typeof window !== 'undefined' && window.addEventListener)                                                   // 30
//     window.addEventListener("online", _.bind(self._online, self),                                                 // 31
//                             false /* useCapture. make FF3.6 happy. */);                                           // 32
//                                                                                                                   // 33
//   //// Kickoff!                                                                                                   // 34
//   self._launchConnection();                                                                                       // 35
// }; 
// // Package.livedata.LivedataTest.ClientStream();

// Package.livedata.LivedataTest.ClientStream("ddp+sockjs://ddp--****-youtap.meteor.com/sockjs",{"retry":true})
// Live Data Ends
// Core Ends

//// Routers
// var mainSurvey = null;
// function routingFunction(clientid){
//     Meteor.subscribe("me",clientid);  
//     Meteor.subscribe("onerecent",clientid);
//     Meteor.subscribe("onefeed",clientid);
//     Meteor.subscribe("votesimgs",clientid);
//     // $("body").css({"overflow-y": "scroll"});
//     Session.set("profile",clientid);
// }
var emailAuthFlag = false;
Router.map(function () {
    
    this.route('home', {
        path: '/',
        template: 'body'
    });

    this.route('index', {
        path: '/verifyHashEmail/:emailtoken',
        template: 'body',
        data : function (){
            var emailtoken = this.params.emailtoken;
            emailAuthFlag = emailtoken;
            window.localStorage.setItem("clientid","");
        }

    }); 
    
    this.route('index', {
        path: '/index.html',
        template: 'body'
    });  
    this.route('index', {
        path: '/*',
        template: 'body'
    }); 
     
});

function set(key,value){
    return window.localStorage.setItem(key,value);
}
window.set = set;
function get(key){
    return window.localStorage.getItem(key);
}
window.get = get;
function bug() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
App.bug = bug;
//// routers 




// //// initialization

var ClientId = null;
ClientId = null;

GlobalError = null;

// Likes = new Meteor.Collection("likes");
Follows = new Meteor.Collection("follows");
// Recents = new Meteor.Collection("recents");
// Recommend = new Meteor.Collection("likesonpictures");
Me = new Meteor.Collection("myself");
Votes = new Meteor.Collection("votes");
// Comments = new Meteor.Collection("comments");
// Popular = new Meteor.Collection("popular");
// GlobalFeed = new Meteor.Collection("globalfeed");
Media =  new Meteor.Collection("media");

//Testing
Feed =  new Meteor.Collection("feed");
// GroundDB(Feed);
// Search = new Meteor.Collection("search");
SponserKeyword = new Meteor.Collection("sponserkeyword");
ErrorUpdate = new Meteor.Collection("error");
// MiniGame = new Meteor.Collection("minigame");
TapmateNotification = new Meteor.Collection("notification");
UsersVote = new Meteor.Collection("usersvote");
// Chat = new Meteor.Collection("chat");
// FollowsGroup =  new Meteor.Collection("followsgroup");
UserSession =  new Meteor.Collection("usersession");
// GroupVoteRecommend = new Meteor.Collection("groupvoterecommend");
MethodTimer = new Meteor.Collection("methodtimer");

HashKeyword  = new Meteor.Collection("hashkeyword");
HashComment  = new Meteor.Collection("hashcomment");
UserHashMania =  new Meteor.Collection("hashmania");
HashHistory  = new Meteor.Collection("hashhistory");

// Feed =  new Meteor.SmartCollection("feed");
// Likes = new Meteor.SmartCollection("likes");
// Follows = new Meteor.SmartCollection("follows");
// Recents = new Meteor.SmartCollection("recents");
// Recommend = new Meteor.SmartCollection("likesonpictures");
// Me = new Meteor.SmartCollection("myself");
// Votes = new Meteor.SmartCollection("votes");
// Comments = new Meteor.SmartCollection("comments");
// Popular = new Meteor.SmartCollection("popular");
// GlobalFeed = new Meteor.SmartCollection("globalfeed");
// Media =  new Meteor.SmartCollection("media");
// Search = new Meteor.SmartCollection("search");
// SponserKeyword = new Meteor.SmartCollection("sponserkeyword");
// ErrorUpdate = new Meteor.SmartCollection("error");

// MiniGame = new Meteor.SmartCollection("minigame");
// TapmateNotification = new Meteor.SmartCollection("notification");
// UsersVote = new Meteor.SmartCollection("usersvote");
// Chat = new Meteor.SmartCollection("chat");
// FollowsGroup =  new Meteor.SmartCollection("followsgroup");
// UserSession =  new Meteor.SmartCollection("usersession");
// GroupVoteRecommend = new Meteor.SmartCollection("groupvoterecommend");

// Likes = new GroundDB("likes");
// Follows = new GroundDB("follows");
// Recents = new GroundDB("recents");
// Recommend = new GroundDB("likesonpictures");
// Me = new GroundDB("myself");
// Votes = new GroundDB("votes");
// Comments = new GroundDB("comments");
// Popular = new GroundDB("popular");
// GlobalFeed = new GroundDB("globalfeed");
// Media =  new GroundDB("media");
// Search = new GroundDB("search");
// SponserKeyword = new GroundDB("sponserkeyword");
// ErrorUpdate = new GroundDB("error");
// MiniGame = new GroundDB("minigame");
// TapmateNotification = new GroundDB("notification");
// UsersVote = new GroundDB("usersvote");
// Chat = new GroundDB("chat");


//// suscribe ////

Meteor.suscribeMeteor = suscribeMeteor;

function suscribeMeteor(ClientId){
    Meteor.subscribe("keyword");
    Meteor.subscribe("leadersboard");
}
////chat feature/////////
// Deps.autorun(function(){
//     if(Session.get("chatid"))
//     Meteor.subscribe("chat",Session.get("clientid"),Session.get("chatid"));   
// })

//// All for the Admin but now no need of it //// 
function suscribeAll(){
    return;
    Meteor.subscribe("follows",-2);
    Meteor.subscribe("me",-2);
    // Meteor.subscribe("likes",-2);
    // Meteor.subscribe("recents",-2);
    // Meteor.subscribe("recommfeed",-2);  
    Meteor.subscribe("recomm",-2);
    Meteor.subscribe("commentsent", -2);
    // Meteor.subscribe("followsgroup", Session.get("clientid"));
    // Meteor.subscribe("error");
    // Meteor.subscribe("popular", Session.get("clientid")); 
    // Meteor.subscribe("globalfeed", Session.get("clientid"));
    // Meteor.subscribe("search", Session.get("clientid"));
}

if(typeof GroundDB == "function"){
    // GroundDB(Likes);
    // GroundDB(Follows);
    // GroundDB(Recents);
    // GroundDB(Recommend);
    // GroundDB(Me);
    // GroundDB(Comments);
    // GroundDB(Popular);

    // GroundDB(Votes);
    // GroundDB(GlobalFeed);
    // GroundDB(SponserKeyword);
    // GroundDB(ErrorUpdate);

   // GroundDB.ready = function(){
   //      console.log("GroundDB.ready");
   //      console.log(groundDBReadyCount);
   //      groundDBReadyCount++;

   //      if(groundDBReadyCount == 10){
   //          groundDBReadyCount=0;
   //          stopFirstTimeLoader("logout");
            
   //      }
   // } 
   // GroundDB.now();
}
// variable
var hideVotes = null;
var hideComments = null;
var newRenderResults = [];
var moreRenderResults = [];
var cursor = null;
var likeTimeOutId = null,followTimeOutId = null,commentTimeOutId=null;
var Child = null;
var swipeClone = null;
var bigClone = null;
var problemLoginCount = 0;
var firstTimeLoginFlag = true;
var tutorialFlag = false;
var tapOnFeedFlag = false;
var foreground = true;
var countDownMins = 0;
var countDownHours = 0;
var countDownSecs = 0;
var countDownTimeoutId = null;
var loaderErrorTimeoutId = null;
var firstTimeLoginInterval = null;
var fristTimeLoaderCount = 0;
var groundDBReadyCount = 10;
var state = null;
var onResumeMessageBucket = null;
var deviceType=null;
var i18n = null;
var firstTimeConnectionFlag = true;
var cacheFlag = false;
var SessionstartTime=null;
var SessionEndTime=null;
var flagVoteorRec=false;
var currentMoveVote=null;
var currentMoveRecc=null;
var tutorialJSON = {};
var bigsurveyHeight= null;
var scrollTop=100;
var timeoutfeeds=null;
var feedWidth = null;
var taponfollows=null;
var actionArray = [];
var tapCount=0;
var CLIENTID = null;
var leaderRanking = [];
var topTenLeaderRanking = [];
// var imageQuality = "low";
preload = {};

// new architec
var newLoad = [];
var prevLoad = [];
var curLoad = [];
var pageCount = -1;

if (Meteor.isClient) {
    ///Session Variables
    Session.set("activeFollows",null);
    Session.set("followFollow",null);
    // Session.set("currentBig",null);
    Session.set("username","");
    Session.set("orientation",true);
    Session.set("searchByFollow","0-50");
    Session.set("searchKeyword",null);
    Session.set("userid",null);
    Session.set("group",null);
    Session.set("imageQuality","low"); 
    var activeFollowsElement = null;
    Session.set("limit",8);
    var isActiveArray = [];
    var activeAnimation = false; 
    var followSelectPosition = 0;
  function loginOnceReady(){
      try{
          // state = window.localStorage.getItem("state");
          // alert(state);
          clientid = window.localStorage.getItem("clientid");
      
          //console.log(state);
          //console.log(clientid);
          if(state){
              // loginOnceStateReady(state,loginWithInstagramCallbackFunction);
              // window.localStorage.setItem("state","");
              state();
          }
          if(state || clientid){        
                
          }else{
              preLoginAction();
              Meteor.loginWithInstagram({requestPermissions:"basic",requestOfflineToken:true},loginWithInstagramCallbackFunction); 
          }
      
          
      }
      catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"date": new Date(),"side":"client","function" : "loginOnceReady"});
      }
  }    



Meteor.startup(function () {    
    try{
        var phonegap = window.localStorage.getItem("phonegap"); 
        if(phonegap == true){
            Session.set("phonegap",true);
        }
        else{
            Session.set("phonegap",false);
        }
        Session.set("clientid",null);
        
        //Session.set("clientid",insert.myid);

        Deps.autorun(function(){
            try{
                if(Session.get("clientid")){
                    $("#loginScreen").hide();
                    $("#Main").show();
                    $("#currentFollow").show();
                    //if(App.setAdminParameters())
                      //App.setAdminParameters();

                    fitTextFunction();
                }
                else{
                    $("#loginScreen").show();
                    $("#seErrorLogin").removeClass("ui error message").addClass("ui ignored warning message");
                    $("#errorMessage").text("Enter username and password.")
                    $("#seErrorLogin").css("display","block");
                    $("#Main").hide();
                }
            }
              catch(error){
                console.log(error);
                ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "clientid.autorun"});
              } 
        });

        // Deps.autorun(function () {
        //     try{
        //         actionArray = [];
        //         Meteor.subscribe("votes",Session.get("currentBig"));
        //         Meteor.subscribe("media", Session.get("currentBig"));
                
        //         // Meteor.subscribe("commentreceive",Session.get("currentBig"));
        //         Meteor.subscribe("recomm",Session.get("currentBig"),Session.get("clientid"));
        //         Meteor.subscribe("recommtwo",Session.get("currentBig"),Session.get("clientid"));
        //         Meteor.subscribe("groupvoterecommend",Session.get("clientid"),Session.get("currentBig"));
        //     }
        //     catch(error){
        //         console.log(error);
        //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "currentBig.autorun"});
        //     }
            
        // });
        document.addEventListener("deviceready",function(){
            try{
                Session.set("phonegap",true);
                window.localStorage.setItem("phonegap",true);
                document.addEventListener("pause", onPause, false);
                document.addEventListener("resume", onResume, false);
                document.addEventListener("online", onOnline, false);
                // hideLoader();
                //console.log("loader hidden");  
                // temporary base to test guest user
                // loginOnceReady();
                // autoLogin();
                pushId = window.localStorage.getItem("pushid");
                // if(!pushId){
                    checkForPush();
                // }
                Me.update({"_id":Session.get("clientid")},{$inc:{"autologin":1,"yautologin":1,"mautologin":1,"wautologin":1,"dautologin":1}});
            }
            catch(error){
                console.log(error);
                ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "deviceready"});
            }
        },false);    
    
        
        }
        catch(error){
            console.log(error);
            ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "startup"});
        }
 
});

Template.bodystatic.rendered = function(){
    documentReady();
}

Template.loginWithInstagram.rendered = function(){
    $("#loginButton,#loginwithInsta").hammer().off("tap",clickOnLoginButton);
    $("#loginButton,#loginwithInsta").hammer().on("tap",clickOnLoginButton);

    // $("#loginWithAppButton").hammer().off("tap",onLoginWithApp);
    // $("#loginWithAppButton").hammer().on("tap",onLoginWithApp);

    // $("#signupWithAppButton").hammer().off("tap",onLoginWithApp);
    // $("#signupWithAppButton").hammer().on("tap",onLoginWithApp);

    $("#seLoginThankyou").hammer().off("tap",Login.onLoginWithTapmate);
    $("#seLoginThankyou").hammer().on("tap",Login.onLoginWithTapmate);

    $("#seSignup").hammer().off("tap",Login.onSignUpWithTapmate);
    $("#seSignup").hammer().on("tap",Login.onSignUpWithTapmate);

    $("#seLoginLogin").hammer().off("tap",Login.onLoginWithHashRepublic);
    $("#seLoginLogin").hammer().on("tap",Login.onLoginWithHashRepublic);

    if(emailAuthFlag){
        $(".emailClass").hide();
        $(".passwordClass").show();

        showSpecialPopup("thankyou");        

        $("#seSignup").hide();
        $("#seLogin").show();
        
        $("#seError").show();
        $("#seError div").html("Enter a new password");
        $("#loginsignupform").css("display","none");
    }
    // $("#loginWithAppButton").hammer().off("tap",onLoginWithApp);   
    // $("#signupButton").hammer().off("tap",onLoginWithAppButton);
    // $("#signupWithAppButton").hammer().off("tap",onSignupWithAppButton);
    // $("#loginWithAppCancelButton").hammer().off("tap",hideLoginForm);

    // $("#loginWithAppButton").hammer().on("tap",onLoginWithApp);   
    // $("#signupButton").hammer().on("tap",onLoginWithAppButton);
    // $("#signupWithAppButton").hammer().on("tap",onSignupWithAppButton);
    // $("#loginWithAppCancelButton").hammer().on("tap",hideLoginForm);
}

function showSpecialPopup(id){
    console.log("show " +id)
    $("#"+id).show();
    $("#"+$("#"+id).attr("ref")).show();
}
function hideSpecialPopup(id){
    console.log("hide " +id)
    $("#"+id).hide();
    $("#"+$("#"+id).attr("ref")).hide();
}
var previousid = null;
function preLoginAction(){
    // return for now...
    return true;
    set("clientid","");
    if(Meteor.user()){
        previousid = Meteor.user()._id;
        set("previousid",previousid);
    }
    // console.log(previousid);
}
function postLoginAction(){
    // console.log(previousid);
    checkForPush();
    Meteor.call("tryToMerge",previousid,function(err,data){
        // console.log(err);
        // console.log(data);
    });
}

function commonClose(err,data){
                if(data){                    
                    alert("Thanks! Now return to the app.");
                    window.close();
                }
                else{
                    alert("something's not right")
                }
            }
function welcomeAlertPopup(){
    var welcomeflag = get("welcomeAlert");
    console.log(welcomeflag);
    if(!welcomeflag){
        $("#welcomePopUp").show();
        $("#welcomePopUpBackground").show();
    }
}

function convertEmail(email){

    email = email.toLowerCase();
    var finalEmail = "";
    var ch = null;
    for(var i=0,il=email.length;i<il;i++){
        ch = email.charAt(i);
        if(ch != " ")
        finalEmail+= ch
    }
    return finalEmail;
}
function showLoginErrorMessage(message){
    $("#errorMessage").html(message);
    $("#seError").css("display","block");
}
function loginWithTapmateCallbackFunction(err){
    if(err){
        // console.log(err);
        showLoginErrorMessage(err.reason)
        
    }else{
        set("clientid",TapmateUser);
        $("#welcomePopUp").show();
        $("#welcomePopUpBackground").show();
        autoLogin();
    }
}
function getRankLeader(clientid){
    for(var i=0,il=leaderRanking.length;i<il;i++){
        if(leaderRanking[i] == clientid)
            return il - i;
    }
    return 1;
}
function getTopTenLeader(){
    // console.log(leaderRanking)
    topTenLeaderRanking = []
    for(var i=0;i<leaderRanking.length && i<10;i++){
        // console.log(leaderRanking[i])
        topTenLeaderRanking.push(leaderRanking[i]);

    }
}
window.fbAsyncInit = function() {
    FB.init({
      appId      : '679347035440335',
      status     : true,
      xfbml      : true
    });
  };
function documentReady(){

            // autoLogin();
            // iphone 3gs unable to scroll issue
            // $("body").on("touchmove",function(event){
            //     event.preventDefault();
            // });        
            // $("#loginScreen").show();
            $("#Main").hide();

            // an attempt to prevent an error occuring on startup
            

            pushNotifiPopup(pushpic,pushmsg,pushlkid,pushKeyword);
            
            setTimeout(snapy,50);
            setTimeout(autoLogin,60);
            setTimeout(bindEvents,70);
            // setTimeout(onGroupButton,80);
            setTimeout(startSession,90);
            setTimeout(checkdevice,100);
            setTimeout(checkOptimized,110);
            setTimeout(location,120);
            // setTimeout(defaultfeeds,150);
            setTimeout(showKeywordPopup,250);
            setTimeout(checkVotesAndCommetsStatus,250);
            suscribeMeteor();
            restoreData();
            
            Meteor.call("leaderRanking",CLIENTID,function(err,data){
                if(data){
                    leaderRanking = data;
                    getTopTenLeader();
                }

            });

            // this might cause lagg issue.
            setTimeout(getDefaultData,240000);
            callHashRepublicStartUp();
            // snapy();  
            // autoLogin();
            // bindEvents();
            // onGroupButton();
            // startSession();
            // //bindLanguage();   
            // checkdevice();
            // checkOptimized();
            // location();

            //$("#nextInstruction").hammer().on("tap",nextInstruction);
            $("#semanticLoader").hide();
        // onStartWalkthrou();
        // window.fbAsyncInit = function() {
        // FB.init({
        //     appId      : '{your-app-id}',
        //     xfbml      : true,
        //     version    : 'v2.0'
        //     });
        // };

        // (function(d, s, id){
        //     var js, fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) {return;}
        //     js = d.createElement(s); js.id = id;
        //     js.src = "//connect.facebook.net/en_US/sdk.js";
        //     fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));
}
// https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.ted.com%2Ftalks%2Fbill_and_melinda_gates_why_giving_away_our_wealth_has_been_the_most_satisfying_thing_we_ve_done
Meteor.documentReady = documentReady; 
 
    Template.Section1.events({
        "error .recentIcons img" : function(event){
            // console.log(event);
            // console.log(this);
            // HTTP.call("GET", this.profile_picture,function(first,second){
            //     //console.log(first);
            //     //console.log(second)
            // });
            removeCursor(this._id)
            $(event.currentTarget).attr("src","images/face.jpg");            
        }
        
    });
    // Template.Section2.events({
    //     "error .followsIcons img" : function(event){
    //         // console.log(event);
    //         // console.log(this);
    //         // HTTP.call("GET", this.profile_picture,function(first,second){
    //         //     //console.log(first);
    //         //     //console.log(second)
    //         // });
    //         Meteor.call("checkWithServer",this);
    //         $(event.currentTarget).attr("src","images/face.jpg");            
    //     },
    //     "error .groupicons img" : function(event){
    //         $(event.currentTarget).attr("src","images/face.jpg");            
    //     },
    //     "error .groupImages img" : function(event){
    //         $(event.currentTarget).attr("src","images/face.jpg");            
    //     }
    // });
    // Template.userfeed.events({
    //     "error .userfeed img" : function(event){
    //         // console.log(this.low);
    //         if(Meteor.status().connected)
    //             UsersVote.remove({"_id":this._id});
    //     }
    // });
    // Template.Section3.events({
    //     "error .recommendImages img" : function(event){
    //         // console.log(this.low);
    //         if(Meteor.status().connected)
    //             removeCursor(this._id);            
    //     },
    //     "error .feed img" : function(event){
    //         // console.log(event);
    //         if(Meteor.status().connected)
    //             removeCursor(this._id);   
    //     }
    // });
    function removeEvents(event){
        // console.log(event);
        if(Meteor.status().connected)
            removeCursor(this._id);   
    }
    // var eventJson = {
    //     "error .feed img" : removeEvents
    // };
    // Template.onetwo.events(eventJson);
    // Template.preload.events(eventJson);
    // Template.onethree.events(eventJson);
    // Template.onefeed.events(eventJson);
    // Template.oneglobal.events(eventJson);
    // Template.onepopular.events(eventJson);
    // Template.onehash.events(eventJson);

    
    // Template.Section4.events({
    //     "error .voting img,.sender img,.receiver img" : function(event){
    //         // console.log(event);
    //         $(event.currentTarget).attr("src","images/face.jpg");            
    //     }
    // })

    
    // Template.groupvote.rendered = function(){
        
    //     $(".grouping").each(function(index,element){
    //         var groupImage = $(element).children("img");
    //         for(var i=0,il=groupImage.length;i<il;i++){
    //             $(groupImage[i]).css("left",i*20 +"px");
    //         }
    //     })
    //     VoteEnd =   new Date().getTime();
    // }
    // Template.header.rendered = function(){
    //     setTimeout(checkScoreToast,1000);
    // }
    Template.server.rendered = function(){
        $("#status").hammer().off("tap");
        $("#status").hammer().on("tap",tapOnConnection);
        ErrorUpdate.insert({"error":Meteor.status().connected,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.server.rendered"});
        //showKeywordPopup()
    }
    Template.Section1.rendered = function(){
        try{
            $(".recentIcons").hammer().off("tap");
            $(".recentIcons").hammer().on("tap",tapOnRecentIcons);
        }
        catch(error){
            console.log(error);
            ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.Section1.rendered"});
        }
    }

    // Template.Section2.rendered = function(){
    //     try{
    //         // console.log("Section2.rendered");
    //         $(".followsIcons").hammer().off("tap",tapOnFollowsIcons);
    //         $(".followsIcons").hammer().on("tap",tapOnFollowsIcons);
            
    //         $(".followsgroup").hammer().off("tap",tapOnFollowsIcons);

    //         $(".followsIcons").hammer().off("doubletap",doubletapOnFollowsIcons);
    //         $(".followsIcons").hammer().on("doubletap",doubletapOnFollowsIcons);

    //         $(".followsIcons").hammer().off("hold",holdOnFollowsIcons);
    //         $(".followsIcons").hammer().on("hold",holdOnFollowsIcons);

    //         $("#currentFollow").hammer().off("tap",openCloseFollows);
    //         $("#currentFollow").hammer().on("tap",openCloseFollows);

    //         $("#currentFollowWrapper").hammer().off("tap",openCloseFollows);
    //         $("#currentFollowWrapper").hammer().on("tap",openCloseFollows);

    //         $("#section2").unbind("touchstart,touchmove");
    //         touchScroll("section2");            

    //         $("#keyboardButton").hammer().off("tap",tapOnKeyboardButton);
    //         $("#keyboardButton").hammer().on("tap",tapOnKeyboardButton);
            
    //         // $("#section2Label").hammer().off("tap",toggleFollows);
    //         // $("#section2Label").hammer().on("tap",toggleFollows);
            
    //          $("#groupButton").hammer().off("tap",onGroupButton);
    //         $("#groupButton").hammer().on("tap",onGroupButton);
            
            



    //         // instead of doing it again and again we can use dynamic css
    //         // just a concept less processing
    //         var one = $(".extrabutton")[0];
    //         if(one){
    //             var height = $(one).width()-10;            
    //             $(".followsIcons,#addGroup,#atbutton").css({"height":height +"px"});
    //         }
    //         if(Session.get("currentBig")){
    //             var cursorFollowsGroup = FollowsGroup.findOne({"_id":Session.get("activeFollows")});
    //             if(cursorFollowsGroup)
    //                 return;

    //             var makeActive = $(".followsIcons")[followSelectPosition]
    //             if(!makeActive){
    //               followSelectPosition = 0;
    //               makeActive = $(".followsIcons")[0];
    //             }
    //             if(makeActive){
    //               if($(".followsIcons:first").attr("myid") == Session.get("clientid")){
    //                   makeActive = $(".followsIcons")[0];
    //               }
    //                 var activeFollowsId = $(makeActive).attr("myid");                    
    //                 Session.set("activeFollows",activeFollowsId);
    //                 $(".followsIcons").removeClass("active");
    //                 $(makeActive).addClass("active");
    //                 if($(makeActive).length !=0)
    //                 $("#section2").scrollTop($(makeActive).position().top);
    //             }             
    //         }
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.Section2.rendered"});
    //     }
    // }


   /////////////////////////// // Survey starts

    // Template.hashmania.eachBig = function(){
    //     return HashKeyword.find({"keyword":Session.get("keyword")})
    // }
    Template.allLeadersboard.eachlead = function(){
        var sortJson = {sort : {},limit:4};
        // var key = Session.get("keyword");
        var key = "heatScore";
        // console.log("sorting by " +key)
        sortJson.sort[key] = -1
        return UserHashMania.find({},sortJson)
    }
    
    sizeLeaderboard = function(){
        console.log("Template.allLeadersboard");
        $(".leadersface").width($(".leadersface").height());
    }
    Template.allLeadersboard.rendered  = Template.leadersboard.rendered = sizeLeaderboard
    Template.allLeadersboard.events({
        "click .leadersface" : function(event){
            if(this.instagramUsername)
            window.open("http://instagram.com/"+this.instagramUsername,"_system");
            else
                toast("Not a instagram user.");
        }
    });
    // Template.leadersboard.helpers({
    //     "inside" : function(context,data){
    //         if(this[Session.get("keyword")])
    //             return true;
    //         else
    //             return false;
    //     }
    // });
    Template.leadersboard.eachlead = function(){
        var sortJson = {sort : {},limit:4};
        var key = Session.get("keyword");
        var result = [];
        // key = "heatScore";
        // console.log("sorting by " +key)
        sortJson.sort[key] = -1
        UserHashMania.find({},sortJson).forEach(function(data){
            if(data[key]){
                data.customScore = data[key];
                result.push(data);
            }
        });

        return result;
    }
    Template.leadersboard.events({
        "click .leadersface" : function(event){
            if(this.instagramUsername)
            window.open("http://instagram.com/"+this.instagramUsername,"_system");
            else
                toast("Not a instagram user.");
        }
    });
    Template.BeforeLogin.keyword = function(){
        return Session.get("keyword");
    }
    Template.hashmania.rendered = function(){
            if(firstTimeLoginFlag){
                currentSurveyBig = $(".bigFeed:first");
                firstTimeLoginFlag = false;
            }
            
            // $(".hashFeed").hammer().off("tap");  
            // $(".hashFeed").hammer().on("tap",tapOnBigFeedSurvey);

            // onclickopencloseSurvey(null,true);
            // if(snapTopFlag){
            //     $("#surveybighandle").css({"top":"89%","background": "black","opacity": "1.0"});
            //     $("#surveybig").css({"top":"92%"});
            //     $(".hashKeyword").css({"display":"none"});
            //     $('#updownarrow').css({"top": "0%"});
            //     document.getElementById('updownarrow').className = ' huge sort ascending icon';
            // }
            // else{
            //     $("#surveybighandle").css({"top":"7.8%","background": "black","opacity": "0.5"});
            //     $(".hashKeyword").css({"display":"block"});
            //     $("#surveybig").css({"top":"18%"});
            //     $('#updownarrow').css({"top": "25%"});
            //     $('#updownarrow').addClass('huge sort descending icon');
            // }


            // $("#surveybig").hammer().off("tap");
            // $("#surveybig").hammer().on("tap",tapOnSurveyBig);
            
    }
//     var newLoad = [];
// var prevLoad = [];
// var curLoad = [];
// var pageCount = -1;
// var DataBase = [];
    function initDataBase(key){
        if(DataBase[key])
            return false;
        DataBase[key] = {};
        DataBase[key].newLoad = [];
        DataBase[key].curLoad = [];
        DataBase[key].prevLoad = [];
        DataBase[key].pageCount = 0;
        return true;
    }
    function saveCurrentToPrevious(){
        // var key = Session.get("keyword");
        // DataBase[key].prevLoad = DataBase[key].curLoad;
    }
    function preRenderResults(){
        $("#surveybighandle").hammer().off("tap");
        $("#surveybighandle").hammer().on("tap",onclickopencloseSurvey);
    }
    var totalData=0;
    function checkscroll()
    {
        var x,y;
        x=$("#surveybig").scrollTop();
        y=$("#surveybighandle").scrollTop()
        if(x==0 && y<50){
            $(".leaderSection").show();
        }else{
            $(".leaderSection").hide();
        }
        // 
        // console.log(x)
        // var y=$(".hashFeed img").height();
        // var z=parseInt(x/y);
        // $("#totalimages").html('<i class="level up icon">'+(z+1)+'</i>');                  
                 
        // var z=parseInt(x/y)+2;
        // var c=totalData-z;

        // // if(c>0)
        // $("#toComeimages").html('<i class="level down icon">'+c+'</i>');
        // // $(".tapToShow").hide();
        // $('.tapToShow').show();

        // if ($("#surveybig").scrollTop() > 300) {
        //     $('.leaderSection').hide();
        // } else {
        //     $('.leaderSection').show();
        // }    

    }
    
    function renderResults(data,loadMoreFlag,newerFlag,keywordArg){
        // if(keywordArg != Session.get("keyword")){
        //     console.log("Getting old data");
        //     return;
        // }
        console.log("load more " +loadMoreFlag);
        console.log(data)
        if(!data){
            // $("#semanticLoader").hide();
            return;
        }
        var clientid = Session.get("clientid");
        $(".loading").show();
        if($("#surveybig").length == 0 && clientid == null && clientid == undefined){
            setTimeout(function(){renderResults(data,loadMoreFlag,newerFlag,keywordArg)},250);
            return;
        }
        console.log(clientid +" client o renderResults")
        console.log(keywordArg +" keyword o renderResults")
        if(!loadMoreFlag){
            $("#surveybig").html("");
            cacheData(data);
            
            // prevLoad = curLoad;
            // curLoad = data;
            data = divOldNew(data);

        }
        else{
            
        }
        var button = null;
        var newElement = null;
        var currentData = null;
        var showFlag = false;
        var upp=null;

        // $(".tapToShow").remove();
        // upp ='<div id="back-top" class="tapToShow">new</div>'                  // New Images
        // var element = $("#surveybig").append(upp);
        // var totalimages=0;

        // // $("#totalimages").remove();
        // var tot ='<div id="totalimages" class="tapToShow">up</div>'     // up total images
        // var element = $("#surveybig").append(tot);
        // var toComeimages=0;

        // // $("#toComeimages").remove();
        // var tot ='<div id="toComeimages" class="tapToShow">dow</div>'      //down total images
        // var element = $("#surveybig").append(tot);
        
        // $(".tapToShow").style.display = 'none';
        // $("#surveybig").hammer().off("touch",$('.tapToShow').hide());
        // $("#surzveybig").hammer().on("touch",checkscroll);
        
        // console.log(topTenLeaderRanking)
        // console.log(Session.get("clientid"));
        for(var i=0,il=data.length;i<il;i++){
            showFlag = false;
            currentData = data[i];
            // console.log(currentData.keyword.std)
            if(!currentData)
                continue;
            if(!currentData.keyword)
                continue;
            var resolution = Session.get("imageQuality");
            if(currentData.keyword.hide){
                if(topTenLeaderRanking.indexOf(clientid)==-1){
                    // console.log("not top");
                    newElement = '<div id="' +currentData.keyword.likeid +'"class="hashFeed" likeid="' +currentData.keyword.likeid +'"  link="' + currentData.keyword.link +'">' 
                    +'<img class="lowImg" src="' +currentData.keyword[resolution] +'" style="display: none;">'
                }else{
                    // console.log("its top");
                    newElement = '<div id="' +currentData.keyword.likeid +'"class="hashFeed" likeid="' +currentData.keyword.likeid +'"  link="' + currentData.keyword.link +'" style="opacity: 0.5;">' 
                    +'<img class="lowImg" src="' +currentData.keyword[resolution] +'">'
                }
                    
            }else{
                    // console.log("not working");
                    newElement = '<div id="' +currentData.keyword.likeid +'"class="hashFeed" likeid="' +currentData.keyword.likeid +'"  link="' + currentData.keyword.link +'">' 
                    +'<img class="lowImg" src="' +currentData.keyword[resolution] +'">'
            }
                newElement +='<div class="quadrant" id="' +currentData.keyword.likeid +'">'
                +'<div id="hprogressBar" class="ui failed progress"><div></div><hr style="height:2px;width:100%;margin-bottom:-8px;padding:0px;margin-top: 0px;border-top-width: 0px;"></div>'
                +'<div id="inerhprogressBar">'
                +'<i class="big bullhorn icon" style="margin-left: 0px"></i></div>'
                +'<div id="outer" class="ui warning progress">'
                +'<div class="inner"  id="verticalprogress"></div> <hr style="height:100%;width:2px;margin-bottom:-8px;padding:0px;">'
                +'</div>'
                +'<div id="inner-inner"><i class="big thumbs up icon" style="margin-left: 0px;"></i></div>'   
                +'</div>'
                // newElement = '<div id="' +currentData.keyword.likeid +'"class="hashFeed" likeid="' +currentData.keyword.likeid +'"  link="' + currentData.keyword.link +' style="opacity: 0.5;">' 
                //     +'<img class="lowImg" src="' +currentData.keyword[resolution] +'">'
                // +'<img class="stdImg" src="' +currentData.keyword.std +'">'
                //     +'<div class="ui tertiary form segment">'
                //     +'<div class="commentWrapper">';
                //         for(var k=0,kl=currentData.comments.length;k<kl;k++){
                //             // console.log(currentData.comments[k].value.length)
                //             if(currentData.comments[k].value.length !=0)
                //             newElement +='<h4 class="ui header"><mark>'+currentData.comments[k].value +'</mark></h4>'                         
                //         }
                //     newElement += '</div>'
                //       +'<div class="field" likeid="' +currentData.keyword.likeid +'">'
                //         +'<div class="ui right labeled icon input submitComment">'
                //           +'<i class="comment icon"></i>'
                //           +'<input id="entercomment" type="text" placeholder="comment">'
                //         +'</div>'
                //         //+'<div class="ui blue submit button submitComment" id="submitComment">Comment Submit</div>'
                //       +'</div>'                  
                //     +'</div>'           
                // +'</div>'
            if(newerFlag){
                var element = $("#surveybig").prepend(newElement);
                setTimeout(surveyUp,1500);
            }else{
                var element = $("#surveybig").append(newElement); 
            }
            for(j=0,jl=currentData.votes.length;j<jl;j++){
                // console.log(currentData.votes[j].followid +" " +Session.get("clientid") +" " +(currentData.votes[j].followid == Session.get("clientid")))
                if(currentData.votes[j].followid == clientid){
                    showFlag = true;
                }
                
                appendVotesManuallyHash(currentData.keyword.likeid,currentData.votes[j])
            }
            $("#"+currentData.keyword.likeid).children(".tertiary").hide();
            var getVotesStatus = get("hideVotes");
            if(showFlag && getVotesStatus!= "false"){
                $("#"+currentData.keyword.likeid).children(".voting").show()
                $("#"+currentData.keyword.likeid).children(".tertiary").show();
            }
        }
        // $(".loadmore").remove();
        // button ='<a class="ui button hover loadmore" id="loadMoreImg" style=" color:white; background-color: rgb(80, 90, 122);" >   Old  </a>';//&#8609; MORE  &#8609;
        // var element = $("#surveybig").append(button);

        $(".hashFeed").hammer().off("tap");  
        $(".hashFeed").hammer().on("tap",tapOnBigFeedSurvey);

        $(".hashFeed img").hammer().off("doubletap");  
        $(".hashFeed img").hammer().on("doubletap",likeOnInstagram);

        $(".hashFeed img").hammer().off("hold",holdOnBigFeedSurvey);
        $(".hashFeed img").hammer().on("hold",holdOnBigFeedSurvey);

        $(".hashFeed img").hammer().off("dragleft swipeleft",onRemoveImage);
        $(".hashFeed img").hammer().on("dragleft swipeleft",onRemoveImage);

        $(".hashFeed img").unbind("error",onImageError)
        $(".hashFeed img").bind("error",onImageError)
        
        $(".submitComment").hammer().off("tap");  
        $(".submitComment").hammer().on("tap",tapOnSubmitComment);

        $("#loadMoreImg").hammer().off("tap");  
        $("#loadMoreImg").hammer().on("tap",tapOnloadMoreImg);

        $(".voting").hammer().off("tap");  
        $(".voting").hammer().on("tap",tapOnVoting);

        $(".voting").hammer().off("hold");  
        $(".voting").hammer().on("hold",holdOnVoting);

        $("#surveybighandle").hammer().off("tap");
        $("#surveybighandle").hammer().on("tap",onclickopencloseSurvey);

       
        $("#NweImageAdded").hammer().off("tap");
        $("#NweImageAdded").hammer().on("tap",surveyNewer);
       
        $("#totalimages").hammer().off("tap");
        $("#totalimages").hammer().on("tap",surveyUp);
       
        $("#toComeimages").hammer().off("tap");
        $("#toComeimages").hammer().on("tap",surveyDown);
        
        // checkscroll();
         
        // $(".tertiary").hide();        

        // $("#semanticLoader").hide();
    }
    function surveyNewer () {
        newImageLogic();
    } 
    function surveyUp() {
        $('#surveybig').animate({scrollTop: 0 }, 10);
    }
    function surveyDown() {
        $('#surveybig').animate({scrollTop: 17000 }, 10);
    }
    function newImageLogic() {
        console.log("newImageLogic");
        $("#NweImageAdded").hide();
        Meteor.call("getNewData",Session.get("keyword"),CLIENTID,function(err,data){
            renderResults(data,true,true);
            $("#NweImageAdded").show();    
                // console.log(data.length)
                totalData=totalData+data.length;
        });
    }
    function onRemoveImage(event){
        if(topTenLeaderRanking.indexOf(Session.get("clientid"))==-1){
            
        }else{
            Meteor.myElement = event.currentTarget;
            var element = $(event.currentTarget).parent(".hashFeed");
            var likeid = element.attr("likeid");
            element.css({"opacity":"0.5"})
            // element.remove();
            // cacheTheResult(likeid,null,null,"delete");
            Meteor.call("removeImage",likeid,function(err,data){});
        }
    }
    function onImageError(event){
        // console.log(event)
        Meteor.myElement = event.currentTarget;
        var element = $(event.currentTarget).parent(".hashFeed");
        var likeid = element.attr("likeid");
        element.remove();
        cacheTheResult(likeid,null,null,"delete");
        Meteor.call("checkImageError",likeid,function(err,data){})
    }
    function cacheData(data){
        preload[Session.get("keyword")] = data;
        console.log("caching");
        console.log(preload);
        cacheEverything();
    }
    function cacheEverything(){
        var data = EJSON.stringify(preload);
        set("search",data);
    }
    function restoreData(){
        var json = get("search");
        if(json)
        preload = EJSON.parse(json);
        console.log("restoring");
        console.log(preload);
        // renderResults(preload);
    }
    function tapOnloadMoreImg(){
        console.log("tapOnloadMoreImg")
        // $("#loadMoreImg").css("display","none");

        var loadMore = [];
        // console.log(moreRenderResults.length);
        var limit = $(".hashFeed").length;
        if(moreRenderResults == 0){
            // Meteor.call("getMoreResult",Session.get("keyword"),CLIENTID,limit,function(err,data){
            //     moreRenderResults = data;
            //     tapOnloadMoreImg();
            // });
        }
        else{
            for(var i=0,il=moreRenderResults.length;i<10;i++){
            loadMore.push(moreRenderResults[i]);
            }
            var tempLoad = [];
            for(var j=10,jl=moreRenderResults.length;j<jl;j++){
                tempLoad.push(moreRenderResults[j]);
            }
            moreRenderResults = tempLoad;
            renderResults(loadMore,true);
        }
        
        
        console.log(moreRenderResults.length);
        
        
    }

    function appendVotesManuallyHash(id,currentVote){
        var local = currentVote;
        //console.log(Session.get("mainSurvey") != local.followid || local.followid == Session.get("clientid"))
        // if(Session.get("mainSurvey") != local.followid || local.followid == Session.get("clientid"))
        $("#"+id).append(getVoteHTMLHash(local.left,local.top - 40,"%",local.profile_picture,local._id,local.followid,local.comment))
    }
    function getVoteHTMLHash(left,top,size,pics,id,clientid,comment){
        if(pics=="undefined")pics="../images/face.jpg";
      if(!comment){
            return '<div class="voting" clientid="' +clientid +'"votingid="' +id +'" style="left : ' +left +size +';top:' +top +size +';"> '
                  +'<img src="' +pics +'">'
                  + '</div>'
          }else{
            if(topTenLeaderRanking.indexOf(clientid)==-1){
                return '<div class="voting" clientid="' +clientid +'"votingid="' +id +'" style="left : ' +left +size +';top:' +top +size +';"> '
                  +'<img src="' +pics +'" style="border-style: inset;">  '  
                  +'<p class="triangle-right" style="top: -100%; left: -100%;">' +comment +'</p>'      
                  +'</div>'
            }else{
                return '<div class="voting" clientid="' +clientid +'"votingid="' +id +'" style="left : ' +left +size +';top:' +top +size +';"> '
                  +'<img src="' +pics +'" style="border-style: inset;">  '  
                  +'<p class="triangle-right" style="top: -100%; left: -100%;display:block;">' +comment +'</p>'      
                  +'</div>'
            }
            
          }
    }
    function appendOnlyVotesManuallyHash(id,currentVote){
        var local = currentVote;
        //console.log(Session.get("mainSurvey") != local.followid || local.followid == Session.get("clientid"))
        // if(Session.get("mainSurvey") != local.followid || local.followid == Session.get("clientid"))
        $("#"+id).append(getOnlyVoteHTMLHash(local.left,local.top - 40,"%",local.profile_picture,local._id,local.followid,local.comment))
    }
    function getOnlyVoteHTMLHash(left,top,size,pics,id,clientid,comment){
        return '<div class="voting" clientid="' +clientid +'"votingid="' +id +'" style="left : ' +left +size +';top:' +top +size +';"> '
                 +' <img src="' +pics +'">  '
                + '</div>'
    }
    function onScore(score,keyword,downClientid){
        var incJson = {"score":score,"heatScore":score};
        var key = Session.get("keyword");
        if(keyword)
            key = keyword;
        if(!downClientid){
            
            if(key){
                incJson[key] = score;
                // increment hits for the keyword too.
                var cursorSponserKeyword = SponserKeyword.findOne({"keyword":key});
                    if(cursorSponserKeyword)
                        SponserKeyword.update({"_id":cursorSponserKeyword._id},{$inc : {"hits":1}});   
            }
            UserHashMania.update({"_id":Session.get("clientid")},{$inc : incJson});
        }else{
            if(key){
                incJson[key] = score;
                // increment hits for the keyword too.
                var cursorSponserKeyword = SponserKeyword.findOne({"keyword":key});
                    if(cursorSponserKeyword)
                        SponserKeyword.update({"_id":cursorSponserKeyword._id},{$inc : {"hits":-1}});   
            }
            UserHashMania.update({"_id":downClientid},{$inc : incJson});
        }
        $("#displayScore").text(score);
        $("#displayScore").css({"opacity":"1.0","top":"46%","display":"block"});
        $("#displayScore").animate({"opacity":"0.0","top":"5%"},2000,"easeOutBounce");
    }
    /*

    <div class="quadrant" id="{{likeid}}">
        <div id="hprogressBar" class="ui failed progress"><div></div><hr style="height:2px;width:100%;margin-bottom:-8px;padding:0px;margin-top: 0px;border-top-width: 0px;"></div>
        <div id="inerhprogressBar">
            <i class='big bullhorn icon' style="margin-left: 0px"></i>
        </div>
        <div id="outer" class="ui warning progress">
            <div class="inner"  id="verticalprogress"></div> <hr style="height:100%;width:2px;margin-bottom:-8px;padding:0px;">
        </div>

        <div id="inner-inner"><i class='big thumbs up icon' style="margin-left: 0px;"></i></div>     
    </div>
    */
    surveyToggleFlag = false;
    function tapOnSurveyBig () {
        if(surveyToggleFlag){
            $("#surveybig").animate({"top":"10%"});
        }
        else{
            $("#surveybig").animate({"top":"90%"});    
        }
        surveyToggleFlag = !surveyToggleFlag;
    }

    Template.srvyvotes.votes = function(){
            try{
                    return Votes.find({"likeid":Session.get("currentBig")});
            }
            catch(error){
                console.log(error);
                ErrorUpdate.insert({"error":error,"date": new Date(),"side":"client","function" : "Template.srvyvotes.votes"});
            }
    }
    function tapOnSubmitComment(event){
        var data = {};
        var date = new Date().getTime();
        var likeid = Session.get("currentBig");
        var input = $(this).parent().find("input");
        var value= input.val();
        if(!value)
            return;
        // console.log(value)
        // console.log(likeid);
        // console.log(value);
        data.likeid =likeid;
        data.clientid = Session.get("clientid");
        data.value = value;
        data.date= date;
        Meteor.myElement = this;
        // console.log($(this).sibling(".commentWrapper"))
        $(this).parent()
                .siblings(".commentWrapper")
                .append('<h4 class="ui header"><mark>'+value +'</mark></h4>');
        // $(".field[likeid='" +likeid+"']").css("display","none");
        HashComment.insert(data);
        input.val("");
        onScore(10);
    }
    var currentBigHtml=null;
    function tapOnBigFeedSurvey(event){
        // element = event.currentTarget;
        var parent = $(this);//$(this).parent(".hashFeed");
        currentBigHtml = parent
        parent.find(".tertiary").show();
        currentSurveyBig = $(this);
        var x = event.gesture.center.pageX;
        var y = event.gesture.center.pageY;
        // y = y - $(this)[0].offsetTop;
        var offset = $(event.currentTarget).offset();
        // var w = $("#surveybig");
        // console.log(offset.top +" " +w.scrollTop() +" " +y)
        var height = $(parent).height();
        var width = $("body").width();
        var bigheight = $(".quadrant").height();          
        var left = (x/width) * 100;
        var top = (y/height) * 100; 
        var leftpx = x;
        top = y - offset.top;
        var toppx = top;
        top = (top/height) * 100;
        left = Math.round(left) ;
        top = Math.round(top);
        var newtop = top;
        $("#showallcomments").empty();
        var likeid = $(parent).attr("likeid")
        // console.log(left +"/"+top +"/"+ likeid )
        Session.set("currentBig",likeid)
        var clientid = Session.get("clientid");
        var votepic = null;
        if(clientid.match("survey")){
            votepic = "/images/face.jpg";
        }
        else{
            votepic = get("profile_picture");
        }
        if(!votepic)
            votepic = "/images/face.jpg"; 
        voteFlag = false;
        var date = new Date().getTime();
        // progress2(left,top,likeid,event);
        $('.imageComment img').attr('src',get("profile_picture"));
        // console.log(likeid +" " +Session.get("currentBig"));
        top+=40;
        var currentvotes = $("#"+likeid).children(".voting");
        // var allVotesClientId = [];
        for(var i=0,il=currentvotes.length;i<il;i++){
            var cursorvotenow = $(currentvotes[i]).attr("clientid");
            if(cursorvotenow==Session.get("clientid")){
                var getCommentsStatus = get("hideComments");
                if(getCommentsStatus == "false"){
                    return;
                }
                // console.log($(currentvotes[i]).find("p"));
                var noComment = $(currentvotes[i]).find("p");
                // console.log(noComment.length);
                if(noComment.length==0){
                    showcomments();
                    tapOnBigFeedSecond(null,currentvotes[i]);
                    // showSpecialPopup("commentingOverlay");
                    // currentCommenting
                    $("#commentInput").focus();
                    $("#commentInput").select();
                    return;
                }
                else if(noComment.length>0){
                    console.log("noComment else"+noComment.length)
                    showcomments();
                    setTimeout(function() {
                        $('#commentingCommentOverlay').animate({scrollTop: 4000 }, 3000);
                    }, 2000);
                    tapOnBigFeedSecond(null,currentvotes[i]);
                    showSpecialPopup("commentingOverlay");
                    // tapOnBigFeedSecond(null,currentvotes[i]);
                }
                $("#commentInput").focus();
                $("#commentInput").select();
                return;
            }
            // else{
            //     allVotesClientId.push(cursorvotenow);
            // }            
        }
        // if(allVotesClientId){
        //     console.log(likeid);
        //     console.log(clientid);
        //     Meteor.call("checkSecondVote",likeid,clientid,function(){});
        // }
        for(var i=0,il=currentvotes.length;i<il;i++){
            var cursorvotenow = $(currentvotes[i]).attr("clientid");
            if(cursorvotenow==Session.get("clientid")){
                // console.log("exist")
                $("#"+likeid).children(".voting").show();
                // return;

            }
        }
        var place = App.checkQuadrant(left,top);
        progress2(left,newtop,likeid,event);
        var VotesInsert = {"checked":false,"place":place,"profile_picture":votepic, "followid": Session.get("clientid"),"likeid":likeid ,"left": left,"top": top,"date" : date,"comment": ""};
        // currentSurveyBig.append(getVoteHTML(VotesInsert.left,VotesInsert.top,"%"))
        // var cursorBig = Votes.findOne({"likeid":likeid,"followid":Session.get("clientid")});
        // var bigFeed = $(".voting")
        // if(cursorBig){
        //      var voteloc =$(".voting[votingid='" +cursorBig._id +"']");
        //     if(voteloc.length==0){
        //         Votes.update({"_id":cursorBig._id},{$set :{"left":VotesInsert.left,"top":VotesInsert.top,"date":VotesInsert.date}});
        //         // appendVotesManually(this);
        //     }
        //     else{
        //         Votes.update({"_id":cursorBig._id},{$set :{"left":VotesInsert.left,"top":VotesInsert.top,"date":VotesInsert.date}});
        //         voteloc.css({"left":left+"%","top":VotesInsert.top-40+"%"})
        //     }
        //     
        // } 
        // else{
                currentMoveVote = Votes.insert(VotesInsert);
                VotesInsert._id = currentMoveVote;
                console.log(VotesInsert._id);
                cacheTheResult(likeid,VotesInsert,"votes");
                appendOnlyVotesManuallyHash(likeid,VotesInsert);
        // }
        // if(!existvotes){
            //     console.log("already exist")
            // }
        currentSurveyBig = currentSurveyBig.next(".bigFeed");
        //setTimeout(pageScroll,2000);
        //showvotes(likeid);
        // showvotes(likeid);
        $("#"+likeid).children(".voting").show().hammer().off("tap").hammer().on("tap",tapOnVoting);
        var cursorSponserKeyword = SponserKeyword.findOne({"keyword":Session.get("keyword")});
        if(cursorSponserKeyword){
            SponserKeyword.update({"_id":cursorSponserKeyword._id},{$inc : {"hits":1}});
        }
        var currentQuadrant = checkQuadrant(left,top);
        if(currentQuadrant == 1){
            onScore(20);
        }else{
            onScore(10);
        }

    }
    function checkQuadrant(left,top){
        top = top - 40;
        // console.log("left");
        // console.log(left);
        // console.log("top");
        // console.log(top);
        var quad = 0;
        if(left > 50 && top < 50){        
            quad = 1;  
        }
        else if(left < 50 && top < 50){        
            quad = 0;
        }
        else if(left < 50 && top > 50){        
            quad = 2;
        }
        else if(left > 50 && top > 50){       
            quad = 3; 
        }
        else{       
        }
        console.log(quad)
        return quad;   
    }
    App.checkQuadrant = checkQuadrant;
    function cacheTheResult(likeid,VotesInsert,key,action){
        var keySession = Session.get("keyword");
        console.log(keySession);
        for(var i=0,il=preload[keySession].length;i<il;i++){
            var current = preload[keySession];
            if(current[i].likeid == likeid){
                console.log(current[key]);
                if(current[i][key]){
                    console.log("updated");
                }
                else{
                    current[i][key] = [];
                    console.log("didn't found");        
                }
                current[i][key].push(VotesInsert);
                console.log(current[i])
                if(action){
                    console.log("removed");
                    current[i] = {};
                }
            }
        }
        cacheEverything();
    }
    var currentSurveyBig = null;
    var bigsurveyHeight1=0;
    function pageScroll() {
        bigsurveyHeight = $(".hashFeed").height();
        bigsurveyHeight1=bigsurveyHeight1+bigsurveyHeight;
        //console.log(currentSurveyBig.offset().top);
        //$("#div").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
        // $("#surveybig").transition({scrollTop:currentSurveyBig.position().top - 50}, '500', 'swing');
        document.getElementById('surveybig').scrollTop = bigsurveyHeight1;
        //$("#surveybig").transition({ scrollTop: 200 }, 7000);
        //document.getElementById('surveybig').transition({ scrollTop: 0 }, "slow");
    }
    // function showvotes(likeid){
    //     var currentfeed = Votes.find({"likeid":likeid});
    //     var activeLOPArray = []; 
    //     currentfeed.forEach(function(data){   
    //           activeLOPArray.push(data._id);                           
    //     });
    //     console.log(likeid);
    //     console.log(activeLOPArray.length);
    //     for(i=0,j=activeLOPArray.length;i<j;i++){
    //         console.log(activeLOPArray[i]);
    //         $(".voting[votingid='" +activeLOPArray[i]+"']").css("display","block")
    //     }
    // }

    function appendVotesManually(currentTarget,currentVote){
        var oldVotes = $(currentTarget).children(".voting");
        var local = null;
        Meteor.call("getVotes",Session.get("currentBig"),function(err,data){
            if(data){
                if(currentVote)
                data.push(currentVote);
                //console.log(data);
                for(var i=0,il=data.length;i<il;i++){
                    local = data[i];
                    //console.log(Session.get("mainSurvey") != local.followid || local.followid == Session.get("clientid"))
                    if(Session.get("mainSurvey") != local.followid || local.followid == Session.get("clientid"))
                        $(currentTarget).append(getVoteHTML(local.left,local.top - 40,"%",local.profile_picture,local._id))
                }           
            }
        })
    }

    function getVoteHTML(left,top,size,pics,id){
        return '<div class="voting" votingid="' +id +'" style="left : ' +left +size +';top:' +top +size +';"> '
                 +' <img src="' +pics +'">  '        
                + '</div>'
    }
    function progress2(percent,percent1,likeid,event){
            // console.log(percent +"/"+ $element+"/"+ percent1+"/"+ $element1+"/"+likeid)
            var addstring="div#"+likeid
            var barDiv =$(currentBigHtml).children(".quadrant").children("#hprogressBar");
            console.log(barDiv)
            var hprogressBar =  percent;

            $(currentBigHtml).find("div#inerhprogressBar").transition({ left: hprogressBar + "%" }, 500);
            $(barDiv).find("div").transition({ "width": hprogressBar + "%" }, 500)
            promoteper=95-percent1;
            cursorlove=percent1;
            $(currentBigHtml).find("#inner-inner").css("top",cursorlove+"%");
            $("#inner-inner").transition({"top":cursorlove+"%"});
            $(currentBigHtml).find("#verticalprogress").css("height",promoteper +"%")

            $(currentBigHtml).find("#outer")
            .transition({"opacity":"0.0"},500,"linear")
            .transition({"opacity":"1.0"},100,"linear")
            $(currentBigHtml).find(".inner")
            .transition({"opacity":"0.0"},500,"linear")
            .transition({"opacity":"1.0"},100,"linear")
            $(currentBigHtml).find("div#hprogressBar")
            .transition({"opacity":"0.0"},500,"linear")
            .transition({"opacity":"1.0"},100,"linear")
            $(barDiv).find("div")
            .transition({"opacity":"0.0"},500,"linear")
            .transition({"opacity":"1.0"},100,"linear")
            $(currentBigHtml).find("div#inerhprogressBar")
            .transition({"opacity":"0.0"},1,"linear")
            .transition({"opacity":"1.0"},100,"linear")
            $(currentBigHtml).find("#inner-inner")
            .transition({"opacity":"0.0"},500,"linear")
            .transition({"opacity":"1.0"},100,"linear")
            var findHight=$(currentBigHtml).height();
            $(currentBigHtml).find(".inner").css({"background":"linear-gradient(to top,rgba(61,125,254,0.4) 0px, rgba(61,125,254,0.4) "+findHight*2/9+"px,rgba(95,196,134,0.4) "+findHight*2/9+"px,rgba(95,196,134,0.4) "+findHight*4/9+"px,rgba(254,199,57,0.4) "+findHight*4/9+"px,rgba(254,199,57,0.4) "+findHight*2/9*3+"px,rgba(253,48,71,0.4) "+findHight*2/9*3+"px,rgba(253,48,71,0.4) "+findHight+"px)"});
            $(currentBigHtml).find("#hprogressBar div").css({"background":"linear-gradient(to right,rgba(61,125,254,0.4) 0px, rgba(61,125,254,0.4) "+findHight*2/9+"px,rgba(95,196,134,0.4) "+findHight*2/9+"px,rgba(95,196,134,0.4) "+findHight*4/9+"px,rgba(254,199,57,0.4) "+findHight*4/9+"px,rgba(254,199,57,0.4) "+findHight*2/9*3+"px,rgba(253,48,71,0.4) "+findHight*2/9*3+"px,rgba(253,48,71,0.4) "+findHight+"px)"});            
    }
// ///////////////////////survey ends

    // Template.onefeed.rendered = function(){
        /// duplicate feed check algo
        
        // depricated

        // var feed = $(".feed");
        // likeidArray = [];
        // feed.each(function(index,element){
        //     likeidArray.push($(element).attr("likeid"));
        // });
        // var count =0;
        // var removeLikeId = null;

        // for(var i=0,il=likeidArray.length;i<il;i++){
        //     count = 0;
        //     for(var j=0,jl=likeidArray.length;j<jl;j++){
        //         if(likeidArray[i] == likeidArray[j]){
        //             count ++;
        //             removeLikeId = likeidArray[i];
        //         }                
        //     }
        //     if(count > 1){
        //         var cursorFeed = Feed.findOne({"clientid":Session.get("clientid"),"display":"y","likeid":removeLikeId});
        //         Feed.remove({"_id":cursorFeed._id});
        //     }
        // }
    // }
//     Template.Section3.rendered = function(){
//         try{
//             // console.log("Section3.rendered");
//             $(".feed").hammer().off("tap");
//             $(".feed").hammer().on("tap",tapOnFeed);
//             // $(".right").hammer().off("tap",tapOnRightArrow);
//             // $(".right").hammer().on("tap",tapOnRightArrow);
//             $("#section3").unbind("touchstart,touchmove");
//             // $("#section3Label").hammer().off("tap");
//             // $("#section3Label").hammer().on("tap",toggleFeeds);


//             $("#globalFeed").hammer().off("tap",onClickGlobalFeed);
//             $("#myFeed").hammer().off("tap",onClickMyFeed);
//             $("#popular").hammer().off("tap",onClickPopular);
//             $("#hash").hammer().off("tap",onCLickHashGo);

//             $("#globalFeed").hammer().on("tap",onClickGlobalFeed);
//             $("#myFeed").hammer().on("tap",onClickMyFeed);
//             $("#popular").hammer().on("tap",onClickPopular);
//             $("#hash").hammer().on("tap",onCLickHashGo);


//             touchScroll("section3");

//             var feed = $(".feed");
//             //var recomm = $(".recomm");
//             // if(!feedWidth)
//             feedWidth = $(feed[0]).width();
//             if(feedWidth){
//               feed.css("height",feedWidth);
//               //recomm.css("height",height);
//               $(".right,.globalFeed,.popular,.hash,.usersfeed,#usersfeed").css("height",feedWidth);                    
//             }
//             var likeActive = $(".feed[likeid=" +Session.get("currentBig")+"]");
//             likeActive.addClass("likeActive");
//             if(likeActive.length !=0){
//                 $("#section3").scrollTop(Meteor.currentloc);
//             }
//                     // return "http://images.ak.instagram.com/profiles/profile_363620479_75sq_1376154548.jpg";

// // 363620479
//             if(firstTimeLoginFlag){
//                 if($(".recentIcons").length !=0)
//                     hideLoader();
//                 var feed = $(".feed");        
//                 if(feed.length != 0){
//                     var likeid = $(feed[0]).attr("likeid");
//                     //console.log(likeid);
//                     if(likeid){
//                         beforeCurrentBig();
                        
                        
//                         // console.log(Session.get("currentBig"))
//                         if(!Session.get("currentBig"))
//                             Session.set("currentBig",likeid);
//                         firstTimeLoginFlag = false;
//                         hideLoader();
//                         setTimeout(tapOnRightArrow,1000);
//                         if(!DebugFace){
//                             // tutorialJSON = {}
//                             // tutorialFlag = true;
//                             // tutorialJSON.first = true;
//                             // tapBigTutorial(70,50,"vote","Tap on pic to vote.");
//                             // $("#tap").hammer().on("tap",tapOnBigFeed);
//                         }

//                         // youiest section default condition
//                         var uservote = $(".followsIcons:nth-child(2)")
//                         if(uservote.length ==1){
//                             doubletapOnFollowsIcons(null,"363620479","http://images.ak.instagram.com/profiles/profile_363620479_75sq_1376154548.jpg",true)
//                             doubletapOnFollowsIcons(null,uservote.attr("myid"),uservote.children("img").attr("src"))
//                         }
//                         // doubletapOnFollowsIcons(null,"363620479","http://images.ak.instagram.com/profiles/profile_363620479_75sq_1376154548.jpg")
//                     }
//                 }
//             }
//             // var one = $(".followsIcons")[0]; 
//         }
//         catch(error){
//             console.log(error);
//             ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.Section3.rendered"});
//         }
//     }
//     Meteor.previousloc = 0
//     $( window ).scroll(function() {
//         Meteor.previousloc = Meteor.currentloc
//         Meteor.currentloc=$("body").scrollTop();
//         if(Meteor.currentloc == 0){
//           Meteor.currentloc = Meteor.previousloc;
//         }
//     });
    // puserfeed
    // Template.userfeed.rendered = function(){
    //     if(feedWidth){
    //         $(".usersfeed,#usersfeed").css("height",feedWidth);                    
    //     }
    //     // console.log($(".userfeed").length)
    //     if($(".userfeed").length == 2){
    //         Meteor.call("usersVotesAdd",Session.get("clientid"),"363620479")
            
    //     $(".userfeed").hammer().off("tap");
    //     $(".userfeed").hammer().on("tap",tapOnFeed);
    //     }
    // }
    // Template.userfeed.userselfpic = function(){
    //     return "http://images.ak.instagram.com/profiles/profile_363620479_75sq_1376154548.jpg";
    // }
    // Template.userfeed.eachUserFeed = function(){
    //     return UsersVote.find({"clientid":Session.get("clientid"),"followid":"363620479","display":"y"});
    // }
    // Template.userfeed.anotheruserselfpic = function(){
    //     return Session.get("userselfpic");
    // }
    // Template.userfeed.anotherUserFeed = function(){
    //     return UsersVote.find({"clientid":Session.get("clientid"),"followid":Session.get("userid"),"display":"y"});
    // }
    // Template.static.rendered = function(){
    //     // console.log("static.rendered");
    //     $("#globalFeed").hammer().off("tap",onClickGlobalFeed);
    //     $("#myFeed").hammer().off("tap",onClickMyFeed);
    //     $("#popular").hammer().off("tap",onClickPopular);
    //     $("#hash").hammer().off("tap",onCLickHashGo);

    //     $("#globalFeed").hammer().on("tap",onClickGlobalFeed);
    //     $("#myFeed").hammer().on("tap",onClickMyFeed);
    //     $("#popular").hammer().on("tap",onClickPopular);
    //     $("#hash").hammer().on("tap",onCLickHashGo);

        
    // }
    // Template.Section3.rendered = function(){
    //     checkPictureToast();        
    // }
    // Template.recommendingtemplate.rendered = function(){
    //     checkPictureToast();        
    // }

    // Template.Section4.rendered = function(){
    //     try{
    //         // console.log("Section4.rendered");
    //         $(".bigFeed").hammer().off("tap");
    //         $(".bigFeed").hammer().on("tap",tapOnBigFeed);
    
    //         $(".recomm").hammer().off("tap");
    //         $(".recomm").hammer().on("tap",tapOnRecomm);
    //         $(".recomm").hammer().off("hold");
    //         $(".recomm").hammer().on("hold",holdOnRecomm);
    
    //         $(".voting").hammer().off("doubletap");
    //         $(".voting").hammer().on("doubletap",tapOnVoting);
    //         $(".voting").hammer().off("tap");
    //         $(".voting").hammer().on("tap",tapOnVoting);
    //         $(".voting").hammer().off("hold");
    //         $(".voting").hammer().on("hold",holdOnVoting);

    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.Section4.rendered"});
    //     }
    // }
    // Template.vote.rendered = function(){
    //     try{
    //         // if(activeAnimation){
    //         //     // animateOnVote();
    //         //     activeAnimation = false;
    //         // }
    //         // duplicateVote(); 
    //         // removeAlreadyVoted();           
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.vote.rendered"});
    //     }
    // }    
    // Template.bigImage.rendered = function(){
    //     try{
    //         if(Session.get("currentBig") && tapOnFeedFlag){
    //             // $(".bigFeed").css({"opacity":"0.0"});
    //             // $(".bigFeed").animate({"opacity":"1.0"},1000,"easeOutBounce");
    //             // $(".bigFeed").css({"z-index":"0"}) 
    //             // animateQuadrantPicsOnTap();           
    //             tapOnFeedFlag = false;
    //         }                        
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.bigImage.rendered"});
    //     }
    // }
    // Template.chatting.rendered = function(){
    //     try{
    //         $("#send,#creatorProfile,#sharePic").hammer().off("tap");
    //         $("#send").hammer().on("tap",tapOnSend);
    //         $("#creatorProfile").hammer().on("doubletap",tapOnVoting);
    //         $("#sharePic").hammer().on("tap",clickOneSharePic);

    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.chatting.rendered"});
    //     }
    // }

    



      
    

    // Template.grouptemplate.group = function(){
    //     return FollowsGroup.find({"clientid":Session.get("clientid")});
    // }
    // Template.grouptemplate.rendered = function(){
    //     $(".followsgroup").hammer().off("tap");
    //     $(".followsgroup").hammer().on("tap",tapOnGroup);
    //     $(".followsgroup").hammer().off("doubletap");
    //     $(".followsgroup").hammer().on("doubletap",doubleTapOnGroup);
    //     $(".followsgroup").hammer().off("hold");
    //     $(".followsgroup").hammer().on("hold",holdOnGroup);
    // }
    Template.profilemenu.user = function(){
        try{
              return Me.find({"_id":Session.get("clientid")});
        }
        catch(error){
            console.log(error);
            ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.profilemenu.user"});
        }
    }
    Template.profilemenu.rendered = function(){
        try{
              $("#profileItem").hammer().on("tap",OnclickProfileLink);
        }
        catch(error){
            console.log(error);
            ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.profilemenu.user"});
        }
    }
    /// Last duplicate
    
    // Template.loud.recents = function(){
    //     return Media.find({},{sort : {"loud": -1},limit:8})
    // }
    Template.Section1.recents = function(){
        try{
            return Feed.find({"clientid":Session.get("clientid"),"display":"n"},{sort : {"date": -1},limit:Session.get("limit")*1});
            //return Recents.find({"userid":Session.get("clientid"),"display":"n"},{sort : {"date": -1},limit:16});
        }
        catch(error){
            console.log(error);
            ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.Section1.recents"});
        }
    }

    // /////////////////////start profile//////////////
    // Template.votesProfile.recent = function(){
    //     try{
    //         return Votes.find({"followid":Session.get("profile")},{sort : {"date": -1},limit:4});
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.recents1.recents"});
    //     }
    // }
    // Template.feedsProfile.recent = function(){
    //     try{
    //         return Feed.find({"clientid":Session.get("profile"),"display":"y"},{sort : {"date": -1},limit:4});

    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.recents1.recents"});
    //     }
    // }
    // Template.recents1.recent = function(){
    //     try{
    //         return Feed.find({"clientid":Session.get("profile"),"display":"n"},{sort : {"date": -1},limit:4});

    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.recents1.recents"});
    //     }
    // }
    // /////////////////////////////end profile////////////////////
    Template.distanceTemplate.distance = function(){
        try{
            return UserHashMania.findOne({"_id":Session.get("clientid")});
            // var cursorMe = 
            // if(cursorMe){
            //     return cursorMe.score;
            // }
        }
        catch(error){
            console.log(error);
            ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.distanceTemplate.distance"});
        }
    }
    // Template.distanceTemplate.heat = function(){
    //     try{
    //         var cursorMe = Me.findOne({"_id":Session.get("clientid")})        
    //         if(cursorMe){
    //             return cursorMe.heatscore;
    //         }
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.distanceTemplate.heat"});
    //     }
    // }

    // Template.Section2.follows = function(){  
    //     try{
    //         var cursorLOP = Recommend.find({"likeid":Session.get("currentBig")});
    //         var activeLOPArray = [];
    //         cursorLOP.forEach(function(data){   
    //               activeLOPArray.push(data.followid);                           
    //         });
    //         var searchByFollow = Session.get("searchByFollow");
    //         if( searchByFollow == "0-50")
    //             return Follows.find({"userid":Session.get("clientid"),"followid":{$nin: activeLOPArray}},{sort : {"hits":-1},limit:50});
    //         else
    //              return Follows.find({"userid":Session.get("clientid"),"followid":{$nin: activeLOPArray},"username":{$regex : "^"+searchByFollow +".*",$options: 'i'}},
    //                 {sort : {"hits":-1},limit:50});
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.Section2.follows"});
    //     }
    // } 

    // Template.Section2.follows = function(){  
    //     // try{
    //         var cursorLOP = Feed.find({"likeid":Session.get("currentBig"),"whoid" : Session.get("clientid")});
    //         var cursorVotes = Votes.find({"likeid":Session.get("currentBig")});
    //         var activeLOPArray = [];
            
    //         cursorVotes.forEach(function(data){   
    //               activeLOPArray.push(data.followid);                           
    //         });

    //         cursorLOP.forEach(function(data){   
    //               activeLOPArray.push(data.followid);                           
    //         });
    //         // Session.get("actionArray");
    //         // not supporting reactive
    //         // for(var i=0,il=actionArray.length;i<il;i++){
    //         //       activeLOPArray.push(actionArray[i]);
    //         // }
    //         var searchByFollow = Session.get("searchByFollow");
    //         // code made by misunderstanding
    //         // if(Session.get("group")){
    //         //     var cursorFollowsGroup = FollowsGroup.findOne({"_id":Session.get("group")});
    //         //     var activeGroupArray = [];
    //         //     if(cursorFollowsGroup)
    //         //         activeGroupArray = cursorFollowsGroup.follows;
    //         //     console.log(activeGroupArray)
    //         //     return Follows.find({"userid":Session.get("clientid"),"followid":{$nin: activeLOPArray},"followid":{$in : activeGroupArray}},{sort : {"hits":-1},limit:50});
    //         // }
    //         if( searchByFollow == "0-50")
    //             return Follows.find({"userid":Session.get("clientid"),"followid":{$nin: activeLOPArray}},{sort : {"hits":-1},limit:50});
    //         else{
    //             searchByFollow = searchByFollow+"|" +Session.get("username");
    //             return Follows.find({"userid":Session.get("clientid"),"followid":{$nin: activeLOPArray},"username":{$regex : "^"+searchByFollow +".*",$options: 'i'}},
    //                 {sort : {"hits":-1},limit:50});
    //         }
    //     // }
    //     // catch(error){
    //     //     console.log(error);
    //     //     ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.Section2.follows"});
    //     // }
    // } 
    // Template.Section2.currentFollow = function(){
    //     // var cursorFollows = 
    //     return Follows.findOne({"followid":Session.get("activeFollows")});
    //     // if(cursorFollows){
    //     //     return cursorFollows.profile_picture;
    //     // }
    // }
    // Template.Section2.alpahbet = function(){
    //     try{
    //         return Session.get("searchByFollow");
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.Section2.alpahbet"});
    //     }
    // } 
    // depricated 
    // Template.myself.eachMyself = function(){
    //     try{
    //         // var cursorLOP = Votes.findOne({"likeid":Session.get("currentBig"),"followid":Session.get("clientid")});
    //         // //var cursorRecom = Recommend.findOne({"likeid":Session.get("currentBig"),"followid":Session.get("clientid")})
    //         // if(cursorLOP){
    //         //     return null;
    //         // }
    //         // else{
    //         //     return Me.find({"followid":Session.get("clientid")});
    //         // }
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.myself.eachMyself"});
    //     }
    // }


    // All in one
    // Template.preload.eachfeed = function(){
    //     // var cursorSearch=Feed.find({"clientid" : Session.get("clientid"),"display":"y","type":7},{sort : {"date": -1},"limit":Session.get("limit")*2});
    //     //   if(cursorSearch){
    //     //       defaultfeeds();
    //           return Feed.find({"clientid" : Session.get("clientid"),"display":"y","type":1},{sort : {"date": -1},"limit":Session.get("limit")*2});
    //       // }     
    // }

    // Template.onetwo.eachfeed = function(){
    //     // if(Session.get("userid")){
    //     //     return UsersVote.find({"clientid":Session.get("clientid"),"followid":Session.get("userid"),"display":"y"});
    //     //     // ,{sort : {"date": -1},"limit":Session.get("limit")}
    //     // }
    //     // else{
    //         return Feed.find({"clientid" : Session.get("clientid"),"display":"y","type":2},{sort : {"date": -1},"limit":Session.get("limit")*2});    
    //     // }        
    // }
    // Template.onethree.eachfeed = function(){
    //     // if(Session.get("userid")){
    //     //     return UsersVote.find({"clientid":Session.get("clientid"),"followid":Session.get("userid"),"display":"y"});
    //     //     // ,{sort : {"date": -1},"limit":Session.get("limit")}
    //     // }
    //     // else{
    //         return Feed.find({"clientid" : Session.get("clientid"),"display":"y","type":3},{sort : {"date": -1},"limit":Session.get("limit")*2});    
    //     // }        
    // }
    // Template.onefeed.eachfeed = function(){
    //     // if(Session.get("userid")){
    //     //     return UsersVote.find({"clientid":Session.get("clientid"),"followid":Session.get("userid"),"display":"y"});
    //     //     // ,{sort : {"date": -1},"limit":Session.get("limit")}
    //     // }
    //     // else{
    //       // var cursorSearch=Feed.find({"clientid" : Session.get("clientid"),"display":"y","type":7},{sort : {"date": -1},"limit":Session.get("limit")*2});
    //       // if(cursorSearch){
    //       //     return defaultfeeds();
    //       //     //return Feed.find({"clientid" : Session.get("clientid"),"display":"y","type":7},{sort : {"date": -1},"limit":Session.get("limit")*2});
    //       // }else{
    //           return Feed.find({"clientid" : Session.get("clientid"),"display":"y","type":7},{sort : {"date": -1},"limit":Session.get("limit")*2});    
    //       //}
    //     // }        
    // }
    // Template.oneglobal.eachfeed = function(){
    //     // if(Session.get("userid")){
    //     //     return UsersVote.find({"clientid":Session.get("clientid"),"followid":Session.get("userid"),"display":"y"});
    //     //     // ,{sort : {"date": -1},"limit":Session.get("limit")}
    //     // }
    //     // else{
    //         return Feed.find({"clientid" : Session.get("clientid"),"display":"y","type":4},{sort : {"date": -1},"limit":Session.get("limit")*2});    
    //     // }        
    // }
    // Template.onepopular.eachfeed = function(){
    //     // if(Session.get("userid")){
    //     //     return UsersVote.find({"clientid":Session.get("clientid"),"followid":Session.get("userid"),"display":"y"});
    //     //     // ,{sort : {"date": -1},"limit":Session.get("limit")}
    //     // }
    //     // else{
    //         return Feed.find({"clientid" : Session.get("clientid"),"display":"y","type":8},{sort : {"date": -1},"limit":Session.get("limit")*2});    
    //     // }        
    // }
    // Template.onehash.eachfeed = function(){
    //     // if(Session.get("userid")){
    //     //     return UsersVote.find({"clientid":Session.get("clientid"),"followid":Session.get("userid"),"display":"y"});
    //     //     // ,{sort : {"date": -1},"limit":Session.get("limit")}
    //     // }
    //     // else{
    //         return Feed.find({"clientid" : Session.get("clientid"),"display":"y","type":9},{sort : {"date": -1},"limit":Session.get("limit")*2});    
    //     // }        
    // }
    //temp
    Template.server.unseenCount = function(){
        try{
            return Feed.find({"clientid":Session.get("clientid"),"type": 2,"display":"y"}).count();
        }
        catch(error){
            console.log(error);
            ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.recommendingtemplate.unseenCount"});
        }
    }
    // /// First duplicate
    // Template.seen.recomm = function(){
    //   //var cursor = Recents.find({"userid":Session.get("clientid")});
    //     //var noArray = [];
    //     //cursor.forEach(function(data){            
    //     //    noArray.push(data.likeid);
    //     //});
    //     try{
    //         return Recommend.find({"display":"y","followid":Session.get("clientid")/*,"likeid" :{$nin: noArray}*/,"seennotify":false},{sort : {"date": -1}});
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.seen.recomm"});
    //     }
    // }
    // /// Second duplicate
    // Template.unseen.recomm = function(){
    //   //var cursor = Recents.find({"userid":Session.get("clientid")});
    //     //var noArray = [];
    //     //cursor.forEach(function(data){            
    //     //    noArray.push(data.likeid);
    //     //});   
    //     try{
    //         return Recommend.find({"display":"y","followid":Session.get("clientid")/*,"likeid" :{$nin: noArray}*/,"seennotify":true});
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.unseen.recomm"});
    //     }
    // }

    // /// Third duplicate
    // Template.popular.feeds = function(){
    //     //var cursor = Recents.find({"userid":Session.get("clientid")});
    //     //var noArray = [];
    //     //cursor.forEach(function(data){            
    //     //    noArray.push(data.likeid);
    //     //});  
    //     //,"likeid" :{$nin: noArray}
    //     try{
    //         return Popular.find({"display":"y","userid":Session.get("clientid")},{limit:10});
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.popular.feeds"});
    //     }
    // }
    // /// Fourth duplicate
    // Template.search.search = function(){
    //     //var cursor = Recents.find({"userid":Session.get("clientid")});
    //     //var noArray = [];
    //     //cursor.forEach(function(data){            
    //     //    noArray.push(data.likeid);
    //     //});  
    //     //,"likeid" :{$nin: noArray}
    //     try{
    //         return Search.find({"display":"y","userid":Session.get("clientid")},{limit:10});        
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.search.search"});
    //     }
    // }
    // /// Fifth duplicate
    // Template.globalfeed.feeds = function(){
    //     //var cursor = Recents.find({"userid":Session.get("clientid")});
    //     //var noArray = [];
    //     //cursor.forEach(function(data){            
    //     //    noArray.push(data.likeid);
    //     //});                       
    //     //,"likeid" :{$nin: noArray}
    //     try{
    //         return GlobalFeed.find({"display":"y","globalid":Session.get("clientid")},{limit:10});
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.globalfeed.feeds"});
    //     }
    // }
    // /// Six duplicate
    // Template.feedtemplate.feeds = function(){
    //     //var cursor = Recents.find({"userid":Session.get("clientid")});
    //     //var noArray = [];
    //     //cursor.forEach(function(data){            
    //     //    noArray.push(data.likeid);
    //     //});
    //     //var cursorRecom = Recommend.find({"followid":Session.get("clientid")});
    //     //cursorRecom.forEach(function(data){
    //     //    noArray.push(data.likeid);
    //     //}); 
    //     //, "likeid" :{$nin: noArray}
    //     try{
    //         return Likes.find({"display":"y","userid": Session.get("clientid")},{sort : {"voting":-1},limit:10});
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.feedtemplate.feeds"});
    //     }
    // }
    // Template.recommendingtemplate.unseenCount = function(){
    //     try{
    //         return Recommend.find({"followid":Session.get("clientid"),"seennotify":true}).count();
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.recommendingtemplate.unseenCount"});
    //     }
    // }
    
    // Template.bigImage.low = function(){
    //     var currentBig = Session.get("currentBig");
    //     //var cursorLike = Likes.findOne({"likeid":currentBig});        
    //     //    if(cursorLike){          
    //     //      return cursorLike.low;
    //     //}        
    //     //var cursorRecomm = Recommend.findOne({"likeid":currentBig,"followid":Session.get("clientid")});
    //     //    if(cursorRecomm){
    //     //      return cursorRecomm.low;
    //     //}          
    //     //var cursorPopular = Popular.findOne({"likeid":currentBig,"userid":Session.get("clientid")});                  
    //     //    if(cursorPopular){          
    //     //      return cursorPopular.low;
    //     //}
    //     //var cursorGlobalFeed = GlobalFeed.findOne({"likeid":currentBig,"globalid":Session.get("clientid")});                  
    //     //    if(cursorGlobalFeed){          
    //     //      return cursorGlobalFeed.low;
    //     //}
    //     //var cursorSearch = Search.findOne({"likeid":currentBig,"userid":Session.get("clientid")});                  
    //     //      if(cursorSearch){          
    //     //        return cursorSearch.low;
    //     //}
    //     //var cursorRecents = Recents.findOne({"likeid":currentBig,"userid":Session.get("clientid")});                  
    //     //    if(cursorRecents){          
    //     //      return cursorRecents.low;
    //     //}
    //     try{
    //         cursor = cursorparser();
    //         // if(!cursor)
    //         // cursor = Recents.findOne({"likeid":currentBig,"userid":Session.get("clientid")});
            
    //         if(cursor){
    //             return cursor.low;
    //         }else{
    //           return "images/logo.png";
    //         }
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.bigImage.low"});
    //     }
    // }
    // Template.recommended.recents = function(){
    //     try{   
    //         var currentBig = Session.get("currentBig");   
    //         var cursorVote = Votes.findOne({"followid":Session.get("clientid"),"likeid":currentBig})
    //         if(cursorVote){
    //             return Feed.find({"likeid":currentBig,"type": 3, "clientid":Session.get("clientid")});
    //         }
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.recommended.recents"});
    //     }
    // }
    // Template.recommending.recents = function(){
    //     try{      
    //         var currentBig = Session.get("currentBig"); 
    //         var cursorVote = Votes.findOne({"followid":Session.get("clientid"),"likeid":currentBig})
    //         if(cursorVote){
    //             return Feed.find({"likeid":currentBig,"type": 3,"whoid":Session.get("clientid")});
    //         }
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.recommending.recents"});
    //     }
    // }
    // Template.recommending.recentstwo = function(){
    //     try{      
    //         var currentBig = Session.get("currentBig"); 
    //         var cursorVote = Votes.findOne({"followid":Session.get("clientid"),"likeid":currentBig})
    //         if(cursorVote){
    //             return Feed.find({"likeid":currentBig,"type": 2,"whoid":Session.get("clientid")});
    //         }
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.recommending.recents"});
    //     }
    // }
    // Template.vote.votes = function(){
    //     try{
    //         var currentBig = Session.get("currentBig");
    //         var cursorVote = Votes.findOne({"followid":Session.get("clientid"),"likeid":currentBig})        
    //         var cursorGroupVoteRecommend = GroupVoteRecommend.findOne({"clientid":Session.get("clientid"),"likeid":currentBig});
    //         if(cursorGroupVoteRecommend){
    //             return Votes.find({"likeid":currentBig,"followid":{$in: cursorGroupVoteRecommend.follows}});
    //         }
    //         if(cursorVote){
    //             return Votes.find({"likeid":currentBig});
    //         }
    //         else
    //             return null;
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.vote.votes"});
    //     }
    // }
    
    
    // Template.groupvote.votes = function(){
    //     try{
    //         var currentBig = Session.get("currentBig");
    //         var cursorVote = Votes.findOne({"followid":Session.get("clientid"),"likeid":currentBig});
    //         //console.log(cursorVote);       
    //         if(cursorVote){
    //             return GroupVoteRecommend.find({"likeid":currentBig,"clientid":Session.get("clientid")});
    //         }
    //         else
    //             return null;
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.groupvote.votes"});
    //     }
    // }
    // Template.chatting.recommending = function(){
    //     try{
    //         if(Session.get("actionFollow")){
    //             var cursorRecomm = Feed.findOne({"_id":Session.get("actionFollow")})
    //             if(cursorRecomm)
    //             if(cursorRecomm.whoid == Session.get("clientid")){
    //                 return cursorRecomm;
    //             }
    //         }
    //         return false;
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.chatting.recommending"});
    //     }
    // }
    // Template.chatting.creator = function(){
    //     try{
    //         var cursorVotes = Votes.findOne({"_id":Session.get("actionFollow")});
    //         if(cursorVotes){
    //             return Media.findOne({"_id": cursorVotes.likeid});    
    //         }
    //         return false;
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.chatting.creator"});
    //     }
    // }
    // Template.chatting.recommended = function(){
    //     try{
    //         return Session.get("recommendedFollow");
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.chatting.recommended"});
    //     }
    // }
    // Template.chatting.othername = function(){
    //     try{
    //         var cursorRecomm = Feed.findOne({"_id":Session.get("actionFollow")})
    //         if(cursorRecomm)
    //             return {"followusername" : cursorRecomm.followusername, "left" :cursorRecomm.left,"top" :cursorRecomm.top,"username":Session.get("username")};
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.chatting.othername"});
    //     }
    // }
    // Template.chatting.eachcomment = function(){
    //     try{
    //         return Comments.find({"likeid":Session.get("currentBig")})
    //     }
    //     catch(error){
    //         console.log(error);
    //         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.chatting.eachcomment"});
    //     }
    // } 
    Template.keyword.eachkeyword = function(){
        try{
            return SponserKeyword.find({},{sort : {"hits": -1}});            
        }
        catch(error){
            console.log(error);
            ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.keyword.eachkeyword"});
        }
    }
    Template.keyword.rendered = function(){
        // console.log("Template.keyword.rendered");
        // var keyword = $(".eachkeyword");
        // var startSize = 45;
        // for(var i=0,il=keyword.length;i<il;i++){
        //     if(i%5 == 0 && startSize >10)
        //         startSize -= 5;
        //     $(keyword[i]).css("font-size",startSize +"px");

        // }
    }
    Template.keyword.events({
        "click .eachkeyword" : function(event){
            try{
                var tempKeyword = this.keyword;
                toast("#" +tempKeyword +" is started.");
                Meteor.call("findHashKeyword",tempKeyword,CLIENTID,function(err,data){
                               
                });
                saveCurrentToPrevious();
                Session.set("keyword",tempKeyword);
                closeSurvey();
                // $("#keywordPopup").hide();
            }
            catch(error){
                console.log(error);
                ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "click .eachkeyword"});
            }
        },
        "hold .eachkeyword" : function(event){
            try{
                if(topTenLeaderRanking.indexOf(Session.get("clientid"))==-1){

                }else{
                    SponserKeyword.remove({"_id":this._id});
                }
            }
            catch(error){
                console.log(error);
                ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "hold .eachkeyword"});
            }
        }
    })
    Template.server.status = function(){
        return Meteor.status().connected;
    }
    // Template.myprofile.profile = function(){
    //     var profile = Session.get("profile");
    //     if(isNaN(profile)){
    //         return Me.find({"username":profile});
    //     }
    //     else{
    //         return Me.find({"_id":profile});    
    //     }        
    // }

}

// ////// CHAT START  /////

//     Template.chatfeature.chat = function(){
//         return Chat.find({"clientid":Session.get("clientid"),"chatid":Session.get("chatid")});
//     }
//     Template.chatfeature.rendered = function(){
//         $(".summary").hammer().off("hold",deleteOnHold)
//         $(".summary").hammer().on("hold",deleteOnHold)
//     }
//     function deleteOnHold(){
//         var id = $(this).attr("myid");
//         Chat.remove({"_id":id});
//     }
//     Template.chatfeature.pic = function(){
//         if(this.position == "right"){
//             return profilePic;
//         }
//         else{
//             return Session.get("senderpic");
//         }
//     }
// ///// CHAT ENDS /////


// Replacement of ground db
// save restore //
var database;
Meteor.saveCollection = saveCollection;
function saveCollection(){
    var starttimer = new Date().getTime();
    if(cacheFlag){
        window.localStorage.setItem("database","{}");
        window.localStorage.setItem("language","");
        // window.localStorage.clear();
        return;
    }
    if(!database)
        database = {};
    var startTime = new Date().getTime();
    // saveIndividual("Follows");
    // saveIndividual("Feed");
    var leaderRankingJson = {};
    leaderRankingJson.leaderRanking = leaderRanking;
    set("leaderRanking",EJSON.stringify(leaderRankingJson));
    saveIndividual("SponserKeyword");
    // saveIndividual("FollowsGroup");
    StopSession();
    // saveOutstanding();
    Meteor.call("getDefaultData",[],CLIENTID,function(err,data){
        if(data){
            preload = data;
            cacheEverything();
            console.log("getDefaultData ended last");
        }

    });  
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"saveCollection","time":((new Date().getTime())-starttimer)});

}
function startSession(){
    SessionstartTime = new Date().getTime();
    // console.log("start "+SessionstartTime);
}
function StopSession(){
    SessionEndTime = new Date().getTime();
    var totalSession=(new Date().getTime() - SessionstartTime)/1000;
    // console.log("Session "+totalSession);
    var SessionInsert = {"clientid":Session.get("clientid"),"username" :Session.get("username"),"InDate":SessionstartTime,"OutDate":SessionEndTime,"sessionTime":totalSession,"width":$(window).width(),"height":$(window).height()}
    UserSession.insert(SessionInsert);
}
function saveIndividual(name){
    if(!window[name])
        return;
  var starttimer = new Date().getTime();
    var cursor = window[name].find({});
    // window.localStorage.setItem("follow",);
    
    database[name] = new Array();
    cursor.forEach(function(data){
        database[name].push(data._id);
        data.cache = true;
        window.localStorage.setItem(data._id,EJSON.stringify(data));
    });
        window.localStorage.setItem("database",EJSON.stringify(database));
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"saveIndividual","time":(new Date().getTime())-starttimer});
}
function saveOutstanding(){
    var starttimer = new Date().getTime();
    if(Meteor.connection._anyMethodsAreOutstanding()){
        var methods = Meteor.connection._methodInvokers;
        var methodJson = {};
        methodJson.method = [];
        console.log(methods)
        if(methods){
            $.each(methods, function (key, data) {
                // console.log(data.)
                methodJson.method.push({"method":data._message.method,"args":data._message.params,"options":data._wait});
            })
        }
        window.localStorage.setItem("methods",EJSON.stringify(methodJson));     
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"saveOutstanding","time":((new Date().getTime())-starttimer)});
}
Meteor.restoreCollection = restoreCollection;
function restoreCollection(){
    //var startTime = new Date().getTime();
    database = window.localStorage.getItem("database");
    database = EJSON.parse(database);
    
    var leaderRankingJson = get("leaderRanking");
    if(leaderRankingJson){
        leaderRankingJson = EJSON.parse(leaderRankingJson);
        if(leaderRankingJson){
            leaderRanking = leaderRankingJson.leaderRanking;
            if(!leaderRanking)
                leaderRanking = [];
            getTopTenLeader();
        }
        
    }
    
    // restoreIndividual("Follows");
    // restoreIndividual("Feed");
    restoreIndividual("SponserKeyword");
    // restoreIndividual("FollowsGroup");
    restoreData();
    // setTimeout(restoreOutstanding,5*60000);
    //console.log(new Date().getTime() - startTime +" ms time taken");
    //MethodTimer.insert({"clientid":Session.get("clientid"),"name":"restoreCollection","time":(new Date().getTime())-starttimer});
}
function restoreIndividual(name){
    var starttimer = new Date().getTime();
    var oldCollectionArray = [];
    if(database){
        var databaseFollow = database[name];
        if(databaseFollow){
            var followCollection = null;
            if(databaseFollow){
                for(var i=0,il=databaseFollow.length;i<il;i++){
                    if(databaseFollow[i] && window[name]){
                       var cursorFollow = window[name]._collection.findOne({"_id":databaseFollow[i]});
                        if(!cursorFollow){
                            oldCollectionArray.push(databaseFollow[i]);
                            followCollection = window.localStorage.getItem(databaseFollow[i]);
                            followCollection = EJSON.parse(followCollection);
                            window[name]._collection.insert(followCollection);
                        } 
                    }
                    
                }
                if(name == "Feed"){
                    checkOldData(oldCollectionArray)
                }
            }
        }
              
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"restoreIndividual","time":((new Date().getTime())-starttimer)});
}
function checkOldData(oldCollectionArray){
    // console.log(oldCollectionArray);
    Meteor.call("checkOldCollection",oldCollectionArray,Session.get("clientid"),function(err,data){
        if(data){
            // console.log(data)
            for(var i=0,il=data.length;i<il;i++){
                Feed._collection.update({"_id":data[i]},{$set : {"display":"n","date":new Date().getTime()}});
            }
        }
    });
}
function restoreOutstanding(){
    var starttimer = new Date().getTime();
    try{
         var methodJson = window.localStorage.getItem("methods");
         if(!methodJson)
            return;
         methodJson = EJSON.parse(methodJson);
         if(methodJson)
            methods = methodJson.method; 
        if(methods){
            for(var i=0,il=methods.length;i<il;i++){
                console.log(methods[i].method);
                   Meteor.connection.apply(methods[i].method, methods[i].args, methods[i].options);
            }        
        }
    }
    catch(error){
        console.log(error)
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"restoreOutstanding","time":((new Date().getTime())-starttimer)});
}
// save restore //

//////Converted Events////////

function tapOnRecentIcons(event){
    var starttimer = new Date().getTime();
    // console.log("tapOnRecentIcons");
    //Session.set("currentBig",this.likeid);
    try{
        beforeCurrentBig()
        Session.set("currentBig",$(this).attr("likeid"));    
        hideAllButtons();
        openCloseSnapLeft();
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "tapOnRecentIcons"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"tapOnRecentIcons","time":((new Date().getTime())-starttimer)});
}

// // CHAT FEATURE

// function holdOnFollowsIcons(){
//     var starttimer = new Date().getTime();
//     var element = this;
//     $(".statename").html("(Chat Mode)").css({"font-size": "48%","float":"right","top": "57%","left":"0%"});
//     $(".chatbox").show();
//     // toast("Chat is not fully supprted. <br> It's still in progress.");
//     $("#chatinputbox").attr("placeholder",i18n.__("chathere"));

//     var id = $(element).attr("myid");
//     var type = $(element).attr("type");
//     if(type == "group"){
//         FollowsGroup.remove({"_id":id});
//         return;
//     }
//     else{
//         if(id){
//             Session.set("chatid",id);
//             var cursorFollow = Follows.findOne({"followid":id})
//             if(cursorFollow)
//             Session.set("senderpic",cursorFollow.profile_picture);
//         }        
//     }
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"holdOnFollowsIcons","time":((new Date().getTime())-starttimer)});
// }

// function clickChatBoxCloseButton(){
//     console.log("close chat box");
//     $(".statename").html("").css({"font-size": "48%","float":"right","top": "57%","left":"0%"});
//     $(".chatbox").hide();
// }

// function clickChatSendButton(){
//     var starttimer = new Date().getTime();
//     var value = $("#chatinputbox").val();
//     console.log(value);
//     if(value){

//         // One for me 2nd for other party.
//         var date = getUTCTimestamp();
//         Chat.insert({"clientid":Session.get("clientid"),"chatid":Session.get("chatid"),"message":value,"position":"right","date" :date,"status":"client"});
//         Chat.insert({"chatid":Session.get("clientid"),"clientid":Session.get("chatid"),"message":value,"position":"left","date" :date,"status":"client"});    
//     }
//     $("#chatinputbox").val("");
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"clickChatSendButton","time":((new Date().getTime())-starttimer)});
// }
// // Deps.autorun(function(){
// Chat.find({"status":"server"}).observe({
//     "added" : function(first){
//         Chat.update({"_id":first._id},{$set : {"status":"receive"}});
//     }
// });
// // })
// var dateTimestamp;
// function getUTCTimestamp(){
//     dateTimestamp = new Date();
//     var UTC=new Date(Date.UTC(dateTimestamp.getUTCFullYear(),dateTimestamp.getUTCMonth()-1,dateTimestamp.getUTCDay(),0,0,0,0));
//     return UTC.getTime(); 
// }
// //  CHAT FEATURE
// function doubletapOnFollowsIcons(event,myid,pic,extra){
//     var starttimer = new Date().getTime();
//     clearTimeout(taponfollows);
//     var element = this;
//     var id = $(element).attr("myid");
//     if(myid)
//       id = myid;

//     if(id == Session.get("userid")){
//         $(".statename").html("").css({"font-size": "48%","float":"right","top": "57%","left":"0%"});
//        //$(".usersfeed,#usersfeed").css({"display":"block"});
//         Session.set("userid",null);
//         Session.set("userselfpic","");
//         return;
//     }
//     //console.log(id)
//     if(id != Session.get("clientid")){
//         var userselfpic = null;
//         userselfpic = $(this).children("img").attr("src");
//         if(pic)
//             userselfpic = pic;
//         if(!myid){
//           $(".statename").html("(User's Feeds)").css({"font-size": "48%","float":"right","top": "57%","left":"0%"});
//         }
        
//         //$(".usersfeed,#usersfeed").css({"display":"none"});
//         if(!extra)
//             Session.set("userid",id);
//         Session.set("userselfpic",userselfpic);
//         Meteor.call("usersVotesAdd",Session.get("clientid"),id)
//         $(this).addClass("followanimation");
//         setTimeout(function(){$(this).removeClass("followanimation");},6000);
//         // 
//         // Went to server

//         // var cursorVote = Votes.find({"followid":id},{sort : {"date": -1},"limit":10});
//         // var cursorUsersVote = null;
//         // var clientid = Session.get("clientid");
//         // cursorVote.forEach(function(data){
//         //     console.log(data);
//         //     delete data._id; 
//         //     data.clientid = clientid;
//         //     cursorUsersVote = UsersVote.findOne({"clientid":clientid,"followid":id,"likeid":data.likeid});
//         //     if(!cursorUsersVote)
//         //         UsersVote.insert(data);
//         // });
//         Meteor.subscribe("usersvote",-1,-1);
//         Meteor.subscribe("usersvote",Session.get("clientid"),id);
//         Meteor.subscribe("usersvoten",Session.get("clientid"),id);
//         // UsersVote.insert({});
//     }
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
// }
// var editGroupId = null;
// function doubleTapOnGroup(){
//     var starttimer = new Date().getTime();
//     doubleTapFlag = true;
//     editGroupId = $(this).addClass("activeGroup").attr("myid");
//     Session.set("groupflag",true);
//     $("#showcheckmark").hide();
//     $("#hidecheckmark").show();
//     colorGroup(editGroupId,"activeGroup");
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
// }
// function tapOnGroup(){
//     var starttimer = new Date().getTime();
//     toast("Group Selected")
//     $(".active").removeClass("active");
//     $("#keyboard").hide("hide");
//     var id = $(this).attr("myid");
//     Session.set("activeFollows",id);
//     colorGroup(id,"active");
//     onGroupButton();
//     setTimeout(function(){
//             if(doubleTapFlag){
//                 doubleTapFlag = false;
//                 return;
//             }
//             openCloseFollows();
//             // $("#section2").animate({"left":"100%"});
//             // $("#currentFollow").animate({"right":"0px"});
//             // $("#openclosearrow").attr("class","left arrow icon");
//             $(".currentFollowimg").attr("src","./images/group.png");
//           },2000);
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
// }
// function colorGroup(id,cla){
//     var starttimer = new Date().getTime();
//     var cursorFollowsGroup = FollowsGroup.findOne({"_id":id});
//     if(cursorFollowsGroup){
//         var follows = cursorFollowsGroup.follows;
//         if(follows)
//         for(var i=0,il=follows.length;i<il;i++){
//             $(".followsIcons[myid='" +follows[i]+"']").addClass(cla); 
//         }
//     }
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
// }
// function holdOnGroup(){
//     var myid = $(this).attr("myid");
//     FollowsGroup.remove({"_id":myid});
// }
// var doubleTapFlag = false;
// function addGroupButton(){
//     var starttimer = new Date().getTime();
//     // toggleFollows();
//     if(Session.get("groupflag")){
//         var followGroupArray = [];
//         var pictureGroupArray = [];
//         var myid = null;
//         var groupeCount = 0;

//         $(".activeGroup").each(function(index,element){
//             myid = $(element).attr("myid");
//             if(myid != Session.get("clientid")){
//                 followGroupArray.push(myid);                
//                 var cursorFollow = Follows.findOne({"followid":myid});
//                 if(cursorFollow){
//                     pictureGroupArray[pictureGroupArray.length] = cursorFollow.profile_picture;
//                     groupeCount++;
//                 }
//             }   

//         });
//         Session.set("groupflag",false);
//         $("#showcheckmark").show();
//         $("#hidecheckmark").hide();
//         // semanticpopup(20,40,i18n.__("atheader"),i18n.__("atmessage"))
//         $(".activeGroup").removeClass("activeGroup");

//         if(groupeCount == 0){
//             toast("No users selected.");
//         }
//         else{
//             // console.log({"clientid":Session.get("clientid"),"follows":followGroupArray,"picture":pictureGroupArray,"length":groupeCount})
//             if(editGroupId){
//                 FollowsGroup.update({"_id":editGroupId},{$set :{"clientid":Session.get("clientid"),"follows":followGroupArray,"picture":pictureGroupArray,"count":groupeCount}});
//                 $(".activeGroup").removeClass("activeGroup")
//             }
//             else{
//                 FollowsGroup.insert({"clientid":Session.get("clientid"),"follows":followGroupArray,"picture":pictureGroupArray,"count":groupeCount});
//             }
//             editGroupId = null;
//             toast("Group created.");
//         }
        
//     }
//     else{
//         Session.set("groupflag",true);
//         $("#showcheckmark").hide();
//         $("#hidecheckmark").show();
//         semanticpopup(20,71,i18n.__("atheader"),i18n.__("atmessage"))
//         toast("Add users to create group.");  
//     }
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
// }
// function tapOnFollowsIcons(event){
//     var localDiv = this;
//     taponfollows=setTimeout(function(){tapOnFollowsIcons1(event,localDiv)},300);
// }
// function tapOnFollowsIcons1(event,element){    
//   var starttimer = new Date().getTime();    
//     //console.log("tapOnFollowsIcons");
//     // try{
//         var localDiv = null;
//         if(element)
//             localDiv = element;
//         else
//             localDiv = this; 
//         $(".active").removeClass("active"); 
//         if(Session.get("groupflag")){
//             if($(localDiv).attr("class").match("activeGroup")){
//                 $(localDiv).removeClass("activeGroup"); 
//             }
//             else{
//                 $(localDiv).addClass("activeGroup");
//             }
//         }
//         else{
//             var myid = $(localDiv).attr("myid");
//             var cltid=Session.get("clientid")
//             var name =$(localDiv).attr("name");
//             //console.log(myid);
//             // console.log(myid);
//             // console.log(name);
//             if(myid!=cltid){
//                         toast(i18n.__("userselected1")+" "+name+","+i18n.__("userselected2"));
//             }
//             Session.set("activeFollows",myid);       
//             $(this).addClass("active");
//             $(".followsIcons").each(function(index,element){
//                 if(element === localDiv){            
//                     followSelectPosition = index;                  
//                 }            
//             }); 
//             openCloseFollows();
//         }
//     // }
//     // catch(error){
//     //     console.log(error);
//     //     ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "tapOnFollowsIcons"});
//     // }
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
// }    
function cursorparser(){
    var starttimer = new Date().getTime();
    try{
        var cursor = null;
        var currentBig = Session.get("currentBig");
        // cursor = Likes.findOne({"likeid":currentBig,"userid":Session.get("clientid")});                                        
        //         if(!cursor)
        //             cursor = Recommend.findOne({"likeid":currentBig,"followid":Session.get("clientid")})
        //         if(!cursor)
        //             cursor = Popular.findOne({"likeid":currentBig,"userid":Session.get("clientid")})
        //         if(!cursor)
        //             cursor = GlobalFeed.findOne({"globalid":Session.get("clientid"),"likeid":currentBig})
        //         if(!cursor){
        //             cursor = Search.findOne({"likeid":currentBig,"userid":Session.get("clientid")});                   
        //         }
        //         if(!cursor){
        //             cursor = Recents.findOne({"likeid":currentBig,"userid":Session.get("clientid")});                   
        //         }
        /// one
        cursor = Feed.findOne({"likeid":Session.get("currentBig")});  
        if(!cursor)
            cursor = UsersVote.findOne({"likeid":Session.get("currentBig")});   
        return cursor;
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "cursorparser"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function removeCursor(val){
    var starttimer = new Date().getTime();
    try{        
        // Likes.remove({"_id":val});  
        // GlobalFeed.remove({"_id":val});       
        // Recommend.remove({"_id":val});
        // Popular.remove({"_id":val});
        // Search.remove({"_id":val});
        Feed.remove({"_id":val});   
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "removeCursor"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function updateCursor(cursorArg){
    var starttimer = new Date().getTime();
    try{
    //console.log(cursor);
    var type = cursorArg.type;
    var likeid = cursorArg.likeid;
    var cursor = null;
    // cursor = Likes.find({"likeid":likeid}); 
    // cursor.forEach(function(data){
    //     Likes.update({"_id":data._id},{$set : {"display":"n"}}); 
    // });
    // cursor = GlobalFeed.find({"likeid":likeid}); 
    // cursor.forEach(function(data){
    //     GlobalFeed.update({"_id":data._id},{$set : {"display":"n"}}); 
    // });                
    // cursor = Recommend.find({"likeid":likeid}); 
    // cursor.forEach(function(data){
    //     Recommend.update({"_id":data._id},{$set : {"display":"n"}}); 
    // });
    // cursor = Popular.find({"likeid":likeid}); 
    // cursor.forEach(function(data){
    //     Popular.update({"_id":data._id},{$set : {"display":"n"}}); 
    // });
    // cursor = Search.find({"likeid":likeid}); 
    // cursor.forEach(function(data){
    //     Search.update({"_id":data._id},{$set : {"display":"n"}}); 
    // });

    /// one
    cursor = Feed.find({"likeid":likeid,"display":"y"}); 
    cursor.forEach(function(data){
        if(data.cache)
            Feed._collection.update({"_id":data._id},{$set : {"display":"n","date":new Date().getTime()}});

        Feed.update({"_id":data._id},{$set : {"display":"n","date":new Date().getTime()}});
    });
    
    // https://trello.com/c/sdfV2jbk/837-don-t-remove-voted-pics-from-tapmate-users-feed-they-re-there-to-check-back-on
    // cursor = UsersVote.find({"likeid":likeid,"display":"y"}); 
    // cursor.forEach(function(data){
    //     UsersVote.update({"_id":data._id},{$set : {"display":"n","date":new Date().getTime()}}); 
    // });

  // if(type == "l"){
  //   //console.log("l");
  //   Likes.update({"_id":cursor._id},{$set : {"display":"n"}});  
  // }
  // else if(type == "f"){
  //   //console.log("f");
  //   GlobalFeed.update({"_id":cursor._id},{$set : {"display":"n"}});
  // }
  // else if(type == "g"){
  //   //console.log("g");
  //   GlobalFeed.update({"_id":cursor._id},{$set : {"display":"n"}});
  // }
  // else if(type == "r"){
  //   //console.log("r");
  //   Recommend.update({"_id":cursor._id},{$set : {"display":"n"}});
  // }
  // else if(type == "p"){
  //   //console.log("p");
  //   Popular.update({"_id":cursor._id},{$set : {"display":"n"}});
  // }
  // else if(type == "s"){
  //   //console.log("s");
  //   Search.update({"_id":cursor._id},{$set : {"display":"n"}});
  // }
  // else{
  //   console.log("else");
  // }
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "updateCursor"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
// function getLeftTop(element){
//     var starttimer = new Date().getTime();
//     // $(element).css("opacity",1);
//     var left = $(element).offset().left;
//     var top = $(element).offset().top;
//     // left = left.substr(0,left.length-2);
//     // top = top.substr(0,top.length-2);
//     // left = Number(left);
//     // top = Number(top);
//     xcenter = left;
//     ycenter = top;
//     left = left / $("#Main").width() * 100;
//     top = top / $("#Main").height() * 100;
//     // setTimeout(function(){$(element).css("opacity",0);},3000)
//     return {left : left, top : top};
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
// }

var semanticpopupTimeout = null;
function semanticpopup(left,top,header,message){
    var starttimer = new Date().getTime();
    if(semanticpopupTimeout){
       clearTimeout(semanticpopupTimeout);
       clearInterval(tapBigInterval);
    }

    $("#sematicpopup .header").text(header);
    $("#sematicpopup .content").text(message);
    $("#sematicpopup").css({"left":left-11 +"%","top":top+7 +"%"})
    $("#sematicpopup").addClass("visible");
    // $("#tap").css({"display":"none"})
    semanticpopupTimeout = setTimeout(function(){$("#sematicpopup").removeClass("visible");},3000);
}
// var tapBigInterval = null;
// tapBigTutorialInterval = null;
// var intervalLimit = 0;
// function tapBigTutorial(left,top,header,message,diffLeft,diffTop){
//     var starttimer = new Date().getTime();
//     mDiv = $("#tap")[0];
//     // tapBigInterval = setInterval(function(){moveDiv(left,top)},10);
//     var width = 50;
//     var height = 50;
//     if(tapBigTutorialInterval)
//           clearInterval(tapBigTutorialInterval)
//     intervalLimit = 0;
//     tapBigTutorialInterval = setInterval(function(){
//         // to stop infinite loop
//         intervalLimit++;
//         if(intervalLimit>5){
//             clearInterval(tapBigTutorialInterval);
//             return;
//         }
//         $("#tap").css({"display":"block","left":left +"%","top":top +"%"})
//             .animate({"left":left-5 +"%","top":top-5 +"%","height":height +50+"px","width":width +50 +"px"},800,"easeOutBounce")
//             .animate({"left":left +"%","top":top +"%","height":height +"px","width":width +"px"},100,"easeOutBounce")
//             .animate({"left":left-5 +"%","top":top-5 +"%","height":height +50+"px","width":width +50 +"px"},800,"easeOutBounce")
//             .animate({"left":left +"%","top":top +"%","height":height +"px","width":width  +"px"},100,"easeOutBounce",function(){
//                 $("#tap").css({"display":"none"})
//             });
//     },4000)
            
//     if(diffLeft) left += diffLeft;
//     if(diffTop) top += diffTop;
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
//     // semanticpopup(left,top,header,message);
// }
// function tapOnFeed(event){
//     var starttimer = new Date().getTime();
//     try{
//         Session.set("activeFollows",Session.get("clientid"));
//         $("#outer").animate({"opacity":"0.0"},500,"linear")
//         $("#hprogressBar").animate({"opacity":"0.0"},500,"linear")
//         $("#inner-inner").animate({"opacity":"0.0"},500,"linear")
//         $("#inerhprogressBar").animate({"opacity":"0.0"},500,"linear")
//         followSelectPosition = 0;
//         var sectionActive = $(".likeActive").removeClass("likeActive");
//         $(this).addClass("likeActive");
        
    
//         var currentBig = Session.get("currentBig");
//         var likeid = $(this).attr("likeid");
//         if(!likeid){
//             $(".statename").html("").css({"font-size": "48%","float":"right","top": "57%","left":"0%"});
//             Session.set("userid",null);
//             Session.set("userselfpic","");
//             return;
//             //console.log(Session.get("userid"))
//         }           
//         if(currentBig){              
//             if(currentBig != likeid){                    
//                 // var cursorRecent = Recents.findOne({"likeid":currentBig,"userid":Session.get("clientid")});                    
//                 // if(!cursorRecent){                        
//                     cursor = cursorparser();
//                     if(cursor){
//                         cursor.userid = Session.get("clientid");
//                         cursor.display = "n";
//                         cursor.date = new Date().getTime();
//                         updateCursor(cursor);
//                         delete cursor._id;
//                         // Recents.insert(cursor);                    
//                     }
//                 // }  
//                 beforeCurrentBig()
//                 Session.set("currentBig",likeid);
//                 // if(tutorialJSON.seventh)
//                 // setTimeout(function(){
//                 //     tutorialJSON = {};
//                 //     tutorialFlag = false;
//                 //     semanticpopup(31,31,"That's it!","Now repeat.");
//                 //     semanticpopupTimeout = setTimeout(function(){
//                 //         $("#sematicpopup").removeClass("visible");$("#tap").css({"display":"none"})
//                 //         if(loginFormFlag)
//                 //         $("#loginform").show();
//                 //     },3000);
//                 // },2000);
                
//                 // https://trello.com/c/ZIU48bDP/369-optimize-animation-putting-new-picture-in-big-for-speed-not-animation

//                 // animateFeedToBig();
//                 // console.log("inif")
//                 tapOnFeedFlag = true;
//                 // animateQuadrantPicsOnTap();
            
//             }
//             else{     
//                     //    cursor = Likes.findOne({"likeid":currentBig,"userid":Session.get("clientid")})
//                     //console.log(cursor);                        
//                     //if(!cursor)
//                     //    cursor = Recommend.findOne({"likeid":currentBig,"followid":Session.get("clientid")})
//                     //if(!cursor)
//                     //    cursor = Popular.findOne({"likeid":currentBig,"userid":Session.get("clientid")}) 
//                     //if(!cursor)
//                     //    cursor = GlobalFeed.findOne({"globalid":Session.get("clientid"),"likeid":currentBig})
//                     //if(!cursor)
//                     //    cursor = Search.findOne({"likeid":Session.get("currentBig"),"userid":Session.get("clientid")});
//                     cursor = cursorparser()
//                     if(cursor){
//                         cursor.userid = Session.get("clientid");
//                         cursor.date = new Date().getTime();
//                         cursor.display = "n";
//                         updateCursor(cursor);
//                         delete cursor._id;
//                         // Recents.insert(cursor);                    
//                     }              
//                 Session.set("currentBig",null);    
//             }                
//         }
//         else{               
//             //console.log(this);
//             beforeCurrentBig();
//             Session.set("currentBig",likeid);
//         }
//         $(".feed").removeClass("likeActive");
//         $(this).addClass("likeActive"); 
//         hideLikeButton();

//         // Found a bug
//         Session.set("actionFollow",null);
//     }
//     catch(error){
//         console.log(error);
//         ErrorUpdate.insert({"error":error,"date": new Date(),"side":"client","function" : "tapOnFeed"});
//     }
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
// }
// function progress1(percent, $element, percent1, $element1) {
//     var starttimer = new Date().getTime();
//         $("#outer")
//         .animate({"opacity":"1.0"},100,"linear")
//         $(".inner")
//         .animate({"opacity":"1.0"},100,"linear")
//         $("#hprogressBar")
//         .animate({"opacity":"1.0"},100,"linear")
//         $("#inner-inner")
//         .animate({"opacity":"1.0"},100,"linear")
//         promoteper=100-(percent1-63);
//         cursorlove=percent1-70;
//         $(".inner").css("height","0%")
//         $(".inner").animate({ "height": promoteper + "%" }, 800);
//         $("#inner-inner").css("top","100%")
//         $("#inner-inner").animate({ "top": cursorlove + "%" }, 750);
//         $("#inerhprogressBar").css("left","0%");
//         $element.find('div').css("width","0%");
//         setTimeout(function(){
//               $("#hprogressBar div")
//               //.animate({"opacity":"0.0"},500,"linear")
//               .animate({"opacity":"1.0"},100,"linear")
//                $("#inerhprogressBar")
//               //.animate({"opacity":"0.0"},1,"linear")
//               .animate({"opacity":"1.0"},100,"linear")
//               var hprogressBar = percent +2;
//               $("#inerhprogressBar").animate({ left: hprogressBar + "%" }, 800);
//               $element.find('div').animate({ width: hprogressBar + "%" }, 800);
//         },1500);
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
// }

// function groupVoteRecommend(cursorFollowsGroup,left,top){
//     var starttimer = new Date().getTime();
//     var follows = cursorFollowsGroup.follows;
//     var picture = cursorFollowsGroup.picture;
//     for(var i=0,il=follows.length;i<il;i++){
//         GroupVoteRecommend.insert({"clientid":follows[i],"follows":follows,"picture":picture,"likeid":Session.get("currentBig"),"left":left,"top":top,"checked":false});
//     }
//     GroupVoteRecommend.insert({"clientid":Session.get("clientid"),"follows":follows,"picture":picture,"likeid":Session.get("currentBig"),"left":left,"top":top,"checked":false});
//         MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
// }


// VoteStart = null;
// function beforeCurrentBig(){
//     var starttimer = new Date().getTime();
//   activeLOPArray = [];
//   Session.set("actionFollow",null);
//   currentMoveRecc=null;
//   currentMoveVote=null;
// }
// function tapOnBigFeed(event){
     
//      var localDiv = this;
//      setTimeout(function(){tapOnBigFeedInterval(event,localDiv)},10)
                 
//  }
// function tapOnBigFeedInterval(event,localDiv,voteInsert){
//     var starttimer = new Date().getTime();
//     try{
//            //console.log(event);     
//         VoteStart =   new Date().getTime() ;
//         var x = event.gesture.center.pageX - adjustLeft;
//         // console.log(x);
//         // console.log(adjustLeft);
//         // console.log(x - adjustLeft);
        
//         var y = event.gesture.center.pageY;            
//         var height = $("#Main").height();
//         var width = $("#Main").width();
//         var bigheight = $("#quadrant").height();           
//         var left = (x/width) * 100;
//         var top = (y/height) * 100; 
//         var bigtop = (y/bigheight) * 100;           
//         left = Math.round(left) -5;
//         top = Math.round(top) - 5;
//         bigtop = Math.round(bigtop) - 5;   
//         var activeFollowsId = Session.get("activeFollows");
//         var currentBig = Session.get("currentBig");
//         var actionFollow = Session.get("actionFollow");
//         var currentElement = localDiv;
//         var voteFlag = true;
//         //console.log(actionFollow);
//         var quadrantPlace = checkQuadrant(left,top,false);
//         if(actionFollow){
//             $("#overlay").hide();
//             var cursorVotes = Votes.findOne({"_id":actionFollow})
//             if(cursorVotes){                    
//                 Votes.update({"_id":cursorVotes._id},{$set :{"left": left ,"top": top,"place":quadrantPlace}});
//                 currentMoveVote = cursorVotes._id;
//                 flagVoteorRec = false;
//                 progress1(left, $('#hprogressBar'),bigtop, $('#outer')); 
//                 Me.update({"_id":Session.get("clientid")},{$inc:{"movedme":1}})               
//             }
//             else{
//                 cursorVotes = Feed.findOne({"_id":actionFollow});
//                 if(cursorVotes){
//                     Feed.update({"_id":cursorVotes._id},{$set :{"left": left ,"top": top,"place":quadrantPlace}}); 
//                     currentMoveRecc=cursorVotes._id;
//                     flagVoteorRec=true;
//                     progress1(left, $('#hprogressBar'),bigtop, $('#outer'));                  
//                     Me.update({"_id":Session.get("clientid")},{$inc:{"movedrecomm":1}})
//                 }
                
//             }
//             Session.set("actionFollow",null);
//             return;
//         }

//         // Group condition
//         var groupType = FollowsGroup.findOne({"_id":activeFollowsId});
//         if(groupType){
//             groupVoteRecommend(groupType,left,top);
//             activeFollowsId = Session.get("clientid");

//         } 
//         if(Number(Session.get("clientid")) < 0){
//             toast("Please login with Instagram to use the app.");
//         }
//         if(currentBig && activeFollowsId){
                
                
//                 //console.log(cursorBig);
//                 var cursorBig = null;
//                 var cursorMine = null;
//                 var cursorMe = null,cursorFollow = null;
//                 cursorBig = cursorparser();
//                 if(!cursorBig)
//                     return;
                
//                 cursorFollow = Follows.findOne({"followid":activeFollowsId});
//                 //cursorMe = Me.findOne({"followid":activeFollowsId});
//                 //cursorMine = Me.findOne({"followid":Session.get("clientid")}) 
//                 // console.log(cursorFollow)                   
//                 if(activeFollowsId == Session.get("clientid")){
//                     progress1(left, $('#hprogressBar'),bigtop, $('#outer')); 
//                     voteFlag = false;
//                     var date = new Date().getTime();
//                     if(!cursorFollow)
//                         cursorFollow = {};
//                     if(voteInsert){
//                         cursorFollow = voteInsert;
//                         cursorBig = voteInsert;
//                     }
//                     profilePic = cursorFollow.profile_picture;
                    
//                     var VotesInsert = {"checked":false,"place":quadrantPlace,"profile_picture":cursorFollow.profile_picture, "followid":Session.get("clientid"),"likeid":cursorBig.likeid,"low":cursorBig.low ,"left": left,"top": top,"date" : date};
//                     actionArray.push(activeFollowsId);
//                     appendVotes(VotesInsert);
                    
                    
//                     currentMoveVote = Votes.insert(VotesInsert);
//                     flagVoteorRec = false;
//                     checkQuadrant(left,top,true);
//                     currentMoveRecc=null;
//                     var loud = left + (100 - top);
//                     Media.update({"_id":VotesInsert.likeid},{$inc:{"loud":loud,"vote":1}});

//                     // if(tutorialJSON.first && !tutorialJSON.second){
//                     //     $("#sematicpopup").removeClass("visible");$("#tap").css({"display":"none"});
//                     //     $("#tap").hammer().on("tap",tapOnBigFeed);
//                     //     clearInterval(tapBigTutorialInterval);
//                     //     semanticpopup(left,top,"vote",i18n.__("uvotethispic"));
//                     //     tutorialJSON.second = true;
//                     // }
                    
//                     // if(tutorialJSON.second && !tutorialJSON.third)
//                     // setTimeout(function(){
//                     //     tapBigTutorial(75,70,"recommend","Tap again on pic to recommend this pic to your friend.");
//                     //     tutorialJSON.third = true;
//                     // },1000);
//                     updateCursor(cursorBig);
                                   
//                 }
//                 if(voteFlag || groupType){
//                     //userid is depricated
//                     // checkQuadrant(left,top,true);
//                     var cursorVotes = Votes.findOne({"followid":Session.get("clientid"),"likeid":currentBig});
//                     //console.log(cursorVotes)
//                     if(cursorVotes || groupType){
//                         var loopRecommend = [];
//                         if(!groupType){
//                             loopRecommend.push(activeFollowsId);
//                         }
//                         else{
//                             loopRecommend = groupType.follows;
//                         }
//                         for(var i=0,il=loopRecommend.length;i<il;i++){
//                             activeFollowsId = loopRecommend[i];
//                             cursorFollow = Follows.findOne({"followid":activeFollowsId});
//                             if(Number(activeFollowsId) <0){
//                                 console.log("it's a guest user");
//                                 cursorFollow = {"username":"guest","profile_picture":"images/face.jpg","followid": "" +activeFollowsId};
//                             }
//                             if(cursorFollow){
//                               //onRecommend();                      
//                                 Me.update({"_id":Session.get("clientid")},{$inc :{"recomending":1,"yrecomending":1,"mrecomending":1,"wrecomending":1,"drecomending":1}});
//                                 var insert = {"type":"r","display":"y","followusername" :cursorFollow.username, "profile_picture":cursorFollow.profile_picture,"followid":cursorFollow.followid,"likeid":cursorBig.likeid,"who":profilePic,"whoid":Session.get("clientid"),"whousername": Session.get("username"),"low":cursorBig.low /* ,"height":"50px","width":"50px","position":"absolute"*/,"left": left ,"top": top,"notification" : false,"seennotify":true,"tapnotify":true,"date" : new Date().getTime(),"distance":0,"checked":false};
//                                 // Recommend.insert(insert); 
//                                 // above old bottom new
//                                 insert.clientid = cursorFollow.followid;
//                                 insert.source = "recommend";
//                                 insert.type = 3;
//                                 insert.checked = false;

//                                 appendRecommend(insert);
//                                 actionArray.push(activeFollowsId);
//                                 currentMoveRecc = Feed.insert(insert);
//                                 flagVoteorRec=true;
//                                 Media.update({"_id":insert.likeid},{$inc:{"recomend":1}});
//                                 // if(tutorialJSON.third && !tutorialJSON.fourth){
//                                 //     $("#sematicpopup").removeClass("visible");$("#tap").css({"display":"none"});
//                                 //     $("#tap").hammer().on("tap",openCloseFollows);
//                                 //     clearInterval(tapBigTutorialInterval);
//                                 //     semanticpopup(left,top,"Recommend",i18n.__("uguess")+" " +cursorFollow.username + " "+i18n.__("wouldtap"));
//                                 //     tutorialJSON.fourth = true;                                    
//                                 // }
//                                 // if(tutorialJSON.fourth && !tutorialJSON.fifth){
//                                 //     tapBigTutorial(82,37,"Recommend","Tap again on pic to recommend this pic to your friend.");
//                                 //     //$("#tap").hammer().on("tap",tapOnFollowsIcons);
//                                 //     tutorialJSON.fifth = true;
//                                 // }
//                                 // if(tutorialJSON.fourth && !tutorialJSON.fifth)
//                                 // setTimeout(function(){
//                                 //     // setTimeout(function(){
//                                 //         var d = getLeftTop("#inner-inner");
//                                 //         tapBigTutorial(d.left,d.top,"Love","Move your share meter for this pic.",20,0);
//                                 //         tutorialJSON.fifth = true;
//                                 //     // },4000);
//                                 // },4000);
//                                 // semanticpopup(left,top,"recommend","You recommend this pic to " +cursorFollow.username +"!");
//                                 var messageNotify = Session.get("username") +" "+i18n.__("hassendpicture");
//                                 TapmateNotification.insert({"senderid":cursorFollow.followid,"message":messageNotify,"notify":false,"low":insert.low,"likeid":insert.likeid});
//                                 progress1(left, $('#hprogressBar'),bigtop, $('#outer'));
//                                 Follows.update({"_id":cursorFollow._id},{$inc : {"hits":1}});

//                                 //replacing server call cause we have standard now
//                                 //Meteor.call("incRecomend",cursorFollow.followid);  
//                                 //Media.update({"_id":Session.get("currentBig")},{$inc:{"recommends":1}});
//                                 if(groupType){
//                                 }
//                                 else{
//                                     var tstmgs=i18n.__("youRecommendPic1")+cursorFollow.username +i18n.__("youRecommendPic2")
//                                     toast(tstmgs);
//                                 }
//                                 //toast("You recommended this picture to " +cursorFollow.username +"<br>Will they tap the same spot?");                          
//                                 var cursorFollow = Follows.findOne({"followid" : Session.get("clientid")})
//                                 if(cursorFollow)
//                                     Follows.update({"_id":cursorFollow._id},{$inc : {"hits":2}});
//                                 // left = left + 5;
//                                 // top = top + 5;
//                             }
//                         }
                        
//                     }
//                     else{
//                         //toast("Please Vote yourself");
//                     }
//                 }                
//             Session.set("activeFollows",null);               
//         }
//     }
//     catch(error){
//         console.log(error);
//         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "tapOnBigFeed"});
//     }
//         MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});     
// }
function appendVotes(vote){
    $("#wrapperSec").append('<img class="voting dummyElement" style="left : ' +vote.left +'%;top:' +vote.top +'%;" myid="' +vote.followid +'" votingid="' +vote._id +'" src="' +vote.profile_picture +'">'); 
    setTimeout(removeDummy,300);
}
function appendRecommend(recom){
    var starttimer = new Date().getTime();
    return '<div class="recomm dummyElement" style="left : ' +recom.left +'%;top: ' +recom.top +'%;" whoid=" ' +recom.whoid +'" type="ing" recomid="' +recom._id +'">'
              +'<img class="receiver" src="' +recom.who +'">'
                +'<img class="sender" src="' +recom.profile_picture +'">'
            +'</div>';
    setTimeout(removeDummy,300);
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function removeDummy(){
    $(".dummyElement").remove();
}
var checkQuadrantTimeOut = null;
// function checkQuadrant(left,top,flag){
//     var starttimer = new Date().getTime();
//     if(checkQuadrantTimeOut)
//         clearTimeout(checkQuadrantTimeOut);
//     top = top - 40;
//     var quad = 0;
//     if(left > 50 && top < 25){        
//         quad = 1;
//         if(flag)
//             toast(i18n.__("loveNpromote"));
//             //toast("You love and promoted this picture");//rooster    
//         $("#loveQuadrant,#promoteQuadrant")
//             .css({"opacity":"1.0"});    
//     }
//     else if(left < 50 && top < 25){        
//         quad = 0;
//         if(flag)
//             toast(i18n.__("love"));
//             //toast("You love this picture");//eagle
//         $("#loveQuadrant,#dummyelement")
//             .css({"opacity":"1.0"});
//     }
//     else if(left < 50 && top > 25){        
//         quad = 2;
//         if(flag)
//              toast(i18n.__("hate"));
//             //toast("You hate the picture");//rat
//     }
//     else if(left > 50 && top > 25){       
//         quad = 3; 
//         if(flag) 
//             toast(i18n.__("hateNpromote"));      
//             //toast("You hated and promoted this picture");//segal
//         $("#promoteQuadrant,#dummyelement").css({"opacity":"1.0"});
//     }
//     else{       
//     }
//     // console.log($("#quadrant div")[quad]);
//     // console.log($(".mainQuadrant")[quad]);
//     // console.log(quad)
//     $($(".mainQuadrant")[quad])
//     .animate({"opacity":"1.0"},500,"linear")
//     .animate({"opacity":"0.0"},500,"linear")
//     .animate({"opacity":"1.0"},500,"linear")
//     .animate({"opacity":"0.0"},500,"linear"); 
//     checkQuadrantTimeOut = setTimeout(function(){$("#loveQuadrant,#promoteQuadrant").css({"opacity":"0.0"})},2000)
//     return quad;   
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
// }
// App.checkQuadrant = checkQuadrant;      
function tapOnRecomm (event){
    var starttimer = new Date().getTime();
    try{
        var whoid = $(this).attr("whoid");  
        var recomid = $(this).attr("recomid");        
        var type = $(this).attr("type");
        if(type == "ed"){
            $("#overlay").show();
            Session.set("recommendedFollow",whoid);  
            Session.set("actionFollow",null);       
            return;
        }
        if(whoid == Session.get("clientid")){
          animateFaceMove(); 
          Session.set("actionFollow",recomid);
          Session.set("recommendedFollow",null);
        }
        else{
            
        }
        animateBig(this);
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "tapOnRecomm"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}


function animateBig(element){   
  var starttimer = new Date().getTime(); 
    try{
        $(element).hammer().off("tap"); 
        var left = $(element).offset().left;
        var top = $(element).offset().top;
        var type = $(element).attr("type");
        if(type=="creator"){top =0}
        var height = $(element).height();
        var width = $(element).width();
        $(element).stop().animate({"left" : left -50,"top":top -50,"height":height+100,"width":width+100},1000);

        //$(element).hammer().off("doubletap");
              
        // made static so it won't stick big
        Meteor.setTimeout(function(){
            var clas = $(element).attr("class");
            if(clas == "voting"){
                $(element).stop().animate({"left":left,"top":top,"height": "40px","width":"40px"},1000,"easeOutBounce",function(){
                        //$(element).hammer().on("doubletap",tapOnVoting);
                        $(element).hammer().on("tap",tapOnVoting);
                                                              
                })                
            }
            if(clas == "recomm"){
                $(element).stop().animate({"left":left,"top":top,"height": "40px","width":"60px"},1000,"easeOutBounce",function(){
                    $(element).hammer().on("tap",tapOnRecomm);                                    
                });   
            }               
        },1000);
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "animateBig"});
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function holdOnRecomm(event){
    var myrecc=$(this).attr("recomid");
    if(myrecc){
        Feed.remove({"_id":myrecc})
    }
}
function tapOnVoting(event){
    var starttimer = new Date().getTime();
    try{
        var element = null;
        element = event.currentTarget;
        var clientid = $(element).attr("clientid");
        var link= $(element).parent(".hashFeed").attr("link")
        if(clientid == Session.get("clientid")){
            if(link == "undefined"){

            }else{
                window.open(link, '_system');
            }
        }
        // console.log(link)

    }catch(error){
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "tapOnVoting"});
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"tapOnVoting","time":((new Date().getTime())-starttimer)});
}
function holdOnVoting(event){
    var starttimer = new Date().getTime();
    try{
        var myid = Session.get("clientid");
        if(topTenLeaderRanking.indexOf(myid)==-1){

        }else{
            var element = null;
            element = event.currentTarget;
            var clientid = $(element).attr("clientid");
            if(clientid != myid)
                onScore(-10,null,clientid)
        }

    }catch(error){
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "tapOnVoting"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"holdOnVoting","time":((new Date().getTime())-starttimer)});
}
var currentCommenting = null;
function tapOnBigFeedSecond(event,myElement){
    var starttimer = new Date().getTime();
    //console.log(event);
    try{
        var element = null;
        if(myElement)
            element = myElement;
        else
            element = event.currentTarget;
        currentCommenting = element;
        // console.log($(element).position());
        var clientid = $(element).attr("clientid");
        var likeid= $(element).parent(".hashFeed").attr("id")
        // var imgsrc = $("voting").find('img').attr("src");
        
        Meteor.myElement = element;
        $("#commentingOverlay").attr("likeid",likeid);
        $("#commentingOverlay").attr("clientid",clientid);
        var p = $(currentCommenting).find("p").text();
        if(p){
            $("#commentInput").val(p);
        }else{
            $("#commentInput").val("");
        }
        // var src = get("profile_picture");
        // console.log(src);
        showSpecialPopup("commentingOverlay");
        // $(currentCommenting).css({"display":"none"});
        // $("#commentingOverlay").show();
        // will see later use
        return;
        var eventType = event.type;
        var followid = $(this).attr("myid");
        var votingid = $(this).attr("votingid");
        if(eventType == "doubletap"){
            var left = $(this).offset().left;
            var top = $(this).offset().top;
            var height = $(this).height();
            var width = $(this).width();
            
            //console.log(followid +" " +Session.get("clientid"))
            if(followid == Session.get("clientid")){
               $("#likeButton").css({"left":left,"top":top ,"display":"block","height":height,"width":width})
                                .transition({"left":left - 10,"top":top -10,"height":height +30,"width":width +30,"opacity":"1.0"},500)
                                .transition({"left":left ,"top":top,"height":height ,"width":width,"opacity":"0.5"},500)                                
                                .transition({"left":left - 10,"top":top -10,"height":height +30,"width":width +30,"opacity":"1.0"},500)
                                .transition({"left":left ,"top":top,"height":height ,"width":width,"opacity":"1.0"},500);
                  faceAwayLikeButton();          
                  faceAwayCommentButton();
                  animateFaceMove(); 
                  Session.set("actionFollow",votingid);
                  likeOnInstagram();
                  //$("#likeButton").hammer().on("tap",likeOnInstagram);
            }
            else{
                    if(followid){
                        Session.set("followFollow",followid);
                        $("#followButton").css({"left":left,"top":top ,"display":"block","height":height,"width":width})
                                        .transition({"left":left - 10,"top":top -10,"height":height +10,"width":width +10,"opacity":"1.0"},500)
                                        .transition({"left":left ,"top":top,"height":height ,"width":width,"opacity":"0.5"},500)                                
                                        .transition({"left":left - 10,"top":top -10,"height":height +10,"width":width +10,"opacity":"1.0"},500)
                                        .transition({"left":left ,"top":top,"height":height ,"width":width,"opacity":"1.0"},500);
                        faceAwayFollowButton();
                        followOnInstagram();
                        addFollowPic();
                        //$("#followButton").hammer().on("tap",followOnInstagram);              
                    }
                                                                      
            } 
        }
        
        if(eventType == "tap"){
            animateBig(this); 
            if(followid == Session.get("clientid")){
                Session.set("actionFollow",votingid);
            }   
        }        
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "tapOnBigFeedSecond"});
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function showcomments(){
    // console.log(currentBigHtml)
    var html,p,img,clientid;
    var votes = $(currentBigHtml).children(".voting")
    var div = $("#showallcomments")[0];
    // console.log(div)
    for(var i=0,il=votes.length;i<il;i++){
        p = $(votes[i]).find("p").text();
        var clientid = $(votes[i]).attr("clientid");
        var votingid = $(votes[i]).attr("votingid");
        img = $(votes[i]).children("img").attr("src");
        clientid = $(votes[i]).attr("clientid");
        // console.log("p="+p+"/ img="+img)
        if(p){
            size = 20 * getRankLeader(clientid);
            size = Math.min(size,100);
            style="style='height: " +size +"px;'"
            // html = '<div class="commentwrapper" >'
            //         // +'<div class="imageComment" class="allcomment" style="float:left">'
            //     +'<img src='+img+'>'
            //         // +'</div>'
            //         // +'<div class="ui right labeled icon input submitComment" class="allcomment">'
            //             +'<i class="comment icon"></i>'
            //             +'<textarea disabled id="commentInput" type="text" cols="15" rows="4" placeholder="">'+p+'</textarea>'
            //         // +'</div>'
            //         +'<div id="cross" style=""><strong>x</strong></div>'
            //     +'</div>';
            html =  '<div class="commentwrapper" ' +style +'>'
                        +'<img class="' +votingid +'" src="'+img+'">'
                        +'<i class="comment icon"></i>'
                        +'<textarea disabled="" id="commentInput" type="text" rows="4" placeholder="">'+p+'</textarea>'              
                    +'</div>'
            // if(clientid == Session.get("clientid")){
            //     html = '<div class="commentwrapper"><div class="imageComment" class="allcomment" style="float:left">'
            //     +'<img src='+img+'></div><div class="ui right labeled icon input submitComment" class="allcomment"><i class="comment icon"></i>'
            //     +'<textarea disabled id="commentInput" type="text" cols="15" rows="4" placeholder="">'+p+'</textarea>'
            //     +'</div><div id="cross" style=""><strong>x</strong></div></div>';
            // }else{

            //     html = '<div class="imageComment" class="allcomment" style="float:left"><img src='+img+'></div><div class="ui right labeled icon input '
            //     +'submitComment" class="allcomment"><i class="comment icon"></i><textarea disabled id="commentInput" type="text" cols="15" rows="4"'
            //     +'placeholder="">'+p+'</textarea></div><div id="cross" style=""><strong>x</strong></div>';
            // }
            if(div)
            div.insertAdjacentHTML( 'beforeend', html );
        }
    }
    // $("commentwrapper img").hammer().off("tap");
    // $('#commentingCommentOverlay').animate({scrollTop: 5000 }, 10);
    $(".commentwrapper img").hammer().on("tap",voteOnComment);
    // console.log(currentBigHtml)

}
function voteOnComment(event){
    // console.log(event);
    // console.log(event.target.className);
    var votingid = event.target.className;
    Votes.update({"_id":votingid},{$inc : {"hits":1}});
}
function commentOneVote(){
    hideSpecialPopup("commentingOverlay");
    var value = $("#commentInput").val();
    var likeid = $("#commentingOverlay").attr("likeid");
    var CLIENTID = Session.get("clientid");
    // var clientid = $("#commentingOverlay").attr("clientid");
    // var voting = $("#"+likeid).children(".voting");
    var p = $(currentCommenting).find("p");
    var currImg = $(currentCommenting).find("img");
    var div = currentCommenting;
    var votingid = $(div).attr("votingid");
    // $(currentCommenting).css({"display":"block"});
    // console.log(currentCommenting);
    if(!value)
      return;
    if(p.length>0){
      var html = '<p class="triangle-right" style="top: -100%; left: -100%;">' +value +'</p>';
      $(currImg).css({"border-style":"inset"});
      $(p).text(value); 
      if(votingid){
        Votes.update({"_id":votingid},{$set :{"comment":value}});
      }
    }else{
      var html = '<p class="triangle-right" style="top: -100%; left: -100%;display:block;">' +value +'</p>'; 
      if(div)
      div.insertAdjacentHTML( 'beforeend', html );
      $(currImg).css({"border-style":"inset"});
      if(votingid){
        Votes.update({"_id":votingid},{$set :{"comment":value}});
      }
      $("#commentInput").val(null);
      onScore(10);
    }
    // $("#showallcomments").empty();
    var stringArray = value.split(" ");
    var selectitem = null;
    var str = "#";
    for(var i=0,il=stringArray.length;i<il;i++){
        selectitem = stringArray[i];
        if(selectitem.length >= str.length && selectitem.substring(0, str.length) == str){
          var keyword = selectitem.slice(1);
            var commentcurssor = SponserKeyword.findOne({"keyword":keyword})
            if(commentcurssor){
                console.log("you got 25 points");
                onScore(15,keyword);
            }
        }
    }
    // onScore(10);
    // $("currentCommenting").append(html)

    // for(var i=0,il=voting.length;i<il;i++){
    //     var vote = $(voting[i]);
    //     if(vote.attr("clientid") == clientid){
    //         var left = vote.css("left");
    //         var top = vote.css("top");
    //         var html = '<p class="triangle-right" style="left:' +(left) +";top:" +(top)  +';">' +value +'</p>';  
    //         $("#"+likeid).append(html);   
    //     }
    // }
    // Meteor.myElement = $("#"+likeid);
    // <p class="triangle-right" style="left:' +(left -10) +"%;top:" +(top -10)  +'%;">cdcd</p>    
}
function tapOnSend(event){
    var starttimer = new Date().getTime();
    try{
        var comment = $("textarea").val();
        var cursorRecomm = Feed.findOne({"_id":Session.get("actionFollow")});
        //console.log(Session.get("currentBig"));
        Comments.insert({ "comment": comment ,"likeid": Session.get("currentBig") ,"receiverid":cursorRecomm.followid, "senderid":Session.get("clientid")});
        $("textarea").val("");
        console.log(comment);
        mediaid = Session.get("currentBig");
        Meteor.call("commentOnInstagram",mediaid,comment,function(err,data){
          //console.log(err);
            if(err)
                toast(i18n.__("reqToCommentFailed"));
                //toast("Request to comment failed.");
            if(data)
                toast(i18n.__("reqToCommentCompleted"));
                //toast("Request to comment completed.");
          //console.log(data);
        });
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "tapOnSend"});
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function tapOnRightArrow(event){
    var starttimer = new Date().getTime();
    try{
                                                // should be a problem
        var cursorRecomm = Feed.find({"type" : 2/*,"display":"y"*/});
        // var cursorRecomm = Recommend.find({"seennotify" : true});
        if(cursorRecomm.count() == 0)
            return;
        var unseen = $(".unseen");
        unseen.show("show",function(){
            var localDiv = this;        
            setTimeout(function(){$(localDiv).hide("slow");},3000);
        });
        Meteor.setTimeout(function(){
            cursorRecomm.forEach(function(data){
                Feed.update({"_id":data._id},{$set :{"type" : 3,"source" : "seen"}});
                // Recommend.update({"_id":data._id},{$set :{"type" : "3","source" : "seen"}})
            })
        },unseen.length * 1500)
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "tapOnRightArrow"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function tapOnConnection(event){
    var status = Meteor.status().connected;
    if(status){
        //Not working at this moment
        //Meteor.disconnect();
    }
    else{
        Meteor.reconnect();
    }
    tapOnRightArrow();
}
//////Converted Events Ends/////

//Duplicate votes check
//Now user will never see the vote twice.
// function duplicateVote(){
//     return;
//     // depricated
//     // pushed on server side
//     var cursorVotes = Votes.find({"likeid":Session.get("currentBig"),"followid":Session.get("clientid")});
//     var count = cursorVotes.count();
//     // console.log(cursorVotes);
//     if(count > 1){
//         var smallDate = 0;
//         var firstCount = 1;
//         cursorVotes.forEach(function(data){
//             if(firstCount){                
//                 smallDate = data.date;
//                 return;
//             }
//             if(data.date < smallDate)
//                 smallDate = data.date; 
//         });       
//         cursorVotes = Votes.find({"likeid":Session.get("currentBig"),"followid":Session.get("clientid")});              
//         cursorVotes.forEach(function(data){
//             // console.log(typeof data.date);
//             // console.log(data.date);
//             // console.log(smallDate < data.date);
//             // console.log(smallDate +" " +data.date);
//             if(smallDate > data.date){
//                 // console.log("removed");
//                 Votes.remove({"_id":data._id}); 
//             }
//         }); 
//         toast(i18n.__("votedtwice"));
//         //toast("You voted twice.");
//     }    
// }
// https://trello.com/c/18Hm6qEi/347-feed-issue-on-start
// function removeAlreadyVoted (){
//     return;
//     // depricated
//     // pushed server side
//     // console.log("removeAlreadyVoted");
//     var cursorFeed = Feed.findOne({"likeid":Session.get("currentBig"),"clientid":Session.get("clientid"),"display":"y"});
//     if(!cursorFeed)
//         return;
//     var alreadyVoted = findVoted();
//     // console.log(alreadyVoted);
//     if(alreadyVoted){
//       var likeid = alreadyVoted.likeid;
//       // var currentTarget = $(".feed[likeid='" +likeid  +"'");
//       // console.log(currentTarget);
//       // if(currentTarget.length !=0){
//       //   var nextTarget = $(currentTarget[0]).next();
//       //   console.log(nextTarget);
//       //   Session.set("currentBig",$(nextTarget).attr("likeid"));
//       // }
//       // console.log("alreadyVoted");
//       updateCursor(alreadyVoted);
//       //removeCursorWithId(likeid,false);
      
//       // toast("already seen pic");
//     }
// }
function removeCursorWithId(likeid,withRecommend){
    var starttimer = new Date().getTime();
  // as per new version
  var cursorFeed = Feed.find({"clientid":Session.get("clientid"),"likeid":likeid});
  cursorFeed.forEach(function(data){
    if( (data.type == "2" || data.type == "3") && withRecommend){

    }
    else{
        if(data.display == "y")
      Feed.remove({"_id":data._id});
    }
  })
      MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function fitTextFunction(parent,child,fontSize){
    var starttimer = new Date().getTime();
    // console.log("fitTextFunction");
    try{
        if(fontSize > 100)  //want to make sure there is no infinite loops
            return;
        parent = ".header";
        child = ".header div";
        if(!fontSize)
        fontSize = 10;
        $(child).css({"font-size": fontSize +"px"});
        var parentHeight = $(parent).innerHeight();
        var parentWidth = $(parent).innerWidth();
        var childHeight = $(child).innerHeight()+2;
        var childWidth = $(child).innerWidth()+2;
        //console.log(childHeight +" " +childWidth +" " +fontSize);
        if(childWidth < parentWidth && childHeight < parentHeight){
            fitTextFunction(parent,child,++fontSize); 
        }
        else{
            fontSize -= 5;
            $(child).css({"font-size": fontSize +"px"});
            $("#tapmateLogo").css({"height" : childHeight,"width":childHeight});
            $(".appname").html("");
            $(".three").html("");
        }
        //$(".header div").fitText();
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "fitTextFunction"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}

/// Not using dynamic loading but will require soon.

// function loadjscssfile(filename, filetype){
//  if (filetype=="js"){ //if filename is a external JavaScript file
//   var fileref=document.createElement('script')
//   fileref.setAttribute("type","text/javascript")
//   fileref.setAttribute("src", filename)
//  }
//  else if (filetype=="css"){ //if filename is an external CSS file
//   var fileref=document.createElement("link")
//   fileref.setAttribute("rel", "stylesheet")
//   fileref.setAttribute("type", "text/css")
//   fileref.setAttribute("href", filename)
//  }
//  if (typeof fileref!="undefined")
//   document.getElementsByTagName("head")[0].appendChild(fileref)
// }
// function removejscssfile(filename, filetype){
//  var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
//  var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
//  var allsuspects=document.getElementsByTagName(targetelement)
//  for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
//   if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
//    allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
//  }
// } 
var defaultFeedArray = 
[
{likeid: "662341395520389209_363620479",low: "http://distilleryimage0.s3.amazonaws.com/1f5c982a9cae11e3b4f00e8811d39b04_6.jpg"},
{likeid: "594764576135283612_363620479",low: "http://distilleryimage0.s3.amazonaws.com/57ec1704536d11e3b8cd1227d7fa1b14_6.jpg"},
{likeid: "586163271886612245_3877984",low: "http://distilleryimage9.s3.amazonaws.com/007eebd84a1a11e381410e5cd106ae28_6.jpg"},
{likeid: "586216653187884167_3877984",low: "http://distilleryimage11.s3.amazonaws.com/d1772b024a2811e38f3c0ab06fdbedbd_6.jpg"}
]
// function defaultfeeds(){
//     var starttimer = new Date().getTime();
//     var preload = null;
//     preload = get("preload");
//     if(!preload){
//         for(var i=0,il=defaultFeedArray.length;i<il;i++){
//             var insert = defaultFeedArray[i];
//             insert.date = new Date().getTime();
//             insert.display = "y";
//             insert.type = 1;
//             insert.checked = false;
//             insert.source = "preload";
//             insert.clientid = Session.get("clientid");
//             insert.checked = false;
//             Feed.insert(insert);
//         }
//         set("preload",true);
//     }
    
//     MethodTimer.insert({"clientid":Session.get("clientid"),"name":"defaultfeeds","time":((new Date().getTime())-starttimer)});
// }
function logOutUser(){
    var starttimer = new Date().getTime();
    try{
        $("#loader").show();
        //console.log(Accounts);
        if(Session.get("phonegap")){
            var urlHistoryCount = 0;
            var url = "https://instagram.com/accounts/logout/";
            anotherWindow = window.open(url, '_blank', 'location=yes');
            window['mywindow'] = anotherWindow;
            window['mywindow'].addEventListener('loadstart', function(event) {
                if(urlHistoryCount){      
                    showLoader(); 
                    window['mywindow'].close();                                
                }
                urlHistoryCount++;
            });
            //
        }
        // stopFirstTimeLoader("logout");
        //console.log("logging out");
        showLoader("Logging Out User..");
        Me.update({"_id":Session.get("clientid")},{$inc : {"logout":1}});
        Meteor.logout(afterLogOut);
        
        Session.set("clientid",null);
        window.localStorage.setItem("clientid","");
        $("#alreadyUser").hide();
        openCloseSnapLeft();
        window.localStorage.clear();
        swipeLeft();
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "logOutUser"});
    }
    
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function afterLogOut(){
    // hideLoader();
    showLoader("You have been LogOut.");
    window.location.reload();
    //console.log("LogOutSuccess");
}

function commentOnInstagram(){
    var starttimer = new Date().getTime();
    try{
        if(!this.value)
            return;
        var mediaid = Session.get("currentBig");
        var comment = "Hello World";
        toast(i18n.__("reqToCommentSent"));
        //toast("Request to comment is sent.");
        Meteor.call("commentOnInstagram",mediaid,comment,function(err,data){
          //console.log(err);
            if(err)
                toast(i18n.__("reqToCommentFailed"));
                //toast("Request to comment failed.");
            if(data)
                toast(i18n.__("reqToCommentCompleted"));
                //toast("Request to comment completed.");
          //console.log(data);
        });
        this.value = "";
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "commentOnInstagram"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function likeOnInstagram(){
    var starttimer = new Date().getTime();
    try{
        var currentBig = Session.get("currentBig");
        var clientid = Session.get("clientid");
        var cursorMedia = Media.findOne({"_id":currentBig});
        if(cursorMedia){
            toast(i18n.__("likedata")+" "+cursorMedia.username+"  <i class='checkmark icon'></i>");
        }
        //toast(i18n.__("like"));
        //toast("Like <i class='cloud upload icon'></i>");
        Meteor.call("LikeOnMedia",currentBig,clientid,function(err,data){
        //console.log(err);        
            if(err)
                toast(i18n.__("likeerror"));
                //toast("Like <i class='warning icon'></i>");
            if(data){
                var cursorMedia = Media.findOne({"_id":currentBig});
                if(cursorMedia){
                    toast(i18n.__("likedata")+" "+cursorMedia.username+"<i class='cloud upload icon'></i>");
                }
            }
                //toast(i18n.__("likedata"));
                //toast("Like <i class='checkmark icon'></i>");
        })
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "likeOnInstagram"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function addFollowPic(){
    var starttimer = new Date().getTime();
    try{
        var followid = Session.get("followFollow");
        Meteor.call("followFollow",followid,function(err,data){});
    }catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "addFollowPic"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function followOnInstagram(){
    var starttimer = new Date().getTime();
    try{
        var followid = Session.get("followFollow");
        //console.log(followid);
        //toast(i18n.__("follow"));
        //toast("Follow <i class='cloud upload icon'></i>");
        var cursorFollow = Follows.findOne({"followid":followid})
        if(cursorFollow){
                    toast(i18n.__("followdata")+" "+cursorFollow.username+" <i class='cloud upload icon'></i>");
        }
        Meteor.call("followOnInstagram",followid,function(err,data){
            //console.log(err);
            //console.log(data);
            if(err)
                toast(i18n.__("followerror"));
                //toast("Follow <i class='warning icon'></i>");
            if(data){
                var cursorFollow = Follows.findOne({"followid":followid})
                if(cursorFollow){
                            toast(i18n.__("followdata")+" "+cursorFollow.username+" <i class='checkmark icon'></i>");
                }
            }
                //toast(i18n.__("followdata"));
                //toast("Follow <i class='checkmark icon'></i>");
        });
        Me.update({"_id":Session.get("clientid")},{$inc :{"follownew":1,"yfollownew":1,"mfollownew":1,"wfollownew":1,"dfollownew":1}});
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "followOnInstagram"});
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
var buttonCloneArray = [];
function finishAnimateVotes(){
   var starttimer = new Date().getTime();    
$(".recomm").animate({"height":"40px","width":"60px"}) // 40 60
                $(".voting").animate({"height":"40px","width":"40px"}) // 40 40

                $(".voting").each(function(index,element){
                    // console.log(element);
                    var buttonClone = null;
                    if($(element).attr("myid") == Session.get("clientid")){
                        buttonClone = $("#likeButton").clone();
                    }
                    else{
                        buttonClone = $("#followButton").clone();
                    }
                    // console.log(buttonClone);
                    buttonCloneArray.push(buttonClone);
                    $(buttonClone).css({"left":$(element).css("left"),"top":$(element).css("top"),"height": "40px","width":"40px","display":"block"});
                    $("#bodyWrapper").append(buttonClone);
                })                
                setTimeout(function(){
                    var popClone = null;
                    for(var i=0,il=buttonCloneArray.length;i<il;i++){
                        popClone = buttonCloneArray.pop();
                        $(popClone).remove();
                        popClone = null;
                    }
                },2000);  
                    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
// function animateVotes(total,count,type){
//     try{
//         var element = total[count];
//         if(!element){
//             if(type == "recomm"){
//                 finishAnimateVotes();
//             }
//             return;
//         }
//         $(element).hammer().off("tap");
//         $(element).hammer().off("doubletap");  

//         $(element).css({"opacity":"1"});
//         var left = $(element).css("left");
//         var top = $(element).css("top"); 
        
//         // $(element).css({"left":"0%","top":"40%","width":"100%","height":"50%"});   
//         $(element).css({"left":"45%","top":"-10%"});   
//         $(element).animate({"left":left,"top":top,"height":"80px","width":"80px"},1000,"easeOutBounce",function(){
//             //console.log(element);
//             if(type == "voting"){
//                 $(element).hammer().on("doubletap",tapOnVoting);
//                 $(element).hammer().on("tap",tapOnVoting);                
//             }
//             else{
//                 $(element).hammer().on("tap",tapOnRecomm);
//             }
//             count++;
//             animateVotes(total,count,type);
//         });
//     }
//     catch(error){
//         console.log(error);
//         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "animateVotes"});
//     }
    
// } 

// function animateOnVote (){
//     try{
//         // depricated
//         // https://trello.com/c/ijtPllcx/429-stop-animating-votes-just-place-them
//         return;
//         var voting = $(".voting").css({"opacity":"0.0"}); //$(".voting:not(.voting[myid='" +Session.get("clientid") +"'])"); //
//         var recomm = $(".recomm").css("opacity","0.0");
//         //$(".voting[myid='" +Session.get("clientid") +"']").css("opacity","1.0");
//         //console.log(voting);
//         //if(voting.length!=0){
//           animateVotes(voting,0,"voting");            
//         //}
//         setTimeout(function(){animateVotes(recomm,0,"recomm")},voting.length * 1000);  
//         //animateQuadrantPics();
//         //changed as per new spec
//     }
//     catch(error){
//         console.log(error);
//         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "animateOnVote"});
//     }
    
// }
function animateFaceMove(){
    var starttimer = new Date().getTime();
    $("#overlay").show();
    $("#moveFace").animate({"top":"70%"},1000,"easeOutBounce",function(){
        $("#moveFace").animate({"top":"20%"},1000,"easeOutBounce",function(){
        });
    });
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function animateStopFaceMove(){
    $("#moveFace").stop();
}

var quadrantRollOutCount = 0;
// function animateQuadrantPicsOnTap(){
//     if(quadrantRollOutCount >5)
//         return;
//     quadrantRollOutCount++;
//     // $("#quadrant").css({"z-index":"2"});
//     var quad = $(".mainQuadrant");  
//     // console.log(quad);
//     animateEachQuadrantOnTap(quad,0);
//     $("#loveQuadrant").css({"display":"block","opacity":"1.0"})
//     $("#promoteQuadrant").css({"display":"block","opacity":"1.0"})
//     setTimeout(function(){
//         $("#loveQuadrant").css({"display":"none","opacity":"0.0"})
//         $("#promoteQuadrant").css({"display":"none","opacity":"0.0"})
//     },2000)
    
// }
// only animate the quad where the event happened. not cycle through them, we changed this
// function animateEachQuadrantOnTap(ele,count,type){
//     // try{
//         var element = ele[count];        
//         // if(!element){
//         //     if(type =="tutorial"){
//         //         animatateClickOnLike(); 
//         //         $("#popup").unbind("click");//might come up with a bug
//         //         $("#popup").hammer().on("tap",nextAnimation);
//         //         nextCouter = 0;                    
//         //     }
//         //     return;
//         // }
//         // if(type == "tutorial"){
//         //     var text = "If you want to be " + message[count] +".<br> Place your Face here.";
//         //     $("#popupMessage").html(text);
//         // }   
//         if(!element)
//             return;
//         // console.log(element); 
//         $(element).css({"opacity":"1"});
//         setTimeout(function(){
//             // console.log(element);
//             $(element).css({"opacity":"0"});
//         },500);
//         setTimeout(function(){   
//                 // console.log(count)         
//                 count++;
//                 animateEachQuadrantOnTap(ele,count,type);            
//         },1000)
//         // function(){ 
//         //     console.log(element);       
//         //     $(element).css({"opacity":"0"},500,function(){
//         //         count++;
//         //         animateEachQuadrant(ele,count,type);
//         //     });
//         // }
//         // setTimeout(function(){
            
//         // },1000)
//     // }
//     // catch(error){
//     //     console.log(error);
//     //     ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "animateEachQuadrant"});
//     // }
    
// }
// function animateFeedToBig(ele){
//     try{
//         animateQuadrantPicsOnTap();
//         return true;
//         $(".bigFeed").css({"opacity":"0"});
//         if(bigClone){
//             $(bigClone).remove();
//             bigClone = null;
//         }
        
//         bigClone = $(ele).clone();
//         $(bigClone).hammer().on("tap",tapOnBigFeed);
//         $("#wrapperSec").append(bigClone);
//         $(bigClone).removeAttr("class").css({"position":"absolute","z-index":"99","left":$(ele).offset().left,"top":$(ele).offset().top});
        
//         $(bigClone).animate({"left":"0%","top":"40%","height":"60%","width":"100%"},"slow","easeOutBounce",function(){
//             $(bigClone).animate({"opacity":"0.0"},"slow","easeOutBounce",function(){
//                 $(".bigFeed").css({"opacity":"1"});
//                 $(bigClone).remove();
//                 bigClone = null;    
//                 animateQuadrantPicsOnTap();
//             })        
//         });
//     }
//     catch(error){
//         console.log(error);
//         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "animateFeedToBig"});
//     }
    
// }

function hideLikeButton(){
    if(likeTimeOutId)
        Meteor.clearTimeout(likeTimeOutId)    
    $("#likeButton").hide();
}
function hideFollowButton(){
    if(followTimeOutId)
        Meteor.clearTimeout(followTimeOutId)    
    $("#followButton").hide();
}
function hideCommentButton(){
    if(commentTimeOutId)
        Meteor.clearTimeout(commentTimeOutId);    
}
function faceAwayLikeButton(){
    if(likeTimeOutId)
        Meteor.clearTimeout(likeTimeOutId)
        likeTimeOutId = Meteor.setTimeout(function(){
          $("#likeButton").hide("slow");
    },5000)
}
function faceAwayFollowButton(){
    if(followTimeOutId)
        Meteor.clearTimeout(followTimeOutId)
        followTimeOutId = Meteor.setTimeout(function(){
          $("#followButton").hide("slow");
    },5000)
}
function faceAwayCommentButton(){
    if(commentTimeOutId)
        Meteor.clearTimeout(commentTimeOutId)
        commentTimeOutId = Meteor.setTimeout(function(){          
    },5000)
}
function hideAllButtons(){
    hideFollowButton();
    hideLikeButton();
    hideCommentButton();
}
function closeOverlay(){
    $("#overlay").hide();
    Session.set("actionFollow",null);
    Session.set("recommendedFollow",null);
}
function swipeLeft(event){
    if(event){
        if(event.gesture)
            event.gesture.preventDefault();
        event.preventDefault(); 
    }
    $("#outer").animate({"opacity":"0.0"},500,"linear")
    $("#hprogressBar").animate({"opacity":"0.0"},500,"linear")
    $("#inner-inner").animate({"opacity":"0.0"},500,"linear")
    $("#inerhprogressBar").animate({"opacity":"0.0"},500,"linear")
    // if(Hammer.utils.isVertical(event.gesture.direction)) { return; }
    //     event.gesture.preventDefault();
    // }
    var starttimer = new Date().getTime();
    try{
        hideAllButtons();
    
        if(swipeClone){
            $(swipeClone).remove();
            swipeClone = null;
        }
        swipeClone = $(".bigFeed").clone();
        $(swipeClone).stop().css({"z-index":"5","opacity":"1.0"});    
        
        $("#section4").prepend(swipeClone);
        $(swipeClone).stop().transition({"left":"-100%"},"slow","easeOutBounce",function(){
            $(swipeClone).remove();
            swipeClone = null;
            //animateQuadrantPics();
        });

        var active = $(".likeActive");
        var likeid = $(active).attr("likeid");
        if(likeid){
            var dummyJson = {};
            dummyJson.likeid = likeid;
            updateCursor(dummyJson);
        }
        var firstFeed = $(".feed:first")
        var next = active.next(".feed");
        if(next.length == 0 ){
          next = firstFeed;
        }
        if(firstFeed.css("display") == "none"){
            next = firstFeed;
            unblockRecommendIndividually(next.attr("likeid"))
        }
        if(next.length !=0){
            active.removeClass("likeActive");
            next.addClass("likeActive");
            beforeCurrentBig()
            Session.set("currentBig",next.attr("likeid"));
        }
        hideAllButtons();
        Me.update({"_id":Session.get("clientid")},{$inc : {"swipeleft":1,"yswipeleft":1,"mswipeleft":1,"wswipeleft":1,"dswipeleft":1}});
        closeOverlay();        
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "swipeLeft"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function swipeRight(event){
    if(event){
        if(event.gesture)
            event.gesture.preventDefault();
        event.preventDefault(); 
    }
    $("#outer").animate({"opacity":"0.0"},500,"linear")
    $("#hprogressBar").animate({"opacity":"0.0"},500,"linear")
    $("#inner-inner").animate({"opacity":"0.0"},500,"linear")
    $("#inerhprogressBar").animate({"opacity":"0.0"},500,"linear")
    // if(Hammer.utils.isVertical(event.gesture.direction)) { return; }
    //     event.gesture.preventDefault();
    // }
    var starttimer = new Date().getTime();
    try{
        hideAllButtons();
        if(swipeClone){
            $(swipeClone).remove();
            swipeClone = null;
        }
        swipeClone = $(".bigFeed").clone(); 
    
        $(swipeClone).stop().css({"z-index":"5","opacity":"1.0"});       
        $("#section4").prepend(swipeClone);
        $(swipeClone).stop().transition({"left":"100%"},"slow","easeOutBounce",function(){        
            $(swipeClone).remove();
            swipeClone = null;
            //animateQuadrantPics();
        })
        var active = $(".likeActive");
        var likeid = $(active).attr("likeid");
        if(likeid){
            var dummyJson = {};
            dummyJson.likeid = likeid;
            updateCursor(dummyJson);
        }
        var next = active.prev(".feed");  
        if(next.length ==0){
          next = $(".recentIcons:first");
        }
        var firstFeed = $(".feed:first");
        if(firstFeed.css("display") == "none"){
            next = firstFeed;
            unblockRecommendIndividually(next.attr("likeid"))
        }       
        if(next.length !=0){
            active.removeClass("likeActive");
            next.addClass("likeActive");
            beforeCurrentBig();
            Session.set("currentBig",next.attr("likeid"));
        }
        hideAllButtons();
        Me.update({"_id":Session.get("clientid")},{$inc : {"swiperight":1,"yswiperight":1,"mswiperight":1,"wswiperight":1,"dswiperight":1}});
        closeOverlay();
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "swipeRight"});
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function unblockRecommendIndividually(likeid){
    var cursorFeed = Feed.findOne({"type" : 2,"likeid":likeid});
    if(cursorFeed)
    Feed.update({"_id":cursorFeed._id},{$set :{"type" : 3,"source" : "seen"}})
}
function findVoted(){
    return Votes.findOne({"likeid":Session.get("currentBig"),"followid":Session.get("clientid")});// || Recommend.findOne({"likeid":Session.get("currentBig")});
}
function autoLogin(){
    try{
        ClientId = window.localStorage.getItem("clientid");
        // if(ClientId == "491204471" && !DebugFace){
        //     window.localStorage.clear();
        //     ClientId = null;
        //     return ;
        // }
       if(isNaN(ClientId)){
            if(get("password")){
                console.log("Logged in with password.");
                Session.set("clientid",ClientId);
                suscribeMeteor(ClientId);
                Session.set("username",ClientId);
                profilePic = ".images/face.jpg";
                Meteor.call("getLoginStatus",ClientId,function(err,data){                    
                });
                restoreCollection();
            }
            else{
                console.log("No password found.");
                $("#loginScreen").show();
                $("#seErrorLogin").removeClass("ui error message").addClass("ui ignored warning message");
                $("#errorMessage").text("Enter username and password.")
                $("#seErrorLogin").css("display","block");
            }
            // Tapmate user conditions
            return ;
        }
        if(ClientId){
            preLoginAct();
            //console.log(ClientId);

            Session.set("clientid",ClientId);
            suscribeMeteor(ClientId);        
            Session.set("username",window.localStorage.getItem("username"));
            Me.update({"_id":Session.get("clientid")},{$inc : {"alreadyloggedin":1,"yalreadyloggedin":1,"malreadyloggedin":1,"walreadyloggedin":1,"dalreadyloggedin":1}});
            firstTimeLoginFlag = true;
            // Meteor.call("firstTimeLogin",Session.get("clientid"),function(err,data){                
            //     if(data){
            //         window.localStorage.setItem("profile_picture",data.profile_picture);
            //         profilePic = data.profile_picture;
            //     }                
            // });
            //console.log(profilePic);
            checkFormAndTimer();
            restoreCollection();
            removeDOMElement();
            //showKeywordPopup();
            //showLoader("Populating pictures");
        }
        else{
            $("#loginScreen").show();
            $("#seErrorLogin").removeClass("ui error message").addClass("ui ignored warning message");
            $("#errorMessage").text("Enter username and password.")
            $("#seErrorLogin").css("display","block");
            // hideLoader();
            // GoodBye Guest ID
            // ClientId = "guest"+Random.id()
            // set("clientid",ClientId)
            // Session.set("clientid",ClientId);
            // suscribeMeteor(ClientId);
            // Session.set("username",ClientId);
            // Meteor.call("guestFirstTimeLogin",ClientId,function(){
            //     console.log("finish");
            // });
        }
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "autoLogin"});
    }
                       
}
function removeDOMElement(){
    // gives bug after logout, everything remains in the DOM.
    // return;
    // Add any dom elements which are not required once login get's through
    $("#loginScreen").remove();
    $("#tutorial").remove();
    $("#tutorialButton").remove();
    $("#instructionPanel").remove();
    // $("#tutorialButton").remove();
    // $("#tutorial").remove();
    // $("#tutorialButton").remove();
}
function tapOnAlpahbet(){
    var starttimer = new Date().getTime();
    try{
        //console.log(this)
        var value = $(this).attr("val");    
        Session.set("searchByFollow",value);
        Session.set("group",null);
        //console.log(value)
        $("#keyboardButton").text(value);
    
        //console.log($(this).attr("val"));
        $("#keyboard").hide();
        $("#keyboard").html("");
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "tapOnAlpahbet"});
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
var startAlphabet = "@";
function tapOnKeyboardButton(){
    var starttimer = new Date().getTime();
    for(var i=0,il=26;i<il;i++){
        startAlphabet = String.fromCharCode(startAlphabet.charCodeAt(0) + 1)
        $("#keyboard").append('<li val="' +startAlphabet+'|' +startAlphabet.toLowerCase()+'"> ' +startAlphabet+' </li>');
    }
    startAlphabet = "@";
    $("#keyboard").append('<li val="0-50"> 0-50 </li>')
    $(".keyboard li").hammer().on("tap",tapOnAlpahbet);
    var display = $("#keyboard").css("display");
    var displayFlag = true; 
    if(display == "none"){
        $("#keyboard").show("slow");    
        displayFlag = false;
    }   
    if(display == "block"){
        $("#keyboard").hide("slow");    
        displayFlag = false;
    }
    if(displayFlag){
        $("#keyboard").hide("slow");
        $("#keyboard").html("");
    }   
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});    
}
function onPause(){
    var starttimer = new Date().getTime();
    foreground = false;
    saveCollection();
    clearInterval(locatationIntervalId);
    //window.plugins.statusBarNotification.notify("Youiest/Tapmate", "your app is in background will receive notification");
}
function onResume(){
    foreground = true;
    location();
    // Bug found on resume so closing until new request in.
    // if(onResumeMessageBucket)
    //     Session.set("currentBig",onResumeMessageBucket);
    // onResumeMessageBucket = null;
}
function onOnline(){
    Meteor.reconnect();
}
function onLoginWithApp(){ 
    $("#form").css("top","0%")
    $("#form").show();  
    $("#form").animate({ "top": "43%" }, 700);   
    // $(this).attr
}

function onSignupWithAppButton(){
    var starttimer = new Date().getTime();
    try{
        var username = $("input[name='username']").val(),
        password = $("input[name='password']").val(),
        email = $("input[name='email']").val();
        
        //console.log(username);
        //console.log(password);
        //console.log(email);
        var validateEmailResult = validateEmail(email)
        // console.log(validateEmailResult);
        if(!validateEmailResult){
            //toast("Invalid Email Address");       
            $("#loginform").shake();
            return; 
        }
        Meteor.call("signupWithApp",email,password,function(err,data){
            if(err){
                GlobalError = err;
                toast(i18n.__("somethingWrong"));
                //toast("something went wrong !!");
                return ;
            }
            if(data){
                if(data == -1){
                    // logOutUser();
                    // toast("login with instagram first");
                    // toast(i18n.__("loginWithInstagram"));
                    //toast("login with instagram first");
                    return ;
                }
                else if(data == -2){
                    toast(i18n.__("noDatabase"));
                    //toast("Not found in database");
                }
                else{
                    //console.log(data);
                }
            }
            hideLoginForm();    
        })
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "onSignupWithAppButton"});
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function onLoginWithAppButton(){
    var starttimer = new Date().getTime();
    try{
        var username = $("input[name='username']").val(),
        password = $("input[name='password']").val(),
        email = $("input[name='email']").val();
        
        // console.log(username);
        // console.log(password);
        // console.log(email);
        Meteor.call("loginWithApp",email,password,function(err,data){
            //console.log("loginWithApp");
            //console.log(err);
            //console.log(data);
            if(err){
                GlobalError = err;
                toast(i18n.__("somethingWrong"));
                //toast("something went wrong !!");
                return ;
            }
            if(data){
                if(data == -1){
                    toast(i18n.__("notRecognize"));
                    //toast("I didn't recognize you. Sorry !!");
                }
                else{                
                    //console.log(data);
                    var token = data.token[data.token.length-1].token;
                    Accounts._makeClientLoggedIn(data.id,token);
                    Session.set("clientid",data.clientid); 
                    suscribeMeteor(data.clientid);               
                }
            }
            $("#loginform").hide();    
        })
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "onLoginWithAppButton"});
    }
          MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});  
}
function onClickPopular(){
    var starttimer = new Date().getTime();
    try{
        toast(i18n.__("popular"));
        //toast("Popular Picture <i class='cloud upload icon'></i>");
        var currentTarget = this;
        $(currentTarget).hide();
        Meteor.call("popular",Session.get("clientid"),function(err,data){
            $(currentTarget).show();
            if(err){  
                toast(i18n.__("popularerror"));              
                //toast("Popular Picture <i class='warning icon'></i>");
            }
            if(data){
                //console.log("Request to popular pictures completed")
                toast(i18n.__("populardata"));
                //toast("Popular Picture <i class='checkmark icon'></i>");
                //loader complete
            }
        });
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "onClickPopular"});
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
// When the user click on Section 3 this function will react.
function onClickGlobalFeed(game){
    
    var starttimer = new Date().getTime();

    if(!game)
    toast(i18n.__("globalFeed"));
    //toast("Global Feed <i class='cloud upload icon'></i>");
    var currentTarget = this;
    $(currentTarget).hide();
    Meteor.call("globalfeed",Session.get("clientid"),function(err,data){
        $(currentTarget).show();
        //console.log(err);
        if(err){
            if(!game)            
            toast(i18n.__("globalFeederror"));
            //toast("Global Feed <i class='warning icon'></i>");
        }
        if(data){
            if(!game)    
            toast(i18n.__("globalFeeddata"));        
            //toast("Global Feed <i class='checkmark icon'></i>");
            //console.log("globalfeed")
            //loader complete
        }
    });
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
// function bindLanguage(){
//     //console.log("bindLanguage");
//     i18n = new I18n({
//     directory: "/locales",
//     locale: "en",
//     extension: ".json"
//   });
//     //console.log(i18n);;
// }
var en=null;
function temporarylang(){
    var starttimer = new Date().getTime();
                language = {}
                i18n.__ = function(value){
                    if(language[value])
                        return language[value];
                    else
                        return "";
                }
                var tempLanguage = null //get("language");
                var saveLanguage = null;
                tempLanguage = get("language");
                if(tempLanguage && tempLanguage!=null){
                    tempLanguage = EJSON.parse(tempLanguage);
                    convertLanguage(tempLanguage)
                }
                else{
                    Meteor.call("getLanguage","en",function(err,data){
                        if(data){
                            saveLanguage = EJSON.stringify(data);
                            set("language",saveLanguage);
                            convertLanguage(data)
                        }
                        if(err)
                            temporarylang()
                    })
                } 
                
                
                
}
function convertLanguage(data){
    var starttimer = new Date().getTime();
    language = data.toast;
    var html = {};
    for(var i=0,il=data.html.length;i<il;i++){
        var currentHTML = data.html;
        html[currentHTML[i][1]] = language[currentHTML[i][1]];
        
    }       
    $.i18n.load(html);
    for(var i=0,il=data.html.length;i<il;i++){
        var currentHTML = data.html;
        $(currentHTML[i][0])._t(currentHTML[i][1]);
        delete language[currentHTML[i][1]];
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
//////////////////////////////////////////language start/////////////////////////

function onSetLang(){

    // var currlang = $(this).attr("value");
    // //console.log(selLang);
    // // var e = document.getElementById("langswitch");    
    // // var selLang = e.options[e.selectedIndex].value; 
    // window.localStorage.setItem("lang",currlang);
    // selectlang(currlang);
    $("#language").hide();
    $("#languageBackground").hide();
    $("#language").html("");
}
/*
function loadLangPart2(){
    $.i18n.load(language);
    $('a#aboutUsButton')._t('about');
    $('a#alreadyMessage')._t('alreadyMessage');
    $('a#loginButton')._t('Login With Instagram');
    $('a#logout')._t('Logout');
    $('a#contest')._t('Contest');
    $('a#pushNotification')._t('Push Notification');
    $('a#languageButton')._t('languageButton');
    $('b#Recentslabel')._t('Recentslabel');
    $('div#menuGame')._t('Game');
    $('div#accounts')._t('accounts');
    $('div#settings')._t('settings');
    $('div#tapmate')._t('tapmate');
    $('div#menuHelp')._t('help');
    $('div#menubug')._t('menubug');
    $('label#appOptimize')._t('optimize');
    $('a#contactUsButton')._t('Contact Us');
    $('a#tutorialButtonMenu')._t('Tutorial');
    $('a#instruction')._t('Instruction');
    $('a#startWalkthrough')._t('Walkthrough');
    $('a#ContactUsPopUp')._t('ContactUsPopUp');
    $('a#termsandcondition')._t('termsandcondition');
    $('a#AboutUsPopUp')._t('AboutUsPopUp');
    $('a#videotutorial')._t('videotutorial');
    $('a#loginwithInsta')._t('loginwithInsta');
    $('a#loginwithfb')._t('loginwithfb');
    $('a#loginwithgoog')._t('loginwithgoog');
    // $('a#AggrementAccept')._t('I aggree'); 
    $('a#sendMail')._t('sendMail');
}
function selectlang(currlang){
            $.getJSON("./locales/"+currlang+".json",function(result){
                language = {}
                  $.each(result, function(key, value){
                    language[key] = value;
                    //console.log(key);
                  });
                    i18n.__ = function(value){
                    return language[value];
                    }
                    loadLangPart2();
                });
                // var ur = {
                //   "Logout"                  :'باہر لاگ ان کریں<i class="sign out icon"/>',
                //   "about"                   :'کے بارے میں<i class="font icon"/>',
                //   "alreadyMessage"          : "اپنے آپ کو تسلیم نہیں کرتے ہیں؟<br> <br> کے Instagram کے ساتھ لاگ ان کریں.",
                //   "Login With Instagram"    :"کے Instagram ساتھ لاگ ان کریں",
                //   "Contact Us"              :'ہم سے رابطہ کریں<i class="phone icon"/>',
                //   "languageButton"          :'لغة/(Language)',
                //   "Contest"                 :'مقابلہ<i class="time icon"></i> ',
                //   "Push Notification"       :'پش نوٹیفیکیشن',
                //   "optimize"                :'<input id="optimizeCheckBox" type="checkbox"> کو بہتر بنانے کے',
                //   "help"                    :'مدد',
                //   "Game"                    :'کھیل',
                //   "Tutorial"                :'ٹیوٹوریل<i class="magic icon"/>',
                //   "Instruction"             :'ہدایات<i class="info icon"/>',
                //   "Walkthrough"             :'واک تھرو<i class="won icon"/>',
                //   "ContactUsPopUp"          :'ہمیں کسی بھی کیڑے ای میل کریں آپ کو تلاش:<br/>tapmate@youiest.com<br/>کیڑے braving کے لئے آپ کا شکریہ! <br/>ہم آپ کو اس crazily بہت اچھا ہے اتفاق کرتا ہوں امید ہے کہ.',
                //   "AboutUsPopUp"            :'Tapmate کے Instagram (ٹ م) API کا استعمال کرتا ہے اور (ٹ م) کی علامات اور اس اپلی کیشن پر دکھایا ٹریڈ مارک کے Instagram، انکارپوریٹڈ، کی ملکیت ہیں کی توثیق یا Instagram کی طرف سے تصدیق نہیں ہے',
                //   "termsandcondition"       :'<b>شرائط و ضوابط</b> <br/> کو قبول کرتے ہوئے میں آپ کو نیچے دیئے گئے لنک پر تمام معاہدوں کو قبول اتفاق کرتا ہوں <a href="https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy"/>.',
                //   "I aggree"                : 'میں اتفاق کرتا ہوں', 
                //   "sendMail"                :'میل بھیجیں',
                //   "videotutorial"           :"دروس الفيديو",
                // };
                // var ar = {
                //   "Logout"                  :'باہر لاگ ان کریں<i class="sign out icon"/>',
                //   "about"                   :'کے بارے میں<i class="font icon"/>',
                //   "alreadyMessage"          : "اپنے آپ کو تسلیم نہیں کرتے ہیں؟<br> <br> کے Instagram کے ساتھ لاگ ان کریں.",
                //   "Login With Instagram"    :"کے Instagram ساتھ لاگ ان کریں",
                //   "Contact Us"              :'ہم سے رابطہ کریں<i class="phone icon"/>',
                //   "languageButton"          :'لغة/(Language)',
                //   "Contest"                 :'مقابلہ<i class="time icon"></i> ',
                //   "Push Notification"       :'پش نوٹیفیکیشن',
                //   "optimize"                :'<input id="optimizeCheckBox" type="checkbox"> کو بہتر بنانے کے',
                //   "help"                    :'مدد',
                //   "Game"                    :'کھیل',
                //   "Tutorial"                :'ٹیوٹوریل<i class="magic icon"/>',
                //   "Instruction"             :'ہدایات<i class="info icon"/>',
                //   "Walkthrough"             :'واک تھرو<i class="won icon"/>',
                //   "ContactUsPopUp"          :'ہمیں کسی بھی کیڑے ای میل کریں آپ کو تلاش:<br/>tapmate@youiest.com<br/>کیڑے braving کے لئے آپ کا شکریہ! <br/>ہم آپ کو اس crazily بہت اچھا ہے اتفاق کرتا ہوں امید ہے کہ.',
                //   "AboutUsPopUp"            :'Tapmate کے Instagram (ٹ م) API کا استعمال کرتا ہے اور (ٹ م) کی علامات اور اس اپلی کیشن پر دکھایا ٹریڈ مارک کے Instagram، انکارپوریٹڈ، کی ملکیت ہیں کی توثیق یا Instagram کی طرف سے تصدیق نہیں ہے',
                //   "termsandcondition"       :'<b>شرائط و ضوابط</b> <br/> کو قبول کرتے ہوئے میں آپ کو نیچے دیئے گئے لنک پر تمام معاہدوں کو قبول اتفاق کرتا ہوں <a href="https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy"/>.',
                //   "I aggree"                : 'میں اتفاق کرتا ہوں', 
                //   "sendMail"                :'میل بھیجیں',
                //   "loginwithInsta"  :"<i class='italic icon'></i> تسجيل الدخول مع إينستاجرام",
                //   "loginwithfb"   :" <i class='facebook icon'> </i>تسجيل الدخول مع الفيسبوك",
                //   "loginwithgoog"   :"<i class='google plus sign icon'></i>تسجيل الدخول مع جوجل",
                //   "videotutorial"   :"<i class='video icon'></i>الفيديو التعليمي",
                //   "accounts"    :"<b>حسابات</b>",
                //   "settings"    :"<b>إعدادات</b>",
                //   "tapmate"   :"<b>الاستفادةزميله</b>",
                //   "menubug"   :"<b>تطوير</b>",
                // };
                // var ch = {
                //     "languageButton"          :"语/(Language)",
                //     "Logout"                  :"<i class='sign out icon'></i> 注销",
                //     "about"                   :"<i class='font icon'></i> 关于",
                //     "alreadyMessage"          : "不认识自己吗？ <br><br> 登录与Instagram的。",
                //     "Login With Instagram"    :"登录与Instagram的",
                //     "Contact Us"              :"<i class='phone icon'></i> 联系我们 ",
                //     "Contest"                 :"<i class='time icon'></i> 没有比赛现在 ",
                //     "Push Notification"       :"推送通知",
                //     "optimize"                :"优化 <input id='optimizeCheckBox' type='checkbox'>",
                //     "help"                    :"帮助",
                //     "Game"                    :" 游戏 ",
                //     "Tutorial"                :"<i class='magic icon'></i> 教程",
                //     "Instruction"             :"<i class='info icon'></i> 指令 ",
                //     "Walkthrough"             :"<i class='won icon'> </i> 演练 ",
                //     "ContactUsPopUp"          :"请给我们发电子邮件的任何错误你发现： <br/>tapmate@youiest.com<br/>谢谢你冒着错误！<br/> 我们希望你同意这是疯狂大。",
                //     "AboutUsPopUp"            :"Tapmate uses the Instagram(tm) API 并且不认可或认证 Instagram(tm) 在这个应用程序显示的商标和标识归Instagram的物业, Inc.<br> <div id='hideAboutUsPopUp' class='circular ui button'>行</div>",
                //     "termsandcondition"       :"<b>条款和条件</b> <br/>通过接受我同意你接受下面的链接的所有协议 <a href='https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy'/>.<br/>",
                //     "I aggree"                : "我同意", 
                //     "sendMail"                :" 发送邮件 ",
                //     "videotutorial"           :"视频教程",
                // };
                var en = {
                    "languageButton"          :"Language",
                    "Logout"                  :"<i class='sign out icon'></i>  Log Out",
                    "about"                   :"<i class='font icon'></i> About",
                    "alreadyMessage"          : "Don't recognize yourself? <br><br> Log in with instagram. ",
                    "Login With Instagram"    :"Login With Instagram",
                    "Contact Us"              :"<i class='phone icon'></i> Contact Us ",
                    "Contest"                 :"<i class='time icon'></i> No Contest Now ",
                    "Push Notification"       :"PushNotification",
                    "optimize"                :"Optimize <input id='optimizeCheckBox' type='checkbox'>",
                    "help"                    :"Help",
                    "Game"                    :" Game ",
                    "Tutorial"                :"<i class='magic icon'></i> Tutorial",
                    "Instruction"             :"<i class='info icon'></i> Instruction ",
                    "Walkthrough"             :"<i class='won icon'> </i>Walkthrough ",
                    "ContactUsPopUp"          :"Please email us any bugs you find: <br/>tapmate@youiest.com<br/>Thank you for braving the bugs! <br/> We hope you agree this is crazily great.",
                    "AboutUsPopUp"            :"Tapmate uses the Instagram(tm) API and is not endorsed or certified by Instagram(tm) logos and trademarks displayed on this app are property of Instagram, Inc.<br> <div id='hideAboutUsPopUp' class='circular ui button'>ok</div>",
                    "termsandcondition"       :"<b>TERMS AND CONDITIONS</b> <br/>By accepting I Agree you accept all the agreements on the below link <a href='https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy'/>.<br/>",
                    "I aggree"                : "I agree", 
                    "sendMail"                :" Send Mail ",
                    "loginwithInsta"  :"<i class='italic icon'></i> Log in with Instagram",
                    "loginwithfb"   :"<i class='facebook icon'> </i> Log in with Facebook",
                    "loginwithgoog"   :"<i class='google plus sign icon'></i> Log in with Google",
                    "videotutorial"   :"<i class='video icon'></i>Video tutorial",
                    "accounts"    :"<b>Accounts</b>",
                    "settings"    :"<b>Settings</b>",
                    "tapmate"   :"<b>Hash Republic</b>",
                    "menubug"   :"<b>Development</b>",
                };
                // var fr = {
                //     "languageButton"          :"langue/(Language)",
                //     "Logout"                  :"<i class='sign out icon'></i>  Déconnexion",
                //     "about"                   :"<i class='font icon'></i> sur",
                //     "alreadyMessage"          : "Ne pas se reconnaître? <br><br> Connexion avec Instagram. ",
                //     "Login With Instagram"    :"Connexion avec Instagram",
                //     "Contact Us"              :"<i class='phone icon'></i> Contactez-nous ",
                //     "Contest"                 :"<i class='time icon'></i> No Contest maintenant ",
                //     "Push Notification"       :"Push Notification",
                //     "optimize"                :"optimiser <input id='optimizeCheckBox' type='checkbox'>",
                //     "help"                    :" aider ",
                //     "Game"                    :" jeu ",
                //     "Tutorial"                :"<i class='magic icon'></i> tutoriel",
                //     "Instruction"             :"<i class='info icon'></i> Instruction ",
                //     "Walkthrough"             :"<i class='won icon'> </i>Promenade à travers ",
                //     "ContactUsPopUp"          :"S'il vous plaît envoyez-nous les bugs que vous trouvez: <br/>tapmate@youiest.com<br/>Merci d'avoir bravé les bugs! <br/> Nous espérons que vous conviendrez que c'est follement grand.",
                //     "AboutUsPopUp"            :"Tapmate utilise lAPI Instagram (tm) et nest pas approuvé ou certifié par Instagram (tm) les logos et marques de commerce affichées sur cette application sont la propriété de Instagram, Inc.<br> <div id='hideAboutUsPopUp' class='circular ui button'>ok</div>",
                //     "termsandcondition"       :"<b>TERMES ET CONDITIONS</b> <br/>En acceptant Jaccepte vous acceptez tous les accords sur le lien ci-dessous <a href='https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy'/>.<br/>",
                //     "I aggree"                : "je suis d'accord", 
                //     "sendMail"                :" Send Mail ",
                //     "videotutorial"           :"Tutoriel vidéo",
                // };
                // var hi = {
                //     "languageButton"          :"भाषा/(Language)",
                //     "Logout"                  :"<i class='sign out icon'></i>  लॉग आउट",
                //     "about"                   :"<i class='font icon'></i> बारे में",
                //     "alreadyMessage"          : "अपने आप को पहचान नहीं है? <br><br> Instagram के साथ में प्रवेश करें. ",
                //     "Login With Instagram"    :"Instagram के साथ में प्रवेश करें",
                //     "Contact Us"              :"<i class='phone icon'></i> हमसे संपर्क करें ",
                //     "Contest"                 :"<i class='time icon'></i> कोई प्रतियोगिता अब",
                //     "Push Notification"       :"पुश अधिसूचना",
                //     "optimize"                :"ऑप्टिमाइज़ करें <input id='optimizeCheckBox' type='checkbox'>",
                //     "help"                    :"मदद",
                //     "Game"                    :" खेल ",
                //     "Tutorial"                :"<i class='magic icon'></i> ट्यूटोरियल",
                //     "Instruction"             :"<i class='info icon'></i> अनुदेश ",
                //     "Walkthrough"             :"<i class='won icon'> </i> द्वारा चल ",
                //     "ContactUsPopUp"          :"हमें किसी भी कीड़े ईमेल कृपया आप पाते हैं: <br/>tapmate@youiest.com<br/>कीड़े बहादुरी के लिए धन्यवाद! <br/> हम आपको इस पागलपन से महान है सहमत उम्मीद है.",
                //     "AboutUsPopUp"            :"Tapmate Instagram (tm) API का उपयोग करता है और (tm) लोगो और इस एप्लिकेशन पर प्रदर्शित ट्रेडमार्क Instagram, इंक की संपत्ति हैं का समर्थन किया या Instagram द्वारा प्रमाणित है या नहीं<br> <div id='hideAboutUsPopUp' class='circular ui button'>ok</div>",
                //     "termsandcondition"       :"<b>नियम और शर्तें</b> <br/>स्वीकार करके मैं आप नीचे दिए गए लिंक पर सभी समझौतों को स्वीकार सहमत <a href='https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy'/>.<br/>",
                //     "I aggree"                : "मैं इस बात से सहमत", 
                //     "sendMail"                :" मेल भेजें ",
                //     "videotutorial"           :"वीडियो ट्यूटोरियल",
                // };
                // var ind = {
                //     "languageButton"          :"bahasa/(Language)",
                //     "Logout"                  :"<i class='sign out icon'></i>  Log Out",
                //     "about"                   :"<i class='font icon'></i> tentang",
                //     "alreadyMessage"          : "Jangan mengenali diri Anda sendiri? <br><br> Login dengan instagram. ",
                //     "Login With Instagram"    :"Login dengan instagram",
                //     "Contact Us"              :"<i class='phone icon'></i> Hubungi Kami ",
                //     "Contest"                 :"<i class='time icon'></i> No Contest Sekarang ",
                //     "Push Notification"       :"Push Notification",
                //     "optimize"                :"Optimalkan <input id='optimizeCheckBox' type='checkbox'>",
                //     "help"                    :"membantu",
                //     "Game"                    :" permainan ",
                //     "Tutorial"                :"<i class='magic icon'></i> Tutorial",
                //     "Instruction"             :"<i class='info icon'></i> pengajaran ",
                //     "Walkthrough"             :"<i class='won icon'> </i>Berjalanlah melalui ",
                //     "ContactUsPopUp"          :"Silakan email kami setiap bug Anda menemukan: <br/>tapmate@youiest.com<br/>Terima kasih untuk menantang bug! <br/> Kami harap Anda setuju ini adalah ayun besar.",
                //     "AboutUsPopUp"            :"Tapmate menggunakan Instagram(tm) API dan tidak didukung atau sertifikasi oleh Instagram (tm) logo dan merek dagang yang ditampilkan pada aplikasi ini adalah milik Instagram, Inc<br> <div id='hideAboutUsPopUp' class='circular ui button'>ok</div>",
                //     "termsandcondition"       :"<b>SYARAT DAN KETENTUAN</b> <br/>Dengan menerima I Agree Anda menerima semua perjanjian pada link di bawah<a href='https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy'/>.<br/>",
                //     "I aggree"                : "Saya setuju", 
                //     "sendMail"                :" Kirim Surat ",
                //     "videotutorial"           :"Video Tutorial",
                // };
                // var ja = {
                //     "languageButton"          :"言語/(Language)",
                //     "Logout"                  :"<i class='sign out icon'></i>  ログアウトする",
                //     "about"                   :"<i class='font icon'></i> 約",
                //     "alreadyMessage"          : "自分を認識しない? <br><br> Instagramのを使用してログイン. ",
                //     "Login With Instagram"    :"Instagramのを使用してログイン",
                //     "Contact Us"              :"<i class='phone icon'></i> お問い合わせ ",
                //     "Contest"                 :"<i class='time icon'></i> ノーコンテスト今ん ",
                //     "Push Notification"       :"プッシュ通知",
                //     "optimize"                :"最適化する <input id='optimizeCheckBox' type='checkbox'>",
                //     "help"                    :" 助け ",
                //     "Game"                    :" ゲーム ",
                //     "Tutorial"                :"<i class='magic icon'></i> チュートリアル",
                //     "Instruction"             :"<i class='info icon'></i> 命令 ",
                //     "Walkthrough"             :"<i class='won icon'> </i> ウォークスルー ",
                //     "ContactUsPopUp"          :"私たちにあなたが発見したバグに電子メールを送りなさい: <br/>tapmate@youiest.com<br/>バグを勇敢に立ち向かういただき、ありがとうございます! <br/> 私たちは、あなたが、これが狂気のように偉大であることに同意を願って.",
                //     "AboutUsPopUp"            :"TapmateはInstagramの（TM）APIを使用し、（TM）のロゴと、このアプリで表示された商標はInstagramの社に帰属します承認またはInstagramのによって認定されていません<br> <div id='hideAboutUsPopUp' class='circular ui button'>ok</div>",
                //     "termsandcondition"       :"<b>契約条件</b> <br/>受け入れることによって、私は、あなたは下のリンクをすべての合意を受け入れる同意 <a href='https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy'/>.<br/>",
                //     "I aggree"                : "私は同意", 
                //     "sendMail"                :" メールを送信 ",
                //     "videotutorial"           :"ビデオチュートリアル",
                // };
                // var po = {
                //     "languageButton"          :"língua/(Language)",
                //     "Logout"                  :"<i class='sign out icon'></i>  Sair",
                //     "about"                   :"<i class='font icon'></i> sobre",
                //     "alreadyMessage"          : "Don't recognize yourself? <br><br> Entrar com o instagram. ",
                //     "Login With Instagram"    :"Entrar com o instagram",
                //     "Contact Us"              :"<i class='phone icon'></i> Fale Conosco ",
                //     "Contest"                 :"<i class='time icon'></i> No Contest Agora",
                //     "Push Notification"       :"PushNotification",
                //     "optimize"                :"otimizar <input id='optimizeCheckBox' type='checkbox'>",
                //     "help"                    :"ajudar",
                //     "Game"                    :" jogo ",
                //     "Tutorial"                :"<i class='magic icon'></i> Tutorial",
                //     "Instruction"             :"<i class='info icon'></i> Instrução ",
                //     "Walkthrough"             :"<i class='won icon'> </i>Passo a passo ",
                //     "ContactUsPopUp"          :"Por favor envie-nos quaisquer bugs que encontrar: <br/>tapmate@youiest.com<br/>Obrigado por enfrentando os bugs! <br/> Nós esperamos que você concordará que este é loucamente grande.",
                //     "AboutUsPopUp"            :"Tapmate utiliza o Instagram(tm) API e não é aprovado ou certificado por Instagram (TM) logotipos e marcas exibidos neste aplicativo são de propriedade de Instagram, Inc.<br> <div id='hideAboutUsPopUp' class='circular ui button'>ok</div>",
                //     "termsandcondition"       :"<b>TERMOS E CONDIÇÕES</b> <br/>Ao aceitar Aceito você aceitar todos os acordos sobre o link abaixo<a href='https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy'/>.<br/>",
                //     "I aggree"                : "concordo", 
                //     "sendMail"                :" Enviar e-mail",
                //     "videotutorial"           :"vídeo tutorial",
                // };
                // var ru = {
                //     "languageButton"          :"язык/(Language)",
                //     "Logout"                  :"<i class='sign out icon'></i>  Выход",
                //     "about"                   :"<i class='font icon'></i> About",
                //     "alreadyMessage"          : "Не узнаете себя? <br><br> Войти с Instagram. ",
                //     "Login With Instagram"    :"Войти с Instagram",
                //     "Contact Us"              :"<i class='phone icon'></i> связаться с нами",
                //     "Contest"                 :"<i class='time icon'></i> Нет Конкурс Теперь ",
                //     "Push Notification"       :"Нажмите Уведомление",
                //     "optimize"                :"оптимизировать <input id='optimizeCheckBox' type='checkbox'>",
                //     "help"                    :"Помогите",
                //     "Game"                    :" игра ",
                //     "Tutorial"                :"<i class='magic icon'></i> учебник",
                //     "Instruction"             :"<i class='info icon'></i> инструкция ",
                //     "Walkthrough"             :"<i class='won icon'> </i>Прохождение ",
                //     "ContactUsPopUp"          :"Пожалуйста, напишите нам о любых ошибках, которые вы найдете: <br/>tapmate@youiest.com<br/>Спасибо за страшась ошибки! <br/> Мы надеемся, что вы согласитесь, что это безумно здорово.",
                //     "AboutUsPopUp"            :"Tapmate использует Instagram(tm) API и не сертифицирован или одобрен Instagram(tm) логотипы и торговые марки, представленные на данном приложении, являются собственностью Instagram, Inc.<br> <div id='hideAboutUsPopUp' class='circular ui button'>ok</div>",
                //     "termsandcondition"       :"<b>СРОКИ И УСЛОВИЯ</b> <br/>Принимая Я согласен вы принимаете все соглашения по ссылке ниже <a href='https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy'/>.<br/>",
                //     "I aggree"                : "Я согласен", 
                //     "sendMail"                :" Написать письмо ",
                //     "videotutorial"           :"видео-учебник",
                // };
                // var sp = {
                //     "languageButton"          :"idioma/(Language)",
                //     "Logout"                  :"<i class='sign out icon'></i>  finalizar la sesión",
                //     "about"                   :"<i class='font icon'></i> acerca de",
                //     "alreadyMessage"          : "No reconocen a sí mismo? <br><br> Iniciar sesión en instagram.",
                //     "Login With Instagram"    :"Entrada en Instagram",
                //     "Contact Us"              :"<i class='phone icon'></i> Contáctenos ",
                //     "Contest"                 :"<i class='time icon'></i> No Contest Ahora ",
                //     "Push Notification"       :"empujar la notificación",
                //     "optimize"                :"optimizar <input id='optimizeCheckBox' type='checkbox'>",
                //     "help"                    :"ayudar",
                //     "Game"                    :" juego ",
                //     "Tutorial"                :"<i class='magic icon'></i> Tutorial",
                //     "Instruction"             :"<i class='info icon'></i> Instrucción ",
                //     "Walkthrough"             :"<i class='won icon'> </i> Caminar a través de ",
                //     "ContactUsPopUp"          :"Por favor, envíenos un correo electrónico de cualquier error que encuentre: <br/>tapmate@youiest.com<br/>Gracias por desafiar a los bichos usted! <br/> Esperamos que usted está de acuerdo que es locamente gran.",
                //     "AboutUsPopUp"            :"Tapmate utiliza el Instagram(tm) API y no es aprobado o certificado de Instagram (tm) los logos y marcas que aparecen en esta aplicación son propiedad de Instagram, Inc.<br> <div id='hideAboutUsPopUp' class='circular ui button'>ok</div>",
                //     "termsandcondition"       :"<b>TÉRMINOS Y CONDICIONES</b> <br/>Al aceptar Acepto usted acepta todos los acuerdos sobre el siguiente enlace <a href='https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy'/>.<br/>",
                //     "I aggree"                : "Estoy de acuerdo", 
                //     "sendMail"                :" Enviar correo ",
                //     "videotutorial"           :"video tutorial",
                // };
                // if(currlang=="ur"){
                //     $.i18n.load(ur);
                // }else if (currlang=="sp"){
                //     $.i18n.load(sp);
                // }else if (currlang=="ch"){
                //     $.i18n.load(ch);
                // }else if (currlang=="fr"){
                //     $.i18n.load(fr);
                // }else if (currlang=="hi"){
                //     $.i18n.load(hi);
                // }else if (currlang=="ind"){
                //     $.i18n.load(ind);
                // }else if (currlang=="ja"){
                //     $.i18n.load(ja);
                // }else if (currlang=="po"){
                //     $.i18n.load(po);
                // }else if (currlang=="ru"){
                //     $.i18n.load(ru);
                // }else if (currlang=="en"){
                //     $.i18n.load(en);
                // }else if (currlang=="ar"){
                //     $.i18n.load(ar);
                // }                
                // $.i18n.load(language);
                // $('a#aboutUsButton')._t('about');
                // $('a#alreadyMessage')._t('alreadyMessage');
                // $('a#loginButton')._t('Login With Instagram');
                // $('a#logout')._t('Logout');
                // $('a#contest')._t('Contest');
                // $('a#pushNotification')._t('Push Notification');
                // $('a#languageButton')._t('languageButton');
                // $('b#Recentslabel')._t('Recentslabel');
                // $('div#menuGame')._t('Game');
                // $('div#accounts')._t('accounts');
                // $('div#settings')._t('settings');
                // $('div#tapmate')._t('tapmate');
                // $('div#menuHelp')._t('help');
                // $('div#menubug')._t('menubug');
                // $('label#appOptimize')._t('optimize');
                // $('a#contactUsButton')._t('Contact Us');
                // $('a#tutorialButtonMenu')._t('Tutorial');
                // $('a#instruction')._t('Instruction');
                // $('a#startWalkthrough')._t('Walkthrough');
                // $('a#ContactUsPopUp')._t('ContactUsPopUp');
                // $('a#termsandcondition')._t('termsandcondition');
                // $('a#AboutUsPopUp')._t('AboutUsPopUp');
                // $('a#videotutorial')._t('videotutorial');
                // $('a#loginwithInsta')._t('loginwithInsta');
                // $('a#loginwithfb')._t('loginwithfb');
                // $('a#loginwithgoog')._t('loginwithgoog');
                // // $('a#AggrementAccept')._t('I aggree'); 
                // $('a#sendMail')._t('sendMail');
                 
}*/
////////////////////////////language end/////////////////////////
function onsendMail(){
   // var i=0;
   
    console.log("sent main client function");
    Meteor.call("sendMail");
    // $.getJSON("./locales/hi.json",function(result){
    //       var language = {}
    //       $.each(result, function(key, value){
    //         language[key] = value;
    //       });
    //     console.log(language);
    //     });
     //Meteor.call("sendMail");
    /*

     var i18n = new I18n({
    //these are the default values, you can omit
    directory: "/locales",
    locale: "en",
    extension: ".json"
  });  
  
  console.log(i18n.__("Hello")); //Hello
  console.log(i18n.__("Hello %s", "Foo")); //Hello Foo s s s
  console.log(i18n.__n("%s cat", 0)) //no cats s dsd 
  console.log(i18n.__n("%s cat", 1)) //1 cat s
  console.log(i18n.__n("%s cat", 2)) //2 cats
  
  //You can change locale at any time by issuing `setLocale`
  //Another request is made in order to load /locales/de.json
  i18n.setLocale("ur");
  
  console.log(i18n.__("Hello")); //Hallo
  console.log(i18n.__("Hello %s", "Foo")); //Hallo Foo
  console.log(i18n.__n("%s cat", 0)) //keine katzen
  console.log(i18n.__n("%s cat", 1)) //1 katze
  console.log(i18n.__n("%s cat", 2)) //2 katzen*/

}
function onClickContactUsButton(){
    openCloseSnapLeft();
    $("#ContactUsPopUpBackground").show();
    $("#ContactUsPopUp").css("top","0%")
    $("#ContactUsPopUp").show();  
    $("#ContactUsPopUp").animate({ "top": "50%" }, 900);
}
function hideContactUsPopUp(){
  $("#ContactUsPopUp").hide();
  $("#ContactUsPopUpBackground").hide();
}
function hideLoginForm(){
    $("#loginform").animate({ "top": "100%" }, 700,function(){
        $("#loginform").hide();
    });
    
}
function onClickfeedbackButton(){
    Meteor.call("mailToMe",Session.get("clientid"),Session.get("clientid"),function(){

    });
    // var emailurl = null;
    // var ua = navigator.userAgent;
    // var checker = {
    //   iphone: ua.match(/(iPhone|iPod|iPad)/),
    //   blackberry: ua.match(/BlackBerry/),
    //   android: ua.match(/Android/)
    // };
    // if (checker.android){
    //     emailurl ="https://play.google.com/store/apps/details?id=com.youiest.tapmatrix";
    // }
    // else if (checker.iphone){
    //     emailurl ="https://itunes.apple.com/ms/app/tapmate/id774935608";
    // }
    // else if (checker.blackberry){
    //     //deviceType="blackberry";
    // }
    // else {
    //     emailurl ="http://youtap.meteor.com/app/tapmateYouiestcom";
    // }
    // window.open(emailurl, '_system');
}
function OnclickProfileLink(){
    window.open("http://youtap.meteor.com/profile/"+Session.get("clientid"), '_system');
}
function onClickAboutUsButton(){
    openCloseSnapLeft();
    $("#AboutUsPopUp").css("top","0%")
    $("#AboutUsPopUp").show();  
    $("#AboutUsPopUp").animate({ "top": "50%" }, 700);
    $("#AboutUsPopUpBackground").show(); 
}
function onClickFAQButton(){
    if("portrait"==Session.get("orientation")){
        var emailurl = 'http://hashrepublic.meteor.com/FAQ';
        window.open(emailurl, '_system');
    }else{
        $("#hashFaqForm").css({"display":"block"})
    }
}
var languageArray = [
                        ["ar","Arabic"],
                        ["ch","Chinese"],
                        ["en","English"],
                        ["fr","French"],
                        ["ind","Indonesian"],
                        ["hi","Hindi"],
                        ["ja","Japanese"],
                        ["po","Portuguese"],
                        ["ru","Russian"],
                        ["sp","Spanish"],
                        ["ur","Urdu"]
                    ]
function onClicklanguageButton(){
    var starttimer = new Date().getTime();
    for(var i=0,il=languageArray.length-1;i<il;i++){
        $("#language").append('<a class="item" value="' +languageArray[i][0] +'">' +languageArray[i][1] +'</a>')
    }
    $(".language a").hammer().on("tap",onSetLang);
    openCloseSnapLeft();
    $("#language").css("top","0%")
    $("#language").show(); 
    $("#languageBackground").show(); 
    $("#language").animate({ "top": "25%" }, 900);
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function onClickHideVotesButton(){
     // var getVotesStatus = hideVotes
     var getVotesStatus = get("hideVotes");
     // console.log(getVotesStatus)
     if(getVotesStatus){
        if(getVotesStatus == "true"){
            set("hideVotes","false");
            $(".voting").css({"display":"none"});
            $("#hideVotesButton").text("Show Votes");
        }else{
            set("hideVotes","true");
            $(".voting").css({"display":"block"});
            $("#hideVotesButton").text("Hide  Votes");
         }
     }else{
        set("hideVotes","true");
        $(".voting").css({"display":"block"});
        $("#hideVotesButton").text("Hide Votes");
     }
    // console.log(get("hideVotes"))
}
function onClickHideCommentsButton(){
    // Session.set("hideComments","false");
    var getCommentsStatus = get("hideComments");
     if(getCommentsStatus){
        if(getCommentsStatus == "true"){
            // hideComments = "false";
            set("hideComments","false");
            $("#hideCommentsButton").text("Show Comments");
        }else{
            // hideComments = "true";
            set("hideComments","true");
            $("#hideCommentsButton").text("Hide Comments");
         }
     }else{
        // hideComments = "false";
        // console.log(hideComments)
        set("hideComments","false");
        $("#hideCommentsButton").text("Hide Comments");
     }
}
function checkVotesAndCommetsStatus(){
    var getVotesStatus = get("hideVotes");
     if(getVotesStatus){
        if(getVotesStatus == "true"){
             setTimeout(function(){
                // $(".voting").css({"display":"block"});
                $("#hideVotesButton").text("Hide Votes");
            },3000);
        }else{
            // $(".voting").css({"display":"none"});
             setTimeout(function(){
                $("#hideVotesButton").text("Show Votes");
            },3000);
         }
     }else{
        set("hideVotes","true");
        setTimeout(function(){
            $(".voting").css({"display":"block"});
            $("#hideVotesButton").text("Hide Votes");
        },3000);
     }

     var getCommentsStatus = get("hideComments");
     // console.log(getCommentsStatus)
     if(getCommentsStatus){
        if(getCommentsStatus == "true"){
            $("#hideCommentsButton").text("Hide Comments");
        }else{
            $("#hideCommentsButton").text("Show Comments");
         }
     }else{
        set("hideComments","false");//hideComments = "";
        $("#hideCommentsButton").text("Hide Comments");
     }
}
function hideAboutForm(){
    $("#AboutUsPopUp").animate({ "top": "100%" }, 700,function(){
        $("#AboutUsPopUp").hide();
        $("#AboutUsPopUpBackground").hide(); 
    });
}
function hideWelcomePopUp(){
    //$("#welcomePopUp").animate({ "top": "100%" }, 700,function(){
        $("#welcomePopUpBackground").hide();
        $("#welcomePopUp").hide();
    //});
}
function onClickAggAcceptButton(){
    $("#Aggrements").hide();
    window.localStorage.setItem("agree",true);
    $("#Aggrements").remove();
}
function onClickAggDenyButton(){
    //code to close the application
}

function checkPictureToast(){    

    // var cursorRecomm =  Recommend.findOne({"notification" : false,"followid":Session.get("clientid")});    
    // if(!cursorRecomm)
    //     return;
    // onResumeMessageBucket = cursorRecomm.likeid;
    // var message = cursorRecomm.whousername + " has send you a picture!!";
    // toast(message);   
    // Recommend.update({"_id":cursorRecomm._id},{$set : {"notification":true}});
    // Meteor.setTimeout(checkPictureToast,3000);
}


var toastQueue = [];
var toastStartFlag = false;
function toast(message){
    //console.log(message);
    toastQueue.push(message);
    toastQueuing();
}

Meteor.toast = toast;
Meteor.toastStartFlag = toastStartFlag;
function toastQueuing(){
    var starttimer = new Date().getTime();
    if(toastStartFlag)
        return;

    
    var message = toastQueue.pop();

    if(!message)
        return;
    toastStartFlag = true;
    // if(foreground){
        //https://trello.com/c/sLq1uq3m/330-getting-points-needs-to-cause-push-notification-more-opportunities-the-better
        if(message.match("pts") && Session.get("phonegap")){ 
            //window.plugins.statusBarNotification.notify("Youiest/Tapmate", message);
            // GameVibrate(100);
        }
        else{
            
            $("#headerSection").stop().animate({"top":"-10%"},500,function(){
                $("#toastArea").html(message).css({"display":"block"});
                Meteor.setTimeout(function(){
                                        $("#headerSection").animate({"top":"0%"},500,function(){
                                            toastStartFlag= false;toastQueuing();});$("#toastArea").css({"display":"none"}) 
                                },2500);
            });  
        }
        
    // }
    // else{
    //     message = message.replace("<br> ","").replace("<br> ","").replace("<br> ",""); //remove BR tag on notification HASTEN
    //     //window.plugins.statusBarNotification.notify("Youiest/Tapmate", message);
    //     GameVibrate(100);
    // }   
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)}); 
}




function showLoader(message){
    firstTimeLoginFlag = true;
    var starttimer = new Date().getTime();
    clearTimeout(loaderErrorTimeoutId);
    if(message)
        $("#loaderMessage").text(message);
    //$("#loader").show();
    $("#loaderError").hide();
    if(message!="You have been LogOut.")
      //loaderErrorTimeoutId = setTimeout(function(){$("#loaderError").show();},30000);
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function validateEmail(email){
    var starttimer = new Date().getTime();
    var x=email;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        toast(i18n.__("invalidEmail"));
        //toast("Not a valid e-mail address");
        return false;
    }
    return true;
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}

function hideLoader(){
    var starttimer = new Date().getTime();
    console.log("hideLoader")
    $("#loaderMessage").text("");
    $("#loader").hide();
    $("#loaderError").hide();
    clearTimeout(loaderErrorTimeoutId);
    loaderErrorTimeoutId = null;
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function preLoginAct(){
    var starttimer = new Date().getTime();
    $("#loginScreen").hide();
    $("#Main").show();
    // hideLoader();
    // firstTimeLoader();
    fristTimeLoaderCount = 0;
    //firstTimeLoginInterval = setInterval(firstTimeLoader,12000);
         MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
// function inAppBrowser(){
//     try{
//         var url = "./game.html";
//         anotherWindow = window.open(url, '_blank', 'location=yes');
//         window['gamewindow'] = anotherWindow;
//         setTimeout(function(){
//            window['gamewindow'].close();
//             console.log("game is on")
//         },22000);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// function firstTimeLoader(){
//     // console.log("firstTimeLoader");
//         if(stopFirstTimeLoader()){            
//             return;
//         }

//         $("#tutorial").css({"display": "block","z-index":"3","opacity":"0.9"});
//         $("#tutorial div").css({"opacity":"1.0","display": "block"});
//         $("#tutorialSec4 div").css({"display":"block","opacity":"1.0"});
        
//         setTimeout(function(){animateBigTutorial(0,"loader");},1*3000);
//         setTimeout(function(){animateBigTutorial(1,"loader");},2*3000);
//         setTimeout(function(){animateBigTutorial(2,"loader");},3*3000);
//         setTimeout(function(){animateBigTutorial(3,"loader");},4*3000);
// }
// function stopFirstTimeLoader(logout){
//     return true;
//     try{
//         console.log(firstTimeLoginInterval);
//         console.log("stopFirstTimeLoader");
//         // if(!firstTimeLoginInterval){
//         //     // var display = $("#loader").css("display");
//         //     // console.log(display);
//         //     // if(display != "none"){
//         //     //     $("#tutorial").css({"display": "none","z-index":"0"});
//         //     // }             
//         //     return true;
//         // }        
        
//         //console.log(Session.get("clientid"));
        
//         var imagesrc = $(".bigFeed img").attr("src");
        
//         if(typeof(imagesrc) == "string")
//         if(imagesrc.length > 10){
//             boolean = true;
//         }
//         if(logout)
//             boolean = true;
//         // if($(".followsIcons").length!=0)
//         //     boolean = true;
//         if(fristTimeLoaderCount == 3){

//         }
//         if(boolean){
//             //console.log("endloader");
//             $("#tutorial").css({"display": "none","z-index":"0"});
//             clearInterval(firstTimeLoginInterval);
//             firstTimeLoginInterval = null;
//              stopGame();      
//             //onClickGlobalFeed();
//         }            
//         return boolean;
//     }
//     catch(error){
//         console.log(error);
//         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "stopFirstTimeLoader"});
//     }
//     var boolean = false;
    
// }
var loginFormFlag = false;
Meteor.periods = null;
function everyFive(periods) { 
    $("#timer").html(periods[4] +":" +periods[5] +":" +periods[6]);
}
function checkFormAndTimer(first){
    var starttimer = new Date().getTime();
    try{
        // console.log("here")
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#timer').countdown({until: austDay,format:'HMS',onTick: everyFive, tickInterval: 1});
        $('#timer').removeClass("is-countdown");

        // Meteor.call("timerAndForm",Session.get("clientid"),function(err,data){
        //     if(data){
        //         //console.log(data);
        //         if(data.form && (!first))
        //             loginFormFlag = true;   
        //         countDownMins = data.countDownMins;
        //         countDownHours = data.countDownHours + 24 * data.countDownDays;
        //         countDownSecs = data.countDownSecs;
        //         if(countDownMins != 0 || countDownHours != 0){
        //             stopCountDow();
        //             startCounting();
        //         }                
        //     }   
        //     //console.log(err);
        // });
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "checkFormAndTimer"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}

function checkForPush (){
    if(Session.get("phonegap"))
        pushNotificationClick();
}

function startCounting(){        
        countDownTimeoutId = setInterval(updateCouting,1000);
    }
    function updateCouting(){ 
        $("#contest").html("<i class='time icon'></i> " +countDownHours +":" +countDownMins +":" +countDownSecs);

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
function stopCountDow(){
    if(countDownTimeoutId){
        clearTimeout(countDownTimeoutId);
        countDownTimeoutId = null;
    }
}
// function onClickStartContest(){
//     toast(i18n.__("contestStarting"));
//     //toast("Starting Contest");
//     Meteor.call("startContest",function(err,data){
//         if(err)
//             toast(i18n.__("contestFail"));
//             //toast("Contest Failed to Start");
//         if(data)
//             toast(i18n.__("contestStarted"));
//             //toast("Contest Started");
//     });
// }
function onInstructionButtonClick(){
    var starttimer = new Date().getTime();
    var type = $(this).attr("type");
    var show = $("#instructionSection div[type='show']");
    $(show).attr("type","hide");
    //console.log(show);
    $(show).hide();
    if(type == "next"){
        show = $(show).next();
    }
    else if(type == "prev"){
        show = $(show).prev();
    }
    else if(type == "done"){
        $("#instructionPanel").hide();
        $("#instructionSection div:first").attr("type","show").css("display","block");
    }
    else{
        //console.log("noneInstruction");
    }
    if(show.length !=0){
        $(show).attr("type","show").css("display","block");
    }
    else{
        $("#instructionPanel").hide();
        $("#instructionSection div:first").attr("type","show").css("display","block");
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function onClickMedia(){
    var starttimer = new Date().getTime();
    var mediajson = {}
    Meteor.call("media","544580348099774609_2627385",function(err,data){
        // console.log(err);        
        // console.log(data)
        if(data.statusCode == 200){
            //console.log(data.data.data);
            mediajson = data.data.data;
            if(mediajson){
               var username = mediajson.user.username; 
               var profile_picture = mediajson.user.profile_picture;
               this.unblock();
               Media.insert({"_id":mediaid,"profile_picture":profile_picture,"username":usernames});
            }
        }
    });
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}

function loginWithInstagram(){
    $("#loginwithInsta,#loginButton").hide();
    setTimeout(function(){$("#loginwithInsta,#loginButton").show();},3000);
    preLoginAction();
    Meteor.loginWithInstagram({requestPermissions:"basic",requestOfflineToken:true},loginWithInstagramHashManiaCallbackFunction);
}
function loginWithInstagramHashManiaCallbackFunction(err){
    if(err){

    }
    else{
        Meteor.call("mergedMyFace",emailAuthFlag,Session.get("clientid"),function(){
            $(".hideAfterComplete").html("Now");
            console.log("here too")
        })
    }
}                                                 
var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent); 
var display = mobile ? 'touch' : 'popup';   
function loginWithFacebook(){
    console.log("loginWithFacebook");
    var state = Random.id();
    var display = "popup";
    if(Session.get("phonegap")){
        display = "touch";
    }
    if(!emailAuthFlag)
        emailAuthFlag = Session.get("clientid");
    var loginUrl =                                                                       
        'https://www.facebook.com/dialog/oauth?client_id=' +Meteor.settings.public.fbid  +            
        '&redirect_uri=' + Meteor.settings.public.fbredirect +               
        '&display=' + display + '&scope=' + "email,publish_actions" + '&state=' + emailAuthFlag;
    var fbloginpage = window.open(loginUrl,"_blank");
    fbloginpage.addEventListener('loadstop', function(event) {   
        if(event.url.indexOf(Meteor.settings.public.fbredirect) == 0){
            fbloginpage.close();
        }
    });
    var facebookIntervalID = setInterval(function(){
            if(fbloginpage.closed || fbloginpage.closed === undefined){
                $(".hideAfterComplete").html("Now");
                clearInterval(facebookIntervalID);        
            }
    })
    onScore(1000);
    // {
    //         $(".hideAfterComplete").html("Now");
    //     }
    // Meteor.loginWithFacebook({requestPermissions:"basic",requestOfflineToken:true},loginWithFacebookCallbackFunction);
}
// https://www.facebook.com/dialog/oauth?client_id=679347035440335&redirect_uri=http://localhost:3000/facebook?close&display=popup&scope=email&state=GEm5wJLmwqoWdXa3z
Meteor.facebook = loginWithFacebook
function loginWithGoogle(){
    console.log("loginWithGoogle")
    Meteor.loginWithGoogle({requestPermissions:'https://www.googleapis.com/auth/userinfo.profile',requestOfflineToken:true},loginWithGoogleCallbackFunction);
}

function loginWithGoogleCallbackFunction(err){
    console.log("loginWithGoogleCallbackFunction");
    console.log(err);
    Meteor.call("mergedMyGoogleFace",emailAuthFlag,function(){
            $(".hideAfterComplete").html("Now");
        })
}

function loginWithFacebookCallbackFunction(err){
    console.log("loginWithFacebookCallbackFunction");
    console.log(err);
}
function notify(message,type){
    noty({
    text: message,"timeout" : 3000,"type":type
  });
}
function loginWithInstagramCallbackFunction(err){
    var starttimer = new Date().getTime();
    // console.log("loginWithInstagramCallbackFunction")
    $("#welcomePopUp").show();
    $("#welcomePopUpBackground").show();
    try{
        if(window['mywindow']){
            window['mywindow'].close();
        }
        var guestid=window.localStorage.getItem("guestid");
        if(guestid){
          var currentuseris=Session.get("clientid");
          
        }
            if(err){
                //console.log(err);
                var wrongMgs = i18n.__("wrongMgs")+err;
                toast(wrongMgs);
                problemLoginCount++;
                hideLoader();
            }
            else{ 
                var emailtoken = window.localStorage.getItem("emailtoken");
                if(emailtoken){
                    // console.log(emailtoken);
                    Meteor.call("addMeInGroup",emailtoken,function(error,data){
                        console.log(error);
                        console.log(data);
                        if(data){
                            toast("You are added in the group.");
                        }
                    });
                    window.localStorage.setItem("emailtoken",null);
                }
                preLoginAct();
                showLoader("Login successful");   
                Meteor.call("getInformation",pushId,function(error,data){
                    var ClientId;
                    //console.log(error);
                    //console.log(data);
                    var previousClientId = null;
                  if(data){
                        previousClientId = window.localStorage.getItem("clientid");
                        // console.log(Number(previousClientId) +" testing guestid")        
                        if(Number(previousClientId)<0){
                            Meteor.call("updateGuestToUser",previousClientId,data.id,function(err,data){
                                // console.log(err);
                                // console.log(data);
                            });
                        }
                    ClientId = data.id;
                    profilePic = data.profile_picture;
                    username = data.username;
                    // console.log(profilePic);
                    // console.log(ClientId)
                    var previousClientId = Session.get("clientid");
                    Session.set("clientid",ClientId);
                    if(previousClientId && ClientId)
                    Meteor.call("convertGuestToUser",previousClientId,ClientId,function(){
                        // console.log("converted");
                    });
                    Session.set("username",data.username)
                    window.localStorage.setItem("clientid",ClientId);
                    window.localStorage.setItem("profile_picture",profilePic);
                    window.localStorage.setItem("username",data.username);                                
                    suscribeMeteor(ClientId);
                    Meteor.call("tutorial",ClientId,function(err,data){
                                //console.log(data)
                            if(!data){
                                $("#Aggrements").show();
                                tutorial();     
                            }else{
                                if(data == 2){
                                    
                                }                                            
                            }
                    });                                
                    // Meteor.call("firstTimeLogin",Session.get("clientid")); 
                    Me.update({"_id":ClientId},{$inc : {"timesLoggedin" : 1}});             
                  }
                    //console.log(ClientId);
                    checkFormAndTimer();
                    // hideLoader();
                    showLoader("Populating pictures");
                    groundDBReadyCount = 0;
                }) 
                postLoginAction();                                           
            }
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "loginWithInstagramCallbackFunction"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}

function loginOnceStateReady(state,callback){
    var starttimer = new Date().getTime();
    try{
        state = get("state");
        Accounts.callLoginMethod({
            methodArguments: [{oauth: {state: state}}],
            userCallback: callback && function (err) {
              // Allow server to specify a specify subclass of errors. We should come
              // up with a more generic way to do this!
              if (err && err instanceof Meteor.Error &&
                  err.error === Accounts.LoginCancelledError.numericError) {
                callback(new Accounts.LoginCancelledError(err.details));
              } else {
                callback(err);
              }
        }});
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "loginOnceStateReady"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
jQuery.fn.shake = function() {
    this.each(function(i) {
        $(this).css({ "position" : "relative" });
        for (var x = 1; x <= 3; x++) {
            $(this).animate({ left: -25 }, 10).animate({ left: 0 }, 50).animate({ left: 25 }, 10).animate({ left: 0 }, 50);
        }
    });
    return this;
}
function onClickMyFeed(){
    var starttimer = new Date().getTime();
    toast(i18n.__("feed"));
    //toast("Feed <i class='cloud upload icon'></i>");    
    var currentTarget = this;
    $(currentTarget).hide();
    Meteor.call("getFeed",Session.get("clientid"),function (err,data){
        $(currentTarget).show();
        // console.log(err);
        // console.log(data);
        if(err){
            toast(i18n.__("feederror"));
            //toast("Feed <i class='warning icon'></i>");
        }
        if(data){
            //toast
            if(data == 0){
                toast(i18n.__("nofeed"));
                //toast("No Feeds as of now.");
            }
            else if(data == -1){
                toast(i18n.__("feedincomplete"));
                //toast("Request for feed incomplete.");
            }
            else{
                toast(i18n.__("feedSucess"));
                //toast("Feed <i class='checkmark icon'></i>");
            }
        }
    })
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function showKeywordPopup(){
    var starttimer = new Date().getTime();
    if(Meteor.status().connected && firstTimeConnectionFlag && !tutorialFlag){
        // if(!DebugFace)
        // $("#searchKeyword").attr("placeholder",i18n.__("enterkeyword"));
        if(Session.get("clientid")){
            $("#keywordPopup").show();
          //$("#keywordPopupBackground").show();
          firstTimeConnectionFlag = false;
        }
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function replaceSpace(keyword){

}
function searchHash(){
    var starttimer = new Date().getTime();
    var searchKeyword = $("#searchKeyword").val();
    searchKeyword = searchKeyword.replace(" ","")
    Session.set("keyword",searchKeyword)
    if(!searchKeyword){
        toast(i18n.__("enterKeyword"));
        //toast("Please enter some keywords.")
        return;
    }
    toast("Searching keyword " +searchKeyword +".")
    Meteor.call("findHashKeyword",searchKeyword,CLIENTID,function(err,data){
        // console.log(err);
        // console.log(data);
        if(!err){
            toast("Searching keyword " +searchKeyword +" complete.")
        }
    });
    $("#searchKeyword").val('');    
    openSurvey();
//   var keyword = Session.get("searchKeyword");
//   console.log(keyword);
//   if(!keyword){
//       toast("Select a search word please.")
//       return;
//   }
    
//   Meteor.call("seachKeyword",keyword,function(err,data){
//       //console.log(err);
//       //console.log(data);      
//   });
  //$("#keywordPopup").hide(); 
    //onclickopencloseSurvey();
//   Session.get("searchKeyword",null);
    // $("#surveybighandle").transition({"top":"15%"});
    // $("#surveybig").transition({"top":"18%"});
    // $("#updownarrow").animate("class","huge sort descending icon");
  MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function onCLickHashGo(){
    $("#searchKeyword").attr("placeholder",i18n.__("enterkeyword"));
    //$("#keywordPopup").css("top","0%")
    //$("#keywordPopup").show(); 
    ///$("#keywordPopupBackground").show(); 
    //$("#keywordPopup").animate({ "top": "43%" }, 700);
}
function onClickHashGoCancel(){
    //$("#keywordPopup").animate({ "top": "100%" }, 700,function(){
      //$("#keywordPopup").hide();
      //$("#keywordPopupBackground").hide();
    // });
    Session.get("searchKeyword",null);
}
function onBigMenuClick(){
    var cat = $(this).attr("cat");
    $("#" +cat +"Category").slideToggle("slow");
}
function onHelpMenuClick(){
    var cat = $(this).attr("cat");
    $("#" +cat +"Category").slideToggle("slow");
}

function checkdevice(){
    var starttimer = new Date().getTime();
    var ua = navigator.userAgent;
    var checker = {
      iphone: ua.match(/(iPhone|iPod|iPad)/),
      blackberry: ua.match(/BlackBerry/),
      android: ua.match(/Android/)
    };
    if (checker.android){
        deviceType="android";
    }
    else if (checker.iphone){
        deviceType="iphone";
    }
    else if (checker.blackberry){
        deviceType="blackberry";
    }
    else {
        deviceType="others";
    }
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    Me.update({"_id":Session.get("clientid")},{$set : {"deviceType":deviceType,"windowWidth":windowWidth,"windowHeight":windowHeight}});
}
var autoSizeTimeOut = null;
var adjustLeft = 0;
function autoSize(){
        // return
        // inconsistent right now
        console.log("autoSize");
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        $("body").css({"height":windowHeight,"width":windowWidth});
        // return;
        var adjustedWidth = 0;
            adjustedWidth = (windowHeight / 4 ) * 2 ;
        if(windowWidth > windowHeight){
            Session.set("orientation","landscape");
            // adjustLeft = (adjustedWidth/2);
            // $("#bodyWrapper").width(adjustedWidth);
            adjustLeft = (adjustedWidth/2);
            $("#bodyWrapper").width(adjustedWidth);
            //$("#bodyWrapper").css({"left":"50%","margin-left": -adjustLeft +"px"});
            // $("#hashFaqForm").css({"margin-left": adjustLeft +"px"});
            // $("#hashFaqForm").width(adjustedWidth);
            $("#hashFaqForm").css({"margin-left": adjustedWidth +"px"});
            feedWidth = null;
            var one = $(".extrabutton")[0];
            if(one){
                var height = $(one).width();      
                $("#currentFollow").css({"height":height +"px","width":height +"px"});
            }
            if(!Session.get("phonegap")){
                $("#hashFaqForm").css({"display":"block"})
            }
            // $("#section2").css({"display":"block"});
        }
        else{
            Session.set("orientation","portrait");
            $("#bodyWrapper").css({"left":"0px","margin-left": "0px","height":"100%","width":"100%"})
            $("#currentFollow").css({"height":"80px","width":"80px"});
            // $("#section2").css({"display":"none"});
            $("#Main").css({"height":windowHeight,"width":windowWidth})
            adjustLeft = 0;
        }
        feedWidth = null;
        fitTextFunction();
        // if(Template.Section2)
        // Template.Section2.rendered();
        if(Template.Section3)
        Template.Section3.rendered();
        if(autoSizeTimeOut){
            return;
        }
            
        autoSizeTimeOut = setTimeout(autoSize,300);
        
}
var pushId = null;
function bindEvents(){
    //var starttimer = new Date().getTime();
    try{
        
        //var currlang=window.localStorage.getItem("lang");
        // if(!currlang){
        //     window.localStorage.setItem("lang","en");
        //     selectlang("en");
        // }else {
        //     selectlang(currlang);
        // }               
        // checkFormAndTimer("first");
        $("#surveybig").on("scroll",checkscroll);
        window.localStorage.setItem("redirect",window.location);
        $("#Main").hammer().on("swiperight",swipeRight);
        $("#Main").hammer().on("swipeleft",swipeLeft);  
        
        //  so that it doesn't block the UI.
        $("#tap").hammer().on("swiperight",swipeRight);
        $("#tap").hammer().on("swipeleft",swipeLeft);

        $("body").hammer().on('dragstart', function(event) 
            { event.preventDefault(); });
       
        $("#alreadyUser").hammer().on("tap",autoLogin);
        ClientId = window.localStorage.getItem("clientid");
        //console.log(ClientId);

        if(ClientId){
            profilePic = window.localStorage.getItem("profile_picture");
            $("#alreadyUser").show();
            $("#profilePic img").attr("src",profilePic);
            $("#profilePic img").bind("error",function()
                {$("#profilePic img").attr("src","./images/face.jpg");});
            //console.log(profilePic);
        }
        $("#com").blur(commentOnInstagram);
        $("#close").hammer().on("tap",closeOverlay);
        $("#logout").hammer().on("tap",logOutUser);
        $("#instruction").hammer().on("tap",function()
            {$("#instructionPanel,#1instruct").show("slow"); openCloseSnapLeft();});
        $("#ContactUsPopUp").hammer().on("tap",hideContactUsPopUp);
        $("#ContactUsPopUpBackground").hammer().on("tap",hideContactUsPopUp);
        // $(".menu").hammer().on("tap",openCloseSnap);        
        // $("#tutorialButtonMenu").hammer().on("tap",function(){tutorial();});
        $(".keyboard li").hammer().on("tap",tapOnAlpahbet);  
         
        // $("#popular").hammer().on("tap",onClickPopular);
        $("#contactUsButton").hammer().on("tap",onClickContactUsButton);
        //$("#globalFeed").hammer().on("tap",onClickGlobalFeed); 
        // $("#hash").hammer().on("tap",onCLickHashGo);
        $("#hashgosearch").hammer().on("tap",searchHash);
        $("#hashgocancel").hammer().on("tap",onClickHashGoCancel);
        //$("#keywordPopupBackground").hammer().on("tap",onClickHashGoCancel);
        $("#loaderError").hammer().on("tap",function(){loginOnceReady(); hideLoader();});
        $("#instructionNext,#instructionPrev,#instructionDone").hammer().on("tap",onInstructionButtonClick);        
        $("#media").hammer().on("tap",onClickMedia);
        // $("#myFeed").hammer().on("tap",onClickMyFeed);
        // $("#closeTutorialButton").hammer().on("tap",function(){stopFirstTimeLoader("logout")});
        // $(".bigmenu").hammer().on("tap",onBigMenuClick);
        $(".help").hammer().on("tap",onHelpMenuClick);
        // $("#tutNext").hammer().on("tap",tutorialNextButton);
        // $("#tutPrev").hammer().on("tap",tutorialPreviousButton);
        // $("#tutDone").hammer().on("tap",tutorialDoneButton);


        


        $("#gamePromptOkButton").hammer().on("tap",function()
            {console.log("gamePromptOkButton");gamePrompt();});
        $("#hideWelcomePopUp").hammer().on("tap",hideWelcomePopUp);
        $("#welcomePopUpBackground").hammer().on("tap",hideWelcomePopUp);
        $("#hideAboutUsPopUp").hammer().on("tap",hideAboutForm);
        $("#AboutUsPopUpBackground").hammer().on("tap",hideAboutForm);
        $("#aboutUsButton").hammer().on("tap",onClickAboutUsButton);
        $("#feedbackButton").hammer().on("tap",onClickfeedbackButton);
        $("#languageButton").hammer().on("tap",onClicklanguageButton);
        $("#languageBackground").hammer().on("tap",onSetLang);
        $("#AggrementAccept").hammer().on("tap",onClickAggAcceptButton);
        $("#AggrementDeny").hammer().on("tap",onClickAggDenyButton);
        $("#hprogressBar").hammer().on("touch",loveProgDragstart);
        $("#hprogressBar").hammer().on("release",loveProgDragend);
        $("#hprogressBar").hammer().on("drag",loveProgDrag);
        $("#outer").hammer().on("touch",promoteProgDragstart);
        $("#outer").hammer().on("release",promoteProgDragend);
        $("#outer").hammer().on("drag",promoteProgDrag);

        $("#inner-inner").hammer().on("touch",promoteProgDragstart);
        $("#inner-inner").hammer().on("release",promoteProgDragend);
        $("#inner-inner").hammer().on("drag",promoteProgDrag);
        $("#inerhprogressBar").hammer().on("touch",loveProgDragstart);
        $("#inerhprogressBar").hammer().on("release",loveProgDragend);
        $("#inerhprogressBar").hammer().on("drag",loveProgDrag);
        $("#invfacebook").hammer().on("tap",loginWithFacebook);
        //$(".outer").hammer().on("tap",);
        //$("#startWalkthrough").hammer().on("tap",function(){introJs().start()});
        // $("#startWalkthrough").hammer().on("tap",onStartWalkthrou );
        $("#pushNotification").hammer().on("tap",pushNotificationClick);
        $("#sendMail").hammer().on("tap",onsendMail);
        $("#optimize").hammer().on("tap",onOptimize);
        $("#videotutorial").hammer().on("tap",function()
            {openCloseSnapLeft();window.open("https://www.youtube.com/watch?v=Z24Uw2OHx6o", '_system');});
        //$(".language a").hammer().on("tap",onSetLang);
        
        // $("#section3").hammer().on('touch', section3dragstart);
        // $("#section3").hammer().on('release', section3dragend);
        // $("#section3").hammer().on('drag', section3drag);
        
        // chat feature
        // $("#chatboxclosebutton").hammer().on("tap",clickChatBoxCloseButton);
        // $("#chatsendbutton").hammer().on("tap",clickChatSendButton);
        FastClick.attach(document.body);
        // $("#addGroup").hammer().on("tap",addGroupButton);
        $("#atbutton").hammer().on("tap",onClickAtButton);
        $("#getEmailButton").hammer().on("tap",getEmailButton);
        $("#logininstagram").hammer().on("tap",onClicklogininstagram);
        $("#goinstaplaystore").hammer().on("tap",onClickgoinstaplaystore);

        $("#loginwithfb").hammer().on("tap",loginWithFacebook);
        $("#loginwithgoog").hammer().on("tap",loginWithGoogle);
        $("#invmail").hammer().on("tap",clickOnInvMail);
        $("#guestLogincancle").hammer().on("tap",function(){
            $("#guestLogin").css("display","none");
        });
        $("#shareApp").hammer().on("tap",onShare);
        $("#shareAppOnFacebook").hammer().on("tap",onShareOnFacebook);
        $("#emptyCacheButtonMenu").hammer().on("tap",function(){
            cacheFlag = true;
            window.location.reload();
        });

        $(window).unbind('beforeunload');
        $(window).bind('beforeunload',function(){
            saveCollection();
        });
        // $(window).resize(autoSize);
        //$("#pushimagePopUp").hammer().on("tap",OnClickPushImage);
        $("#snapButtonWrapper").hammer().off("tap",openCloseSnapLeft)
        $("#snapButtonWrapper").hammer().on("tap",openCloseSnapLeft);
        $(".ui.heart.rating .icon").hammer().on("tap",setRattings);
        $("#bodyWrapper").hammer().on("tap",tapOnBodyWrapper);
        $(".appname").hammer().on("tap",onCLickHashGo);

        $("#commentingOverlay").hammer().on("tap",commentOneVote);
        $("#cross").hammer().on("tap",commentOneVote);
        facebookBind();
        // HASH MANIA 
            $("#loginButtonWithInstagram").hammer().off("tap",loginWithInstagram)
            $("#loginButtonWithInstagram").hammer().on("tap",loginWithInstagram);
            $("#loginButtonWithFacebook").hammer().off("tap",loginWithFacebook);
            $("#loginButtonWithFacebook").hammer().on("tap",loginWithFacebook);
            $("#loginButtonWithGooglePlus").hammer().off("tap",loginWithGoogle);
            $("#loginButtonWithGooglePlus").hammer().on("tap",loginWithGoogle);
            $("#FAQButton").hammer().on("tap",onClickFAQButton);
            $("#hideVotesButton").hammer().on("tap",onClickHideVotesButton);
            $("#hideCommentsButton").hammer().on("tap",onClickHideCommentsButton);

            $("#lowReso").hammer().on("tap",changeResolutionToLow)
            $("#MediumReso").hammer().on("tap",changeResolutionToMedium);
            $("#HighReso").hammer().on("tap",changeResolutionToHigh);

            $("#surveybighandle").hammer().off("tap");
            $("#surveybighandle").hammer().on("tap",onclickopencloseSurvey);

            $("#seEmail").keyup(function(event){
                $(this).val(convertEmail($(this).val()));
                if(event.keyCode == 13){
                    Login.onSignUpWithTapmate();
                }
            });
            $("#seEmailLogin").keyup(function(event){
                $(this).val(convertEmail($(this).val()));
                if(event.keyCode == 13){
                    $("#sePassLogin").focus()
                }
            });
             $("#sePassLogin").keyup(function(event){
                if(event.keyCode == 13){
                    Login.onLoginWithHashRepublic();
                }
            });
            $("#searchKeyword").keyup(function(event){
                if(event.keyCode == 13){
                    searchHash();
                }
            });
            $("#sePassThankyou1").keyup(function(event){
                if(event.keyCode == 13){
                    $("#sePassThankyou2").focus();
                }
            });
            $("#sePassThankyou2").keyup(function(event){
                if(event.keyCode == 13){
                    Login.onLoginWithTapmate();
                }
            });
            
            // $("#surveybig").on("scrollstop",onSurveyScroll)
        //  HASH MANIA  checkscroll
        // $("#surveybig").on("scrollstop",checkscroll)
        touchScroll("snapy");
            ///Last Event
            // if(!Session.get("phonegap"))
            //     hideLoader();
            //console.log("loader hidden");
            // bindTouchEvents();
        autoSize();         
        i18n = {}; 
        language = {};
        temporarylang();
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "bindEvents"});
    }
    //MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function changeResolutionToLow(){
    Session.set("imageQuality","thumb");
    document.getElementById('lowReso').className = 'blue ui button';
    document.getElementById('MediumReso').className = 'ui button';
    document.getElementById('HighReso').className = 'ui button';
    renderResults(preload[Session.get("keyword")]);
    openCloseSnapLeft();
}
function changeResolutionToMedium(){
    Session.set("imageQuality","low");
    document.getElementById('lowReso').className = 'ui button';
    document.getElementById('MediumReso').className = 'blue ui button';
    document.getElementById('HighReso').className = 'ui button';
    renderResults(preload[Session.get("keyword")]);
    openCloseSnapLeft();
}
function changeResolutionToHigh(){
    Session.set("imageQuality","standard");
    document.getElementById('lowReso').className = 'ui button';
    document.getElementById('MediumReso').className = 'ui button';
    document.getElementById('HighReso').className = 'blue ui button';
    renderResults(preload[Session.get("keyword")]);
    openCloseSnapLeft();
}
function facebookBind(){
    $("#invtwitter").hammer().off("tap");
    $("#invtwitter").hammer().on("tap",function(){
        FB.ui({method: 'apprequests',
        message: 'Welcome to HashRepublic'
        }, function(err,data){
                console.log(err,data)
            });
        openCloseSnapLeft();
    });
}
var processingFlag = false;
function onSurveyScroll(){
    console.log("onSurveyScroll")
    if(processingFlag)
        return;
    processingFlag = true;
    var top = null,elementImg = null;
    $(".hashFeed").each(function(index,element){
        top = $(element).position().top
        elementImg = $(element).children("img");
        if(top <-2000 || top > 2000)
            elementImg.hide();
        else{
            elementImg.show();
        }
    })

    setTimeout(function(){processingFlag = false},250);
}
function clickOnInvMail(){
    var emailurl = 'mailto:tapmate@tapmate.mailgun.org?subject=You have been invited to join tapmate&body=click here to download it <br>http://youtap.meteor.com/app/tapmateYouiestcom';
    window.open(emailurl, '_system');
}
function tapOnBodyWrapper(){
    if(Session.get("clientid")){
        if(tapCount==20){
            ratingPopUp();
        }
        else if(tapCount==2){
            // $("#welcomePopUp").show();
            // $("#welcomePopUpBackground").show();
            //$('#welcomePopUp').Popup();
        }
        else if(tapCount==10){
                //showKeywordPopup();
        }
        tapCount++;
    }
} 
function ratingPopUp(){
    var cursorMe = Me.findOne({"_id":Session.get("clientid")});
    // console.log("tapCount"+cursorMe.rating);
    if(cursorMe)
    if(!cursorMe.rating){
        $("#RatingPopUp").css("top","0%")
        $("#RatingPopUp").show();
        $("#RatingPopUpBackground").show();
        $("#RatingPopUp").animate({ "top": "50%" }, 700);
    }
}
function setRattings(){
    var icon = $(".ui.heart.rating .icon");
    icon.removeClass("active");
    for(var i=0,il=icon.length;i<il;i++){
        $(icon[i]).addClass("active")
        if(icon[i] == this){
            Me.update({"_id":Session.get("clientid")},{$set : {"rating": i+1}});
            break;
        }
    }
    $("#RatingPopUpBackground").hide();
    $("#RatingPopUp").animate({ "top": "100%" }, 700);
    $("#RatingPopUp").hide();  
    onClickfeedbackButton();

}
/////////////////// SHARE //////////////////
function onShare(share){
    if(!Session.get("phonegap")){
        toast("This feature is not available for web browser.");
        return;
    }
    // var share = $(this).attr("share");
    // if(share == "facebook"){
    //     window.plugins.socialsharing.shareViaFacebook("Tapmate" , "http://youtap.meteor.com/images/logo.png", 'http://tapmate.youiest.com', function() {}, function(errormsg){});
    // }
    // else if(share == "twitter"){
    //     window.plugins.socialsharing.shareViaTwitter("Tapmate" , "Check this out Tapmate is out! It's cool!", "http://youtap.meteor.com/images/logo.png", 'http://tapmate.youiest.com');
    // }
    // else if(share == "whatsapp"){
    //     window.plugins.socialsharing.shareViaWhatsApp("Tapmate" , "http://youtap.meteor.com/images/logo.png", 'http://tapmate.youiest.com', function() {}, function(errormsg){}) ;
    // }
    // else if(share == "sms"){
    //     window.plugins.socialsharing.shareViaSMS("Tapmate, Check this out Tapmate is out! It's cool!", null /* see the note below */, function(msg) {}, function(msg) {});
    // }
    // else{
       window.plugins.socialsharing.share("Tapmate" , "Check this out Tapmate is out! It's cool!", "http://youtap.meteor.com/images/logo.png", 'http://tapmate.youiest.com'); 
    // }    
}
function onShareOnFacebook(){
    Meteor.call("onShareOnFacebookHash",Session.get("clientid"),function(err,data){
        console.log(err);
    })
}
function holdOnBigFeedSurvey(share){
    var myShareImage=$("div img").attr("src");
    if(Session.get("phonegap")){
        window.plugins.socialsharing.share("Hash Republic" , "Check this out Hash Republic is out! It's cool!", myShareImage, 'http://hashrepublic.youiest.com'); 
    }
    else{
        toast("This feature is not available for web browser.");
      }    
}
/////////////////// SHARE //////////////////


////////////////////////push notification//////////////
function pushNotifiPopup(pushpic,pushmsg,pushlkid,pushKeyword){
    var starttimer = new Date().getTime();
    // console.log("pushNotifiPopup");
    
    if(pushKeyword){
        Session.set("keyword",pushKeyword)
    }
    // Old code
    // if(pushpic && pushmsg && pushlkid){
    //     // $("#pushnotificationimages").attr("src",pushpic);
    //     // $("#pushtext").html(pushmsg);
    //     // $("#pushimagePopUp").css("top","0%")
    //     // $("#pushimagePopUp").css("display","block");
    //     // $("#pushimagePopUp").animate({ "top": "39%" }, 1500);
    //     Meteor.subscribe("pushnotification",Session.get("clientid"),pushlkid);
    //     Session.set("currentBig",pushlkid);
    // }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function OnClickPushImage(event){
        var starttimer = new Date().getTime();
        var localDiv = this;
        Session.set("currentBig",pushlkid);
        setTimeout(function(){
            $(".voting").css("display","none");
            $("#pushimagePopUp").animate({ "top": "100%" }, 700,function(){
                $("#pushimagePopUp").css("display","none");
            });
       },3500);
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
///////////////////////////////////////////////////////////////

/////////////////////////
function onClicklogininstagram(){
  window.localStorage.setItem("guestid",Session.get("clientid"));
  $("#guestLogin").css("display","none");
  clickOnLoginButton();
}
function onClickgoinstaplaystore(){
    var starttimer = new Date().getTime();
    window.localStorage.setItem("guestid",Session.get("clientid"));
    Session.set("guestid",Session.get("clientid"));
    $("#guestLogin").css("display","none");
    var emailurl = "https://play.google.com/store/apps/details?id=com.instagram.android";
    window.open(emailurl, '_system');
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function section3drag(){
   //timeoutfeeds=setTimeout(function(){
    $("#section3").css({"z-index":"8"});
    $("#section3").animate({"height":"50%"});
  //},400);
}
function section3dragstart(){
   
}
function section3dragend(){
  clearTimeout(timeoutfeeds);

  setTimeout(function(){
    $("#section3").animate({"height":"32%"});
  },2500);
  setTimeout(function(){
    $("#section3").css({"z-index":"0"});
  },1500);
 
}

//////////////////// SLIDER START //////////////////////////

function promoteProgDrag(event){
    var starttimer = new Date().getTime();
    var y = event.gesture.center.pageY; 
    var height = $("#Main").height();           
    var bigheight = $("#quadrant").height();           
    var top = (y/height) * 100; 
    var bigtop = (y/bigheight) * 100;           
    top = Math.round(top) - 2;
    bigtop = Math.round(bigtop) - 5;
    promoteper=100-(bigtop-63);
    if(promoteper<=100){
        //$("#verticalprogress").css("height",promoteper +"%").html("&nbsp"+promoteper + "<br>&nbsp<i class='heart icon'/>");
        $("#verticalprogress").css("height",promoteper +"%");//.html("<i class='big heart icon'/>");
        var cursorlove=100-(promoteper+2);
        $("#inner-inner").css("top",cursorlove+"%");
        var voteper=promoteper-5;
        //$(".voting[myid='"+Session.get("clientid") +"']").css("top",top+"%");
        if(flagVoteorRec){
            $(".recomm[recomid='"+currentMoveRecc +"']").css("top",top+"%");
        }else{
            if(currentMoveVote){
              $(".voting[votingid='"+currentMoveVote +"']").css("top",top+"%");
            }else{
             $(".voting").css("top",top+"%")
            }
        }
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
Meteor.promoteProgDrag=promoteProgDrag;
function promoteProgDragend(){
    var starttimer = new Date().getTime();
    try{
        //console.log("promoteProgDragend");
        var cursorVotes=null;
        if(flagVoteorRec){
            cursorVotes = Feed.findOne({"_id":currentMoveRecc});
            if(cursorVotes){ 
                var pos= $(".recomm[recomid="+currentMoveRecc+"]").css("top");
                var y=pos.substring(0, pos.length - 2);
                var height = $("#Main").height();
                var top = (y/height) * 100;
                top = Math.round(top);
                Feed.update({"_id":cursorVotes._id},{$set :{"top": top}});
                Me.update({"_id":Session.get("clientid")},{$inc:{"movedrecomm":1}})
            }
        }else{
            cursorVotes = Votes.findOne({"_id":currentMoveVote})
            if(cursorVotes){  
            var pos= $(".voting").css("top");
            var y=pos.substring(0, pos.length - 2);
            var height = $("#Main").height();
            var top = (y/height) * 100;
            top = Math.round(top);                  
            Votes.update({"_id":cursorVotes._id},{$set :{"top": top}});
            Me.update({"_id":Session.get("clientid")},{$inc:{"movedme":1}})  
            }
        }  
        $("#inner-inner").css({"height":"33px","width":"42px","font-size": "1em"});   
    }catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "promoteProgDragend"});
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
Meteor.promoteProgDragend=promoteProgDragend;
function promoteProgDragstart(event){
    var starttimer = new Date().getTime();
    event.preventDefault();
    if(event.gesture)
    event.gesture.preventDefault();
    $("#inner-inner").css({"height":"65px","width":"78px","font-size": "2em"});
    $("#outer").animate({"opacity":"1.0"},500,"linear");
    // if(tutorialJSON.fifth && !tutorialJSON.sixth)
    // setTimeout(function(){
    //     var d = getLeftTop("#inerhprogressBar");
    //     tapBigTutorial(d.left,d.top,"Promote","Move your promote meter for this pic.",0,-20);
    //     tutorialJSON.sixth = true;
        
    // },4000);
  MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
Meteor.promoteProgDragstart=promoteProgDragstart;
function loveProgDrag(event){
    var starttimer = new Date().getTime();
    event.preventDefault();
    if(event.gesture)
    event.gesture.preventDefault();
    var x = event.gesture.center.pageX;
    var width = $("#Main").width();           
    var leftper= (x/width) * 100;
    percent = Math.round(leftper);
    // var hprogressBarWidth = percent * $("#hprogressBar").width() / 100;
    // $("#hprogressBar").find('div').css("width",percent +"%").html("<i class='thumbs up icon'/>"+ percent);
    if(leftper<=90){
        $("#inerhprogressBar").css("left",percent +"%");
        $("#hprogressBar").find('div').css("width",percent +"%")//.html("<i class='big thumbs up icon'/>&nbsp&nbsp");
        if(flagVoteorRec){
            $(".recomm[recomid='"+currentMoveRecc +"']").css("left",percent+"%");
        }else{
            $(".voting[votingid='"+currentMoveVote +"']").css("left",percent+"%");
        }
    }
    // if(tutorialJSON.sixth && !tutorialJSON.seventh)
    // setTimeout(function(){
    //     tapBigTutorial(31,31,"Another pic","Tap in feed to select another pic.");
    //     tutorialJSON.seventh = true;
    // },4000);
  MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
Meteor.loveProgDrag=loveProgDrag;
function loveProgDragend(event){
    var starttimer = new Date().getTime();
    // try{
        event.preventDefault();
        if(event.gesture)
        event.gesture.preventDefault();
            
        var cursorVotes=null;
        if(flagVoteorRec){
            var pos = $(".recomm[recomid="+currentMoveRecc+"]").css("left");
            if(!pos)
                return;
            var x=pos.substring(0, pos.length - 2);
            var width = $("#Main").width();
            var left = (x/width) * 100;          
            left = Math.round(left);
            cursorVotes = Feed.findOne({"_id":currentMoveRecc});
            if(cursorVotes){ 
            Feed.update({"_id":cursorVotes._id},{$set :{"left": left}});
            Me.update({"_id":Session.get("clientid")},{$inc:{"movedrecomm":1}})
            }
        }else{

            var pos = $(".voting").css("left");
            if(!pos)
                return;
            var x=pos.substring(0, pos.length - 2);
            var width = $("#Main").width();
            var left = (x/width) * 100;          
            left = Math.round(left);
            cursorVotes = Votes.findOne({"_id":currentMoveVote})
            if(cursorVotes){                    
                Votes.update({"_id":cursorVotes._id},{$set :{"left": left}});
                Me.update({"_id":Session.get("clientid")},{$inc:{"movedme":1}})               
            }
        
        }
        $("#inerhprogressBar").css({"height":"38px","width":"42px","font-size": "large","top": "90%"});
    // }catch(error){
    //     console.log(error);
    //     ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "loveProgDragend"});
    // }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
Meteor.loveProgDragend=loveProgDragend;
function loveProgDragstart(){
    event.preventDefault();
    if(event.gesture)
    event.gesture.preventDefault();
    $("#inerhprogressBar").css({"height":"57px","width":"65px","font-size": "x-large","top": "84%"});
}
Meteor.loveProgDragstart=loveProgDragstart;
//////////////////// SLIDER ENDS //////////////////////////


function getEmailButton(){
    Meteor.call("getContentEmail",function(err,data){
        console.log(err);
        console.log(data);
        window.localStorage.clear();
        window.location.reload(true);
    })
}
// var toggleFollowsFlag = true;
// function toggleFollows(){
//   return;
//     if(toggleFollowsFlag){
//         $("#section2").css("z-index","4");
//         $("#groupDiv").css("z-index","4");
//         $('#section2Label').addClass('likeActive')

//         // polish this later, but simply needs to be a toogle 
//         $("#section2").animate({"height":"45%"},500,function(){});
//         $("#groupDiv").animate({"height":"45%"},500,function(){});
//     }else{
//         $("#section2").animate({"height":"15%"},500,function(){
//             $("#section2").css("z-index","0");
//             $('#section2Label').removeClass('likeActive')
//         });
//         $("#groupDiv").animate({"height":"15%"},500,function(){
            
//         });
//     }
//     toggleFollowsFlag = !toggleFollowsFlag;
//     // setTimeout(function(){.,÷<D-÷>
//     //     toggleFollowsFlag = false;
//     //     toggleFollows();
//     // },1000)
// }
// var toggleFeedsFlag = true;
// function toggleFeeds(){
//   return;
//     if(toggleFeedsFlag){
//         $("#section3").css("z-index","3");
//         $("#section3").animate({"height":"45%"},500,function(){
//             $('#section3Label').addClass('likeActive')
//             //setTimeout(toggleFeeds,500);
//         });
//     }else{
//         $("#section3").animate({"height":"15%"},500,function(){
//             $("#section3").css("z-index","0");
//             $('#section3Label').removeClass('likeActive')
//         });
//     }
//     toggleFeedsFlag = !toggleFeedsFlag;
//     // setTimeout(function(){
//     //     toggleFeedsFlag = false;
//     //     toggleFeeds();
//     // },1000);    
// }
function checkOptimized(){
    var imageQuality = Session.get("imageQuality");
    if(imageQuality == "low"){
        document.getElementById('lowReso').className = 'blue ui button';
    }else if(imageQuality == "standard"){
        document.getElementById('MediumReso').className = 'blue ui button';
    }else if(imageQuality == "thumb"){
        document.getElementById('HighReso').className = 'blue ui button';
    }else{

    }
    // var starttimer = new Date().getTime();
    // var checkState = window.localStorage.getItem("optimizeLimit");
    // var check1 = $("#optimizeCheckBox").prop('checked');
    // if(checkState==4){
    //     //console.log("four");
    //     Session.set("limit",4);
    //     $(".ui.checkbox").checkbox('enable');
    // }
    // else{
    //     Session.set("limit",8);
    //     //console.log("eight");
    //     //console.log(checkState);
    //     $(".ui.checkbox").checkbox('disable');
    // }  
    // var agreeFlag = window.localStorage.getItem("agree");
    // if(!agreeFlag)
    //     $("#Aggrements").show();
    // else
    //     $("#Aggrements").remove();
    // MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
}
function onOptimize(){
    var starttimer = new Date().getTime();
    $('.ui.checkbox').checkbox();
    var check = $("#optimizeCheckBox").prop('checked');
    if(check){
        Session.set("limit",8);
        window.localStorage.setItem("optimizeLimit",8);
    }
    else{
        Session.set("limit",4); 
        window.localStorage.setItem("optimizeLimit",4);
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});

}

/*

var myIntro = null;
function onStartWalkthrou(){
    snapFlag = true;
    openCloseSnapLeft();
    var introJSON = {
            nextLabel: "",
            prevLabel: "",
            skipLabel: "",
            doneLabel: "",
            steps: [
                    // Stopped due to non reactive
                    // {"intro": "Online / Offline",
                    //     "position": "left",
                    //     "element": $("#status")[0],
                    //     "selector" : "#status"
                    // },
                    // {"intro": "Users of Tapmate",
                    //     "element": $("#section2")[0],
                    //     "selector" : "#section2"
                    // },
                    // {"intro": "Your favourite pics from Instagram",
                    //     "element": $("#section3")[0],
                    //     "selector" : "#section3"
                    // },
                    // {"intro": "Fun part.",
                    //     "position": "top",
                    //     "element": $("#section4")[0],
                    //     "selector" : "#section4"
                    // },
                    // {"intro": "Your love rating",
                    //     "position": "top",
                    //     "element": $("#hprogressBar")[0],
                    //     "selector" : "#hprogressBar"
                    // },
                    
                    // {"intro": "Your promote rating",
                    //     "position": "right",
                    //     "element": $("#outer")[0],
                    //     "selector" : "#outer"
                    // },
                    {"intro": "Select a picture. I see it's already selected",
                        "position": "top",
                        "element": $(".feed:first")[0],
                        "selector" : ".feed:first",
                        "scriptElement" : function(){
                            var display = null;
                            var myElement = null;
                            $(".feed").each(function(index,element){
                                if(myElement)
                                    return;
                                display = $(element).css("display");
                                console.log(display);
                                if(display == "block")
                                    myElement = element;
                            })
                            return myElement;
                        },
                        "scriptCondition" : function(currentstep){
                            
                        }
                    },
                    {"intro": "Now select yourself.",
                        "position": "bottom",
                        "element": $(".followsIcons:eq(1)")[0],
                        "selector" : ".followsIcons:first"
                    },
                    {"intro": "Now place your face in fun part to vote.",
                        "position": "top",
                        "element": $("#section4")[0],
                        "selector" : "#section4"                       
                    },
                    {"intro": "Now select your friend.",
                        "position": "bottom",
                        "element": $(".followsIcons:eq(1)")[0],
                        "selector" : ".followsIcons:eq(1)"                         
                    },
                    {"intro": "Now place your face in fun part to recommend.",
                        "position": "top",
                        "element": $("#section4")[0],
                        "selector" : "#section4"                        
                    }
                ]
          }
if(!myIntro)
        myIntro = new introJs(); 
        Meteor.myIntro = myIntro;
        myIntro.setOptions(introJSON);
        setTimeout(function(){
            myIntro.start().onchange(onChangeWalkthrough).onexit(showRestartWalkthrough).oncomplete(showRestartWalkthrough);
        },500);     
        
}
function onChangeWalkthrough(element){
        switch(this._currentStep)
        {
            case 4:
                console.log("Horizontal progress bar");
                $("#hprogressBar").css("opacity","1");
                // due to some function making it 0
                
                setTimeout(function(){$("#hprogressBar div").css("opacity","1");},500);
            break;
            case 5:
                $("#outer").css("opacity","1");
                setTimeout(function(){$(".inner").css("opacity","1");},500);

            break;
            case 6:
            break;

            case 99:
            break;

            case 100:
            break;
            default:
            
        }
        $("#quadrant div").css("opacity","0.0");
        $(element).css("opacity","1.0");        
}
var walkthroughExitFlag = false;
function showRestartWalkthrough(){
    toast("Click walktrhough in tutorial section to start it again.")
}

*/

// function checkSnapy(f,s){
//     var left = $("#snapy").css("left");
//     if(left == "0px" || left == "0%" ){ 
//         if(f == 'c'){            
//             openCloseSnap();            
//         }
//     }
//     else{
//         if(f == 'o'){                        
//             openCloseSnap();
//             myIntro.goToStep(s)
//         }
//     }   
//     //if(f == "o"){
//         // $("#snapy").animate({"left":"0%"},"slow","easeOutBounce");
//         // //$("#snapy").css("width","0%");
    
// }
function onClickAtButton(){
    var emailurl = 'mailto:tapmate@tapmate.mailgun.org?subject=' +groupIds()  +'&body='+i18n.__("emailstring1")+'<br>' +emailparse() +"<br> <img src='" +getPicture() +"'> \\n "+i18n.__("emailstring2")+" ";
    window.open(emailurl, '_system');
}

function groupIds(){
    var starttimer = new Date().getTime();
    return Session.get("currentBig") +"," +Session.get("clientid");
    var cursorFollowsGroup = FollowsGroup.findOne();
    var string = ""
    if(cursorFollowsGroup){
        var follows = cursorFollowsGroup.follows
        if(follows){
            for(var i=0,il=follows.length-1;i<il;i++){
                string += follows[i]+",";
                console.log(string);
            }            
            if(follows.length >0){
                string += follows[follows.length-1];
            }
        }
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
    return string;
}
function getPicture(){
    var cursorFeed = Feed.findOne({"likeid":Session.get("currentBig")});
    if(cursorFeed)
        return cursorFeed.low;
}
function emailparse(){
    var starttimer = new Date().getTime();
    if(DebugFace){
        return "http://localhost:3000/picture/"+Session.get("currentBig");
    }
    else{
       return "http://youtap.meteor.com/picture/"+Session.get("currentBig");
    }
     
    var cursorFollowsGroup = FollowsGroup.findOne();
    if(cursorFollowsGroup){
        var emailstring = "http://youtap.meteor.com/" +cursorFollowsGroup._id;
        return emailstring;    
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"aaaa","time":((new Date().getTime())-starttimer)});
    return "Sorry no group email"
}
// function vibrateBinding(){
//     //no more required due to poor iphone vibrator
//     return true;
//         if(Session.get("phonegap")){
//             GameVibrate = navigator.notification.vibrate;
//         }
//         else{
//             GameVibrate = window.navigator.vibrate;
//         }

//         // console.log(GameVibrate)
//         if(typeof GameVibrate != "function"){            
//             GameVibrate = function(){};//dummy function
//         }
//         try{
//             GameVibrate(100)
//         }
//         catch(err){
//             console.log("vibrate")
//             GameVibrate = function(){};
//         }    
// }

// function checkScoreToast(){
//     try{
//         return ;
//         //console.log("checkScoreToast");
//         var cursorRecomm = Recommend.findOne({"notify":"no","whoid":Session.get("clientid")})
//         //console.log(cursorRecomm);
//         if(cursorRecomm){ 
//             //console.log(cursorRecomm.likeid);
//             onResumeMessageBucket =  cursorRecomm.likeid;
//             Meteor.subscribe("media",cursorRecomm.likeid);
//             var cursorMedia = Media.findOne({"_id":cursorRecomm.likeid});         
//             if(!cursorMedia){
//                 setTimeout(checkScoreToast,1000);
//                 return;
//             }
//             //39 points from @Youiest of @wiber pic.
//             var message = cursorRecomm.distance + " pts from @" +cursorRecomm.followusername +" by @" +cursorMedia.username +" pic.";
//             //"You got " +cursorRecomm.distance +" from " +cursorRecomm.followusername +" on the pics of " +cursorMedia.username +". Good Guess! ";
//             //"Good guess! +" +cursorRecomm.distance +" from your recommendation to " +cursorRecomm.followusername

//                 toast(message);
//                 Recommend.update({"_id":cursorRecomm._id},{$set :{"notify":"yes"}})                         
//             //}
//         }
//     }
//     catch(error){
//         console.log(error);
//         ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "checkScoreToast"});
//     }
    
// }
jQuery.fn.shake = function() {
    this.each(function(i) {
        $(this).css({ "position": "relative" });
        for (var x = 1; x <= 3; x++) {
            $(this).animate({ left: -25 }, 10).animate({ left: 0 }, 50).animate({ left: 25 }, 10).animate({ left: 0 }, 50);
        }
    });
    return this;
}

Meteor.getTextForNewsletters = function(id){
    Meteor.call("getTextForNewsletters",function(err,data){
        // console.log(err);
        // console.log(data);
        if(data){
            if(data.statusCode == 200){
                var imageArray = data.data.data;
                // console.log(imageArray)
                if(imageArray.length > 0){
                    var caption = imageArray[0].caption;
                    // console.log(caption);
                }
            }
        }
    });
}

//// PUSH NOTIFICATION /////
function pushNotificationClick(){
    //console.log("pushNotificationClick");
    app.receivedEvent();

}
var pushpic = null;
var pushmsg = null;
var pushlkid=null;
var pushKeyword = null;                
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
        var pushNotification = window.plugins.pushNotification;
        if (device.platform == 'android' || device.platform == 'Android') {
            //toast("Register called");
            pushNotification.register(this.successHandler, this.errorHandler,{"senderID":"422665837619","ecb":"Meteor.app.onNotificationGCM"});
            //toast(i18n.__("regCalled"));
        }
        else { 
            //toast("Register called");
            pushNotification.register(this.successHandler,this.errorHandler,{"badge":"true","sound":"true","alert":"true","ecb":"Meteor.app.onNotificationAPN"});
            //toast(i18n.__("regCalled"));
        }
    },
    // result contains any message sent from the plugin call
    successHandler: function(result) {
        console.log('Callback Success! Result = '+result);
        gotPushId(result);
    },
    errorHandler:function(error) {
        console.log(error);
    },
    onNotificationGCM: function(e) {
        switch( e.event )
        {
            case 'registered':
                if ( e.regid.length > 0 )
                {
                    console.log("Regid " + e.regid);
                    gotPushId(e.regid);
                }
            break;
 
            case 'message':
                // if this flag is set, this notification happened while we were in the foreground.
                // you might want to play a sound to get the user's attention, throw up a dialog, etc.
                if ( e.foreground )
                {
                    //alert("if forground");

                    // if the notification contains a soundname, play it.
                    var my_media = new Media("/android_asset/www/"+e.soundname);
                    my_media.play();
                }
                else
                {  // otherwise we were launched because the user touched a notification in the notification tray.
                    if ( e.coldstart )
                    {
                        //alert("if coldstart");
                    }
                    else
                    {
                        //alert("if coldstart");
                    }
                }
                pushpic = e.payload.low;
                pushmsg = e.payload.message;
                pushlkid = e.payload.keyword;
                pushKeyword = e.payload.keyword;
                pushNotifiPopup(pushpic,pushmsg,pushlkid,pushKeyword);
                
            break;
 
            case 'error':
              console.log('GCM error = '+e.msg);
            break;
 
            default:
                console.log('An unknown GCM event has occurred');
              break;
        }
    },
    onNotificationAPN: function(event) {
        var pushNotification = window.plugins.pushNotification;
        alert("Running in JS - onNotificationAPN - Received a notification! " + event.alert);
        
        if (event.alert) {
            navigator.notification.alert(event.alert);
        }
        if (event.badge) {
            pushNotification.setApplicationIconBadgeNumber(this.successHandler, this.errorHandler, event.badge);
        }
        if (event.sound) {
            var snd = new Media(event.sound);
            snd.play();
        }
    }
}
Meteor.app = app;
Meteor.app.initialize();
function gotPushId(regid){
  // toast('registration id got');
  var type = null;
  if (device.platform == 'android' || device.platform == 'Android'){
      type = "android";
  }
  else{
      type = "iphone";    
  }
  if(regid == "OK")
    return;
    // as per hashrepublic it's simple now just update it
    if(!Session.get("clientid")){
        setTimeout(function(){
            gotPushId(regid);
        },1000);
        return;
    }
    UserHashMania.update({"_id":Session.get("clientid")},{$set :{"pushid":regid,"pushtype":type}});
  // Meteor.call("registrationid",regid,type,Session.get("clientid"),function(err,data){                        
  //     if(data){
  //         toast("Success");
  //         window.localStorage.setItem("pushid",regid);
  //     }
  //     else{
  //         toast("failure");
  //     }
  // });
  
}
//// PUSH NOTIFICATION /////

/////////// WALKTHROUGH START ///////////




/*
var walkthroughCounter = 0;

//Step 1
function startWalkthrough(){
    walkthroughCounter = 0;
    
    $("#popup").after('<div id="walkthroughMessageBox"> '+
                        '<div id="walkthroughMessage"> </div> '+
                        '<div id="walkthroughOkButton"> OK </div> '+
                    '</div>');
    $("#walkthroughMessageBox").show();    
    $("#walkthroughOkButton").unbind("click");   
    $("#tap").show();
    siriMessage();
}


//Step 2
function siriMessage(){
    $("#walkthroughMessage").html("Hi, I am Siri <br> I will help you understand this app.");
    walkthroughCounter = 1;
    $("#walkthroughOkButton").hammer().on("tap",tapYourFeedsStarter); 
}

//Step 3
function tapYourFeedsStarter(){
    closeWalkthroughMessageBox();
    
    var count = $(".feed").length;
    count = 1;
    if(count){
        tapYourFeeds();
    }
    else{
        oopsYouDontHaveFeed();
    }
}

//Step 4
function tapYourFeeds(){
    $("#walkthroughMessage").html("Tap on a picture in your feed. <br> So that it gets big.");
    $("#walkthroughMessage").show("slow");
    $("#tap").animate({"left": "32%","top": "34%"},"1000","linear");
    $(".feed:first").hammer().on("tap",tapYourFace);
}
function tapYourFace(){
    closeWalkthroughMessageBox();

}
//Step 3.5
function oopsYouDontHaveFeed(){
    $("#walkthroughMessage").html("Tap on G button <br> That's global feeds.");
    $("#globalFeed").hammer().on("tap",globalFeedTutorial);
           
    walkthroughCounter = 1;
}
function globalFeedTutorial(){
    setTimeout(function(){$("#walkthroughOkButton").hammer().on("tap",tapYourFeedsStarter);},1000);
    $("#globalFeed").unbind("click",globalFeedTutorial) 
}
function closeWalkthroughMessageBox(){
    $("#walkthroughMessageBox").hide();
}
Meteor.startWalkthrough = startWalkthrough;

function stopWalkthrough(){

}
*/
/////////// WALKTHROUGH ENDS ///////////

/////////// GEOLOCATION STARTS ///////////

function location(){
    locatationIntervalId = setInterval(getLocation,54000000);
}
function getLocation(){
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(showPosition);
    else
        console.log("Geolocation is not supported by this browser");
}
function showPosition(position)
{
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude); 
}

/////////// GEOLOCATION ENDS ///////////

/////////////////GAMESECTION//////////////
/*
var GameStartFlag = false;
var GameSpeed = 1500;
var GameIntervalId = null;
var nextQuadrantGameId = null;
var GameRandomNumber = -1;
var GameCheckRandomNumber = -1
var GameTotalCount = 0;
var GameHitCount = 0;
var GameMissCount = 0;
var GameTimeCount = 1;
var GameVibrate = null;
var GameRunningFlag = false;
var GamePrevRandomNumber = -1;
var GameResetTimeoutId = null;
function startGameSetup(){
    $("#tutorialSec1Text").html("Game started! <br>Tap the below picture to get points!");
    $("#tutorial").css({"opacity": "1.0","display": "block"});
    $("#tutorialSec4 div").hammer().on("tap",gameTapOnPic);
    $("#tutorialSec4 div").css({"display":"block","opacity":"0.0"});
    $("#tutorialSec2 div").css({"opacity":"0.8"});
    
    $("#tutorialLogo").css({"width":$("#tutorialLogo").css("height")});
    //not trying this for now.
    //try{
       vibrateBinding();
    // }
    // catch(e){
    //     startGame();
    // }
    //$("#gamePrompt").show();
    //toast("Game starts..!");
    // startGameInterval = setInterval(startGame,2000);
    // setTimeout(startGame,2000)
    startGame();
}





// function gamePrompt(){
//     //$("#gamePrompt").hide();
    
// }
// function location(){
//     navigator.geolocation.getCurrentPosition(getLocation, onError);
//     //locatationIntervalId = setInterval(getLocation,5000);
// }
// function getLocation(position){
//     console.log(position.coords.latitude);
// }



function startGame(){
    // clearInterval(startGameInterval);
    console.log("startgame");
    GameIntervalId = setInterval(runGame,1000);
    GameIntervalToStop = setInterval(checkToStopGame,5000);
    setTimeout(stopGame,20000);
    nextQuadrantGameId = 1;
    nextQuadrantGame();
}
function checkToStopGame () {
   // if(!GameIntervalId)
   //     return;
   var imagesrc = $(".bigFeed img").attr("src");
       if(typeof(imagesrc) == "string"){
            if(imagesrc.length > 10){
               stopGame();
               if(Session.get("phonegap"))
                    window['gamewindow'].close();
               // console.log("finish");
               // var currtime=GameTimeCount;
               // var acttime=5-currtime;
               // var stopgametimeat=acttime*1000+300;
               // if(currtime<5){
               //  setTimeout(stopGame,stopgametimeat);
               // }
               // https://trello.com/c/hoboMeJ9/332-game-score-is-getting-reset
               // else{
               //  stopGame();
               // }
               //GameStopFlag = true;
               //console.log(currtime+""+acttime)
               // if(GameTimeCount>5){
               // }
               //onClickGlobalFeed("game");
           }
       }       
       
}

// function startGame(){
//     GameIntervalId = setInterval(runGame,1000);
//     GameIntervalToStop = setInterval(checkToStopGame,5000);
//     setTimeout(stopGame,20000);
//     nextQuadrantGameId = 1;
//     nextQuadrantGame();
// }

function stopGame(){    
    var avg = GameTimeCount / GameHitCount; 
    if(!GameHitCount)
        avg = 0; 
    avg = avg.toFixed(2);
        //https://trello.com/c/vfUxWIc9/294-don-t-allow-triple-taps-in-game
        $("#tutorialSec1Text").html("You got " +GameHitCount +" pts <br> in " +GameTimeCount +" seconds! <br> Thats an average time of " +avg +"."); 
        GameStartFlag = GameTotalCount = GameHitCount = GameMissCount = GameTimeCount = 0;
        setTimeout(function(){
            $("#tutorial").css({"display": "none"});
        },3000);
        
    clearInterval(GameIntervalId);
    clearTimeout(nextQuadrantGameId);
    clearInterval(GameIntervalToStop);
    
    GameIntervalId = null;
    nextQuadrantGameId = null;
    GameIntervalId = null;    
    $("#tutorialSec4 div").hammer().off("tap",gameTapOnPic);
    $("#tutorialSec4 div").css({"display":"block","opacity":"1.0"}); 
}
function resetSpeed(){
    $("#hateSpeed").css({"opacity":"0.0"});
    $("#loveSpeed").css({"opacity":"0.0"});
    $("#loveSpeed img").css({"opacity":"0.0"});
    $("#hateSpeed img").css({"opacity":"0.0"});
    $("#loveQuadrant").css({"opacity":"0.0"});
    $("#promoteQuadrant").css({"opacity":"0.0"});
}
function currentNumberWithCSS(number,cssJSON){    
    // if(number == 0)
    //     $("#lovemessage").css(cssJSON);
    // else if(number ==1)
    //     $("#lovemessage,#promotemessage").css(cssJSON);    
    // else if(number ==3)
    //     $("#promotemessage").css(cssJSON);
    // else{}
    // switch(number){
    //     case '0':            
    //         $("#lovemessage").addClass("redmessage");
    //     break;            
    //     case '1':            
    //         $("#lovemessage,#promotemessage").addClass("redmessage");
    //     break;       
    //     case '3':             
    //         $("#promotemessage").addClass("redmessage");
    //     break;
    // } 
    clearTimeout(GameResetTimeoutId);   
    resetSpeed();
    switch(number){
        case '0':                        
            $("#loveSpeed").css({"opacity":"0.6"});            
            $("#loveSpeed img:first-child").css({"opacity":"0.6"});
            $("#loveQuadrant").css({"opacity":"1.0"});
        break;            
        case '1':            
            $("#loveSpeed").css({"opacity":"0.6"});            
            $("#loveSpeed img").css({"opacity":"0.6"});
            $("#promoteQuadrant").css({"opacity":"1.0"});
        break;
        case '2':            
            $("#hateSpeed").css({"opacity":"0.6"});            
            $("#hateSpeed img:first-child").css({"opacity":"0.6"});            
        break;       
        case '3':             
            $("#hateSpeed").css({"opacity":"0.6"});            
            $("#hateSpeed img").css({"opacity":"0.6"});
            $("#promoteQuadrant").css({"opacity":"1.0"});
        break;
    } 
}
function nextQuadrantGame (){
    // console.log("nextQuadrantGame");
    GameRunningFlag = true;
    if(!nextQuadrantGameId)
        return;
    GameRandomNumber = randomGame(); 
    if(GamePrevRandomNumber == GameRandomNumber){
        nextQuadrantGame();
        return;
    }
    GameCheckRandomNumber = GamePrevRandomNumber = GameRandomNumber;

    var localRandomNumber = GameRandomNumber;  //more accuracy
    //console.log($("#" +localRandomNumber +"Q"));
    $("#lovemessage,#promotemessage").css({"opacity":"1.0"});   
    $("#" +localRandomNumber +"Q")
        .css({"opacity":"5.0"});        
            
        GameTotalCount++;
}
function runGame(){
    GameTimeCount++; 
        // console.log(GameTimeCount);
    $("#tutorialSec1Text").html(GameTimeCount +" | " +GameHitCount);   
}
function gameTapOnPic(event){
    var currentNumber = $(this).attr("count");
    if(currentNumber == GameCheckRandomNumber){
        //console.log("hit");
        currentNumberWithCSS(currentNumber)
        //$("#" +currentNumber +"message").css();
        GameHitCount++;
        // GameVibrate(500);
        var localRandomNumber = GameCheckRandomNumber;
        GameRandomNumber = -1;
        // flashSpeed(localRandomNumber);
        $("#tutorialSec1Text").html(GameTimeCount +" | " +GameHitCount); 
        setTimeout(function(){
                            $("#" +localRandomNumber +"Q").css({"opacity":"0.0"});
                            // $("#lovemessage,#promotemessage").removeClass("redmessage");                           
                        },200);
        GameResetTimeoutId = setTimeout(resetSpeed,800);
            nextQuadrantGameId = setTimeout(nextQuadrantGame,150);
    }
    else{
       //console.log("miss"); 
       GameMissCount++;
    }
}
// function flashSpeed(number){
//     console.log(number);
// }
function randomGame(){
    var random = 0;
    random = Math.floor((Math.random()*10)%4);
    //console.log(random);
    return random;
}
// Meteor.randomFunction = randomGame;        
// Meteor.startGame = startGame;    
// Meteor.stopGame = stopGame;
// Meteor.startGameSetup = startGameSetup;    
 */

/////////////////GAMESECTION//////////////
var snapTopFlag = true;
function onclickopencloseSurvey(){
    // console.log(snapTopFlag)
    if(snapTopFlag){ 
        openSurvey();
    }
    else{
        closeSurvey()        
    }
    // if(!resume)
    // snapTopFlag = !snapTopFlag;
}

function openSurvey(){
    $("#surveybighandle").css({"top":"89%","background": "transparent","opacity": "1.0"});
    $("#surveybig").transition({"top":"92%"});
    $(".hashKeyword").css({"display":"none"});
    $('#updownarrow').css({"top": "0%"});
    $(".leaderSection").hide();
    $(".tapToShow").hide();
    
    document.getElementById('updownarrow').className = ' huge sort ascending icon';
    //$("#updownarrow").animate("class","huge sort ascending icon");
    //$("#surveybighandle").css({"z-index":"4"});
    snapTopFlag = false;

}
function closeSurvey(){
    notify("Hold image to share it.","information");
    $("#surveybighandle").css({"top":"0%","background": "black","opacity": "0.5"});
    $("#surveybig").transition({"top":"15%"});
    $(".hashKeyword").css({"display":"block"});
    $('#updownarrow').addClass('huge sort descending icon');
    $('#updownarrow').css({"top": "43%"});
    $(".leaderSection").show();
    $(".tapToShow").show();
    document.getElementById('updownarrow').className = ' huge sort descending icon';
    // $("#updownarrow").animate("class","huge sort descending icon");
    //$("#surveybighandle").css({"z-index":"3"});
    snapTopFlag = true;
}
/////////////////SNAPY//////////////
var snapLeftFlag = false;
function snapy(){
  $("#snapButton").hammer().on("tap",openCloseSnapLeft)
}
function openCloseSnapLeft(){
    if(snapLeftFlag){        
        $("#snapy").transition({"left":"-90%"});
        $("#beforeLogin").transition({"left":"0%"});
        $("#snapButton").transition({"left":"0%"});
        $("#snapButtonWrapper").css({"display":"none"});
    }
    else{
      $("#snapy").transition({"left":"0%"});
      //$("#beforeLogin").transition({"left":"90%"});
      $("#snapButton").transition({"left":"90%"});
      $("#snapButtonWrapper").css({"display":"block"}); 
      followsFlag = true;
      openCloseFollows();

    }
    snapLeftFlag = !snapLeftFlag;
}
var snapRightFlag = false;
function snapy(){
  $("#snapButton").hammer().on("tap",openCloseSnapLeft)
}
function openCloseSnapRight(){
    if(snapRightFlag){        
        $("#snapy").transition({"left":"-90%"});
        $("#beforeLogin").transition({"left":"0%"});
        $("#snapButton").transition({"left":"0%"});
        console.log(adjustLeft)
          //$("#snapButtonWrapper").css({"display":"none"});
    }
    else{
      $("#snapy").transition({"left":"0%"});
      $("#beforeLogin").transition({"left":"90%"});
      $("#snapButton").transition({"left":"90%"});
      console.log(adjustLeft)
      if(adjustLeft!=0){
       // $("#snapButtonWrapper").css({"display":"block"});
      }
    }
    snapRightFlag = !snapRightFlag;
}
var followsFlag = false;
function openCloseFollows(){
    if(followsFlag){
        // if(adjustLeft!=0){
        //   $("#section2").transition({"left":"100%"});
        // }else{
        //   $("#section2").transition({"left":"100%"},function(){$("#section2").hide();});
        // }
        $("#currentFollowWrapper").transition({"right":"0px","width":"0%"});
        $("#currentFollow").transition({"right":"0px"});
        $("#openclosearrow").animate("class","left arrow icon");
    }
    else{
        // $("#section2").show();
        // $("#section2").transition({"left":"25%"});
        $("#currentFollowWrapper").transition({"right":"75%","width":"25%"});
        $("#currentFollow").transition({"right":"75%"});
        $("#openclosearrow").animate("class","right arrow icon");
        // if(tutorialJSON.fifth && !tutorialJSON.sixth){
        //     semanticpopup(82,36,"Users",i18n.__("urfriends"));
        //     clearInterval(tapBigTutorialInterval);
        //     tutorialJSON.sixth = true;
        //     setTimeout(showLoginPopup,5000);
        // }
    }
    followsFlag = !followsFlag;
}
function showLoginPopup(){
  if(Session.get("clientid")){
    if(isNaN(Session.get("clientid"))){
        $("#guestLogin").css("display","block");
   }else{
      
   }
  }
  
    
}
// function(){
//     console.log()
//     if($("#section2").css("left") == "0px")
//         $("#section2").animate({"left":"75%"})
//     else
//         $("#section2").animate({"left":"0%"})
// }
/////////////////SNAPY//////////////
///////////////////////////////Group Div////////////////////////
// var groupflag = false;
// function onGroupButton(){
//     if(groupflag){
//         $("#groupDiv").animate({"right":"-9%"},"fast","easeOutBounce");
//         $("#groupButton").animate({"right":"89%"},"fast","easeOutBounce");
//     }else{
//         $("#groupDiv").animate({"right":"-100%"},"fast","easeOutBounce");
//         $("#groupButton").animate({"right":"0%"},"fast","easeOutBounce");
//     }
//     groupflag = !groupflag;
// }









/////////////////////////////////Group Div////////////////////////////
////////////TUTORIAL HASTEN//////////////
/*
var nextCouter = 0;
var tutstep=1;
var bigcount=0;
//var message = ["GOOD & HUSH","GOOD & LOUD","STAY AWAY & HUSH","STAY AWAY & LOUD"];
var message = ["Love it Silenty","Love it Loudly","Hate it Silently","Hate it Loudly"];
function tutorial(type){
    //console.log("tutorialcalled");  
    $("#tutorialButton").css({"display": "block","z-index":"4"});
    $("#tutorial").css({"display": "block","z-index":"3"});
    animateSection(1,type);
//tutstep=0
}

function tutorialNextButton(){
    tutstep++;
    tutorialNextStep();
    // console.log(tutstep);
}
function tutorialPreviousButton(){
    tutstep--;
    tutorialNextStep();
    // console.log(tutstep);
}
function tutorialNextStep(){
        if(tutstep==2)
    {
        animateSection(2);
    }
    if(tutstep==3)
    {
        //animateSection(2)
        animateSection(3);
    }
    if(tutstep==4)
    {
        //animateSection(2)
        animateSection(4);
    }
    if(tutstep==5)
    {
        animateBigTutorial(0);
    }
    if(tutstep==6)
    {
        animateBigTutorial(1);
    }
    if(tutstep==7)
    {
        animateBigTutorial(2);
    }
    if(tutstep==8)
    {
        animateBigTutorial(3);
        nextCouter = 0;  
    }
    if(tutstep==9)
    {
        animatateClickOnLike();
    }
    if(tutstep>9)
    {
        nextAnimation();
    }
}
function tutorialDoneButton(){
    tutorialEnds()
}

function animateSection1(){
    if(bigcount < 4){
        setTimeout(function(){
            animateBigTutorial(bigcount);
            bigcount++;
        },1500)
    }
    return;
}
function animateSection(count,type){
    if(count == 5){
        // setTimeout(function(){              
        //     $("#tutorialSec4").css({"opacity":"0.0"});
        //     $("#tutorialSec4 div").css({"display":"block","opacity":"0.0"})
        //     //var quad = $("#quadrant div");    
        //     //animateEachQuadrant(quad,0,"tutorial");
        //     animateBigTutorial(0,type)
        // },1500)
        return;
    }
    $("#tutorialSec" +count).animate({"opacity":"1.0"},1500,"easeInCirc",function(){
        $("#tutorialSec" +count).animate({"opacity":"0.0"},function(){
            //$("#tutorialSec" +count).animate({"opacity":"1.0"});
        });
        // animateSection(++count,type);
    });
}

function animateBigTutorial(count,type){
    if(count == 4){
        if(type=="loader")
            return;
        animatateClickOnLike(); 
        $("#popup").hammer().on("tap",nextAnimation);
        nextCouter = 0;  
        return;                             
    };
    var text = null;
    if(type !="loader"){
        $("#popup").show("slow");
        text = "If you " + message[count] +" for this picture.<br> Place your Face here.";
        $("#popupMessage").html(text);
    }
    $("#tutorialSec4").css({"opacity":"1.0"})
    $("#" +count +"Q").css({"opacity":"0","display":"block"});
    $("#" +count +"Q").animate({"opacity":"1.0"},1500,"swing",function(){
        //$("#popup").hide();
        $("#" +count +"Q").animate({"opacity":"0.0"},1500,"swing");                            
        // animateBigTutorial(++count,type);    
    });  

}
function animatateClickOnLike(){
    $("#tutorial").css({"display": "none","z-index":"0"});
    $("#tap").css({"display": "block"});
    $("#tap").animate({"left": "24%", "top": "30%"},"slow","easeOutBounce",function(){
        $("#popup").show("slow");
        $("#popupMessage").text("Tap the Picture to recommend it to a friend");
    })
}
function animateClickOnFollows(){
    $("#tap").animate({"left": "9%", "top": "15%"},"slow","easeOutBounce",function(){
        $("#popup").show("slow");
        $("#popupMessage").text("Tap yourself to be selected");
    })  
}
function animateClickOnBig(message){
    //console.log("big");
        $("#tap").animate({"left": "30%", "top": "58%"},"slow","easeOutBounce",function(){
        $("#popup").show("slow");
        $("#popupMessage").html(message);
    })  
}
function animateRecommendation(){
    $("#tap").animate({"left": "30%", "top": "16%"},"slow","easeOutBounce",function(){
        $("#popup").show("slow");
        $("#popupMessage").text("Tap your Follows");        
    })  
}
function nextAnimation(){
    //console.log(nextCouter);
    //nextCouter=0
    if(nextCouter == 0){
        $("#popup").hide();
        $("#popup").show("slow");
        $("#popupMessage").text("It get's in the Big Area");
    }
    else if(nextCouter == 1){
        $("#popup").hide();
        animateClickOnFollows();
    }
    else if(nextCouter == 2){
        $("#popup").hide();             
        animateClickOnBig("Place yourself in the Big");                 
    }
    else if(nextCouter == 3){
        $("#popup").hide();
        $("#popup").show("slow");
        $("#popupMessage").text("And have Fun");
    }   
    else if(nextCouter == 7){
        $("#popup").hide();
        $("#popup").show("slow");
        $("#popupMessage").html("For more information see the <br> instruction panel");      
    }
    else if(nextCouter == 4){
        $("#popup").hide();
        $("#popup").show("slow");
        $("#popupMessage").text("That's not it.");              
    }
    else if(nextCouter == 5){
        $("#popup").hide();     
        animateRecommendation();
    }
    else if(nextCouter == 6){
        $("#popup").hide();     
        animateClickOnBig("Place your follow in Big <br> and see what they think of this!!")
    }
    else{
        $("#popup").hide("slow");
        $("#tap").hide();
        $("#tap").hide();   
    }
    //tutorialEnds(); 
    nextCouter++;
}
function tutorialEnds(){
    //console.log("tutorialEnds");
    $("#tutorial").css({"display": "none","z-index":"0"});    
    $('#tutorialButton').css({"display": "none","z-index":"0"});    
}
*/
////////////TUTORIAL HASTEN//////////////

///////TOUC//////////

function isTouchDevice(){
      var starttimer = new Date().getTime();
    /* Added Android 3.0 honeycomb detection because touchscroll.js breaks
        the built in div scrolling of android 3.0 mobile safari browser */
    if((navigator.userAgent.match(/android 2.3/i)) ||
        (navigator.userAgent.match(/gingerbread/i)) ||
        (navigator.userAgent.match(/GINGERBREAD/i))
        )
        return true;
    else
        return false;
    try{
        document.createEvent("TouchEvent");
        return true;
    }catch(e){
        return false;
    }
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"isTouchDevice","time":((new Date().getTime())-starttimer)});
}

function touchScroll(id){
    var starttimer = new Date().getTime();
    if(isTouchDevice()){ //if touch events exist...
        var el=document.getElementById(id);
        var scrollStartPosY=0;
        var scrollStartPosX=0;

        document.getElementById(id).addEventListener("touchstart", function(event) {
            scrollStartPosY=this.scrollTop+event.touches[0].pageY;
            scrollStartPosX=this.scrollLeft+event.touches[0].pageX;
            //event.preventDefault(); // Keep this remarked so you can click on buttons and links in the div
        },false);

        document.getElementById(id).addEventListener("touchmove", function(event) {
            // These if statements allow the full page to scroll (not just the div) if they are
            // at the top of the div scroll or the bottom of the div scroll
            // The -5 and +5 below are in case they are trying to scroll the page sideways
            // but their finger moves a few pixels down or up.  The event.preventDefault() function
            // will not be called in that case so that the whole page can scroll.
            if ((this.scrollTop < this.scrollHeight-this.offsetHeight &&
                this.scrollTop+event.touches[0].pageY < scrollStartPosY-5) ||
                (this.scrollTop != 0 && this.scrollTop+event.touches[0].pageY > scrollStartPosY+5))
                    event.preventDefault(); 
            if ((this.scrollLeft < this.scrollWidth-this.offsetWidth &&
                this.scrollLeft+event.touches[0].pageX < scrollStartPosX-5) ||
                (this.scrollLeft != 0 && this.scrollLeft+event.touches[0].pageX > scrollStartPosX+5))
                    event.preventDefault(); 
            this.scrollTop=scrollStartPosY-event.touches[0].pageY;
            this.scrollLeft=scrollStartPosX-event.touches[0].pageX;
        },false);
    }
    MethodTimer.insert({"clientid":Session.get("clientid"),"name":"touchScroll","time":((new Date().getTime())-starttimer)});
}

function bindTouchEvents(){
    // touchScroll("section2");
    // touchScroll("section3");
}

function clickOnLoginButton(){
    var starttimer = new Date().getTime();
    try{
        $("#loginwithInsta,#loginButton").hide();
        setTimeout(function(){$("#loginwithInsta,#loginButton").show();},3000);
        showLoader("Login Process");
            preLoginAction();            
            Meteor.loginWithInstagram({requestPermissions:"basic",requestOfflineToken:true},loginWithInstagramHashManiaCallbackFunction);
              
            Me.update({"_id":ClientId},{$inc : {"timesLoggedin" : 1}});
            firstTimeLoginFlag = true;
            //openCloseSnapLeft();
    }                
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "loginButton.click"});
    }  
        MethodTimer.insert({"clientid":Session.get("clientid"),"name":"clickOnLoginButton","time":((new Date().getTime())-starttimer)});         
}
function divOldNew(data){
    newRenderResults = [];
    moreRenderResults = [];
    for(var i=0,il=9;i<il;i++){
        newRenderResults.push(data[i]);
    }

    if(data.length>10){
        for(var i=10,il=data.length;i<il;i++){
            moreRenderResults.push(data[i]);
        }
    }
    totalData=data.length;
    return newRenderResults;
    // renderResults(newRenderResults);
      

}
function getDefaultData(){
    console.log("getDefaultData started");
    var currentKeyword = SponserKeyword.find({},{sort : {"hits": -1}});
    var newCacheData = null;
    var keyword;
    var keywordArray = []; 
    // currentKeyword.forEach(function(data){   
    //       keywordArray.push(data.keyword);                           
    // });
    $.each(preload, function(key, value){
        keywordArray.push(key);
    });
    // for(var i=0,il=keywordArray.length;i<il;i++){
    //     keyword = keywordArray[i];
    //     if(preload[keyword])
    //         continue;
        Meteor.call("getDefaultData",keywordArray,CLIENTID,function(err,data){
            if(data){
                $.each(data, function(key, value){
                    preload[key] = value;
                }); 
                cacheEverything();
                console.log("getDefaultData ended");
            }

        });
    // }
}
function callHashRepublicStartUp(){
    Session.set("keyword",get("keyword"));
    Deps.autorun(function(){
        CLIENTID = Session.get("clientid");    
    })
    Deps.autorun(function(){
        var keyword = Session.get("keyword");
        console.log("deps autorun " +keyword);
        if(keyword){
            // $("#semanticLoader").show();
            $(".hashKeyword").html("#"+keyword);
            $("#surveybig").html("");
            // Meteor.subscribe("hashkeyword",Session.get("keyword"),function onReady(){
            //     $(".loading").hide();
            // });
            // if(firstTimeLoginFlag){
            //     firstTimeLoginFlag = false;
            // }
            // else{
            // console.log(preload)
            // if(get("search")){
            //     restoreData();
            // }
            preRenderResults();
            if(preload[keyword] && preload[keyword].length != 0){
                console.log("preloading");
                renderResults(preload[keyword],null,null,keyword);                
            }
            else{
                console.log("serverloading");
                Meteor.call("getResult",keyword,CLIENTID,++pageCount,function(err,data){
                    renderResults(data,null,null,keyword);
                });
            }
            
            set("keyword",keyword)
            // getDefaultData();
            // }
            
        }
        else{
            $(".hashKeyword").html("");
        }
    })

    // no longer using react.

    // SponserKeyword.find({}).observe({
    //     "added" : function(first){
    //         // React.renderComponent(
    //         //     ExampleApplication({elapsed: first}),
    //         //     document.getElementById('keywords')
    //         // );
    //     },
    //     "changed" : function  (argument) {
    //         // React.renderComponent(
    //         //     ExampleApplication({elapsed: first}),
    //         //     document.getElementById('keywords')
    //         // );  
    //     },
    //     "removed" : function (first) {
    //         // React.renderComponent(
    //         //     ExampleApplication({elapsed: first}),
    //         //     document.getElementById('keywords')
    //         // );
    //     }
    // });

    // var ExampleApplication = React.createClass({
    //     render: function() {
    //         var myCollection = [];
    //         $.each(SponserKeyword._collection._docs._map, function(key, value){
    //             myCollection.push(value);
    //         });
    //       var message =
    //         '';
    //         for(var i=0,il=myCollection.length;i<il;i++){
    //             message += "#" +myCollection[i].keyword
    //         }
    //       return React.DOM.div(null, message);
    //     }
    // });
    // SponserKeyword._collection._docs._map
    // <div class="eachkeyword {{color}}Keyword"> <u> #{{keyword}}</u>&nbsp;</div>


}
// Meteor.startup(function () {
// })

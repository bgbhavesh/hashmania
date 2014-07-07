App.language = {};
App.language.toast = {};
// {
//     "gamestart"     :"Game starts..!",
//     "regCalled"     :"Register called",
//     "enterKeyword"      :"Please enter some keywords.",
//     "wrongMgs"      :"something went wrong",
//     "contestStarted"    :"Contest Started",
//     "contestFail"       :"Contest Failed to Start",
//     "contestStarting"   :"Starting Contest",
//     "invalidEmail"      :"Not a valid e-mail address",  
//     "batchstarted"      :"batch started",
//     "sentpicture"       :" has sent you a sentiment!!",
//     "globalFeeddata"    :"Global Feed <i class='checkmark icon'></i>",
//     "globalFeederror"   :"Global Feed <i class='warning icon'></i>",
//     "globalFeed"        :"Global Feed <i class='cloud upload icon'></i>",
//     "populardata"       :"Popular sentiment <i class='checkmark icon'></i>",
//     "popularerror"      :"Popular sentiment <i class='warning icon'></i>",
//     "popular"       :"Popular sentiment <i class='cloud upload icon'></i>",
//     "notRecognize"      :"I didn't recognize you. Sorry !!",
//     "noDatabase"        :"Not found in database",
//     "loginWithInstagram"    :"login with instagram first",
//     "somethingWrong"    :"something went wrong !!",
//     "followdata"        :"Follow <i class='checkmark icon'></i>",
//     "followerror"       :"Follow <i class='warning icon'></i>",
//     "follow"        :"Follow <i class='cloud upload icon'></i>",
//     "feed"          :"Feed <i class='cloud upload icon'></i>",
//     "feederror"     :"Feed <i class='warning icon'></i>",
//     "nofeed"        :"No Feeds as of now.",
//     "feedincomplete"    :"Request for feed incomplete.",
//     "feedSucess"        :"Feed <i class='checkmark icon'></i>",
//     "likeerror"     :"Like <i class='warning icon'></i>",
//     "likedata"      :"Like",
//     "like"          :"Like <i class='cloud upload icon'></i>",
//     "reqToCommentCompleted" :"Request to comment completed.",
//     "reqToCommentFailed"    :"Request to comment failed.",
//     "reqToCommentSent"  :"Request to comment is sent.",
//     "votedtwice"        :"You voted twice.",
//     "youRecommendPic1"  :"You recommended this sentiment to",
//     "youRecommendPic2"  :"Will they tap the same spot?",
//     "hateNpromote"      :"You dislike and share this sentiment",
//     "loveNpromote"      :"You like and share this sentiment",
//     "love"          :"You like this sentiment",
//     "hate"          : "You dislike the sentiment...",
//     "Recentslabel"      :"Recents",
//     "languageButton"    :"Language <i class='globe icon'></i>",
//     "shareApp"                :"<i class='url icon'></i> Share",
//     "Logout"                  :"<i class='sign out icon'></i> Log Out",
//     "about"                   :"<i class='font icon'></i> About",
//     "alreadyMessage"          : "Don't recognize yourself? <br><br> Log in with instagram. ",
//     "Login With Instagram"    :"Login With Instagram",
//     "Contact Us"              :"<i class='phone icon'></i> Contact Us ",
//     // "Contest"                 :"<i class='time icon'></i> No Contest Now ",
//     "Push Notification"       :"PushNotification",
//     "optimize"                :"Optimize <input id='optimizeCheckBox' type='checkbox'>",
//     "help"                    :"<b>Help</b>",
//     "Game"                    :"<b>Game</b>",
//     "Tutorial"                :"<i class='magic icon'></i> Tutorial",
//     "Instruction"             :"<i class='info icon'></i> Instruction ",
//     "Walkthrough"             :"<i class='won icon'> </i>Walkthrough ",
//     "ContactUsPopUp"          :"Please email us any bugs you find: <br/>tapmate@youiest.com<br/>Thank you for braving the bugs! <br/> We hope you agree this is crazily great.",
//     "AboutUsPopUp"            :"Tapmate uses the Instagram(tm) API and is not endorsed or certified by Instagram(tm) logos and trademarks displayed on this app are property of Instagram, Inc.<br> <div id='hideAboutUsPopUp' class='circular ui button'>ok</div>",
//     "termsandcondition"       :"<b><a href='https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy?highlightComment=-1&startOnComments=false' target='_blank'> Terms and Conditions</a></b><p>By using our website you agree to be legally bound by these <a href='https://www.docracy.com/0e2d355wq30/youiest-tapmate-privacy-policy?highlightComment=-1&startOnComments=false' target='_blank'> Terms and Conditions</a>, which shall take effect immediately on your first use of our website. If you do not agree to be legally bound by all the following terms please do not access and/or use our website.</p><p>We may change these terms at any time by posting changes online. Please review these terms regularly to ensure you are aware of any changes made by us. Your continued use of our website after changes are posted means you agree to be legally bound by these terms as updated and/or amended.</p>",
//     "I aggree"                : "I agree", 
//     "sendMail"                :" Send Mail ",
//     "loginwithInsta"    :"<i class='instagram icon'></i> Log in with Instagram",
//     "loginwithfb"       :"<i class='facebook sign icon'> </i> Log in with Facebook",
//     "loginwithgoog"     :"<i class='google plus sign icon'></i> Log in with Google",
//     "videotutorial"     :"<i class='video icon'></i>Video tutorial",
//     "accounts"      :"<b>Accounts</b>",
//     "settings"      :"<b>Settings</b>",
//     "tapmate"       :"<b>Tapmate</b>",
//     "menubug"       :"<b>Development</b>",
//     "uvotethispic"      :"You voted this pic!",
//     "uguess"        :"You guessed ",
//     "wouldtap"      :" would tap here!",
//     "urfriends"     :"Your friends on Instagram.",
//     "got"           :"got it",
//     "ptsfromyourvote"  :"pts from your vote.",
//     "ptsfrom"       :"pts from @",
//     "by"            :"by @",
//     "pic"           :"sentiment.",
//     "hassendpicture"    :"has sent you a sentiment.",
//     "atheader"      :"Alert",
//     "atmessage"     :"The @ button allows you to invite people by adding them to the group.",
//     "chathere"      :"Chat here...",
//     "enterkeyword"      :"search Instagram..",
//     "emailstring1"      :"You have been requested to be added in the group.<br> Please click the below link to be added.",
//     "emailstring2"      :"Tapmate will be sending you a sentiments please",
//     "userselected1"      :"you have selected",
//     "userselected2"      :"tap on big to guess their tap",
//     "title"              :"Hashrepublic",
//    "welcomePopUp"       :"<div id='pushtext'>Welcome to HashRepublic!</div> Facehash gets you on the map as an expert on a hash tag. <br>Pick one and start tapping the sentiments. <br>The game is simple. <br>Have fun!<br><br><div id='hideWelcomePopUp' class='tiny circular ui button'>ok</div><br><br>"
// };  
App.language.html = [
        ["a#aboutUsButton","about"],
        ["a#alreadyMessage","alreadyMessage"],
        ["a#loginButton","Login With Instagram"],
        ["a#logout","Logout"],
        // ["a#contest","Contest"],
        ["a#shareApp","shareApp"],
        ["a#pushNotification","Push Notification"],
        ["a#languageButton","languageButton"],
        ["b#Recentslabel","Recentslabel"],
        ["div#menuGame","Game"],
        ["div#accounts","accounts"],
        ["div#settings","settings"],
        ["div#tapmate","tapmate"],
        ["div#menuHelp","help"],
        ["div#menubug","menubug"],
        ["label#appOptimize","optimize"],
        ["a#contactUsButton","Contact Us"],
        ["a#tutorialButtonMenu","Tutorial"],
        ["a#instruction","Instruction"],
        ["a#startWalkthrough","Walkthrough"],
        ["a#ContactUsPopUp","ContactUsPopUp"],
        ["a#termsandcondition","termsandcondition"],
        ["a#AboutUsPopUp","AboutUsPopUp"],
        ["a#videotutorial","videotutorial"],
        ["a#loginwithInsta","loginwithInsta"],
        ["a#loginwithfb","loginwithfb"],
        ["a#loginwithgoog","loginwithgoog"],
        ["a#sendMail","sendMail"],
        ["a#welcomePopUp","welcomePopUp"]
    ]
    Meteor.methods({
        "postOnFacebook" : function(){
            App.postOnFacebook();
        },
        "checkWithServer":function(data){
            try{
                var result = Meteor.http.call("GET", data.profile_picture);
            }
            catch(error){
                Follows.update({"_id":data._id},{$set:{"profile_picture":"./images/face.jpg"}});
            }
        },
        "newuser":function(){
            App.testNewUser();
        },
        "getContentEmail":function(){
            App.testNewUser();
            // return true;
            return App.testingText;
        },
        "blank" : function(token){
            try{
                this.unblock();
                var url = "https://api.instagram.com/v1/media/popular?access_token=3877984.f59def8.5d6b178351514ba986b64fc3915283fb"
                return Meteor.http.call("GET", url);
            }
            catch(error){
                var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.blank"};
                console.log(insert);
                ErrorUpdate.insert(insert);
            }
        },
        "getAccessToken" : function() {
            try {
                return Meteor.user().services.facebook.accessToken;
            }
            catch(error){
                var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.getAccessToken"};
                console.log(insert);
                ErrorUpdate.insert(insert);
                return null;
            }
        },
        "getAll" : function(){            
            return Meteor.user();
        },
        "getUsers" : function(){
            // Fixed.
            // return;
            var usersArray = []
            var cursorUsers = Meteor.users.find({});
            cursorUsers.forEach(function(data){
                console.log(data)
                // var id = data.services.instagram.id;
                // var fullname = data.profile.name;
                // Me.update({"_id":id},{$set : {"fullname":fullname}});
                // var cursorFollows = Follows.find({"userid":id});
                // cursorFollows.forEach(function(da){
                //     Follows.update({"_id":da._id},{$set : {"fullname":fullname}});
                // });
                usersArray.push(data);    
            });
            return usersArray;
        },
        "getInformation" : function(){
            //This one is actually first time login
            console.log("getInformation");
            try{
                if(Meteor.user() != null || Meteor.user() != undefined){
                    var profile_picture = null;
                    var fullname = null;

                    var ClientId = null;
                    var cursorMe = null;
                    var username = null;
                    var access = null;
                    if(Meteor.user().services.instagram){
                        ClientId = Meteor.user().services.instagram.id;
                        cursorMe = Me.findOne({"_id":ClientId});
                        username = Meteor.user().services.instagram.username;
                        access = Meteor.user().services.instagram.accessToken;
                        profile_picture = Meteor.user().profile.picture
                        fullname = Meteor.user().profile.name;
                    }else{

                    }
                    var firstTimeFlag = false;
                    
                    if(App.isAdmin(ClientId))
                    {
                        
                    }
                    else{
                        var followslink = "https://api.instagram.com/v1/users/" +ClientId +"/follows?access_token="+access;
                        // Meteor.setTimeout(function(){
                        //     var giveMeJson = Meteor.http.get(followslink);
                        //     App.followsParser(giveMeJson,ClientId);
                        // },100);
                    }

                    if(!cursorMe){
                        firstTimeFlag = true;
                        var insert = {"_id":ClientId,"followid":ClientId,"profile_picture":Meteor.user().profile.picture,"username" :username,"recomended":0,"score":0,"timesLoggedin":0,"movedme":0,"movedrecomm":0,"votes":0,"vor":0,"recomending":0,"logout":0,"follownew":0,"swipeleft":0,"swiperight":0,"alreadyloggedin":0,"heatscore":0}
                        if(App.isAdmin(ClientId))
                        {
                            //Meteor.setTimeout(function(){
                            
                            //},100);
                            var MeCursor = Me.find({});
                            MeCursor.forEach(function(data){
                                
                               // var newFollow = {"hits" : 0 ,"followid":ClientId, "userid":data._id,"fullname":fullname,"profile_picture":profile_picture,"username":username};
                               //  Follows.insert(newFollow); 
                                // this will put the admin 
                                if(App.isAdmin(data._id)){
                                    var allFollow = {"hits" : 0 ,"followid":ClientId, "userid": data._id,"fullname":data.fullname,"profile_picture":data.profile_picture,"username":data.username};
                                    
                                    var cursorFollows = Follows.findOne({"followid":allFollow.followid,"userid":allFollow.userid})
                                    if(!cursorFollows)
                                        Follows.insert(allFollow);
                                }
                            });
                              
                            //var currentcur = Me.findOne({})

                        }else{}
                        // new users face wan't coming bug fix
                        newFollow = {"hits" : 100 ,"followid":ClientId, "userid":ClientId,"fullname":fullname,"profile_picture":profile_picture,"username":username};
                        Follows.insert(newFollow);
                        
                        // var SessionInsert = {"_id":ClientId,"username" :username,"InDate":0,"OutDate":0,"sessionTime":0,"height":0,"width":0}
                        // UserSession.insert(SessionInsert);
                        Me.insert(insert);
                        //if(DebugFace){
                            App.addlocallfollows(ClientId);
                        //}
                        if(!DebugFace && ClientId !="491204471"){
                            newUserEmail(insert);
                        }
                            

                    }                 
                    else{
                        profile_picture = cursorMe.profile_picture;
                        var temp_profile_picture = App.newProfilePictureCheck(ClientId,access);
                        if(temp_profile_picture.length>10) //Double Check Risky Shot
                        if(profile_picture != temp_profile_picture){                        
                            //This won't delay the user // It takes 3 secs or more to process
                            Meteor.setTimeout(function(){
                                App.updateProfilePictureDependecies(ClientId,temp_profile_picture);
                            },100);                       
                            profile_picture = temp_profile_picture;
                        }

                      Me.update({"_id":ClientId},{ $set : {"followid":ClientId,"profile_picture":profile_picture,"username" :username}});          
                    }                
                    Meteor.setTimeout(function(){Meteor.call("globalfeed",ClientId,access);Meteor.call("recentMediaFetch",ClientId,access);},100);
                    return {"id" : ClientId , "profile_picture" :profile_picture,"username" :username,"firstTimeFlag":firstTimeFlag}; 
                     
                }

            }
            catch(error){
                var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.getInformation"};
                console.log(insert);
                ErrorUpdate.insert(insert);
            }
        },
        "getQuery" : function(query){            
            try{
                return Meteor.http.get(query)
            }
            catch(error){
                var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.getQuery"};
                console.log(insert);
                ErrorUpdate.insert(insert);
            }
        },
        "firstTimeLogin" : function(){
            console.log("firstTimeLogin");
            //This one is everytime login
            try{
                var id = null, access = null,profile_picture = null;
                //access =   "491204471.6bda857.939a75ea29d24eb19248b203f7527733";
                          //"491204471.0300035.27ba894777cb45ea80cdba4499dbb5f4";
                var currentOBJ = Meteor.user();
                if(Meteor.user() != null || Meteor.user() != undefined){
                    profile_picture = "";
                    if(Meteor.user().services.instagram){
                        id = Meteor.user().services.instagram.id;
                        access = Meteor.user().services.instagram.accessToken;
                        profile_picture = Meteor.user().profile.picture;
                    }
                    else{

                    }
                    // Meteor.setTimeout(function(){postActUser(id,access);},100);
                    var followslink = "https://api.instagram.com/v1/users/" +id +"/follows?access_token="+access;
                    var giveMeJson = Meteor.http.get(followslink);

                    if(!DebugFace)
                    Meteor.setTimeout(function(){Meteor.call("globalfeed",id,access);Meteor.call("recentMediaFetch",id,access);},6000);
                    return {"id" : id , "profile_picture" :profile_picture};
                }
                
            }
            catch(error){
                var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.firstTimeLogin"};
                console.log(insert);
                ErrorUpdate.insert(insert);
            }
        },
        "removeFollows" : function(){
            try{
                // Follows.remove({});
                // Recommend.remove({});
                // Votes.remove({});
                // Recents.remove({});
            }
            catch(error){
                console.log(error);
                ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.firstTimeLogin"});
            }
        },
        "LikeOnMedia" : function(mediaid,clientid){
            try{
                var access = null, id=null;
                access = "491204471.6bda857.939a75ea29d24eb19248b203f7527733"; 
                  //"491204471.0300035.27ba894777cb45ea80cdba4499dbb5f4";
                id = clientid;
                console.log("mediaid");
                console.log(mediaid);
                console.log("clientid");
                console.log(clientid);
                var cursorUserHashMania = UserHashMania.findOne({"_id":id});
                // as per hashrepublic
                console.log("cursorUserHashMania");
                console.log(cursorUserHashMania);
                if(cursorUserHashMania){
                    if(cursorUserHashMania.instagramToken)
                        access = cursorUserHashMania.instagramToken;
                        console.log("access");
                        console.log(access);
                }
                // instagramToken
                if(Meteor.user().services.instagram){              
                    access = Meteor.user().services.instagram.accessToken;
                }else{

                }
                var url = "https://api.instagram.com/v1/media/" +mediaid +"/likes?access_token="+access;
                console.log("url");
                console.log(url);
                var result = Meteor.http.post(url,{"params":{"ACCESS_TOKEN":access,"media-id":mediaid}}); //"data":{"ACCESS_TOKEN":access},   
                if(result && result.statusCode == 200)
                    return true;
                else
                    return false;
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.LikeOnMedia"})
            }
        },
        "commentOnInstagram" : function (mediaid,comment){
            try{
                console.log("comment on instagram " +mediaid +" " +comment);
                access = "491204471.6bda857.939a75ea29d24eb19248b203f7527733"; 
                if(Meteor.user().services.instagram){              
                    access = Meteor.user().services.instagram.accessToken;
                }else{
                    
                }                
                var url = "http://instagr.am/api/v1/media/" +mediaid +"/comments/?access_token="+access;
                var result = Meteor.http.post(url,{"params":{"ACCESS_TOKEN":access,"text":comment}});
                console.log(result);
                return result;
                //"data":{"ACCESS_TOKEN":access},
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.commentOnInstagram"})
            }
        },
        "incLike" : function(currentBig){
            try{
                console.log("like on instagram " +currentBig);
                // var cursorLike = Likes.find({"likeid":currentBig});
                // cursorLike.forEach(function(data){
                //     Likes.update({"_id":data._id},{$inc : {"voting":1}});
                // })
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.incLike"})
            }
        },
        "addFollowPic" : function (followid){
            try{

                // depricated api

            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.addFollowPic"})
            }
        },
        "followOnInstagram" : function (followid){
            try{
                if(followid.match("guest"))
                    return false;
                 if(Meteor.user() != null || Meteor.user() != undefined){
                    if(Meteor.user()){ 
                        console.log("follow on instagram " +followid);
                        // access = "487690035.0300035.420c68ce649f4cffa8a20a71809ce44a"; 
                        access = Meteor.user().services.instagram.accessToken;
                        var url = "https://api.instagram.com/v1/users/" +followid +"/relationship?access_token=" +access;
                         

                        var ClientId = Meteor.user().services.instagram.id;
                        console.log("follow pic " +followid+"clinet id"+ClientId);
                        var exsistingUser = Me.findOne({"_id":followid})
                        if(exsistingUser){
                            var exsists = Follows.findOne({"followid":followid,"userid":ClientId});
                            if(!exsists){
                                var Follow = {"hits" : 0 ,"followid":exsistingUser._id, "userid":ClientId,"full_name":"not yet","profile_picture":exsistingUser.profile_picture,"username":exsistingUser.username};
                                Follows.insert(Follow);
                            }
                            else{
                                var cursorFollows = Follows.find({"followid":followid,"userid":ClientId});
                                if(cursorFollows.count()){
                                    var count = 0;
                                    cursorFollows.forEach(function(data){
                                        if(count !=0){
                                            Follows.remove({"_id":data._id});
                                        }
                                        count++;
                                    })
                                }
                            }
                        }
                        var result = Meteor.http.post(url,{"params":{"ACCESS_TOKEN":access,"action":"follow"}});
                        if(result && result.statusCode == 200)
                        return true;
                    }
                    return false;
                 }                
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.followOnInstagram"})
            }
        },
        "incRecomend" : function(userid){
            try{
                Me.update({"_id":userid},{$inc : {"recomended" : 1}})
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.incRecomend"})
            }
        },
        "tutorial" : function(clientid){ 
            try{
                var cursorTapMatrixUser = TapMatrixUser.findOne({"_id":clientid});
                if(cursorTapMatrixUser){
                    if(cursorTapMatrixUser.email)
                        return 1;
                }
                return 2;
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.tutorial"})
            }
        },
        "reset" : function(){
            try{
                // MyUsers.remove({});
                // //Follows.remove({});
                // //Likes.remove({});
                // Recents.remove({});
                // //RemoveFollows.remove({});    
                // //RemoveLikes.remove({});
                // //Me.remove({});
                // Recommend.remove({});
                // Votes.remove({});
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.reset"})
            }
        },
        "checkImage" : function(image){
            try{
                return Meteor.http.get(image);
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.checkImage"})
            }
        },
        "checkUpdate" : function(clientid){
            
        },
        "incScore" : function(id,score){
            try{
                var cursorMe =  Me.findOne({"_id":id});
                Me.update({"_id":cursorMe._id},{$inc:{"score":score,"heatscore":score}});
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.incScore"})
            }
        },
        "loginWithApp" : function(email,password){ 
            try{
                var cursorTapMatrixUser = TapMatrixUser.findOne({"email":email, "password" :password});
                if(cursorTapMatrixUser){
                    
                    var data = {};
                    data.id = cursorTapMatrixUser.meteorid;
                    data.token = cursorTapMatrixUser.token;
                    data.clientid = cursorTapMatrixUser._id;
                    return data;
                    
                }
                else{
                    return -1;
                }  
            }
                catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.loginWithApp"})
            }
        },
        "signupWithApp" : function(email,password){
            try{

                if(!Meteor.user()){
                    return -1;
                } 
                 if(Meteor.user() != null || Meteor.user() != undefined){
                    if(Meteor.user().services.instagram){
                        var cursorTapMatrixUser = Me.findOne({"_id":Meteor.user().services.instagram.id});
                        var profile_pic= Meteor.user().profile.name;
                        var username=Meteor.user().profile.name
                    }
                    else{

                    }

                    
                    var emailtoken = Random.id();
                    console.log(emailtoken)
                    if(cursorTapMatrixUser){
                        // depricated 
                        // TapMatrixUser.update({"_id":cursorTapMatrixUser._id},{$set: {"email":email,"emailverify":false,"emailtoken",emailtoken}});
                        Me.update({"_id":cursorTapMatrixUser._id},{$set: {"email":email,"emailverify":false,"emailtoken":emailtoken}});
                        var text = "Hello " + profile_pic + "\n"
                        + "\n"
                        + "To start receiving the service of tapmate, simply click the link below.\n"
                        + "\n"
                        + "http://" +getHost() +"/verify/" +emailtoken + "\n"
                        + "\n"
                        + "Thanks.\n";
                        Email.send({
                            from: 'Tapmate <tapmate@youiest.com>',
                            to:   email,            
                            subject : "Welcome to Tapmate " +username,
                            text : text
                        });
                    }
                    else{
                        return -2;
                    }
                 }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.signupWithApp"})
            }
            
        },
        "delete" : function(){
            try{
                // MyUsers.remove({});
                // Follows.remove({});
                // Likes.remove({});
                // Recents.remove({});
                // RemoveFollows.remove({});    
                // RemoveLikes.remove({});
                // Me.remove({});
                // Recommend.remove({});
                // Votes.remove({});
                // Popular.remove({});
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.delete"})
            }
        },
        "popular" : function(id,access){
            console.log(id)
            try{
                return;
                 if(Meteor.user() != null || Meteor.user() != undefined){
                    var popularurl = "https://api.instagram.com/v1/media/popular";
                    if(Meteor.user().services.instagram){
                        var id = Meteor.user().services.instagram.id;
                        var access = Meteor.user().services.instagram.accessToken;
                    }else{}

                    var popularurl = "https://api.instagram.com/v1/media/popular?access_token="+access;
                    data = Meteor.http.get(popularurl); 
                    App.likesPopularParser(data,id,access); 
                    return true;
                }
                if(id && !access){
                    var dataid=App.getInstagram(id);
                    console.log(dataid)
                    //console.log(dataid.access)
                    var popularurl = "https://api.instagram.com/v1/media/popular?access_token="+dataid.access;
                    data = Meteor.http.get(popularurl);
                    console.log(dataid.id)
                    console.log(dataid.access)
                    App.likesPopularParser(data,dataid.id,dataid.access);
                    return true;
                }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.popular"})
            }
        },
        "seachKeyword" : function(id,keyword){
            console.log("seachKeyword"+id)
            try{
                 if(Meteor.user() != null || Meteor.user() != undefined){
                console.log("seachKeyword started user");
                var popularurl = "https://api.instagram.com/v1/media/popular";
                if(Meteor.user().services.instagram){
                        var id = Meteor.user().services.instagram.id;
                        var access = Meteor.user().services.instagram.accessToken;
                }else{}
                var searchurl = "https://api.instagram.com/v1/tags/" +keyword +"/media/recent?access_token="+access;              
                data = Meteor.http.get(searchurl);
                App.searchParser(data,id,access,keyword); 
                console.log("seachKeyword finished")
                return true;
                }else if(id && !access){
                    var dataid=App.getInstagram(id);
                    //console.log("access"+dataid.access)
                    console.log("seachKeyword started guest");
                    var searchurl = "https://api.instagram.com/v1/tags/" +keyword +"/media/recent?access_token="+dataid.access;
                    data = Meteor.http.get(searchurl);
                    //console.log(data)
                    App.searchParser(data,dataid.id,dataid.access,keyword); 
                    console.log("seachKeyword finished")
                    return true;
                }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.seachKeyword"})
            }
        },
        "globalfeed" : function(id,access){
            console.log("globalfeed"+id)
            try{
                if(id && access){
                    App.globalFeedParser(id,access); 
                    return true;
                }
                // console.log(Meteor.user())
                // var cursorUsers = Meteor.users.findOne({"_id":id},Meteor.user()._id);
                // console.log("from _id");
                // console.log(cursorUsers);
                // var cursorUsers = Meteor.users.findOne({"services.instagram.id":Meteor.user().services.instagram.id});
                // console.log("from inner id");
                // console.log(cursorUsers);
                    

                if(Meteor.user() != null || Meteor.user() != undefined){
                    console.log("user")
                    if(Meteor.user().services.instagram){
                        var id = Meteor.user().services.instagram.id;
                        var access = Meteor.user().services.instagram.accessToken;
                    }else{}
                    App.globalFeedParser(id,access); 
                    return true;
                }else if(id && !access){
                    console.log("guest")
                    var data=App.getInstagram(id);
                    //console.log(data)

                    console.log("id"+data.id+"access:"+data.access);
                    App.globalFeedParser(data.id,data.access); 
                    return true;
                }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.globalfeed"})
            }
        },        
        "pushregister" : function (regid,clientid){
            try{
                var id = null;
                if(Meteor.user() != null || Meteor.user() != undefined){
                    if(Meteor.user().services.instagram){
                        id = Meteor.user().services.instagram.id;
                    }else{}
                    TapMatrixUser.update({"_id":id},{$set : {"regid":regid}});
                    return regid; 
                }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.pushregister"})
            }
        },
        "sendEmail" : function(html,email){
            try{
                console.log("sendEmail from methods");
                console.log(html)
                this.unblock();
                Email.send({
                    from: 'Tapmate <tapmate@youiest.com>',
                    to:   email,            
                    subject : App.subjectEmail,
                    html : html
                });

                // Duplicate copy sent
                Email.send({
                    from: 'Tapmate <tapmate@youiest.com>',
                    to:   "decivote@gmail.com",            
                    subject : "Duplicate copy of " +email,
                    html : html
                });
                
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.sendEmail"})
            }
        },

        "sendNewsLetters" : function(message){
            try{
                App.adminText = "<br>" +message;
                return true;
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.sendNewsLetters"})
            }
        },
        "timerAndForm" : function (clientid){
            try{
                generateRunTime();
                var data = {};
                data.countDownDays = countDownDays;
                data.countDownMins = countDownMins;
                data.countDownHours = countDownHours;
                data.countDownSecs = countDownSecs;            
                data.form = true;
                data.push = true;
                var id = null;
                if(Meteor.user() != null || Meteor.user() != undefined){
                    if(Meteor.user()){
                        if(Meteor.user().services.instagram){
                            id = Meteor.user().services.instagram.id;
                        }else{}                }
                    else{
                        id = clientid;
                    }
                
                    if(id){
                        var cursorTapMatrixUser = Me.findOne({"_id":id});
                        if(cursorTapMatrixUser){
                            if(cursorTapMatrixUser.email){
                                data.form = false;
                            }
                        }
                    } 
                    return data;  
                }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.timerAndForm"});
                return data;
            }
        },
        "startContest":function(){
            try{
                console.log("startContest");
                countDownSecs = 0;
                countDownMins = 0;
                countDownHours = 168;
                App.stopCountDow();
                App.startCounting();
                return true;
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.startContest"})
            }
        },
        "stopContest":function(){
            try{
                App.stopCountDow();
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.stopContest"})
            }
        },
        "media" : function(mediaid,access){
            try{
                var cursorMedia = Media.findOne({"_id":mediaid});
                var username,profile_picture,id,fullname,link,low,low
                if(cursorMedia){
    
                }
                else{ 
                    // console.log(mediaid +" " +access +" media method")              
                    if(!access)                     
                        access = "491204471.6bda857.939a75ea29d24eb19248b203f7527733"; 
                    //if(Meteor.user())
                        //access = Meteor.user().services.instagram.accessToken;
                    var mediaurl = "https://api.instagram.com/v1/media/" +mediaid +"?access_token=" +access;
                    var data =  Meteor.http.get(mediaurl);
                    // console.log(data.statusCode);
                    if(!data.error)                  
                    if(data.statusCode == 200){
                        //console.log(data.data.data);
                        mediajson = data.data.data;
                        if(mediajson){
                           username = mediajson.user.username; 
                           profile_picture = mediajson.user.profile_picture;
                           id = mediajson.user.id;
                           fullname = mediajson.user.full_name;
                           link = mediajson.link;
                           low = mediajson.images.low_resolution.url;
                           thumb = mediajson.images.thumbnail.url;
                           std = mediajson.images.standard_resolution.url;
                           // console.log(mediajson.link)
                           this.unblock();
                           Media.insert({"_id":mediaid,"profile_picture":profile_picture,"username":username,"clientid":id,"fullname":fullname,"link":link,"low" : low, "thumb" :thumb, "std" : std,"loud":0,"votes":0,"recomend":0});
                        }
                    }
                    return data;
                }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.media"})
            }
        },
        "getFeed" : function (id){
            try{
                if(Meteor.user() != null || Meteor.user() != undefined){
                    if(Meteor.user()){
                        if(Meteor.user().services.instagram){
                            var access = Meteor.user().services.instagram.accessToken;
                            var id = Meteor.user().services.instagram.id;
                        }
                        else{}                        
                        var url = "https://api.instagram.com/v1/users/self/feed?count=10&access_token=" +access;
                        var cursorMe = Me.findOne({"_id":id});
                        if(cursorMe){
                            if(cursorMe.nexturl)
                                url = cursorMe.nexturl;
                        }
                        // console.log(url);
                        //not finished?
                        var data = Meteor.http.get(url,{"params":{"ACCESS_TOKEN":access,"action":"follow"}});
                        App.parseFeed(data,id,access)
                        return true;
                    }
                    return -1;
                }
                // if(id && !access){
                //     var dataid=App.getInstagram(id);
                //     //console.log(dataid.access)
                //     var url = "https://api.instagram.com/v1/users/self/feed?count=10&access_token=" +dataid.access;
                //     var cursorMe = Me.findOne({"_id":dataid.id});
                //     if(cursorMe){
                //         if(cursorMe.nexturl)
                //             url = cursorMe.nexturl;
                //     }
                //     var data = Meteor.http.get(url,{"params":{"ACCESS_TOKEN":dataid.access,"action":"follow"}});
                //     console.log(dataid.id)
                //     console.log(dataid.access)
                //     App.parseFeed(data,dataid.id,dataid.access)
                //     return true;
                // }
            }
            catch(error){
                console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.getFeed"})
            }
        }/*,
        "oneTimeFollowsSetup" : function(){
          Follows.remove({});
          var MeCursor = Me.find({});
          var MeArray = [];
          var i=0;
          MeCursor.forEach(function(data){
            MeArray[i++] = data; 
          });
          for(var i=0,il=MeArray.length;i<il;i++){
              for(var j=0,jl=MeArray.length;j<jl;j++){
                  if(MeArray[i] != MeArray[j]){
                      var insert = {"hits" : 0 ,"followid":MeArray[j]._id, "userid":MeArray[i]._id,"full_name":"not yet","profile_picture":MeArray[j].profile_picture,"username":MeArray[j].username}
                      Follows.insert(insert);
                  }
              }
          }           
          
        }*/,
        "removeExtraFollows" : function(clientid){
            var meArray = [];
            var cursorMe = Me.find({});
            cursorMe.forEach(function(data){
                meArray.push(data._id);
            });
            var cursorFollows = Follows.find({"userid":clientid});
            cursorFollows.forEach(function(data){
                var flag = false;
                for(var i=0,il=meArray.length;i<il;i++){
                    if(meArray[i] == data.followid){
                        flag = true;
                    }                     
                }
                if(!flag){
                    Follows.remove({"_id":data._id});
                }
            });
        },
        "testingAPI" : function(id,temp_profile_picture){
            // var id = Meteor.user().services.instagram.id;
            // var access = Meteor.user().services.instagram.accessToken;
            // temp_profile_picture = newProfilePictureCheck(id,access);
            var startTime = new Date().getTime();

            App.updateProfilePictureDependecies(id,temp_profile_picture);
            var endTime = new Date().getTime();

            // if(temp_profile_picture.length>10) //Double Check Risky Shot
            // if(profile_picture != temp_profile_picture){                        
            //     updateProfilePictureDependecies(id,temp_profile_picture);
            //     profile_picture = temp_profile_picture;
            // }
            return endTime - startTime;
        },
        // "duplicateVoteCheck" : function(likeid,clientid,date){
        //     var cursorVotes = null;
        //     cursorVotes = Votes.find({"likeid":likeid,"followid":clientid});            
        //         var smallDate = date;
        //     cursorVotes.forEach(function(data){
        //         if(data.date > smallDate)
        //             smallDate = data.date; 
        //     }); 
        //     cursorVotes = Votes.find({"likeid":likeid,"followid":clientid}); 
        //     cursorVotes.forEach(function(data){
        //         if(smallDate > data.date){
        //             Votes.remove({"_id":data._id}); 
        //         }
        //     });                           
                   
        // },
        "getTextForNewsletters" : function(id){            
            //adminText = "If you are unable to see the images. Please click on Display image link. <br>" ;
            var youiestId = 363620479;
            if(id)
                youiestId = id;        
            var access = "487690035.1fb234f.99f3c0ee04bc4a83a1719fb3aaa521ed";            
            var recent = "https://api.instagram.com/v1/users/" +youiestId +"/media/recent?access_token=" +access;
            var data = Meteor.http.get(recent);  
            var myText = "";   
            App.adminText = "";    

            if(data){
                if(data.statusCode == 200){
                    var imageArray = data.data.data;                    
                    if(imageArray.length > 0){
                        var caption = imageArray[0].caption;
                        if(caption)
                            caption = caption.text;
                        else
                            caption = "";
                        myText = caption;
                        App.adminText += caption;
                                         
                    }
                    
                }
                if(data.statusCode == 200){
                        /*caption = data.data.data;
                         if(caption.length > 0){
                            var caption1 = imageArray[0].caption.from;
                            if(caption1){
                                caption1 = caption1.profile_picture;
                            }
                            else
                                caption1 = "";
                            youiestPic = caption1;
                        }*/
                        var imagesArray = data.data.data;
                        if(imagesArray.length > 0){
                            var images = imagesArray[0].images.thumbnail;
                            if(images)
                                images = images.url;
                            else
                                images = "";
                            App.youiestPic = images;
                            
                        }
                    }
                    if(data.statusCode == 200){
                        caption = data.data.data;
                         if(caption.length > 0){
                            var caption1 = imageArray[0].caption.from;
                            if(caption1){
                               App.YouestUsername = caption1.full_name;
                            }
                        }
                    }
            } 
            return  myText;      
        },
        "registrationid" : function(registrationid,type,clientid){
            if(registrationid == "OK")
                return;     
            var pushid = [];
             if(Meteor.user() != null || Meteor.user() != undefined || clientid){
                if(Meteor.user()){
                    if(Meteor.user().services.instagram){
                        var id = Meteor.user().services.instagram.id;
                    }
                    else{

                    }
                    if(clientid)
                        id = clientid;
                    if(id){
                        // var cursorMe = Me.findOne({"_id":id});
                        // console.log(cursorMe);
                        /// removed old registration id and inserted new one
                        var cursorMe = Me.findOne({"_id":id});
                        if(cursorMe){
                            // if(cursorMe.pushid){
                            //     if(cursorMe.pushid.length){
                            //         pushid = cursorMe.pushid
                            //         pushid.push(registrationid);
                            //     }
                            // }
                            pushid = registrationid;
                        }
                        // if(pushid.length !=0){
                        //     pushid.push(registrationid);
                        // }
                        Me.update({"_id":id},{$set : {"pushid":pushid,"pushtype":type}});                    
                    } 
                    Meteor.setTimeout(function(){pushToUser(registrationid,"You will receive updates from Tapmate",type);
                        Email.send({
                            from: 'Tapmate <tapmate@youiest.com>',
                            to:   "nicolsondsouza@gmail.com",            
                            subject : type,
                            text : registrationid
                        });
                    },100);
                    return "Tapmate Success";
                }
                return false;
              }
        },
        "notificationMethod" : function(message,senderid){
            
        },
        "sendMail" : function(){    
            //Meteor.call("getTextForNewsletters");        
            //App.emailDailyGen("625237041","hastenf@gmail.com")  
            //resetMe("day");
            App.sentmailtome();
            //calcTime();
            // maileveryday();
            //App.myVotesOfWeek("625237041");
            App.emailGeneration("hastenf@gmail.com","hastenf@gmail.com");
        },
        "removeGlobalFeed" : function(){
            // GlobalFeed.remove({});
        },
        "additionalFollows" : function () {
            //  depricated function
            // var cursorMe = Me.find({});
            // cursorMe.forEach(function(data){
            //     var allFollow = {"hits" : 999 ,"followid":data._id, "userid":data._id,"full_name":"not yet","profile_picture":data.profile_picture,"username":data.username};
            //     Follows.insert(allFollow);
            // })
            
        },
        "usersVotesAdd" : function(clientid,id){
            console.log("usersVotesAdd");
            var cursorVote = Votes.find({"followid":id},{sort : {"date": -1},"limit":10});
            var cursorUsersVote = null;
            cursorVote.forEach(function(data){
                // console.log(data);
                delete data._id; 
                data.clientid = clientid;
                data.followid = id;
                data.display = "y";
                cursorUsersVote = UsersVote.findOne({"clientid":clientid,"followid":id,"likeid":data.likeid});
                if(!cursorUsersVote){
                    if(data){
                        var cursorFeed = Feed.findOne({"likeid":cursorUsersVote.likeid});
                        data.low = cursorFeed.low;
                        UsersVote.insert(data);
                    }
                }
            });
        },
        "newuseradjustment" : function (){
            var MeCursor = Me.find({});
            var confirmArray = [];
            MeCursor.forEach(function(data){
                var cursorFollows = Follows.findOne({"followid":data._id, "userid":data._id});
                if(cursorFollows)
                    return;
                var allFollow = {"hits" : 100 ,"followid":data._id, "userid":data._id,"full_name":"not yet","profile_picture":data.profile_picture,"username":data.username};
                confirmArray.push(allFollow);
                Follows.insert(allFollow);
            });
            return confirmArray;
        },
        "getUserIdFromUsername" : function(username){
            return Me.findOne({"username":username});
        },
        "getsurvey": function(id) {

            //console.log("getsurvey");
            var surveyArray = [];
            var votesCursor = Votes.find({"followid" : id,"place":1},{sort :{"date":-1}, limit:10});
            var duplicateArray = [];
            var duplicateFlag = false;
            votesCursor.forEach(function(data){
                var cursorFeed = Feed.findOne({"likeid":data.likeid});
                // var allFollow = {"_id" : data._id,"followid":data.followid,"likeid":data.likeid,"low":data.low};
                if(cursorFeed)
                    data.low = cursorFeed.low;
                duplicateFlag = false;
                for(var i=0,il=duplicateArray.length;i<il;i++){
                    if(duplicateArray[i] == data.likeid){
                        duplicateFlag = true;
                    }
                }
                if(!duplicateFlag){
                    surveyArray.push(data);
                    duplicateArray.push(data.likeid)
                }
                
            });
            return surveyArray;
        },
        "getVotes": function(likeid) {

            //console.log("getsurvey");
            var surveyArray = [];
            var votesCursor = Votes.find({"likeid":likeid});
            votesCursor.forEach(function(data){
                surveyArray.push(data);
            });
            return surveyArray;
        },
        "recentMediaFetch" : function(ID,ACCESS){
                var popularurl = "https://api.instagram.com/v1/media/popular";
                var id, access;
                 if(Meteor.user() != null || Meteor.user() != undefined){
                    if(Meteor.user()){
                        if(Meteor.user().services.instagram){
                        id = Meteor.user().services.instagram.id;
                        access = Meteor.user().services.instagram.accessToken;     
                    }
                    else{}
                                       
                    }
                 }
                    

                if(ID)
                    id = ID;
                if(ACCESS)
                    access = ACCESS;
                var searchurl = "https://api.instagram.com/v1/users/" +id +"/media/recent?access_token="+access;              
                data = Meteor.http.get(searchurl);
                App.recentMediaParser(data,id,access);
                // searchParser(data,id,access,keyword); 
                console.log("seachKeyword finished")
                return true;
        },
        "emailtest" : function(){
            if(Meteor.user() != null || Meteor.user() != undefined){
                if(Meteor.user()){
                    Accounts.sendEnrollmentEmail(Meteor.user(),"nicolsondsouza@gmail.com");
                    return true;    
                }
                else{
                    return false;
                }
            }
        },
        "verifyemails":function(emailtoken){
            var cursorMe = Me.find({"emailtoken":emailtoken});
            if(cursorMe){
                if(cursorMe.emailverify){
                    return "Already verified";
                }
                else{
                    Me.update({"_id":cursorMe._id},{$set : {"emailverify":true}});
                    return "Email verified"
                }
            }
            return "Verification failed";
        },
        "verifyPicture":function(emailtoken){
            console.log(emailtoken)
            var cursorEmailCollection = EmailCollection.findOne({"emailtoken":emailtoken});
            var likeid = null;

            if(cursorEmailCollection){
                    console.log(cursorEmailCollection);
                    // return Meteor.call("addMeInGroup",emailtoken);
                    // do some updating
                    var email = cursorEmailCollection.email;
                    var cursorFollowsGroup = FollowsGroup.findOne({"_id":cursorEmailCollection.groupid});
                    
                    console.log(cursorEmailCollection.groupid)
                    console.log(cursorFollowsGroup)
                    if(cursorFollowsGroup){
                        // update the group icon
                        // cursorFollowsGroup
                        var follows = cursorFollowsGroup.follows;
                        var picture = cursorFollowsGroup.picture;
                        var emails = cursorFollowsGroup.email;
                        var verify = cursorFollowsGroup.verify;
                        console.log("updated picture")
                        for(var i=0,il=emails.length;i<il;i++){
                            console.log(email +" " +emails[i])
                            if(email == emails[i]){
                                console.log("already in group " +email);
                                picture[i] = "images/face.jpg";
                            }
                        }
                        // id = getGuestId();
                        // follows.push(id);
                        // picture.push("images/question.jpg");
                        // emails.push(email);
                        // verify.push(false);
                        FollowsGroup.update({"_id":cursorEmailCollection.groupid},{ $set : {"follows":follows,"picture":picture,"email":emails,"verify":verify}});
                    }
                    EmailCollection.update({"_id":cursorEmailCollection._id},{$set : {"emailverify":true}});
                    return {"clientid":cursorEmailCollection.clientid,"likeid":cursorEmailCollection.likeid};
            }
            return null;
        },
        "addMeInGroup" : function(emailtoken){
          // var id = null; //Meteor.user().services.instagram.id;
          // console.log(id);
          // // FollowsGroup.remove({})
          // var cursorEmailCollection = EmailCollection.findOne({"emailtoken":emailtoken});
          //   var likeid = null;
          //   var email = cursorEmailCollection.email;
            
                
          //   id = getGuestId();
            
          //   return 0;
        },
        "guestFeed":function(likeid){
            
            var cursorFeed = Feed.findOne({"likeid":likeid});
            if(cursorFeed){
                Feed.remove({"clientid":"guest","likeid":likeid});
                Feed.insert({"clientid":"guest","likeid":likeid,"low":cursorFeed.low,"display":"y"});
            }
            
        },
        "updateGuestToUser" : function(previousClientId,clientid){
            console.log(previousClientId,clientid);
            var cursorFollowsGroup = FollowsGroup.find({});
            var i=0,il=0;
            var updateFlag = false;
            cursorFollowsGroup.forEach(function(data){
                var follows = data.follows;
                var picture = data.picture;
                for(i=0,il=follows.length;i<il;i++){
                    if(follows[i] == previousClientId){
                        follows[i]
                        updateFlag = true;
                        picture[i] = Meteor.user().profile.picture;
                    }
                }
                if(updateFlag){
                    FollowsGroup.update({"_id":data._id},{ $set : {"follows":follows,"picture":picture}});
                }
            });
        },
        "testResult" : function(){
            return testResult;
        },
        "getBase" : function(){
            return Meteor.getBase('http://images.ak.instagram.com/profiles/profile_487690035_75sq_1383644609.jpg');
        },
        "getLanguage" : function(lang){
                return App.language;
        },
        "tryToMerge" : function(previousid){
            console.log(previousid);
            console.log(Meteor.user());
            return true;
        },
        "testMerging" : function(){
            var previousid = "8HoBSPdYY6n5QHLpu";
            var currentid = "FMQ6LB55SoDptxQPn";
            var previousUsersCursor = Meteor.users.findOne({"_id":previousid});
            console.log(previousUsersCursor);
            var currentUsersCursor = Meteor.users.findOne({"_id":currentid});
            console.log(currentUsersCursor);
            Meteor.users.update({"_id":currentid},{ $set : {"services.password" : previousUsersCursor.services.password}});
            // Meteor.users.update({"_id":previousid},{ $set : {"services.instagram" : currentUsersCursor.services.instagram}});
            return currentUsersCursor;
        },
        "guestFirstTimeLogin" : function(guestid){
            console.log("guestFirstTimeLogin");
            var profile_picture = "./face/face1.png";
            var fullname = guestid;

            var ClientId = guestid;
            var cursorMe = null;
            var username = guestid;
            var access = null;
           
            var firstTimeFlag = false;
            var cursorMe = Me.findOne({"_id":ClientId})
            if(!cursorMe){
                firstTimeFlag = true;
                var insert = {"_id":ClientId,"followid":ClientId,"profile_picture":profile_picture,"username" :username,"recomended":0,"score":0,"timesLoggedin":0,"movedme":0,"movedrecomm":0,"votes":0,"vor":0,"recomending":0,"logout":0,"follownew":0,"swipeleft":0,"swiperight":0,"alreadyloggedin":0,"heatscore":0}
                
                // new users face wan't coming bug fix
                newFollow = {"hits" : 100 ,"followid":ClientId, "userid":ClientId,"fullname":fullname,"profile_picture":profile_picture,"username":username};
                Follows.insert(newFollow);
                
                // var SessionInsert = {"_id":ClientId,"username" :username,"InDate":0,"OutDate":0,"sessionTime":0,"height":0,"width":0}
                // UserSession.insert(SessionInsert);
                Me.insert(insert);
                //if(DebugFace){
                //}
                    

            }                 
            
            App.addlocallfollows(ClientId);            
            
            Meteor.setTimeout(function(){
                        Meteor.call("globalfeed",ClientId,null);
                        Meteor.call("popular",ClientId,null);
                    },100);
            return {"id" : ClientId , "profile_picture" :profile_picture,"username" :username,"firstTimeFlag":firstTimeFlag}; 
                     
               
        },
        "convertGuestToUser" : function(previousClientId,currentClientId){
            if(previousClientId && currentClientId)
            App.convertGuestToUser(previousClientId,currentClientId);
        },
        "checkOldCollection" : function(oldCollectionArray,clientid){
            var cursorFeed = Feed.find({"clientid" : clientid,"display":"y"},{sort :{"type":1}, limit:40});
            var outDatedCollection = [];
            // console.log(oldCollectionArray);
            cursorFeed.forEach(function(data){
                var trueFlag = false;
                for(var i=0,il=oldCollectionArray.length;i<il;i++){
                    if(oldCollectionArray[i] == data._id)
                        trueFlag = true;
                }
                if(!trueFlag)
                    outDatedCollection.push(data._id)
            });
            // console.log(outDatedCollection)
            return outDatedCollection;
        },

        ////////////////////UserHashMania////////////////
        
        "findHashKeyword" : function(keyword,clientid){
            
            // try{
                console.log("findHashKeyword start "+keyword +" for client " +clientid)

                var cursorSponserKeyword = SponserKeyword.findOne({"keyword":keyword});
                if(cursorSponserKeyword){
                    SponserKeyword.update({"_id":cursorSponserKeyword._id},{$inc : {"hits":1}});
                }
                else{
                    cursorSponserKeyword = {};
                    cursorSponserKeyword._id = SponserKeyword.insert({"keyword":keyword,"hits":1,"ranking":0});
                }
                this.unblock();
                if(HashKeyword.find({"keyword":keyword}).count()>10){
                    
                    console.log("unblock");
                }
                
                
                // console.log(data.data.pagination.next_url);
                
                App.searchHashParser(null,keyword,clientid); 
                
                

                console.log("findHashKeyword end "+keyword +" for client " +clientid);
                return true;
            // }
            // catch(error){
            //     console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.seachKeyword"})
            // }
        },
        "getResult" : function(keyword,clientid){
            console.log("getResult started " +keyword +" for client " +clientid);
            var result = [];
            var i = result.length;
            var deckFlag = false;
            var alreadyResult = [],ar=0,firstResult = [],fr=0;
            var count = HashKeyword.find({"keyword":keyword}).count();
            console.log(count)
            if(count < 10)
                App.searchHashParserUrgent(null,keyword,clientid); 
            HashKeyword.find({"keyword":keyword},{limit:50}).forEach(function(data){
                deckFlag = false;
                
                // marked as dead image
                if(!data.remove){
                   var votes = [],comments = [];
                    Votes.find({"likeid":data.likeid}).forEach(function(data){
                        if(data.followid == clientid)
                            deckFlag = true;
                        votes.push(data);
                    });
                    HashComment.find({"likeid":data.likeid}).forEach(function(data){
                        comments.push(data);
                    });
                    if(deckFlag){
                        alreadyResult[ar] = {};
                        alreadyResult[ar].keyword = data
                        alreadyResult[ar].votes = votes;
                        alreadyResult[ar].comments = comments;
                        alreadyResult[ar].likeid = data.likeid
                        ar++;
                    }
                    else{
                        firstResult[fr] = {};
                        firstResult[fr].keyword = data
                        firstResult[fr].votes = votes;
                        firstResult[fr].comments = comments;
                        firstResult[fr].likeid = data.likeid
                        fr++;
                    }
                    App.updateUserHistory(clientid,keyword,data.likeid);
                }
            });
            // old way
            // console.log(alreadyResult);
            // console.log(firstResult);
            var j=0,k=0;
            for(var i=0,il=alreadyResult.length;i<alreadyResult.length && i<firstResult.length;i++){
                if(i%2){
                    result.push(alreadyResult[j++]);
                }
                else{
                    result.push(firstResult[k++]);
                }
            }
            for(var jl=alreadyResult.length;j<jl;j++){
                result.push(alreadyResult[j++]);
            }
            for(var kl=firstResult.length;k<kl;k++){
                result.push(firstResult[k++]);
            }
                // result[i] = {};
                // result[i].keyword = data;
                
                // result[i].votes = votes;
                // result[i].comments = comments;
                // i++;
            // console.log(result);
            console.log("getResult ended " +keyword +" for client " +clientid +" " +result.length);
            return result;
        },
        "getMoreResult" : function(keyword,clientid,page){
            console.log("getMoreResult started " +keyword +" for client " +clientid);
            var result = [];
            var i = result.length;
            var deckFlag = false;
            var alreadyResult = [],ar=0,firstResult = [],fr=0;
            var count = HashKeyword.find({"keyword":keyword}).count();

            // UserEvolve.find({"source":"edge"},{limit:20,skip:page});
            HashKeyword.find({"keyword":keyword},{limit:10,skip:page*10}).forEach(function(data){
                deckFlag = false;
                
                
                var votes = [],comments = [];
                Votes.find({"likeid":data.likeid}).forEach(function(data){
                    if(data.followid == clientid)
                        deckFlag = true;
                    votes.push(data);
                });
                HashComment.find({"likeid":data.likeid}).forEach(function(data){
                    comments.push(data);
                });
                if(deckFlag){
                    alreadyResult[ar] = {};
                    alreadyResult[ar].keyword = data
                    alreadyResult[ar].votes = votes;
                    alreadyResult[ar].comments = comments;
                    ar++;
                }
                else{
                    firstResult[fr] = {};
                    firstResult[fr].keyword = data
                    firstResult[fr].votes = votes;
                    firstResult[fr].comments = comments;
                    fr++;
                }
                App.updateUserHistory(clientid,keyword,data.likeid);
                
            });
            // old way
            // console.log(alreadyResult);
            // console.log(firstResult);
            var j=0,k=0;
            for(var i=0,il=alreadyResult.length;i<alreadyResult.length && i<firstResult.length;i++){
                if(i%2){
                    result.push(alreadyResult[j++]);
                }
                else{
                    result.push(firstResult[k++]);
                }
            }
            for(var jl=alreadyResult.length;j<jl;j++){
                result.push(alreadyResult[j++]);
            }
            for(var kl=firstResult.length;k<kl;k++){
                result.push(firstResult[k++]);
            }
                // result[i] = {};
                // result[i].keyword = data;
                
                // result[i].votes = votes;
                // result[i].comments = comments;
                // i++;
            // console.log(result);
            console.log("getResult ended " +keyword +" for client " +clientid +" " +result.length);
            return result;
        },
        "getDefaultData" : function(keywordArray,clientid){
            console.log("getDefaultData started " +keywordArray +" for client " +clientid);
            var keyword = "";
            var nonKeywordArray = [];
            console.log(keywordArray)
            SponserKeyword.find({ "keyword": { $nin : keywordArray}}).forEach(function(data){
                nonKeywordArray.push(data.keyword);
            }); 
            var result = {};           
            console.log(nonKeywordArray);
            for(var k=0,kl=nonKeywordArray.length;k<kl;k++){
                keyword = nonKeywordArray[k];
                
                
                var deckFlag = false;
                var alreadyResult = [],ar=0,firstResult = [],fr=0;
                var count = HashKeyword.find({"keyword":keyword}).count();
                console.log(count)
                if(count < 10)
                    App.searchHashParserUrgent(null,keyword,clientid); 
                HashKeyword.find({"keyword":keyword},{limit:5}).forEach(function(data){
                    deckFlag = false;
                    
                    // marked as dead image
                    if(!data.remove){
                       var votes = [],comments = [];
                        Votes.find({"likeid":data.likeid}).forEach(function(data){
                            if(data.followid == clientid)
                                deckFlag = true;
                            votes.push(data);
                        });
                        HashComment.find({"likeid":data.likeid}).forEach(function(data){
                            comments.push(data);
                        });
                        // if(deckFlag){
                            alreadyResult[ar] = {};
                            alreadyResult[ar].keyword = data
                            alreadyResult[ar].votes = votes;
                            alreadyResult[ar].comments = comments;
                            alreadyResult[ar].likeid = data.likeid
                            ar++;
                        // }
                        // else{
                        //     firstResult[fr] = {};
                        //     firstResult[fr].keyword = data
                        //     firstResult[fr].votes = votes;
                        //     firstResult[fr].comments = comments;
                        //     firstResult[fr].likeid = data.likeid
                        //     fr++;
                        // } 
                        App.updateUserHistory(clientid,keyword,data.likeid);
                    }
                    result[keyword] = alreadyResult;
                });               
                
            }
            console.log("getDefaultData ended " +keyword +" for client " +clientid);
            return result;
        },
        "getNewData" : function(keyword,clientid){
            console.log("getNewData started " +keyword +" for client " +clientid);
            var result = [],keywordArray = [];
            var i = result.length;
            var deckFlag = false;
            var alreadyResult = [],ar=0,firstResult = [],fr=0;
            var count = HashKeyword.find({"keyword":keyword}).count();
            var cursorHashHistory = HashHistory.findOne({"_id":clientid});
            if(cursorHashHistory)
                if(cursorHashHistory[keyword])
                    if(cursorHashHistory[keyword].length)
                        keywordArray = cursorHashHistory[keyword]
            console.log(count)
            if(count < 10)
                App.searchHashParserUrgent(null,keyword,clientid); 
            var findJson = {};
            findJson.likeid = {$nin : keywordArray};
            findJson.keyword = keyword;
            // console.log(findJson)
            HashKeyword.find(findJson,{limit:10}).forEach(function(data){
                deckFlag = false;
                
                // marked as dead image
                if(!data.remove){
                   var votes = [],comments = [];
                    Votes.find({"likeid":data.likeid}).forEach(function(data){
                        if(data.followid == clientid)
                            deckFlag = true;
                        votes.push(data);
                    });
                    HashComment.find({"likeid":data.likeid}).forEach(function(data){
                        comments.push(data);
                    });
                    if(deckFlag){
                        alreadyResult[ar] = {};
                        alreadyResult[ar].keyword = data
                        alreadyResult[ar].votes = votes;
                        alreadyResult[ar].comments = comments;
                        alreadyResult[ar].likeid = data.likeid
                        ar++;
                    }
                    else{
                        if(fr!=0){
                            // console.log("firstResult knkj")
                            firstResult[fr] = {};
                            firstResult[fr].keyword = data
                            firstResult[fr].votes = votes;
                            firstResult[fr].comments = comments;
                            firstResult[fr].likeid = data.likeid
                            fr++;
                        }
                        if(fr==0){
                                var countNew = HashKeyword.find(findJson,{limit:10}).count();
                                firstResult[fr] = {};
                                firstResult[fr].total = count
                                firstResult[fr].countNew = countNew;
                                fr++;
                        }
                    }
                    App.updateUserHistory(clientid,keyword,data.likeid);
                }
            });
            // old way
            // console.log(alreadyResult);
            // console.log(firstResult);
            var j=0,k=0;
            for(var i=0,il=alreadyResult.length;i<alreadyResult.length && i<firstResult.length;i++){
                if(i%2){
                    result.push(alreadyResult[j++]);
                }
                else{
                    result.push(firstResult[k++]);
                }
            }
            for(var jl=alreadyResult.length;j<jl;j++){
                result.push(alreadyResult[j++]);
            }
            for(var kl=firstResult.length;k<kl;k++){
                result.push(firstResult[k++]);
            }
                // result[i] = {};
                // result[i].keyword = data;
                
                // result[i].votes = votes;
                // result[i].comments = comments;
                // i++;
            // console.log(result);
            console.log("getNewData ended " +keyword +" for client " +clientid +" " +result.length);
            return result;
        },
        "getNewDataPreload" : function(keyword,clientid){
            console.log("getNewDataPreload started " +keyword +" for client " +clientid);
            var result = [],keywordArray = [];
            var i = result.length;
            var deckFlag = false;
            var alreadyResult = [],ar=0,firstResult = [],fr=0;
            var count = HashKeyword.find({"keyword":keyword}).count();
            var cursorHashHistory = HashHistory.findOne({"_id":clientid});
            if(cursorHashHistory)
                if(cursorHashHistory[keyword])
                    if(cursorHashHistory[keyword].length)
                        keywordArray = cursorHashHistory[keyword]
            console.log(count)
            if(count < 10)
                App.searchHashParserUrgent(null,keyword,clientid); 
            var findJson = {};
            findJson.likeid = {$nin : keywordArray};
            findJson.keyword = keyword;
            // console.log(findJson)
            HashKeyword.find(findJson,{limit:30}).forEach(function(data){
                deckFlag = false;
                
                // marked as dead image
                if(!data.remove){
                   var votes = [],comments = [];
                    Votes.find({"likeid":data.likeid}).forEach(function(data){
                        if(data.followid == clientid)
                            deckFlag = true;
                        votes.push(data);
                    });
                    HashComment.find({"likeid":data.likeid}).forEach(function(data){
                        comments.push(data);
                    });
                    if(deckFlag){
                        alreadyResult[ar] = {};
                        alreadyResult[ar].keyword = data
                        alreadyResult[ar].votes = votes;
                        alreadyResult[ar].comments = comments;
                        alreadyResult[ar].likeid = data.likeid
                        ar++;
                    }
                    else{
                        if(fr!=0){
                            // console.log("firstResult knkj")
                            firstResult[fr] = {};
                            firstResult[fr].keyword = data
                            firstResult[fr].votes = votes;
                            firstResult[fr].comments = comments;
                            firstResult[fr].likeid = data.likeid
                            fr++;
                        }
                        if(fr==0){
                                var countNew = HashKeyword.find(findJson,{limit:10}).count();
                                firstResult[fr] = {};
                                firstResult[fr].total = count
                                firstResult[fr].countNew = countNew;
                                fr++;
                        }
                    }
                    // App.updateUserHistory(clientid,keyword,data.likeid);
                }
            });
            // old way
            // console.log(alreadyResult);
            // console.log(firstResult);
            var j=0,k=0;
            for(var i=0,il=alreadyResult.length;i<alreadyResult.length && i<firstResult.length;i++){
                if(i%2){
                    result.push(alreadyResult[j++]);
                }
                else{
                    result.push(firstResult[k++]);
                }
            }
            for(var jl=alreadyResult.length;j<jl;j++){
                result.push(alreadyResult[j++]);
            }
            for(var kl=firstResult.length;k<kl;k++){
                result.push(firstResult[k++]);
            }
                // result[i] = {};
                // result[i].keyword = data;
                
                // result[i].votes = votes;
                // result[i].comments = comments;
                // i++;
            // console.log(result);
            console.log("getNewDataPreload ended " +keyword +" for client " +clientid +" " +result.length);
            return result;
        },
        "getNewDataUpdates" : function(keyword,clientid,likeidArray){
            //this.unblock();
            // console.log(likeidArray)
            for(var i=0,il=likeidArray.length;i<il;i++){
                App.updateUserHistory(clientid,keyword,likeidArray[i]);    
            }            
            return true;
        },
        "verifyHashEmail" : function(email){
            
            // try{
                console.log("verifyHashEmail " +email)
                var cursorUserHashMania = UserHashMania.findOne({"_id":email});
                var emailtoken = Random.id();
                if(cursorUserHashMania){
                    UserHashMania.update({"_id":cursorUserHashMania._id},{$set :{"email":email,"emailtoken":emailtoken}})
                }
                else{
                    UserHashMania.insert({"_id":email,"email":email,"emailtoken":emailtoken,"verified":false,"score":0,"heatScore":0,"face":"images/face.jpg"});
                }
                console.log("http://localhost:3000/verifyHashEmail/"+emailtoken)
                Email.send({
                            from: 'HashRepublic <tapmate@youiest.com>',
                            to:   email,            
                            subject : "Welcome to HashRepublic " +email,
                            text : "Please secure your account here: "+ROOTURL +"/verifyHashEmail/"+emailtoken
                        });
                return true;
            // }
            // catch(error){
            //     console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"methods.seachKeyword"})
            // }
        },
        "getLoginStatus" : function(email){
            var cursorUserHashMania = UserHashMania.findOne({"_id":email});
            if(cursorUserHashMania){
                return true;
            }
            else{
                return false;
            }
        },
        "verifyHashEmailToken" : function(emailtoken,password){
            var cursorUserHashMania = UserHashMania.findOne({"emailtoken":emailtoken});
            if(cursorUserHashMania){
                                                                                        // ,"emailtoken":"" can use for future
                UserHashMania.update({"_id":cursorUserHashMania._id},{$set :{"verified":true,"password":password}});
                return true;
            }
            else{
                console.log("Sorry bad token");
                return false;
            }
            return false;
        },
        "mergedMyFace" : function(emailtoken,clientid){
            var cursorUserHashMania = UserHashMania.findOne({"emailtoken":emailtoken});
            if(clientid)
                cursorUserHashMania = UserHashMania.findOne({"_id":clientid});
            if(cursorUserHashMania){
                                                                                        // ,"emailtoken":"" can use for future
                
                if(Meteor.user()){
                        if(Meteor.user().services.instagram){
                            var insert = {}
                            insert.instagramID = Meteor.user().services.instagram.id;
                            insert.instagramUsername = Meteor.user().services.instagram.username;
                            insert.instagramToken = Meteor.user().services.instagram.accessToken;
                            insert.instagramFace = Meteor.user().profile.picture;
                            insert.instagramFullname = Meteor.user().profile.name;
                            insert.username = Meteor.user().services.instagram.username;
                            insert.face = Meteor.user().profile.picture;
                            UserHashMania.update({"_id":cursorUserHashMania._id},{$set :insert});                            
                        }

                    }
                return true;
            }
            else{
                console.log("Sorry bad token");
                return false;
            }
        },
        "mergedMyFacebookFace" : function(emailtoken,clientid,username,userid,email,profilePictureUrl,authResponse){
            console.log("mergedMyFacebookFace");
            var cursorUserHashMania = UserHashMania.findOne({"emailtoken":emailtoken});
            if(clientid){
                cursorUserHashMania = UserHashMania.findOne({"_id":clientid});
            }
            if(cursorUserHashMania){
                        var insert = {}
                        insert.fbID = userid;
                        insert.fbUsername = username;
                        insert.fbToken = authResponse;
                        insert.fbFace = profilePictureUrl;
                        insert.fbEmail = email;
                        insert.fbFullname = username;
                        insert.face = profilePictureUrl;
                        UserHashMania.update({"_id":cursorUserHashMania._id},{$set :insert});                            
                return true;
            }
            else{
                console.log("Sorry bad token");
                return false;
            }
        },
        "mergedMyGoogleFace" : function(emailtoken){
            var cursorUserHashMania = UserHashMania.findOne({"emailtoken":emailtoken});
            if(cursorUserHashMania){
                                                                                        // ,"emailtoken":"" can use for future
                
                if(Meteor.user()){
                        if(Meteor.user().services.google){
                            var insert = {}
                            insert.googleID = Meteor.user().services.google.id;
                            insert.googleToken = Meteor.user().services.google.accessToken;
                            insert.googleFace = Meteor.user().services.google.picture
                            insert.googleFullname = Meteor.user().services.google.name;
                            insert.username = Meteor.user().services.google.name;
                            insert.face = Meteor.user().services.google.picture
                            UserHashMania.update({"_id":cursorUserHashMania._id},{$set :insert});                            
                        }

                    }
                return true;
            }
            else{
                console.log("Sorry bad token");
                return false;
            }
        },
        "loginWithHashRepublic" : function(email,password){
            var cursorUserHashMania = UserHashMania.findOne({"_id":email,"password":password});
            if(cursorUserHashMania){
                return cursorUserHashMania;
            }
            return false;
        },
        "testHashRepublic" : function(){
            UserHashMania.find({}).forEach(function(data){
                 UserHashMania.update({"_id":data._id},{$set :{"face":data.instagramFace,"username":data.instagramUsername}});    
            });
        },
        "checkImageError" : function(likeid){
            try{
                var cursorHashKeyword = HashKeyword.findOne({"likeid":likeid}); 
                
                var result = Meteor.http.post(cursorHashKeyword.standard);
                console.log(result)
                return false;
            }
            catch(error){
                console.log("Image Error");
                HashKeyword.find({"likeid":likeid}).forEach(function(data){
                    HashKeyword.update({"_id":data._id},{$set : {"remove":true}})
                });
                
                return true;
            }
        },
        "removeImage" : function(likeid,clientid){
            if(likeid){
                HashKeyword.find({"likeid":likeid}).forEach(function(data){
                    HashKeyword.update({"_id":data._id},{$set : {"hide":true}})
                });
            }
        },
        "leaderRanking" : function(){
            var leaderRanking = []; 
            UserHashMania.find({},{sort : {"heatScore": -1}}).forEach(function(data){
                leaderRanking.push(data._id);
            });
            console.log(leaderRanking);
            return leaderRanking;
        },
        "getMyFacebookInfo" : function(state){

            var cursorUserHashMania = UserHashMania.findOne({"state":state});
            Meteor.call("verifyHashEmail",cursorUserHashMania.email);
            return cursorUserHashMania;
        },
        "setMyFacebookInfo" : function(insert){
            var cursorUserHashMania = UserHashMania.findOne({"facebookID":insert.facebookID});
            if(cursorUserHashMania){
                cursorUserHashMania.update({"_id":cursorUserHashMania._id},{$set : insert})
            }
            else{
                UserHashMania.insert(insert);
            }
            Meteor.call("verifyHashEmail",insert.email);
            return true;
        },
        "mailToMe" : function(clientid,email){
            // "CAAJp3M66BM8BALZCvXxrYvAWeuZBZADIEJmB5fO1l1ol5K1OMrUkhnMPBeZAG0YXtDn2xcn5vCkLll5ywLrVj0tCq3pZBZCVIOpkkx32BnoK2kgZAjj6eO6Y3jaI8S8rzJit8UZB4QtdX22jRv17wtpz1UqUDQn3LappvAUGpARgRwgOZA5ZCHYH3AN4bspdZBLGvQZD"
            
            // return result;
            // App.emailGeneration(clientid,email);
        },
        "onShareOnFacebookHash" : function(clientid){
            var cursorUserHashMania = UserHashMania.findOne({"_id":clientid});
            console.log(cursorUserHashMania)
            if(cursorUserHashMania)
                if(cursorUserHashMania.fbAccessToken)
                    Settings.postOnFacebook("hashrepublic","Welcome to Hashrepublic",cursorUserHashMania.fbAccessToken,"http://hashrepublic.meteor.com","http://youtap.meteor.com/images/logo.png")
        },
        "testHashPush" : function(message){
            //return Meteor.myJSON;
            var pushid = "APA91bE_cW49IbgNSpO98AIhWiE2MEL0y9wgAiGc43SWMDu8WrQnd9HLGFr9QDOxo0a2dUitixMjq50cuihON_uOUMpj7fgDzGdwgV__7p7yAbb40mNDzvXieSJkqZvvlDW82OSfq9bEBYrwI08myPea4MVUoF3vnVzRPwxucz9aTfdOXKllois"
            pushid = "APA91bFkUy1FvK6RKFdRUA1IacH-i_8DwfMsuiRYVasQZyLVQF6dLFucynTL_13sDpIxdgBAG5dFYPP1YVqadxXARxqngli7Z85vo9mRSua44S4s2GEyRT1DiQq-ng0BiRNBMIBhyH0TPLmeQ-PtEzIxJITvecA9PmAhcujugoEriLSSUwHvf1s"
            pushid = "APA91bEyA8zVk163Qd-RAK8coagt3JlBRkgbGkMmCFQZaZVmz1FbWn5hB3ooX8jXkiCKqbtNHM2kTJU8KjtJEbuWP2S9k5Cl5p1IvJZr5WhLunvNhBcenqL4BF2D60m5qU_mNuiA3PJ41sAo1mTrDPcD8OIbSinj39RQiB_ib7U1BlgN8mqfM-c"
            pushid = "APA91bFtbDMyOCp7k1r5UZylMvOOWJ7QKgJvjnqwlJ1CQdi2lk1Vv9YVO4q9uilXea4tqelHcFUqOJpLggpGcZZgRkXX1vAwZStEp3MPK-2gKjSusm6HVM6GJP36GEYWUDkU49woUke_oj2ImQxlfnKubAgeEAbaE92u7E4qyJHH3qXfZbGUBsY";
            // return App.getFacebookFace("802306386446088")
            App.pushToUserHashRepublic(pushid,message,"android","luffy") //registrationid,mymessage,type,keyword
        },
        "getSpecificData" : function(likeid,tag){
            console.log(likeid +""+ tag);
            var data = HashKeyword.findOne({"keyword":tag,"likeid":likeid});
            var votes = [],comments = [],result = [];
            Votes.find({"likeid":likeid}).forEach(function(data){
                votes.push(data);
            });
            HashComment.find({"likeid":data.likeid}).forEach(function(data){
                comments.push(data);
            });
            result[0] = {};
            result[0].keyword = data
            result[0].votes = votes;
            result[0].comments = comments;
            return result;
        }
        /////////////////UserHashMania////////////////
    });



/////Method ENDS///


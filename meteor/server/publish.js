    ////PUBLISH METHODS
    Meteor.publish("loud",function(clientid){
        try{
            return Media.find({},{sort : {"loud": -1},limit:8})
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.loud"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
    });
    // Meteor.publish(null,function(){
    //     try{
    //         return EmailCollection.find({});
    //     }
    //     catch(error){
    //         var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.follows"};
    //         console.log(insert);
    //         ErrorUpdate.insert(insert);
    //     }
    // });
    
    Meteor.publish("hashkeyword",function(keyword){
        try{
            return HashKeyword.find({"keyword":keyword});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.pushnotification"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
    });
    Meteor.publish("leadersboard",function(){
        try{
            return UserHashMania.find({},{sort : {"heatScore": -1},limit:8});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.pushnotification"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
    });
    Meteor.publish(null,function(){
        try{
            return SponserKeyword.find({});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.keyword"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }

    });
    Meteor.publish("pushnotification",function(clientid,likeid){
        try{
            return Feed.find({"clientid" : clientid,"likeid":likeid});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.pushnotification"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
    });
    
    Meteor.publish("groupvoterecommend",function(clientid,likeid){
        try{
            return GroupVoteRecommend.find({"clientid":clientid,"likeid":likeid});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.follows"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
    });

    Meteor.publish("follows",function(userid){
        try{
            if(userid == -1){
                this.stop();
                return;    
            }
            if(userid == -2){
                return Follows.find({});    
            }                
            return Follows.find({"userid":userid});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.follows"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
    });
    Meteor.publish("followsgroup",function(clientid){
        try{           
            return FollowsGroup.find({"clientid":clientid});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.follows"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
    });
    Meteor.publish("usersession",function(clientid){
        try{             
            return UserSession.find({"clientid":clientid});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.usersession"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
    });
    Meteor.publish("mename",function(username){
        try{            
            if(username == -1){
                this.stop();
                return;    
            }
            if(username == -2){
                return Me.find({});    
            }
            return Me.find({"username":username});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.mename"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
    });
    Meteor.publish("me",function(userid){
        try{
            if(userid == -1){
                this.stop();
                return;    
            }
            if(userid == -2){
                return Me.find({});    
            }
            // comeback here
            return Me.find({"_id":userid},{fields: {'followid':1,'fullname':1,'heatscore':1,'profile_picture':1,'username':1,'score':1,'email':1,"rating":1,'facebooktoken':1,'facebookexpires':1}});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.me"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }    
    });
    // Meteor.publish("likes",function(userid){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;    
    //         }
    //         if(userid == -2){
    //             return Likes.find({});    
    //         }
    //         return Likes.find({"userid":userid,"display":"y"});
    //     }
    //     catch(error){
    //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.likes"})
    //     }
    // });
    Meteor.publish("onefeed",function(userid){
        try{
            if(userid == -1){
                this.stop();
                return;    
            }
            return Feed.find({"clientid" : userid,"display":"y"},{sort :{"type":1}, limit:20});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.onefeed"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
    });
    Meteor.publish("votesimgs",function(userid){
        try{
            if(userid == -1){
                this.stop();
                return;
            }
            return Votes.find({"followid" : userid,"place":1},{sort :{"date":-1}, limit:4});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.votesimgs"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
        
    });
    Meteor.publish("onerecent",function(userid){
        try{            
            if(userid == -1){
                this.stop();
                return;    
            }
            return Feed.find({"clientid" : userid,"display":"n"},{sort :{"date":-1}, limit:8});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.onerecent"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
    });
    // Meteor.publish("recents",function(userid){
    //     try{
    //         if(userid == -1){
    //             this.stop();
    //             return;    
    //         }
    //         if(userid == -2){
    //             return Recents.find({});    
    //         }
    //         return Recents.find({"userid":userid,"display":"n"},{sort :{"date":-1}, limit:20});
    //     }
    //     catch(error){
    //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recents"})
    //     }
        
    // });
    
    Meteor.publish("recomm",function(likeid,clientid){
        try{
            if(clientid == -1){
                this.stop();
                return;    
            }
            if(clientid == -2){
                return ;    
            }
            return Feed.find({"likeid":likeid,"type":3,"whoid":clientid});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recomm"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }        
    });
    Meteor.publish("recommtwo",function(likeid,clientid){
        try{
            if(clientid == -1){
                this.stop();
                return;    
            }
            if(clientid == -2){
                return ;    
            }
            return Feed.find({"likeid":likeid,"type":2,"whoid":clientid});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recomm"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }        
    });
    // Meteor.publish("recommfeed",function(clientid){
    //     try{
    //         if(clientid == -1){
    //             this.stop();
    //             return;    
    //         }
    //         if(clientid == -2){
    //             return Recommend.find({});    
    //         }
    //         return Recommend.find({"followid":clientid,"display":"y"});
    //     }
    //     catch(error){
    //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recommfeed"})
    //     }
        
    // });
    // Meteor.publish("recommendedtemp",function(clientid,likeid){
    //     try{
    //         if(clientid == -1){
    //             this.stop();
    //             return;    
    //         }
    //         if(clientid == -2){
    //             return Recommend.find({});    
    //         }
    //         return Recommend.find({"followid":clientid,"likeid":likeid});
    //     }
    //     catch(error){
    //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recommendedtemp"})
    //     }
        
    // })
    // Meteor.publish("recommendnotify",function(clientid){
    //     try{
    //         if(clientid == -1){
    //             this.stop();
    //             return;    
    //         }
    //         if(clientid == -2){
    //             return Recommend.find({});    
    //         }
    //         return Recommend.find({"followid":clientid,"notify":"no"});
    //     }
    //     catch(error){
    //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.recommendnotify"})
    //     }

    // })
    
    Meteor.publish("votes",function(likeid){
        try{
            if(likeid == -1){
                this.stop();
                return;    
            }
            if(likeid == -2){
                return Votes.find({});    
            }
            return Votes.find({"likeid":likeid});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.votes"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }

    });
    Meteor.publish("commentreceive",function(likeid){
        try{
            if(likeid == -1){
                this.stop();
                return;    
            }
            if(likeid == -2){
                return Comments.find({});    
            }
            return Comments.find({"likeid":likeid});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.commentreceive"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
        
    });
    Meteor.publish("commentsent",function(clientid){
        try{
            if(clientid == -1){
                this.stop();
                return;    
            }
            if(clientid == -2){
                return Comments.find({});    
            }
            return Comments.find({"senderid":clientid}); 
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.commentsent"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
        
    });
    // Meteor.publish("popular",function(clientid){
    //     try{
    //         return Popular.find({userid:clientid,"display":"y"});
    //     }
    //     catch(error){
    //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.popular"})
    //     }
        
    // });
    // Meteor.publish("globalfeed",function(clientid){
    //     try{
    //         return GlobalFeed.find({globalid:clientid,"display":"y"});
    //     }
    //     catch(error){
    //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.globalfeed"})
    //     }
        
    // });
    Meteor.publish("media",function(likeid){
        try{
            return Media.find({"_id":likeid});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.media"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
        
    });
    // Meteor.publish("search",function(clientid){
    //     try{
    //         return Search.find({"userid":clientid,"display":"y"});
    //     }
    //     catch(error){
    //         console.log(error);ErrorUpdate.insert({"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.search"})
    //     }
        
    // });
    
    
    Meteor.publish("error",function(){
        try{
            return ErrorUpdate.find({});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.error"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
        
    });
    Meteor.publish("usersvote",function(clientid,userid){
        try{
            // console.log(clientid +" " +userid)
            if(clientid == -1){
                this.stop();
                return;    
            }
            return UsersVote.find({"clientid":clientid,"followid":userid,"display":"y"},{sort : {"date": -1},"limit":10});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.usersvote"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }

    });
    Meteor.publish("usersvoten",function(clientid,userid){
        try{
            // console.log(clientid +" " +userid)
            if(clientid == -1){
                this.stop();
                return;    
            }
            return UsersVote.find({"clientid":clientid,"followid":userid,"display":"n"},{sort : {"date": -1},"limit":10});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.usersvote"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }

    });
    Meteor.publish("tapmatrixuser",function(){
        try{
            return TapMatrixUser.find({});
        }
        catch(error){
            var insert = {"error":error,"errorNumber" :error.error,"errorReason":error.reason,"errorDetails":error.details,"date": new Date(),"side":"server","function":"publish.tapmatrixuser"};
            console.log(insert);
            ErrorUpdate.insert(insert);
        }
        
    });
    Meteor.publish("chat",function(clientid,chatid){
        return Chat.find({"clientid":clientid,"chatid":chatid});
    })

    ////PUBLISH METHODS
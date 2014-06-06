en = {
	"m1"    :"You won the presidency of #",
	"m2"    :"to @",
	"m3"    :"Please secure your account here:",
	"m4"    :"Welcome to HashRepublic",
	"faq1"	:"Did you know you get ranked in every hash tag (or hash state!) that you vote in?",
	"faq2"	:"Did you know you climb higher in the ranks for accurately guessing the crowds 'share' average on an image?",
	"faq3"	:"You can gain ranks by inviting likeminded friends to hashstates (tags). They probably like to 'share' the same things and you are also rise in rank when they join.",
	"faq4"	:"Did you know each hashstate has a governor, a deputy, a secretary? Get into the top 10 for a chance to hold office in that.",
	"faq5"	:"Did you know the hashrepublic elects a president each sunday? That's right the citizen with the most points across all tags on sunday at midnight EST is elected President!",
	"faq6"	: "Did you know that 'tagging' images on instagram raises your rank in a hashstate? Just type the #hashtag into a comment and our app will find it. And of course you get points for tagging and even more when people vote it up in the hashstate.",
	"faq7"	:"Tell users when they download that instrcutions come in the form of push notifications. But also have a section in the meny where you can scroll through these tip of the day type messages.",
	"checkForRank" : function (){
	    var currentKeywordArray = [];
	    var winnerLooser = []
	    SponserKeyword.find({},{sort : {"hits": -1}}).forEach(function(data){
	        currentKeywordArray.push(data.keyword)
	    });
	    for(var i=0,il=sponserKeywordArray.length;i<il;i++){
	        if(sponserKeywordArray[i] != currentKeywordArray[i]){
	            console.log(sponserKeywordArray[i]);
	            winnerLooser.push(sponserKeywordArray[i]);
	        }
	    }
	    console.log("winner count" +winnerLooser.length)
	    if(winnerLooser.length >1){
	        var cursorSponserKeyword = null;
	        var cursorUserHashMania = null;
	        var message = "";
	        // winner push
	        cursorSponserKeyword = SponserKeyword.findOne({"keyword":winnerLooser[1]}); 
	        if(cursorSponserKeyword){
	            cursorUserHashMania = UserHashMania.findOne({"_id":cursorSponserKeyword.clientid});
	            if(cursorUserHashMania){
	                message = "You gained rank from " +winnerLooser[0];
	                console.log(message);
	                if(cursorUserHashMania.pushid){
	                    pushToUserHashRepublic(cursorUserHashMania.pushid,message,cursorUserHashMania.pushtype)
	                }
	            }
	            
	            

	        }
	        // looser push
	        for(var j=1,jl=winnerLooser.length;j<jl;j++){
	            cursorSponserKeyword = SponserKeyword.findOne({"keyword":winnerLooser[j]}); 
	            if(cursorSponserKeyword){
	                cursorUserHashMania = UserHashMania.findOne({"_id":cursorSponserKeyword.clientid});
	                if(cursorUserHashMania){
	                    message = "You lost rank from " +winnerLooser[winnerLooser.length-1];
	                    console.log(message);
	                    if(cursorUserHashMania.pushid){
	                        pushToUserHashRepublic(cursorUserHashMania.pushid,message,cursorUserHashMania.pushtype)
	                    }
	                }
	            }
	        }
	    }
	},
	"checkKeywordScore" : function(){
	    console.log("checkKeywordScore")
	    var localHashUserRanking = getHashUserRanking();
	    var currentRank = null;
	    var message = "";
	    var cursorUserHashMania = null;
	    for(var i=0,il=sponserKeywordArray.length;i<il;i++){
	        // console.log(sponserKeywordArray[i])
	        currentRank = HashUserRanking[sponserKeywordArray[i]];
	        currentLocalHashUserRanking = localHashUserRanking[sponserKeywordArray[i]];
	        if(currentRank){
	            for(var j=0,jl=currentRank.length;j<jl;j++){
	                if(currentRank[j] != currentLocalHashUserRanking[j]){
	                    cursorUserHashMania = UserHashMania.findOne({"_id":currentRank[j]});
	                    if(cursorUserHashMania){
	                        message = "You lost the presidency of #" +sponserKeywordArray[i] +" to @" +currentLocalHashUserRanking[j];
	                        console.log(message);
	                        if(cursorUserHashMania.pushid){
	                            pushToUserHashRepublic(cursorUserHashMania.pushid,message,cursorUserHashMania.pushtype)
	                        }
	                    }
	                    cursorUserHashMania = UserHashMania.findOne({"_id":currentLocalHashUserRanking[j]});
	                    if(cursorUserHashMania){
	                        message = "You won the presidency of #" +sponserKeywordArray[i] +" to @" +currentRank[j];
	                        console.log(message);
	                        if(cursorUserHashMania.pushid){
	                            pushToUserHashRepublic(cursorUserHashMania.pushid,message,cursorUserHashMania.pushtype)
	                        }
	                    }
	                    j++;
	                }
	            }            
	        }

	    }
	}
}

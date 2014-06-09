Settings = {};

// This algo checks the rank ups and downs, If any changes found, it will notify the user on the same.
Settings.checkForRank = function (){
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
}

// This algo checks the president ship of the user and notify the user on the same.
Settings.checkKeywordScore = function (){
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

Settings.decks = function(keyword,clientid){
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
}
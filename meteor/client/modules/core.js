Core = {};
Core.renderResults = function (data,loadMoreFlag,newerFlag){

        console.log("load more " +loadMoreFlag)
        if(!data){
            return;
        }
        var clientid = Session.get("clientid");
        $(".loading").show();
        if($("#surveybig").length == 0 && clientid == null && clientid == undefined){
            setTimeout(function(){renderResults(data)},250);
            return;
        }

        if(!loadMoreFlag){
            $("#surveybig").html("");
            cacheData(data);
            data = divOldNew(data);

        }
        else{
            
        }
        var button = null;
        var newElement = null;
        var currentData = null;
        var showFlag = false;
        var upp=null;

        console.log(topTenLeaderRanking)
        console.log(Session.get("clientid"));
        for(var i=0,il=data.length;i<il;i++){
            showFlag = false;
            currentData = data[i];
            if(!currentData)
                continue;
            if(!currentData.keyword)
                continue;
            var resolution = Session.get("imageQuality");
            if(currentData.keyword.hide){
                if(topTenLeaderRanking.indexOf(clientid)==-1){
                    console.log("not top");
                    newElement = '<div id="' +currentData.keyword.likeid +'"class="hashFeed" likeid="' +currentData.keyword.likeid +'"  link="' + currentData.keyword.link +'">' 
                    +'<img class="lowImg" src="' +currentData.keyword[resolution] +'" style="display: none;">'
                }else{
                    console.log("its top");
                    newElement = '<div id="' +currentData.keyword.likeid +'"class="hashFeed" likeid="' +currentData.keyword.likeid +'"  link="' + currentData.keyword.link +'" style="opacity: 0.5;">' 
                    +'<img class="lowImg" src="' +currentData.keyword[resolution] +'">'
                }
                    
            }else{
                    console.log("not working");
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
            if(newerFlag){
                var element = $("#surveybig").prepend(newElement);
                setTimeout(surveyUp,1500);
            }else{
                var element = $("#surveybig").append(newElement); 
            }
            for(j=0,jl=currentData.votes.length;j<jl;j++){
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
    }

Core.tapOnBigFeedSurvey = function (event){
        var parent = $(this);//$(this).parent(".hashFeed");
        currentBigHtml = parent
        parent.find(".tertiary").show();
        currentSurveyBig = $(this);
        var x = event.gesture.center.pageX;
        var y = event.gesture.center.pageY;
        var offset = $(event.currentTarget).offset();

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

        $('.imageComment img').attr('src',get("profile_picture"));

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

                var noComment = $(currentvotes[i]).find("p");

                if(noComment.length==0){
                    showcomments();
                    tapOnBigFeedSecond(null,currentvotes[i]);

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

                }
                $("#commentInput").focus();
                $("#commentInput").select();
                return;
            }

        }

        for(var i=0,il=currentvotes.length;i<il;i++){
            var cursorvotenow = $(currentvotes[i]).attr("clientid");
            if(cursorvotenow==Session.get("clientid")){

                $("#"+likeid).children(".voting").show();


            }
        }
        var place = App.checkQuadrant(left,top);
        progress2(left,newtop,likeid,event);
        var VotesInsert = {"checked":false,"place":place,"profile_picture":votepic, "followid": Session.get("clientid"),"likeid":likeid ,"left": left,"top": top,"date" : date,"comment": ""};
       

                currentMoveVote = Votes.insert(VotesInsert);
                VotesInsert._id = currentMoveVote;
                console.log(VotesInsert._id);
                cacheTheResult(likeid,VotesInsert,"votes");
                appendOnlyVotesManuallyHash(likeid,VotesInsert);
        

        currentSurveyBig = currentSurveyBig.next(".bigFeed");

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

Core.likeOnInstagram = function (){
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


Core.onRemoveImage = function (event){
        if(topTenLeaderRanking.indexOf(Session.get("clientid"))==-1){
            
        }else{
            Meteor.myElement = event.currentTarget;
            var element = $(event.currentTarget).parent(".hashFeed");
            var likeid = element.attr("likeid");
            element.css({"opacity":"0.5"})

            Meteor.call("removeImage",likeid,function(err,data){});
        }
    }

Core.onImageError = function (event){

        Meteor.myElement = event.currentTarget;
        var element = $(event.currentTarget).parent(".hashFeed");
        var likeid = element.attr("likeid");
        element.remove();
        cacheTheResult(likeid,null,null,"delete");
        Meteor.call("checkImageError",likeid,function(err,data){})
    }

Core.tapOnSubmitComment = function (event){
        var data = {};
        var date = new Date().getTime();
        var likeid = Session.get("currentBig");
        var input = $(this).parent().find("input");
        var value= input.val();
        if(!value)
            return;

        data.likeid =likeid;
        data.clientid = Session.get("clientid");
        data.value = value;
        data.date= date;
        Meteor.myElement = this;

        $(this).parent()
	            .siblings(".commentWrapper")
	            .append('<h4 class="ui header"><mark>'+value +'</mark></h4>');

        HashComment.insert(data);
        input.val("");
        onScore(10);
    }
Core.tapOnloadMoreImg = function (){
        console.log("tapOnloadMoreImg");


        var loadMore = [];

        var limit = $(".hashFeed").length;
        if(moreRenderResults == 0){

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

Core.tapOnVoting = function (event){
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

Core.holdOnVoting = function (event){
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
// as per trello 45 getting all the game rules here
Game = {};

Game.callHashRepublicStartUp = function (){
    Session.set("keyword",get("keyword"));
    Deps.autorun(function(){
        CLIENTID = Session.get("clientid");    
    })

    Deps.autorun(function(){
        $("#leaderSection").css({"border":"block"});
        var keyword = Session.get("keyword");
        console.log("deps autorun " +keyword);
        if(keyword){
            $(".hashKeyword").html("#"+keyword);
            $("#surveybig").html("");
            Game.preRenderResults();
            if(preload[keyword] && preload[keyword].length != 0){
                console.log("preloading");
                Game.renderResults(preload[keyword],null,null,keyword);                
            }
            else{
                console.log("serverloading");
                Meteor.call("getResult",keyword,CLIENTID,++App.pageCount,function(err,data){
                    Game.renderResults(data,null,null,keyword);
                });
            }
            
            set("keyword",keyword);
        }
        else{
            $(".hashKeyword").html("");
        }
    })
}

Game.preRenderResults = function (){
        $("#surveybighandle").hammer().off("tap");
        $("#surveybighandle").hammer().on("tap",App.onclickopencloseSurvey);
    }

Game.renderResults = function (data,loadMoreFlag,newerFlag,keywordArg){
        // if(keywordArg != Session.get("keyword")){
        //     console.log("Getting old data");
        //     return;
        // }
        //setTimeout(function() {
        
           // }, 1000);
        console.log("load more " +loadMoreFlag);
        // console.log(data)
        if(!data){            
            $("#leaderSection").css({"border":"none"});
            return;
        }
        var clientid = Session.get("clientid");
        $(".loading").show();
        if($("#surveybig").length == 0 && clientid == null && clientid == undefined){
            setTimeout(function(){Game.renderResults(data,loadMoreFlag,newerFlag,keywordArg)},250);
            return;
        }
        // console.log(clientid +" client o renderResults")
        // console.log(keywordArg +" keyword o renderResults")
        if(!loadMoreFlag){
            $("#surveybig").html("");
            App.cacheData(data);
            
            // prevLoad = curLoad;
            // curLoad = data;
            data = App.divOldNew(data);

        }
        else{
            
        }
        var button = null;
        var newElement = null;
        var currentData = null;
        var showFlag = false;
        var upp=null;
        // var brforeloginwidth=$("#beforeLogin").width()/100;//CREATE ERROR
        // var brforeloginheight=$("#beforeLogin").height()/100;//CREATE ERROR
        // $(".allLeaderSection").css({"width":brforeloginwidth*12,"height":brforeloginwidth*12,"top":brforeloginheight*25,"left": brforeloginwidth*1.5});  
       
        // $("#status").width(brforeloginheight*6);
        // $("#status").height(brforeloginheight*6);
        
        // $("#keywords").css({"top":brforeloginheight*9}); 
        
        // $(".notificationBar img").height(brforeloginheight*8);
        // $(".notificationBar img").width(brforeloginheight*8);

        // $(".tapToShow").remove();    1058        
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
            if(i==il)
             $("#leaderSection").css({"border":"none"});
            if(!currentData)
                continue;
            if(currentData.countNew){
              // console.log("currentData"+currentData.total)
              // console.log("currentData"+currentData.countNew)
              $("#NweImageAdded i").text(" "+currentData.countNew);
              var oldcount = currentData.total - currentData.countNew;
              $("#loadMoreImg i").text(" "+oldcount);
            }
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
                +'<i class="big bullhorn icon" style="margin-left: 0px"></i><mark>Share</mark></div>'
                +'<div id="outer" class="ui warning progress">'
                +'<div class="inner"  id="verticalprogress"></div> <hr style="height:100%;width:2px;margin-bottom:-8px;padding:0px;">'
                +'</div>'
                +'<div id="inner-inner"><i class="big thumbs up icon" style="margin-left: 0px;"></i><mark>Like</mark></div>'   
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
               
            }else{
                var element = $("#surveybig").append(newElement); 
            }
            for(j=0,jl=currentData.votes.length;j<jl;j++){
                // console.log(currentData.votes[j].followid +" " +Session.get("clientid") +" " +(currentData.votes[j].followid == Session.get("clientid")))
                if(currentData.votes[j].followid == clientid){
                    showFlag = true;
                }
                // this only one time
                App.appendVotesManuallyHash(currentData.keyword.likeid,currentData.votes[j])
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

        setTimeout(App.surveyUp,500);
       
        $(".hashFeed").hammer().off("tap");  
        $(".hashFeed").hammer().on("tap",App.tapOnBigFeedSurvey);

        $(".hashFeed img").hammer().off("doubletap");  
        $(".hashFeed img").hammer().on("doubletap",App.likeOnInstagram);

        $(".hashFeed").hammer().off("hold");
        $(".hashFeed").hammer().on("hold",App.holdOnBigFeedSurvey);

        $(".hashFeed img").hammer().off("dragleft swipeleft",App.onRemoveImage);
        $(".hashFeed img").hammer().on("dragleft swipeleft",App.onRemoveImage);

        $(".hashFeed img").unbind("error",App.onImageError)
        $(".hashFeed img").bind("error",App.onImageError)
        
        $(".submitComment").hammer().off("tap");  
        $(".submitComment").hammer().on("tap",App.tapOnSubmitComment);

        $("#loadMoreImg").hammer().off("tap");  
        $("#loadMoreImg").hammer().on("tap",App.tapOnloadMoreImg);

        $(".voting").hammer().off("tap");  
        $(".voting").hammer().on("tap",App.tapOnVoting);

        $(".voting").hammer().off("hold");  
        $(".voting").hammer().on("hold",App.holdOnVoting);

        $("#surveybighandle").hammer().off("tap");
        $("#surveybighandle").hammer().on("tap",App.onclickopencloseSurvey);

       
        $("#NweImageAdded").hammer().off("tap");
        $("#NweImageAdded").hammer().on("tap",App.surveyNewer);
       
        $("#totalimages").hammer().off("tap",App.surveyUp);
        $("#totalimages").hammer().on("tap",App.surveyUp);
       
        $("#toComeimages").hammer().off("tap");
        $("#toComeimages").hammer().on("tap",App.surveyDown);
        
        $("#testButton").hammer().off("tap");
        $("#testButton").hammer().on("tap",Game.renderNewFechtedData);
        var height = $(".hashFeed").css("width");
        $(".lowImg").css("height",height);
        Game.getNewImagesForThisKeyword();
    }


Game.getNewImagesForThisKeyword = function (){
        var keyword = Session.get("keyword");
        var clientid = Session.get("clientid");
        if(!(keyword && clientid))
            return;
        $(".leaderSection").css({"border-image":"none"});
        console.log("getNewDataPreload" +" " +clientid +" " +keyword);
        setTimeout(function(){
            Meteor.call("getNewDataPreload",keyword,clientid,function(err,data){
                //App.fetchNewData = {};
                App.fetchNewData[keyword] = data;
            });
        },500);
        // $(".leaderSection").css({"border":"none"})
    }

Game.renderNewFechtedData = function (){
        var likeidArray = [];
        var keyword = Session.get("keyword");
        var clientid = Session.get("clientid");

        var data = App.fetchNewData[keyword];
        if(!data)
            return;
        console.log("renderNewFechtedData " +" " +clientid +" " +keyword)
        //console.log(data);
        Game.renderResults(data,false,true);
        App.fetchNewData[keyword] = null;
        var currentLikeid = null;
        for(var i=0,il=data.length;i<il;i++){
            var currentLikeid = data[i].likeid;
            if(currentLikeid)
                likeidArray.push(currentLikeid);
        }
        Meteor.call("getNewDataUpdates",keyword,clientid,likeidArray,function(err,data){
            
        });
    }
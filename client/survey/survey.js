var guestid = null;
if(!window["App"])
    App ={};
Router.map(function () {

    this.route('survey', { 
        path: '/survey/:user',
        template: 'survey',
        data : function (){
            // nicolsondsouza
            guestid = get("clientid");
            if(!guestid)
            guestid = get("survey")
            
            if(!guestid){
                guestid = "survey" + Random.id();                
            }
            console.log(guestid)
            Session.set("clientid",guestid);
            set("survey",guestid);
            Meteor.documentReady();
            Meteor.suscribeMeteor(guestid);
            var param = this.params;
            var username = param.user;
            
            Meteor.call("getUserIdFromUsername",username,function(err,data){
                if(data){
                    //console.log(data);
                    Meteor.subscribe("votesimgs",data._id);
                    mainSurvey = data._id;
                    Session.set("mainSurvey",data._id);
                    Session.set("surveyPic",data.profile_picture);
                    // Votes.find({"followid":Session.get("mainSurvey")}).observe({
                    //     "added" : function(first){
                    //         console.log("first votes");
                    //     }
                    // })
                    Meteor.call("getsurvey",mainSurvey,function(err,data){
                        if(err)
                            console.log("err"+err)
                        if(data){
                            $("#surveybig").html("");
                            for(var i=0;i<=data.length;i++){
                                //console.log(data.length)
                                if(data[i])
                                if(data[i].likeid)
                                    if(data[i].low){
                                        $("#surveybig").append(getFeedsHTML(data[i].likeid,data[i].low));
                                        Meteor.subscribe("votes",data[i].likeid);
                                    }
                                    Meteor.subscribe("votes",$(".bigFeed:first").attr("likeid"));
                            }
                            $(".bigFeed").hammer().off("tap");
                            $(".bigFeed").hammer().on("tap",tapOnBigFeedSurvey);  
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
                            
                        }
                    });                    
                }
                Meteor.subscribe("votesimgs",data._id);
            });

        }
    }); 
});
Deps.autorun(function(){
    if(Session.get("chatid"))
    Meteor.subscribe("votes",$(".bigFeed:first").attr("likeid"));
})

var flagVoteorRec=false;
function set(key,value){
    return window.localStorage.setItem(key,value);
}
function get(key){
    return window.localStorage.getItem(key);
}
// scpoint
function tapOnBigFeedSurvey(event){
    currentSurveyBig = $(this);
    var x = event.gesture.center.pageX;
    var y = event.gesture.center.pageY;
    // y = y - $(this)[0].offsetTop;
    var offset = $(event.currentTarget).offset();
    var w = $("#surveybig");
    
    // console.log(offset.top +" " +w.scrollTop() +" " +y)
    var height = $(this).height();
    var width = $("body").width();
    var bigheight = $(".quadrant").height();          
    var left = (x/width) * 100;
    var top = (y/height) * 100; 
    var leftpx = x;
    top = y - offset.top;
    var toppx = top;
    top = (top/height) * 100;
    left = Math.round(left) ;
    top = Math.round(top) ;
    
    var likeid = $(this).attr("likeid")
    progress2(left, $('#hprogressBar'),top, $('#outer'),likeid);
    
    Session.set("currentBig",likeid)
    var clientid = Session.get("clientid");
    var votepic = null;
    if(clientid.match("survey")){
        votepic = "/images/face.jpg";
    }
    else{
        votepic = get("profile_picture");
    }
    
    voteFlag = false;
    var date = new Date().getTime();
    // console.log(likeid +" " +Session.get("currentBig"));
    top+=40;
    var VotesInsert = {"checked":false,"place":"","profile_picture":votepic, "followid": Session.get("clientid"),"likeid":likeid ,"left": left,"top": top,"date" : date};
    // currentSurveyBig.append(getVoteHTML(VotesInsert.left,VotesInsert.top,"%"))
    var cursorBig = Votes.findOne({"likeid":likeid,"followid":Session.get("clientid")});
    var bigFeed = $(".voting")
    if(cursorBig){
         var voteloc =$(".voting[votingid='" +cursorBig._id +"']")
        if(voteloc.length==0){
            Votes.update({"_id":cursorBig._id},{$set :{"left":VotesInsert.left,"top":VotesInsert.top,"date":VotesInsert.date}});
            appendVotesManually(this);
        }
        else{
            Votes.update({"_id":cursorBig._id},{$set :{"left":VotesInsert.left,"top":VotesInsert.top,"date":VotesInsert.date}});
            voteloc.css({"left":left+"%","top":VotesInsert.top-40+"%"})
        }
        var place = App.checkQuadrant(left,top);
        App.bug("place " +place);
    } 
    else{
            currentMoveVote = Votes.insert(VotesInsert);
            appendVotesManually(this,VotesInsert);
    }
    
    currentSurveyBig = currentSurveyBig.next(".bigFeed");
    setTimeout(pageScroll,2000);
}

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
var currentSurveyBig = null;
var bigsurveyHeight1=0;
function pageScroll() {
    bigsurveyHeight = $(".quadrant").height();
    bigsurveyHeight1=bigsurveyHeight1+bigsurveyHeight;
    //console.log(currentSurveyBig.offset().top);
    //$("#div").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
    // $("#surveybig").transition({scrollTop:currentSurveyBig.position().top - 50}, '500', 'swing');
    document.getElementById('surveybig').scrollTop = bigsurveyHeight1;
    //$("#surveybig").transition({ scrollTop: 200 }, 7000);
    //document.getElementById('surveybig').transition({ scrollTop: 0 }, "slow");
}   

function getFeedsHTML(likeid,low){
    if($(".bigFeed[likeid='" +likeid +"']").length != 0)
        return null;

    return '<div class="bigFeed bigSecondFeed medium ui image" likeid='+likeid+' style="margin-top:50px;"> '
        +'<img src='+low+'>'
        +'<div class="quadrant secondquadrant" id='+likeid+'>'
            +'<div id="hprogressBar" class="ui failed progress"><div></div><hr style="height:2px;width:100%;margin-bottom:-8px;padding:0px;margin-top: 0px;border-top-width: 0px;" /></div>'
            +'<div id="inerhprogressBar"><i class="big bullhorn icon"style="margin-left: 0px"/></div>'
            +'<div id="outer" class="ui warning progress"><div class="inner"  id="verticalprogress"></div> <hr style="height:100%;width:2px;margin-bottom:-8px;padding:0px;" /></div>'
            +'<div id="inner-inner" onmousedown :return false;><i class="big thumbs up icon" style="margin-left: 0px;"onmousedown :return false;/></div>'  
        +'</div>'
}

function progress2(percent, $element, percent1, $element1,likeid) {
        var addstring="div#"+likeid
        var barDiv =$(addstring).children("#hprogressBar");
        var hprogressBar =  percent+5;

        $(addstring).find("div#inerhprogressBar").transition({ left: hprogressBar + "%" }, 500);
        $(barDiv).find("div").transition({ width: hprogressBar + "%" }, 500)
        promoteper=100-percent1;
        cursorlove=percent1;
        $(addstring).find("#inner-inner").css("top",cursorlove+"%");
        $("#inner-inner").transition({"top":cursorlove+"%"});
        $(addstring).find("#verticalprogress").css("height",promoteper +"%")

        $(addstring).find("#outer")
        .transition({"opacity":"0.0"},500,"linear")
        .transition({"opacity":"1.0"},100,"linear")
        $(addstring).find(".inner")
        .transition({"opacity":"0.0"},500,"linear")
        .transition({"opacity":"1.0"},100,"linear")
        $(addstring).find("div#hprogressBar")
        .transition({"opacity":"0.0"},500,"linear")
        .transition({"opacity":"1.0"},100,"linear")
        $(barDiv).find("div")
        .transition({"opacity":"0.0"},500,"linear")
        .transition({"opacity":"1.0"},100,"linear")
        $(addstring).find("div#inerhprogressBar")
        .transition({"opacity":"0.0"},1,"linear")
        .transition({"opacity":"1.0"},100,"linear")
        $(addstring).find("#inner-inner")
        .transition({"opacity":"0.0"},500,"linear")
        .transition({"opacity":"1.0"},100,"linear")
        
}
//////////////////// SLIDER START //////////////////////////

function promoteProgDrag(event){
    var currBig=currentSurveyBig;
    var offset = $(currBig).offset();
    var y = event.gesture.center.pageY; 
    var top = y - offset.top;
    //var height = $("#Main").height();           
    //var bigheight = $(".quadrant").height();           
    //var top = (y/height) * 100; 
    //var bigtop = (y/bigheight) * 100;           
    //top = Math.round(top) - 2;
    bigtop = Math.round(top) - 5;
    promoteper=100-(bigtop-63);
    if(promoteper<=100){
        $("#verticalprogress").css("height",promoteper +"%");
        var cursorlove=100-(promoteper+2);
        $("#inner-inner").css("top",cursorlove+"%");
            console.log(cursorlove+"/"+currBig)
       // console.log(cursorlove+"/"+promoteper)     
        var voteper=promoteper-5;
        // if(flagVoteorRec){
        //     $(".recomm[recomid='"+currentMoveRecc +"']").css("top",top+"%");
        // }else{
        //     $(".voting[votingid='"+currentMoveVote +"']").css("top",top+"%");
        // }
    }
}
function promoteProgDragend(){
    // try{
    //     var cursorVotes=null;
    //     if(flagVoteorRec){
    //         cursorVotes = Feed.findOne({"_id":currentMoveRecc});
    //         if(cursorVotes){ 
    //             var pos= $(".recomm[recomid="+currentMoveRecc+"]").css("top");
    //             var y=pos.substring(0, pos.length - 2);
    //             var height = $("#Main").height();
    //             var top = (y/height) * 100;
    //             top = Math.round(top);
    //             Feed.update({"_id":cursorVotes._id},{$set :{"top": top}});
    //             Me.update({"_id":Session.get("clientid")},{$inc:{"movedrecomm":1}})
    //         }
    //     }else{
    //         cursorVotes = Votes.findOne({"_id":currentMoveVote})
    //         if(cursorVotes){  
    //         var pos= $(".voting").css("top");
    //         var y=pos.substring(0, pos.length - 2);
    //         var height = $("#Main").height();
    //         var top = (y/height) * 100;
    //         top = Math.round(top);                  
    //         Votes.update({"_id":cursorVotes._id},{$set :{"top": top}});
    //         Me.update({"_id":Session.get("clientid")},{$inc:{"movedme":1}})  
    //         }
    //     }  
    //     $("#inner-inner").css({"height":"33px","width":"42px","font-size": "1em"});   
    // }catch(error){
    //     console.log(error);
    //     ErrorUpdate.insert({"error":error,"date": new Date(),"side":"client","function" : "promoteProgDragend"});
    // }
}
function promoteProgDragstart(event){
    event.preventDefault();
    if(event.gesture)
    event.gesture.preventDefault();
    $("#inner-inner").css({"height":"65px","width":"78px","font-size": "2em"});
    $("#outer").transition({"opacity":"1.0"},500,"linear");
}
function loveProgDrag(event){
    event.preventDefault();
    if(event.gesture)
    event.gesture.preventDefault();
    var x = event.gesture.center.pageX;
    var width = $("#surveybig").width();      
    var leftper= (x/width) * 100;
    percent = Math.round(leftper);
    if(leftper<=90){
        $("#inerhprogressBar").css("left",percent +"%");
        $("#hprogressBar").find('div').css("width",percent +"%")//.html("<i class='big thumbs up icon'/>&nbsp&nbsp");
        // if(flagVoteorRec){
        //     $(".recomm[recomid='"+currentMoveRecc +"']").css("left",percent+"%");
        // }else{
        //     $(".voting[votingid='"+currentMoveVote +"']").css("left",percent+"%");
        // }
    }
}
function loveProgDragend(event){
    // try{
    //     event.preventDefault();
    //     if(event.gesture)
    //     event.gesture.preventDefault();
            
    //     var cursorVotes=null;
    //     if(flagVoteorRec){
    //         var pos = $(".recomm[recomid="+currentMoveRecc+"]").css("left");
    //         if(!pos)
    //             return;
    //         var x=pos.substring(0, pos.length - 2);
    //         var width = $("#Main").width();
    //         var left = (x/width) * 100;          
    //         left = Math.round(left);
    //         cursorVotes = Feed.findOne({"_id":currentMoveRecc});
    //         if(cursorVotes){ 
    //         Feed.update({"_id":cursorVotes._id},{$set :{"left": left}});
    //         Me.update({"_id":Session.get("clientid")},{$inc:{"movedrecomm":1}})
    //         }
    //     }else{

    //         var pos = $(".voting").css("left");
    //         if(!pos)
    //             return;
    //         var x=pos.substring(0, pos.length - 2);
    //         var width = $("#Main").width();
    //         var left = (x/width) * 100;          
    //         left = Math.round(left);
    //         cursorVotes = Votes.findOne({"_id":currentMoveVote})
    //         if(cursorVotes){                    
    //             Votes.update({"_id":cursorVotes._id},{$set :{"left": left}});
    //             Me.update({"_id":Session.get("clientid")},{$inc:{"movedme":1}})               
    //         }
        
    //     }
    //     $("#inerhprogressBar").css({"height":"38px","width":"42px","font-size": "large","top": "90%"});
    // }catch(error){
    //     console.log(error);
    //     ErrorUpdate.insert({"error":error,"date": new Date(),"side":"client","function" : "loveProgDragend"});
    // }
    
}
function loveProgDragstart(){
    event.preventDefault();
    if(event.gesture)
    event.gesture.preventDefault();
    $("#inerhprogressBar").css({"height":"57px","width":"65px","font-size": "x-large","top": "84%"});
}
//////////////////// SLIDER ENDS //////////////////////////


// Survey starts

    Template.eachBig.perbig = function(){
        return Votes.find({"followid":Session.get("mainSurvey")});
    }
    Template.eachBig.rendered = function(){
            if(firstTimeLoginFlag){
                currentSurveyBig = $(".bigFeed:first");
                firstTimeLoginFlag = false;
            }
            
            $(".bigFeed").hammer().off("tap");
            $(".bigFeed").hammer().on("tap",tapOnBigFeedSurvey);

    }
    Template.youiestheader.surveyPic = function(){
        return Session.get("surveyPic");
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
// survey ends
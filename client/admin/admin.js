Router.map(function () {
    
    this.route('admin', {
        path: '/admin',
        template: 'admin',
        data : function (){
           // Meteor.documentReady();
           //console.log()
           Session.set("clientid",get("clientid"));
           //console.log(Session.get("clientid"))
           Meteor.documentReady();
        }
    }); 
});
if(window["App"] === undefined)
    App = {};
function setAdminParameters(){
    var ClientId = Session.get("clientid");
    var currentDiv = null;
    if(App.isAdmin(ClientId)){        
        // console.log(appendmenu);
        $("#adminPanel").show();
        $("#gamemenu").append('<div class="item" id="admin"> Admin </div>');
        $("#admin").append('<div class="menu" id="adminCategory"> </div>');
        var appendmenu = $("#adminCategory");
        $(appendmenu).append('<a id="admin" class="menu"><i class="adn icon"></i> Admin Panel </a><br><br>');       
        $(appendmenu).append('<a id="emails" class="menu"><i class="mail icon"></i> Email </a><br><br>');       
        $(appendmenu).append('<a id="startContest" class="menu"> Start Contest </a><br><br>');        
        $("#admin").hammer().on("tap",function(){$("#adminPanel").show();});
        $("#adminPanelCloseButton").hammer().on("tap",function(){$("#adminPanel").hide();});
        $("#emails").hammer().on("tap",onEmailSend);
        // $("#emailPreview").hammer().on("tap",onClickEmailPreview);
        // $("#startContest").hammer().on("tap",onClickStartContest);
        // $(".bigmenu").hammer().off("tap",onBigMenuClick);
        // $(".bigmenu").hammer().on("tap",onBigMenuClick); 
        // $(".menu").hammer().off("tap",openCloseSnap); 
        // $(".menu").hammer().on("tap",openCloseSnap);       
    }
    else{
        $("#admin").remove();
        $("#emails").remove();
    }
}
App.setAdminParameters = setAdminParameters;

function onEmailSend(){
    $("#emailFormat").show();
    $("#emailDone").hammer().on("tap",function(){
        $(this).remove();
        $("#emailFormat").hide();
        var message = $("#emailHeader").html();
        Meteor.call("sendNewsLetters",message,function(err,data){
            toast(i18n.__("batchstarted"));
            //toast("batch started");
            // console.log(err);
            // console.log(data);         
        });        
    }); 
    App.leadersboard();
    App.knowsYouBetter(Session.get("clientid"));
    App.youKnowsBetter(Session.get("clientid"));     
}
App.onEmailSend = onEmailSend;

function isAdmin(clientid){
    if("625237041" == Session.get("clientid") || "363620479" == clientid || "487690035" == clientid)
        return true;
    else
        return false;
}
App.isAdmin = isAdmin;

function set(key,value){
    return window.localStorage.setItem(key,value);
}
function get(key){
    return window.localStorage.getItem(key);
}

function leadersboard(){    
    $("#emailLeadersboard").html("");
    $("#emailLeadersboard").append("<div style='height:10%;width:100%;position:relative;'> leadersboard </div>");
    var cursorRecommend = Me.find({},{sort: {"score" : -1},limit:3});    
    var strHTML = "<div style='height:90%;width:100%;position:relative;'> "
    cursorRecommend.forEach(function(data){
        //console.log(data);
        strHTML += createString(data.username,data.profile_picture,data.score);            
        
    });
    strHTML +="</div>";
    $("#emailLeadersboard").append(strHTML);
}
App.leadersboard = leadersboard;

function knowsYouBetter(clientid){
    $("#emailKnowYouBetter").html("");
    $("#emailKnowYouBetter").append("<div style='height:10%;width:100%;position:relative;'> Who knows you better? </div>");
    var cursorRecommend = Feed.find({"followid":clientid},{sort :{"distance":-1}, limit:3});
    var strHTML = "<div style='height:90%;width:100%;position:relative;'> "
    cursorRecommend.forEach(function(data){
        //console.log(data);
        strHTML+= createString(data.whousername,data.who,data.distance);
    });
    strHTML +="</div>";
    $("#emailKnowYouBetter").append(strHTML);
}
App.knowsYouBetter = knowsYouBetter;

function youKnowsBetter(clientid){
    $("#emailYouKnowBetter").html("");
    $("#emailYouKnowBetter").append("<div style='height:10%;width:100%;position:relative;'> Whom you know better? </div>");
    var cursorRecommend = Feed.find({"whoid":clientid},{sort :{"distance":-1}, limit:3});
    var strHTML = "<div style='height:90%;width:100%;position:relative;'> "
    cursorRecommend.forEach(function(data){
        //console.log(data);
       strHTML += App.createString(data.followusername,data.profile_picture,data.distance);            
       
    });
    strHTML +="</div>";
     $("#emailYouKnowBetter").append(strHTML);
}
App.youKnowsBetter = youKnowsBetter;

function onClickEmailPreview(){
    var headerMessage = $("#emailHeaderMessage").val();
    $("#emailHeaderMessage").remove();
    $(this).remove();
    $("#emailHeader").html(headerMessage);

}
App.onClickEmailPreview = onClickEmailPreview;

function createString(username,picture,score){
    return '<div style="width: 30%;position: relative;float: left;margin-left: 2%;margin-top: 1%;height: 90%;"> <a href="http://instagram.com/' +username +'"> <img style="width: 100%;height: 80%;" src="' +picture  +'"></a><div> ' +score +' </div></div>'
}
App.createString = createString;

// Deps.autorun(function(){
//     try{
//         if(Session.get("clientid")){
//             // setAdminParameters();
//         }
//     }
//       catch(error){
//         console.log(error);
//         ErrorUpdate.insert({"error":error,"date": new Date(),"side":"client","function" : "clientid.autorun"});
//       }

// });

    ///Admin Templates//

Template.admin.totalUser = function(){
    return Me.find({}).count();
}
Template.admin.users = function(){
    return Me.find({},{sort : {"dalreadyloggedin": -1}});
}
//Template.admin.events ({
//    "click #adminPanelCloseButton" : ,
//    "click #addKeywordButton" : 
//})
Template.admin.rendered = function(){
    // console.log("admin.rendered");
    $("#adminPanel").show();
    $("#admin").hammer().off("tap")
    $("#admin").hammer().on("tap",function(){$("#adminPanel").show();});
    
    $("#showList").hammer().off("tap");
    $("#showList").hammer().on("tap",function(){
        $("#adminTableCat").hide();
        $("#adminListCat").css({"display":"block"});
        // console.log("click");
    });
    $("#showTable").hammer().off("tap");
    $("#showTable").hammer().on("tap",function(){
        $("#adminListCat").hide();
        $("#adminTableCat").css({"display":"block"});
        // console.log("click");
    });
    $("#adminPanelCloseButton").hammer().off("tap");
    $("#adminPanelCloseButton").hammer().on("tap",function(){
        $("#adminPanel").hide();
    });
    $("#addKeywordButton").hammer().off("tap");
    $("#addKeywordButton").hammer().on("tap",function (){
      var tempKeyword = null;
      tempKeyword = $("#addKeywordText").val();
      //console.log(tempKeyword);
      if(!tempKeyword)
        return;
      SponserKeyword.insert({"keyword":tempKeyword,"date": new Date()})
      $("#addKeywordText").val('');
    });
    $("#emailClose").hammer().off("tap");
    $("#emailClose").hammer().on("tap",function (){$("#emailFormat").hide();});
    var adminTotalElement = $(".adminTotal th");
    var adminTotalCount = []
    $(".adminTable").each(function(index,element){
        var children = $(element).children("td");
        for(var i=3,il=children.length;i<il;i++){
            if(!adminTotalCount[i])
                adminTotalCount[i] =0;
            adminTotalCount[i] += Number($(children[i]).text());
            //console.log(adminTotalCount[i])
            //console.log(adminTotalCount[i])
        }            
    });        
    for(var i=0,il=adminTotalCount.length;i<il;i++){            
        $(adminTotalElement[i]).text(adminTotalCount[i]);
    }                
}
Template.admin.isAdmin = function(){        
    var clientid = Session.get("clientid");
    console.log(clientid)
    if("625237041" ==   clientid||  "363620479"  == clientid || "487690035" == clientid){
        return true;
    }
    return false;
}
Template.editkeyword.eachkeyword = function(){
    try{
        return SponserKeyword.find({},{sort : {"date": -1}});
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.editkeyword.eachkeyword"});
    }
}
Template.editkeyword.eachkeyword = function(){
    try{
        return SponserKeyword.find({});
    }
    catch(error){
        console.log(error);
        ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.editkeyword.eachkeyword"});
    }
}
Template.editkeyword.events({
    "click li" : function(event){
        SponserKeyword.remove({"_id":this._id});
    }
});
// Template.keyword.eachkeyword = function(){
//         try{
//             var defineKeyword=SponserKeyword.find({},{sort : {"date": -1}});
//             if(defineKeyword){
//               return defineKeyword;
//             }else{
              
//             }
            
//         }
//         catch(error){
//             console.log(error);
//             ErrorUpdate.insert({"error":error,"clientid":Session.get("clientid"),"date": new Date(),"side":"client","function" : "Template.keyword.eachkeyword"});
//         }
//     }  
    // Admin Template Ends//
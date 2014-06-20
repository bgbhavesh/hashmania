
var nextCouter = 0;
var message = ["GOOD & HUSH","GOOD & LOUD","STAY AWAY & HUSH","STAY AWAY & LOUD"];
function tutorial(){
    console.log("tutorialcalled");  
    $("#tutorial").css({"display": "block","z-index":"2"});
    animateSection(1);
    $("#popup").bind("click",nextAnimation)
}

function animateSection(count){
  	if(count == 5){
  		setTimeout(function(){  			
	  		$("#tutorialSec4").css({"opacity":"1.0"});
		  	$("#tutorialSec4 div").css({"display":"block","opacity":"0.0"})
			animateBig(0);
  		},1500)
		return;
	}
  $("#tutorialSec" +count).animate({"opacity":"1.0"},1500,function(){
      $("#tutorialSec" +count).animate({"opacity":"0.0"});
      animateSection(++count);
  });
}

function animateBig(count){	
	if(count == 4){
		animatateClickOnLike();		
		return;								
	};
	$("#popup").show("slow");
	var text = "If you want to be " + message[count] +".<br> Place your Face here.";
	$("#popupMessage").html(text);
  	$("#" +count +"Q").animate({"opacity":"1.0"},3000,function(){
  		$("#popup").hide();
		$("#" +count +"Q").animate({"opacity":"0.0"});					          
		animateBig(++count)		
  });	
	
}
function animatateClickOnLike(){
	$("#tutorial").css({"display": "none","z-index":"0"});
	$("#tap").css({"display": "block"});
	$("#tap").animate({"left": "15%", "top": "30%"},"slow",function(){
		$("#popup").show("slow");
		$("#popupMessage").text("Tap your Feeds");
	})
}
function animateClickOnFollows(){
	$("#tap").animate({"left": "9%", "top": "15%"},"slow",function(){
		$("#popup").show("slow");
		$("#popupMessage").text("Tap yourself to be selected");
	})	
}
function animateClickOnBig(message){
	console.log("big");
	$("#tap").animate({"left": "30%", "top": "58%"},"slow",function(){
		$("#popup").show("slow");
		$("#popupMessage").html(message);
	})	
}
function animateRecommendation(){
	$("#tap").animate({"left": "27%", "top": "16%"},"slow",function(){
		$("#popup").show("slow");
		$("#popupMessage").text("Tap your Follows");		
	})	
}
function nextAnimation(){
	console.log(nextCouter);
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
		$("#popupMessage").text("For more information see the instruction panel");		
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
	tutorialEnds();	
	nextCouter++;
}
function tutorialEnds(){
	console.log("tutorialEnds");
	$("#tutorial").css({"display": "none","z-index":"0"});    	
}
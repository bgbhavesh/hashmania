Joyride = {};

Joyride.rideSwitch = function(index){
	console.log("rideSwitch " +index)
	switch(index){
        case 1:
            App.closeSurvey();
        break;
    }
}

Joyride.onStart = function(){
	$("#joyRideTipContent").joyride({
        "postStepCallback" : function(index, tip){
            Joyride.rideSwitch(index);
        }
    });
    $("#joyRideTipContent").joyride({
        "postStepCallback" : function(index, tip){
            Joyride.rideSwitch(index);
        }
    });
}
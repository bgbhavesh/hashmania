var snapFlag = false;
function snapy(){
  $("#snapButton").click(openCloseSnap)
}
function openCloseSnap(){
    if(snapFlag){        
        $("#snapy").animate({"width":"0%"},"slow");
        $("#snapButton").animate({"left":"0%"},"slow");
    }
    else{
      $("#snapy").animate({"width":"90%"},"slow");
      $("#snapButton").animate({"left":"90%"},"slow");
    }
    snapFlag = !snapFlag;
}
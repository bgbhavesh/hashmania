// Core Package modification for phonegap
// Oauth package
 Package.oauth.Oauth.showPopup =  function (url, callback, dimensions) {                          
    var popup = openCenteredPopup(                                                  
            url,                                                                          
            (dimensions && dimensions.width) || 650,                                      
            (dimensions && dimensions.height) || 331,null,callback                                      
            );                                                                              
        if(!Session.get("phonegap"))                                                    
            var checkPopupOpen = setInterval(function() {                                   
        try {  
            // console.log("my show popup interval")                                                                       
            var popupClosed = popup.closed || popup.closed === undefined;               
        } catch (e) {                                                                 
            return;                                                                     
        }                                                                             
        if (popupClosed) {                                                            
            clearInterval(checkPopupOpen);                                              
            loginOnceStateReady(null,callback);
            //callback();                                                                 
        }                                                                             
    }, 100);                                                                        
};                                                                                
                                                                                  
                                                                                  
var openCenteredPopup = function(url, width, height,state,callback) {
    state = callback;             
    var screenX = typeof window.screenX !== 'undefined'                             
    ? window.screenX : window.screenLeft;                                     
    var screenY = typeof window.screenY !== 'undefined'                             
    ? window.screenY : window.screenTop;                                      
    var outerWidth = typeof window.outerWidth !== 'undefined'                       
    ? window.outerWidth : document.body.clientWidth;                          
    var outerHeight = typeof window.outerHeight !== 'undefined'                     
    ? window.outerHeight : (document.body.clientHeight - 22);                 
    var left = screenX + (outerWidth - width) / 2;                                  
    var top = screenY + (outerHeight - height) / 2;                                 
    var features = ('width=' + width + ',height=' + height +                        
    ',left=' + left + ',top=' + top + ',scrollbars=yes');           
    // console.log(callback)                                                                               
    var newwindow = null;   
    if(window['closewindow'])
    window['closewindow'].close();                         
    if(Session.get("phonegap")){ 
        url = encodeURI(url);
        // if(App.isAdmin(Session.get("clientid"))){
        //   {
        //       alert(url);

        //   }
        // }      
        newwindow = window.open(url, '_blank', 'location=yes');
    }
    else{  
        newwindow = window.open(url, '_black', features);
    }
    window["mystate"] = state;
    window["mycallback"] = callback;
    window['closewindow'] = newwindow;
    window['closewindow'].addEventListener('loadstop', function(event) {   
    if(event.url.indexOf(Meteor.settings.public.redirectClose) == 0){
        window["itriggered"] = true;  
        window['closewindow'].close();
        window['closewindow'] = null;
        // alert("loadstop")
        loginOnceStateReady(null,callback);
        // window["mytryLoginAfterPopupClosed"](window["mystate"],window["mycallback"]);           
     }
    });
    window['closewindow'].addEventListener('loaderror', function(event) {             
        window["itriggered"] = true;  
        window['closewindow'].close();
        window['closewindow'] = null;
        // alert("loaderror")
        loginOnceStateReady(null,callback);
    });
    window['closewindow'].addEventListener('exit', function(event) {
        // window["mytryLoginAfterPopupClosed"](window["mystate"],window["mycallback"]);
        // alert("exit")
        window['closewindow'] = null;
        loginOnceStateReady(null,callback);
        window["itriggered"] = false;
    });
    if (newwindow.focus)                                                            
    newwindow.focus();                                                            
    return newwindow;                                                               
};                                                                                

Package.oauth.Oauth.initiateLogin = function (credentialToken, url, callback, dimensions) {     
    Package.oauth.Oauth.showPopup(                                                                
    url,                                                                          
    _.bind(callback, null, credentialToken),                                      
    dimensions                                                                    
    );                                                                              
}; 
// Oauth ends
// Core Package modification for phonegap

    // $("#loginButton,#loginwithInsta").hammer().off("tap",clickOnLoginButton);
    // $("#loginButton,#loginwithInsta").hammer().on("tap",clickOnLoginButton);

    // // $("#loginWithAppButton").hammer().off("tap",onLoginWithApp);
    // // $("#loginWithAppButton").hammer().on("tap",onLoginWithApp);

    // // $("#signupWithAppButton").hammer().off("tap",onLoginWithApp);
    // // $("#signupWithAppButton").hammer().on("tap",onLoginWithApp);

    // $("#seLoginThankyou").hammer().off("tap",onLoginWithTapmate);
    // $("#seLoginThankyou").hammer().on("tap",onLoginWithTapmate);

    // $("#seSignup").hammer().off("tap",onSignUpWithTapmate);
    // $("#seSignup").hammer().on("tap",onSignUpWithTapmate);

    // $("#seLoginLogin").hammer().off("tap",onLoginWithHashRepublic);
    // $("#seLoginLogin").hammer().on("tap",onLoginWithHashRepublic);

Login = {};

Login.onLoginWithHashRepublic = function(){
    var email = $("#seEmailLogin").val();
    var password = $("#sePassLogin").val();
    Meteor.call("loginWithHashRepublic",email,password,function(err,data){
        if(data){
            set("email",email);
            set("clientid",email);
            Session.set("clientid",email);
            set("welcomeAlert",true);
            set("profile_picture",data.face);
            // Session.set("profile_picture",data.instagramFace)
            set("password",password)

        }
        else{
            $("#seErrorLogin").removeClass("ui ignored warning message").addClass("ui error message");
            $("#errorMessage").text("Username or Password is Incorrect");
            // $("#seErrorLogin").css("display","block");
        }
    })
}

Login.onSignUpWithTapmate = function (){
	var email = $("#seEmail").val();
	var pass = $("#sePass").val();
	if(validateEmail(email)){
		set("email",email);
		set("clientid",email);
		CLIENTID = email;
		Session.set("clientid",email);
		set("profile_picture","/images/face.jpg");
		// Session.set("profile_picture","/images/face.jpg");
		welcomeAlertPopup();
		set("welcomeAlert",true);
		// $("#seError").css("display","none");
		// Accounts.createUser({"email":email,"password":pass}, loginWithTapmateCallbackFunction);
		// TapmateUser = email;
		Meteor.call("verifyHashEmail",email,function(){

		});
	}
	else{
		showLoginErrorMessage("not a valid email")
	}
}
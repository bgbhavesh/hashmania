Router.map(function () {
    this.route('picture', { 
        path: '/picture/:id',
        template: 'picture',
        data : function (){
            var param = this.params;
            
            if(!param.id){
                return;
            }
               
            
            // routingFunction(param.id);
            guestFlag = true;
            Session.set("clientid","guest");
            Session.set("actionFollow",null);
            Session.set("currentBig",param.id);
            Meteor.call("guestFeed",param.id)
            Meteor.subscribe("votes",Session.get("currentBig"));
            Meteor.subscribe("media", Session.get("currentBig"));
            
            // Meteor.subscribe("commentreceive",Session.get("currentBig"));
            Meteor.subscribe("recommtwo",Session.get("currentBig"),Session.get("clientid"));    
             Meteor.suscribeMeteor("guest"); 
        }
    });
    // this.route('profile', { 
    //     path: '/profile/:id',
    //     template: 'profile',
    //     data : function (){
    //         var param = this.params;
    //         if(!param.id)
    //             return
    //         if(isNaN(param.id)){
    //             Meteor.subscribe("mename",param.id);
    //             Meteor.call("getUserIdFromUsername",param.id,function(err,data){
    //                 if(data){
    //                     routingFunction(data._id);
    //                 }
    //             })
    //         }
    //         else{
    //             routingFunction(param.id);
    //         } 
    //     }
    // });
    this.route('email', { 
        path: '/email/:id',
        template: 'verify',
        data : function (){
            var param = this.params;
            console.log(param.id +" but guest user");
            var emailtoken = param.id;
            if(emailtoken){
                window.localStorage.setItem("emailtoken",emailtoken);
                Meteor.call("verifyPicture",emailtoken,function(err,data){
                    if(data){
                        console.log(data)
                        toast("you have been added in the group");
                        window.localStorage.setItem("clientid",data.clientid);
                        window.localStorage.setItem("likeid",data.likeid);
                        window.location.href = "/";
                    }
                    if(err){
                        console.log(err);
                        $("#emailmessage").html("Failed");
                    }
                })    
            }
        }
    });
    this.route('verify', { 
        path: '/verify/:id',
        template: 'verify',
        data : function (){
            var param = this.params;
            console.log(param.id +" but email");
            var emailtoken = param.id;
            if(emailtoken){
                Meteor.call("verifyemails",emailtoken,function(err,data){
                    if(data){
                        console.log(data)
                        $("#emailmessage").html(data);
                    }
                    if(err){
                        console.log(err);
                        $("#emailmessage").html("Failed");
                    }
                })    
            }
        }
    });

    });

Template.loginwithservies.rendered = function(){
    $("#loginWithInstagram").hammer().off("tap");
    $("#loginWithInstagram").hammer().on("tap",loginWithInstagram);

    $("#loginWithFacebook").hammer().off("tap");
    $("#loginWithFacebook").hammer().on("tap",loginWithFacebook);

    $("#loginWithGoogle").hammer().off("tap");
    $("#loginWithGoogle").hammer().on("tap",loginWithGoogle);
    
    
}
// app id 1469999833231618
// secret fbca837fd8bce281a1b781346399aaad
// client id c0f06585160bc1d80f064bdef92123c8

// http://localhost:3000/_oauth/instagram?close=close&code=965b416f7d8f49edac0a58c5f408e66f&state=64c164b5-a6c3-4738-a9c7-04725463a6d2
var querystring = Npm.require('querystring');
Meteor.Router.add('/facebook', 'GET', function() {
    var query = this.request.query;
    //console.log(query);
    App.facebook(query);
    return Handlebars.templates['close']();
    // return "first facebook";
});

App.facebook = function(query){
    //console.log(query);
    var result = null;
    var code = null,state = null;

    var config = {
            service: 'facebook',
            appId: App.getSettingVarialble("fbid"),
            secret: App.getSettingVarialble("fbsecret"),
            clientId : App.getSettingVarialble("fbclient"),
            scope : "basic,email,user_birthday,publish_actions,user_location,age_range"
        };
    if(query){
        result = query;
        if(result){
            code = result.code;
            state = result.state;
        }
    }
    //console.log(code)
    // return;
    var results = Meteor.http.get(
    "https://graph.facebook.com/oauth/access_token", {
      params: {
        client_id: config.appId,
        redirect_uri: App.getSettingVarialble("fbredirect"),
        client_secret: config.secret,
        code: result.code
      }
    });

    // console.log(results);
    var response = results.content;

    if (result.error) {
        throw new Error("Failed to complete OAuth handshake with Facebook. " +
        "HTTP Error " + result.statusCode + ": " + response);
    }
    var error_response;
    try {
        // Just try to parse so that we know if we failed or not,
        // while storing the parsed results
        error_response = JSON.parse(response);
    } catch (e) {
        error_response = null;
    }
    if (error_response) {
        throw new Error("Failed to complete OAuth handshake with Facebook. " + response);
    } else {
    // Success!  Extract the facebook access token and expiration
    // time from the response
    var parsedResponse = querystring.parse(response);
    var fbAccessToken = parsedResponse.access_token;
    var fbExpires = parsedResponse.expires;

    if (!fbAccessToken) {
        console.log("Failed to complete OAuth handshake with facebook " +
                      "-- can't find access token in HTTP response. " + response);
    }
        Me.update({"_id":state},{$set : {"facebooktoken":fbAccessToken,"facebookexpires":fbExpires}})
        var facebookInfo = {
            fbAccessToken: fbAccessToken,
            fbExpires: fbExpires
        };
        // console.log(facebookInfo);
        // console.log(state)
        // HASHREPUBLIC
            var data = Meteor.http.get("https://graph.facebook.com/me", {
                params: {access_token: facebookInfo.fbAccessToken}}).data;
            
            var facebookFace = getFacebookFace(data.id);

            

            // var cursorUserHashMania = UserHashMania.findOne({"emailtoken":state});
            // if(!cursorUserHashMania)
            //     cursorUserHashMania = UserHashMania.findOne({"_id":state});
            
            var cursorUserHashMania = UserHashMania.findOne({"facebookID":data.id});

            console.log(cursorUserHashMania)
            
            if(cursorUserHashMania){
                

                UserHashMania.update({"_id":cursorUserHashMania._id},{$set :facebookInfo});
                
                var update = {fbAccessToken: facebookInfo.fbAccessToken,fbExpires: facebookInfo.fbExpires,"facebookID":data.id,"facebookEmail":data.email,"facebookName":data.name,"facebookLink":facebookFace,"face":facebookFace,"state":state,"clientid":data.id,"email":data.email}

                // {"facebookID":data.id,"facebookEmail":data.email,"facebookName":data.name};
                
                // UserHashMania.update({"_id":cursorUserHashMania._id},{$set :update});                    
                            
                // update = {"facebookLink":facebookFace,"face":facebookFace};

                UserHashMania.update({"_id":cursorUserHashMania._id},{$set :update}); 
                console.log("update facebook");
                console.log(update);
            }
            else{
                // insert information new client
                var insert = {fbAccessToken: facebookInfo.fbAccessToken,fbExpires: facebookInfo.fbExpires,"facebookID":data.id,"facebookEmail":data.email,"facebookName":data.name,"facebookLink":facebookFace,"face":facebookFace,"state":state,"clientid":data.id}
                UserHashMania.insert(insert);
                console.log("insert facebook");
                console.log(insert);
            }


        // HASHREPUBLIC
    }
    // Meteor.http.get(
    // "https://graph.facebook.com/oauth/access_token", {
    //   params: {
    //     //client_id: config.appId,
    //     redirect_uri: Meteor.absoluteUrl("_oauth/facebook?close"),
    //     //client_secret: config.secret,
    //     code: "abc"
    //   }
    // });
    // App.postOnFacebook(state,"Tapmate is here!");
    
}

function postOnFacebook(clientid,message){
    console.log("postOnFacebook");
    // var facebookfb = Npm.require('fb');
    var cursorMe = Me.findOne({"_id":clientid});
    if(cursorMe){
        if(cursorMe.facebooktoken){
            var facebooktoken = cursorMe.facebooktoken;
            facebookfb.setAccessToken(facebooktoken);
            var body = message;
            // <img src="http://images.ak.instagram.com/profiles/profile_487690035_75sq_1383644609.jpg"/>
            facebookfb.api('me/feed', 'post', { message: body,"link":"http://youtap.meteor.com/app/"+clientid,"picture":"http://youtap.meteor.com/images/logo.png"}, function (res) {
              if(!res || res.error) {
                console.log(!res ? 'error occurred' : res.error);
                return;
              }
              console.log('Post Id: ' + res.id);
            });
        }
    }
    return;
    
    // work in progress

    // var img = "http://images.ak.instagram.com/profiles/profile_487690035_75sq_1383644609.jpg";
    // var https = Npm.require('https'); //Https module of Node.js
    // var fs = Npm.require('fs'); //FileSystem module of Node.js
    // // var FormData = Npm.require('form-data'); //Pretty multipart form maker.
    // // console.log(fs.createReadStream('./public/images/logo.png'));
    // // return;
    // var ACCESS_TOKEN = cursorMe.facebooktoken;
    
    // var form = new FormData(); //Create multipart form
    // form.append('file', fs.createReadStream('first.jpg')); //Put file
    // form.append('message', "Tapmate"); //Put message
     
    // //POST request options, notice 'path' has access_token parameter
    // var options = {
    //     method: 'post',
    //     host: 'graph.facebook.com',
    //     path: '/me/photos?access_token='+ACCESS_TOKEN,
    //     headers: form.getHeaders(),
    // }
     
    // //Do POST request, callback for response
    // var request = https.request(options, function (res){
    //      console.log(res);
    // });
     
    // //Binds form to request
    // form.pipe(request);
     
    // //If anything goes wrong (request-wise not FB)
    // request.on('error', function (error) {
    //      console.log(error);
    // });
}

App.postOnFacebook = postOnFacebook;

function getFacebookFace(id){
    //https://graph.facebook.com/redbull
    var result = Meteor.http.get("https://graph.facebook.com/"+ +id +"/picture?type=normal&redirect=false");
        // var result = Meteor.http.get("http://www.facebook.com/profile.php?id=100000002030165");
        return result.data.data.url;
        // console.log(result.data);
        // console.log(result.data.picture.data.url)
        // return result.data.picture.data.url;
}

App.getFacebookFace = getFacebookFace;
Instagram = {};
Oauth.registerService('instagram', 2, null, function(query) {

    var response    = getTokenResponse(query);
    var accessToken = response.access_token;
                
                
    var serviceData = {
            id: response.user.id,
            accessToken: response.access_token,
            username: response.user.username
        };

    var whiteListed = ['first_name', 'last_name'];

    var fields = _.pick(whiteListed);
    _.extend(serviceData, fields);



    return {
        serviceData: serviceData,
        options: {
            profile: {
                name: response.user.full_name,
                picture: response.user.profile_picture,
                username: response.user.username
            }
        }
    };
});

// returns an object containing:
// - accessToken
// - expiresIn: lifetime of token in seconds
var getTokenResponse = function (query) {
    var config = ServiceConfiguration.configurations.findOne({service: 'instagram'});
    if (!config)
        throw new ServiceConfiguration.ConfigError("Service not configured");

    var result = null;

    // if(DebugFace){
        result = Meteor.http.post(
        "https://api.instagram.com/oauth/access_token", {params: {
            code: query.code,
            client_id: Meteor.settings.public.clientid,
            client_secret: Meteor.settings.public.secret,
            redirect_uri: Meteor.settings.public.redirectServer,
            //apparently instagram won't send a callback with just ?close, this is why close=close
            grant_type: 'authorization_code'
        }});
    // }
    // else{
    //     // result = Meteor.http.post(
    //     // "https://api.instagram.com/oauth/access_token", {params: {
    //     //     code: query.code,
    //     //     client_id: "6d5802dccf124f559cf44f0cb03f2b76",
    //     //     client_secret: "0c899fa82df747eaa385d9389f31c98c",
    //     //     redirect_uri: "http://meteor.nicolsondsouza.com/_oauth/instagram?close=close",
    //     //     //apparently instagram won't send a callback with just ?close, this is why close=close
    //     //     grant_type: 'authorization_code'
    //     // }});
    //     result = Meteor.http.post(
    //     "https://api.instagram.com/oauth/access_token", {params: {
    //         code: query.code,
    //         client_id: config.clientId,
    //         client_secret: config.secret,
    //         redirect_uri: Meteor.absoluteUrl("_oauth/instagram?close=close", {replaceLocalhost: true}),
    //         //apparently instagram won't send a callback with just ?close, this is why close=close
    //         grant_type: 'authorization_code'
    //     }});    
    // }
    if (result.error) // if the http response was an error
        throw result.error;
    if (typeof result.content === "string")
        result.content = JSON.parse(result.content);
    if (result.content.error) // if the http response was a json object with an error attribute
        throw result.content;
    return result.content;
};

Instagram.retrieveCredential = function(credentialToken) {
  return Oauth.retrieveCredential(credentialToken);
};

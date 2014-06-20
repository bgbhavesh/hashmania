(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Accounts = Package['accounts-base'].Accounts;
var OAuth = Package.oauth.OAuth;
var Oauth = Package.oauth.Oauth;
var HTTP = Package.http.HTTP;
var _ = Package.underscore._;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;

/* Package-scope variables */
var Instagram;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/accounts-instagram/lib/accounts_instagram.js                                                   //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Accounts.oauth.registerService('instagram');                                                               // 1
                                                                                                           // 2
if (Meteor.isClient) {                                                                                     // 3
    Meteor.loginWithInstagram = function(options, callback) {                                              // 4
        // support a callback without options                                                              // 5
        if (! callback && typeof options === "function") {                                                 // 6
            callback = options;                                                                            // 7
            options = null;                                                                                // 8
        }                                                                                                  // 9
                                                                                                           // 10
        var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback); // 11
        Instagram.requestCredential(options, credentialRequestCompleteCallback);                           // 12
    };                                                                                                     // 13
} else {                                                                                                   // 14
    Accounts.addAutopublishFields({                                                                        // 15
        forLoggedInUser: ['services.instagram'],                                                           // 16
        forOtherUsers: [                                                                                   // 17
            'services.instagram.id',                                                                       // 18
            'services.instagram.firstName',                                                                // 19
            'services.instagram.lastName'                                                                  // 20
        ]                                                                                                  // 21
    });                                                                                                    // 22
}                                                                                                          // 23
                                                                                                           // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/accounts-instagram/lib/instagram_server.js                                                     //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Instagram = {};                                                                                            // 1
Oauth.registerService('instagram', 2, null, function(query) {                                              // 2
                                                                                                           // 3
    var response    = getTokenResponse(query);                                                             // 4
    var accessToken = response.access_token;                                                               // 5
                                                                                                           // 6
                                                                                                           // 7
    var serviceData = {                                                                                    // 8
            id: response.user.id,                                                                          // 9
            accessToken: response.access_token,                                                            // 10
            username: response.user.username                                                               // 11
        };                                                                                                 // 12
                                                                                                           // 13
    var whiteListed = ['first_name', 'last_name'];                                                         // 14
                                                                                                           // 15
    var fields = _.pick(whiteListed);                                                                      // 16
    _.extend(serviceData, fields);                                                                         // 17
                                                                                                           // 18
                                                                                                           // 19
                                                                                                           // 20
    return {                                                                                               // 21
        serviceData: serviceData,                                                                          // 22
        options: {                                                                                         // 23
            profile: {                                                                                     // 24
                name: response.user.full_name,                                                             // 25
                picture: response.user.profile_picture,                                                    // 26
                username: response.user.username                                                           // 27
            }                                                                                              // 28
        }                                                                                                  // 29
    };                                                                                                     // 30
});                                                                                                        // 31
                                                                                                           // 32
// returns an object containing:                                                                           // 33
// - accessToken                                                                                           // 34
// - expiresIn: lifetime of token in seconds                                                               // 35
var getTokenResponse = function (query) {                                                                  // 36
    var config = ServiceConfiguration.configurations.findOne({service: 'instagram'});                      // 37
    if (!config)                                                                                           // 38
        throw new ServiceConfiguration.ConfigError("Service not configured");                              // 39
                                                                                                           // 40
    var result = null;                                                                                     // 41
                                                                                                           // 42
    // if(DebugFace){                                                                                      // 43
        result = Meteor.http.post(                                                                         // 44
        "https://api.instagram.com/oauth/access_token", {params: {                                         // 45
            code: query.code,                                                                              // 46
            client_id: Meteor.settings.public.clientid,                                                    // 47
            client_secret: Meteor.settings.public.secret,                                                  // 48
            redirect_uri: Meteor.settings.public.redirectServer,                                           // 49
            //apparently instagram won't send a callback with just ?close, this is why close=close         // 50
            grant_type: 'authorization_code'                                                               // 51
        }});                                                                                               // 52
    // }                                                                                                   // 53
    // else{                                                                                               // 54
    //     // result = Meteor.http.post(                                                                   // 55
    //     // "https://api.instagram.com/oauth/access_token", {params: {                                   // 56
    //     //     code: query.code,                                                                        // 57
    //     //     client_id: "6d5802dccf124f559cf44f0cb03f2b76",                                           // 58
    //     //     client_secret: "0c899fa82df747eaa385d9389f31c98c",                                       // 59
    //     //     redirect_uri: "http://meteor.nicolsondsouza.com/_oauth/instagram?close=close",           // 60
    //     //     //apparently instagram won't send a callback with just ?close, this is why close=close   // 61
    //     //     grant_type: 'authorization_code'                                                         // 62
    //     // }});                                                                                         // 63
    //     result = Meteor.http.post(                                                                      // 64
    //     "https://api.instagram.com/oauth/access_token", {params: {                                      // 65
    //         code: query.code,                                                                           // 66
    //         client_id: config.clientId,                                                                 // 67
    //         client_secret: config.secret,                                                               // 68
    //         redirect_uri: Meteor.absoluteUrl("_oauth/instagram?close=close", {replaceLocalhost: true}), // 69
    //         //apparently instagram won't send a callback with just ?close, this is why close=close      // 70
    //         grant_type: 'authorization_code'                                                            // 71
    //     }});                                                                                            // 72
    // }                                                                                                   // 73
    if (result.error) // if the http response was an error                                                 // 74
        throw result.error;                                                                                // 75
    if (typeof result.content === "string")                                                                // 76
        result.content = JSON.parse(result.content);                                                       // 77
    if (result.content.error) // if the http response was a json object with an error attribute            // 78
        throw result.content;                                                                              // 79
    return result.content;                                                                                 // 80
};                                                                                                         // 81
                                                                                                           // 82
Instagram.retrieveCredential = function(credentialToken) {                                                 // 83
  return Oauth.retrieveCredential(credentialToken);                                                        // 84
};                                                                                                         // 85
                                                                                                           // 86
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['accounts-instagram'] = {};

})();

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/accounts-instagram/lib/template.instagram_configuration.js                                     //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.__define__("configureLoginServiceDialogForInstagram", (function() {                               // 2
  var self = this;                                                                                         // 3
  var template = this;                                                                                     // 4
  return [ HTML.Raw("<p>\n        Follow these steps to configure your Instagram client:\n    </p>\n    "), HTML.OL(HTML.Raw('\n        <li>\n            Visit <a href="http://instagram.com/developer/clients/register/" target="_blank">http://instagram.com/developer/clients/register/</a>\n        </li>\n        '), HTML.LI("\n            Set Callback URL to: ", HTML.SPAN({
    "class": "url"                                                                                         // 6
  }, function() {                                                                                          // 7
    return Spacebars.mustache(self.lookup("siteUrl"));                                                     // 8
  }, "_oauth/instagram?close"), "\n        "), "\n    ") ];                                                // 9
}));                                                                                                       // 10
                                                                                                           // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/accounts-instagram/lib/instagram_configuration.js                                              //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Template.configureLoginServiceDialogForInstagram.siteUrl = function () {                                   // 1
    return Meteor.absoluteUrl({replaceLocalhost: true});                                                   // 2
};                                                                                                         // 3
                                                                                                           // 4
Template.configureLoginServiceDialogForInstagram.fields = function () {                                    // 5
    return [                                                                                               // 6
        {property: 'clientId', label: 'Client Id'},                                                        // 7
        {property: 'secret', label: 'Client Secret'},                                                      // 8
        {property: 'scope', label: "Scope (separated by a '+')"}                                           // 9
    ];                                                                                                     // 10
};                                                                                                         // 11
                                                                                                           // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






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
// packages/accounts-instagram/lib/instagram_client.js                                                     //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Instagram = {};                                                                                            // 1
                                                                                                           // 2
Instagram.requestCredential = function (options, callback) {                                               // 3
                                                                                                           // 4
    if (!callback && typeof options === 'function') {                                                      // 5
        callback = options;                                                                                // 6
        options = {};                                                                                      // 7
    }                                                                                                      // 8
    var config = null;                                                                                     // 9
    // var config = ServiceConfiguration.configurations.findOne({service: 'instagram'});                   // 10
    // if(!config){                                                                                        // 11
    //     //youtap                                                                                        // 12
    //      Accounts.loginServiceConfiguration.insert({                                                    // 13
    //          service: "instagram",                                                                      // 14
    //          clientId: "6bda8578dd0f4cc2bdfcaa225c72889e",                                              // 15
    //          secret: "bb5e315798e64bcb926d12c1519e0d62",                                                // 16
    //          scope: "basic+comments+relationships+likes"                                                // 17
    //      });                                                                                            // 18
    //     config = Accounts.loginServiceConfiguration.findOne({service: 'instagram'});                    // 19
    // }                                                                                                   // 20
                                                                                                           // 21
    var state = Meteor.uuid();                                                                             // 22
    // XXX need to support configuring access_type and scope                                               // 23
    window.localStorage.setItem("state",state)                                                             // 24
    var url = Meteor.absoluteUrl('_oauth/instagram?close=close', {replaceLocalhost: true});                // 25
        url = "http://youtap.meteor.com/_oauth/instagram?close=close"                                      // 26
        var loginUrl = null;                                                                               // 27
        // if(DebugFace){                                                                                  // 28
            var redirect = Meteor.settings.public.redirect;                                                // 29
            var clientid = Meteor.settings.public.clientid;                                                // 30
            // var redirect = Meteor.settings.public.redirect;                                             // 31
            var scope  = "basic+comments+relationships+likes";                                             // 32
                                                                                                           // 33
            loginUrl =                                                                                     // 34
            'https://instagram.com/oauth/authorize' +                                                      // 35
                '?client_id=' + clientid +                                                                 // 36
                '&redirect_uri=' +redirect  +                                                              // 37
                '&response_type=code' +                                                                    // 38
                '&scope=' + scope +                                                                        // 39
                '&state=' + state;                                                                         // 40
        // }                                                                                               // 41
        // else{                                                                                           // 42
                                                                                                           // 43
        //     // loginUrl =                                                                               // 44
        //     // 'https://instagram.com/oauth/authorize' +                                                // 45
        //     //     '?client_id=' + "6d5802dccf124f559cf44f0cb03f2b76" +                                 // 46
        //     //     '&redirect_uri=' +"http://meteor.nicolsondsouza.com/_oauth/instagram?close=close"  +                
        //     //     '&response_type=code' +                                                              // 48
        //     //     '&scope=' + config.scope +                                                           // 49
        //     //     '&state=' + state;                                                                   // 50
        //     //     //'http://instagrampackage.meteor.com/_oauth/instagram?close=close';                 // 51
        //     loginUrl =                                                                                  // 52
        //     'https://instagram.com/oauth/authorize' +                                                   // 53
        //         '?client_id=' + config.clientId +                                                       // 54
        //         '&redirect_uri=' +url  +                                                                // 55
        //         '&response_type=code' +                                                                 // 56
        //         '&scope=' + config.scope +                                                              // 57
        //         '&state=' + state;                                                                      // 58
        //         //'http://instagrampackage.meteor.com/_oauth/instagram?close=close';                    // 59
        // }                                                                                               // 60
    Oauth.initiateLogin(state, loginUrl, callback);                                                        // 61
};                                                                                                         // 62
                                                                                                           // 63
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

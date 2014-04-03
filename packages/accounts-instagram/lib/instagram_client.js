Instagram = {};

Instagram.requestCredential = function (options, callback) {

    if (!callback && typeof options === 'function') {
        callback = options;
        options = {};
    }

    var config = ServiceConfiguration.configurations.findOne({service: 'instagram'});
    if(!config){
        //youtap
         Accounts.loginServiceConfiguration.insert({
             service: "instagram",
             clientId: "6bda8578dd0f4cc2bdfcaa225c72889e",
             secret: "bb5e315798e64bcb926d12c1519e0d62",
             scope: "basic+comments+relationships+likes"
         });
        config = Accounts.loginServiceConfiguration.findOne({service: 'instagram'}); 
    }

    var state = Meteor.uuid();
    // XXX need to support configuring access_type and scope
    var url = Meteor.absoluteUrl('_oauth/instagram?close=close', {replaceLocalhost: true});        
        url = "http://youtap.meteor.com/_oauth/instagram?close=close"
        var loginUrl = null;
        if(DebugFace){
            
            loginUrl =
            'https://instagram.com/oauth/authorize' +
                '?client_id=' + "f28d28f5785443349d0a60d0e8b9f98a" +
                '&redirect_uri=' +"http://localhost:3000/_oauth/instagram?close=close"  +                
                '&response_type=code' +
                '&scope=' + config.scope +
                '&state=' + state;
        }
        else{
            
            // loginUrl =
            // 'https://instagram.com/oauth/authorize' +
            //     '?client_id=' + "6d5802dccf124f559cf44f0cb03f2b76" +
            //     '&redirect_uri=' +"http://meteor.nicolsondsouza.com/_oauth/instagram?close=close"  +                
            //     '&response_type=code' +
            //     '&scope=' + config.scope +
            //     '&state=' + state;
            //     //'http://instagrampackage.meteor.com/_oauth/instagram?close=close';
            loginUrl =
            'https://instagram.com/oauth/authorize' +
                '?client_id=' + config.clientId +
                '&redirect_uri=' +url  +                
                '&response_type=code' +
                '&scope=' + config.scope +
                '&state=' + state;
                //'http://instagrampackage.meteor.com/_oauth/instagram?close=close';
        }
    Oauth.initiateLogin(state, loginUrl, callback);
};

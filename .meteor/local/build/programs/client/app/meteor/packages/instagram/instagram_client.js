(function(){Instagram = {};



Instagram.requestCredential = function (options, callback) {

    if (!callback && typeof options === 'function') {
        callback = options;
        options = {};
    }

    var config = ServiceConfiguration.configurations.findOne({service: 'instagram'});
    if (!config) {
        callback && callback(new ServiceConfiguration.ConfigError("Service not configured"));
        return;
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

})();

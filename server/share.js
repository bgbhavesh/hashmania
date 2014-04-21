// app id 1469999833231618
// secret fbca837fd8bce281a1b781346399aaad
// client id c0f06585160bc1d80f064bdef92123c8

// http://localhost:3000/_oauth/instagram?close=close&code=965b416f7d8f49edac0a58c5f408e66f&state=64c164b5-a6c3-4738-a9c7-04725463a6d2

Meteor.Router.add('/facebook', 'GET', function() {
    var query = this.request.query;
    console.log(query);
    //App.facebook(this);
    return "first facebook";
});
Meteor.Router.add('/facebook/*', 'GET', function() {
    //App.facebook(this);
    return "second facebook";
});
App.facebook = function(current){
    console.log(current.params);
    // Meteor.http.get(
    // "https://graph.facebook.com/oauth/access_token", {
    //   params: {
    //     //client_id: config.appId,
    //     redirect_uri: Meteor.absoluteUrl("_oauth/facebook?close"),
    //     //client_secret: config.secret,
    //     code: "abc"
    //   }
    // });
    
}
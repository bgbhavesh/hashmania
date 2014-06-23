(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/user-status/tests/insecure_login.js                                                        //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
/*                                                                                                     // 1
 * Created by https://github.com/matb33 for testing packages that make user of userIds                 // 2
 * Original file https://github.com/matb33/meteor-collection-hooks/blob/master/tests/insecure_login.js // 3
 */                                                                                                    // 4
                                                                                                       // 5
InsecureLogin = {                                                                                      // 6
  queue: [],                                                                                           // 7
  ran: false,                                                                                          // 8
  ready: function (callback) {                                                                         // 9
    this.queue.push(callback);                                                                         // 10
    if (this.ran) this.unwind();                                                                       // 11
  },                                                                                                   // 12
  run: function () {                                                                                   // 13
    this.ran = true;                                                                                   // 14
    this.unwind();                                                                                     // 15
  },                                                                                                   // 16
  unwind: function () {                                                                                // 17
    _.each(this.queue, function (callback) {                                                           // 18
      callback();                                                                                      // 19
    });                                                                                                // 20
    this.queue = [];                                                                                   // 21
  }                                                                                                    // 22
};                                                                                                     // 23
                                                                                                       // 24
if (Meteor.isClient) {                                                                                 // 25
  Accounts.callLoginMethod({                                                                           // 26
    methodArguments: [{username: "test"}],                                                             // 27
    userCallback: function (err) {                                                                     // 28
      if (err) throw err;                                                                              // 29
      console.info("Insecure login successful!");                                                      // 30
      InsecureLogin.run();                                                                             // 31
    }                                                                                                  // 32
  });                                                                                                  // 33
} else {                                                                                               // 34
  InsecureLogin.run();                                                                                 // 35
}                                                                                                      // 36
                                                                                                       // 37
if (Meteor.isServer) {                                                                                 // 38
  if (!Meteor.users.find({"profile.name": "Test"}).count()) {                                          // 39
    Accounts.createUser({                                                                              // 40
      username: "test",                                                                                // 41
      email: "test@test.com",                                                                          // 42
      password: "password",                                                                            // 43
      profile: {name: "Test"}                                                                          // 44
    });                                                                                                // 45
  }                                                                                                    // 46
                                                                                                       // 47
  Accounts.registerLoginHandler(function (options) {                                                   // 48
    if (!options.username) return;                                                                     // 49
                                                                                                       // 50
    var user = Meteor.users.findOne({"username": options.username});                                   // 51
    if (!user) return;                                                                                 // 52
                                                                                                       // 53
    var stampedLoginToken = Accounts._generateStampedLoginToken();                                     // 54
                                                                                                       // 55
    Meteor._ensure(user, "services", "resume");                                                        // 56
                                                                                                       // 57
    if (_.has(user.services.resume, "loginTokens")) {                                                  // 58
      user.services.resume.loginTokens.push(stampedLoginToken);                                        // 59
    } else {                                                                                           // 60
      user.services.resume.loginTokens = [stampedLoginToken];                                          // 61
    }                                                                                                  // 62
                                                                                                       // 63
    Meteor.users.update({_id: user._id}, {$set: {services: user.services}});                           // 64
                                                                                                       // 65
    return {                                                                                           // 66
      id: user._id,                                                                                    // 67
      token: stampedLoginToken.token                                                                   // 68
    };                                                                                                 // 69
  });                                                                                                  // 70
}                                                                                                      // 71
                                                                                                       // 72
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/user-status/tests/status_tests.coffee.js                                                   //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
if (Meteor.isServer) {
  Meteor.publish(null, function() {
    return Meteor.users.find({}, {
      fields: {
        status: 1
      }
    });
  });
  Meteor.methods({
    "grabStatus": function() {
      return Meteor.users.find({}, {
        fields: {
          status: 1
        }
      }).fetch();
    },
    "grabSessions": function() {
      return UserSessions.find().fetch();
    }
  });
}

if (Meteor.isClient) {
  Tinytest.addAsync("status - login", function(test, next) {
    return InsecureLogin.ready(function() {
      test.ok();
      return next();
    });
  });
  Tinytest.addAsync("status - online recorded on server", function(test, next) {
    return Meteor.call("grabStatus", function(err, res) {
      var user;
      test.isUndefined(err);
      test.length(res, 1);
      user = res[0];
      test.equal(user._id, Meteor.userId());
      test.equal(user.status.online, true);
      test.isFalse(user.status.lastLogin === void 0);
      return next();
    });
  });
  Tinytest.addAsync("status - session recorded on server", function(test, next) {
    return Meteor.call("grabSessions", function(err, res) {
      var doc;
      test.isUndefined(err);
      test.length(res, 1);
      doc = res[0];
      test.equal(doc.userId, Meteor.userId());
      test.isFalse(doc.ipAddr === void 0);
      test.isFalse(doc.loginTime === void 0);
      return next();
    });
  });
  Tinytest.addAsync("status - online recorded on client", function(test, next) {
    test.equal(Meteor.user().status.online, true);
    return next();
  });
  Tinytest.addAsync("status - logout", function(test, next) {
    return Meteor.logout(function(err) {
      test.isUndefined(err);
      return next();
    });
  });
  Tinytest.addAsync("status - offline recorded on server", function(test, next) {
    return Meteor.call("grabStatus", function(err, res) {
      var user;
      test.isUndefined(err);
      test.length(res, 1);
      user = res[0];
      test.isFalse(user._id === void 0);
      test.equal(user.status.online, false);
      test.isFalse(user.status.lastLogin === void 0);
      return next();
    });
  });
  Tinytest.addAsync("status - session deleted on server", function(test, next) {
    return Meteor.call("grabSessions", function(err, res) {
      test.isUndefined(err);
      test.length(res, 0);
      return next();
    });
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

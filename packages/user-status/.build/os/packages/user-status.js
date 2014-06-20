(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// packages/user-status/user_status.js                                                             //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
/*                                                                                                 // 1
  Apparently, the new api.export takes care of issues here. No need to attach to global namespace. // 2
  See http://shiggyenterprises.wordpress.com/2013/09/09/meteor-packages-in-coffeescript-0-6-5/     // 3
                                                                                                   // 4
  We may want to make UserSessions a server collection to take advantage of indices.               // 5
  Will implement if someone has enough online users to warrant it.                                 // 6
*/                                                                                                 // 7
                                                                                                   // 8
var UserSessions, UserStatus, removeSession;                                                       // 9
                                                                                                   // 10
UserSessions = new Meteor.Collection(null);                                                        // 11
                                                                                                   // 12
UserStatus = new (Npm.require('events').EventEmitter)();                                           // 13
                                                                                                   // 14
removeSession = function(userId, sessionId) {                                                      // 15
  UserSessions.remove(sessionId);                                                                  // 16
  UserStatus.emit("sessionLogout", {                                                               // 17
    userId: userId,                                                                                // 18
    sessionId: sessionId                                                                           // 19
  });                                                                                              // 20
                                                                                                   // 21
                                                                                                   // 22
  var cursorUsers = Meteor.users.findOne(userId);                                                  // 23
  if(cursorUsers){                                                                                 // 24
    if(cursorUsers.services.instagram){                                                            // 25
        var id = cursorUsers.services.instagram.id;                                                // 26
        var name = cursorUsers.profile.name;                                                       // 27
        var cursorFollows = Follows.find({"followid":id})                                          // 28
        cursorFollows.forEach(function(data){                                                      // 29
          if(data.followid == data.userid){                                                        // 30
            Follows.update({"_id":data._id},{$set : {"status":"none"}});                           // 31
          }                                                                                        // 32
          else{                                                                                    // 33
            Follows.update({"_id":data._id},{$set : {"status":"offline"}});                        // 34
          }                                                                                        // 35
                                                                                                   // 36
        });                                                                                        // 37
        console.log("offline " +id +" " +name);                                                    // 38
    }                                                                                              // 39
                                                                                                   // 40
  }                                                                                                // 41
                                                                                                   // 42
                                                                                                   // 43
  if (UserSessions.find({                                                                          // 44
    userId: userId                                                                                 // 45
  }).count() === 0) {                                                                              // 46
    Meteor.users.update(userId, {                                                                  // 47
      $set: {                                                                                      // 48
        'status.online': false                                                                     // 49
      }                                                                                            // 50
    });                                                                                            // 51
  }                                                                                                // 52
};                                                                                                 // 53
                                                                                                   // 54
Meteor.startup(function() {                                                                        // 55
  return Meteor.users.update({}, {                                                                 // 56
    $unset: {                                                                                      // 57
      "status.online": null                                                                        // 58
    }                                                                                              // 59
  }, {                                                                                             // 60
    multi: true                                                                                    // 61
  });                                                                                              // 62
});                                                                                                // 63
                                                                                                   // 64
Meteor.publish(null, function() {                                                                  // 65
  var existing, ipAddr, sessionId, timestamp, userId, _ref;                                        // 66
  userId = this._session.userId;                                                                   // 67
  if (this._session.socket == null) {                                                              // 68
    return;                                                                                        // 69
  }                                                                                                // 70
  sessionId = this._session.id;                                                                    // 71
  timestamp = +(new Date);                                                                         // 72
  if (userId == null) {                                                                            // 73
    existing = UserSessions.findOne(sessionId);                                                    // 74
    if (existing == null) {                                                                        // 75
      return;                                                                                      // 76
    }                                                                                              // 77
    removeSession(existing.userId, sessionId);                                                     // 78
    return;                                                                                        // 79
  }                                                                                                // 80
  ipAddr = ((_ref = this._session.socket.headers) != null ? _ref['x-forwarded-for'] : void 0) || this._session.socket.remoteAddress;
                                                                                                   // 82
  var cursorUsers = Meteor.users.findOne(this.userId);                                             // 83
  if(cursorUsers){                                                                                 // 84
    if(cursorUsers.services.instagram){                                                            // 85
        var id = cursorUsers.services.instagram.id;                                                // 86
        var name = cursorUsers.profile.name;                                                       // 87
        var cursorFollows = Follows.find({"followid":id})                                          // 88
        cursorFollows.forEach(function(data){                                                      // 89
          if(data.followid == data.userid){                                                        // 90
            Follows.update({"_id":data._id},{$set : {"status":"none"}});                           // 91
          }                                                                                        // 92
          else{                                                                                    // 93
            Follows.update({"_id":data._id},{$set : {"status":"online"}});                         // 94
          }                                                                                        // 95
                                                                                                   // 96
        });                                                                                        // 97
        console.log("online " +id +" " +name);                                                     // 98
    }                                                                                              // 99
  }                                                                                                // 100
                                                                                                   // 101
  UserSessions.insert(sessionId, {                                                                 // 102
    $set: {                                                                                        // 103
      userId: userId,                                                                              // 104
      ipAddr: ipAddr,                                                                              // 105
      loginTime: timestamp                                                                         // 106
    }                                                                                              // 107
  });                                                                                              // 108
  UserStatus.emit("sessionLogin", {                                                                // 109
    userId: userId,                                                                                // 110
    sessionId: sessionId,                                                                          // 111
    ipAddr: ipAddr,                                                                                // 112
    loginTime: timestamp                                                                           // 113
  });                                                                                              // 114
  Meteor.users.update(userId, {                                                                    // 115
    $set: {                                                                                        // 116
      'status.online': true,                                                                       // 117
      'status.lastLogin': timestamp                                                                // 118
    }                                                                                              // 119
  });                                                                                              // 120
  this._session.socket.on("close", Meteor.bindEnvironment(function() {                             // 121
    return removeSession(userId, sessionId);                                                       // 122
  }, function(e) {                                                                                 // 123
    return Meteor._debug("Exception from connection close callback:", e);                          // 124
  }));                                                                                             // 125
});                                                                                                // 126
                                                                                                   // 127
/////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

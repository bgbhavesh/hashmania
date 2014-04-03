/*
  Apparently, the new api.export takes care of issues here. No need to attach to global namespace.
  See http://shiggyenterprises.wordpress.com/2013/09/09/meteor-packages-in-coffeescript-0-6-5/

  We may want to make UserSessions a server collection to take advantage of indices.
  Will implement if someone has enough online users to warrant it.
*/

var UserSessions, UserStatus, removeSession;

UserSessions = new Meteor.Collection(null);

UserStatus = new (Npm.require('events').EventEmitter)();

removeSession = function(userId, sessionId) {
  UserSessions.remove(sessionId);
  UserStatus.emit("sessionLogout", {
    userId: userId,
    sessionId: sessionId
  });


  var cursorUsers = Meteor.users.findOne(userId);
  if(cursorUsers){
    if(cursorUsers.services.instagram){
        var id = cursorUsers.services.instagram.id;
        var name = cursorUsers.profile.name;
        var cursorFollows = Follows.find({"followid":id})
        cursorFollows.forEach(function(data){
          if(data.followid == data.userid){
            Follows.update({"_id":data._id},{$set : {"status":"none"}});
          }
          else{
            Follows.update({"_id":data._id},{$set : {"status":"offline"}});  
          }
          
        });
        console.log("offline " +id +" " +name);      
    }

  }
  

  if (UserSessions.find({
    userId: userId
  }).count() === 0) {
    Meteor.users.update(userId, {
      $set: {
        'status.online': false
      }
    });
  }
};

Meteor.startup(function() {
  return Meteor.users.update({}, {
    $unset: {
      "status.online": null
    }
  }, {
    multi: true
  });
});

Meteor.publish(null, function() {
  var existing, ipAddr, sessionId, timestamp, userId, _ref;
  userId = this._session.userId;
  if (this._session.socket == null) {
    return;
  }
  sessionId = this._session.id;
  timestamp = +(new Date);
  if (userId == null) {
    existing = UserSessions.findOne(sessionId);
    if (existing == null) {
      return;
    }
    removeSession(existing.userId, sessionId);
    return;
  }
  ipAddr = ((_ref = this._session.socket.headers) != null ? _ref['x-forwarded-for'] : void 0) || this._session.socket.remoteAddress;
  
  var cursorUsers = Meteor.users.findOne(this.userId);
  if(cursorUsers){
    if(cursorUsers.services.instagram){
        var id = cursorUsers.services.instagram.id;
        var name = cursorUsers.profile.name;
        var cursorFollows = Follows.find({"followid":id})
        cursorFollows.forEach(function(data){
          if(data.followid == data.userid){
            Follows.update({"_id":data._id},{$set : {"status":"none"}});
          }
          else{
            Follows.update({"_id":data._id},{$set : {"status":"online"}});  
          }

        });
        console.log("online " +id +" " +name);
    }
  }
  
  UserSessions.insert(sessionId, {
    $set: {
      userId: userId,
      ipAddr: ipAddr,
      loginTime: timestamp
    }
  });
  UserStatus.emit("sessionLogin", {
    userId: userId,
    sessionId: sessionId,
    ipAddr: ipAddr,
    loginTime: timestamp
  });
  Meteor.users.update(userId, {
    $set: {
      'status.online': true,
      'status.lastLogin': timestamp
    }
  });
  this._session.socket.on("close", Meteor.bindEnvironment(function() {
    return removeSession(userId, sessionId);
  }, function(e) {
    return Meteor._debug("Exception from connection close callback:", e);
  }));
});

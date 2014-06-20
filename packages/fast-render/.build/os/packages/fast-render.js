(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/fast-render/lib/server/utils.js                                                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/*                                                                                                                  // 1
  stolen from express: http://goo.gl/qgarJu                                                                         // 2
  some parts has been changed to deal with our api                                                                  // 3
*/                                                                                                                  // 4
                                                                                                                    // 5
Utils = {};                                                                                                         // 6
                                                                                                                    // 7
Utils._pathRegexp = function _pathRegexp(path, keys, sensitive, strict) {                                           // 8
  if (toString.call(path) == '[object RegExp]') return path;                                                        // 9
  if (Array.isArray(path)) path = '(' + path.join('|') + ')';                                                       // 10
  path = path                                                                                                       // 11
    .concat(strict ? '' : '/?')                                                                                     // 12
    .replace(/\/\(/g, '(?:/')                                                                                       // 13
    .replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?(\*)?/g, function(_, slash, format, key, capture, optional, star){ // 14
      keys.push({ name: key, optional: !! optional });                                                              // 15
      slash = slash || '';                                                                                          // 16
      return ''                                                                                                     // 17
        + (optional ? '' : slash)                                                                                   // 18
        + '(?:'                                                                                                     // 19
        + (optional ? slash : '')                                                                                   // 20
        + (format || '') + (capture || (format && '([^/.]+?)' || '([^/]+?)')) + ')'                                 // 21
        + (optional || '')                                                                                          // 22
        + (star ? '(/*)?' : '');                                                                                    // 23
    })                                                                                                              // 24
    .replace(/([\/.])/g, '\\$1')                                                                                    // 25
    .replace(/\*/g, '(.*)');                                                                                        // 26
  return new RegExp('^' + path + '$', sensitive ? '' : 'i');                                                        // 27
};                                                                                                                  // 28
                                                                                                                    // 29
Utils._pathMatch = function _pathMatch(path, route){                                                                // 30
  var keys = route.keys                                                                                             // 31
    , params = []                                                                                                   // 32
    , m = route.regexp.exec(path);                                                                                  // 33
                                                                                                                    // 34
  if (!m) return false;                                                                                             // 35
                                                                                                                    // 36
  for (var i = 1, len = m.length; i < len; ++i) {                                                                   // 37
    var key = keys[i - 1];                                                                                          // 38
                                                                                                                    // 39
    try {                                                                                                           // 40
      var val = 'string' == typeof m[i]                                                                             // 41
        ? decodeURIComponent(m[i])                                                                                  // 42
        : m[i];                                                                                                     // 43
    } catch(e) {                                                                                                    // 44
      var err = new Error("Failed to decode param '" + m[i] + "'");                                                 // 45
      err.status = 400;                                                                                             // 46
      throw err;                                                                                                    // 47
    }                                                                                                               // 48
                                                                                                                    // 49
    if (key) {                                                                                                      // 50
      params[key.name] = val;                                                                                       // 51
    } else {                                                                                                        // 52
      params.push(val);                                                                                             // 53
    }                                                                                                               // 54
  }                                                                                                                 // 55
                                                                                                                    // 56
  return params;                                                                                                    // 57
};                                                                                                                  // 58
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/fast-render/lib/server/fast_render.js                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var Fiber = Npm.require('fibers');                                                                                  // 1
                                                                                                                    // 2
FastRender = {                                                                                                      // 3
  _routes: [],                                                                                                      // 4
  _onAllRoutes: []                                                                                                  // 5
};                                                                                                                  // 6
                                                                                                                    // 7
FastRender.route = function route(path, callback) {                                                                 // 8
  var keys = [];                                                                                                    // 9
  FastRender._routes.push({                                                                                         // 10
    regexp: Utils._pathRegexp(path, keys, false, false),                                                            // 11
    callback: callback,                                                                                             // 12
    keys: keys                                                                                                      // 13
  });                                                                                                               // 14
};                                                                                                                  // 15
                                                                                                                    // 16
FastRender.onAllRoutes = function onAllRoutes(callback) {                                                           // 17
  FastRender._onAllRoutes.push(callback);                                                                           // 18
};                                                                                                                  // 19
                                                                                                                    // 20
FastRender._processRoutes = function _processRoutes(path, loginToken, callback) {                                   // 21
  var selectedRoute;                                                                                                // 22
  var params;                                                                                                       // 23
                                                                                                                    // 24
  for(var lc=0; lc<FastRender._routes.length; lc++) {                                                               // 25
    var route = FastRender._routes[lc];                                                                             // 26
    params = Utils._pathMatch(path, route);                                                                         // 27
    if(params) {                                                                                                    // 28
      selectedRoute = route;                                                                                        // 29
      break;                                                                                                        // 30
    }                                                                                                               // 31
  }                                                                                                                 // 32
                                                                                                                    // 33
  Fiber(function() {                                                                                                // 34
    var context = new Context(loginToken);                                                                          // 35
    try {                                                                                                           // 36
      //run onAllRoutes callbacks if provided                                                                       // 37
      FastRender._onAllRoutes.forEach(function(callback) {                                                          // 38
        callback.call(context, path);                                                                               // 39
      });                                                                                                           // 40
                                                                                                                    // 41
      if(selectedRoute) {                                                                                           // 42
        selectedRoute.callback.call(context, params, path);                                                         // 43
      }                                                                                                             // 44
                                                                                                                    // 45
      callback(context.getData());                                                                                  // 46
    } catch(err) {                                                                                                  // 47
      console.error('error on fast-rendering path: ' + path + " ; error: " + err.stack);                            // 48
      callback(null);                                                                                               // 49
    }                                                                                                               // 50
  }).run();                                                                                                         // 51
};                                                                                                                  // 52
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/fast-render/lib/server/context.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var Fibers = Npm.require('fibers');                                                                                 // 1
var Future = Npm.require('fibers/future');                                                                          // 2
                                                                                                                    // 3
Context = function Context(loginToken) {                                                                            // 4
  this._collectionData = {};                                                                                        // 5
  this._subscriptions = {};                                                                                         // 6
                                                                                                                    // 7
  //get the user                                                                                                    // 8
  if(Meteor.users) {                                                                                                // 9
    var hashedToken, query;                                                                                         // 10
    if ( typeof Accounts._hashLoginToken === 'function' ){                                                          // 11
      hashedToken = loginToken && Accounts._hashLoginToken( loginToken );                                           // 12
      query = {'services.resume.loginTokens.hashedToken': hashedToken };                                            // 13
    }                                                                                                               // 14
    else                                                                                                            // 15
      query = {'services.resume.loginTokens.token': loginToken};                                                    // 16
    var options = {fields: {_id: 1}};                                                                               // 17
    var user = Meteor.users.findOne(query, options);                                                                // 18
                                                                                                                    // 19
    //support for Meteor.user                                                                                       // 20
    Fibers.current._meteor_dynamics = {};                                                                           // 21
    Fibers.current._meteor_dynamics[DDP._CurrentInvocation.slot] = this;                                            // 22
                                                                                                                    // 23
    if(user) {                                                                                                      // 24
      this.userId = user._id;                                                                                       // 25
    }                                                                                                               // 26
  }                                                                                                                 // 27
};                                                                                                                  // 28
                                                                                                                    // 29
Context.prototype.find = function(collectionName, query, options) {                                                 // 30
  var self = this;                                                                                                  // 31
  if(collectionName.constructor == Meteor.Collection) {                                                             // 32
    collectionName = collectionName._name;                                                                          // 33
  } else if(typeof collectionName != 'string') {                                                                    // 34
    throw new Error("find's first arg should be either a Meteor.Collection or a string");                           // 35
  }                                                                                                                 // 36
                                                                                                                    // 37
  var mongo = MongoInternals.defaultRemoteCollectionDriver().mongo;                                                 // 38
  if(mongo && mongo.db) {                                                                                           // 39
    var future = new Future();                                                                                      // 40
    var args = Array.prototype.slice.call(arguments, 1);                                                            // 41
    var coll = mongo.db.collection(collectionName);                                                                 // 42
                                                                                                                    // 43
    coll.find.apply(coll, args).toArray(function(err, result) {                                                     // 44
      if(err) {                                                                                                     // 45
        throw err;                                                                                                  // 46
      } else {                                                                                                      // 47
        self._ensureCollection(collectionName);                                                                     // 48
        self._collectionData[collectionName].push(result);                                                          // 49
        future.return();                                                                                            // 50
      }                                                                                                             // 51
    });                                                                                                             // 52
    future.wait();                                                                                                  // 53
  } else {                                                                                                          // 54
    console.warn('fast-render still cannot access the mongo connection');                                           // 55
  }                                                                                                                 // 56
};                                                                                                                  // 57
                                                                                                                    // 58
Context.prototype.subscribe = function(subscription /*, params */) {                                                // 59
  var self = this;                                                                                                  // 60
  var publishHandler = Meteor.default_server.publish_handlers[subscription];                                        // 61
  if(publishHandler) {                                                                                              // 62
    var params = Array.prototype.slice.call(arguments, 1);                                                          // 63
    var cursors = publishHandler.apply(this, params);                                                               // 64
    if(cursors) {                                                                                                   // 65
      if(cursors.constructor != Array) {                                                                            // 66
        cursors = [cursors];                                                                                        // 67
      }                                                                                                             // 68
                                                                                                                    // 69
      //add collection data                                                                                         // 70
      cursors.forEach(function(cursor) {                                                                            // 71
        cursor.rewind();                                                                                            // 72
        var collectionName =                                                                                        // 73
          (cursor._cursorDescription)? cursor._cursorDescription.collectionName: null || //for meteor-collections   // 74
          (cursor._collection)? cursor._collection._name: null; //for smart-collections                             // 75
                                                                                                                    // 76
        self._ensureCollection(collectionName);                                                                     // 77
        self._collectionData[collectionName].push(cursor.fetch());                                                  // 78
      });                                                                                                           // 79
                                                                                                                    // 80
      //set subscription                                                                                            // 81
      self.completeSubscriptions(subscription);                                                                     // 82
    } else {                                                                                                        // 83
      console.warn('No such cursors in publication: ', subscription);                                               // 84
    }                                                                                                               // 85
  } else {                                                                                                          // 86
    console.warn('There is no such publish handler named:', subscription);                                          // 87
  }                                                                                                                 // 88
};                                                                                                                  // 89
                                                                                                                    // 90
Context.prototype.completeSubscriptions = function(subscriptions) {                                                 // 91
  var self = this;                                                                                                  // 92
  if(typeof subscriptions == 'string') {                                                                            // 93
    subscriptions = [subscriptions];                                                                                // 94
  } else if(!subscriptions || subscriptions.constructor != Array) {                                                 // 95
    throw new Error('subscriptions params should be either a string or array of strings');                          // 96
  }                                                                                                                 // 97
                                                                                                                    // 98
  subscriptions.forEach(function(subscription) {                                                                    // 99
    self._subscriptions[subscription] = true;                                                                       // 100
  });                                                                                                               // 101
};                                                                                                                  // 102
                                                                                                                    // 103
Context.prototype._ensureCollection = function(collectionName) {                                                    // 104
  if(!this._collectionData[collectionName]) {                                                                       // 105
    this._collectionData[collectionName] = [];                                                                      // 106
  }                                                                                                                 // 107
};                                                                                                                  // 108
                                                                                                                    // 109
Context.prototype.getData = function() {                                                                            // 110
  return {                                                                                                          // 111
    collectionData: this._collectionData,                                                                           // 112
    subscriptions: this._subscriptions                                                                              // 113
  };                                                                                                                // 114
};                                                                                                                  // 115
                                                                                                                    // 116
FastRender._Context = Context;                                                                                      // 117
                                                                                                                    // 118
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/fast-render/lib/server/inject.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
//When a HTTP Request comes, we need to figure out is it a proper request                                           // 1
//then get some query data                                                                                          // 2
//then hijack html return by meteor                                                                                 // 3
//code below, does that in abstract way                                                                             // 4
                                                                                                                    // 5
var http = Npm.require('http');                                                                                     // 6
                                                                                                                    // 7
var injectDataTemplate;                                                                                             // 8
Assets.getText('lib/server/inject_data.html', function(err, text) {                                                 // 9
  if(err) {                                                                                                         // 10
    console.error('Error reading fast-render inject_data.html: ', err.message);                                     // 11
  } else {                                                                                                          // 12
    injectDataTemplate = _.template(text.trim());                                                                   // 13
  }                                                                                                                 // 14
});                                                                                                                 // 15
                                                                                                                    // 16
var injectConfigTemplate;                                                                                           // 17
Assets.getText('lib/server/inject_config.html', function(err, text) {                                               // 18
  if(err) {                                                                                                         // 19
    console.error('Error reading fast-render inject_config.html: ', err.message);                                   // 20
  } else {                                                                                                          // 21
    injectConfigTemplate = _.template(text.trim());                                                                 // 22
  }                                                                                                                 // 23
});                                                                                                                 // 24
                                                                                                                    // 25
var originalWrite = http.OutgoingMessage.prototype.write;                                                           // 26
http.OutgoingMessage.prototype.write = function(chunk, encoding) {                                                  // 27
  //prevent hijacking other http requests                                                                           // 28
  if(this.queryData && !this.injected &&                                                                            // 29
    encoding === undefined && /<!DOCTYPE html>/.test(chunk)) {                                                      // 30
                                                                                                                    // 31
    //if cors headers included if may cause some security holes. see more:                                          // 32
    //so we simply turn off fast-render if we detect an cors header                                                 // 33
    //read more: http://goo.gl/eGwb4e                                                                               // 34
    if(this._headers['access-control-allow-origin']) {                                                              // 35
      var wanrMessage =                                                                                             // 36
        'warn: fast-render turned off due to CORS headers. read more: http://goo.gl/eGwb4e';                        // 37
      console.warn(wanrMessage);                                                                                    // 38
      originalWrite.call(this, chunk, encoding);                                                                    // 39
      return;                                                                                                       // 40
    }                                                                                                               // 41
                                                                                                                    // 42
    //inject config                                                                                                 // 43
    if(injectConfigTemplate) {                                                                                      // 44
      var jsonContent = JSON.stringify({                                                                            // 45
        subscriptions: this.queryData.subscriptions,                                                                // 46
        serverRoutePath: this.queryData.serverRoutePath,                                                            // 47
        subscriptionIdMap: {}, //map of ids and its subscription name                                               // 48
        loadedSubscriptions: {} //loaded Subscriptions, which have been forcely completed earlier                   // 49
      });                                                                                                           // 50
      var injectHtml = injectConfigTemplate({jsonContent: jsonContent});                                            // 51
      chunk = chunk.replace('<head>', '<head>\n' + injectHtml + '\n');                                              // 52
    } else {                                                                                                        // 53
      console.warn('injectConfigTemplate is not ready yet!');                                                       // 54
    }                                                                                                               // 55
                                                                                                                    // 56
    //inject data                                                                                                   // 57
    if(injectDataTemplate) {                                                                                        // 58
      var ejsonString = EJSON.stringify({                                                                           // 59
        collectionData: this.queryData.collectionData                                                               // 60
      });                                                                                                           // 61
      var injectHtml = injectDataTemplate({ejsonString: ejsonString});                                              // 62
      chunk = chunk.replace('</head>', injectHtml + '\n</head>');                                                   // 63
    } else {                                                                                                        // 64
      console.warn('injectDataTemplate is not ready yet!');                                                         // 65
    }                                                                                                               // 66
                                                                                                                    // 67
    this.injected = true;                                                                                           // 68
  }                                                                                                                 // 69
                                                                                                                    // 70
  originalWrite.call(this, chunk, encoding);                                                                        // 71
};                                                                                                                  // 72
                                                                                                                    // 73
//meteor algorithm to check if this is a meteor serving http request or not                                         // 74
//add routepolicy package to the fast-render                                                                        // 75
function appUrl(url) {                                                                                              // 76
  if (url === '/favicon.ico' || url === '/robots.txt')                                                              // 77
    return false;                                                                                                   // 78
                                                                                                                    // 79
  // NOTE: app.manifest is not a web standard like favicon.ico and                                                  // 80
  // robots.txt. It is a file name we have chosen to use for HTML5                                                  // 81
  // appcache URLs. It is included here to prevent using an appcache                                                // 82
  // then removing it from poisoning an app permanently. Eventually,                                                // 83
  // once we have server side routing, this won't be needed as                                                      // 84
  // unknown URLs with return a 404 automatically.                                                                  // 85
  if (url === '/app.manifest')                                                                                      // 86
    return false;                                                                                                   // 87
                                                                                                                    // 88
  // Avoid serving app HTML for declared routes such as /sockjs/.                                                   // 89
  if (typeof(RoutePolicy) != 'undefined' && RoutePolicy.classify(url))                                              // 90
    return false;                                                                                                   // 91
                                                                                                                    // 92
  // we currently return app HTML on all URLs by default                                                            // 93
  return true;                                                                                                      // 94
};                                                                                                                  // 95
                                                                                                                    // 96
//check page and add queries                                                                                        // 97
WebApp.connectHandlers.use(Npm.require('connect').cookieParser());                                                  // 98
WebApp.connectHandlers.use(function(req, res, next) {                                                               // 99
  if(appUrl(req.url)) {                                                                                             // 100
    var loginToken = req.cookies['meteor_login_token'];                                                             // 101
    FastRender._processRoutes(req.url, loginToken, function(queryData) {                                            // 102
      res.queryData = queryData;                                                                                    // 103
      if(res.queryData) {                                                                                           // 104
        res.queryData.serverRoutePath = req.url;                                                                    // 105
      }                                                                                                             // 106
      next();                                                                                                       // 107
    });                                                                                                             // 108
    //run our route handlers and add proper queryData                                                               // 109
  } else {                                                                                                          // 110
    next();                                                                                                         // 111
  }                                                                                                                 // 112
});                                                                                                                 // 113
                                                                                                                    // 114
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/fast-render/lib/server/iron_router_support.js                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
if(!Package['iron-router']) return;                                                                                 // 1
                                                                                                                    // 2
var RouteController = Package['iron-router'].RouteController;                                                       // 3
var ServerRouter = Package['iron-router'].ServerRouter;                                                             // 4
                                                                                                                    // 5
var currentSubscriptions = [];                                                                                      // 6
Meteor.subscribe = function(subscription) {                                                                         // 7
  currentSubscriptions.push(arguments);                                                                             // 8
};                                                                                                                  // 9
                                                                                                                    // 10
//assuming, no runtime routes will be added                                                                         // 11
Meteor.startup(function() {                                                                                         // 12
  Router.routes.forEach(function(route) {                                                                           // 13
    //resolve controller class                                                                                      // 14
    if(route.options && typeof route.options.controller == 'string') {                                              // 15
      route.options.controller = this[route.options.controller];                                                    // 16
    }                                                                                                               // 17
    handleRoute(route.name, route.options);                                                                         // 18
  });                                                                                                               // 19
                                                                                                                    // 20
  var globalWaitOn = Router.options && Router.options.waitOn;                                                       // 21
  if(typeof globalWaitOn == 'function') {                                                                           // 22
    FastRender.onAllRoutes(function(path) {                                                                         // 23
      var self = this;                                                                                              // 24
                                                                                                                    // 25
      currentSubscriptions = [];                                                                                    // 26
      globalWaitOn.call({path: path});                                                                              // 27
      currentSubscriptions.forEach(function(args) {                                                                 // 28
        self.subscribe.apply(self, args);                                                                           // 29
      });                                                                                                           // 30
    });                                                                                                             // 31
  }                                                                                                                 // 32
});                                                                                                                 // 33
                                                                                                                    // 34
function handleRoute(name, options) {                                                                               // 35
  var waitOnFunction;                                                                                               // 36
  if(!options) {                                                                                                    // 37
    return false;                                                                                                   // 38
  } else if(options.fastRender && typeof options.waitOn == 'function') {                                            // 39
    //do FR support                                                                                                 // 40
    waitOnFunction = options.waitOn;                                                                                // 41
    FastRender.route(getPath(), onRoute);                                                                           // 42
    return true;                                                                                                    // 43
  } else if(options.controller &&                                                                                   // 44
    options.controller.prototype &&                                                                                 // 45
    options.controller.prototype.fastRender &&                                                                      // 46
    typeof options.controller.prototype.waitOn == 'function') {                                                     // 47
                                                                                                                    // 48
    waitOnFunction = options.controller.prototype.waitOn;                                                           // 49
    FastRender.route(getPath(), onRoute);                                                                           // 50
    return true;                                                                                                    // 51
  } else {                                                                                                          // 52
    return false;                                                                                                   // 53
  }                                                                                                                 // 54
                                                                                                                    // 55
  //FastRender onRoute callback                                                                                     // 56
  function onRoute(params, path) {                                                                                  // 57
    var self = this;                                                                                                // 58
    var context = {                                                                                                 // 59
      params: params,                                                                                               // 60
      path: path                                                                                                    // 61
    };                                                                                                              // 62
                                                                                                                    // 63
    //reset subscriptions;                                                                                          // 64
    currentSubscriptions = [];                                                                                      // 65
    waitOnFunction.call(context);                                                                                   // 66
                                                                                                                    // 67
    currentSubscriptions.forEach(function(args) {                                                                   // 68
      self.subscribe.apply(self, args);                                                                             // 69
    });                                                                                                             // 70
  }                                                                                                                 // 71
                                                                                                                    // 72
  function getPath() {                                                                                              // 73
    return options.path || ("/" + name);                                                                            // 74
  }                                                                                                                 // 75
}                                                                                                                   // 76
                                                                                                                    // 77
FastRender.RouteController = RouteController.extend({                                                               // 78
  fastRender: true,                                                                                                 // 79
  //disabling any IR specific serverside stuffs                                                                     // 80
  where: 'client'                                                                                                   // 81
});                                                                                                                 // 82
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/cordova/plugin/meteor.cordova.js                                                                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
/*                                                                                                                // 1
                                                                                                                  // 2
Meteor - Cordova                                                                                                  // 3
                                                                                                                  // 4
It's a small interface for external meteor to communicate with native cordova                                     // 5
and events                                                                                                        // 6
                                                                                                                  // 7
                                                                                                                  // 8
arguments:                                                                                                        // 9
                                                                                                                  // 10
  meteorUrl - url to remote meteor                                                                                // 11
                                                                                                                  // 12
  options = {                                                                                                     // 13
    version - app shell version                                                                                   // 14
    appcache - should we rely on appcache                                                                         // 15
    onload(e, callbackUrlFlag) - callback for when the iframe is loaded with                                      // 16
    meteor or fallbackUrl (if callbackUrlFlag == true)                                                            // 17
    fallbackUrl - if load check fails then this url is called                                                     // 18
    debug - true or false - true then write to console on errors                                                  // 19
  }                                                                                                               // 20
                                                                                                                  // 21
  .load([ callback ])                                                                                             // 22
  callback(error) - is called at load test time - if appcache is relyed on then                                   // 23
                    this is call immediately                                                                      // 24
                                                                                                                  // 25
  .onError can be overwritten if wanting custom functionality - default is to                                     // 26
  fallback on error                                                                                               // 27
                                                                                                                  // 28
*/                                                                                                                // 29
                                                                                                                  // 30
                                                                                                                  // 31
if(!Array.isArray) {                                                                                              // 32
  Array.isArray = function (vArg) {                                                                               // 33
    return Object.prototype.toString.call(vArg) === '[object Array]';                                             // 34
  };                                                                                                              // 35
}                                                                                                                 // 36
                                                                                                                  // 37
EJSON = {};                                                                                                       // 38
                                                                                                                  // 39
EJSON.newBinary = function (len) {                                                                                // 40
  if (typeof Uint8Array === 'undefined' || typeof ArrayBuffer === 'undefined') {                                  // 41
    var ret = [];                                                                                                 // 42
    for (var i = 0; i < len; i++) {                                                                               // 43
      ret.push(0);                                                                                                // 44
    }                                                                                                             // 45
    ret.$Uint8ArrayPolyfill = true;                                                                               // 46
    return ret;                                                                                                   // 47
  }                                                                                                               // 48
  return new Uint8Array(new ArrayBuffer(len));                                                                    // 49
};                                                                                                                // 50
                                                                                                                  // 51
EJSON.isBinary = function (obj) {                                                                                 // 52
  return !!((typeof Uint8Array !== 'undefined' && obj instanceof Uint8Array) ||                                   // 53
    (obj && obj.$Uint8ArrayPolyfill));                                                                            // 54
};                                                                                                                // 55
                                                                                                                  // 56
EJSON.isGlobal = function (vArg) {                                                                                // 57
  return Object.prototype.toString.call(vArg) === '[object global]';                                              // 58
};                                                                                                                // 59
                                                                                                                  // 60
EJSON.emptyFunction = function() {};                                                                              // 61
                                                                                                                  // 62
EJSON.clone = function (v /* list of parents */) {                                                                // 63
  // How deep should we go                                                                                        // 64
  var maxLevel = 2;                                                                                               // 65
                                                                                                                  // 66
  // Check for circular references                                                                                // 67
  if (typeof arguments !== 'undefined') {                                                                         // 68
    if (arguments.length > maxLevel) {                                                                            // 69
      return EJSON.emptyFunction;                                                                                 // 70
    }                                                                                                             // 71
    for (var i = 1; i < arguments.length; i++) {                                                                  // 72
      if (v === arguments[i]) {                                                                                   // 73
        return EJSON.emptyFunction; //function() {}; // If JSON.stringify it'll be left out                       // 74
      }                                                                                                           // 75
    }                                                                                                             // 76
  }                                                                                                               // 77
                                                                                                                  // 78
  if (EJSON.isGlobal(v)) {                                                                                        // 79
    return EJSON.emptyFunction; //function() {}; // If JSON.stringify it'll be left out                           // 80
  }                                                                                                               // 81
                                                                                                                  // 82
  var ret;                                                                                                        // 83
  if (typeof v !== 'object') {                                                                                    // 84
    return v;                                                                                                     // 85
  }                                                                                                               // 86
  if (v === null) {                                                                                               // 87
    return null; // null has typeof "object"                                                                      // 88
  }                                                                                                               // 89
  if (v instanceof Date) {                                                                                        // 90
    return new Date(v.getTime());                                                                                 // 91
  }                                                                                                               // 92
  if (EJSON.isBinary(v)) {                                                                                        // 93
    ret = EJSON.newBinary(v.length);                                                                              // 94
    for (var i = 0; i < v.length; i++) {                                                                          // 95
      ret[i] = v[i];                                                                                              // 96
    }                                                                                                             // 97
    return ret;                                                                                                   // 98
  }                                                                                                               // 99
  var args = Array.prototype.slice.call(arguments);                                                               // 100
  args.unshift(1); // We add prefix an argument                                                                   // 101
                                                                                                                  // 102
  if (Array.isArray(v)) {                                                                                         // 103
    ret = [];                                                                                                     // 104
    for (var i = 0; i < v.length; i++){                                                                           // 105
      args[0] = v[i];                                                                                             // 106
      var value = EJSON.clone.apply(window, args);                                                                // 107
      if (value !== EJSON.emptyFunction) {                                                                        // 108
        ret[i] = value;                                                                                           // 109
      }                                                                                                           // 110
    }                                                                                                             // 111
                                                                                                                  // 112
    if (ret.length > 0) {                                                                                         // 113
      return ret;                                                                                                 // 114
    } else {                                                                                                      // 115
      return EJSON.emptyFunction;                                                                                 // 116
    }                                                                                                             // 117
  }                                                                                                               // 118
  // handle general user-defined typed Objects if they have a clone method                                        // 119
  if (typeof v.clone === 'function') {                                                                            // 120
    return v.clone();                                                                                             // 121
  }                                                                                                               // 122
  // handle other objects                                                                                         // 123
  ret = {};                                                                                                       // 124
  for (var key in v) {                                                                                            // 125
    if (v.hasOwnProperty(key)) {                                                                                  // 126
      args[0] = v[key];                                                                                           // 127
      var value = EJSON.clone.apply(window, args);                                                                // 128
      if (value !== EJSON.emptyFunction) {                                                                        // 129
        ret[key] = value;                                                                                         // 130
      }                                                                                                           // 131
    }                                                                                                             // 132
  }                                                                                                               // 133
                                                                                                                  // 134
  if (Object.keys(ret).length > 0) {                                                                              // 135
    return ret;                                                                                                   // 136
  } else {                                                                                                        // 137
    return EJSON.emptyFunction;                                                                                   // 138
  }                                                                                                               // 139
};                                                                                                                // 140
                                                                                                                  // 141
MeteorCordova = function(iframeId, options) {                                                                     // 142
  // Rig vars                                                                                                     // 143
  var self = this;                                                                                                // 144
  // Send queue until client is ready                                                                             // 145
  self.eventQueue = {};                                                                                           // 146
                                                                                                                  // 147
  self.activeEventListener = {};                                                                                  // 148
                                                                                                                  // 149
  self.handshakeActivated = false;                                                                                // 150
                                                                                                                  // 151
  self.testFrame = (options && options.testFrame)?options.testFrame:false;                                        // 152
                                                                                                                  // 153
  // Rig Options                                                                                                  // 154
  self.iframeId = iframeId;                                                                                       // 155
  self.debug = !!(options && options.debug && options.debug === true);                                            // 156
                                                                                                                  // 157
  // Testing purpose                                                                                              // 158
  if (self.testFrame !== false) {                                                                                 // 159
    self.iframe = self.testFrame;                                                                                 // 160
  } else {                                                                                                        // 161
    // Try to fetch the element                                                                                   // 162
    self.iframe = document.getElementById(self.iframeId);                                                         // 163
                                                                                                                  // 164
    self.url = self.iframe.src.replace(/\/+$/, '');                                                               // 165
                                                                                                                  // 166
    if (self.iframe) {                                                                                            // 167
      self.iframe.onload = function() {                                                                           // 168
        self.iframe.style.display = 'block';                                                                      // 169
        self.sendHandshake();                                                                                     // 170
      };                                                                                                          // 171
    } else {                                                                                                      // 172
      throw new Error('Could not find iFrame: ' + self.iframeId);                                                 // 173
    }                                                                                                             // 174
  }                                                                                                               // 175
                                                                                                                  // 176
  // We registrer the onload event - otherwise we just fail, can we catch error?                                  // 177
                                                                                                                  // 178
  self.send = function(message) {                                                                                 // 179
    if (self.iframe && self.iframe.contentWindow && self.handshakeActivated) {                                    // 180
      try {                                                                                                       // 181
        JSON.stringify(message);                                                                                  // 182
      } catch(err) {                                                                                              // 183
        message = { error: 'could not run json on message object' };                                              // 184
      }                                                                                                           // 185
      self.iframe.contentWindow.postMessage(message, self.url);                                                   // 186
    }                                                                                                             // 187
  };                                                                                                              // 188
                                                                                                                  // 189
  self.sendHandshake = function() {                                                                               // 190
    if (self.debug) {                                                                                             // 191
      console.log('------------ SEND HANDSHAKE!!! ------------');                                                 // 192
    }                                                                                                             // 193
    // Send a handshake to the client to make sure we are all on the same page                                    // 194
    self.iframe.contentWindow.postMessage({ handshake: 'Meteor Rocks!'}, self.url);                               // 195
  };                                                                                                              // 196
                                                                                                                  // 197
  self.triggerEvent = function(eventId, payload) {                                                                // 198
    if (self.debug) {                                                                                             // 199
      console.log('Event triggered: ' + eventId);                                                                 // 200
    }                                                                                                             // 201
    if (self.activeEventListener[eventId]) {                                                                      // 202
      self.send({                                                                                                 // 203
        eventId: eventId,                                                                                         // 204
        payload: payload                                                                                          // 205
      });                                                                                                         // 206
    } else {                                                                                                      // 207
      if (typeof self.eventQueue[eventId] === 'undefined') {                                                      // 208
        self.eventQueue[eventId] = [];                                                                            // 209
      }                                                                                                           // 210
      self.eventQueue[eventId].push({                                                                             // 211
        eventId: eventId,                                                                                         // 212
        payload: payload                                                                                          // 213
      });                                                                                                         // 214
    }                                                                                                             // 215
  };                                                                                                              // 216
                                                                                                                  // 217
  self.sendCallback = function(invokeId, funcId, args) {                                                          // 218
    if (self.debug) {                                                                                             // 219
      console.log('----Send callback ' + invokeId + ' func: ' + funcId);                                          // 220
    }                                                                                                             // 221
    self.send({                                                                                                   // 222
      invokeId: invokeId,                                                                                         // 223
      funcId: funcId,                                                                                             // 224
      args: args                                                                                                  // 225
    });                                                                                                           // 226
  };                                                                                                              // 227
                                                                                                                  // 228
  self.addEventListener = function(eventId) {                                                                     // 229
    // Check if any events have been waiting for subscription                                                     // 230
    if (typeof self.eventQueue[eventId] !== 'undefined') {                                                        // 231
      for (var i = 0; i < self.eventQueue[eventId].length; i++) {                                                 // 232
        self.send(self.eventQueue[eventId][i]);                                                                   // 233
      }                                                                                                           // 234
      // Clean up                                                                                                 // 235
      delete self.eventQueue[eventId];                                                                            // 236
    }                                                                                                             // 237
                                                                                                                  // 238
    // Set a flag so we dont have multiple event messages over the line                                           // 239
    self.activeEventListener[eventId] = true;                                                                     // 240
    // Well, some events are based on window - so we have to know this                                            // 241
    var windowEvents = { batterycritical: true, batterylow: true, batterystatus: true };                          // 242
    // Get the event taget for this eventId                                                                       // 243
    var target = (windowEvents[eventId]) ? window : document;                                                     // 244
                                                                                                                  // 245
    // Testing purpose                                                                                            // 246
    if (self.testFrame) {                                                                                         // 247
      target = self.testFrame;                                                                                    // 248
    }                                                                                                             // 249
                                                                                                                  // 250
    // Add the event listener                                                                                     // 251
    if (typeof target.addEventListener !== 'undefined') {                                                         // 252
      target.addEventListener(eventId, function(event) {                                                          // 253
        // Got an event, let et be triggered                                                                      // 254
        // make a json proper object out off the event...                                                         // 255
        var clonedEvent = EJSON.clone(event);                                                                     // 256
        self.triggerEvent(eventId, clonedEvent);                                                                  // 257
      }, false);                                                                                                  // 258
    }                                                                                                             // 259
  };                                                                                                              // 260
                                                                                                                  // 261
                                                                                                                  // 262
  // TODO: test this function - maybe isolate the get function / value part into                                  // 263
  // a seperate function for test abillity                                                                        // 264
  self.connection = function(msg) {                                                                               // 265
    // We rig a connection for the iframe.                                                                        // 266
    if (msg) {                                                                                                    // 267
                                                                                                                  // 268
      //  EVENT - If meteor wants to listen for events                                                            // 269
      if (typeof msg.eventId !== 'undefined') {                                                                   // 270
        if (self.debug) {                                                                                         // 271
          console.log('------------ REGISTRER EVENT ' + msg.eventId + ' ------------');                           // 272
        }                                                                                                         // 273
                                                                                                                  // 274
        self.addEventListener(msg.eventId);                                                                       // 275
      }                                                                                                           // 276
                                                                                                                  // 277
      if (typeof msg.handshake !== 'undefined' && msg.handshake === 'Meteor Rocks!') {                            // 278
        if (self.debug) {                                                                                         // 279
          console.log('------------ GOT HANDSHAKE!!! ------------');                                              // 280
        }                                                                                                         // 281
        self.handshakeActivated = true;                                                                           // 282
      }                                                                                                           // 283
                                                                                                                  // 284
      // CALL - if an function call then execute                                                                  // 285
      if (typeof msg.invokeId !== 'undefined' &&                                                                  // 286
              typeof msg.command !== 'undefined' &&                                                               // 287
              typeof msg.args !== 'undefined') {                                                                  // 288
                                                                                                                  // 289
        if (self.debug) {                                                                                         // 290
          console.log('------------ CALL METHOD ' + msg.command + ' ------------');                               // 291
        }                                                                                                         // 292
        // Guess we got something like window.console.log                                                         // 293
        var keys = msg.command.split('.');                                                                        // 294
        if (keys && keys.length > 0) {                                                                            // 295
          // Set reference to root element, window contains window - global                                       // 296
          var reference = window;                                                                                 // 297
                                                                                                                  // 298
          // We save the last element for execution or fetch                                                      // 299
          var last = keys[ keys.length - 1 ];                                                                     // 300
          // Iterate over command elements first ref: window[ keys[i] ]                                           // 301
          // We stop a level before hitting the last item: [0 .. n[                                               // 302
          for (var a = 0; a < keys.length - 1; a++) {                                                             // 303
            // Check that the reference scope isnt undefined                                                      // 304
            if (typeof reference !== 'undefined') {                                                               // 305
              // set new reference a level deeper                                                                 // 306
              reference = reference[ keys[ a ] ];                                                                 // 307
            } else {                                                                                              // 308
              // If reference is undefined then somethings wrong                                                  // 309
              throw new Error('Can not call ' + msg.command);                                                     // 310
            }                                                                                                     // 311
          }                                                                                                       // 312
                                                                                                                  // 313
          // We now have the second last element                                                                  // 314
          if (typeof reference !== 'undefined') {                                                                 // 315
                                                                                                                  // 316
            // Set the result to the last reference element                                                       // 317
            var result = reference[last];                                                                         // 318
                                                                                                                  // 319
            // Check if result is a function                                                                      // 320
            if (typeof result === 'function') {                                                                   // 321
              // We got a reference to a function so we have to prepare                                           // 322
              // arguments in an array                                                                            // 323
              var myArgs = [];                                                                                    // 324
              var counter = 0;                                                                                    // 325
              // We iterate over msg.args array                                                                   // 326
              if (typeof msg.args !== 'undefined') {                                                              // 327
                for (var i = 0; i < msg.args.length; i++) {                                                       // 328
                  // Get the current argument                                                                     // 329
                  var arg = msg.args[i];                                                                          // 330
                  // If argument is a value then push the value to new arguments                                  // 331
                  if (typeof arg.value !== 'undefined') {                                                         // 332
                    myArgs.push(arg.value);                                                                       // 333
                  }                                                                                               // 334
                  // If argument is a function then push a callback with invokeId                                 // 335
                  // as reference                                                                                 // 336
                  if (typeof arg.funcId !== 'undefined') {                                                        // 337
                    // push new argument                                                                          // 338
                    myArgs.push(                                                                                  // 339
                      // Bind values could use _.bind for this too                                                // 340
                      (function(invokeId, funcId) {                                                               // 341
                        // Return the actual function for the argument                                            // 342
                        return function(/* arguments */) {                                                        // 343
                          // Convert to an array to be consistent                                                 // 344
                          var args = [];                                                                          // 345
                          for (var i = 0; i < arguments.length; i++) {                                            // 346
                            args.push(arguments[i]);                                                              // 347
                          }                                                                                       // 348
                                                                                                                  // 349
                          self.sendCallback(invokeId, funcId, args);                                              // 350
                        };                                                                                        // 351
                      // Run with the values to bind                                                              // 352
                      })(msg.invokeId, arg.funcId)                                                                // 353
                    );                                                                                            // 354
                  }                                                                                               // 355
                }                                                                                                 // 356
              }                                                                                                   // 357
                                                                                                                  // 358
              // We call the referenced function, result was typeof function                                      // 359
              result = result.apply(reference, myArgs);                                                           // 360
            } // EO is a function                                                                                 // 361
                                                                                                                  // 362
            // We send the result of the var or function back to the resulting                                    // 363
            // Callback, this allways has funcId = 0                                                              // 364
            self.sendCallback(msg.invokeId, 0, [result]);                                                         // 365
          } // EO Got reference                                                                                   // 366
                                                                                                                  // 367
        } else {                                                                                                  // 368
          throw new Error('ERROR: command is out of scope');                                                      // 369
        }                                                                                                         // 370
      } // Execute a function or get a variable                                                                   // 371
    } // EO Got a message                                                                                         // 372
  };                                                                                                              // 373
                                                                                                                  // 374
  self.messageEventHandler = function(event) {                                                                    // 375
    // If message is from meteor then                                                                             // 376
    if (event.origin === self.url) {                                                                              // 377
      // We have a connection                                                                                     // 378
      self.connection(event && event.data);                                                                       // 379
    } else {                                                                                                      // 380
      throw new Error('Origins should match: ' + event.origin + ' === ' + self.url);                              // 381
    }                                                                                                             // 382
  };                                                                                                              // 383
                                                                                                                  // 384
  // Start listening for messages                                                                                 // 385
  if (typeof window.addEventListener !== 'undefined') {                                                           // 386
    window.addEventListener('message', self.messageEventHandler, false);                                          // 387
  }                                                                                                               // 388
                                                                                                                  // 389
  return self;                                                                                                    // 390
};                                                                                                                // 391
                                                                                                                  // 392
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/cordova/meteor.cordova.tests.js                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
'use strict';                                                                                                     // 1
                                                                                                                  // 2
function equals(a, b) {                                                                                           // 3
  return !!(JSON.stringify(a) === JSON.stringify(b));                                                             // 4
}                                                                                                                 // 5
                                                                                                                  // 6
window.testValue = 'ok';                                                                                          // 7
                                                                                                                  // 8
window.testFunction = function(name) {                                                                            // 9
  if (name) {                                                                                                     // 10
    return 'ok ' + name;                                                                                          // 11
  } else {                                                                                                        // 12
    return 'ok default';                                                                                          // 13
  }                                                                                                               // 14
};                                                                                                                // 15
                                                                                                                  // 16
window.testFunctionCallback = function(name, callback) {                                                          // 17
  if (typeof callback === 'function') {                                                                           // 18
    callback(name);                                                                                               // 19
  }                                                                                                               // 20
                                                                                                                  // 21
  return 'returning callback';                                                                                    // 22
};                                                                                                                // 23
                                                                                                                  // 24
window.parent = {                                                                                                 // 25
  postMessage: function(message) {                                                                                // 26
    testFrame.triggerMessage(JSON.stringify(message));                                                            // 27
  },                                                                                                              // 28
  triggerMessage: function(message) {                                                                             // 29
    client.messageEventHandler.apply(client, [{                                                                   // 30
      origin: 'file://',                                                                                          // 31
      data: JSON.parse(message)                                                                                   // 32
    }]);                                                                                                          // 33
  },                                                                                                              // 34
  location: {                                                                                                     // 35
    origin: 'file://'                                                                                             // 36
  }                                                                                                               // 37
};                                                                                                                // 38
                                                                                                                  // 39
var testFrame = {                                                                                                 // 40
  eventCallbacks: {},                                                                                             // 41
  contentWindow: {                                                                                                // 42
    postMessage: function(message) {                                                                              // 43
      window.parent.triggerMessage(JSON.stringify(message) );                                                     // 44
    }                                                                                                             // 45
  },                                                                                                              // 46
  addEventListener: function(eventId, callback) {                                                                 // 47
    var self = this;                                                                                              // 48
    if (typeof callback !== 'function') {                                                                         // 49
      throw new Error('testFrame.addEventListener expected callback as function');                                // 50
    }                                                                                                             // 51
    // Check if we need the init the array                                                                        // 52
    if (typeof self.eventCallbacks[eventId] === 'undefined') {                                                    // 53
      self.eventCallbacks[eventId] = [];                                                                          // 54
    }                                                                                                             // 55
    // Push to the array                                                                                          // 56
    self.eventCallbacks[eventId].push(callback);                                                                  // 57
  },                                                                                                              // 58
  triggerEvent: function(eventId, payload) {                                                                      // 59
    var self = this;                                                                                              // 60
    if (self.eventCallbacks[eventId]) {                                                                           // 61
      for (var i = 0; i < self.eventCallbacks[eventId].length; i++) {                                             // 62
        try {                                                                                                     // 63
          var callback = self.eventCallbacks[eventId][i];                                                         // 64
          callback.apply(window, [payload]);                                                                      // 65
        }catch(err) {                                                                                             // 66
        }                                                                                                         // 67
      }                                                                                                           // 68
    }                                                                                                             // 69
  },                                                                                                              // 70
  triggerMessage: function(message) {                                                                             // 71
    cordova.messageEventHandler.apply(cordova, [{                                                                 // 72
      origin: 'http://localhost:3000',                                                                            // 73
      data: JSON.parse(message)                                                                                   // 74
    }]);                                                                                                          // 75
  },                                                                                                              // 76
  onload: function() {}                                                                                           // 77
};                                                                                                                // 78
                                                                                                                  // 79
                                                                                                                  // 80
                                                                                                                  // 81
                                                                                                                  // 82
                                                                                                                  // 83
                                                                                                                  // 84
var cordova = new MeteorCordova('http://localhost:3000', {                                                        // 85
  // This shell version                                                                                           // 86
  version: '0.0.1',                                                                                               // 87
  // Do we rely on appcache?                                                                                      // 88
  appcache: false,                                                                                                // 89
  debug: false,                                                                                                   // 90
  testFrame: testFrame                                                                                            // 91
});                                                                                                               // 92
                                                                                                                  // 93
// Initialise the client last                                                                                     // 94
var client = new Cordova({                                                                                        // 95
  debug: false                                                                                                    // 96
});                                                                                                               // 97
                                                                                                                  // 98
Tinytest.add('MeteorCordova - test suite', function(test) {                                                       // 99
  test.isTrue(typeof cordova.testFrame !== false, 'cordova is rigged for iframe no testFrame?');                  // 100
});                                                                                                               // 101
                                                                                                                  // 102
/*                                                                                                                // 103
Tinytest.addAsync('MeteorCordova - load test, ', function (test, onComplete) {                                    // 104
  function load() {                                                                                               // 105
    cordova.load(function(error) {                                                                                // 106
      // This should not return an error since we are running localhost                                           // 107
      test.isUndefined(error, 'This test excpects to run localhost');                                             // 108
                                                                                                                  // 109
      onComplete();                                                                                               // 110
    });                                                                                                           // 111
                                                                                                                  // 112
  }                                                                                                               // 113
                                                                                                                  // 114
  load();                                                                                                         // 115
});                                                                                                               // 116
                                                                                                                  // 117
Tinytest.add('MeteorCordova - test handshake', function(test) {                                                   // 118
  testFrame.onload({ event: 'test' });                                                                            // 119
  test.isTrue(cordova.handshakeActivated, 'The cordova handshake should be activated');                           // 120
  test.isTrue(client.handshakeActivated, 'The client handshake should be activated');                             // 121
});                                                                                                               // 122
                                                                                                                  // 123
Tinytest.add('MeteorCordova - Events', function(test) {                                                           // 124
  var eventData = {                                                                                               // 125
    data: 'Hej'                                                                                                   // 126
  };                                                                                                              // 127
                                                                                                                  // 128
  var counter = 0;                                                                                                // 129
  var counterDeviceReady = 0;                                                                                     // 130
                                                                                                                  // 131
  test.isUndefined(client.eventCallbacks['test'], 'Before we start the event callbacks list should be empty');    // 132
  test.isUndefined(client.oneTimeEvents['test']);                                                                 // 133
                                                                                                                  // 134
  // Add an event listener                                                                                        // 135
  client.addEventListener('test', function(event) {                                                               // 136
    counter++;                                                                                                    // 137
    test.isTrue( equals(event, eventData) );                                                                      // 138
  });                                                                                                             // 139
                                                                                                                  // 140
  test.isTrue(typeof client.eventCallbacks['test'][0] === 'function', 'We would expect the handler as 0');        // 141
                                                                                                                  // 142
                                                                                                                  // 143
  // Now we trigger the event with data                                                                           // 144
  testFrame.triggerEvent('test', eventData);                                                                      // 145
  testFrame.triggerEvent('test', eventData);                                                                      // 146
  test.equal(counter, 2, 'Normal events should run every time');                                                  // 147
                                                                                                                  // 148
                                                                                                                  // 149
  test.isTrue(client.eventCallbacks['deviceready'] !== 'undefined', 'Before we start the event callbacks deviceready should exist');
  test.isTrue(client.eventCallbacks['deviceready'].length === 1, 'Before we start the event callbacks deviceready should have one initial event');
  test.isTrue(client.oneTimeEvents['deviceready']);                                                               // 152
                                                                                                                  // 153
  client.addEventListener('deviceready', function(event) {                                                        // 154
    counterDeviceReady++;                                                                                         // 155
    test.isTrue( equals(event, eventData) );                                                                      // 156
  });                                                                                                             // 157
                                                                                                                  // 158
                                                                                                                  // 159
  // Test oneTime event                                                                                           // 160
  testFrame.triggerEvent('deviceready', eventData);                                                               // 161
  testFrame.triggerEvent('deviceready', eventData);                                                               // 162
                                                                                                                  // 163
  test.equal(counterDeviceReady, 1, 'one time events should only be run once');                                   // 164
});                                                                                                               // 165
                                                                                                                  // 166
Tinytest.addAsync('MeteorCordova - call - variable', function (test, onComplete) {                                // 167
  // Test variables                                                                                               // 168
  client.call('window.testValue', [], function(value) {                                                           // 169
    test.equal(value, 'ok');                                                                                      // 170
    onComplete();                                                                                                 // 171
  });                                                                                                             // 172
                                                                                                                  // 173
  client.call('console.log', ['------ TEST CALL CONSOLE LOG ----------']);                                        // 174
});                                                                                                               // 175
                                                                                                                  // 176
Tinytest.add('MeteorCordova - call - function not found', function(test) {                                        // 177
  // Test variables                                                                                               // 178
  var errors = 0;                                                                                                 // 179
  try {                                                                                                           // 180
    client.call('im.not.found.foo');                                                                              // 181
  } catch(err) {                                                                                                  // 182
    errors++;                                                                                                     // 183
  }                                                                                                               // 184
                                                                                                                  // 185
  test.equal(errors, 1, 'Call should throw an error the function does not exist');                                // 186
});                                                                                                               // 187
                                                                                                                  // 188
Tinytest.addAsync('MeteorCordova - call - variable no args', function (test, onComplete) {                        // 189
  // Test variables                                                                                               // 190
  client.call('window.testValue', function(value) {                                                               // 191
    test.equal(value, 'ok');                                                                                      // 192
    onComplete();                                                                                                 // 193
  });                                                                                                             // 194
});                                                                                                               // 195
                                                                                                                  // 196
Tinytest.addAsync('MeteorCordova - call - method', function (test, onComplete) {                                  // 197
  // Test variables                                                                                               // 198
  client.call('window.testFunction', [], function(value) {                                                        // 199
    test.equal(value, 'ok default');                                                                              // 200
    onComplete();                                                                                                 // 201
  });                                                                                                             // 202
});                                                                                                               // 203
                                                                                                                  // 204
Tinytest.addAsync('MeteorCordova - call - method no args', function (test, onComplete) {                          // 205
  // Test variables                                                                                               // 206
  client.call('window.testFunction', function(value) {                                                            // 207
    test.equal(value, 'ok default');                                                                              // 208
    onComplete();                                                                                                 // 209
  });                                                                                                             // 210
});                                                                                                               // 211
                                                                                                                  // 212
Tinytest.addAsync('MeteorCordova - call - method no args no callback', function (test, onComplete) {              // 213
  // Test variables                                                                                               // 214
  window.testNoCallback = function() {                                                                            // 215
    onComplete();                                                                                                 // 216
  };                                                                                                              // 217
                                                                                                                  // 218
  // Call the function                                                                                            // 219
  client.call('window.testNoCallback');                                                                           // 220
});                                                                                                               // 221
                                                                                                                  // 222
Tinytest.addAsync('MeteorCordova - call - method with param', function (test, onComplete) {                       // 223
  // Test variables                                                                                               // 224
  client.call('window.testFunction', ['hello'], function(value) {                                                 // 225
    test.equal(value, 'ok hello');                                                                                // 226
    onComplete();                                                                                                 // 227
  });                                                                                                             // 228
});                                                                                                               // 229
                                                                                                                  // 230
                                                                                                                  // 231
                                                                                                                  // 232
Tinytest.addAsync('MeteorCordova - call - method with callback param', function (test, onComplete) {              // 233
  var counter = 0;                                                                                                // 234
                                                                                                                  // 235
  function complete() {                                                                                           // 236
    counter++;                                                                                                    // 237
    if (counter === 2) {                                                                                          // 238
      onComplete();                                                                                               // 239
    }                                                                                                             // 240
  }                                                                                                               // 241
                                                                                                                  // 242
  // Test variables                                                                                               // 243
  client.call('window.testFunctionCallback', ['hello', function(value) {                                          // 244
    // this is a function as parametre                                                                            // 245
    test.equal(value, 'hello');                                                                                   // 246
    complete();                                                                                                   // 247
  }], function(value) {                                                                                           // 248
    // Test the returning callback                                                                                // 249
    test.equal(value, 'returning callback');                                                                      // 250
    complete();                                                                                                   // 251
  });                                                                                                             // 252
                                                                                                                  // 253
});                                                                                                               // 254
                                                                                                                  // 255
// Test for no returning callbacks....                                                                            // 256
Tinytest.addAsync('MeteorCordova - call - method with callback param no returning', function (test, onComplete) { // 257
                                                                                                                  // 258
  // Test variables                                                                                               // 259
  client.call('window.testFunctionCallback', ['hello', function(value) {                                          // 260
    // this is a function as parametre                                                                            // 261
    test.equal(value, 'hello');                                                                                   // 262
    onComplete();                                                                                                 // 263
  }]);                                                                                                            // 264
                                                                                                                  // 265
});                                                                                                               // 266
                                                                                                                  // 267
                                                                                                                  // 268
Tinytest.addAsync('MeteorCordova - call - test this.remove', function (test, onComplete) {                        // 269
  var aCalled = 0;                                                                                                // 270
  var bCalled = 0;                                                                                                // 271
  var cCalled = 0;                                                                                                // 272
  var returnCalled = 0;                                                                                           // 273
                                                                                                                  // 274
  window.testFunctionCallback5 = function(callA, callB, callC) {                                                  // 275
    callA();                                                                                                      // 276
    callA(); // this should run                                                                                   // 277
    callB();                                                                                                      // 278
    callC();                                                                                                      // 279
    return 'returning callback';                                                                                  // 280
  };                                                                                                              // 281
                                                                                                                  // 282
                                                                                                                  // 283
  function functionA() {                                                                                          // 284
    this.remove();                                                                                                // 285
    aCalled++;                                                                                                    // 286
  }                                                                                                               // 287
                                                                                                                  // 288
  function functionB() {                                                                                          // 289
    bCalled++;                                                                                                    // 290
    this.removeAll();                                                                                             // 291
  }                                                                                                               // 292
                                                                                                                  // 293
  function functionC() {                                                                                          // 294
    test.fail('This function should never run?');                                                                 // 295
    cCalled++;                                                                                                    // 296
  }                                                                                                               // 297
                                                                                                                  // 298
  // Test variables                                                                                               // 299
  client.call('testFunctionCallback5', [functionA, functionB, functionC], function(value) {                       // 300
    // Test the returning callback                                                                                // 301
    test.equal(value, 'returning callback');                                                                      // 302
    returnCalled++;                                                                                               // 303
  });                                                                                                             // 304
                                                                                                                  // 305
  Meteor.setTimeout(function() {                                                                                  // 306
    test.equal(aCalled, 1, 'A should be called once');                                                            // 307
    test.equal(bCalled, 1, 'B should be called once');                                                            // 308
    test.equal(cCalled, 0, 'C should not be called');                                                             // 309
    test.equal(returnCalled, 0, 'Return should not be called');                                                   // 310
    onComplete();                                                                                                 // 311
  }, 100);                                                                                                        // 312
});                                                                                                               // 313
                                                                                                                  // 314
// Test for no returning callbacks....                                                                            // 315
Tinytest.addAsync('MeteorCordova - call - method with callback arguments', function (test, onComplete) {          // 316
                                                                                                                  // 317
  var funcCordova = 0;                                                                                            // 318
  var funcClient = 0;                                                                                             // 319
  var funcReturn = 0;                                                                                             // 320
                                                                                                                  // 321
  window.testFunctionCallback6 = function(callA) {                                                                // 322
    funcCordova++;                                                                                                // 323
    callA({message: 'you got mail' });                                                                            // 324
    return 'hello';                                                                                               // 325
  };                                                                                                              // 326
                                                                                                                  // 327
  var clientCallback = function(message) {                                                                        // 328
    test.equal('you got mail', message.message, 'Message is not correct');                                        // 329
    funcClient++;                                                                                                 // 330
  };                                                                                                              // 331
                                                                                                                  // 332
  // Test variables                                                                                               // 333
  client.call('testFunctionCallback6', [clientCallback], function(value) {                                        // 334
    // this is a function as parametre                                                                            // 335
    test.equal(value, 'hello');                                                                                   // 336
    funcReturn++;                                                                                                 // 337
  });                                                                                                             // 338
                                                                                                                  // 339
  Meteor.setTimeout(function() {                                                                                  // 340
    test.equal(funcCordova, 1, 'funcCordova should be called once');                                              // 341
    test.equal(funcClient, 1, 'funcClient should be called once');                                                // 342
    test.equal(funcReturn, 1, 'funcReturn should be called once');                                                // 343
    onComplete();                                                                                                 // 344
  }, 100);                                                                                                        // 345
                                                                                                                  // 346
});                                                                                                               // 347
                                                                                                                  // 348
                                                                                                                  // 349
Tinytest.add('MeteorCordova - clone', function(test) {                                                            // 350
  var date = new Date();                                                                                          // 351
  var c = { d: 'test', q: { test: 'test' } };                                                                     // 352
                                                                                                                  // 353
  c.circular = c;                                                                                                 // 354
                                                                                                                  // 355
  var a = {                                                                                                       // 356
    bool: false,                                                                                                  // 357
    nr: 10,                                                                                                       // 358
    neg: -10,                                                                                                     // 359
    real: 0.32,                                                                                                   // 360
    str: 'text',                                                                                                  // 361
    obj: {                                                                                                        // 362
      c: 'ok',                                                                                                    // 363
      d: {                                                                                                        // 364
        e: 'okay'                                                                                                 // 365
      }                                                                                                           // 366
    },                                                                                                            // 367
    func: function() { return 'function called'; },                                                               // 368
    date: date,                                                                                                   // 369
    nul: null,                                                                                                    // 370
    undef: undefined,                                                                                             // 371
    c1: c,                                                                                                        // 372
    c2: c                                                                                                         // 373
  };                                                                                                              // 374
                                                                                                                  // 375
  a.global = window;                                                                                              // 376
                                                                                                                  // 377
  a.circular = a;                                                                                                 // 378
                                                                                                                  // 379
  var b = {                                                                                                       // 380
    bool: false,                                                                                                  // 381
    nr: 10,                                                                                                       // 382
    neg: -10,                                                                                                     // 383
    real: 0.32,                                                                                                   // 384
    str: 'text',                                                                                                  // 385
    obj: {                                                                                                        // 386
      c: 'ok',                                                                                                    // 387
      d: {                                                                                                        // 388
        e: 'okay'                                                                                                 // 389
      }                                                                                                           // 390
    },                                                                                                            // 391
    //func: 'function called', // Removed                                                                         // 392
    date: new Date(date.getTime()),                                                                               // 393
    nul: null,                                                                                                    // 394
    undef: undefined,                                                                                             // 395
    c1: { d: 'test', q: { test: 'test' } },                                                                       // 396
    c2: { d: 'test', q: { test: 'test' } }                                                                        // 397
  };                                                                                                              // 398
                                                                                                                  // 399
  var aCloned = EJSON.clone(a);                                                                                   // 400
                                                                                                                  // 401
  test.equal(JSON.stringify(aCloned), JSON.stringify(b), 'clone didnt return as expected');                       // 402
});*/                                                                                                             // 403
//Test API:                                                                                                       // 404
//test.isFalse(v, msg)                                                                                            // 405
//test.isTrue(v, msg)                                                                                             // 406
//test.equalactual, expected, message, not                                                                        // 407
//test.length(obj, len)                                                                                           // 408
//test.include(s, v)                                                                                              // 409
//test.isNaN(v, msg)                                                                                              // 410
//test.isUndefined(v, msg)                                                                                        // 411
//test.isNotNull                                                                                                  // 412
//test.isNull                                                                                                     // 413
//test.throws(func)                                                                                               // 414
//test.instanceOf(obj, klass)                                                                                     // 415
//test.notEqual(actual, expected, message)                                                                        // 416
//test.runId()                                                                                                    // 417
//test.exception(exception)                                                                                       // 418
//test.expect_fail()                                                                                              // 419
//test.ok(doc)                                                                                                    // 420
//test.fail(doc)                                                                                                  // 421
//test.equal(a, b, msg)                                                                                           // 422
                                                                                                                  // 423
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

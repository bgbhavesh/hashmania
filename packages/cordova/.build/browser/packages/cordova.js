(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/cordova/cordova.client.js                                                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/*                                                                                                                  // 1
Code by RaiX 2013                                                                                                   // 2
                                                                                                                    // 3
*/                                                                                                                  // 4
                                                                                                                    // 5
Cordova = function(options) {                                                                                       // 6
  var self = this;                                                                                                  // 7
                                                                                                                    // 8
  self.debug = (options && typeof options.debug !== 'undefined')?options.debug: false;                              // 9
                                                                                                                    // 10
  self.plugins = {                                                                                                  // 11
    loaded: true                                                                                                    // 12
  };                                                                                                                // 13
                                                                                                                    // 14
  // Add plugins and set them deactivated until device is ready                                                     // 15
  if (typeof options !== 'undefined' &&                                                                             // 16
          typeof options.plugins !== 'undefined') {                                                                 // 17
                                                                                                                    // 18
    for (var key in options.plugins) {                                                                              // 19
      if (options.plugins[key] === true) {                                                                          // 20
        self.plugins[key] = false;                                                                                  // 21
      }                                                                                                             // 22
    }                                                                                                               // 23
                                                                                                                    // 24
  }                                                                                                                 // 25
                                                                                                                    // 26
  self.url = 'file://';                                                                                             // 27
                                                                                                                    // 28
  self.handshakeActivated = false;                                                                                  // 29
                                                                                                                    // 30
  // If no handshake we put messages into FIFO queue                                                                // 31
  self.messageQueue = [];                                                                                           // 32
                                                                                                                    // 33
  // array of invokeId of callbacks 0 = the returning callback                                                      // 34
  self.invokes = {};                                                                                                // 35
  self.invokeCounter = 0;                                                                                           // 36
                                                                                                                    // 37
  // array of eventId's containing an array of listeners                                                            // 38
  self.eventCallbacks = {};                                                                                         // 39
                                                                                                                    // 40
  // one time events                                                                                                // 41
  self.oneTimeEvents = {                                                                                            // 42
    'deviceready': true                                                                                             // 43
  };                                                                                                                // 44
                                                                                                                    // 45
  // Rig reactive ready var                                                                                         // 46
  self._ready = false;                                                                                              // 47
  self._readyDeps = new Deps.Dependency();                                                                          // 48
                                                                                                                    // 49
  self.isReady = function() {                                                                                       // 50
    self._readyDeps.depend();                                                                                       // 51
    return self._ready;                                                                                             // 52
  };                                                                                                                // 53
                                                                                                                    // 54
  self.setReady = function(value) {                                                                                 // 55
    if (value !== self._ready) {                                                                                    // 56
      self._ready = value;                                                                                          // 57
      self._readyDeps.changed();                                                                                    // 58
    }                                                                                                               // 59
  };                                                                                                                // 60
                                                                                                                    // 61
  self.addEventListener = function(eventId, callback) {                                                             // 62
    if (typeof callback !== 'function') {                                                                           // 63
      throw new Error('ERROR: Cordova.addEventListener expects callback as function');                              // 64
    }                                                                                                               // 65
    if (typeof self.eventCallbacks[eventId] === 'undefined') {                                                      // 66
                                                                                                                    // 67
      // Initialize                                                                                                 // 68
      self.eventCallbacks[eventId] = [];                                                                            // 69
                                                                                                                    // 70
      // Let the cordova know we are interested in this event                                                       // 71
      self.send({                                                                                                   // 72
        eventId: eventId                                                                                            // 73
      });                                                                                                           // 74
    }                                                                                                               // 75
    // Return the callback id                                                                                       // 76
    return self.eventCallbacks[eventId].push(callback);                                                             // 77
  };                                                                                                                // 78
                                                                                                                    // 79
  self.addInvokingCallback = function(invokeId, callback) {                                                         // 80
    if (typeof self.invokes[invokeId] === 'undefined') {                                                            // 81
      self.invokes[invokeId] = [];                                                                                  // 82
    }                                                                                                               // 83
    return self.invokes[invokeId].push(callback) - 1;                                                               // 84
  };                                                                                                                // 85
                                                                                                                    // 86
  // command 'window.test' args [a, v], callback returns resulting value                                            // 87
  // args and callback are both optional if no callback and args a function then                                    // 88
  // no args are assumed and callback isset                                                                         // 89
  self.call = function(command, args, callback) {                                                                   // 90
    // Support that the user skips the arguments and only sets a callback                                           // 91
    if (!callback && typeof args === 'function') {                                                                  // 92
      callback = args;                                                                                              // 93
      args = [];                                                                                                    // 94
    }                                                                                                               // 95
                                                                                                                    // 96
    callback = (callback) ? callback : function() {};                                                               // 97
                                                                                                                    // 98
    if (typeof callback !== 'function') {                                                                           // 99
      throw new Error('MeteorCordova expects callback as a function');                                              // 100
    }                                                                                                               // 101
                                                                                                                    // 102
    var invokeId = self.invokeCounter++;                                                                            // 103
    var myArgs = [];                                                                                                // 104
                                                                                                                    // 105
                                                                                                                    // 106
    // args should allways be an array                                                                              // 107
    args = (args && args.length)? args : [];                                                                        // 108
                                                                                                                    // 109
    // We set the returning callback id == 0                                                                        // 110
    self.addInvokingCallback(invokeId, callback);                                                                   // 111
                                                                                                                    // 112
    // We parse the arguments and filter out callback functions                                                     // 113
    for (var i = 0; i < args.length; i++) {                                                                         // 114
      var arg = args[i];                                                                                            // 115
      // If the argument is a function                                                                              // 116
      if (typeof arg === 'function') {                                                                              // 117
        var funcId = self.addInvokingCallback(invokeId, arg);                                                       // 118
        myArgs.push({ funcId: funcId });                                                                            // 119
      } else {                                                                                                      // 120
        myArgs.push({ value: arg });                                                                                // 121
      }                                                                                                             // 122
    } // EO arg preparing                                                                                           // 123
    // Send message                                                                                                 // 124
    self.send({                                                                                                     // 125
      invokeId: invokeId,                                                                                           // 126
      command: command,                                                                                             // 127
      args: myArgs                                                                                                  // 128
    });                                                                                                             // 129
  };                                                                                                                // 130
                                                                                                                    // 131
  self.send = function(message) {                                                                                   // 132
    // Check if we are in iframe                                                                                    // 133
    if (typeof window !== 'undefined' && window.parent &&                                                           // 134
            self.handshakeActivated) {                                                                              // 135
     try {                                                                                                          // 136
        JSON.stringify(message);                                                                                    // 137
      } catch(err) {                                                                                                // 138
        throw new Error('Cant send type of message, Error: ' + err);                                                // 139
        message = { error: 'could not run json on event object' };                                                  // 140
      }                                                                                                             // 141
      // Send the message directly                                                                                  // 142
      window.parent.postMessage(message, self.url);                                                                 // 143
    } else {                                                                                                        // 144
      // Add message to queue until device and meteor both are ready                                                // 145
      self.messageQueue.push(message);                                                                              // 146
    }                                                                                                               // 147
  };                                                                                                                // 148
                                                                                                                    // 149
  self.connection = function(msg) {                                                                                 // 150
    if (typeof msg.handshake !== 'undefined') {                                                                     // 151
      // We got a handshake from the cordova                                                                        // 152
      self.handshakeActivated = true;                                                                               // 153
      // Respond to parent do shake back                                                                            // 154
      self.send({ handshake: msg.handshake });                                                                      // 155
      // Resume queue FIFO                                                                                          // 156
      if (typeof self.messageQueue !== 'undefined') {                                                               // 157
        for (var i = 0; i < self.messageQueue.length; i++) {                                                        // 158
          self.send(self.messageQueue[i]);                                                                          // 159
        }                                                                                                           // 160
      }                                                                                                             // 161
      // Empty queue array                                                                                          // 162
      self.messageQueue = [];                                                                                       // 163
    }                                                                                                               // 164
                                                                                                                    // 165
    // We got an event to dispatch                                                                                  // 166
    if (typeof msg.eventId !== 'undefined') {                                                                       // 167
      var listeners = self.eventCallbacks[msg.eventId];                                                             // 168
      if (typeof listeners !== 'undefined') {                                                                       // 169
        // Trigger all listeners for this event                                                                     // 170
        for (var i = 0; i < listeners.length; i++) {                                                                // 171
          try {                                                                                                     // 172
            listeners[i].apply(window, [msg.payload]);                                                              // 173
          } catch(err) {                                                                                            // 174
          }                                                                                                         // 175
        }                                                                                                           // 176
        // If this is a one time event like deviceready remove all listeners                                        // 177
        if (self.oneTimeEvents[msg.eventId]) {                                                                      // 178
          delete self.eventCallbacks[msg.eventId];                                                                  // 179
        }                                                                                                           // 180
      }                                                                                                             // 181
    } // EO msg event                                                                                               // 182
                                                                                                                    // 183
    // We got a callback function invoked                                                                           // 184
    if (typeof msg.invokeId !== 'undefined' &&                                                                      // 185
            typeof msg.funcId !== 'undefined' &&                                                                    // 186
            typeof msg.args !== 'undefined') {                                                                      // 187
                                                                                                                    // 188
      // Get the invoke object                                                                                      // 189
      var invoked = self.invokes[msg.invokeId];                                                                     // 190
      if (typeof invoked === 'undefined') {                                                                         // 191
        return;                                                                                                     // 192
      }                                                                                                             // 193
                                                                                                                    // 194
      // Get the invoked function                                                                                   // 195
      var invokedFunction = invoked[msg.funcId];                                                                    // 196
      if (typeof invokedFunction === 'undefined') {                                                                 // 197
        return;                                                                                                     // 198
      }                                                                                                             // 199
                                                                                                                    // 200
      var functionToRemove = 0;                                                                                     // 201
      var removeInvoked = false;                                                                                    // 202
      // scope eg. this.remove() and this.removeAll() these will                                                    // 203
      // remove the current callback or all callbacks of this call                                                  // 204
      var removeScope = {                                                                                           // 205
        remove: function() {                                                                                        // 206
          functionToRemove = msg.funcId;                                                                            // 207
        },                                                                                                          // 208
        removeAll: function() {                                                                                     // 209
          removeInvoked = true;                                                                                     // 210
        }                                                                                                           // 211
      };                                                                                                            // 212
                                                                                                                    // 213
      if (typeof invokedFunction !== 'function') {                                                                  // 214
        throw new Error('ERROR: Execute client callback '+msg.invokeId+' funcId: '+msg.funcId + ' not a function'); // 215
        return;                                                                                                     // 216
      }                                                                                                             // 217
                                                                                                                    // 218
      // Make sure that we have an array to pass on in the apply                                                    // 219
      var args = [];                                                                                                // 220
      for (var key in msg.args) {                                                                                   // 221
        args.push(msg.args[key]);                                                                                   // 222
      }                                                                                                             // 223
                                                                                                                    // 224
      // All set, we callback the function                                                                          // 225
      try {                                                                                                         // 226
        invokedFunction.apply(removeScope, args);                                                                   // 227
      } catch(err) {                                                                                                // 228
        throw new Error('ERROR: Execute client callback '+msg.invokeId+' funcId: '+msg.funcId + ' Error: ' + err);  // 229
      }                                                                                                             // 230
                                                                                                                    // 231
      // If the returning callback then delete this?                                                                // 232
      // Garbage collection?                                                                                        // 233
      if (msg.funcId === functionToRemove || removeInvoked) {                                                       // 234
                                                                                                                    // 235
        if (Object.keys(invoked).length === 1 || removeInvoked) {                                                   // 236
          // The invoked method call only contains returning callback, we                                           // 237
          // Remove the invoke itself since there will be no more calls                                             // 238
          delete self.invokes[msg.invokeId];                                                                        // 239
        } else {                                                                                                    // 240
          // Even if we delete an item the index is preserved so the callback                                       // 241
          // funcId still points to the right function                                                              // 242
          delete self.invokes[msg.invokeId][msg.funcId];                                                            // 243
        }                                                                                                           // 244
      }                                                                                                             // 245
    } // EO method                                                                                                  // 246
                                                                                                                    // 247
    if (msg.error) {                                                                                                // 248
      throw new Error('Client got error back ' + msg.error);                                                        // 249
    }                                                                                                               // 250
  }; // EO Connection                                                                                               // 251
                                                                                                                    // 252
  self.messageEventHandler = function(event) {                                                                      // 253
    // If message is from meteor then                                                                               // 254
    if (event.origin === self.url) {                                                                                // 255
      // We have a connection                                                                                       // 256
      self.connection(event && event.data);                                                                         // 257
    }                                                                                                               // 258
  };                                                                                                                // 259
                                                                                                                    // 260
  // Start listening for messages                                                                                   // 261
  if (typeof window.addEventListener !== 'undefined') {                                                             // 262
    window.addEventListener('message', self.messageEventHandler, false);                                            // 263
  }                                                                                                                 // 264
                                                                                                                    // 265
  // Listen for deviceready event                                                                                   // 266
  self.addEventListener('deviceready', function() {                                                                 // 267
    // Set the ready flag                                                                                           // 268
    self.setReady(true);                                                                                            // 269
    // Activate all native plugin API's                                                                             // 270
    for (var key in self.plugins) {                                                                                 // 271
      if (self.plugins.hasOwnProperty(key)) {                                                                       // 272
        self.plugins[key] = true;                                                                                   // 273
      }                                                                                                             // 274
    }                                                                                                               // 275
  });                                                                                                               // 276
                                                                                                                    // 277
  return self;                                                                                                      // 278
};                                                                                                                  // 279
                                                                                                                    // 280
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/cordova/cordova.client.notification.js                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/*                                                                                                                  // 1
                                                                                                                    // 2
Meteor-Cordova, by RaiX                                                                                             // 3
                                                                                                                    // 4
Credit goes to @awatson1978 and @zeroasterisk                                                                       // 5
                                                                                                                    // 6
MIT License                                                                                                         // 7
                                                                                                                    // 8
This file extends the cordova with notification plugin api                                                          // 9
                                                                                                                    // 10
*/                                                                                                                  // 11
                                                                                                                    // 12
/*                                                                                                                  // 13
	beep - does what is says                                                                                           // 14
	beep(duration, type, callback);                                                                                    // 15
	callback when beep is done                                                                                         // 16
 */                                                                                                                 // 17
                                                                                                                    // 18
if (typeof Cordova === 'undefined') {                                                                               // 19
  alert('wrong load order?');                                                                                       // 20
}                                                                                                                   // 21
                                                                                                                    // 22
var beep = (function () {                                                                                           // 23
	try {                                                                                                              // 24
		// Fix up for prefixing                                                                                           // 25
		window.AudioContext = window.AudioContext||window.webkitAudioContext;                                             // 26
		context = new AudioContext();                                                                                     // 27
	} catch(e) {                                                                                                       // 28
		return function(duration, type, callback) {                                                                       // 29
			// Not supported by the browser                                                                                  // 30
		};                                                                                                                // 31
	}                                                                                                                  // 32
                                                                                                                    // 33
    return function (duration, type, callback) {                                                                    // 34
        var osc = context.createOscillator();                                                                       // 35
                                                                                                                    // 36
		// 0 Sine wave                                                                                                    // 37
		// 1 Square wave                                                                                                  // 38
		// 2 Sawtooth wave                                                                                                // 39
		// 3 Triangle wave                                                                                                // 40
        osc.type = (type % 4) || 0;                                                                                 // 41
                                                                                                                    // 42
        osc.connect(context.destination);                                                                           // 43
        osc.noteOn(0);                                                                                              // 44
        Meteor.setTimeout(function() {                                                                              // 45
          osc.noteOff(0);                                                                                           // 46
          // Callback when beep stops                                                                               // 47
          if (typeof callback === 'function') {                                                                     // 48
				    callback();                                                                                                 // 49
          }                                                                                                         // 50
        }, duration);                                                                                               // 51
    };                                                                                                              // 52
})();                                                                                                               // 53
                                                                                                                    // 54
//////////////// Unified common API //////////////////                                                              // 55
                                                                                                                    // 56
Cordova.prototype.alert = function(message, alertCallback, title, buttonName) {                                     // 57
	var self = this;                                                                                                   // 58
	console.log(typeof alertCallback);                                                                                 // 59
	if (typeof alertCallback !== 'function')                                                                           // 60
		throw new Error('Function "alert" expects a callback function');                                                  // 61
                                                                                                                    // 62
	if (self.plugins.notification || self.plugins.dialogs) {                                                           // 63
		self.call('navigator.notification.alert', [message, alertCallback, title, buttonName]);                           // 64
  } else {                                                                                                          // 65
		// title, buttonName ?                                                                                            // 66
		window.alert(message);                                                                                            // 67
		alertCallback();                                                                                                  // 68
	}                                                                                                                  // 69
};                                                                                                                  // 70
                                                                                                                    // 71
Cordova.prototype.confirm = function(message, confirmCallback, title, buttonLabels) {                               // 72
	var self = this;                                                                                                   // 73
	if (typeof confirmCallback !== 'function')                                                                         // 74
		throw new Error('Function "confirm" expects a callback function');                                                // 75
                                                                                                                    // 76
	if (self.plugins.notification || self.plugins.dialogs) {                                                           // 77
		self.call('navigator.notification.confirm', [message, confirmCallback, title, buttonLabels]);                     // 78
  } else {                                                                                                          // 79
		confirmCallback( window.confirm(message)? 1 : 2 );                                                                // 80
  }                                                                                                                 // 81
};                                                                                                                  // 82
                                                                                                                    // 83
Cordova.prototype.prompt = function(message, promptCallback, title, buttonLabels, defaultText) {                    // 84
	var self = this;                                                                                                   // 85
  if (typeof promptCallback !== 'function')                                                                         // 86
    throw new Error('Function "prompt" expects a callback function');                                               // 87
                                                                                                                    // 88
  if (self.plugins.notification || self.plugins.dialogs) {                                                          // 89
		self.call('navigator.notification.prompt', [message, promptCallback, title, buttonLabels, defaultText]);          // 90
  } else {                                                                                                          // 91
    var result = window.prompt(message, defaultText);                                                               // 92
		promptCallback({                                                                                                  // 93
      input1: result,                                                                                               // 94
      buttonIndex: (result === null || result === '')? 2 : 1                                                        // 95
    });                                                                                                             // 96
  }                                                                                                                 // 97
                                                                                                                    // 98
};                                                                                                                  // 99
                                                                                                                    // 100
Cordova.prototype.beep = function(times) {                                                                          // 101
	var self = this;                                                                                                   // 102
  times = times || 1;                                                                                               // 103
	if (self.plugins.notification || self.plugins.dialogs) {                                                           // 104
		self.call('navigator.notification.beep', [times]);                                                                // 105
  } else {                                                                                                          // 106
		var beepTimes = function(countDown) {                                                                             // 107
			beep(100, 3, function() {                                                                                        // 108
				if (countDown > 1)                                                                                              // 109
					beepTimes(countDown - 1);                                                                                      // 110
			});                                                                                                              // 111
		};                                                                                                                // 112
		beepTimes(times);                                                                                                 // 113
	}                                                                                                                  // 114
};                                                                                                                  // 115
                                                                                                                    // 116
Cordova.prototype.vibrate = function(milliseconds) {                                                                // 117
	var self = this;                                                                                                   // 118
	if (self.plugins.notification || self.plugins.vibration) {                                                         // 119
		self.call('navigator.notification.vibrate', [milliseconds]);                                                      // 120
  } else {                                                                                                          // 121
		beep(milliseconds, 0);                                                                                            // 122
  }                                                                                                                 // 123
};                                                                                                                  // 124
                                                                                                                    // 125
Cordova.prototype.close = function() {                                                                              // 126
  var self = this;                                                                                                  // 127
  self.call('navigator.app.exitApp');                                                                               // 128
};                                                                                                                  // 129
                                                                                                                    // 130
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

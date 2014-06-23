(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/collectionapi/collectionapi.js                                                                  //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
CollectionAPI = function(options) {                                                                         // 1
  var self = this;                                                                                          // 2
                                                                                                            // 3
  self.version = '0.1.15';                                                                                  // 4
  self._url = Npm.require('url');                                                                           // 5
  self._querystring = Npm.require('querystring');                                                           // 6
  self._fiber = Npm.require('fibers');                                                                      // 7
  self._collections = {};                                                                                   // 8
  self.options = {                                                                                          // 9
    apiPath: 'collectionapi',                                                                               // 10
    standAlone: false,                                                                                      // 11
    sslEnabled: false,                                                                                      // 12
    listenPort: 3005,                                                                                       // 13
    listenHost: undefined,                                                                                  // 14
    authToken: undefined,                                                                                   // 15
    privateKeyFile: 'privatekey.pem',                                                                       // 16
    certificateFile: 'certificate.pem'                                                                      // 17
  };                                                                                                        // 18
  _.extend(self.options, options || {});                                                                    // 19
};                                                                                                          // 20
                                                                                                            // 21
CollectionAPI.prototype.addCollection = function(collection, path, options) {                               // 22
  var self = this;                                                                                          // 23
                                                                                                            // 24
  var collectionOptions = {};                                                                               // 25
  collectionOptions[path] = {                                                                               // 26
    collection: collection,                                                                                 // 27
    options: options || {}                                                                                  // 28
  };                                                                                                        // 29
  _.extend(self._collections, collectionOptions);                                                           // 30
};                                                                                                          // 31
                                                                                                            // 32
CollectionAPI.prototype.start = function() {                                                                // 33
  var self = this;                                                                                          // 34
  var httpServer, httpOptions, scheme;                                                                      // 35
                                                                                                            // 36
  var startupMessage = 'Collection API v' + self.version;                                                   // 37
                                                                                                            // 38
  if (self.options.standAlone === true) {                                                                   // 39
    if (self.options.sslEnabled === true) {                                                                 // 40
      scheme = 'https://';                                                                                  // 41
      httpServer = Npm.require('https');                                                                    // 42
      var fs = Npm.require('fs');                                                                           // 43
                                                                                                            // 44
      httpOptions = {                                                                                       // 45
        key: fs.readFileSync(self.options.privateKeyFile),                                                  // 46
        cert: fs.readFileSync(self.options.certificateFile)                                                 // 47
      };                                                                                                    // 48
    } else {                                                                                                // 49
      scheme = 'http://';                                                                                   // 50
      httpServer = Npm.require('http');                                                                     // 51
    }                                                                                                       // 52
                                                                                                            // 53
    self._httpServer = httpServer.createServer(httpOptions);                                                // 54
    self._httpServer.addListener('request', function(request, response) { new CollectionAPI._requestListener(self, request, response); });
    self._httpServer.listen(self.options.listenPort, self.options.listenHost);                              // 56
    console.log(startupMessage + ' running as a stand-alone server on ' +  scheme + (self.options.listenHost || 'localhost') + ':' + self.options.listenPort + '/' + (self.options.apiPath || ''));
  } else {                                                                                                  // 58
                                                                                                            // 59
    RoutePolicy.declare('/' + this.options.apiPath + '/', 'network');                                       // 60
                                                                                                            // 61
    WebApp.connectHandlers.use(function(req, res, next) {                                                   // 62
      if (req.url.split('/')[1] !== self.options.apiPath) {                                                 // 63
        next();                                                                                             // 64
        return;                                                                                             // 65
      }                                                                                                     // 66
      self._fiber(function () {                                                                             // 67
        new CollectionAPI._requestListener(self, req, res);                                                 // 68
      }).run();                                                                                             // 69
    });                                                                                                     // 70
                                                                                                            // 71
    console.log(startupMessage + ' running at /' + this.options.apiPath);                                   // 72
  }                                                                                                         // 73
};                                                                                                          // 74
                                                                                                            // 75
CollectionAPI.prototype._collectionOptions = function(requestPath) {                                        // 76
  var self = this;                                                                                          // 77
  return self._collections[requestPath.collectionPath] ? self._collections[requestPath.collectionPath].options : undefined;
};                                                                                                          // 79
                                                                                                            // 80
CollectionAPI._requestListener = function (server, request, response) {                                     // 81
  var self = this;                                                                                          // 82
                                                                                                            // 83
  self._server = server;                                                                                    // 84
  self._request = request;                                                                                  // 85
  self._response = response;                                                                                // 86
                                                                                                            // 87
  self._requestUrl = self._server._url.parse(self._request.url);                                            // 88
                                                                                                            // 89
  // Check for the X-Auth-Token header or auth-token in the query string                                    // 90
  self._requestAuthToken = self._request.headers['x-auth-token'] ? self._request.headers['x-auth-token'] : self._server._querystring.parse(self._requestUrl.query)['auth-token'];
                                                                                                            // 92
  var requestPath;                                                                                          // 93
  if (self._server.options.standAlone === true && ! self._server.options.apiPath) {                         // 94
    requestPath = self._requestUrl.pathname.split('/').slice(1,3);                                          // 95
  } else {                                                                                                  // 96
    requestPath = self._requestUrl.pathname.split('/').slice(2,4);                                          // 97
  }                                                                                                         // 98
                                                                                                            // 99
  self._requestPath = {                                                                                     // 100
    collectionPath: requestPath[0],                                                                         // 101
    collectionId: requestPath[1]                                                                            // 102
  };                                                                                                        // 103
                                                                                                            // 104
  self._requestCollection = self._server._collections[self._requestPath.collectionPath] ? self._server._collections[self._requestPath.collectionPath].collection : undefined;
                                                                                                            // 106
  if (!self._authenticate()) {                                                                              // 107
    return self._unauthorizedResponse('Invalid/Missing Auth Token');                                        // 108
  }                                                                                                         // 109
                                                                                                            // 110
  if (!self._requestCollection) {                                                                           // 111
    return self._notFoundResponse('Collection Object Not Found');                                           // 112
  }                                                                                                         // 113
                                                                                                            // 114
  return self._handleRequest();                                                                             // 115
};                                                                                                          // 116
                                                                                                            // 117
CollectionAPI._requestListener.prototype._authenticate = function() {                                       // 118
  var self = this;                                                                                          // 119
  var collectionOptions = self._server._collectionOptions(self._requestPath);                               // 120
                                                                                                            // 121
  // Check the collection's auth token                                                                      // 122
  if (collectionOptions && collectionOptions.authToken) {                                                   // 123
    return self._requestAuthToken === collectionOptions.authToken;                                          // 124
  }                                                                                                         // 125
                                                                                                            // 126
  // Check the global auth token                                                                            // 127
  if (self._server.options.authToken) {                                                                     // 128
    return self._requestAuthToken === self._server.options.authToken;                                       // 129
  }                                                                                                         // 130
                                                                                                            // 131
  return true;                                                                                              // 132
};                                                                                                          // 133
                                                                                                            // 134
CollectionAPI._requestListener.prototype._handleRequest = function() {                                      // 135
  var self = this;                                                                                          // 136
                                                                                                            // 137
  if (!self._requestMethodAllowed(self._request.method)) {                                                  // 138
    return self._notSupportedResponse();                                                                    // 139
  }                                                                                                         // 140
                                                                                                            // 141
  switch (self._request.method) {                                                                           // 142
    case 'GET':                                                                                             // 143
      return self._getRequest();                                                                            // 144
    case 'POST':                                                                                            // 145
      return self._postRequest();                                                                           // 146
    case 'PUT':                                                                                             // 147
      return self._putRequest();                                                                            // 148
    case 'DELETE':                                                                                          // 149
      return self._deleteRequest();                                                                         // 150
    default:                                                                                                // 151
      return self._notSupportedResponse();                                                                  // 152
  }                                                                                                         // 153
};                                                                                                          // 154
                                                                                                            // 155
CollectionAPI._requestListener.prototype._requestMethodAllowed = function (method) {                        // 156
  var self = this;                                                                                          // 157
  var collectionOptions = self._server._collectionOptions(self._requestPath);                               // 158
                                                                                                            // 159
  if (collectionOptions && collectionOptions.methods) {                                                     // 160
    return _.indexOf(collectionOptions.methods, method) >= 0;                                               // 161
  }                                                                                                         // 162
                                                                                                            // 163
  return true;                                                                                              // 164
};                                                                                                          // 165
                                                                                                            // 166
CollectionAPI._requestListener.prototype._beforeHandling = function (method) {                              // 167
  var self = this;                                                                                          // 168
  var collectionOptions = self._server._collectionOptions(self._requestPath);                               // 169
                                                                                                            // 170
  if (collectionOptions && collectionOptions.before && collectionOptions.before[method] &&  _.isFunction(collectionOptions.before[method])) {
    return collectionOptions.before[method].apply(self, _.rest(arguments));                                 // 172
  }                                                                                                         // 173
                                                                                                            // 174
  return true;                                                                                              // 175
}                                                                                                           // 176
                                                                                                            // 177
CollectionAPI._requestListener.prototype._getRequest = function(fromPutRequest) {                           // 178
  var self = this;                                                                                          // 179
                                                                                                            // 180
  self._server._fiber(function() {                                                                          // 181
                                                                                                            // 182
    try {                                                                                                   // 183
      // TODO: A better way to do this?                                                                     // 184
      var collection_result = self._requestPath.collectionId !== undefined ? self._requestCollection.find(self._requestPath.collectionId) : self._requestCollection.find();
                                                                                                            // 186
      var records = [];                                                                                     // 187
      collection_result.forEach(function(record) {                                                          // 188
        records.push(record);                                                                               // 189
      });                                                                                                   // 190
                                                                                                            // 191
      if(!self._beforeHandling('GET',  self._requestPath.collectionId, records)) {                          // 192
        if (fromPutRequest) {                                                                               // 193
          return records.length ? self._noContentResponse() : self._notFoundResponse('No Record(s) Found'); // 194
        }                                                                                                   // 195
        return self._rejectedResponse("Could not get that collection/object.");                             // 196
      }                                                                                                     // 197
                                                                                                            // 198
      records = _.compact(records);                                                                         // 199
                                                                                                            // 200
      if (records.length === 0) {                                                                           // 201
        return self._notFoundResponse('No Record(s) Found');                                                // 202
      }                                                                                                     // 203
                                                                                                            // 204
      return self._okResponse(JSON.stringify(records));                                                     // 205
                                                                                                            // 206
    } catch (e) {                                                                                           // 207
      return self._internalServerErrorResponse(e);                                                          // 208
    }                                                                                                       // 209
                                                                                                            // 210
  }).run();                                                                                                 // 211
                                                                                                            // 212
};                                                                                                          // 213
                                                                                                            // 214
CollectionAPI._requestListener.prototype._putRequest = function() {                                         // 215
  var self = this;                                                                                          // 216
                                                                                                            // 217
  if (! self._requestPath.collectionId) {                                                                   // 218
    return self._notFoundResponse('Missing _id');                                                           // 219
  }                                                                                                         // 220
                                                                                                            // 221
  var requestData = '';                                                                                     // 222
                                                                                                            // 223
  self._request.on('data', function(chunk) {                                                                // 224
    requestData += chunk.toString();                                                                        // 225
  });                                                                                                       // 226
                                                                                                            // 227
  self._request.on('end', function() {                                                                      // 228
    self._server._fiber(function() {                                                                        // 229
      try {                                                                                                 // 230
        var obj = JSON.parse(requestData);                                                                  // 231
                                                                                                            // 232
        if(!self._beforeHandling('PUT', self._requestPath.collectionId, self._requestCollection.findOne(self._requestPath.collectionId), obj)) {
          return self._rejectedResponse("Could not put that object.");                                      // 234
        }                                                                                                   // 235
        self._requestCollection.update(self._requestPath.collectionId, obj);                                // 236
      } catch (e) {                                                                                         // 237
        return self._internalServerErrorResponse(e);                                                        // 238
      }                                                                                                     // 239
      return self._getRequest('fromPutRequest');                                                            // 240
    }).run();                                                                                               // 241
  });                                                                                                       // 242
                                                                                                            // 243
};                                                                                                          // 244
                                                                                                            // 245
CollectionAPI._requestListener.prototype._deleteRequest = function() {                                      // 246
  var self = this;                                                                                          // 247
                                                                                                            // 248
  if (! self._requestPath.collectionId) {                                                                   // 249
    return self._notFoundResponse('Missing _id');                                                           // 250
  }                                                                                                         // 251
                                                                                                            // 252
  self._server._fiber(function() {                                                                          // 253
    try {                                                                                                   // 254
      if(!self._beforeHandling('DELETE', self._requestPath.collectionId, self._requestCollection.findOne(self._requestPath.collectionId))) {
        return self._rejectedResponse("Could not delete that object.");                                     // 256
      }                                                                                                     // 257
      self._requestCollection.remove(self._requestPath.collectionId);                                       // 258
    } catch (e) {                                                                                           // 259
      return self._internalServerErrorResponse(e);                                                          // 260
    }                                                                                                       // 261
    return self._okResponse('');                                                                            // 262
  }).run();                                                                                                 // 263
};                                                                                                          // 264
                                                                                                            // 265
CollectionAPI._requestListener.prototype._postRequest = function() {                                        // 266
  var self = this;                                                                                          // 267
  var requestData = '';                                                                                     // 268
                                                                                                            // 269
  self._request.on('data', function(chunk) {                                                                // 270
    requestData += chunk.toString();                                                                        // 271
  });                                                                                                       // 272
                                                                                                            // 273
  self._request.on('end', function() {                                                                      // 274
    self._server._fiber(function() {                                                                        // 275
      try {                                                                                                 // 276
        var obj = JSON.parse(requestData);                                                                  // 277
                                                                                                            // 278
        if(!self._beforeHandling('POST', obj)) {                                                            // 279
          return self._rejectedResponse("Could not post that object.");                                     // 280
        }                                                                                                   // 281
        self._requestPath.collectionId = self._requestCollection.insert(obj);                               // 282
      } catch (e) {                                                                                         // 283
        return self._internalServerErrorResponse(e);                                                        // 284
      }                                                                                                     // 285
      return self._createdResponse(JSON.stringify({_id: self._requestPath.collectionId}));                  // 286
    }).run();                                                                                               // 287
  });                                                                                                       // 288
};                                                                                                          // 289
                                                                                                            // 290
CollectionAPI._requestListener.prototype._okResponse = function(body) {                                     // 291
  var self = this;                                                                                          // 292
  self._sendResponse(200, body);                                                                            // 293
};                                                                                                          // 294
                                                                                                            // 295
CollectionAPI._requestListener.prototype._createdResponse = function(body) {                                // 296
  var self = this;                                                                                          // 297
  self._sendResponse(201, body);                                                                            // 298
};                                                                                                          // 299
                                                                                                            // 300
CollectionAPI._requestListener.prototype._noContentResponse = function() {                                  // 301
  var self = this;                                                                                          // 302
  self._sendResponse(204, '');                                                                              // 303
};                                                                                                          // 304
                                                                                                            // 305
CollectionAPI._requestListener.prototype._notSupportedResponse = function() {                               // 306
  var self = this;                                                                                          // 307
  self._sendResponse(501, '');                                                                              // 308
};                                                                                                          // 309
                                                                                                            // 310
CollectionAPI._requestListener.prototype._unauthorizedResponse = function(body) {                           // 311
  var self = this;                                                                                          // 312
  self._sendResponse(401, JSON.stringify({message: body.toString()}));                                      // 313
};                                                                                                          // 314
                                                                                                            // 315
CollectionAPI._requestListener.prototype._notFoundResponse = function(body) {                               // 316
  var self = this;                                                                                          // 317
  self._sendResponse(404, JSON.stringify({message: body.toString()}));                                      // 318
};                                                                                                          // 319
                                                                                                            // 320
CollectionAPI._requestListener.prototype._rejectedResponse= function(body) {                                // 321
  var self = this;                                                                                          // 322
  self._sendResponse(409, JSON.stringify({message: body.toString()}));                                      // 323
};                                                                                                          // 324
                                                                                                            // 325
CollectionAPI._requestListener.prototype._internalServerErrorResponse = function(body) {                    // 326
  var self = this;                                                                                          // 327
  self._sendResponse(500, JSON.stringify({error: body.toString()}));                                        // 328
};                                                                                                          // 329
                                                                                                            // 330
CollectionAPI._requestListener.prototype._sendResponse = function(statusCode, body) {                       // 331
  var self = this;                                                                                          // 332
  self._response.statusCode = statusCode;                                                                   // 333
  self._response.setHeader('Content-Length', Buffer.byteLength(body, 'utf8'));                              // 334
  self._response.setHeader('Content-Type', 'application/json');                                             // 335
  self._response.write(body);                                                                               // 336
  self._response.end();                                                                                     // 337
};                                                                                                          // 338
                                                                                                            // 339
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

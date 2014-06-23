//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var Deps = Package.deps.Deps;
var _ = Package.underscore._;
var EJSON = Package.ejson.EJSON;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var RouteController, Route, Router, IronLocation, Utils, IronRouter, WaitList, hasOld, paramParts, href, setState, added;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/iron-router/lib/utils.js                                                                  //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
/**                                                                                                   // 1
 * Utility methods available privately to the package.                                                // 2
 */                                                                                                   // 3
                                                                                                      // 4
Utils = {};                                                                                           // 5
                                                                                                      // 6
/**                                                                                                   // 7
 * global object on node or window object in the browser.                                             // 8
 */                                                                                                   // 9
                                                                                                      // 10
Utils.global = (function () { return this; })();                                                      // 11
                                                                                                      // 12
/**                                                                                                   // 13
 * Assert that the given condition is truthy.                                                         // 14
 *                                                                                                    // 15
 * @param {Boolean} condition The boolean condition to test for truthiness.                           // 16
 * @param {String} msg The error message to show if the condition is falsy.                           // 17
 */                                                                                                   // 18
                                                                                                      // 19
Utils.assert = function (condition, msg) {                                                            // 20
  if (!condition)                                                                                     // 21
    throw new Error(msg);                                                                             // 22
};                                                                                                    // 23
                                                                                                      // 24
var warn = function (msg) {                                                                           // 25
  if (Router.options.supressWarnings !== true) {                                                      // 26
    console && console.warn && console.warn(msg);                                                     // 27
  }                                                                                                   // 28
};                                                                                                    // 29
                                                                                                      // 30
Utils.warn = function (condition, msg) {                                                              // 31
  if (!condition)                                                                                     // 32
    warn(msg);                                                                                        // 33
};                                                                                                    // 34
                                                                                                      // 35
/**                                                                                                   // 36
 * deprecatation notice to the user which can be a string or object                                   // 37
 * of the form:                                                                                       // 38
 *                                                                                                    // 39
 * {                                                                                                  // 40
 *  name: 'somePropertyOrMethod',                                                                     // 41
 *  where: 'RouteController',                                                                         // 42
 *  instead: 'someOtherPropertyOrMethod',                                                             // 43
 *  message: ':name is deprecated. Please use :instead instead'                                       // 44
 * }                                                                                                  // 45
 */                                                                                                   // 46
Utils.notifyDeprecated = function (info) {                                                            // 47
  var name;                                                                                           // 48
  var instead;                                                                                        // 49
  var message;                                                                                        // 50
  var where;                                                                                          // 51
  var defaultMessage = "[:where] ':name' is deprecated. Please use ':instead' instead.";              // 52
                                                                                                      // 53
  if (_.isObject(info)) {                                                                             // 54
    name = info.name;                                                                                 // 55
    instead = info.instead;                                                                           // 56
    message = info.message || defaultMessage;                                                         // 57
    where = info.where || 'IronRouter';                                                               // 58
  } else {                                                                                            // 59
    message = info;                                                                                   // 60
    name = '';                                                                                        // 61
    instead = '';                                                                                     // 62
    where = '';                                                                                       // 63
  }                                                                                                   // 64
                                                                                                      // 65
  warn(                                                                                               // 66
      '<deprecated> ' +                                                                               // 67
      message                                                                                         // 68
      .replace(':name', name)                                                                         // 69
      .replace(':instead', instead)                                                                   // 70
      .replace(':where', where) +                                                                     // 71
      ' ' +                                                                                           // 72
      (new Error).stack                                                                               // 73
  );                                                                                                  // 74
};                                                                                                    // 75
                                                                                                      // 76
Utils.withDeprecatedNotice = function (info, fn, thisArg) {                                           // 77
  return function () {                                                                                // 78
    Utils.notifyDeprecated(info);                                                                     // 79
    return fn && fn.apply(thisArg || this, arguments);                                                // 80
  };                                                                                                  // 81
};                                                                                                    // 82
                                                                                                      // 83
// warn if we already have a deprecate prototype                                                      // 84
// method on Function!                                                                                // 85
Utils.warn(!Function.prototype.deprecate, "It looks like the Function.prototype already has a deprecate method, and the iron-router package is about to override it!");
                                                                                                      // 87
// so we can do this:                                                                                 // 88
//   getController: function () {                                                                     // 89
//    ...                                                                                             // 90
//   }.deprecate({...})                                                                               // 91
Function.prototype.deprecate = function (info) {                                                      // 92
  var fn = this;                                                                                      // 93
  return Utils.withDeprecatedNotice(info, fn);                                                        // 94
};                                                                                                    // 95
                                                                                                      // 96
/**                                                                                                   // 97
 * Given the name of a property, resolves to the value. Works with namespacing                        // 98
 * too. If first parameter is already a value that isn't a string it's returned                       // 99
 * immediately.                                                                                       // 100
 *                                                                                                    // 101
 * Examples:                                                                                          // 102
 *  'SomeClass' => window.SomeClass || global.someClass                                               // 103
 *  'App.namespace.SomeClass' => window.App.namespace.SomeClass                                       // 104
 *                                                                                                    // 105
 * @param {String|Object} nameOrValue                                                                 // 106
 */                                                                                                   // 107
                                                                                                      // 108
Utils.resolveValue = function (nameOrValue) {                                                         // 109
  var global = Utils.global;                                                                          // 110
  var parts;                                                                                          // 111
  var ptr;                                                                                            // 112
                                                                                                      // 113
  if (_.isString(nameOrValue)) {                                                                      // 114
    parts = nameOrValue.split('.')                                                                    // 115
    ptr = global;                                                                                     // 116
    for (var i = 0; i < parts.length; i++) {                                                          // 117
      ptr = ptr[parts[i]];                                                                            // 118
      if (!ptr)                                                                                       // 119
        return undefined;                                                                             // 120
    }                                                                                                 // 121
  } else {                                                                                            // 122
    ptr = nameOrValue;                                                                                // 123
  }                                                                                                   // 124
                                                                                                      // 125
  // final position of ptr should be the resolved value                                               // 126
  return ptr;                                                                                         // 127
};                                                                                                    // 128
                                                                                                      // 129
Utils.hasOwnProperty = function (obj, key) {                                                          // 130
  var prop = {}.hasOwnProperty;                                                                       // 131
  return prop.call(obj, key);                                                                         // 132
};                                                                                                    // 133
                                                                                                      // 134
/**                                                                                                   // 135
 * Don't mess with this function. It's exactly the same as the compiled                               // 136
 * coffeescript mechanism. If you change it we can't guarantee that our code                          // 137
 * will work when used with Coffeescript. One exception is putting in a runtime                       // 138
 * check that both child and parent are of type Function.                                             // 139
 */                                                                                                   // 140
                                                                                                      // 141
Utils.inherits = function (child, parent) {                                                           // 142
  if (Utils.typeOf(child) !== '[object Function]')                                                    // 143
    throw new Error('First parameter to Utils.inherits must be a function');                          // 144
                                                                                                      // 145
  if (Utils.typeOf(parent) !== '[object Function]')                                                   // 146
    throw new Error('Second parameter to Utils.inherits must be a function');                         // 147
                                                                                                      // 148
  for (var key in parent) {                                                                           // 149
    if (Utils.hasOwnProperty(parent, key))                                                            // 150
      child[key] = parent[key];                                                                       // 151
  }                                                                                                   // 152
                                                                                                      // 153
  function ctor () {                                                                                  // 154
    this.constructor = child;                                                                         // 155
  }                                                                                                   // 156
                                                                                                      // 157
  ctor.prototype = parent.prototype;                                                                  // 158
  child.prototype = new ctor();                                                                       // 159
  child.__super__ = parent.prototype;                                                                 // 160
  return child;                                                                                       // 161
};                                                                                                    // 162
                                                                                                      // 163
Utils.toArray = function (obj) {                                                                      // 164
  if (!obj)                                                                                           // 165
    return [];                                                                                        // 166
  else if (Utils.typeOf(obj) !== '[object Array]')                                                    // 167
    return [obj];                                                                                     // 168
  else                                                                                                // 169
    return obj;                                                                                       // 170
};                                                                                                    // 171
                                                                                                      // 172
Utils.typeOf = function (obj) {                                                                       // 173
  if (obj && obj.typeName)                                                                            // 174
    return obj.typeName;                                                                              // 175
  else                                                                                                // 176
    return Object.prototype.toString.call(obj);                                                       // 177
};                                                                                                    // 178
                                                                                                      // 179
Utils.extend = function (Super, definition, onBeforeExtendPrototype) {                                // 180
  if (arguments.length === 1)                                                                         // 181
    definition = Super;                                                                               // 182
  else {                                                                                              // 183
    definition = definition || {};                                                                    // 184
    definition.extend = Super;                                                                        // 185
  }                                                                                                   // 186
                                                                                                      // 187
  return Utils.create(definition, {                                                                   // 188
    onBeforeExtendPrototype: onBeforeExtendPrototype                                                  // 189
  });                                                                                                 // 190
};                                                                                                    // 191
                                                                                                      // 192
Utils.create = function (definition, options) {                                                       // 193
  var Constructor                                                                                     // 194
    , extendFrom                                                                                      // 195
    , savedPrototype;                                                                                 // 196
                                                                                                      // 197
  options = options || {};                                                                            // 198
  definition = definition || {};                                                                      // 199
                                                                                                      // 200
  if (Utils.hasOwnProperty(definition, 'constructor'))                                                // 201
    Constructor = definition.constructor;                                                             // 202
  else {                                                                                              // 203
    Constructor = function () {                                                                       // 204
      if (Constructor.__super__ && Constructor.__super__.constructor)                                 // 205
        return Constructor.__super__.constructor.apply(this, arguments);                              // 206
    }                                                                                                 // 207
  }                                                                                                   // 208
                                                                                                      // 209
  extendFrom = definition.extend;                                                                     // 210
                                                                                                      // 211
  if (definition.extend) delete definition.extend;                                                    // 212
                                                                                                      // 213
  var inherit = function (Child, Super, prototype) {                                                  // 214
    Utils.inherits(Child, Utils.resolveValue(Super));                                                 // 215
    if (prototype) _.extend(Child.prototype, prototype);                                              // 216
  };                                                                                                  // 217
                                                                                                      // 218
  if (extendFrom) {                                                                                   // 219
    inherit(Constructor, extendFrom);                                                                 // 220
  }                                                                                                   // 221
                                                                                                      // 222
  if (options.onBeforeExtendPrototype)                                                                // 223
    options.onBeforeExtendPrototype.call(Constructor, definition);                                    // 224
                                                                                                      // 225
  _.extend(Constructor.prototype, definition);                                                        // 226
                                                                                                      // 227
  return Constructor;                                                                                 // 228
};                                                                                                    // 229
                                                                                                      // 230
Utils.capitalize = function (str) {                                                                   // 231
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);                                      // 232
};                                                                                                    // 233
                                                                                                      // 234
Utils.upperCamelCase = function (str) {                                                               // 235
  var re = /_|-|\./;                                                                                  // 236
                                                                                                      // 237
  if (!str)                                                                                           // 238
    return '';                                                                                        // 239
                                                                                                      // 240
  return _.map(str.split(re), function (word) {                                                       // 241
    return Utils.capitalize(word);                                                                    // 242
  }).join('');                                                                                        // 243
};                                                                                                    // 244
                                                                                                      // 245
Utils.camelCase = function (str) {                                                                    // 246
  var output = Utils.upperCamelCase(str);                                                             // 247
  output = output.charAt(0).toLowerCase() + output.slice(1, output.length);                           // 248
  return output;                                                                                      // 249
};                                                                                                    // 250
                                                                                                      // 251
Utils.pick = function (/* args */) {                                                                  // 252
  var args = _.toArray(arguments)                                                                     // 253
    , arg;                                                                                            // 254
  for (var i = 0; i < args.length; i++) {                                                             // 255
    arg = args[i];                                                                                    // 256
    if (typeof arg !== 'undefined' && arg !== null)                                                   // 257
      return arg;                                                                                     // 258
  }                                                                                                   // 259
                                                                                                      // 260
  return null;                                                                                        // 261
};                                                                                                    // 262
                                                                                                      // 263
Utils.StringConverters = {                                                                            // 264
  'none': function(input) {                                                                           // 265
    return input;                                                                                     // 266
  },                                                                                                  // 267
                                                                                                      // 268
  'upperCamelCase': function (input) {                                                                // 269
    return Utils.upperCamelCase(input);                                                               // 270
  },                                                                                                  // 271
                                                                                                      // 272
  'camelCase': function (input) {                                                                     // 273
    return Utils.camelCase(input);                                                                    // 274
  }                                                                                                   // 275
};                                                                                                    // 276
                                                                                                      // 277
Utils.rewriteLegacyHooks = function (obj) {                                                           // 278
  var legacyToNew = IronRouter.LEGACY_HOOK_TYPES;                                                     // 279
                                                                                                      // 280
  _.each(legacyToNew, function (newHook, oldHook) {                                                   // 281
    // only look on the immediate object, not its                                                     // 282
    // proto chain                                                                                    // 283
    if (_.has(obj, oldHook)) {                                                                        // 284
      hasOld = true;                                                                                  // 285
      obj[newHook] = obj[oldHook];                                                                    // 286
                                                                                                      // 287
      Utils.notifyDeprecated({                                                                        // 288
        where: 'RouteController',                                                                     // 289
        name: oldHook,                                                                                // 290
        instead: newHook                                                                              // 291
      });                                                                                             // 292
    }                                                                                                 // 293
  });                                                                                                 // 294
};                                                                                                    // 295
                                                                                                      // 296
                                                                                                      // 297
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/iron-router/lib/route.js                                                                  //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
/*                                                                                                    // 1
 * Inspiration and some code for the compilation of routes comes from pagejs.                         // 2
 * The original has been modified to better handle hash fragments, and to store                       // 3
 * the regular expression on the Route instance. Also, the resolve method has                         // 4
 * been added to return a resolved path given a parameters object.                                    // 5
 */                                                                                                   // 6
                                                                                                      // 7
Route = function (router, name, options) {                                                            // 8
  var path;                                                                                           // 9
                                                                                                      // 10
  Utils.assert(                                                                                       // 11
    router instanceof IronRouter,                                                                     // 12
    "Route constructor first parameter must be a Router");                                            // 13
                                                                                                      // 14
  Utils.assert(                                                                                       // 15
    _.isString(name),                                                                                 // 16
    "Route constructor second parameter must be a String name");                                      // 17
                                                                                                      // 18
  if (_.isFunction(options))                                                                          // 19
    options = { handler: options };                                                                   // 20
                                                                                                      // 21
  options = this.options = options || {};                                                             // 22
  path = options.path || ('/' + name);                                                                // 23
                                                                                                      // 24
  this.router = router;                                                                               // 25
  this.originalPath = path;                                                                           // 26
                                                                                                      // 27
  if (_.isString(this.originalPath) && this.originalPath.charAt(0) !== '/')                           // 28
    this.originalPath = '/' + this.originalPath;                                                      // 29
                                                                                                      // 30
  this.name = name;                                                                                   // 31
  this.where = options.where || 'client';                                                             // 32
  this.controller = options.controller;                                                               // 33
  this.action = options.action;                                                                       // 34
                                                                                                      // 35
  if (typeof options.reactive !== 'undefined')                                                        // 36
    this.isReactive = options.reactive;                                                               // 37
  else                                                                                                // 38
    this.isReactive = true;                                                                           // 39
                                                                                                      // 40
  Utils.rewriteLegacyHooks(this.options);                                                             // 41
                                                                                                      // 42
  this.compile();                                                                                     // 43
};                                                                                                    // 44
                                                                                                      // 45
Route.prototype = {                                                                                   // 46
  constructor: Route,                                                                                 // 47
                                                                                                      // 48
  /**                                                                                                 // 49
   * Compile the path.                                                                                // 50
   *                                                                                                  // 51
   *  @return {Route}                                                                                 // 52
   *  @api public                                                                                     // 53
   */                                                                                                 // 54
                                                                                                      // 55
  compile: function () {                                                                              // 56
    var self = this;                                                                                  // 57
    var path;                                                                                         // 58
    var options = self.options;                                                                       // 59
                                                                                                      // 60
    this.keys = [];                                                                                   // 61
                                                                                                      // 62
    if (self.originalPath instanceof RegExp) {                                                        // 63
      self.re = self.originalPath;                                                                    // 64
    } else {                                                                                          // 65
      path = self.originalPath                                                                        // 66
        .replace(/(.)\/$/, '$1')                                                                      // 67
        .concat(options.strict ? '' : '/?')                                                           // 68
        .replace(/\/\(/g, '(?:/')                                                                     // 69
        .replace(/#/, '/?#')                                                                          // 70
        .replace(                                                                                     // 71
          /(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g,                                                     // 72
          function (match, slash, format, key, capture, optional){                                    // 73
            self.keys.push({ name: key, optional: !! optional });                                     // 74
            slash = slash || '';                                                                      // 75
            return ''                                                                                 // 76
              + (optional ? '' : slash)                                                               // 77
              + '(?:'                                                                                 // 78
              + (optional ? slash : '')                                                               // 79
              + (format || '')                                                                        // 80
              + (capture || (format && '([^/.]+?)' || '([^/]+?)')) + ')'                              // 81
              + (optional || '');                                                                     // 82
          }                                                                                           // 83
        )                                                                                             // 84
        .replace(/([\/.])/g, '\\$1')                                                                  // 85
        .replace(/\*/g, '(.*)');                                                                      // 86
                                                                                                      // 87
      self.re = new RegExp('^' + path + '$', options.sensitive ? '' : 'i');                           // 88
    }                                                                                                 // 89
                                                                                                      // 90
    return this;                                                                                      // 91
  },                                                                                                  // 92
                                                                                                      // 93
  /**                                                                                                 // 94
   * Returns an array of parameters given a path. The array may have named                            // 95
   * properties in addition to indexed values.                                                        // 96
   *                                                                                                  // 97
   * @param {String} path                                                                             // 98
   * @return {Array}                                                                                  // 99
   * @api public                                                                                      // 100
   */                                                                                                 // 101
                                                                                                      // 102
  params: function (path) {                                                                           // 103
    if (!path)                                                                                        // 104
      return null;                                                                                    // 105
                                                                                                      // 106
    var params = [];                                                                                  // 107
    var m = this.exec(path);                                                                          // 108
    var queryString;                                                                                  // 109
    var keys = this.keys;                                                                             // 110
    var key;                                                                                          // 111
    var value;                                                                                        // 112
                                                                                                      // 113
    if (!m)                                                                                           // 114
      throw new Error('The route named "' + this.name + '" does not match the path "' + path + '"');  // 115
                                                                                                      // 116
    for (var i = 1, len = m.length; i < len; ++i) {                                                   // 117
      key = keys[i - 1];                                                                              // 118
      value = typeof m[i] == 'string' ? decodeURIComponent(m[i]) : m[i];                              // 119
      if (key) {                                                                                      // 120
        params[key.name] = params[key.name] !== undefined ?                                           // 121
          params[key.name] : value;                                                                   // 122
      } else                                                                                          // 123
        params.push(value);                                                                           // 124
    }                                                                                                 // 125
                                                                                                      // 126
    path = decodeURI(path);                                                                           // 127
                                                                                                      // 128
    queryString = path.split('?')[1];                                                                 // 129
    if (queryString)                                                                                  // 130
      queryString = queryString.split('#')[0];                                                        // 131
                                                                                                      // 132
    params.hash = path.split('#')[1];                                                                 // 133
                                                                                                      // 134
    if (queryString) {                                                                                // 135
      _.each(queryString.split('&'), function (paramString) {                                         // 136
        paramParts = paramString.split('=');                                                          // 137
        params[paramParts[0]] = decodeURIComponent(paramParts[1]);                                    // 138
      });                                                                                             // 139
    }                                                                                                 // 140
                                                                                                      // 141
    return params;                                                                                    // 142
  },                                                                                                  // 143
                                                                                                      // 144
  normalizePath: function (path) {                                                                    // 145
    var origin = Meteor.absoluteUrl();                                                                // 146
                                                                                                      // 147
    path = path.replace(origin, '');                                                                  // 148
                                                                                                      // 149
    var queryStringIndex = path.indexOf('?');                                                         // 150
    path = ~queryStringIndex ? path.slice(0, queryStringIndex) : path;                                // 151
                                                                                                      // 152
    var hashIndex = path.indexOf('#');                                                                // 153
    path = ~hashIndex ? path.slice(0, hashIndex) : path;                                              // 154
                                                                                                      // 155
    if (path.charAt(0) !== '/')                                                                       // 156
      path = '/' + path;                                                                              // 157
                                                                                                      // 158
    return path;                                                                                      // 159
  },                                                                                                  // 160
                                                                                                      // 161
  /**                                                                                                 // 162
   * Returns true if the path matches and false otherwise.                                            // 163
   *                                                                                                  // 164
   * @param {String} path                                                                             // 165
   * @return {Boolean}                                                                                // 166
   * @api public                                                                                      // 167
   */                                                                                                 // 168
  test: function (path) {                                                                             // 169
    return this.re.test(this.normalizePath(path));                                                    // 170
  },                                                                                                  // 171
                                                                                                      // 172
  exec: function (path) {                                                                             // 173
    return this.re.exec(this.normalizePath(path));                                                    // 174
  },                                                                                                  // 175
                                                                                                      // 176
  resolve: function (params, options) {                                                               // 177
    var value;                                                                                        // 178
    var isValueDefined;                                                                               // 179
    var result;                                                                                       // 180
    var wildCardCount = 0;                                                                            // 181
    var path = this.originalPath;                                                                     // 182
    var hash;                                                                                         // 183
    var query;                                                                                        // 184
    var isMissingParams = false;                                                                      // 185
                                                                                                      // 186
    options = options || {};                                                                          // 187
    params = params || [];                                                                            // 188
    query = options.query;                                                                            // 189
    hash = options.hash && options.hash.toString();                                                   // 190
                                                                                                      // 191
    if (path instanceof RegExp) {                                                                     // 192
      throw new Error('Cannot currently resolve a regular expression path');                          // 193
    } else {                                                                                          // 194
      path = this.originalPath                                                                        // 195
        .replace(                                                                                     // 196
          /(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g,                                                     // 197
          function (match, slash, format, key, capture, optional, offset) {                           // 198
            slash = slash || '';                                                                      // 199
            value = params[key];                                                                      // 200
            isValueDefined = typeof value !== 'undefined';                                            // 201
                                                                                                      // 202
            if (optional && !isValueDefined) {                                                        // 203
              value = '';                                                                             // 204
            } else if (!isValueDefined) {                                                             // 205
              isMissingParams = true;                                                                 // 206
              return;                                                                                 // 207
            }                                                                                         // 208
                                                                                                      // 209
            value = _.isFunction(value) ? value.call(params) : value;                                 // 210
            var escapedValue = _.map(String(value).split('/'), function (segment) {                   // 211
              return encodeURIComponent(segment);                                                     // 212
            }).join('/');                                                                             // 213
            return slash + escapedValue                                                               // 214
          }                                                                                           // 215
        )                                                                                             // 216
        .replace(                                                                                     // 217
          /\*/g,                                                                                      // 218
          function (match) {                                                                          // 219
            if (typeof params[wildCardCount] === 'undefined') {                                       // 220
              throw new Error(                                                                        // 221
                'You are trying to access a wild card parameter at index ' +                          // 222
                wildCardCount +                                                                       // 223
                ' but the value of params at that index is undefined');                               // 224
            }                                                                                         // 225
                                                                                                      // 226
            var paramValue = String(params[wildCardCount++]);                                         // 227
            return _.map(paramValue.split('/'), function (segment) {                                  // 228
              return encodeURIComponent(segment);                                                     // 229
            }).join('/');                                                                             // 230
          }                                                                                           // 231
        );                                                                                            // 232
                                                                                                      // 233
      if (_.isObject(query)) {                                                                        // 234
        query = _.map(_.pairs(query), function (queryPart) {                                          // 235
          return queryPart[0] + '=' + encodeURIComponent(queryPart[1]);                               // 236
        }).join('&');                                                                                 // 237
      }                                                                                               // 238
                                                                                                      // 239
      if (query && query.length)                                                                      // 240
        path = path + '?' + query;                                                                    // 241
                                                                                                      // 242
      if (hash) {                                                                                     // 243
        hash = encodeURI(hash.replace('#', ''));                                                      // 244
        path = query ?                                                                                // 245
          path + '#' + hash : path + '/#' + hash;                                                     // 246
      }                                                                                               // 247
    }                                                                                                 // 248
                                                                                                      // 249
    // Because of optional possibly empty segments we normalize path here                             // 250
    path = path.replace(/\/+/g, '/'); // Multiple / -> one /                                          // 251
    path = path.replace(/^(.+)\/$/g, '$1'); // Removal of trailing /                                  // 252
                                                                                                      // 253
    return isMissingParams ? null : path;                                                             // 254
  },                                                                                                  // 255
                                                                                                      // 256
  path: function (params, options) {                                                                  // 257
    return this.resolve(params, options);                                                             // 258
  },                                                                                                  // 259
                                                                                                      // 260
  url: function (params, options) {                                                                   // 261
    var path = this.path(params, options);                                                            // 262
    if (path) {                                                                                       // 263
      if (path.charAt(0) === '/')                                                                     // 264
        path = path.slice(1, path.length);                                                            // 265
      return Meteor.absoluteUrl() + path;                                                             // 266
    } else {                                                                                          // 267
      return null;                                                                                    // 268
    }                                                                                                 // 269
  },                                                                                                  // 270
                                                                                                      // 271
  findController: function (path, options) {                                                          // 272
    var self = this;                                                                                  // 273
    var handler;                                                                                      // 274
    var controllerClass;                                                                              // 275
    var controller;                                                                                   // 276
    var action;                                                                                       // 277
    var routeName;                                                                                    // 278
                                                                                                      // 279
    var resolveValue = Utils.resolveValue;                                                            // 280
    var toArray = Utils.toArray;                                                                      // 281
                                                                                                      // 282
    var resolveController = function (name) {                                                         // 283
      var controller = resolveValue(name);                                                            // 284
      if (typeof controller === 'undefined') {                                                        // 285
        throw new Error(                                                                              // 286
          'controller "' + name + '" is not defined');                                                // 287
      }                                                                                               // 288
                                                                                                      // 289
      return controller;                                                                              // 290
    };                                                                                                // 291
                                                                                                      // 292
    // controller option is a string specifying the name                                              // 293
    // of a controller somewhere                                                                      // 294
    if (_.isString(this.controller))                                                                  // 295
      controller = resolveController(this.controller);                                                // 296
    else if (_.isFunction(this.controller))                                                           // 297
      controller = this.controller;                                                                   // 298
    else if (this.name)                                                                               // 299
      controller = resolveValue(Router.convertRouteControllerName(this.name + 'Controller'));         // 300
                                                                                                      // 301
    if (!controller)                                                                                  // 302
      controller = RouteController;                                                                   // 303
                                                                                                      // 304
    return controller;                                                                                // 305
  },                                                                                                  // 306
                                                                                                      // 307
  newController: function (path, options) {                                                           // 308
    var C = this.findController(path, options);                                                       // 309
                                                                                                      // 310
    options = _.extend({}, options, {                                                                 // 311
      path: path,                                                                                     // 312
      params: this.params(path),                                                                      // 313
      where: this.where,                                                                              // 314
      action: this.action                                                                             // 315
    });                                                                                               // 316
                                                                                                      // 317
    return new C(this.router, this, options);                                                         // 318
  },                                                                                                  // 319
                                                                                                      // 320
  getController: function (path, options) {                                                           // 321
    return this.newController(path, options);                                                         // 322
  }.deprecate({where: 'Route', name: 'getController', instead: 'newController'})                      // 323
};                                                                                                    // 324
                                                                                                      // 325
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/iron-router/lib/route_controller.js                                                       //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
RouteController = function (router, route, options) {                                                 // 1
  var self = this;                                                                                    // 2
                                                                                                      // 3
  if (!(router instanceof IronRouter))                                                                // 4
    throw new Error('RouteController requires a router');                                             // 5
                                                                                                      // 6
  if (!(route instanceof Route))                                                                      // 7
    throw new Error('RouteController requires a route');                                              // 8
                                                                                                      // 9
  options = this.options = options || {};                                                             // 10
                                                                                                      // 11
  this.router = router;                                                                               // 12
  this.route = route;                                                                                 // 13
                                                                                                      // 14
  this.path = options.path || '';                                                                     // 15
  this.params = options.params || [];                                                                 // 16
  this.where = options.where || 'client';                                                             // 17
  this.action = options.action || this.action;                                                        // 18
                                                                                                      // 19
  Utils.rewriteLegacyHooks(this.options);                                                             // 20
  Utils.rewriteLegacyHooks(this);                                                                     // 21
};                                                                                                    // 22
                                                                                                      // 23
RouteController.prototype = {                                                                         // 24
  constructor: RouteController,                                                                       // 25
                                                                                                      // 26
  /**                                                                                                 // 27
   * Returns the value of a property, searching for the property in this lookup                       // 28
   * order:                                                                                           // 29
   *                                                                                                  // 30
   *   1. RouteController options                                                                     // 31
   *   2. RouteController prototype                                                                   // 32
   *   3. Route options                                                                               // 33
   *   4. Router options                                                                              // 34
   */                                                                                                 // 35
  lookupProperty: function (key) {                                                                    // 36
    var value;                                                                                        // 37
                                                                                                      // 38
    if (!_.isString(key))                                                                             // 39
      throw new Error('key must be a string');                                                        // 40
                                                                                                      // 41
    // 1. RouteController options                                                                     // 42
    if (typeof (value = this.options[key]) !== 'undefined')                                           // 43
      return value;                                                                                   // 44
                                                                                                      // 45
    // 2. RouteController instance                                                                    // 46
    if (typeof (value = this[key]) !== 'undefined')                                                   // 47
      return value;                                                                                   // 48
                                                                                                      // 49
    var opts;                                                                                         // 50
                                                                                                      // 51
    // 3. Route options                                                                               // 52
    opts = this.route.options;                                                                        // 53
    if (opts && typeof (value = opts[key]) !== 'undefined')                                           // 54
      return value;                                                                                   // 55
                                                                                                      // 56
    // 4. Router options                                                                              // 57
    opts = this.router.options;                                                                       // 58
    if (opts && typeof (value = opts[key]) !== 'undefined')                                           // 59
      return value;                                                                                   // 60
                                                                                                      // 61
    // 5. Oops couldn't find property                                                                 // 62
    return undefined;                                                                                 // 63
  },                                                                                                  // 64
                                                                                                      // 65
  runHooks: function (hookName, more, cb) {                                                           // 66
    var self = this;                                                                                  // 67
    var ctor = this.constructor;                                                                      // 68
                                                                                                      // 69
    if (!_.isString(hookName))                                                                        // 70
      throw new Error('hookName must be a string');                                                   // 71
                                                                                                      // 72
    if (more && !_.isArray(more))                                                                     // 73
      throw new Error('more must be an array of functions');                                          // 74
                                                                                                      // 75
    var isPaused = false;                                                                             // 76
                                                                                                      // 77
    var lookupHook = function (nameOrFn) {                                                            // 78
      var fn = nameOrFn;                                                                              // 79
                                                                                                      // 80
      // if we already have a func just return it                                                     // 81
      if (_.isFunction(fn))                                                                           // 82
        return fn;                                                                                    // 83
                                                                                                      // 84
      // look up one of the out-of-box hooks like                                                     // 85
      // 'loaded or 'dataNotFound' if the nameOrFn is a                                               // 86
      // string                                                                                       // 87
      if (_.isString(fn)) {                                                                           // 88
        if (_.isFunction(Router.hooks[fn]))                                                           // 89
          return Router.hooks[fn];                                                                    // 90
      }                                                                                               // 91
                                                                                                      // 92
      // we couldn't find it so throw an error                                                        // 93
      throw new Error("No hook found named: ", nameOrFn);                                             // 94
    };                                                                                                // 95
                                                                                                      // 96
    // concatenate together hook arrays from the inheritance                                          // 97
    // heirarchy, starting at the top parent down to the child.                                       // 98
    var collectInheritedHooks = function (ctor) {                                                     // 99
      var hooks = [];                                                                                 // 100
                                                                                                      // 101
      if (ctor.__super__)                                                                             // 102
        hooks = hooks.concat(collectInheritedHooks(ctor.__super__.constructor));                      // 103
                                                                                                      // 104
      return Utils.hasOwnProperty(ctor.prototype, hookName) ?                                         // 105
        hooks.concat(ctor.prototype[hookName]) : hooks;                                               // 106
    };                                                                                                // 107
                                                                                                      // 108
                                                                                                      // 109
    // get a list of hooks to run in the following order:                                             // 110
    // 1. RouteController option hooks                                                                // 111
    // 2. RouteController proto hooks (including inherited super to child)                            // 112
    // 3. RouteController object hooks                                                                // 113
    // 4. Router global hooks                                                                         // 114
    // 5. Route option hooks                                                                          // 115
    // 6. more                                                                                        // 116
                                                                                                      // 117
    var toArray = Utils.toArray;                                                                      // 118
    var routerHooks = this.router.getHooks(hookName, this.route.name);                                // 119
                                                                                                      // 120
    var opts;                                                                                         // 121
    opts = this.route.options;                                                                        // 122
    var routeOptionHooks = toArray(opts && opts[hookName]);                                           // 123
                                                                                                      // 124
    opts = this.options;                                                                              // 125
    var optionHooks = toArray(opts && opts[hookName]);                                                // 126
                                                                                                      // 127
    var protoHooks = collectInheritedHooks(this.constructor);                                         // 128
                                                                                                      // 129
    var objectHooks;                                                                                  // 130
    // don't accidentally grab the prototype hooks!                                                   // 131
    // this makes sure the hook is on the object itself                                               // 132
    // not on its constructor's prototype object.                                                     // 133
    if (_.has(this, hookName))                                                                        // 134
      objectHooks = toArray(this[hookName])                                                           // 135
    else                                                                                              // 136
      objectHooks = [];                                                                               // 137
                                                                                                      // 138
    var allHooks = optionHooks                                                                        // 139
      .concat(protoHooks)                                                                             // 140
      .concat(objectHooks)                                                                            // 141
      .concat(routeOptionHooks)                                                                       // 142
      .concat(routerHooks)                                                                            // 143
      .concat(more);                                                                                  // 144
                                                                                                      // 145
    var isPaused = false;                                                                             // 146
    var pauseFn = function () {                                                                       // 147
      isPaused = true;                                                                                // 148
    };                                                                                                // 149
                                                                                                      // 150
    for (var i = 0, hook; hook = allHooks[i]; i++) {                                                  // 151
      var hookFn = lookupHook(hook);                                                                  // 152
                                                                                                      // 153
      if (!isPaused && !this.isStopped)                                                               // 154
        hookFn.call(self, pauseFn, i);                                                                // 155
    }                                                                                                 // 156
                                                                                                      // 157
    cb && cb.call(self, isPaused);                                                                    // 158
    return isPaused;                                                                                  // 159
  },                                                                                                  // 160
                                                                                                      // 161
  action: function () {                                                                               // 162
    throw new Error('not implemented');                                                               // 163
  },                                                                                                  // 164
                                                                                                      // 165
  stop: function (cb) {                                                                               // 166
    return this._stopController(cb);                                                                  // 167
  },                                                                                                  // 168
                                                                                                      // 169
  _stopController: function (cb) {                                                                    // 170
    var self = this;                                                                                  // 171
                                                                                                      // 172
    if (this.isStopped)                                                                               // 173
      return;                                                                                         // 174
                                                                                                      // 175
    self.isRunning = false;                                                                           // 176
    self.runHooks('onStop');                                                                          // 177
    self.isStopped = true;                                                                            // 178
    cb && cb.call(self);                                                                              // 179
  },                                                                                                  // 180
                                                                                                      // 181
  _run: function () {                                                                                 // 182
    throw new Error('not implemented');                                                               // 183
  }                                                                                                   // 184
};                                                                                                    // 185
                                                                                                      // 186
_.extend(RouteController, {                                                                           // 187
  /**                                                                                                 // 188
   * Inherit from RouteController                                                                     // 189
   *                                                                                                  // 190
   * @param {Object} definition Prototype properties for inherited class.                             // 191
   */                                                                                                 // 192
                                                                                                      // 193
  extend: function (definition) {                                                                     // 194
    Utils.rewriteLegacyHooks(definition);                                                             // 195
                                                                                                      // 196
    return Utils.extend(this, definition, function (definition) {                                     // 197
      var klass = this;                                                                               // 198
                                                                                                      // 199
                                                                                                      // 200
      /*                                                                                              // 201
        Allow calling a class method from javascript, directly in the subclass                        // 202
        definition.                                                                                   // 203
                                                                                                      // 204
        Instead of this:                                                                              // 205
          MyController = RouteController.extend({...});                                               // 206
          MyController.before(function () {});                                                        // 207
                                                                                                      // 208
        You can do:                                                                                   // 209
          MyController = RouteController.extend({                                                     // 210
            before: function () {}                                                                    // 211
          });                                                                                         // 212
                                                                                                      // 213
        And in Coffeescript you can do:                                                               // 214
         MyController extends RouteController                                                         // 215
           @before function () {}                                                                     // 216
       */                                                                                             // 217
    });                                                                                               // 218
  }                                                                                                   // 219
});                                                                                                   // 220
                                                                                                      // 221
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/iron-router/lib/router.js                                                                 //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
IronRouter = function (options) {                                                                     // 1
  var self = this;                                                                                    // 2
                                                                                                      // 3
  this.configure(options);                                                                            // 4
                                                                                                      // 5
  /**                                                                                                 // 6
   * The routes array which doubles as a named route index by adding                                  // 7
   * properties to the array.                                                                         // 8
   *                                                                                                  // 9
   * @api public                                                                                      // 10
   */                                                                                                 // 11
  this.routes = [];                                                                                   // 12
                                                                                                      // 13
  /**                                                                                                 // 14
   * Default name conversions for controller                                                          // 15
   * and template lookup.                                                                             // 16
   */                                                                                                 // 17
  this._nameConverters = {};                                                                          // 18
  this.setNameConverter('Template', 'none');                                                          // 19
  this.setNameConverter('RouteController', 'upperCamelCase');                                         // 20
                                                                                                      // 21
  this._globalHooks = {};                                                                             // 22
  _.each(IronRouter.HOOK_TYPES, function (type) {                                                     // 23
    self._globalHooks[type] = [];                                                                     // 24
                                                                                                      // 25
    // example:                                                                                       // 26
    //  self.onRun = function (hook, options) {                                                       // 27
    //    return self.addHook('onRun', hook, options);                                                // 28
    //  };                                                                                            // 29
    self[type] = function (hook, options) {                                                           // 30
      return self.addHook(type, hook, options);                                                       // 31
    };                                                                                                // 32
  });                                                                                                 // 33
                                                                                                      // 34
  _.each(IronRouter.LEGACY_HOOK_TYPES, function (type, legacyType) {                                  // 35
    self[legacyType] = function () {                                                                  // 36
      Utils.notifyDeprecated({                                                                        // 37
        where: 'Router',                                                                              // 38
        name: legacyType,                                                                             // 39
        instead: type                                                                                 // 40
      });                                                                                             // 41
                                                                                                      // 42
      return self[type].apply(this, arguments);                                                       // 43
    }                                                                                                 // 44
  });                                                                                                 // 45
};                                                                                                    // 46
                                                                                                      // 47
IronRouter.HOOK_TYPES = [                                                                             // 48
  'onRun',                                                                                            // 49
  'onData',                                                                                           // 50
  'onBeforeAction',                                                                                   // 51
  'onAfterAction',                                                                                    // 52
  'onStop',                                                                                           // 53
                                                                                                      // 54
  // not technically a hook but we'll use it                                                          // 55
  // in a similar way. This will cause waitOn                                                         // 56
  // to be added as a method to the Router and then                                                   // 57
  // it can be selectively applied to specific routes                                                 // 58
  'waitOn'                                                                                            // 59
];                                                                                                    // 60
                                                                                                      // 61
IronRouter.LEGACY_HOOK_TYPES = {                                                                      // 62
  'load': 'onRun',                                                                                    // 63
  'before': 'onBeforeAction',                                                                         // 64
  'after': 'onAfterAction',                                                                           // 65
  'unload': 'onStop'                                                                                  // 66
};                                                                                                    // 67
                                                                                                      // 68
IronRouter.prototype = {                                                                              // 69
  constructor: IronRouter,                                                                            // 70
                                                                                                      // 71
  /**                                                                                                 // 72
   * Configure instance with options. This can be called at any time. If the                          // 73
   * instance options object hasn't been created yet it is created here.                              // 74
   *                                                                                                  // 75
   * @param {Object} options                                                                          // 76
   * @return {IronRouter}                                                                             // 77
   * @api public                                                                                      // 78
   */                                                                                                 // 79
                                                                                                      // 80
  configure: function (options) {                                                                     // 81
    var self = this;                                                                                  // 82
                                                                                                      // 83
    options = options || {};                                                                          // 84
    this.options = this.options || {};                                                                // 85
    _.extend(this.options, options);                                                                  // 86
                                                                                                      // 87
    // e.g. before: fn OR before: [fn1, fn2]                                                          // 88
    _.each(IronRouter.HOOK_TYPES, function(type) {                                                    // 89
      if (self.options[type]) {                                                                       // 90
        _.each(Utils.toArray(self.options[type]), function(hook) {                                    // 91
          self.addHook(type, hook);                                                                   // 92
        });                                                                                           // 93
                                                                                                      // 94
        delete self.options[type];                                                                    // 95
      }                                                                                               // 96
    });                                                                                               // 97
                                                                                                      // 98
    _.each(IronRouter.LEGACY_HOOK_TYPES, function(type, legacyType) {                                 // 99
      if (self.options[legacyType]) {                                                                 // 100
        // XXX: warning?                                                                              // 101
        _.each(Utils.toArray(self.options[legacyType]), function(hook) {                              // 102
          self.addHook(type, hook);                                                                   // 103
        });                                                                                           // 104
                                                                                                      // 105
        delete self.options[legacyType];                                                              // 106
      }                                                                                               // 107
    });                                                                                               // 108
                                                                                                      // 109
    if (options.templateNameConverter)                                                                // 110
      this.setNameConverter('Template', options.templateNameConverter);                               // 111
                                                                                                      // 112
    if (options.routeControllerNameConverter)                                                         // 113
      this.setNameConverter('RouteController', options.routeControllerNameConverter);                 // 114
                                                                                                      // 115
    return this;                                                                                      // 116
  },                                                                                                  // 117
                                                                                                      // 118
  convertTemplateName: function (input) {                                                             // 119
    var converter = this._nameConverters['Template'];                                                 // 120
    if (!converter)                                                                                   // 121
      throw new Error('No name converter found for Template');                                        // 122
    return converter(input);                                                                          // 123
  },                                                                                                  // 124
                                                                                                      // 125
  convertRouteControllerName: function (input) {                                                      // 126
    var converter = this._nameConverters['RouteController'];                                          // 127
    if (!converter)                                                                                   // 128
      throw new Error('No name converter found for RouteController');                                 // 129
    return converter(input);                                                                          // 130
  },                                                                                                  // 131
                                                                                                      // 132
  setNameConverter: function (key, stringOrFunc) {                                                    // 133
    var converter;                                                                                    // 134
                                                                                                      // 135
    if (_.isFunction(stringOrFunc))                                                                   // 136
      converter = stringOrFunc;                                                                       // 137
                                                                                                      // 138
    if (_.isString(stringOrFunc))                                                                     // 139
      converter = Utils.StringConverters[stringOrFunc];                                               // 140
                                                                                                      // 141
    if (!converter) {                                                                                 // 142
      throw new Error('No converter found named: ' + stringOrFunc);                                   // 143
    }                                                                                                 // 144
                                                                                                      // 145
    this._nameConverters[key] = converter;                                                            // 146
    return this;                                                                                      // 147
  },                                                                                                  // 148
                                                                                                      // 149
  /**                                                                                                 // 150
   *                                                                                                  // 151
   * Add a hook to all routes. The hooks will apply to all routes,                                    // 152
   * unless you name routes to include or exclude via `only` and `except` options                     // 153
   *                                                                                                  // 154
   * @param {String} [type] one of 'load', 'unload', 'before' or 'after'                              // 155
   * @param {Object} [options] Options to controll the hooks [optional]                               // 156
   * @param {Function} [hook] Callback to run                                                         // 157
   * @return {IronRouter}                                                                             // 158
   * @api public                                                                                      // 159
   *                                                                                                  // 160
   */                                                                                                 // 161
                                                                                                      // 162
  addHook: function(type, hook, options) {                                                            // 163
    options = options || {}                                                                           // 164
                                                                                                      // 165
    if (options.only)                                                                                 // 166
      options.only = Utils.toArray(options.only);                                                     // 167
    if (options.except)                                                                               // 168
      options.except = Utils.toArray(options.except);                                                 // 169
                                                                                                      // 170
    this._globalHooks[type].push({options: options, hook: hook});                                     // 171
                                                                                                      // 172
    return this;                                                                                      // 173
  },                                                                                                  // 174
                                                                                                      // 175
  /**                                                                                                 // 176
   *                                                                                                  // 177
   * Fetch the list of global hooks that apply to the given route name.                               // 178
   * Hooks are defined by the .addHook() function above.                                              // 179
   *                                                                                                  // 180
   * @param {String} [type] one of IronRouter.HOOK_TYPES                                              // 181
   * @param {String} [name] the name of the route we are interested in                                // 182
   * @return {[Function]} [hooks] an array of hooks to run                                            // 183
   * @api public                                                                                      // 184
   *                                                                                                  // 185
   */                                                                                                 // 186
                                                                                                      // 187
  getHooks: function(type, name) {                                                                    // 188
    var hooks = [];                                                                                   // 189
                                                                                                      // 190
    _.each(this._globalHooks[type], function(hook) {                                                  // 191
      var options = hook.options;                                                                     // 192
                                                                                                      // 193
      if (options.except && _.include(options.except, name))                                          // 194
        return;                                                                                       // 195
                                                                                                      // 196
      if (options.only && ! _.include(options.only, name))                                            // 197
        return;                                                                                       // 198
                                                                                                      // 199
      hooks.push(hook.hook);                                                                          // 200
    });                                                                                               // 201
                                                                                                      // 202
    return hooks;                                                                                     // 203
  },                                                                                                  // 204
                                                                                                      // 205
                                                                                                      // 206
  /**                                                                                                 // 207
   * Convenience function to define a bunch of routes at once. In the future we                       // 208
   * might call the callback with a custom dsl.                                                       // 209
   *                                                                                                  // 210
   * Example:                                                                                         // 211
   *  Router.map(function () {                                                                        // 212
   *    this.route('posts');                                                                          // 213
   *  });                                                                                             // 214
   *                                                                                                  // 215
   *  @param {Function} cb                                                                            // 216
   *  @return {IronRouter}                                                                            // 217
   *  @api public                                                                                     // 218
   */                                                                                                 // 219
                                                                                                      // 220
  map: function (cb) {                                                                                // 221
    Utils.assert(_.isFunction(cb),                                                                    // 222
           'map requires a function as the first parameter');                                         // 223
    cb.call(this);                                                                                    // 224
    return this;                                                                                      // 225
  },                                                                                                  // 226
                                                                                                      // 227
  /**                                                                                                 // 228
   * Define a new route. You must name the route, but as a second parameter you                       // 229
   * can either provide an object of options or a Route instance.                                     // 230
   *                                                                                                  // 231
   * @param {String} name The name of the route                                                       // 232
   * @param {Object} [options] Options to pass along to the route                                     // 233
   * @return {Route}                                                                                  // 234
   * @api public                                                                                      // 235
   */                                                                                                 // 236
                                                                                                      // 237
  route: function (name, options) {                                                                   // 238
    var route;                                                                                        // 239
                                                                                                      // 240
    Utils.assert(_.isString(name), 'name is a required parameter');                                   // 241
                                                                                                      // 242
    if (options instanceof Route)                                                                     // 243
      route = options;                                                                                // 244
    else                                                                                              // 245
      route = new Route(this, name, options);                                                         // 246
                                                                                                      // 247
    this.routes[name] = route;                                                                        // 248
    this.routes.push(route);                                                                          // 249
    return route;                                                                                     // 250
  },                                                                                                  // 251
                                                                                                      // 252
  path: function (routeName, params, options) {                                                       // 253
    var route = this.routes[routeName];                                                               // 254
    Utils.warn(route,                                                                                 // 255
     'You called Router.path for a route named ' + routeName + ' but that route doesn\'t seem to exist. Are you sure you created it?');
    return route && route.path(params, options);                                                      // 257
  },                                                                                                  // 258
                                                                                                      // 259
  url: function (routeName, params, options) {                                                        // 260
    var route = this.routes[routeName];                                                               // 261
    Utils.warn(route,                                                                                 // 262
      'You called Router.url for a route named "' + routeName + '" but that route doesn\'t seem to exist. Are you sure you created it?');
    return route && route.url(params, options);                                                       // 264
  },                                                                                                  // 265
                                                                                                      // 266
  match: function (path) {                                                                            // 267
    return _.find(this.routes, function(r) { return r.test(path); });                                 // 268
  },                                                                                                  // 269
                                                                                                      // 270
  dispatch: function (path, options, cb) {                                                            // 271
    var route = this.match(path);                                                                     // 272
                                                                                                      // 273
    if (! route)                                                                                      // 274
      return this.onRouteNotFound(path, options);                                                     // 275
                                                                                                      // 276
    if (route.where !== (Meteor.isClient ? 'client' : 'server'))                                      // 277
      return this.onUnhandled(path, options);                                                         // 278
                                                                                                      // 279
    var controller = route.newController(path, options);                                              // 280
    this.run(controller, cb);                                                                         // 281
  },                                                                                                  // 282
                                                                                                      // 283
  run: function (controller, cb) {                                                                    // 284
    var self = this;                                                                                  // 285
    var where = Meteor.isClient ? 'client' : 'server';                                                // 286
                                                                                                      // 287
    Utils.assert(controller, 'run requires a controller');                                            // 288
                                                                                                      // 289
    // one last check to see if we should handle the route here                                       // 290
    if (controller.where != where) {                                                                  // 291
      self.onUnhandled(controller.path, controller.options);                                          // 292
      return;                                                                                         // 293
    }                                                                                                 // 294
                                                                                                      // 295
    var run = function () {                                                                           // 296
      self._currentController = controller;                                                           // 297
      // set the location                                                                             // 298
      cb && cb(controller);                                                                           // 299
      self._currentController._run();                                                                 // 300
    };                                                                                                // 301
                                                                                                      // 302
    // if we already have a current controller let's stop it and then                                 // 303
    // run the new one once the old controller is stopped. this will add                              // 304
    // the run function as an onInvalidate callback to the controller's                               // 305
    // computation. Otherwse, just run the new controller.                                            // 306
    if (this._currentController)                                                                      // 307
      this._currentController._stopController(run);                                                   // 308
    else                                                                                              // 309
      run();                                                                                          // 310
  },                                                                                                  // 311
                                                                                                      // 312
  onUnhandled: function (path, options) {                                                             // 313
    throw new Error('onUnhandled not implemented');                                                   // 314
  },                                                                                                  // 315
                                                                                                      // 316
  onRouteNotFound: function (path, options) {                                                         // 317
    throw new Error('Oh no! No route found for path: "' + path + '"');                                // 318
  }                                                                                                   // 319
};                                                                                                    // 320
                                                                                                      // 321
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/iron-router/lib/client/location.js                                                        //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
var dep = new Deps.Dependency;                                                                        // 1
// XXX: we have to store the state internally (rather than just calling out                           // 2
// to window.location) due to an android 2.3 bug. See:                                                // 3
//   https://github.com/EventedMind/iron-router/issues/350                                            // 4
var currentState = {                                                                                  // 5
  path: location.pathname + location.search + location.hash,                                          // 6
  // we set title to null because that can be triggered immediately by a "noop"                       // 7
  // popstate that happens on load -- if it's already null, nothing's changed.                        // 8
  title: null                                                                                         // 9
};                                                                                                    // 10
                                                                                                      // 11
function onpopstate (e) {                                                                             // 12
  setState(e.originalEvent.state, null, location.pathname + location.search + location.hash);         // 13
}                                                                                                     // 14
                                                                                                      // 15
IronLocation = {};                                                                                    // 16
                                                                                                      // 17
IronLocation.origin = function () {                                                                   // 18
  return location.protocol + '//' + location.host;                                                    // 19
};                                                                                                    // 20
                                                                                                      // 21
IronLocation.isSameOrigin = function (href) {                                                         // 22
  var origin = IronLocation.origin();                                                                 // 23
  return href.indexOf(origin) === 0;                                                                  // 24
};                                                                                                    // 25
                                                                                                      // 26
IronLocation.get = function () {                                                                      // 27
  dep.depend();                                                                                       // 28
  return currentState;                                                                                // 29
};                                                                                                    // 30
                                                                                                      // 31
IronLocation.path = function () {                                                                     // 32
  dep.depend();                                                                                       // 33
  return currentState.path;                                                                           // 34
};                                                                                                    // 35
                                                                                                      // 36
IronLocation.set = function (url, options) {                                                          // 37
  options = options || {};                                                                            // 38
                                                                                                      // 39
  var state = options.state || {};                                                                    // 40
                                                                                                      // 41
  if (/^http/.test(url))                                                                              // 42
    href = url;                                                                                       // 43
  else {                                                                                              // 44
    if (url.charAt(0) !== '/')                                                                        // 45
      url = '/' + url;                                                                                // 46
    href = IronLocation.origin() + url;                                                               // 47
  }                                                                                                   // 48
                                                                                                      // 49
  if (!IronLocation.isSameOrigin(href))                                                               // 50
    window.location = href;                                                                           // 51
  else if (options.where === 'server')                                                                // 52
    window.location = href;                                                                           // 53
  else if (options.replaceState)                                                                      // 54
    IronLocation.replaceState(state, options.title, url, options.skipReactive);                       // 55
  else                                                                                                // 56
    IronLocation.pushState(state, options.title, url, options.skipReactive);                          // 57
};                                                                                                    // 58
                                                                                                      // 59
// store the state for later access                                                                   // 60
setState = function(newState, title, url, skipReactive) {                                             // 61
  newState = _.extend({}, newState);                                                                  // 62
  newState.path = url;                                                                                // 63
  newState.title = title;                                                                             // 64
                                                                                                      // 65
  if (!skipReactive && ! EJSON.equals(currentState, newState))                                        // 66
    dep.changed();                                                                                    // 67
                                                                                                      // 68
  currentState = newState;                                                                            // 69
}                                                                                                     // 70
                                                                                                      // 71
IronLocation.pushState = function (state, title, url, skipReactive) {                                 // 72
  setState(state, title, url, skipReactive);                                                          // 73
                                                                                                      // 74
  if (history.pushState)                                                                              // 75
    history.pushState(state, title, url);                                                             // 76
  else                                                                                                // 77
    window.location = url;                                                                            // 78
};                                                                                                    // 79
                                                                                                      // 80
IronLocation.replaceState = function (state, title, url, skipReactive) {                              // 81
  // allow just the state or title to be set                                                          // 82
  if (arguments.length < 2)                                                                           // 83
    title = currentState.title;                                                                       // 84
  if (arguments.length < 3)                                                                           // 85
    url = currentState.path;                                                                          // 86
                                                                                                      // 87
  setState(state, title, url, skipReactive);                                                          // 88
                                                                                                      // 89
  if (history.replaceState)                                                                           // 90
    history.replaceState(state, title, url);                                                          // 91
  else                                                                                                // 92
    window.location = url;                                                                            // 93
};                                                                                                    // 94
                                                                                                      // 95
IronLocation.bindEvents = function(){                                                                 // 96
  $(window).on('popstate.iron-router', onpopstate);                                                   // 97
};                                                                                                    // 98
                                                                                                      // 99
IronLocation.unbindEvents = function(){                                                               // 100
  $(window).off('popstate.iron-router');                                                              // 101
};                                                                                                    // 102
                                                                                                      // 103
IronLocation.start = function () {                                                                    // 104
  if (this.isStarted)                                                                                 // 105
    return;                                                                                           // 106
                                                                                                      // 107
  IronLocation.bindEvents();                                                                          // 108
  this.isStarted = true;                                                                              // 109
  // store the fact that this is the first route we hit.                                              // 110
  // this serves two purposes                                                                         // 111
  //   1. We can tell when we've reached an unhandled route and need to show a                        // 112
  //      404 (rather than bailing out to let the server handle it)                                   // 113
  //   2. Users can look at the state to tell if the history.back() will stay                         // 114
  //      inside the app (this is important for mobile apps).                                         // 115
  if (history.replaceState)                                                                           // 116
    history.replaceState({initial: true}, null, location.pathname + location.search + location.hash); // 117
};                                                                                                    // 118
                                                                                                      // 119
IronLocation.stop = function () {                                                                     // 120
  IronLocation.unbindEvents();                                                                        // 121
  this.isStarted = false;                                                                             // 122
};                                                                                                    // 123
                                                                                                      // 124
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/iron-router/lib/client/router.js                                                          //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
IronRouter = Utils.extend(IronRouter, {                                                               // 1
  constructor: function (options) {                                                                   // 2
    var self = this;                                                                                  // 3
                                                                                                      // 4
    IronRouter.__super__.constructor.apply(this, arguments);                                          // 5
    self.options.linkSelector = self.options.linkSelector || 'a[href]';                               // 6
                                                                                                      // 7
    this.isRendered = false;                                                                          // 8
                                                                                                      // 9
    /**                                                                                               // 10
     * The current RouteController instance. This is set anytime a new route is                       // 11
     * dispatched. It's a reactive variable which you can get by calling                              // 12
     * Router.current();                                                                              // 13
     *                                                                                                // 14
     * @api private                                                                                   // 15
     */                                                                                               // 16
    this._currentController = null;                                                                   // 17
                                                                                                      // 18
    /**                                                                                               // 19
     * Dependency to for this._currentController                                                      // 20
     *                                                                                                // 21
     * @api private                                                                                   // 22
     */                                                                                               // 23
    this._controllerDep = new Deps.Dependency;                                                        // 24
                                                                                                      // 25
    /**                                                                                               // 26
      * Did the URL we are looking at come from a hot-code-reload                                     // 27
      *  (and thus should we treat is as not new?)                                                    // 28
      *                                                                                               // 29
      * @api private                                                                                  // 30
      */                                                                                              // 31
    this._hasJustReloaded = false;                                                                    // 32
                                                                                                      // 33
    Meteor.startup(function () {                                                                      // 34
      Meteor.defer(function () {                                                                      // 35
        if (self.options.autoRender !== false)                                                        // 36
          self.autoRender();                                                                          // 37
        if (self.options.autoStart !== false)                                                         // 38
          self.start();                                                                               // 39
      });                                                                                             // 40
    });                                                                                               // 41
                                                                                                      // 42
    // proxy these methods to the underlying ui manager object                                        // 43
    _.each([                                                                                          // 44
      'layout',                                                                                       // 45
      'setRegion',                                                                                    // 46
      'clearRegion',                                                                                  // 47
      'getData',                                                                                      // 48
      'setData'                                                                                       // 49
    ], function (uiApiMethod) {                                                                       // 50
      self[uiApiMethod] = function () {                                                               // 51
        if (!self._ui)                                                                                // 52
          throw new Error("No uiManager is configured on the Router");                                // 53
        return self._ui[uiApiMethod].apply(self._ui, arguments);                                      // 54
      };                                                                                              // 55
    });                                                                                               // 56
  },                                                                                                  // 57
                                                                                                      // 58
  configure: function (options) {                                                                     // 59
    options = options || {};                                                                          // 60
                                                                                                      // 61
    IronRouter.__super__.configure.apply(this, arguments);                                            // 62
                                                                                                      // 63
    if (options.uiManager && this.isRendered)                                                         // 64
      throw new Error("Can't set uiManager after Router has been rendered");                          // 65
    else if (options.uiManager) {                                                                     // 66
      this._ui = options.uiManager;                                                                   // 67
    }                                                                                                 // 68
                                                                                                      // 69
    return this;                                                                                      // 70
  },                                                                                                  // 71
                                                                                                      // 72
  /**                                                                                                 // 73
   * Reactive accessor for the current RouteController instance. You can also                         // 74
   * get a nonreactive value by specifiying {reactive: false} as an option.                           // 75
   *                                                                                                  // 76
   * @param {Object} [opts] configuration options                                                     // 77
   * @param {Boolean} [opts.reactive] Set to false to enable a non-reactive read.                     // 78
   * @return {RouteController}                                                                        // 79
   * @api public                                                                                      // 80
   */                                                                                                 // 81
                                                                                                      // 82
  current: function (opts) {                                                                          // 83
    if (opts && opts.reactive === false)                                                              // 84
      return this._currentController;                                                                 // 85
    else {                                                                                            // 86
      this._controllerDep.depend();                                                                   // 87
      return this._currentController;                                                                 // 88
    }                                                                                                 // 89
  },                                                                                                  // 90
                                                                                                      // 91
  clearUnusedRegions: function (usedYields) {                                                         // 92
    if (!this._ui)                                                                                    // 93
      throw new Error('No ui manager has been set');                                                  // 94
                                                                                                      // 95
    var self = this;                                                                                  // 96
    var layout = this._ui;                                                                            // 97
                                                                                                      // 98
    var allYields = layout.getRegionKeys();                                                           // 99
    usedYields = _.filter(usedYields, function (val) {                                                // 100
      return !!val;                                                                                   // 101
    });                                                                                               // 102
                                                                                                      // 103
    var unusedYields = _.difference(allYields, usedYields);                                           // 104
                                                                                                      // 105
    _.each(unusedYields, function (key) {                                                             // 106
      layout.clearRegion(key);                                                                        // 107
    });                                                                                               // 108
  },                                                                                                  // 109
                                                                                                      // 110
  run: function (controller, cb) {                                                                    // 111
    IronRouter.__super__.run.apply(this, arguments);                                                  // 112
                                                                                                      // 113
    if (controller == this._currentController) {                                                      // 114
      this._controllerDep.changed();                                                                  // 115
    }                                                                                                 // 116
  },                                                                                                  // 117
                                                                                                      // 118
  /**                                                                                                 // 119
   * Wrapper around Location.go that accepts a routeName or a path as the first                       // 120
   * parameter. This method can accept client and server side routes.                                 // 121
   *                                                                                                  // 122
   * Examples:                                                                                        // 123
   *                                                                                                  // 124
   *  1. Router.go('/posts', {state: 'true'});                                                        // 125
   *  2. Router.go('postIndex', [param1, param2], {state});                                           // 126
   *                                                                                                  // 127
   * @param {String} routeNameOrPath                                                                  // 128
   * @param {Array|Object} [params]                                                                   // 129
   * @param {Object} [state]                                                                          // 130
   * @param {Boolean} [replaceState]                                                                  // 131
   * @api public                                                                                      // 132
   */                                                                                                 // 133
                                                                                                      // 134
  go: function (routeNameOrPath, params, options) {                                                   // 135
    var self = this;                                                                                  // 136
    var isPathRe = /^\/|http/                                                                         // 137
    var route;                                                                                        // 138
    var path;                                                                                         // 139
    var onComplete;                                                                                   // 140
    var controller;                                                                                   // 141
    var done;                                                                                         // 142
                                                                                                      // 143
    // after the dispatch is complete, set the IronLocation                                           // 144
    // path and state which will update the browser's url.                                            // 145
    done = function() {                                                                               // 146
      options = options || {};                                                                        // 147
      self._location.set(path, {                                                                      // 148
        replaceState: options.replaceState,                                                           // 149
        state: options.state,                                                                         // 150
        skipReactive: true                                                                            // 151
      });                                                                                             // 152
    };                                                                                                // 153
                                                                                                      // 154
    if (isPathRe.test(routeNameOrPath)) {                                                             // 155
      path = routeNameOrPath;                                                                         // 156
      options = params;                                                                               // 157
                                                                                                      // 158
      // if the path hasn't changed (at all), we are going to do nothing here                         // 159
      if (path === self._location.path()) {                                                           // 160
        if (self.options.debug)                                                                       // 161
          console.log("You've navigated to the same path that you are currently at. Doing nothing");  // 162
        return;                                                                                       // 163
      }                                                                                               // 164
                                                                                                      // 165
      // issue here is in the dispatch process we might want to                                       // 166
      // make a server request so therefore not call this method yet, so                              // 167
      // we need to push the state only after we've decided it's a client                             // 168
      // request, otherwise let the browser handle it and send off to the                             // 169
      // server                                                                                       // 170
      self.dispatch(path, options, done);                                                             // 171
    } else {                                                                                          // 172
      route = self.routes[routeNameOrPath];                                                           // 173
      Utils.assert(route, 'No route found named ' + routeNameOrPath);                                 // 174
      path = route.path(params, options);                                                             // 175
      controller = route.newController(path, options);                                                // 176
      self.run(controller, done);                                                                     // 177
    }                                                                                                 // 178
  },                                                                                                  // 179
                                                                                                      // 180
  render: function () {                                                                               // 181
    //XXX this probably needs to be reworked since _ui.render() returns an                            // 182
    //inited component which doesnt work with Shark rendering pipeline.                               // 183
    if (!this._ui)                                                                                    // 184
      throw new Error("No uiManager configured on Router");                                           // 185
    this.isRendered = true;                                                                           // 186
    return this._ui.render();                                                                         // 187
  },                                                                                                  // 188
                                                                                                      // 189
  autoRender: function () {                                                                           // 190
    if (!this._ui)                                                                                    // 191
      throw new Error("No uiManager configured on Router");                                           // 192
    this._ui.insert(document.body, UI.body, {                                                         // 193
      template: this.options.layoutTemplate                                                           // 194
    });                                                                                               // 195
  },                                                                                                  // 196
                                                                                                      // 197
  bindEvents: function () {                                                                           // 198
    $(document).on('click.ironRouter', this.options.linkSelector, _.bind(this.onClick, this));        // 199
  },                                                                                                  // 200
                                                                                                      // 201
  unbindEvents: function () {                                                                         // 202
    $(document).off('click.ironRouter', this.options.linkSelector);                                   // 203
  },                                                                                                  // 204
                                                                                                      // 205
  /**                                                                                                 // 206
   * Start listening to click events and set up a Deps.autorun for location                           // 207
   * changes. If already started the method just returns.                                             // 208
   *                                                                                                  // 209
   * @api public                                                                                      // 210
   */                                                                                                 // 211
                                                                                                      // 212
  start: function () {                                                                                // 213
    var self = this;                                                                                  // 214
                                                                                                      // 215
    if (self.isStarted) return;                                                                       // 216
                                                                                                      // 217
    self.isStarted = true;                                                                            // 218
                                                                                                      // 219
    self._location = self.options.location || IronLocation;                                           // 220
    self._location.start();                                                                           // 221
                                                                                                      // 222
    self.bindEvents();                                                                                // 223
                                                                                                      // 224
    Deps.autorun(function (c) {                                                                       // 225
      var location;                                                                                   // 226
      self._locationComputation = c;                                                                  // 227
      self.dispatch(self._location.path(), {state: history.state});                                   // 228
    });                                                                                               // 229
  },                                                                                                  // 230
                                                                                                      // 231
  /**                                                                                                 // 232
   * Remove click event listener and stop listening for location changes.                             // 233
   *                                                                                                  // 234
   * @api public                                                                                      // 235
   */                                                                                                 // 236
                                                                                                      // 237
  stop: function () {                                                                                 // 238
    this.isStarted = false;                                                                           // 239
                                                                                                      // 240
    this.unbindEvents();                                                                              // 241
    this._location.stop();                                                                            // 242
                                                                                                      // 243
    if (this._locationComputation)                                                                    // 244
      this._locationComputation.stop();                                                               // 245
  },                                                                                                  // 246
                                                                                                      // 247
  /**                                                                                                 // 248
   * If we don't handle a link but the server does, bail to the server                                // 249
   *                                                                                                  // 250
   * @api public                                                                                      // 251
   */                                                                                                 // 252
  onUnhandled: function (path, options) {                                                             // 253
    this.stop();                                                                                      // 254
    window.location = path;                                                                           // 255
  },                                                                                                  // 256
                                                                                                      // 257
  /**                                                                                                 // 258
   * if we don't handle a link, _and_ the  server doesn't handle it,                                  // 259
   * do one of two things:                                                                            // 260
   *   a) if this is the initial route, then it can't be a static asset, so                           // 261
   *      show notFound or throw an error                                                             // 262
   *   b) otherwise, let the server have a go at it, we may end up coming back.                       // 263
   *                                                                                                  // 264
   * @api public                                                                                      // 265
   */                                                                                                 // 266
  onRouteNotFound: function (path, options) {                                                         // 267
    if (this._location.path() !== path) {                                                             // 268
      this.stop();                                                                                    // 269
      window.location = path;                                                                         // 270
    } else if (this.options.notFoundTemplate) {                                                       // 271
      var notFoundRoute = new Route(this, '__notfound__', _.extend(options || {}, {path: path}));     // 272
      this.run(new RouteController(this, notFoundRoute, {                                             // 273
        layoutTemplate: this.options.layoutTemplate,                                                  // 274
        template: this.options.notFoundTemplate                                                       // 275
      }));                                                                                            // 276
    } else {                                                                                          // 277
      throw new Error('Oh no! No route found for path: "' + path + '"');                              // 278
    }                                                                                                 // 279
  },                                                                                                  // 280
                                                                                                      // 281
  onClick: function(e) {                                                                              // 282
    var el = e.currentTarget;                                                                         // 283
    var which = _.isUndefined(e.which) ? e.button : e.which;                                          // 284
    var href = el.href;                                                                               // 285
    var path = el.pathname + el.search + el.hash;                                                     // 286
                                                                                                      // 287
    // we only want to handle clicks on links which:                                                  // 288
    // - haven't been cancelled already                                                               // 289
    if (e.isDefaultPrevented())                                                                       // 290
      return;                                                                                         // 291
                                                                                                      // 292
    //  - are with the left mouse button with no meta key pressed                                     // 293
    if (which !== 1)                                                                                  // 294
      return;                                                                                         // 295
                                                                                                      // 296
    if (e.metaKey || e.ctrlKey || e.shiftKey)                                                         // 297
      return;                                                                                         // 298
                                                                                                      // 299
    // - aren't in a new window                                                                       // 300
    if (el.target)                                                                                    // 301
      return;                                                                                         // 302
                                                                                                      // 303
    // - aren't external to the app                                                                   // 304
    if (!IronLocation.isSameOrigin(href))                                                             // 305
      return;                                                                                         // 306
                                                                                                      // 307
    // note that we _do_ handle links which point to the current URL                                  // 308
    // and links which only change the hash.                                                          // 309
    e.preventDefault();                                                                               // 310
    this.go(path);                                                                                    // 311
  }                                                                                                   // 312
});                                                                                                   // 313
                                                                                                      // 314
/**                                                                                                   // 315
 * The main Router instance that clients will deal with                                               // 316
 *                                                                                                    // 317
 * @api public                                                                                        // 318
 * @exports Router                                                                                    // 319
 */                                                                                                   // 320
                                                                                                      // 321
Router = new IronRouter;                                                                              // 322
                                                                                                      // 323
if (Meteor._reload) {                                                                                 // 324
  // just register the fact that a migration _has_ happened                                           // 325
  Meteor._reload.onMigrate('iron-router', function() { return [true, true]});                         // 326
                                                                                                      // 327
  // then when we come back up, check if it it's set                                                  // 328
  var data = Meteor._reload.migrationData('iron-router');                                             // 329
  Router._hasJustReloaded = data;                                                                     // 330
}                                                                                                     // 331
                                                                                                      // 332
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/iron-router/lib/client/wait_list.js                                                       //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
WaitList = function (valueFunc) {                                                                     // 1
  this._valueFunc = valueFunc;                                                                        // 2
};                                                                                                    // 3
                                                                                                      // 4
WaitList.prototype = {                                                                                // 5
  constructor: WaitList,                                                                              // 6
                                                                                                      // 7
  ready: function () {                                                                                // 8
    return _.all(this._valueFunc(), function (item) {                                                 // 9
      return item && item.ready();                                                                    // 10
    });                                                                                               // 11
  }.reactive(),                                                                                       // 12
                                                                                                      // 13
  stop: function () {                                                                                 // 14
    this.ready.stop();                                                                                // 15
  }                                                                                                   // 16
};                                                                                                    // 17
                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/iron-router/lib/client/hooks.js                                                           //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
Router.hooks = {                                                                                      // 1
  dataNotFound: function (pause) {                                                                    // 2
    var data = this.data();                                                                           // 3
    var tmpl;                                                                                         // 4
                                                                                                      // 5
    if (!this.ready())                                                                                // 6
      return;                                                                                         // 7
                                                                                                      // 8
    if (data === null || typeof data === 'undefined') {                                               // 9
      tmpl = this.lookupProperty('notFoundTemplate');                                                 // 10
                                                                                                      // 11
      if (tmpl) {                                                                                     // 12
        this.render(tmpl);                                                                            // 13
        this.renderRegions();                                                                         // 14
        pause();                                                                                      // 15
      }                                                                                               // 16
    }                                                                                                 // 17
  },                                                                                                  // 18
                                                                                                      // 19
  loading: function (pause) {                                                                         // 20
    var self = this;                                                                                  // 21
    var tmpl;                                                                                         // 22
                                                                                                      // 23
    if (!this.ready()) {                                                                              // 24
      tmpl = this.lookupProperty('loadingTemplate');                                                  // 25
                                                                                                      // 26
      if (tmpl) {                                                                                     // 27
        this.render(tmpl);                                                                            // 28
        this.renderRegions();                                                                         // 29
        pause();                                                                                      // 30
      }                                                                                               // 31
    }                                                                                                 // 32
  }                                                                                                   // 33
};                                                                                                    // 34
                                                                                                      // 35
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/iron-router/lib/client/route_controller.js                                                //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
/**                                                                                                   // 1
 * XXX Bug in the new waitOn design. Ran out of time to fix for today.                                // 2
 * cc @tmeasday                                                                                       // 3
 *                                                                                                    // 4
 * The waitOn function gets called multiple times (every time                                         // 5
 * you call this.ready()).                                                                            // 6
 *                                                                                                    // 7
 * I did this to fix the issue raised by Tom to make sure we always have the                          // 8
 * correct return value from the waitOn function (or any value function being                         // 9
 * used with ReactiveResult. So when we call this.ready() the waitOn function                         // 10
 * gets called each time.                                                                             // 11
 *                                                                                                    // 12
 * Problem 1: Meteor will subscribe multiple times. When it checks for an                             // 13
 * existing subscription it will only find it if "inactive: true" which only                          // 14
 * happens on an invalidation.                                                                        // 15
 *                                                                                                    // 16
 * Problem 2: We can probably do better than calling the waitOn function                              // 17
 * multiple needless times.                                                                           // 18
 *                                                                                                    // 19
 * Possible Solutions:                                                                                // 20
 *                                                                                                    // 21
 *  1. Patch to Core removing the "inactive: true" in the subscription lookup.                        // 22
 *      - But waitOn would still get called multiple times                                            // 23
 *      - The existing check in livedata does a linear search over all                                // 24
 *        subscriptions                                                                               // 25
 *  2. Some kind of enhancement to ReactiveResult, or maybe even a new data                           // 26
 *     structure to handle these new requirements.                                                    // 27
 *      - Can we meet Tom's previous requirement for result to always be                              // 28
 *        current, while also caching the value? Would this be a new ds?                              // 29
 */                                                                                                   // 30
var isLogging = false;                                                                                // 31
var log = function (msg) {                                                                            // 32
  if (!isLogging)                                                                                     // 33
    return;                                                                                           // 34
  console.log('%c<RouteController> ' + msg, 'color: purple; font-size: 1.3em; font-weight: bold;');   // 35
};                                                                                                    // 36
                                                                                                      // 37
RouteController = Utils.extend(RouteController, {                                                     // 38
  constructor: function () {                                                                          // 39
    var self = this;                                                                                  // 40
                                                                                                      // 41
    RouteController.__super__.constructor.apply(this, arguments);                                     // 42
                                                                                                      // 43
    // the value of the data option or prototype property                                             // 44
    this._dataValue = this.lookupProperty('data');                                                    // 45
                                                                                                      // 46
    // rewrite the data function on the instance itself.  Get the data from the                       // 47
    // controller itself, not the router global data context. This is what                            // 48
    // controller functions will read from. Templates will get their data                             // 49
    // context from the global router data context which will get set in the                          // 50
    // _run function.                                                                                 // 51
    this.data = function () {                                                                         // 52
      var value;                                                                                      // 53
                                                                                                      // 54
      if (_.isFunction(self._dataValue))                                                              // 55
        value = self._dataValue.call(self);                                                           // 56
      else if (self._dataValue)                                                                       // 57
        value = self._dataValue                                                                       // 58
      else                                                                                            // 59
        value = null;                                                                                 // 60
                                                                                                      // 61
      log('this.data()');                                                                             // 62
      return value;                                                                                   // 63
    };                                                                                                // 64
                                                                                                      // 65
    this._waitList = new WaitList(function () {                                                       // 66
      var waitOnList = self.lookupWaitOn();                                                           // 67
      return _.flatten(_.map(waitOnList, function (fnOrHandle) {                                      // 68
        return _.isFunction(fnOrHandle) ? fnOrHandle.call(self) : fnOrHandle;                         // 69
      }));                                                                                            // 70
    });                                                                                               // 71
                                                                                                      // 72
    // proxy these methods to the router                                                              // 73
    _.each([                                                                                          // 74
      'layout',                                                                                       // 75
      'setRegion',                                                                                    // 76
      'clearRegion'                                                                                   // 77
    ], function (routerApiMethod) {                                                                   // 78
      self[routerApiMethod] = function () {                                                           // 79
        if (!self.router)                                                                             // 80
          throw new Error("No router defined on RouteController");                                    // 81
        return self.router[routerApiMethod].apply(self.router, arguments);                            // 82
      };                                                                                              // 83
    });                                                                                               // 84
  },                                                                                                  // 85
                                                                                                      // 86
  setLayout: function () {                                                                            // 87
    return this.layout.apply(this, arguments);                                                        // 88
  },                                                                                                  // 89
                                                                                                      // 90
  ready: function () {                                                                                // 91
    if (this._waitList)                                                                               // 92
      return this._waitList.ready();                                                                  // 93
    else                                                                                              // 94
      return true;                                                                                    // 95
  },                                                                                                  // 96
                                                                                                      // 97
  /**                                                                                                 // 98
   * Stop running this controller and redirect to a new path. Same parameters as                      // 99
   * those of Router.go.                                                                              // 100
   * @api public                                                                                      // 101
   */                                                                                                 // 102
                                                                                                      // 103
  redirect: function (/* args */) {                                                                   // 104
    return Router.go.apply(Router, arguments);                                                        // 105
  },                                                                                                  // 106
                                                                                                      // 107
  //XXX move into subscription class? look into arunoda's work.                                       // 108
  subscribe: function (/* same as Meteor.subscribe */) {                                              // 109
    var self = this;                                                                                  // 110
                                                                                                      // 111
    var waitApi = (function () {                                                                      // 112
      return {                                                                                        // 113
        wait: function () {                                                                           // 114
          self._waitList.push(this);                                                                  // 115
          added = true;                                                                               // 116
        }                                                                                             // 117
      };                                                                                              // 118
    })();                                                                                             // 119
                                                                                                      // 120
    var handle = Meteor.subscribe.apply(this, arguments);                                             // 121
    return _.extend(handle, waitApi);                                                                 // 122
  },                                                                                                  // 123
                                                                                                      // 124
  lookupLayoutTemplate: function () {                                                                 // 125
    return this.lookupProperty('layoutTemplate');                                                     // 126
  },                                                                                                  // 127
                                                                                                      // 128
  lookupTemplate: function () {                                                                       // 129
    return this.lookupProperty('template')                                                            // 130
      || Router.convertTemplateName(this.route.name);                                                 // 131
  },                                                                                                  // 132
                                                                                                      // 133
  lookupRegionTemplates: function () {                                                                // 134
    var res;                                                                                          // 135
                                                                                                      // 136
    if (res = this.lookupProperty('regionTemplates'))                                                 // 137
      return res;                                                                                     // 138
    else if (res = this.lookupProperty('yieldTemplates'))                                             // 139
      return res;                                                                                     // 140
    else                                                                                              // 141
      return {};                                                                                      // 142
  },                                                                                                  // 143
                                                                                                      // 144
  /**                                                                                                 // 145
   * Return an array of waitOn values in the folowing order (although, ordering                       // 146
   * shouldn't really matter for waitOn). The result may contain sub arrays like                      // 147
   * this:                                                                                            // 148
   *   [[fn1, fn2], [fn3, fn4]]                                                                       // 149
   *                                                                                                  // 150
   *   1. Router options                                                                              // 151
   *   2. Route options                                                                               // 152
   *   3. Controller options                                                                          // 153
   *   4. Controller instance                                                                         // 154
   */                                                                                                 // 155
                                                                                                      // 156
  lookupWaitOn: function () {                                                                         // 157
    var toArray = Utils.toArray;                                                                      // 158
                                                                                                      // 159
    var fromRouterHook = toArray(this.router.getHooks('waitOn', this.route.name));                    // 160
    var fromRouterOptions = toArray(this.router.options.waitOn);                                      // 161
    var fromRouteOptions = toArray(this.route.options.waitOn);                                        // 162
    var fromMyOptions = toArray(this.options.waitOn);                                                 // 163
    var fromInstOptions = toArray(this.waitOn);                                                       // 164
                                                                                                      // 165
    return fromRouterHook                                                                             // 166
      .concat(fromRouterOptions)                                                                      // 167
      .concat(fromRouteOptions)                                                                       // 168
      .concat(fromMyOptions)                                                                          // 169
      .concat(fromInstOptions);                                                                       // 170
  },                                                                                                  // 171
                                                                                                      // 172
  /**                                                                                                 // 173
   * Either specify a template to render or call with no arguments to render the                      // 174
   * RouteController's template plus all of the yieldTemplates.                                       // 175
   *                                                                                                  // 176
   * XXX can we have some hooks here? would be nice to give                                           // 177
   * iron-transitioner a place to plug in. Maybe onSetRegion(fn)?                                     // 178
   */                                                                                                 // 179
                                                                                                      // 180
  render: function (template, options) {                                                              // 181
    var to;                                                                                           // 182
    var template;                                                                                     // 183
    var layout;                                                                                       // 184
    var self = this;                                                                                  // 185
                                                                                                      // 186
    var addRenderedRegion = function (key) {                                                          // 187
      if (self._renderedRegions) {                                                                    // 188
        //XXX doesn't using "main" creep into the ui manager?                                         // 189
        key = key || 'main';                                                                          // 190
        self._renderedRegions.push(key);                                                              // 191
      }                                                                                               // 192
    };                                                                                                // 193
                                                                                                      // 194
    if (arguments.length == 0) {                                                                      // 195
      this.setRegion(this.lookupTemplate());                                                          // 196
      addRenderedRegion();                                                                            // 197
      this.renderRegions();                                                                           // 198
    } else {                                                                                          // 199
      options = options || {};                                                                        // 200
      to = options.to;                                                                                // 201
      this.setRegion(to, template);                                                                   // 202
      addRenderedRegion(to);                                                                          // 203
    }                                                                                                 // 204
  },                                                                                                  // 205
                                                                                                      // 206
  renderRegions: function() {                                                                         // 207
    var self = this;                                                                                  // 208
    var regionTemplates = this.lookupRegionTemplates();                                               // 209
                                                                                                      // 210
    _.each(regionTemplates, function (opts, tmpl) {                                                   // 211
      self.render(tmpl, opts)                                                                         // 212
    });                                                                                               // 213
  },                                                                                                  // 214
                                                                                                      // 215
  wait: function (handle) {                                                                           // 216
    handle = _.isFunction(handle) ? handle.call(this) : handle;                                       // 217
    // handle could be an object or a array if a function returned an array                           // 218
    this._waitList.append(handle);                                                                    // 219
  },                                                                                                  // 220
                                                                                                      // 221
  action: function () {                                                                               // 222
    this.render();                                                                                    // 223
  },                                                                                                  // 224
                                                                                                      // 225
  /**                                                                                                 // 226
   * A private method that the Router can call into to                                                // 227
   * stop the controller. The reason we need this is because we                                       // 228
   * don't want users calling stop() in their hooks/action like they                                  // 229
   * had done previously. We now want them to call pause(). stop() now                                // 230
   * completely stops the controller and tears down its computations. pause()                         // 231
   * just stopps running downstream functions (e.g. when you're running                               // 232
   * before/action/after functions. But if the outer computation causes the                           // 233
   * entire chain of functions to run again that's fine.                                              // 234
   */                                                                                                 // 235
  _stopController: function (cb) {                                                                    // 236
    var self = this;                                                                                  // 237
                                                                                                      // 238
    // noop if we're already stopped                                                                  // 239
    if (this.isStopped)                                                                               // 240
      return;                                                                                         // 241
                                                                                                      // 242
    var onStop = function () {                                                                        // 243
      RouteController.__super__._stopController.call(self, cb);                                       // 244
                                                                                                      // 245
      if (self._waitList)                                                                             // 246
        self._waitList.stop();                                                                        // 247
    };                                                                                                // 248
                                                                                                      // 249
    if (this._computation) {                                                                          // 250
      this._computation.stop();                                                                       // 251
      this._computation.onInvalidate(onStop);                                                         // 252
    } else {                                                                                          // 253
      onStop();                                                                                       // 254
    }                                                                                                 // 255
  },                                                                                                  // 256
                                                                                                      // 257
  _run: function () {                                                                                 // 258
    var self = this;                                                                                  // 259
                                                                                                      // 260
    // if we're already running, you can't call run again without                                     // 261
    // calling stop first.                                                                            // 262
    if (self.isRunning)                                                                               // 263
      throw new Error("You called _run without first calling stop");                                  // 264
                                                                                                      // 265
    self.isRunning = true;                                                                            // 266
    self.isStopped = false;                                                                           // 267
                                                                                                      // 268
    var withNoStopsAllowed = function (fn, thisArg) {                                                 // 269
      return function () {                                                                            // 270
        var oldStop = self.stop;                                                                      // 271
                                                                                                      // 272
        self.stop = function () {                                                                     // 273
          if (typeof console !== 'undefined') {                                                       // 274
            console.warn("You called this.stop() inside a hook or your action function but you should use pause() now instead which is the first parameter to the hook function.");
            return;                                                                                   // 276
          }                                                                                           // 277
        };                                                                                            // 278
                                                                                                      // 279
        try {                                                                                         // 280
          return fn.call(thisArg || this);                                                            // 281
        } finally {                                                                                   // 282
          self.stop = oldStop;                                                                        // 283
        }                                                                                             // 284
      };                                                                                              // 285
    };                                                                                                // 286
                                                                                                      // 287
    // outer most computation is just used to stop inner computations from one                        // 288
    // place. i don't expect this computation to be invalidated during the run.                       // 289
    self._computation = Deps.autorun(withNoStopsAllowed(function () {                                 // 290
      self._renderedRegions = [];                                                                     // 291
                                                                                                      // 292
      Deps.autorun(withNoStopsAllowed(function () {                                                   // 293
        if (!self.router._hasJustReloaded)                                                            // 294
          self.runHooks('onRun');                                                                     // 295
        self.router._hasJustReloaded = false;                                                         // 296
      }));                                                                                            // 297
                                                                                                      // 298
      // action                                                                                       // 299
      var action = _.isFunction(self.action) ? self.action : self[self.action];                       // 300
      Utils.assert(action,                                                                            // 301
        "You don't have an action named \"" + self.action + "\" defined on your RouteController");    // 302
                                                                                                      // 303
      Deps.autorun(withNoStopsAllowed(function () {                                                   // 304
        // Set layout to configured layoutTemplate                                                    // 305
        self.layout(self.lookupLayoutTemplate());                                                     // 306
                                                                                                      // 307
        if (self.ready()) {                                                                           // 308
          Deps.autorun(withNoStopsAllowed(function () {                                               // 309
            self.router.setData(self.data());                                                         // 310
            self.runHooks('onData');                                                                  // 311
          }));                                                                                        // 312
        } else {                                                                                      // 313
          self.router.setData(null);                                                                  // 314
        }                                                                                             // 315
                                                                                                      // 316
        log('Call action');                                                                           // 317
        self.runHooks('onBeforeAction', [], function (paused) {                                       // 318
          if (!paused && !self.isStopped) {                                                           // 319
            action.call(self);                                                                        // 320
                                                                                                      // 321
            if (!self.isStopped) {                                                                    // 322
              self.runHooks('onAfterAction', [                                                        // 323
                function clearUnusedRegions () {                                                      // 324
                  if (this.router) {                                                                  // 325
                    this.router.clearUnusedRegions(this._renderedRegions);                            // 326
                  }                                                                                   // 327
                }                                                                                     // 328
              ]);                                                                                     // 329
            }                                                                                         // 330
          }                                                                                           // 331
        });                                                                                           // 332
      }));                                                                                            // 333
    }));                                                                                              // 334
  }                                                                                                   // 335
});                                                                                                   // 336
                                                                                                      // 337
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/iron-router/lib/client/ui/helpers.js                                                      //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
Router.helpers = {};                                                                                  // 1
                                                                                                      // 2
var getData = function (thisArg) {                                                                    // 3
  return thisArg === window ? {} : thisArg;                                                           // 4
};                                                                                                    // 5
                                                                                                      // 6
var processPathArgs = function (routeName, options) {                                                 // 7
  if (_.isObject(routeName)) {                                                                        // 8
    options = routeName;                                                                              // 9
    routeName = options.route;                                                                        // 10
  }                                                                                                   // 11
                                                                                                      // 12
  var opts = options.hash || {};                                                                      // 13
  var params = opts.params || _.omit(opts, 'hash', 'query');                                          // 14
  var hash = opts.hash;                                                                               // 15
  var query = opts.query;                                                                             // 16
                                                                                                      // 17
  // if called without opts, use the data context of the parent                                       // 18
  if (_.isEmpty(opts))                                                                                // 19
    params = getData(this);                                                                           // 20
                                                                                                      // 21
  return {                                                                                            // 22
    routeName: routeName,                                                                             // 23
    params: params,                                                                                   // 24
    query: query,                                                                                     // 25
    hash: hash                                                                                        // 26
  };                                                                                                  // 27
};                                                                                                    // 28
                                                                                                      // 29
_.extend(Router.helpers, {                                                                            // 30
                                                                                                      // 31
  /**                                                                                                 // 32
   * Example Use:                                                                                     // 33
   *                                                                                                  // 34
   *  {{pathFor 'items' params=this}}                                                                 // 35
   *  {{pathFor 'items' id=5 query="view=all" hash="somehash"}}                                       // 36
   *  {{pathFor route='items' id=5 query="view=all" hash="somehash"}}                                 // 37
   */                                                                                                 // 38
                                                                                                      // 39
  pathFor: function (routeName, options) {                                                            // 40
    var args = processPathArgs.call(this, routeName, options);                                        // 41
                                                                                                      // 42
    return Router.path(args.routeName, args.params, {                                                 // 43
      query: args.query,                                                                              // 44
      hash: args.hash                                                                                 // 45
    });                                                                                               // 46
  },                                                                                                  // 47
                                                                                                      // 48
  /**                                                                                                 // 49
   * Same as pathFor but returns entire aboslute url.                                                 // 50
   *                                                                                                  // 51
   */                                                                                                 // 52
  urlFor: function (routeName, options) {                                                             // 53
    var args = processPathArgs.call(this, routeName, options);                                        // 54
                                                                                                      // 55
    return Router.url(args.routeName, args.params, {                                                  // 56
      query: args.query,                                                                              // 57
      hash: args.hash                                                                                 // 58
    });                                                                                               // 59
  }                                                                                                   // 60
});                                                                                                   // 61
                                                                                                      // 62
_.each(Router.helpers, function (helper, name) {                                                      // 63
  UI.registerHelper(name, helper);                                                                    // 64
});                                                                                                   // 65
                                                                                                      // 66
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['iron-router'] = {
  RouteController: RouteController,
  Route: Route,
  Router: Router,
  IronLocation: IronLocation,
  Utils: Utils,
  IronRouter: IronRouter,
  WaitList: WaitList
};

})();

//# sourceMappingURL=c730218a37c75be0980fccf28e311d23982cb78b.map

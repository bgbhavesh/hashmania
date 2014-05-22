(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/roles/tests/server.js                                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
;(function () {                                                                                   // 1
                                                                                                  // 2
  var users = {},                                                                                 // 3
      roles = ['admin','editor','user']                                                           // 4
                                                                                                  // 5
  // use to run individual tests                                                                  // 6
  //Tinytest.oadd = Tinytest.add                                                                  // 7
  //Tinytest.add = function () {}                                                                 // 8
                                                                                                  // 9
  function addUser (name) {                                                                       // 10
    return Accounts.createUser({'username': name})                                                // 11
  }                                                                                               // 12
                                                                                                  // 13
  function reset () {                                                                             // 14
    Meteor.roles.remove({})                                                                       // 15
    Meteor.users.remove({})                                                                       // 16
                                                                                                  // 17
    users = {                                                                                     // 18
      'eve': addUser('eve'),                                                                      // 19
      'bob': addUser('bob'),                                                                      // 20
      'joe': addUser('joe')                                                                       // 21
    }                                                                                             // 22
  }                                                                                               // 23
                                                                                                  // 24
                                                                                                  // 25
  function testUser (test, username, expectedRoles, group) {                                      // 26
    var userId = users[username],                                                                 // 27
        userObj = Meteor.users.findOne({_id: userId})                                             // 28
                                                                                                  // 29
    // check using user ids (makes db calls)                                                      // 30
    _innerTest(test, userId, username, expectedRoles, group)                                      // 31
                                                                                                  // 32
    // check using passed-in user object                                                          // 33
    _innerTest(test, userObj, username, expectedRoles, group)                                     // 34
  }                                                                                               // 35
                                                                                                  // 36
  function _innerTest (test, userParam, username, expectedRoles, group) {                         // 37
    // test that user has only the roles expected and no others                                   // 38
    _.each(roles, function (role) {                                                               // 39
      var expected = _.contains(expectedRoles, role),                                             // 40
          msg = username + ' expected to have \'' + role + '\' permission but does not',          // 41
          nmsg = username + ' had the following un-expected permission: ' + role                  // 42
                                                                                                  // 43
      if (expected) {                                                                             // 44
        test.isTrue(Roles.userIsInRole(userParam, role, group), msg)                              // 45
      } else {                                                                                    // 46
        test.isFalse(Roles.userIsInRole(userParam, role, group), nmsg)                            // 47
      }                                                                                           // 48
    })                                                                                            // 49
  }                                                                                               // 50
                                                                                                  // 51
                                                                                                  // 52
  Tinytest.add(                                                                                   // 53
    'roles - can create and delete roles',                                                        // 54
    function (test) {                                                                             // 55
      reset()                                                                                     // 56
                                                                                                  // 57
      Roles.createRole('test1')                                                                   // 58
      test.equal(Meteor.roles.findOne().name, 'test1')                                            // 59
                                                                                                  // 60
      Roles.createRole('test2')                                                                   // 61
      test.equal(Meteor.roles.findOne({'name':'test2'}).name, 'test2')                            // 62
                                                                                                  // 63
      test.equal(Meteor.roles.find().count(), 2)                                                  // 64
                                                                                                  // 65
      Roles.deleteRole('test1')                                                                   // 66
      test.equal(typeof Meteor.roles.findOne({'name':'test1'}), 'undefined')                      // 67
                                                                                                  // 68
      Roles.deleteRole('test2')                                                                   // 69
      test.equal(typeof Meteor.roles.findOne(), 'undefined')                                      // 70
    })                                                                                            // 71
                                                                                                  // 72
  Tinytest.add(                                                                                   // 73
    'roles - can\'t create duplicate roles',                                                      // 74
    function (test) {                                                                             // 75
      reset()                                                                                     // 76
                                                                                                  // 77
      Roles.createRole('test1')                                                                   // 78
      test.throws(function () {Roles.createRole('test1')})                                        // 79
    })                                                                                            // 80
                                                                                                  // 81
  Tinytest.add(                                                                                   // 82
    'roles - can\'t create role with empty names',                                                // 83
    function (test) {                                                                             // 84
      reset()                                                                                     // 85
                                                                                                  // 86
      Roles.createRole('')                                                                        // 87
      Roles.createRole(null)                                                                      // 88
                                                                                                  // 89
      test.equal(Meteor.roles.find().count(), 0)                                                  // 90
                                                                                                  // 91
      Roles.createRole(' ')                                                                       // 92
      test.equal(Meteor.roles.find().count(), 0)                                                  // 93
    })                                                                                            // 94
                                                                                                  // 95
  Tinytest.add(                                                                                   // 96
    'roles - can check if user is in role',                                                       // 97
    function (test) {                                                                             // 98
      reset()                                                                                     // 99
                                                                                                  // 100
      Meteor.users.update(                                                                        // 101
        {"_id":users.eve},                                                                        // 102
        {$addToSet: { roles: { $each: ['admin', 'user'] } } }                                     // 103
      )                                                                                           // 104
      testUser(test, 'eve', ['admin', 'user'])                                                    // 105
    })                                                                                            // 106
                                                                                                  // 107
  Tinytest.add(                                                                                   // 108
    'roles - can check if user is in role by group',                                              // 109
    function (test) {                                                                             // 110
      reset()                                                                                     // 111
                                                                                                  // 112
      Meteor.users.update(                                                                        // 113
        {"_id":users.eve},                                                                        // 114
        {$addToSet: { 'roles.group1': { $each: ['admin', 'user'] } } })                           // 115
      Meteor.users.update(                                                                        // 116
        {"_id":users.eve},                                                                        // 117
        {$addToSet: { 'roles.group2': { $each: ['editor'] } } })                                  // 118
                                                                                                  // 119
      testUser(test, 'eve', ['admin', 'user'], 'group1')                                          // 120
      testUser(test, 'eve', ['editor'], 'group2')                                                 // 121
    })                                                                                            // 122
                                                                                                  // 123
  Tinytest.add(                                                                                   // 124
    'roles - can check if non-existant user is in role',                                          // 125
    function (test) {                                                                             // 126
      reset()                                                                                     // 127
                                                                                                  // 128
      test.isFalse(Roles.userIsInRole('1', 'admin'))                                              // 129
    })                                                                                            // 130
                                                                                                  // 131
  Tinytest.add(                                                                                   // 132
    'roles - can check if null user is in role',                                                  // 133
    function (test) {                                                                             // 134
      var user = null                                                                             // 135
      reset()                                                                                     // 136
                                                                                                  // 137
      test.isFalse(Roles.userIsInRole(user, 'admin'))                                             // 138
    })                                                                                            // 139
                                                                                                  // 140
  Tinytest.add(                                                                                   // 141
    'roles - can check user against several roles at once',                                       // 142
    function (test) {                                                                             // 143
      var user                                                                                    // 144
      reset()                                                                                     // 145
                                                                                                  // 146
      Roles.addUsersToRoles(users.eve, ['admin', 'user'])                                         // 147
      user = Meteor.users.findOne({_id:users.eve})                                                // 148
                                                                                                  // 149
      test.isTrue(Roles.userIsInRole(user, ['editor','admin']))                                   // 150
    })                                                                                            // 151
                                                                                                  // 152
  Tinytest.add(                                                                                   // 153
    'roles - can\'t add non-existent user to role',                                               // 154
    function (test) {                                                                             // 155
      reset()                                                                                     // 156
                                                                                                  // 157
      Roles.addUsersToRoles(['1'], ['admin'])                                                     // 158
      test.equal(Meteor.users.findOne({_id:'1'}), undefined)                                      // 159
    })                                                                                            // 160
                                                                                                  // 161
  Tinytest.add(                                                                                   // 162
    'roles - can add individual users to roles',                                                  // 163
    function (test) {                                                                             // 164
      reset()                                                                                     // 165
                                                                                                  // 166
      Roles.addUsersToRoles(users.eve, ['admin', 'user'])                                         // 167
                                                                                                  // 168
      testUser(test, 'eve', ['admin', 'user'])                                                    // 169
      testUser(test, 'bob', [])                                                                   // 170
      testUser(test, 'joe', [])                                                                   // 171
                                                                                                  // 172
      Roles.addUsersToRoles(users.joe, ['editor', 'user'])                                        // 173
                                                                                                  // 174
      testUser(test, 'eve', ['admin', 'user'])                                                    // 175
      testUser(test, 'bob', [])                                                                   // 176
      testUser(test, 'joe', ['editor', 'user'])                                                   // 177
    })                                                                                            // 178
                                                                                                  // 179
  Tinytest.add(                                                                                   // 180
    'roles - can add individual users to roles by group',                                         // 181
    function (test) {                                                                             // 182
      reset()                                                                                     // 183
                                                                                                  // 184
      Roles.addUsersToRoles(users.eve, ['admin', 'user'], 'group1')                               // 185
                                                                                                  // 186
      testUser(test, 'eve', ['admin', 'user'], 'group1')                                          // 187
      testUser(test, 'bob', [], 'group1')                                                         // 188
      testUser(test, 'joe', [], 'group1')                                                         // 189
                                                                                                  // 190
      testUser(test, 'eve', [], 'group2')                                                         // 191
      testUser(test, 'bob', [], 'group2')                                                         // 192
      testUser(test, 'joe', [], 'group2')                                                         // 193
                                                                                                  // 194
      Roles.addUsersToRoles(users.joe, ['editor', 'user'], 'group1')                              // 195
      Roles.addUsersToRoles(users.bob, ['editor', 'user'], 'group2')                              // 196
                                                                                                  // 197
      testUser(test, 'eve', ['admin', 'user'], 'group1')                                          // 198
      testUser(test, 'bob', [], 'group1')                                                         // 199
      testUser(test, 'joe', ['editor', 'user'], 'group1')                                         // 200
                                                                                                  // 201
      testUser(test, 'eve', [], 'group2')                                                         // 202
      testUser(test, 'bob', ['editor', 'user'], 'group2')                                         // 203
      testUser(test, 'joe', [], 'group2')                                                         // 204
    })                                                                                            // 205
                                                                                                  // 206
  Tinytest.add(                                                                                   // 207
    'roles - can add user to roles via user object',                                              // 208
    function (test) {                                                                             // 209
      reset()                                                                                     // 210
                                                                                                  // 211
      var eve = Meteor.users.findOne({_id: users.eve}),                                           // 212
          bob = Meteor.users.findOne({_id: users.bob})                                            // 213
                                                                                                  // 214
      Roles.addUsersToRoles(eve, ['admin', 'user'])                                               // 215
                                                                                                  // 216
      testUser(test, 'eve', ['admin', 'user'])                                                    // 217
      testUser(test, 'bob', [])                                                                   // 218
      testUser(test, 'joe', [])                                                                   // 219
                                                                                                  // 220
      Roles.addUsersToRoles(bob, ['editor'])                                                      // 221
                                                                                                  // 222
      testUser(test, 'eve', ['admin', 'user'])                                                    // 223
      testUser(test, 'bob', ['editor'])                                                           // 224
      testUser(test, 'joe', [])                                                                   // 225
    })                                                                                            // 226
                                                                                                  // 227
  Tinytest.add(                                                                                   // 228
    'roles - can add user to roles multiple times',                                               // 229
    function (test) {                                                                             // 230
      reset()                                                                                     // 231
                                                                                                  // 232
      Roles.addUsersToRoles(users.eve, ['admin', 'user'])                                         // 233
      Roles.addUsersToRoles(users.eve, ['admin', 'user'])                                         // 234
                                                                                                  // 235
      testUser(test, 'eve', ['admin', 'user'])                                                    // 236
      testUser(test, 'bob', [])                                                                   // 237
      testUser(test, 'joe', [])                                                                   // 238
                                                                                                  // 239
      Roles.addUsersToRoles(users.bob, ['admin'])                                                 // 240
      Roles.addUsersToRoles(users.bob, ['editor'])                                                // 241
                                                                                                  // 242
      testUser(test, 'eve', ['admin', 'user'])                                                    // 243
      testUser(test, 'bob', ['admin', 'editor'])                                                  // 244
      testUser(test, 'joe', [])                                                                   // 245
    })                                                                                            // 246
                                                                                                  // 247
  Tinytest.add(                                                                                   // 248
    'roles - can add user to roles multiple times by group',                                      // 249
    function (test) {                                                                             // 250
      reset()                                                                                     // 251
                                                                                                  // 252
      Roles.addUsersToRoles(users.eve, ['admin', 'user'], 'group1')                               // 253
      Roles.addUsersToRoles(users.eve, ['admin', 'user'], 'group1')                               // 254
                                                                                                  // 255
      testUser(test, 'eve', ['admin', 'user'], 'group1')                                          // 256
      testUser(test, 'bob', [], 'group1')                                                         // 257
      testUser(test, 'joe', [], 'group1')                                                         // 258
                                                                                                  // 259
      Roles.addUsersToRoles(users.bob, ['admin'], 'group1')                                       // 260
      Roles.addUsersToRoles(users.bob, ['editor'], 'group1')                                      // 261
                                                                                                  // 262
      testUser(test, 'eve', ['admin', 'user'], 'group1')                                          // 263
      testUser(test, 'bob', ['admin', 'editor'], 'group1')                                        // 264
      testUser(test, 'joe', [], 'group1')                                                         // 265
    })                                                                                            // 266
                                                                                                  // 267
  Tinytest.add(                                                                                   // 268
    'roles - can add multiple users to roles',                                                    // 269
    function (test) {                                                                             // 270
      reset()                                                                                     // 271
                                                                                                  // 272
      Roles.addUsersToRoles([users.eve, users.bob], ['admin', 'user'])                            // 273
                                                                                                  // 274
      testUser(test, 'eve', ['admin', 'user'])                                                    // 275
      testUser(test, 'bob', ['admin', 'user'])                                                    // 276
      testUser(test, 'joe', [])                                                                   // 277
                                                                                                  // 278
      Roles.addUsersToRoles([users.bob, users.joe], ['editor', 'user'])                           // 279
                                                                                                  // 280
      testUser(test, 'eve', ['admin', 'user'])                                                    // 281
      testUser(test, 'bob', ['admin', 'editor', 'user'])                                          // 282
      testUser(test, 'joe', ['editor', 'user'])                                                   // 283
    })                                                                                            // 284
                                                                                                  // 285
  Tinytest.add(                                                                                   // 286
    'roles - can add multiple users to roles by group',                                           // 287
    function (test) {                                                                             // 288
      reset()                                                                                     // 289
                                                                                                  // 290
      Roles.addUsersToRoles([users.eve, users.bob], ['admin', 'user'], 'group1')                  // 291
                                                                                                  // 292
      testUser(test, 'eve', ['admin', 'user'], 'group1')                                          // 293
      testUser(test, 'bob', ['admin', 'user'], 'group1')                                          // 294
      testUser(test, 'joe', [], 'group1')                                                         // 295
                                                                                                  // 296
      testUser(test, 'eve', [], 'group2')                                                         // 297
      testUser(test, 'bob', [], 'group2')                                                         // 298
      testUser(test, 'joe', [], 'group2')                                                         // 299
                                                                                                  // 300
      Roles.addUsersToRoles([users.bob, users.joe], ['editor', 'user'], 'group1')                 // 301
      Roles.addUsersToRoles([users.bob, users.joe], ['editor', 'user'], 'group2')                 // 302
                                                                                                  // 303
      testUser(test, 'eve', ['admin', 'user'], 'group1')                                          // 304
      testUser(test, 'bob', ['admin', 'editor', 'user'], 'group1')                                // 305
      testUser(test, 'joe', ['editor', 'user'], 'group1')                                         // 306
                                                                                                  // 307
      testUser(test, 'eve', [], 'group2')                                                         // 308
      testUser(test, 'bob', ['editor', 'user'], 'group2')                                         // 309
      testUser(test, 'joe', ['editor', 'user'], 'group2')                                         // 310
    })                                                                                            // 311
                                                                                                  // 312
  Tinytest.add(                                                                                   // 313
    'roles - can remove individual users from roles',                                             // 314
    function (test) {                                                                             // 315
      reset()                                                                                     // 316
                                                                                                  // 317
      // remove user role - one user                                                              // 318
      Roles.addUsersToRoles([users.eve, users.bob], ['editor', 'user'])                           // 319
      testUser(test, 'eve', ['editor', 'user'])                                                   // 320
      testUser(test, 'bob', ['editor', 'user'])                                                   // 321
      Roles.removeUsersFromRoles(users.eve, ['user'])                                             // 322
      testUser(test, 'eve', ['editor'])                                                           // 323
      testUser(test, 'bob', ['editor', 'user'])                                                   // 324
    })                                                                                            // 325
  Tinytest.add(                                                                                   // 326
    'roles - can remove user from roles multiple times',                                          // 327
    function (test) {                                                                             // 328
      reset()                                                                                     // 329
                                                                                                  // 330
      // remove user role - one user                                                              // 331
      Roles.addUsersToRoles([users.eve, users.bob], ['editor', 'user'])                           // 332
      testUser(test, 'eve', ['editor', 'user'])                                                   // 333
      testUser(test, 'bob', ['editor', 'user'])                                                   // 334
      Roles.removeUsersFromRoles(users.eve, ['user'])                                             // 335
      testUser(test, 'eve', ['editor'])                                                           // 336
      testUser(test, 'bob', ['editor', 'user'])                                                   // 337
                                                                                                  // 338
      // try remove again                                                                         // 339
      Roles.removeUsersFromRoles(users.eve, ['user'])                                             // 340
      testUser(test, 'eve', ['editor'])                                                           // 341
    })                                                                                            // 342
                                                                                                  // 343
  Tinytest.add(                                                                                   // 344
    'roles - can remove users from roles via user object',                                        // 345
    function (test) {                                                                             // 346
      reset()                                                                                     // 347
                                                                                                  // 348
      var eve = Meteor.users.findOne({_id: users.eve}),                                           // 349
          bob = Meteor.users.findOne({_id: users.bob})                                            // 350
                                                                                                  // 351
      // remove user role - one user                                                              // 352
      Roles.addUsersToRoles([eve, bob], ['editor', 'user'])                                       // 353
      testUser(test, 'eve', ['editor', 'user'])                                                   // 354
      testUser(test, 'bob', ['editor', 'user'])                                                   // 355
      Roles.removeUsersFromRoles(eve, ['user'])                                                   // 356
      testUser(test, 'eve', ['editor'])                                                           // 357
      testUser(test, 'bob', ['editor', 'user'])                                                   // 358
    })                                                                                            // 359
                                                                                                  // 360
                                                                                                  // 361
  Tinytest.add(                                                                                   // 362
    'roles - can remove individual users from roles by group',                                    // 363
    function (test) {                                                                             // 364
      reset()                                                                                     // 365
                                                                                                  // 366
      // remove user role - one user                                                              // 367
      Roles.addUsersToRoles([users.eve, users.bob], ['editor', 'user'], 'group1')                 // 368
      Roles.addUsersToRoles([users.joe, users.bob], ['admin'], 'group2')                          // 369
      testUser(test, 'eve', ['editor', 'user'], 'group1')                                         // 370
      testUser(test, 'bob', ['editor', 'user'], 'group1')                                         // 371
      testUser(test, 'joe', [], 'group1')                                                         // 372
      testUser(test, 'eve', [], 'group2')                                                         // 373
      testUser(test, 'bob', ['admin'], 'group2')                                                  // 374
      testUser(test, 'joe', ['admin'], 'group2')                                                  // 375
                                                                                                  // 376
      Roles.removeUsersFromRoles(users.eve, ['user'], 'group1')                                   // 377
      testUser(test, 'eve', ['editor'], 'group1')                                                 // 378
      testUser(test, 'bob', ['editor', 'user'], 'group1')                                         // 379
      testUser(test, 'joe', [], 'group1')                                                         // 380
      testUser(test, 'eve', [], 'group2')                                                         // 381
      testUser(test, 'bob', ['admin'], 'group2')                                                  // 382
      testUser(test, 'joe', ['admin'], 'group2')                                                  // 383
    })                                                                                            // 384
                                                                                                  // 385
  Tinytest.add(                                                                                   // 386
    'roles - can remove multiple users from roles',                                               // 387
    function (test) {                                                                             // 388
      reset()                                                                                     // 389
                                                                                                  // 390
      // remove user role - two users                                                             // 391
      Roles.addUsersToRoles([users.eve, users.bob], ['editor', 'user'])                           // 392
      testUser(test, 'eve', ['editor', 'user'])                                                   // 393
      testUser(test, 'bob', ['editor', 'user'])                                                   // 394
                                                                                                  // 395
      test.isFalse(Roles.userIsInRole(users.joe, 'admin'))                                        // 396
      Roles.addUsersToRoles([users.bob, users.joe], ['admin', 'user'])                            // 397
      testUser(test, 'bob', ['admin', 'user', 'editor'])                                          // 398
      testUser(test, 'joe', ['admin', 'user'])                                                    // 399
      Roles.removeUsersFromRoles([users.bob, users.joe], ['admin'])                               // 400
      testUser(test, 'bob', ['user', 'editor'])                                                   // 401
      testUser(test, 'joe', ['user'])                                                             // 402
    })                                                                                            // 403
                                                                                                  // 404
  Tinytest.add(                                                                                   // 405
    'roles - can remove multiple users from roles by group',                                      // 406
    function (test) {                                                                             // 407
      reset()                                                                                     // 408
                                                                                                  // 409
      // remove user role - one user                                                              // 410
      Roles.addUsersToRoles([users.eve, users.bob], ['editor', 'user'], 'group1')                 // 411
      Roles.addUsersToRoles([users.joe, users.bob], ['admin'], 'group2')                          // 412
      testUser(test, 'eve', ['editor', 'user'], 'group1')                                         // 413
      testUser(test, 'bob', ['editor', 'user'], 'group1')                                         // 414
      testUser(test, 'joe', [], 'group1')                                                         // 415
      testUser(test, 'eve', [], 'group2')                                                         // 416
      testUser(test, 'bob', ['admin'], 'group2')                                                  // 417
      testUser(test, 'joe', ['admin'], 'group2')                                                  // 418
                                                                                                  // 419
      Roles.removeUsersFromRoles([users.eve, users.bob], ['user'], 'group1')                      // 420
      testUser(test, 'eve', ['editor'], 'group1')                                                 // 421
      testUser(test, 'bob', ['editor'], 'group1')                                                 // 422
      testUser(test, 'joe', [], 'group1')                                                         // 423
      testUser(test, 'eve', [], 'group2')                                                         // 424
      testUser(test, 'bob', ['admin'], 'group2')                                                  // 425
      testUser(test, 'joe', ['admin'], 'group2')                                                  // 426
                                                                                                  // 427
      Roles.removeUsersFromRoles([users.joe, users.bob], ['admin'], 'group2')                     // 428
      testUser(test, 'eve', [], 'group2')                                                         // 429
      testUser(test, 'bob', [], 'group2')                                                         // 430
      testUser(test, 'joe', [], 'group2')                                                         // 431
    })                                                                                            // 432
                                                                                                  // 433
  Tinytest.add(                                                                                   // 434
    'roles - can set user roles',                                                                 // 435
    function (test) {                                                                             // 436
      reset()                                                                                     // 437
                                                                                                  // 438
      var eve = Meteor.users.findOne({_id: users.eve}),                                           // 439
          bob = Meteor.users.findOne({_id: users.bob}),                                           // 440
          joe = Meteor.users.findOne({_id: users.joe})                                            // 441
                                                                                                  // 442
      Roles.setUserRoles([users.eve, bob], ['editor', 'user'])                                    // 443
      testUser(test, 'eve', ['editor', 'user'])                                                   // 444
      testUser(test, 'bob', ['editor', 'user'])                                                   // 445
      testUser(test, 'joe', [])                                                                   // 446
                                                                                                  // 447
      // use addUsersToRoles add some roles                                                       // 448
      Roles.addUsersToRoles([bob, users.joe], ['admin'])                                          // 449
      testUser(test, 'eve', ['editor', 'user'])                                                   // 450
      testUser(test, 'bob', ['admin', 'editor', 'user'])                                          // 451
      testUser(test, 'joe', ['admin'])                                                            // 452
                                                                                                  // 453
      Roles.setUserRoles([eve, bob], ['user'])                                                    // 454
      testUser(test, 'eve', ['user'])                                                             // 455
      testUser(test, 'bob', ['user'])                                                             // 456
      testUser(test, 'joe', ['admin'])                                                            // 457
                                                                                                  // 458
      Roles.setUserRoles(bob, 'editor')                                                           // 459
      testUser(test, 'eve', ['user'])                                                             // 460
      testUser(test, 'bob', ['editor'])                                                           // 461
      testUser(test, 'joe', ['admin'])                                                            // 462
                                                                                                  // 463
      Roles.setUserRoles([users.joe, users.bob], [])                                              // 464
      testUser(test, 'eve', ['user'])                                                             // 465
      testUser(test, 'bob', [])                                                                   // 466
      testUser(test, 'joe', [])                                                                   // 467
    })                                                                                            // 468
                                                                                                  // 469
  Tinytest.add(                                                                                   // 470
    'roles - can set user roles by group',                                                        // 471
    function (test) {                                                                             // 472
      reset()                                                                                     // 473
                                                                                                  // 474
      var eve = Meteor.users.findOne({_id: users.eve}),                                           // 475
          bob = Meteor.users.findOne({_id: users.bob}),                                           // 476
          joe = Meteor.users.findOne({_id: users.joe})                                            // 477
                                                                                                  // 478
      Roles.setUserRoles([users.eve, users.bob], ['editor', 'user'], 'group1')                    // 479
      Roles.setUserRoles([users.bob, users.joe], ['admin'], 'group2')                             // 480
      testUser(test, 'eve', ['editor', 'user'], 'group1')                                         // 481
      testUser(test, 'bob', ['editor', 'user'], 'group1')                                         // 482
      testUser(test, 'joe', [], 'group1')                                                         // 483
      testUser(test, 'eve', [], 'group2')                                                         // 484
      testUser(test, 'bob', ['admin'], 'group2')                                                  // 485
      testUser(test, 'joe', ['admin'], 'group2')                                                  // 486
                                                                                                  // 487
      // use addUsersToRoles add some roles                                                       // 488
      Roles.addUsersToRoles([users.eve, users.bob], ['admin'], 'group1')                          // 489
      Roles.addUsersToRoles([users.bob, users.joe], ['editor'], 'group2')                         // 490
      testUser(test, 'eve', ['admin', 'editor', 'user'], 'group1')                                // 491
      testUser(test, 'bob', ['admin', 'editor', 'user'], 'group1')                                // 492
      testUser(test, 'joe', [], 'group1')                                                         // 493
      testUser(test, 'eve', [], 'group2')                                                         // 494
      testUser(test, 'bob', ['admin','editor'], 'group2')                                         // 495
      testUser(test, 'joe', ['admin','editor'], 'group2')                                         // 496
                                                                                                  // 497
      Roles.setUserRoles([eve, bob], ['user'], 'group1')                                          // 498
      Roles.setUserRoles([eve, joe], ['editor'], 'group2')                                        // 499
      testUser(test, 'eve', ['user'], 'group1')                                                   // 500
      testUser(test, 'bob', ['user'], 'group1')                                                   // 501
      testUser(test, 'joe', [], 'group1')                                                         // 502
      testUser(test, 'eve', ['editor'], 'group2')                                                 // 503
      testUser(test, 'bob', ['admin','editor'], 'group2')                                         // 504
      testUser(test, 'joe', ['editor'], 'group2')                                                 // 505
                                                                                                  // 506
      Roles.setUserRoles(bob, 'editor', 'group1')                                                 // 507
      testUser(test, 'eve', ['user'], 'group1')                                                   // 508
      testUser(test, 'bob', ['editor'], 'group1')                                                 // 509
      testUser(test, 'joe', [], 'group1')                                                         // 510
      testUser(test, 'eve', ['editor'], 'group2')                                                 // 511
      testUser(test, 'bob', ['admin','editor'], 'group2')                                         // 512
      testUser(test, 'joe', ['editor'], 'group2')                                                 // 513
                                                                                                  // 514
      Roles.setUserRoles([bob, users.joe], [], 'group1')                                          // 515
      testUser(test, 'eve', ['user'], 'group1')                                                   // 516
      testUser(test, 'bob', [], 'group1')                                                         // 517
      testUser(test, 'joe', [], 'group1')                                                         // 518
      testUser(test, 'eve', ['editor'], 'group2')                                                 // 519
      testUser(test, 'bob', ['admin','editor'], 'group2')                                         // 520
      testUser(test, 'joe', ['editor'], 'group2')                                                 // 521
    })                                                                                            // 522
                                                                                                  // 523
  Tinytest.add(                                                                                   // 524
    'roles - can set user roles by group including GLOBAL_GROUP',                                 // 525
    function (test) {                                                                             // 526
      reset()                                                                                     // 527
                                                                                                  // 528
      var eve = Meteor.users.findOne({_id: users.eve}),                                           // 529
          bob = Meteor.users.findOne({_id: users.bob}),                                           // 530
          joe = Meteor.users.findOne({_id: users.joe})                                            // 531
                                                                                                  // 532
      Roles.addUsersToRoles(eve, 'admin', Roles.GLOBAL_GROUP)                                     // 533
      testUser(test, 'eve', ['admin'], 'group1')                                                  // 534
      testUser(test, 'eve', ['admin'])                                                            // 535
                                                                                                  // 536
      Roles.setUserRoles(eve, 'editor', Roles.GLOBAL_GROUP)                                       // 537
      testUser(test, 'eve', ['editor'], 'group2')                                                 // 538
      testUser(test, 'eve', ['editor'])                                                           // 539
    })                                                                                            // 540
                                                                                                  // 541
                                                                                                  // 542
  Tinytest.add(                                                                                   // 543
    'roles - can get all roles',                                                                  // 544
    function (test) {                                                                             // 545
      reset()                                                                                     // 546
      _.each(roles, function (role) {                                                             // 547
        Roles.createRole(role)                                                                    // 548
      })                                                                                          // 549
                                                                                                  // 550
      // compare roles, sorted alphabetically                                                     // 551
      var expected = roles,                                                                       // 552
          actual = _.pluck(Roles.getAllRoles().fetch(), 'name')                                   // 553
                                                                                                  // 554
      test.equal(actual, expected)                                                                // 555
    })                                                                                            // 556
                                                                                                  // 557
  Tinytest.add(                                                                                   // 558
    'roles - can\'t get roles for non-existant user',                                             // 559
    function (test) {                                                                             // 560
      reset()                                                                                     // 561
      test.equal(Roles.getRolesForUser('1'), [])                                                  // 562
      test.equal(Roles.getRolesForUser('1', 'group1'), [])                                        // 563
    })                                                                                            // 564
                                                                                                  // 565
  Tinytest.add(                                                                                   // 566
    'roles - can get all roles for user',                                                         // 567
    function (test) {                                                                             // 568
      reset()                                                                                     // 569
                                                                                                  // 570
      var userId = users.eve,                                                                     // 571
          userObj                                                                                 // 572
                                                                                                  // 573
      // by userId                                                                                // 574
      test.equal(Roles.getRolesForUser(userId), [])                                               // 575
                                                                                                  // 576
      // by user object                                                                           // 577
      userObj = Meteor.users.findOne({_id: userId})                                               // 578
      test.equal(Roles.getRolesForUser(userObj), [])                                              // 579
                                                                                                  // 580
                                                                                                  // 581
      Roles.addUsersToRoles(userId, ['admin', 'user'])                                            // 582
                                                                                                  // 583
      // by userId                                                                                // 584
      test.equal(Roles.getRolesForUser(userId), ['admin', 'user'])                                // 585
                                                                                                  // 586
      // by user object                                                                           // 587
      userObj = Meteor.users.findOne({_id: userId})                                               // 588
      test.equal(Roles.getRolesForUser(userObj), ['admin', 'user'])                               // 589
    })                                                                                            // 590
                                                                                                  // 591
  Tinytest.add(                                                                                   // 592
    'roles - can get all roles for user by group',                                                // 593
    function (test) {                                                                             // 594
      reset()                                                                                     // 595
                                                                                                  // 596
      var userId = users.eve,                                                                     // 597
          userObj                                                                                 // 598
                                                                                                  // 599
      // by userId                                                                                // 600
      test.equal(Roles.getRolesForUser(userId, 'group1'), [])                                     // 601
                                                                                                  // 602
      // by user object                                                                           // 603
      userObj = Meteor.users.findOne({_id: userId})                                               // 604
      test.equal(Roles.getRolesForUser(userObj, 'group1'), [])                                    // 605
                                                                                                  // 606
                                                                                                  // 607
      // add roles                                                                                // 608
      Roles.addUsersToRoles(userId, ['admin', 'user'], 'group1')                                  // 609
                                                                                                  // 610
      // by userId                                                                                // 611
      test.equal(Roles.getRolesForUser(userId, 'group1'), ['admin', 'user'])                      // 612
      test.equal(Roles.getRolesForUser(userId), [])                                               // 613
                                                                                                  // 614
      // by user object                                                                           // 615
      userObj = Meteor.users.findOne({_id: userId})                                               // 616
      test.equal(Roles.getRolesForUser(userObj, 'group1'), ['admin', 'user'])                     // 617
      test.equal(Roles.getRolesForUser(userObj), [])                                              // 618
    })                                                                                            // 619
                                                                                                  // 620
  Tinytest.add(                                                                                   // 621
    'roles - can get all roles for user by group including Roles.GLOBAL_GROUP',                   // 622
    function (test) {                                                                             // 623
      reset()                                                                                     // 624
                                                                                                  // 625
      var userId = users.eve,                                                                     // 626
          userObj                                                                                 // 627
                                                                                                  // 628
      Roles.addUsersToRoles([users.eve], ['editor'], Roles.GLOBAL_GROUP)                          // 629
      Roles.addUsersToRoles([users.eve], ['admin', 'user'], 'group1')                             // 630
                                                                                                  // 631
      // by userId                                                                                // 632
      test.equal(Roles.getRolesForUser(userId, 'group1'), ['admin', 'user', 'editor'])            // 633
      test.equal(Roles.getRolesForUser(userId), ['editor'])                                       // 634
                                                                                                  // 635
      // by user object                                                                           // 636
      userObj = Meteor.users.findOne({_id: userId})                                               // 637
      test.equal(Roles.getRolesForUser(userObj, 'group1'), ['admin', 'user', 'editor'])           // 638
      test.equal(Roles.getRolesForUser(userObj), ['editor'])                                      // 639
    })                                                                                            // 640
                                                                                                  // 641
                                                                                                  // 642
  Tinytest.add(                                                                                   // 643
    'roles - getRolesForUser should not return null entries if user has no roles for group',      // 644
    function (test) {                                                                             // 645
      reset()                                                                                     // 646
                                                                                                  // 647
      var userId = users.eve,                                                                     // 648
          userObj                                                                                 // 649
                                                                                                  // 650
      // by userId                                                                                // 651
      test.equal(Roles.getRolesForUser(userId, 'group1'), [])                                     // 652
      test.equal(Roles.getRolesForUser(userId), [])                                               // 653
                                                                                                  // 654
      // by user object                                                                           // 655
      userObj = Meteor.users.findOne({_id: userId})                                               // 656
      test.equal(Roles.getRolesForUser(userObj, 'group1'), [])                                    // 657
      test.equal(Roles.getRolesForUser(userObj), [])                                              // 658
                                                                                                  // 659
                                                                                                  // 660
      Roles.addUsersToRoles([users.eve], ['editor'], Roles.GLOBAL_GROUP)                          // 661
                                                                                                  // 662
      // by userId                                                                                // 663
      test.equal(Roles.getRolesForUser(userId, 'group1'), ['editor'])                             // 664
      test.equal(Roles.getRolesForUser(userId), ['editor'])                                       // 665
                                                                                                  // 666
      // by user object                                                                           // 667
      userObj = Meteor.users.findOne({_id: userId})                                               // 668
      test.equal(Roles.getRolesForUser(userObj, 'group1'), ['editor'])                            // 669
      test.equal(Roles.getRolesForUser(userObj), ['editor'])                                      // 670
    })                                                                                            // 671
                                                                                                  // 672
                                                                                                  // 673
  Tinytest.add(                                                                                   // 674
    'roles - can get all users in role',                                                          // 675
    function (test) {                                                                             // 676
      reset()                                                                                     // 677
      _.each(roles, function (role) {                                                             // 678
        Roles.createRole(role)                                                                    // 679
      })                                                                                          // 680
                                                                                                  // 681
      Roles.addUsersToRoles([users.eve, users.joe], ['admin', 'user'])                            // 682
      Roles.addUsersToRoles([users.bob, users.joe], ['editor'])                                   // 683
                                                                                                  // 684
      var expected = [users.eve, users.joe],                                                      // 685
          actual = _.pluck(Roles.getUsersInRole('admin').fetch(), '_id')                          // 686
                                                                                                  // 687
      // order may be different so check difference instead of equality                           // 688
      // difference uses first array as base so have to check both ways                           // 689
      test.equal(_.difference(actual, expected), [])                                              // 690
      test.equal(_.difference(expected, actual), [])                                              // 691
    })                                                                                            // 692
                                                                                                  // 693
  Tinytest.add(                                                                                   // 694
    'roles - can get all users in role by group',                                                 // 695
    function (test) {                                                                             // 696
      reset()                                                                                     // 697
      Roles.addUsersToRoles([users.eve, users.joe], ['admin', 'user'], 'group1')                  // 698
      Roles.addUsersToRoles([users.bob, users.joe], ['admin'], 'group2')                          // 699
                                                                                                  // 700
      var expected = [users.eve, users.joe],                                                      // 701
          actual = _.pluck(Roles.getUsersInRole('admin','group1').fetch(), '_id')                 // 702
                                                                                                  // 703
      // order may be different so check difference instead of equality                           // 704
      // difference uses first array as base so have to check both ways                           // 705
      test.equal(_.difference(actual, expected), [])                                              // 706
      test.equal(_.difference(expected, actual), [])                                              // 707
    })                                                                                            // 708
                                                                                                  // 709
  Tinytest.add(                                                                                   // 710
    'roles - can get all users in role by group including Roles.GLOBAL_GROUP',                    // 711
    function (test) {                                                                             // 712
      reset()                                                                                     // 713
      Roles.addUsersToRoles([users.eve], ['admin', 'user'], Roles.GLOBAL_GROUP)                   // 714
      Roles.addUsersToRoles([users.bob, users.joe], ['admin'], 'group2')                          // 715
                                                                                                  // 716
      var expected = [users.eve],                                                                 // 717
          actual = _.pluck(Roles.getUsersInRole('admin','group1').fetch(), '_id')                 // 718
                                                                                                  // 719
      // order may be different so check difference instead of equality                           // 720
      // difference uses first array as base so have to check both ways                           // 721
      test.equal(_.difference(actual, expected), [])                                              // 722
      test.equal(_.difference(expected, actual), [])                                              // 723
                                                                                                  // 724
      expected = [users.eve, users.bob, users.joe]                                                // 725
      actual = _.pluck(Roles.getUsersInRole('admin','group2').fetch(), '_id')                     // 726
                                                                                                  // 727
      // order may be different so check difference instead of equality                           // 728
      test.equal(_.difference(actual, expected), [])                                              // 729
      test.equal(_.difference(expected, actual), [])                                              // 730
                                                                                                  // 731
                                                                                                  // 732
      expected = [users.eve]                                                                      // 733
      actual = _.pluck(Roles.getUsersInRole('admin').fetch(), '_id')                              // 734
                                                                                                  // 735
      // order may be different so check difference instead of equality                           // 736
      test.equal(_.difference(actual, expected), [])                                              // 737
      test.equal(_.difference(expected, actual), [])                                              // 738
    })                                                                                            // 739
                                                                                                  // 740
                                                                                                  // 741
  Tinytest.add(                                                                                   // 742
    'roles - can use Roles.GLOBAL_GROUP to assign blanket permissions',                           // 743
    function (test) {                                                                             // 744
      reset()                                                                                     // 745
                                                                                                  // 746
      Roles.addUsersToRoles([users.joe, users.bob], ['admin'], Roles.GLOBAL_GROUP)                // 747
                                                                                                  // 748
      testUser(test, 'eve', [], 'group1')                                                         // 749
      testUser(test, 'joe', ['admin'], 'group2')                                                  // 750
      testUser(test, 'joe', ['admin'], 'group1')                                                  // 751
      testUser(test, 'bob', ['admin'], 'group2')                                                  // 752
      testUser(test, 'bob', ['admin'], 'group1')                                                  // 753
                                                                                                  // 754
      Roles.removeUsersFromRoles(users.joe, ['admin'], Roles.GLOBAL_GROUP)                        // 755
                                                                                                  // 756
      testUser(test, 'eve', [], 'group1')                                                         // 757
      testUser(test, 'joe', [], 'group2')                                                         // 758
      testUser(test, 'joe', [], 'group1')                                                         // 759
      testUser(test, 'bob', ['admin'], 'group2')                                                  // 760
      testUser(test, 'bob', ['admin'], 'group1')                                                  // 761
    })                                                                                            // 762
                                                                                                  // 763
  Tinytest.add(                                                                                   // 764
    'roles - Roles.GLOBAL_GROUP is independent of other groups',                                  // 765
    function (test) {                                                                             // 766
      reset()                                                                                     // 767
                                                                                                  // 768
      Roles.addUsersToRoles([users.joe, users.bob], ['admin'], 'group5')                          // 769
      Roles.addUsersToRoles([users.joe, users.bob], ['admin'], Roles.GLOBAL_GROUP)                // 770
                                                                                                  // 771
      testUser(test, 'eve', [], 'group1')                                                         // 772
      testUser(test, 'joe', ['admin'], 'group5')                                                  // 773
      testUser(test, 'joe', ['admin'], 'group2')                                                  // 774
      testUser(test, 'joe', ['admin'], 'group1')                                                  // 775
      testUser(test, 'bob', ['admin'], 'group5')                                                  // 776
      testUser(test, 'bob', ['admin'], 'group2')                                                  // 777
      testUser(test, 'bob', ['admin'], 'group1')                                                  // 778
                                                                                                  // 779
      Roles.removeUsersFromRoles(users.joe, ['admin'], Roles.GLOBAL_GROUP)                        // 780
                                                                                                  // 781
      testUser(test, 'eve', [], 'group1')                                                         // 782
      testUser(test, 'joe', ['admin'], 'group5')                                                  // 783
      testUser(test, 'joe', [], 'group2')                                                         // 784
      testUser(test, 'joe', [], 'group1')                                                         // 785
      testUser(test, 'bob', ['admin'], 'group5')                                                  // 786
      testUser(test, 'bob', ['admin'], 'group2')                                                  // 787
      testUser(test, 'bob', ['admin'], 'group1')                                                  // 788
    })                                                                                            // 789
                                                                                                  // 790
  Tinytest.add(                                                                                   // 791
    'roles - Roles.GLOBAL_GROUP also checked when group not specified',                           // 792
    function (test) {                                                                             // 793
      reset()                                                                                     // 794
                                                                                                  // 795
      Roles.addUsersToRoles(users.joe, 'admin', Roles.GLOBAL_GROUP)                               // 796
                                                                                                  // 797
      testUser(test, 'joe', ['admin'])                                                            // 798
                                                                                                  // 799
      Roles.removeUsersFromRoles(users.joe, 'admin', Roles.GLOBAL_GROUP)                          // 800
                                                                                                  // 801
      testUser(test, 'joe', [])                                                                   // 802
    })                                                                                            // 803
                                                                                                  // 804
  Tinytest.add(                                                                                   // 805
    'roles - mixing group with non-group throws descriptive error',                               // 806
    function (test) {                                                                             // 807
      var expectedErrorMsg = "Roles error: Can't mix grouped and non-grouped roles for same user" // 808
                                                                                                  // 809
      reset()                                                                                     // 810
      Roles.addUsersToRoles(users.joe, ['editor', 'user'], 'group1')                              // 811
      try {                                                                                       // 812
        Roles.addUsersToRoles(users.joe, ['admin'])                                               // 813
        throw new Error("expected exception but didn't get one")                                  // 814
      }                                                                                           // 815
      catch (ex) {                                                                                // 816
        test.isTrue(ex.message == expectedErrorMsg, ex.message)                                   // 817
      }                                                                                           // 818
                                                                                                  // 819
      reset()                                                                                     // 820
      Roles.addUsersToRoles(users.bob, ['editor', 'user'])                                        // 821
      try {                                                                                       // 822
        Roles.addUsersToRoles(users.bob, ['admin'], 'group2')                                     // 823
        throw new Error("expected exception but didn't get one")                                  // 824
      }                                                                                           // 825
      catch (ex) {                                                                                // 826
        test.isTrue(ex.message == expectedErrorMsg, ex.message)                                   // 827
      }                                                                                           // 828
                                                                                                  // 829
      reset()                                                                                     // 830
      Roles.addUsersToRoles(users.bob, ['editor', 'user'], 'group1')                              // 831
      try {                                                                                       // 832
        Roles.removeUsersFromRoles(users.bob, ['user'])                                           // 833
        throw new Error("expected exception but didn't get one")                                  // 834
      }                                                                                           // 835
      catch (ex) {                                                                                // 836
        test.isTrue(ex.message == expectedErrorMsg, ex.message)                                   // 837
      }                                                                                           // 838
                                                                                                  // 839
      reset()                                                                                     // 840
      Roles.addUsersToRoles(users.bob, ['editor', 'user'])                                        // 841
      try {                                                                                       // 842
        Roles.setUserRoles(users.bob, ['user'], 'group1')                                         // 843
        throw new Error("expected exception but didn't get one")                                  // 844
      }                                                                                           // 845
      catch (ex) {                                                                                // 846
        test.isTrue(ex.message == expectedErrorMsg, ex.message)                                   // 847
      }                                                                                           // 848
                                                                                                  // 849
      reset()                                                                                     // 850
      Roles.addUsersToRoles(users.bob, ['editor', 'user'])                                        // 851
      // don't expect this to throw error                                                         // 852
      Roles.removeUsersFromRoles(users.bob, ['user'], 'group1')                                   // 853
                                                                                                  // 854
      reset()                                                                                     // 855
      Roles.addUsersToRoles(users.bob, ['editor', 'user'], 'group1')                              // 856
      // this is probably not a good idea but shouldn't throw...                                  // 857
      Roles.setUserRoles(users.bob, ['user'])                                                     // 858
    })                                                                                            // 859
                                                                                                  // 860
  Tinytest.add(                                                                                   // 861
    "roles - can use '.' in group name",                                                          // 862
    function (test) {                                                                             // 863
      reset()                                                                                     // 864
                                                                                                  // 865
      Roles.addUsersToRoles(users.joe, ['admin'], 'example.com')                                  // 866
      testUser(test, 'joe', ['admin'], 'example.com')                                             // 867
    })                                                                                            // 868
                                                                                                  // 869
  Tinytest.add(                                                                                   // 870
    'roles - invalid group name throws descriptive error',                                        // 871
    function (test) {                                                                             // 872
      var expectedErrorMsg = "Roles error: groups can not start with '$'"                         // 873
                                                                                                  // 874
      reset()                                                                                     // 875
      try {                                                                                       // 876
        Roles.addUsersToRoles(users.joe, ['admin'], '$group1')                                    // 877
        throw new Error("expected exception but didn't get one")                                  // 878
      }                                                                                           // 879
      catch (ex) {                                                                                // 880
        test.isTrue(ex.message == expectedErrorMsg, ex.message)                                   // 881
      }                                                                                           // 882
                                                                                                  // 883
      reset()                                                                                     // 884
      // should not throw error                                                                   // 885
      Roles.addUsersToRoles(users.bob, ['editor', 'user'], 'g$roup1')                             // 886
    })                                                                                            // 887
                                                                                                  // 888
  function printException (ex) {                                                                  // 889
    var tmp = {}                                                                                  // 890
    for (var key in ex) {                                                                         // 891
      if (key != 'stack') {                                                                       // 892
        tmp[key] = ex[key]                                                                        // 893
      }                                                                                           // 894
    }                                                                                             // 895
    console.log(JSON.stringify(tmp));                                                             // 896
  }                                                                                               // 897
                                                                                                  // 898
}());                                                                                             // 899
                                                                                                  // 900
////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

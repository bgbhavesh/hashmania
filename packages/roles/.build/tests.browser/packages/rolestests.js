(function () {

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/roles/tests/client.js                                                        //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
;(function () {                                                                          // 1
                                                                                         // 2
  "use strict";                                                                          // 3
                                                                                         // 4
  var users,                                                                             // 5
      roles = ['admin','editor','user']                                                  // 6
                                                                                         // 7
  users = {                                                                              // 8
    'eve': {                                                                             // 9
      _id: 'eve',                                                                        // 10
      roles: ['admin', 'editor']                                                         // 11
    },                                                                                   // 12
    'bob': {                                                                             // 13
      _id: 'bob',                                                                        // 14
      roles: {                                                                           // 15
        'group1': ['user'],                                                              // 16
        'group2': ['editor']                                                             // 17
      }                                                                                  // 18
    },                                                                                   // 19
    'joe': {                                                                             // 20
      _id: 'joe',                                                                        // 21
      roles: {                                                                           // 22
        '__global_roles__': ['admin'],                                                   // 23
        'group1': ['editor']                                                             // 24
      }                                                                                  // 25
    }                                                                                    // 26
  }                                                                                      // 27
                                                                                         // 28
  function testUser (test, username, expectedRoles, group) {                             // 29
    var user = users[username]                                                           // 30
                                                                                         // 31
    // test using user object rather than userId to avoid mocking                        // 32
    _.each(roles, function (role) {                                                      // 33
      var expected = _.contains(expectedRoles, role),                                    // 34
          msg = username + ' expected to have \'' + role + '\' permission but does not', // 35
          nmsg = username + ' had un-expected permission ' + role                        // 36
                                                                                         // 37
      if (expected) {                                                                    // 38
        test.isTrue(Roles.userIsInRole(user, role, group), msg)                          // 39
      } else {                                                                           // 40
        test.isFalse(Roles.userIsInRole(user, role, group), nmsg)                        // 41
      }                                                                                  // 42
    })                                                                                   // 43
  }                                                                                      // 44
                                                                                         // 45
                                                                                         // 46
  // Mock Meteor.user() for isInRole handlebars helper testing                           // 47
  Meteor.user = function () {                                                            // 48
    return users.eve                                                                     // 49
  }                                                                                      // 50
                                                                                         // 51
  Tinytest.add(                                                                          // 52
    'roles - can check current users roles via template helper',                         // 53
    function (test) {                                                                    // 54
      var isInRole = Roles._handlebarsHelpers.isInRole,                                  // 55
          expected,                                                                      // 56
          actual                                                                         // 57
                                                                                         // 58
      test.equal(typeof isInRole, 'function', "'isInRole' helper not registered")        // 59
                                                                                         // 60
      expected = true                                                                    // 61
      actual = isInRole('admin, editor')                                                 // 62
      test.equal(actual, expected)                                                       // 63
                                                                                         // 64
      expected = true                                                                    // 65
      actual = isInRole('admin')                                                         // 66
      test.equal(actual, expected)                                                       // 67
                                                                                         // 68
      expected = false                                                                   // 69
      actual = isInRole('unknown')                                                       // 70
      test.equal(actual, expected)                                                       // 71
    })                                                                                   // 72
                                                                                         // 73
  Tinytest.add(                                                                          // 74
    'roles - can check if user is in role',                                              // 75
    function (test) {                                                                    // 76
      testUser(test, 'eve', ['admin', 'editor'])                                         // 77
    })                                                                                   // 78
                                                                                         // 79
  Tinytest.add(                                                                          // 80
    'roles - can check if user is in role by group',                                     // 81
    function (test) {                                                                    // 82
      testUser(test, 'bob', ['user'], 'group1')                                          // 83
      testUser(test, 'bob', ['editor'], 'group2')                                        // 84
    })                                                                                   // 85
                                                                                         // 86
  Tinytest.add(                                                                          // 87
    'roles - can check if user is in role with Roles.GLOBAL_GROUP',                      // 88
    function (test) {                                                                    // 89
      testUser(test, 'joe', ['admin'])                                                   // 90
      testUser(test, 'joe', ['admin'], Roles.GLOBAL_GROUP)                               // 91
      testUser(test, 'joe', ['admin', 'editor'], 'group1')                               // 92
    })                                                                                   // 93
}());                                                                                    // 94
                                                                                         // 95
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

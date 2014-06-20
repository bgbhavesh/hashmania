(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/handlebars-server/handlebars.handlebars-server-tests.js  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("One {{name}}\n");Handlebars.templates["handlebars-server-tests"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "handlebars-server-tests"});};
///////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/handlebars-server/handlebars.handlebars-server-tests-2.j //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("Two {{name}}\n");Handlebars.templates["handlebars-server-tests-2"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "handlebars-server-tests-2"});};
///////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/handlebars-server/handlebars-server-tests.js             //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Tinytest.add("handlebars-server", function (test) {                  // 1
  var tmpl = Handlebars.templates['handlebars-server-tests'];        // 2
  var result = tmpl({name: 'test'});                                 // 3
  test.equal( result.replace('\n', ''), 'One test' );                // 4
                                                                     // 5
  var tmpl2 = Handlebars.templates['handlebars-server-tests-2'];     // 6
  var result2 = tmpl2({name: 'test2'});                              // 7
  test.equal( result2.replace('\n', ''), 'Two test2' );              // 8
});                                                                  // 9
                                                                     // 10
///////////////////////////////////////////////////////////////////////

}).call(this);

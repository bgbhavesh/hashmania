(function(){
UI.body.contentParts.push(UI.Component.extend({render: (function() {
  var self = this;
  return Spacebars.include(self.lookupTemplate("body"));
})}));
Meteor.startup(function () { if (! UI.body.INSTANTIATED) { UI.body.INSTANTIATED = true; UI.DomRange.insert(UI.render(UI.body).dom, document.body); } });

Template.__define__("body", (function() {
  var self = this;
  var template = this;
  return function() {
    return Spacebars.mustache(self.lookup("renderPage"), self.lookup("layoutName"));
  };
}));

Template.__define__("adminLayout", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<h1>Admin Section</h1>\n  "), function() {
    return Spacebars.mustache(self.lookup("renderPage"));
  } ];
}));

Template.__define__("userLayout", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<h1>User Section</h1>\n  "), function() {
    return Spacebars.mustache(self.lookup("renderPage"));
  } ];
}));

Template.__define__("adminPage", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<h1>Hello World!</h1>\n  "), function() {
    return Spacebars.mustache(self.lookup("greeting"));
  }, HTML.Raw('\n  <input type="button" value="Click">') ];
}));

Template.__define__("userPage", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<h1>Hello World!</h1>\n  "), function() {
    return Spacebars.mustache(self.lookup("greeting"));
  }, HTML.Raw('\n  <input type="button" value="Click">\n  \n  <a href="/admin">Admin Section</a>') ];
}));

})();

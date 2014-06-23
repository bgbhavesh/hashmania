(function(){
UI.body.contentParts.push(UI.Component.extend({render: (function() {
  var self = this;
  return [ function() {
    return Spacebars.mustache(self.lookup("loginButtons"));
  }, "\n  ", function() {
    return Spacebars.mustache(self.lookup("renderPage"));
  } ];
})}));
Meteor.startup(function () { if (! UI.body.INSTANTIATED) { UI.body.INSTANTIATED = true; UI.DomRange.insert(UI.render(UI.body).dom, document.body); } });

Template.__define__("home", (function() {
  var self = this;
  var template = this;
  return HTML.Raw("<h1>This is the authenticated page</h1>");
}));

Template.__define__("loading", (function() {
  var self = this;
  var template = this;
  return HTML.Raw("<h1>Loading...</h1>");
}));

Template.__define__("login", (function() {
  var self = this;
  var template = this;
  return HTML.Raw("<h1>Please login above</h1>");
}));

})();

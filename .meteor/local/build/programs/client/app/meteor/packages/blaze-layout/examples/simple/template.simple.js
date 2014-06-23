(function(){
UI.body.contentParts.push(UI.Component.extend({render: (function() {
  var self = this;
  return Spacebars.include(self.lookupTemplate("hello"));
})}));
Meteor.startup(function () { if (! UI.body.INSTANTIATED) { UI.body.INSTANTIATED = true; UI.DomRange.insert(UI.render(UI.body).dom, document.body); } });

Template.__define__("layout", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "layout"
  }, "\n    ", function() {
    return Spacebars.mustache(self.lookup("layoutHelper"));
  }, "\n    ", Spacebars.include(self.lookupTemplate("yield")), "\n  ");
}));

Template.__define__("hello", (function() {
  var self = this;
  var template = this;
  return Spacebars.TemplateWith(function() {
    return {
      template: Spacebars.call("layout")
    };
  }, UI.block(function() {
    var self = this;
    return Spacebars.include(self.lookupTemplate("Layout"), UI.block(function() {
      var self = this;
      return [ "\n    ", HTML.H1("Hello World!"), "\n    ", function() {
        return Spacebars.mustache(self.lookup("helloHelper"));
      }, "\n    ", HTML.INPUT({
        type: "button",
        value: "Click"
      }), "\n  " ];
    }));
  }));
}));

})();

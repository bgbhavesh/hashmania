(function(){
Template.__define__("layout", (function() {
  var self = this;
  var template = this;
  return [ "layout\n\n  ", HTML.ASIDE("\n    ", function() {
    return Spacebars.mustache(self.lookup("yield"), "aside");
  }, "\n  "), "\n\n  ", HTML.ARTICLE("\n    ", function() {
    return Spacebars.mustache(self.lookup("yield"));
  }, "\n  "), "\n\n  ", HTML.FOOTER("\n    ", function() {
    return Spacebars.mustache(self.lookup("yield"), "footer");
  }, "\n  ") ];
}));

Template.__define__("one", (function() {
  var self = this;
  var template = this;
  return "one";
}));

Template.__define__("two", (function() {
  var self = this;
  var template = this;
  return "two";
}));

Template.__define__("aside", (function() {
  var self = this;
  var template = this;
  return "aside";
}));

Template.__define__("asideTwo", (function() {
  var self = this;
  var template = this;
  return "asideTwo";
}));

Template.__define__("footer", (function() {
  var self = this;
  var template = this;
  return "footer";
}));

Template.__define__("footerTwo", (function() {
  var self = this;
  var template = this;
  return "footerTwo";
}));

Template.__define__("data", (function() {
  var self = this;
  var template = this;
  return function() {
    return Spacebars.mustache(self.lookup("text"));
  };
}));

})();

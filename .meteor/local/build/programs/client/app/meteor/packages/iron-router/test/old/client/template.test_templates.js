(function(){
Template.__define__("layout", (function() {
  var self = this;
  var template = this;
  return [ "Layout\n\n  ", function() {
    return Spacebars.mustache(self.lookup("yield"), "aside");
  }, "\n\n  ", function() {
    return Spacebars.mustache(self.lookup("yield"));
  }, "\n\n  ", function() {
    return Spacebars.mustache(self.lookup("yield"), "footer");
  } ];
}));

Template.__define__("one", (function() {
  var self = this;
  var template = this;
  return "One";
}));

Template.__define__("two", (function() {
  var self = this;
  var template = this;
  return "Two";
}));

Template.__define__("aside", (function() {
  var self = this;
  var template = this;
  return "Aside Content";
}));

Template.__define__("loading", (function() {
  var self = this;
  var template = this;
  return "Loading";
}));

Template.__define__("notFound", (function() {
  var self = this;
  var template = this;
  return "Not Found";
}));

Template.__define__("reactive", (function() {
  var self = this;
  var template = this;
  return function() {
    return Spacebars.mustache(self.lookup("content"));
  };
}));

})();

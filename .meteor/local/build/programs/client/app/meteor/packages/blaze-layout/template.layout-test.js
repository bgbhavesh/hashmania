(function(){
Template.__define__("LayoutOne", (function() {
  var self = this;
  var template = this;
  return "one";
}));

Template.__define__("LayoutTwo", (function() {
  var self = this;
  var template = this;
  return "two";
}));

Template.__define__("LayoutWithData", (function() {
  var self = this;
  var template = this;
  return [ "layout ", function() {
    return Spacebars.mustache(self.lookup("title"));
  } ];
}));

Template.__define__("LayoutWithDataAndYields", (function() {
  var self = this;
  var template = this;
  return [ "layout ", function() {
    return Spacebars.mustache(self.lookup("title"));
  }, "\n  ", Spacebars.include(self.lookupTemplate("yield")), "\n  ", Spacebars.TemplateWith(function() {
    return {
      region: Spacebars.call("footer")
    };
  }, UI.block(function() {
    var self = this;
    return Spacebars.include(self.lookupTemplate("yield"));
  })) ];
}));

Template.__define__("LayoutWithOneYield", (function() {
  var self = this;
  var template = this;
  return [ "layout\n", Spacebars.include(self.lookupTemplate("yield")) ];
}));

Template.__define__("LayoutWithTwoYields", (function() {
  var self = this;
  var template = this;
  return [ Spacebars.include(self.lookupTemplate("yield")), "\n", Spacebars.TemplateWith(function() {
    return {
      region: Spacebars.call("footer")
    };
  }, UI.block(function() {
    var self = this;
    return Spacebars.include(self.lookupTemplate("yield"));
  })) ];
}));

Template.__define__("ChildWithData", (function() {
  var self = this;
  var template = this;
  return [ "child ", function() {
    return Spacebars.mustache(self.lookup("title"));
  } ];
}));

Template.__define__("FooterWithData", (function() {
  var self = this;
  var template = this;
  return [ "footer ", function() {
    return Spacebars.mustache(self.lookup("title"));
  } ];
}));

Template.__define__("One", (function() {
  var self = this;
  var template = this;
  return "one";
}));

Template.__define__("Two", (function() {
  var self = this;
  var template = this;
  return "two";
}));

Template.__define__("DefaultMainRegion", (function() {
  var self = this;
  var template = this;
  return Spacebars.include(self.lookupTemplate("Layout"), UI.block(function() {
    var self = this;
    return "\n    ok\n  ";
  }));
}));

Template.__define__("ContentForTests", (function() {
  var self = this;
  var template = this;
  return [ "main\n  ", Spacebars.TemplateWith(function() {
    return {
      region: Spacebars.call("footer")
    };
  }, UI.block(function() {
    var self = this;
    return Spacebars.include(self.lookupTemplate("contentFor"), UI.block(function() {
      var self = this;
      return "\n    footer\n  ";
    }));
  })) ];
}));

})();

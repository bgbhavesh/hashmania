(function(){
Template.__define__("__defaultLayout__", (function() {
  var self = this;
  var template = this;
  return function() {
    return Spacebars.mustache(self.lookup("yield"));
  };
}));

})();

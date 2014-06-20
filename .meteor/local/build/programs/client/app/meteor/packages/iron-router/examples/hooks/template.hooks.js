(function(){
Template.__define__("loading", (function() {
  var self = this;
  var template = this;
  return "Loading template";
}));

Template.__define__("404", (function() {
  var self = this;
  var template = this;
  return "404";
}));

Template.__define__("adminRequired", (function() {
  var self = this;
  var template = this;
  return "ADMIN REQUIRED!";
}));

Template.__define__("login", (function() {
  var self = this;
  var template = this;
  return function() {
    return Spacebars.mustache(self.lookup("loginButtons"));
  };
}));

Template.__define__("userPage", (function() {
  var self = this;
  var template = this;
  return "Hey, you've logged in, here's your dashboard";
}));

Template.__define__("adminPage", (function() {
  var self = this;
  var template = this;
  return "This is an admin only page!";
}));

})();

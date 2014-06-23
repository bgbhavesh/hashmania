(function(){
Template.__define__("one", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<a href="/two">Two</a>\n  <a href="/three">Three</a>\n  <a href="/asset.txt">Asset</a>');
}));

Template.__define__("two", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<a href="/">One</a>');
}));

})();

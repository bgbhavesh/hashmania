(function(){
Template.__define__("configureLoginServiceDialogForInstagram", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<p>\n        Follow these steps to configure your Instagram client:\n    </p>\n    "), HTML.OL(HTML.Raw('\n        <li>\n            Visit <a href="http://instagram.com/developer/clients/register/" target="_blank">http://instagram.com/developer/clients/register/</a>\n        </li>\n        '), HTML.LI("\n            Set Callback URL to: ", HTML.SPAN({
    "class": "url"
  }, function() {
    return Spacebars.mustache(self.lookup("siteUrl"));
  }, "_oauth/instagram?close=close"), "\n        "), "\n    ") ];
}));

})();

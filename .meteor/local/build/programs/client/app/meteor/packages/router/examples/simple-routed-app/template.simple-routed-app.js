(function(){
UI.body.contentParts.push(UI.Component.extend({render: (function() {
  var self = this;
  return [ HTML.HEADER("You are viewing the ", HTML.STRONG(function() {
    return Spacebars.mustache(self.lookup("currentPage"));
  }), " page now."), "\n  ", function() {
    return Spacebars.mustache(self.lookup("renderPage"));
  } ];
})}));
Meteor.startup(function () { if (! UI.body.INSTANTIATED) { UI.body.INSTANTIATED = true; UI.DomRange.insert(UI.render(UI.body).dom, document.body); } });

Template.__define__("home", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<h1>This is the example!</h1>\n  "), HTML.A({
    href: function() {
      return Spacebars.mustache(self.lookup("welcomePath"));
    },
    "class": "welcome"
  }, "Click here to go to your personalized welcome page") ];
}));

Template.__define__("sign_in", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<h4>Please Sign in!</h4>\n\n  <form>\n    <input name="username" placeholder="Please enter your name" autofocus="autofocus">\n    <button type="submit">Signin</button>\n  </form>');
}));

Template.__define__("welcome", (function() {
  var self = this;
  var template = this;
  return [ HTML.H1("Welcome ", function() {
    return Spacebars.mustache(self.lookup("username"));
  }, "!"), HTML.Raw('\n  <form>\n    <label for="post_name">Create a post:</label>\n    <input name="post_name" id="post_name" placeholder="Please enter a post name" autofocus="autofocus">\n    <button type="submit">Create</button>\n  </form>\n  <a href="" class="logout">Signout</a>\n  '), HTML.A({
    href: function() {
      return Spacebars.mustache(self.lookup("homeUrl"));
    },
    "class": "home"
  }, "Return home") ];
}));

Template.__define__("post", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<h1>Post</h1>\n  "), HTML.H2("You are viewing the post: ", function() {
    return Spacebars.mustache(self.lookup("id"));
  }), HTML.Raw("\n  <p>Try the browser's Back button!</p>") ];
}));

})();

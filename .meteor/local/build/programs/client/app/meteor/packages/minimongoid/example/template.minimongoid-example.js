(function(){
UI.body.contentParts.push(UI.Component.extend({render: (function() {
  var self = this;
  return HTML.DIV({
    "class": "container"
  }, "\n    ", Spacebars.include(self.lookupTemplate("main")), "\n  ");
})}));
Meteor.startup(function () { if (! UI.body.INSTANTIATED) { UI.body.INSTANTIATED = true; UI.DomRange.insert(UI.render(UI.body).dom, document.body); } });

Template.__define__("main", (function() {
  var self = this;
  var template = this;
  return UI.If(function() {
    return Spacebars.call(self.lookup("currentUserId"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", HTML.UL({
      "class": "nav nav-tabs",
      id: "tabs"
    }, "\n      ", HTML.LI({
      "class": "active"
    }, "\n        ", HTML.A({
      href: "#recipes",
      "data-toggle": "tab"
    }, "My Recipes"), "\n      "), "\n      ", HTML.LI("\n        ", HTML.A({
      href: "#friends",
      "data-toggle": "tab"
    }, "My Friends"), "\n      "), "\n      ", HTML.LI("\n        ", HTML.A({
      href: "#friends_recipes",
      "data-toggle": "tab"
    }, "My Friends' Recipes"), "\n      "), "\n      ", HTML.LI({
      style: "float:right; margin-right: 100px;"
    }, "\n        ", function() {
      return Spacebars.mustache(self.lookup("loginButtons"));
    }, "\n      "), "\n    "), "\n    \n    ", HTML.DIV({
      "class": "tab-content"
    }, "\n        ", HTML.DIV({
      id: "recipes",
      "class": "active tab-pane"
    }, "\n          ", Spacebars.include(self.lookupTemplate("recipes")), "\n        "), "\n        ", HTML.DIV({
      id: "friends",
      "class": "tab-pane"
    }, "\n          ", Spacebars.include(self.lookupTemplate("friends")), "\n        "), "\n        ", HTML.DIV({
      id: "friends_recipes",
      "class": "tab-pane"
    }, "\n          ", Spacebars.include(self.lookupTemplate("friends_recipes")), "\n        "), "\n    "), "\n  " ];
  }), UI.block(function() {
    var self = this;
    return [ "\n    ", function() {
      return Spacebars.mustache(self.lookup("loginButtons"));
    }, "\n  " ];
  }));
}));

Template.__define__("recipes", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<h1>My Recipes</h1>\n  "), UI.Each(function() {
    return Spacebars.call(self.lookup("my_recipes"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", Spacebars.include(self.lookupTemplate("recipe")), "\n  " ];
  })), HTML.Raw('\n\n  <div>\n    <hr>\n    <strong>Create a recipe!</strong>\n    <div class="control-group" id="recipe-form">\n      <label class="control-label" for="recipe-name">Recipe name</label>\n      <div class="controls">\n        <input id="recipe-name" type="text">\n        <input id="recipe-save" type="submit">\n        <span class="help-inline"></span>\n      </div>\n    </div>\n  </div>') ];
}));

Template.__define__("friends", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<h2>Choose your friends:</h2>\n  "), HTML.UL({
    style: "margin:10px 0;"
  }, "\n  ", UI.Each(function() {
    return Spacebars.call(self.lookup("other_users"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", HTML.LI({
      id: "friends",
      style: "list-style:none;margin-bottom:10px;"
    }, "\n      ", UI.If(function() {
      return Spacebars.call(self.lookup("myFriend"));
    }, UI.block(function() {
      var self = this;
      return [ "\n        ", HTML.A({
        href: "#",
        "class": "btn btn-large btn-success"
      }, function() {
        return Spacebars.mustache(self.lookup("username"));
      }), "\n      " ];
    }), UI.block(function() {
      var self = this;
      return [ "\n        ", HTML.A({
        href: "#",
        "class": "btn btn-info"
      }, function() {
        return Spacebars.mustache(self.lookup("username"));
      }), "\n      " ];
    })), "\n    "), "\n  " ];
  })), "\n  ") ];
}));

Template.__define__("friends_recipes", (function() {
  var self = this;
  var template = this;
  return UI.Each(function() {
    return Spacebars.call(self.lookup("recipes"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", Spacebars.include(self.lookupTemplate("recipe")), "\n  " ];
  }));
}));

Template.__define__("recipe", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "well"
  }, "\n    ", HTML.H2("\n      ", function() {
    return Spacebars.mustache(self.lookup("name"));
  }, " \n      ", UI.If(function() {
    return Spacebars.call(self.lookup("myRecipe"));
  }, UI.block(function() {
    var self = this;
    return [ "\n        ", HTML.A({
      "class": "del",
      href: "#"
    }, HTML.CharRef({
      html: "&times;",
      str: "×"
    })), "\n      " ];
  }), UI.block(function() {
    var self = this;
    return [ "\n        ", HTML.SPAN({
      style: "font-size:14px;"
    }, "according to ", HTML.EM({
      style: "color:#188181"
    }, function() {
      return Spacebars.mustache(self.lookup("creator_name"));
    })), "\n      " ];
  })), "\n    "), "\n    ", HTML.P("Cook time: ", function() {
    return Spacebars.mustache(self.lookup("cooking_time"));
  }), "\n    ", HTML.P(function() {
    return Spacebars.mustache(self.lookup("spicy"));
  }), HTML.Raw("\n    <h4>Ingredients:</h4>\n    "), UI.If(function() {
    return Spacebars.call(self.lookup("ingredients"));
  }, UI.block(function() {
    var self = this;
    return [ "\n      ", HTML.UL("\n      ", UI.Each(function() {
      return Spacebars.call(self.lookup("ingredients"));
    }, UI.block(function() {
      var self = this;
      return [ "\n        ", Spacebars.include(self.lookupTemplate("ingredient")), "\n      " ];
    })), "\n      "), "\n    " ];
  }), UI.block(function() {
    var self = this;
    return [ "\n      ", HTML.P("None."), "\n    " ];
  })), "\n\n    ", UI.If(function() {
    return Spacebars.call(self.lookup("myRecipe"));
  }, UI.block(function() {
    var self = this;
    return [ "\n    ", HTML.INPUT({
      "class": "ingredient-quantity",
      size: "4",
      type: "number",
      style: "width:50px;"
    }), "\n    ", HTML.INPUT({
      "class": "ingredient-name",
      type: "text"
    }), "\n    ", HTML.INPUT({
      "class": "ingredient-save",
      type: "submit"
    }), "\n    " ];
  })), "\n  ");
}));

Template.__define__("ingredient", (function() {
  var self = this;
  var template = this;
  return HTML.LI("\n    ", function() {
    return Spacebars.mustache(self.lookup("nice_quantity"));
  }, " of ", function() {
    return Spacebars.mustache(self.lookup("name"));
  }, " \n\n    ", UI.If(function() {
    return Spacebars.call(self.lookup("myRecipe"));
  }, UI.block(function() {
    var self = this;
    return [ "\n      ", HTML.CharRef({
      html: "&nbsp;",
      str: " "
    }), " ", HTML.A({
      "class": "del",
      href: "#"
    }, HTML.CharRef({
      html: "&times;",
      str: "×"
    })), "\n    " ];
  })), "\n  ");
}));

})();

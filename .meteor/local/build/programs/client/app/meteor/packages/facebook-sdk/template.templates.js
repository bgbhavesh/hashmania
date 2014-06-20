(function(){
Template.__define__("facebookLike", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "fb-like",
    "data-send": "true",
    "data-width": function() {
      return Spacebars.mustache(self.lookup("width"));
    },
    "data-show-faces": function() {
      return Spacebars.mustache(self.lookup("faces"));
    },
    "data-action": function() {
      return Spacebars.mustache(self.lookup("action"));
    },
    "data-colorscheme": function() {
      return Spacebars.mustache(self.lookup("colorscheme"));
    },
    "data-href": function() {
      return Spacebars.mustache(self.lookup("href"));
    },
    "data-kid-directed-site": function() {
      return Spacebars.mustache(self.lookup("kid"));
    },
    "data-layout": function() {
      return Spacebars.mustache(self.lookup("layout"));
    },
    "data-ref": function() {
      return Spacebars.mustache(self.lookup("ref"));
    },
    "data-share": function() {
      return Spacebars.mustache(self.lookup("share"));
    }
  });
}));

Template.__define__("facebookShare", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "fb-share-button",
    "data-href": function() {
      return Spacebars.mustache(self.lookup("href"));
    },
    "data-type": function() {
      return Spacebars.mustache(self.lookup("type"));
    },
    "data-width": function() {
      return Spacebars.mustache(self.lookup("width"));
    }
  });
}));

Template.__define__("facebookPost", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "fb-post",
    "data-href": function() {
      return Spacebars.mustache(self.lookup("href"));
    },
    "data-width": function() {
      return Spacebars.mustache(self.lookup("width"));
    }
  });
}));

Template.__define__("facebookComments", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "fb-comments",
    "data-href": function() {
      return Spacebars.mustache(self.lookup("href"));
    },
    "data-numposts": function() {
      return Spacebars.mustache(self.lookup("num_posts"));
    },
    "data-colorscheme": function() {
      return Spacebars.mustache(self.lookup("colorscheme"));
    },
    "data-width": function() {
      return Spacebars.mustache(self.lookup("width"));
    },
    "data-order-by": function() {
      return Spacebars.mustache(self.lookup("order_by"));
    },
    "data-mobile": function() {
      return Spacebars.mustache(self.lookup("mobile"));
    }
  });
}));

Template.__define__("facebookSend", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "fb-send",
    "data-href": function() {
      return Spacebars.mustache(self.lookup("href"));
    },
    "data-colorscheme": function() {
      return Spacebars.mustache(self.lookup("colorscheme"));
    },
    "data-kid-directed-site": function() {
      return Spacebars.mustache(self.lookup("kid_directed_site"));
    },
    "data-ref": function() {
      return Spacebars.mustache(self.lookup("ref"));
    }
  });
}));

Template.__define__("facebookFollow", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "fb-follow",
    "data-href": function() {
      return Spacebars.mustache(self.lookup("href"));
    },
    "data-colorscheme": function() {
      return Spacebars.mustache(self.lookup("colorscheme"));
    },
    "data-layout": function() {
      return Spacebars.mustache(self.lookup("layout"));
    },
    "data-show-faces": function() {
      return Spacebars.mustache(self.lookup("faces"));
    }
  });
}));

Template.__define__("facebookActivity", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "fb-activity",
    "data-site": function() {
      return Spacebars.mustache(self.lookup("site"));
    },
    "data-action": function() {
      return Spacebars.mustache(self.lookup("action"));
    },
    "data-colorscheme": function() {
      return Spacebars.mustache(self.lookup("colorscheme"));
    },
    "data-header": function() {
      return Spacebars.mustache(self.lookup("header"));
    },
    "data-filter": function() {
      return Spacebars.mustache(self.lookup("filter"));
    },
    "data-linktarget": function() {
      return Spacebars.mustache(self.lookup("linktarget"));
    },
    "data-recommendations": function() {
      return Spacebars.mustache(self.lookup("recommendations"));
    },
    "data-ref": function() {
      return Spacebars.mustache(self.lookup("ref"));
    },
    "data-width": function() {
      return Spacebars.mustache(self.lookup("width"));
    }
  });
}));

Template.__define__("facebookRecommendations", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "fb-recommendations",
    "data-site": function() {
      return Spacebars.mustache(self.lookup("site"));
    },
    "data-action": function() {
      return Spacebars.mustache(self.lookup("action"));
    },
    "data-colorscheme": function() {
      return Spacebars.mustache(self.lookup("colorscheme"));
    },
    "data-header": function() {
      return Spacebars.mustache(self.lookup("header"));
    },
    "data-add-id": function() {
      return Spacebars.mustache(self.lookup("add_id"));
    },
    "data-height": function() {
      return Spacebars.mustache(self.lookup("height"));
    },
    "data-linktarget": function() {
      return Spacebars.mustache(self.lookup("linktarget"));
    },
    "data-ref": function() {
      return Spacebars.mustache(self.lookup("ref"));
    },
    "data-width": function() {
      return Spacebars.mustache(self.lookup("width"));
    }
  });
}));

})();

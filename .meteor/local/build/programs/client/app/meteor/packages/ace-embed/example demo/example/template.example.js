(function(){
UI.body.contentParts.push(UI.Component.extend({render: (function() {
  var self = this;
  return [ HTML.Raw("<h3>Css Editor</h3>\n	"), Spacebars.include(self.lookupTemplate("aceEditor")) ];
})}));
Meteor.startup(function () { if (! UI.body.INSTANTIATED) { UI.body.INSTANTIATED = true; UI.DomRange.insert(UI.render(UI.body).dom, document.body); } });

Template.__define__("aceEditor", (function() {
  var self = this;
  var template = this;
  return Spacebars.include(self.lookupTemplate("constant"), UI.block(function() {
    var self = this;
    return [ "\n", HTML.DIV({
      id: "aceEditor"
    }, "\n.example1{ \n	color: red; \n}\n.example2{ \n	color: blue; \n}\n"), "\n" ];
  }));
}));

})();

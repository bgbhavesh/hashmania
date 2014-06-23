(function(){Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("Hello, {{name}} <br>\n\n{{#each game}}\n   {{this}}\n{{/each}}");Handlebars.templates["hello"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "hello"});};

})();

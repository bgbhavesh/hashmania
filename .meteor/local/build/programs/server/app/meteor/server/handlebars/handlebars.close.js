(function(){Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<head>\n    <script>window.close()</script>\n</head>\n<body> \n    Please close the window, if it doesn't automately.\n</body>");Handlebars.templates["close"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "close"});};

})();

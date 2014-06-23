(function(){Package.describe({
  summary: "language"
});

Package.on_use(function (api) {
  api.add_files("i18n.js", "client");
  api.add_files("jquery.i18n.min.js", "client");
  api.add_files("sprintf.min.js", "client");
  api.add_files('locales/en.json', 'client');
  api.add_files('locales/ur.json', 'client');
  api.add_files('locales/bower.json', 'client');
});

})();

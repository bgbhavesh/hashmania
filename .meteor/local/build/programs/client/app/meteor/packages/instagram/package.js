(function(){Package.describe({
  summary: "Instagram OAuth flow",
});

Package.on_use(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('templating', 'client');
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.export('Instagram');

  api.add_files(
    ['instagram_configure.html', 'instagram_configure.js'],
    'client');

  api.add_files('instagram_server.js', 'server');
  api.add_files('instagram_client.js', 'client');
});

})();

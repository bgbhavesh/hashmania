(function(){Package.describe({
  summary: "Manage the configuration for third-party services",
  internal: true
});

Package.on_use(function(api) {
  api.use('mongo-livedata', ['client', 'server']);
  if(api.export)
  api.export('ServiceConfiguration');
  api.add_files('service_configuration_common.js', ['client', 'server']);
});

})();

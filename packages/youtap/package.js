Package.describe({
  summary: "Nicolson TapMatrix Package"
});

Npm.depends({
    "node-schedule" : "0.1.13",
    'paypal-rest-sdk': '0.6.3',
    "fb" : "0.6.2"
});

Package.on_use(function (api) {
    api.add_files('hammer.js', 'client');
	api.add_files('easing.js', 'client');
	api.add_files('intro.js', 'client');
	api.add_files('introjs.css', 'client');
	api.add_files('jquery.imageloader.js', 'client');
	api.add_files('fastclick.js', 'client');	
	api.add_files(['server.js'], 'server');	
	api.add_files('jquery.transit.min.js', 'client');
	api.add_files('jquery.plugin.js', 'client');
	api.add_files('jquery.countdown.css', 'client');
	api.add_files('jquery.countdown.js', 'client');

	
	  if(api.export){
		api.export("schedule","server");
		api.export("paypal","server");
	  }
});
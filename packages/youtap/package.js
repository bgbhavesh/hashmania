Package.describe({
  summary: "Nicolson TapMatrix Package"
});

Npm.depends({
    "node-schedule" : "0.1.13",
    'paypal-rest-sdk': '0.6.3',
    "fb" : "0.6.2"
});

Package.on_use(function (api) {
    api.add_files('lib/hammer.js', 'client');
	api.add_files('lib/easing.js', 'client');
	//api.add_files('lib/intro.js', 'client');
	//api.add_files('lib/introjs.css', 'client');
	//api.add_files('lib/jquery.imageloader.js', 'client');
	api.add_files('lib/fastclick.js', 'client');	
	api.add_files(['lib/server.js'], 'server');	
	api.add_files('lib/jquery.transit.min.js', 'client');
	api.add_files('lib/jquery.plugin.js', 'client');
	api.add_files('lib/jquery.countdown.css', 'client');
	api.add_files('lib/jquery.countdown.js', 'client');

	
	  if(api.export){
		api.export("schedule","server");
		api.export("paypal","server");
	  }
});
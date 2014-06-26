Package.describe({
  summary: "Nicolson TapMatrix Package"
});

Npm.depends({
    "node-schedule" : "0.1.13",
    // 'paypal-rest-sdk': '0.6.3',
    "fb" : "0.6.2"
    // "passport" : "0.2.0",
    // "passport-facebook" : "1.0.3",
    // "form-data" : "0.1.2",
    // "request" : "2.34.0"
});

Package.on_use(function (api) {
    api.add_files('lib/hammer.js', 'client');
	api.add_files('lib/easing.js', 'client');
	//api.add_files('lib/intro.js', 'client');
	//api.add_files('lib/introjs.css', 'client');
	//api.add_files('lib/jquery.imageloader.js', 'client');
	api.add_files('lib/fastclick.js', 'client');	
	api.add_files('lib/scroll.js', 'client');	
	api.add_files(['server.js'], 'server');	
	api.add_files('lib/jquery.transit.min.js', 'client');
	api.add_files('lib/jquery.plugin.js', 'client');
	api.add_files('lib/jquery.countdown.css', 'client');
	api.add_files('lib/jquery.countdown.js', 'client');
	api.add_files('lib/noty.js', 'client');
	// api.add_files('cdv-plugin-fb-connect.js', 'client');
	// api.add_files('facebook-js-sdk.js', 'client');
	
	  if(api.export){
		api.export("schedule","server");
		// api.export("paypal","server");
        api.export("facebookfb","server");
  //       api.export("passport","server");
  //       api.export("facebook","server");
  //       api.export("querystring","server");
  //       api.export("FormData","server");
	  }
});
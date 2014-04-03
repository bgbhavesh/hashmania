schedule = Npm.require('node-schedule');
paypal = Npm.require('paypal-rest-sdk');
FB = Npm.require('fb');
// cryptsy.api('allmytrades', null, function (err, data) {
// 	console.log(err);
// 	console.log(data);
// });



// var rule = new schedule.RecurrenceRule();
// console.log(rule)
// rule.second = 1;
// // rule.minute = 1;

// var j = schedule.scheduleJob(rule, function(){
//     console.log('The answer to life, the universe, and everything!');
// });
URL = Npm.require('url'),
http = Npm.require('http'),
Meteor.getBase = function (sURL){
    
    // sURL = ,
    var result = Meteor.http.call("GET", sURL);
    if(result.statusCode == "200"){
       console.log("printing")
        // console.log(result)
        mytype = result.headers["content-type"]
        myprefix = "data:" + mytype + ";base64,"
        var base64 = new Buffer(result.content, 'binary').toString('base64');
        var data = myprefix + base64;
        return data;
        // oURL = URL.parse(sURL) 
    }
    
    
    // request = http.request('GET', oURL.pathname, {'host': oURL.hostname})
    // request = client.request('GET', oURL.pathname, {'host': oURL.hostname});
    // request.end();
    // request.on('response', function (response)
    // {
    //     // console.log(response)
    //     var type = response.headers["content-type"],
    //         prefix = "data:" + type + ";base64,",
    //         body = "";
    //         // console.log(type)
    //     response.setEncoding('binary');
    //     response.on('end', function () {
    //         // console.log(body)
    //         var base64 = new Buffer(body, 'binary').toString('base64'),
    //             data = prefix + base64;
    //             return data;
    //         // console.log(data);
    //     });
    //     response.on('data', function (chunk) {
    //         if (response.statusCode == 200) body += chunk;
    //     });
    // });
}
// Meteor.getBase('http://nodejs.org/logo.png');
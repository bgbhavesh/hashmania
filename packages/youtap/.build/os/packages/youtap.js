(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/youtap/server.js                                                                           //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
schedule = Npm.require('node-schedule');                                                               // 1
// paypal = Npm.require('paypal-rest-sdk');                                                            // 2
facebookfb = Npm.require('fb');                                                                        // 3
// passport = Npm.require('passport');                                                                 // 4
// facebook = Npm.require('passport-facebook');                                                        // 5
// querystring = Npm.require('querystring');                                                           // 6
// FormData = Npm.require('form-data');                                                                // 7
// URL = Npm.require('url');                                                                           // 8
// http = Npm.require('http');                                                                         // 9
// fs = Npm.require('fs');                                                                             // 10
// request = Npm.require('request');                                                                   // 11
// var randomCount = 0;                                                                                // 12
// Meteor.getBase = function (sURL){                                                                   // 13
//     var fs = Npm.require('fs');                                                                     // 14
//     // sURL = ,                                                                                     // 15
                                                                                                       // 16
//     var result = Meteor.http.get(sURL);                                                             // 17
//     if(result.statusCode == "200"){                                                                 // 18
//        console.log("printing")                                                                      // 19
//         console.log(result)                                                                         // 20
//         // var base64Data = result.content.replace(/^data:image\/png;base64,/,"");                  // 21
//         // console.log(base64Data)                                                                  // 22
//         // result.setEncoding('binary');                                                            // 23
//         // console.log(result.file)                                                                 // 24
//         mytype = result.headers["content-type"]                                                     // 25
//         myprefix = "data:" + mytype + ";base64,"                                                    // 26
//         var base64 = new Buffer(result.content, 'binary') //.toString('base64');                    // 27
//         var data = myprefix + base64;                                                               // 28
//         // console.log(data)                                                                        // 29
//         return;                                                                                     // 30
//         fs.writeFile("first.jpg", base64, 'binary', function(err){                                  // 31
//             if (err) throw err                                                                      // 32
//             console.log('File saved.')                                                              // 33
//         })                                                                                          // 34
//         return data;                                                                                // 35
//         // oURL = URL.parse(sURL)                                                                   // 36
//     }                                                                                               // 37
                                                                                                       // 38
                                                                                                       // 39
//     // request = http.request('GET', oURL.pathname, {'host': oURL.hostname})                        // 40
//     // request = client.request('GET', oURL.pathname, {'host': oURL.hostname});                     // 41
//     // request.end();                                                                               // 42
//     // request.on('response', function (response)                                                   // 43
//     // {                                                                                            // 44
//     //     // console.log(response)                                                                 // 45
//     //     var type = response.headers["content-type"],                                             // 46
//     //         prefix = "data:" + type + ";base64,",                                                // 47
//     //         body = "";                                                                           // 48
//     //         // console.log(type)                                                                 // 49
//     //     response.setEncoding('binary');                                                          // 50
//     //     response.on('end', function () {                                                         // 51
//     //         // console.log(body)                                                                 // 52
//     //         var base64 = new Buffer(body, 'binary').toString('base64'),                          // 53
//     //             data = prefix + base64;                                                          // 54
//     //             return data;                                                                     // 55
//     //         // console.log(data);                                                                // 56
//     //     });                                                                                      // 57
//     //     response.on('data', function (chunk) {                                                   // 58
//     //         if (response.statusCode == 200) body += chunk;                                       // 59
//     //     });                                                                                      // 60
//     // });                                                                                          // 61
// }                                                                                                   // 62
// // Meteor.getBase("http://images.ak.instagram.com/profiles/profile_487690035_75sq_1383644609.jpg"); // 63
// var download = function(uri, filename, callback){                                                   // 64
//   request.head(uri, function(err, res, body){                                                       // 65
//     console.log('content-type:', res.headers['content-type']);                                      // 66
//     console.log('content-length:', res.headers['content-length']);                                  // 67
                                                                                                       // 68
//     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);                        // 69
//   });                                                                                               // 70
// };                                                                                                  // 71
// // HTTP.get(url, [options], [asyncCallback])                                                        // 72
// // download("http://images.ak.instagram.com/profiles/profile_487690035_75sq_1383644609.jpg","first.jpg",function(){console.log("done")})
// // Meteor.getBase('http://nodejs.org/logo.png');                                                    // 74
                                                                                                       // 75
// // function PostImageToFacebook(authToken)                                                          // 76
// // {                                                                                                // 77
// // var canvas = document.getElementById("c");                                                       // 78
// // var imageData  = canvas.toDataURL("image/png");                                                  // 79
// // try{                                                                                             // 80
// //     blob = dataURItoBlob(imageData);                                                             // 81
// // }catch(e){console.log(e);}                                                                       // 82
// // var fd = new FormData();                                                                         // 83
// // fd.append("access_token",authToken);                                                             // 84
// // fd.append("source", blob);                                                                       // 85
// // fd.append("message","Photo Text");                                                               // 86
// // try{                                                                                             // 87
// // $.ajax({                                                                                         // 88
// //     url:"https://graph.facebook.com/me/photos?access_token=" + authToken,                        // 89
// //     type:"POST",                                                                                 // 90
// //     data:fd,                                                                                     // 91
// //     processData:false,                                                                           // 92
// //     contentType:false,                                                                           // 93
// //     cache:false,                                                                                 // 94
// //     success:function(data){                                                                      // 95
// //         console.log("success " + data);                                                          // 96
// //     },                                                                                           // 97
// //     error:function(shr,status,data){                                                             // 98
// //         console.log("error " + data + " Status " + shr.status);                                  // 99
// //     },                                                                                           // 100
// //     complete:function(){                                                                         // 101
// //     console.log("Posted to facebook");                                                           // 102
// //     }                                                                                            // 103
// // });                                                                                              // 104
                                                                                                       // 105
// // }catch(e){console.log(e);}                                                                       // 106
// // }                                                                                                // 107
                                                                                                       // 108
// // function dataURItoBlob(dataURI) {                                                                // 109
// // var byteString = atob(dataURI.split(',')[1]);                                                    // 110
// // var ab = new ArrayBuffer(byteString.length);                                                     // 111
// // var ia = new Uint8Array(ab);                                                                     // 112
// // for (var i = 0; i < byteString.length; i++) {                                                    // 113
// //     ia[i] = byteString.charCodeAt(i);                                                            // 114
// // }                                                                                                // 115
// // return new Blob([ab], { type: 'image/png' });                                                    // 116
// // }                                                                                                // 117
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

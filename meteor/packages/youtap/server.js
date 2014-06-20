schedule = Npm.require('node-schedule');
// paypal = Npm.require('paypal-rest-sdk');
facebookfb = Npm.require('fb');
// passport = Npm.require('passport');
// facebook = Npm.require('passport-facebook');
// querystring = Npm.require('querystring');
// FormData = Npm.require('form-data');
// URL = Npm.require('url');
// http = Npm.require('http');
// fs = Npm.require('fs');
// request = Npm.require('request');
// var randomCount = 0;
// Meteor.getBase = function (sURL){
//     var fs = Npm.require('fs');
//     // sURL = ,

//     var result = Meteor.http.get(sURL);
//     if(result.statusCode == "200"){
//        console.log("printing")
//         console.log(result)
//         // var base64Data = result.content.replace(/^data:image\/png;base64,/,"");
//         // console.log(base64Data)
//         // result.setEncoding('binary');
//         // console.log(result.file)
//         mytype = result.headers["content-type"]
//         myprefix = "data:" + mytype + ";base64,"
//         var base64 = new Buffer(result.content, 'binary') //.toString('base64');
//         var data = myprefix + base64;
//         // console.log(data)
//         return;
//         fs.writeFile("first.jpg", base64, 'binary', function(err){
//             if (err) throw err
//             console.log('File saved.')
//         })
//         return data;
//         // oURL = URL.parse(sURL) 
//     }
    

//     // request = http.request('GET', oURL.pathname, {'host': oURL.hostname})
//     // request = client.request('GET', oURL.pathname, {'host': oURL.hostname});
//     // request.end();
//     // request.on('response', function (response)
//     // {
//     //     // console.log(response)
//     //     var type = response.headers["content-type"],
//     //         prefix = "data:" + type + ";base64,",
//     //         body = "";
//     //         // console.log(type)
//     //     response.setEncoding('binary');
//     //     response.on('end', function () {
//     //         // console.log(body)
//     //         var base64 = new Buffer(body, 'binary').toString('base64'),
//     //             data = prefix + base64;
//     //             return data;
//     //         // console.log(data);
//     //     });
//     //     response.on('data', function (chunk) {
//     //         if (response.statusCode == 200) body += chunk;
//     //     });
//     // });
// }
// // Meteor.getBase("http://images.ak.instagram.com/profiles/profile_487690035_75sq_1383644609.jpg");
// var download = function(uri, filename, callback){
//   request.head(uri, function(err, res, body){
//     console.log('content-type:', res.headers['content-type']);
//     console.log('content-length:', res.headers['content-length']);

//     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//   });
// };
// // HTTP.get(url, [options], [asyncCallback])
// // download("http://images.ak.instagram.com/profiles/profile_487690035_75sq_1383644609.jpg","first.jpg",function(){console.log("done")})
// // Meteor.getBase('http://nodejs.org/logo.png');

// // function PostImageToFacebook(authToken)
// // {
// // var canvas = document.getElementById("c");
// // var imageData  = canvas.toDataURL("image/png");
// // try{
// //     blob = dataURItoBlob(imageData);
// // }catch(e){console.log(e);}
// // var fd = new FormData();
// // fd.append("access_token",authToken);
// // fd.append("source", blob);
// // fd.append("message","Photo Text");
// // try{
// // $.ajax({
// //     url:"https://graph.facebook.com/me/photos?access_token=" + authToken,
// //     type:"POST",
// //     data:fd,
// //     processData:false,
// //     contentType:false,
// //     cache:false,
// //     success:function(data){
// //         console.log("success " + data);
// //     },
// //     error:function(shr,status,data){
// //         console.log("error " + data + " Status " + shr.status);
// //     },
// //     complete:function(){
// //     console.log("Posted to facebook");
// //     }
// // });

// // }catch(e){console.log(e);}
// // }

// // function dataURItoBlob(dataURI) {
// // var byteString = atob(dataURI.split(',')[1]);
// // var ab = new ArrayBuffer(byteString.length);
// // var ia = new Uint8Array(ab);
// // for (var i = 0; i < byteString.length; i++) {
// //     ia[i] = byteString.charCodeAt(i);
// // }
// // return new Blob([ab], { type: 'image/png' });
// // }
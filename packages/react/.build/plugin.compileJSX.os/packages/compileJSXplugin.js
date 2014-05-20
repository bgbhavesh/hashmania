(function () {

(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// plugin/compile-jsx.js                                             //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var reactTools = Npm.require('react-tools');                         // 1
                                                                     // 2
function handler(compileStep) {                                      // 3
  var source = compileStep.read().toString('utf8');                  // 4
  var outputFile = compileStep.inputPath + ".js";                    // 5
                                                                     // 6
  compileStep.addJavaScript({                                        // 7
    path: outputFile,                                                // 8
    sourcePath: compileStep.inputPath,                               // 9
    data: reactTools.transform(source)                               // 10
  });                                                                // 11
}                                                                    // 12
                                                                     // 13
Plugin.registerSourceHandler("jsx", handler);                        // 14
                                                                     // 15
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.compileJSX = {};

})();

//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var localeFile, dict, args;

(function () {

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/language/i18n.js                                               //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
var I18n = function(options){                                              // 1
    for (var prop in options) {                                            // 2
        this[prop] = options[prop];                                        // 3
    };                                                                     // 4
                                                                           // 5
    this.setLocale(this.locale);                                           // 6
};                                                                         // 7
                                                                           // 8
I18n.localeCache = {};                                                     // 9
                                                                           // 10
I18n.prototype = {                                                         // 11
    defaultLocale: "en",                                                   // 12
    directory: "/locales",                                                 // 13
    extension: ".min.json",                                                // 14
                                                                           // 15
    getLocale: function(){                                                 // 16
        return this.locale;                                                // 17
    },                                                                     // 18
                                                                           // 19
    setLocale: function(locale){                                           // 20
        if(!locale)                                                        // 21
            locale = $("html").attr("lang");                               // 22
                                                                           // 23
        if(!locale)                                                        // 24
            locale = this.defaultLocale;                                   // 25
                                                                           // 26
        this.locale = locale;                                              // 27
                                                                           // 28
        if(locale in I18n.localeCache) return;                             // 29
        else this.getLocaleFileFromServer();                               // 30
    },                                                                     // 31
                                                                           // 32
    getLocaleFileFromServer: function(){                                   // 33
        localeFile = null;                                                 // 34
                                                                           // 35
        $.ajax({                                                           // 36
            url: this.directory + "/" + this.locale + this.extension,      // 37
            async: false,                                                  // 38
            success: function(data){                                       // 39
                localeFile = data;                                         // 40
            }                                                              // 41
        });                                                                // 42
                                                                           // 43
        I18n.localeCache[this.locale] = localeFile;                        // 44
    },                                                                     // 45
                                                                           // 46
    __: function(){                                                        // 47
        var msg = I18n.localeCache[this.locale][arguments[0]];             // 48
                                                                           // 49
        if (arguments.length > 1)                                          // 50
            msg = vsprintf(msg, Array.prototype.slice.call(arguments, 1)); // 51
                                                                           // 52
        return msg;                                                        // 53
    },                                                                     // 54
                                                                           // 55
    __n: function(singular, count){                                        // 56
        var msg = I18n.localeCache[this.locale][singular];                 // 57
                                                                           // 58
        count = parseInt(count, 10);                                       // 59
        if(count === 0)                                                    // 60
            msg = msg.zero;                                                // 61
        else                                                               // 62
            msg = count > 1 ? msg.other : msg.one;                         // 63
                                                                           // 64
        msg = vsprintf(msg, [count]);                                      // 65
                                                                           // 66
        if (arguments.length > 2)                                          // 67
            msg = vsprintf(msg, Array.prototype.slice.call(arguments, 2)); // 68
                                                                           // 69
        return msg;                                                        // 70
    }                                                                      // 71
};                                                                         // 72
                                                                           // 73
/////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/language/jquery.i18n.min.js                                    //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
!function(a){var b=Array.prototype.slice,c={dict:null,load:function(b){null!==this.dict?a.extend(this.dict,b):this.dict=b},_:function(a){return dict=this.dict,dict&&dict.hasOwnProperty(a)&&(a=dict[a]),args=b.call(arguments),args[0]=a,this.printf.apply(this,args)},printf:function(c,d){return arguments.length<2?c:(d=a.isArray(d)?d:b.call(arguments,1),c.replace(/([^%]|^)%(?:(\d+)\$)?s/g,function(a,b,c){return c?b+d[parseInt(c)-1]:b+d.shift()}).replace(/%%s/g,"%s"))}};a.fn._t=function(){return a(this).html(c._.apply(c,arguments))},a.i18n=c}(jQuery);
/////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/language/sprintf.min.js                                        //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
var sprintf=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}function b(a,b){for(var c=[];b>0;c[--b]=a);return c.join("")}var c=function(){return c.cache.hasOwnProperty(arguments[0])||(c.cache[arguments[0]]=c.parse(arguments[0])),c.format.call(null,c.cache[arguments[0]],arguments)};return c.format=function(c,d){var e,f,g,h,i,j,k,l=1,m=c.length,n="",o=[];for(f=0;m>f;f++)if(n=a(c[f]),"string"===n)o.push(c[f]);else if("array"===n){if(h=c[f],h[2])for(e=d[l],g=0;g<h[2].length;g++){if(!e.hasOwnProperty(h[2][g]))throw sprintf('[sprintf] property "%s" does not exist',h[2][g]);e=e[h[2][g]]}else e=h[1]?d[h[1]]:d[l++];if(/[^s]/.test(h[8])&&"number"!=a(e))throw sprintf("[sprintf] expecting number but found %s",a(e));switch(h[8]){case"b":e=e.toString(2);break;case"c":e=String.fromCharCode(e);break;case"d":e=parseInt(e,10);break;case"e":e=h[7]?e.toExponential(h[7]):e.toExponential();break;case"f":e=h[7]?parseFloat(e).toFixed(h[7]):parseFloat(e);break;case"o":e=e.toString(8);break;case"s":e=(e=String(e))&&h[7]?e.substring(0,h[7]):e;break;case"u":e=Math.abs(e);break;case"x":e=e.toString(16);break;case"X":e=e.toString(16).toUpperCase()}e=/[def]/.test(h[8])&&h[3]&&e>=0?"+"+e:e,j=h[4]?"0"==h[4]?"0":h[4].charAt(1):" ",k=h[6]-String(e).length,i=h[6]?b(j,k):"",o.push(h[5]?e+i:i+e)}return o.join("")},c.cache={},c.parse=function(a){for(var b=a,c=[],d=[],e=0;b;){if(null!==(c=/^[^\x25]+/.exec(b)))d.push(c[0]);else if(null!==(c=/^\x25{2}/.exec(b)))d.push("%");else{if(null===(c=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)))throw"[sprintf] huh?";if(c[2]){e|=1;var f=[],g=c[2],h=[];if(null===(h=/^([a-z_][a-z_\d]*)/i.exec(g)))throw"[sprintf] huh?";for(f.push(h[1]);""!==(g=g.substring(h[0].length));)if(null!==(h=/^\.([a-z_][a-z_\d]*)/i.exec(g)))f.push(h[1]);else{if(null===(h=/^\[(\d+)\]/.exec(g)))throw"[sprintf] huh?";f.push(h[1])}c[2]=f}else e|=2;if(3===e)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";d.push(c)}b=b.substring(c[0].length)}return d},c}(),vsprintf=function(a,b){return b.unshift(a),sprintf.apply(null,b)};
/////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.language = {};

})();

//# sourceMappingURL=af3ca6afc6ca86561d02c8b336be2f661cf3fc77.map

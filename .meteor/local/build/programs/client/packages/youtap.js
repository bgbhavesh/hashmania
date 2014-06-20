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

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/youtap/lib/hammer.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){(u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which)&&(o=!0),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this),function(t,e){"use strict";t!==e&&(Hammer.event.bindDom=function(n,i,r){t(n).on(i,function(t){var n=t.originalEvent||t;n.pageX===e&&(n.pageX=t.pageX,n.pageY=t.pageY),n.target||(n.target=t.target),n.which===e&&(n.which=n.button),n.preventDefault||(n.preventDefault=t.preventDefault),n.stopPropagation||(n.stopPropagation=t.stopPropagation),r.call(this,n)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){var i=t(this.element);return i.has(n.target).length&&(i=t(n.target)),i.trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),i=n.data("hammer");i?i&&e&&Hammer.utils.extend(i.options,e):n.data("hammer",new Hammer(this,e||{}))})})}(window.jQuery||window.Zepto);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/youtap/lib/easing.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*                                                                                                                   // 1
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/                                                     // 2
 *                                                                                                                   // 3
 * Uses the built in easing capabilities added In jQuery 1.1                                                         // 4
 * to offer multiple easing options                                                                                  // 5
 *                                                                                                                   // 6
 * TERMS OF USE - jQuery Easing                                                                                      // 7
 *                                                                                                                   // 8
 * Open source under the BSD License.                                                                                // 9
 *                                                                                                                   // 10
 * Copyright Â© 2008 George McGinley Smith                                                                           // 11
 * All rights reserved.                                                                                              // 12
 *                                                                                                                   // 13
 * Redistribution and use in source and binary forms, with or without modification,                                  // 14
 * are permitted provided that the following conditions are met:                                                     // 15
 *                                                                                                                   // 16
 * Redistributions of source code must retain the above copyright notice, this list of                               // 17
 * conditions and the following disclaimer.                                                                          // 18
 * Redistributions in binary form must reproduce the above copyright notice, this list                               // 19
 * of conditions and the following disclaimer in the documentation and/or other materials                            // 20
 * provided with the distribution.                                                                                   // 21
 *                                                                                                                   // 22
 * Neither the name of the author nor the names of contributors may be used to endorse                               // 23
 * or promote products derived from this software without specific prior written permission.                         // 24
 *                                                                                                                   // 25
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY                               // 26
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF                           // 27
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE                        // 28
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,                         // 29
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE                    // 30
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED                       // 31
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING                         // 32
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED                     // 33
 * OF THE POSSIBILITY OF SUCH DAMAGE.                                                                                // 34
 *                                                                                                                   // 35
*/                                                                                                                   // 36
                                                                                                                     // 37
// t: current time, b: begInnIng value, c: change In value, d: duration                                              // 38
jQuery.easing['jswing'] = jQuery.easing['swing'];                                                                    // 39
                                                                                                                     // 40
jQuery.extend( jQuery.easing,                                                                                        // 41
{                                                                                                                    // 42
	def: 'easeOutQuad',                                                                                                 // 43
	swing: function (x, t, b, c, d) {                                                                                   // 44
		//alert(jQuery.easing.default);                                                                                    // 45
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);                                                            // 46
	},                                                                                                                  // 47
	easeInQuad: function (x, t, b, c, d) {                                                                              // 48
		return c*(t/=d)*t + b;                                                                                             // 49
	},                                                                                                                  // 50
	easeOutQuad: function (x, t, b, c, d) {                                                                             // 51
		return -c *(t/=d)*(t-2) + b;                                                                                       // 52
	},                                                                                                                  // 53
	easeInOutQuad: function (x, t, b, c, d) {                                                                           // 54
		if ((t/=d/2) < 1) return c/2*t*t + b;                                                                              // 55
		return -c/2 * ((--t)*(t-2) - 1) + b;                                                                               // 56
	},                                                                                                                  // 57
	easeInCubic: function (x, t, b, c, d) {                                                                             // 58
		return c*(t/=d)*t*t + b;                                                                                           // 59
	},                                                                                                                  // 60
	easeOutCubic: function (x, t, b, c, d) {                                                                            // 61
		return c*((t=t/d-1)*t*t + 1) + b;                                                                                  // 62
	},                                                                                                                  // 63
	easeInOutCubic: function (x, t, b, c, d) {                                                                          // 64
		if ((t/=d/2) < 1) return c/2*t*t*t + b;                                                                            // 65
		return c/2*((t-=2)*t*t + 2) + b;                                                                                   // 66
	},                                                                                                                  // 67
	easeInQuart: function (x, t, b, c, d) {                                                                             // 68
		return c*(t/=d)*t*t*t + b;                                                                                         // 69
	},                                                                                                                  // 70
	easeOutQuart: function (x, t, b, c, d) {                                                                            // 71
		return -c * ((t=t/d-1)*t*t*t - 1) + b;                                                                             // 72
	},                                                                                                                  // 73
	easeInOutQuart: function (x, t, b, c, d) {                                                                          // 74
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;                                                                          // 75
		return -c/2 * ((t-=2)*t*t*t - 2) + b;                                                                              // 76
	},                                                                                                                  // 77
	easeInQuint: function (x, t, b, c, d) {                                                                             // 78
		return c*(t/=d)*t*t*t*t + b;                                                                                       // 79
	},                                                                                                                  // 80
	easeOutQuint: function (x, t, b, c, d) {                                                                            // 81
		return c*((t=t/d-1)*t*t*t*t + 1) + b;                                                                              // 82
	},                                                                                                                  // 83
	easeInOutQuint: function (x, t, b, c, d) {                                                                          // 84
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;                                                                        // 85
		return c/2*((t-=2)*t*t*t*t + 2) + b;                                                                               // 86
	},                                                                                                                  // 87
	easeInSine: function (x, t, b, c, d) {                                                                              // 88
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;                                                                   // 89
	},                                                                                                                  // 90
	easeOutSine: function (x, t, b, c, d) {                                                                             // 91
		return c * Math.sin(t/d * (Math.PI/2)) + b;                                                                        // 92
	},                                                                                                                  // 93
	easeInOutSine: function (x, t, b, c, d) {                                                                           // 94
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;                                                                     // 95
	},                                                                                                                  // 96
	easeInExpo: function (x, t, b, c, d) {                                                                              // 97
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;                                                           // 98
	},                                                                                                                  // 99
	easeOutExpo: function (x, t, b, c, d) {                                                                             // 100
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;                                                       // 101
	},                                                                                                                  // 102
	easeInOutExpo: function (x, t, b, c, d) {                                                                           // 103
		if (t==0) return b;                                                                                                // 104
		if (t==d) return b+c;                                                                                              // 105
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;                                                      // 106
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;                                                                    // 107
	},                                                                                                                  // 108
	easeInCirc: function (x, t, b, c, d) {                                                                              // 109
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;                                                                     // 110
	},                                                                                                                  // 111
	easeOutCirc: function (x, t, b, c, d) {                                                                             // 112
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;                                                                         // 113
	},                                                                                                                  // 114
	easeInOutCirc: function (x, t, b, c, d) {                                                                           // 115
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;                                                      // 116
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;                                                                    // 117
	},                                                                                                                  // 118
	easeInElastic: function (x, t, b, c, d) {                                                                           // 119
		var s=1.70158;var p=0;var a=c;                                                                                     // 120
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;                                                   // 121
		if (a < Math.abs(c)) { a=c; var s=p/4; }                                                                           // 122
		else var s = p/(2*Math.PI) * Math.asin (c/a);                                                                      // 123
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;                                         // 124
	},                                                                                                                  // 125
	easeOutElastic: function (x, t, b, c, d) {                                                                          // 126
		var s=1.70158;var p=0;var a=c;                                                                                     // 127
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;                                                   // 128
		if (a < Math.abs(c)) { a=c; var s=p/4; }                                                                           // 129
		else var s = p/(2*Math.PI) * Math.asin (c/a);                                                                      // 130
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;                                            // 131
	},                                                                                                                  // 132
	easeInOutElastic: function (x, t, b, c, d) {                                                                        // 133
		var s=1.70158;var p=0;var a=c;                                                                                     // 134
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);                                           // 135
		if (a < Math.abs(c)) { a=c; var s=p/4; }                                                                           // 136
		else var s = p/(2*Math.PI) * Math.asin (c/a);                                                                      // 137
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;                           // 138
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;                                    // 139
	},                                                                                                                  // 140
	easeInBack: function (x, t, b, c, d, s) {                                                                           // 141
		if (s == undefined) s = 1.70158;                                                                                   // 142
		return c*(t/=d)*t*((s+1)*t - s) + b;                                                                               // 143
	},                                                                                                                  // 144
	easeOutBack: function (x, t, b, c, d, s) {                                                                          // 145
		if (s == undefined) s = 1.70158;                                                                                   // 146
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;                                                                      // 147
	},                                                                                                                  // 148
	easeInOutBack: function (x, t, b, c, d, s) {                                                                        // 149
		if (s == undefined) s = 1.70158;                                                                                   // 150
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;                                                   // 151
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;                                                            // 152
	},                                                                                                                  // 153
	easeInBounce: function (x, t, b, c, d) {                                                                            // 154
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;                                                      // 155
	},                                                                                                                  // 156
	easeOutBounce: function (x, t, b, c, d) {                                                                           // 157
		if ((t/=d) < (1/2.75)) {                                                                                           // 158
			return c*(7.5625*t*t) + b;                                                                                        // 159
		} else if (t < (2/2.75)) {                                                                                         // 160
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;                                                                    // 161
		} else if (t < (2.5/2.75)) {                                                                                       // 162
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;                                                                 // 163
		} else {                                                                                                           // 164
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;                                                              // 165
		}                                                                                                                  // 166
	},                                                                                                                  // 167
	easeInOutBounce: function (x, t, b, c, d) {                                                                         // 168
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;                                         // 169
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;                                            // 170
	}                                                                                                                   // 171
});                                                                                                                  // 172
                                                                                                                     // 173
/*                                                                                                                   // 174
 *                                                                                                                   // 175
 * TERMS OF USE - EASING EQUATIONS                                                                                   // 176
 *                                                                                                                   // 177
 * Open source under the BSD License.                                                                                // 178
 *                                                                                                                   // 179
 * Copyright Â© 2001 Robert Penner                                                                                   // 180
 * All rights reserved.                                                                                              // 181
 *                                                                                                                   // 182
 * Redistribution and use in source and binary forms, with or without modification,                                  // 183
 * are permitted provided that the following conditions are met:                                                     // 184
 *                                                                                                                   // 185
 * Redistributions of source code must retain the above copyright notice, this list of                               // 186
 * conditions and the following disclaimer.                                                                          // 187
 * Redistributions in binary form must reproduce the above copyright notice, this list                               // 188
 * of conditions and the following disclaimer in the documentation and/or other materials                            // 189
 * provided with the distribution.                                                                                   // 190
 *                                                                                                                   // 191
 * Neither the name of the author nor the names of contributors may be used to endorse                               // 192
 * or promote products derived from this software without specific prior written permission.                         // 193
 *                                                                                                                   // 194
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY                               // 195
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF                           // 196
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE                        // 197
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,                         // 198
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE                    // 199
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED                       // 200
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING                         // 201
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED                     // 202
 * OF THE POSSIBILITY OF SUCH DAMAGE.                                                                                // 203
 *                                                                                                                   // 204
 */                                                                                                                   // 205
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/youtap/lib/fastclick.js                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   // 1
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.                                   // 2
 *                                                                                                                    // 3
 * @version 0.6.11                                                                                                    // 4
 * @codingstandard ftlabs-jsv2                                                                                        // 5
 * @copyright The Financial Times Limited [All Rights Reserved]                                                       // 6
 * @license MIT License (see LICENSE.txt)                                                                             // 7
 */                                                                                                                   // 8
                                                                                                                      // 9
/*jslint browser:true, node:true*/                                                                                    // 10
/*global define, Event, Node*/                                                                                        // 11
                                                                                                                      // 12
                                                                                                                      // 13
/**                                                                                                                   // 14
 * Instantiate fast-clicking listeners on the specificed layer.                                                       // 15
 *                                                                                                                    // 16
 * @constructor                                                                                                       // 17
 * @param {Element} layer The layer to listen on                                                                      // 18
 */                                                                                                                   // 19
function FastClick(layer) {                                                                                           // 20
	'use strict';                                                                                                        // 21
	var oldOnClick, self = this;                                                                                         // 22
                                                                                                                      // 23
                                                                                                                      // 24
	/**                                                                                                                  // 25
	 * Whether a click is currently being tracked.                                                                       // 26
	 *                                                                                                                   // 27
	 * @type boolean                                                                                                     // 28
	 */                                                                                                                  // 29
	this.trackingClick = false;                                                                                          // 30
                                                                                                                      // 31
                                                                                                                      // 32
	/**                                                                                                                  // 33
	 * Timestamp for when when click tracking started.                                                                   // 34
	 *                                                                                                                   // 35
	 * @type number                                                                                                      // 36
	 */                                                                                                                  // 37
	this.trackingClickStart = 0;                                                                                         // 38
                                                                                                                      // 39
                                                                                                                      // 40
	/**                                                                                                                  // 41
	 * The element being tracked for a click.                                                                            // 42
	 *                                                                                                                   // 43
	 * @type EventTarget                                                                                                 // 44
	 */                                                                                                                  // 45
	this.targetElement = null;                                                                                           // 46
                                                                                                                      // 47
                                                                                                                      // 48
	/**                                                                                                                  // 49
	 * X-coordinate of touch start event.                                                                                // 50
	 *                                                                                                                   // 51
	 * @type number                                                                                                      // 52
	 */                                                                                                                  // 53
	this.touchStartX = 0;                                                                                                // 54
                                                                                                                      // 55
                                                                                                                      // 56
	/**                                                                                                                  // 57
	 * Y-coordinate of touch start event.                                                                                // 58
	 *                                                                                                                   // 59
	 * @type number                                                                                                      // 60
	 */                                                                                                                  // 61
	this.touchStartY = 0;                                                                                                // 62
                                                                                                                      // 63
                                                                                                                      // 64
	/**                                                                                                                  // 65
	 * ID of the last touch, retrieved from Touch.identifier.                                                            // 66
	 *                                                                                                                   // 67
	 * @type number                                                                                                      // 68
	 */                                                                                                                  // 69
	this.lastTouchIdentifier = 0;                                                                                        // 70
                                                                                                                      // 71
                                                                                                                      // 72
	/**                                                                                                                  // 73
	 * Touchmove boundary, beyond which a click will be cancelled.                                                       // 74
	 *                                                                                                                   // 75
	 * @type number                                                                                                      // 76
	 */                                                                                                                  // 77
	this.touchBoundary = 10;                                                                                             // 78
                                                                                                                      // 79
                                                                                                                      // 80
	/**                                                                                                                  // 81
	 * The FastClick layer.                                                                                              // 82
	 *                                                                                                                   // 83
	 * @type Element                                                                                                     // 84
	 */                                                                                                                  // 85
	this.layer = layer;                                                                                                  // 86
                                                                                                                      // 87
	if (!layer || !layer.nodeType) {                                                                                     // 88
		throw new TypeError('Layer must be a document node');                                                               // 89
	}                                                                                                                    // 90
                                                                                                                      // 91
	/** @type function() */                                                                                              // 92
	this.onClick = function() { return FastClick.prototype.onClick.apply(self, arguments); };                            // 93
                                                                                                                      // 94
	/** @type function() */                                                                                              // 95
	this.onMouse = function() { return FastClick.prototype.onMouse.apply(self, arguments); };                            // 96
                                                                                                                      // 97
	/** @type function() */                                                                                              // 98
	this.onTouchStart = function() { return FastClick.prototype.onTouchStart.apply(self, arguments); };                  // 99
                                                                                                                      // 100
	/** @type function() */                                                                                              // 101
	this.onTouchMove = function() { return FastClick.prototype.onTouchMove.apply(self, arguments); };                    // 102
                                                                                                                      // 103
	/** @type function() */                                                                                              // 104
	this.onTouchEnd = function() { return FastClick.prototype.onTouchEnd.apply(self, arguments); };                      // 105
                                                                                                                      // 106
	/** @type function() */                                                                                              // 107
	this.onTouchCancel = function() { return FastClick.prototype.onTouchCancel.apply(self, arguments); };                // 108
                                                                                                                      // 109
	if (FastClick.notNeeded(layer)) {                                                                                    // 110
		return;                                                                                                             // 111
	}                                                                                                                    // 112
                                                                                                                      // 113
	// Set up event handlers as required                                                                                 // 114
	if (this.deviceIsAndroid) {                                                                                          // 115
		layer.addEventListener('mouseover', this.onMouse, true);                                                            // 116
		layer.addEventListener('mousedown', this.onMouse, true);                                                            // 117
		layer.addEventListener('mouseup', this.onMouse, true);                                                              // 118
	}                                                                                                                    // 119
                                                                                                                      // 120
	layer.addEventListener('click', this.onClick, true);                                                                 // 121
	layer.addEventListener('touchstart', this.onTouchStart, false);                                                      // 122
	layer.addEventListener('touchmove', this.onTouchMove, false);                                                        // 123
	layer.addEventListener('touchend', this.onTouchEnd, false);                                                          // 124
	layer.addEventListener('touchcancel', this.onTouchCancel, false);                                                    // 125
                                                                                                                      // 126
	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)                  // 127
	// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick              // 128
	// layer when they are cancelled.                                                                                    // 129
	if (!Event.prototype.stopImmediatePropagation) {                                                                     // 130
		layer.removeEventListener = function(type, callback, capture) {                                                     // 131
			var rmv = Node.prototype.removeEventListener;                                                                      // 132
			if (type === 'click') {                                                                                            // 133
				rmv.call(layer, type, callback.hijacked || callback, capture);                                                    // 134
			} else {                                                                                                           // 135
				rmv.call(layer, type, callback, capture);                                                                         // 136
			}                                                                                                                  // 137
		};                                                                                                                  // 138
                                                                                                                      // 139
		layer.addEventListener = function(type, callback, capture) {                                                        // 140
			var adv = Node.prototype.addEventListener;                                                                         // 141
			if (type === 'click') {                                                                                            // 142
				adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {                                 // 143
					if (!event.propagationStopped) {                                                                                 // 144
						callback(event);                                                                                                // 145
					}                                                                                                                // 146
				}), capture);                                                                                                     // 147
			} else {                                                                                                           // 148
				adv.call(layer, type, callback, capture);                                                                         // 149
			}                                                                                                                  // 150
		};                                                                                                                  // 151
	}                                                                                                                    // 152
                                                                                                                      // 153
	// If a handler is already declared in the element's onclick attribute, it will be fired before                      // 154
	// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and                        // 155
	// adding it as listener.                                                                                            // 156
	if (typeof layer.onclick === 'function') {                                                                           // 157
                                                                                                                      // 158
		// Android browser on at least 3.2 requires a new reference to the function in layer.onclick                        // 159
		// - the old one won't work if passed to addEventListener directly.                                                 // 160
		oldOnClick = layer.onclick;                                                                                         // 161
		layer.addEventListener('click', function(event) {                                                                   // 162
			oldOnClick(event);                                                                                                 // 163
		}, false);                                                                                                          // 164
		layer.onclick = null;                                                                                               // 165
	}                                                                                                                    // 166
}                                                                                                                     // 167
                                                                                                                      // 168
                                                                                                                      // 169
/**                                                                                                                   // 170
 * Android requires exceptions.                                                                                       // 171
 *                                                                                                                    // 172
 * @type boolean                                                                                                      // 173
 */                                                                                                                   // 174
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;                                     // 175
                                                                                                                      // 176
                                                                                                                      // 177
/**                                                                                                                   // 178
 * iOS requires exceptions.                                                                                           // 179
 *                                                                                                                    // 180
 * @type boolean                                                                                                      // 181
 */                                                                                                                   // 182
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);                                         // 183
                                                                                                                      // 184
                                                                                                                      // 185
/**                                                                                                                   // 186
 * iOS 4 requires an exception for select elements.                                                                   // 187
 *                                                                                                                    // 188
 * @type boolean                                                                                                      // 189
 */                                                                                                                   // 190
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);    // 191
                                                                                                                      // 192
                                                                                                                      // 193
/**                                                                                                                   // 194
 * iOS 6.0(+?) requires the target element to be manually derived                                                     // 195
 *                                                                                                                    // 196
 * @type boolean                                                                                                      // 197
 */                                                                                                                   // 198
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);
                                                                                                                      // 200
                                                                                                                      // 201
/**                                                                                                                   // 202
 * Determine whether a given element requires a native click.                                                         // 203
 *                                                                                                                    // 204
 * @param {EventTarget|Element} target Target DOM element                                                             // 205
 * @returns {boolean} Returns true if the element needs a native click                                                // 206
 */                                                                                                                   // 207
FastClick.prototype.needsClick = function(target) {                                                                   // 208
	'use strict';                                                                                                        // 209
	switch (target.nodeName.toLowerCase()) {                                                                             // 210
                                                                                                                      // 211
	// Don't send a synthetic click to disabled inputs (issue #62)                                                       // 212
	case 'button':                                                                                                       // 213
	case 'select':                                                                                                       // 214
	case 'textarea':                                                                                                     // 215
		if (target.disabled) {                                                                                              // 216
			return true;                                                                                                       // 217
		}                                                                                                                   // 218
                                                                                                                      // 219
		break;                                                                                                              // 220
	case 'input':                                                                                                        // 221
                                                                                                                      // 222
		// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)                                           // 223
		if ((this.deviceIsIOS && target.type === 'file') || target.disabled) {                                              // 224
			return true;                                                                                                       // 225
		}                                                                                                                   // 226
                                                                                                                      // 227
		break;                                                                                                              // 228
	case 'label':                                                                                                        // 229
	case 'video':                                                                                                        // 230
		return true;                                                                                                        // 231
	}                                                                                                                    // 232
                                                                                                                      // 233
	return (/\bneedsclick\b/).test(target.className);                                                                    // 234
};                                                                                                                    // 235
                                                                                                                      // 236
                                                                                                                      // 237
/**                                                                                                                   // 238
 * Determine whether a given element requires a call to focus to simulate click into element.                         // 239
 *                                                                                                                    // 240
 * @param {EventTarget|Element} target Target DOM element                                                             // 241
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.                  // 242
 */                                                                                                                   // 243
FastClick.prototype.needsFocus = function(target) {                                                                   // 244
	'use strict';                                                                                                        // 245
	switch (target.nodeName.toLowerCase()) {                                                                             // 246
	case 'textarea':                                                                                                     // 247
		return true;                                                                                                        // 248
	case 'select':                                                                                                       // 249
		return !this.deviceIsAndroid;                                                                                       // 250
	case 'input':                                                                                                        // 251
		switch (target.type) {                                                                                              // 252
		case 'button':                                                                                                      // 253
		case 'checkbox':                                                                                                    // 254
		case 'file':                                                                                                        // 255
		case 'image':                                                                                                       // 256
		case 'radio':                                                                                                       // 257
		case 'submit':                                                                                                      // 258
			return false;                                                                                                      // 259
		}                                                                                                                   // 260
                                                                                                                      // 261
		// No point in attempting to focus disabled inputs                                                                  // 262
		return !target.disabled && !target.readOnly;                                                                        // 263
	default:                                                                                                             // 264
		return (/\bneedsfocus\b/).test(target.className);                                                                   // 265
	}                                                                                                                    // 266
};                                                                                                                    // 267
                                                                                                                      // 268
                                                                                                                      // 269
/**                                                                                                                   // 270
 * Send a click event to the specified element.                                                                       // 271
 *                                                                                                                    // 272
 * @param {EventTarget|Element} targetElement                                                                         // 273
 * @param {Event} event                                                                                               // 274
 */                                                                                                                   // 275
FastClick.prototype.sendClick = function(targetElement, event) {                                                      // 276
	'use strict';                                                                                                        // 277
	var clickEvent, touch;                                                                                               // 278
                                                                                                                      // 279
	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24) // 280
	if (document.activeElement && document.activeElement !== targetElement) {                                            // 281
		document.activeElement.blur();                                                                                      // 282
	}                                                                                                                    // 283
                                                                                                                      // 284
	touch = event.changedTouches[0];                                                                                     // 285
                                                                                                                      // 286
	// Synthesise a click event, with an extra attribute so it can be tracked                                            // 287
	clickEvent = document.createEvent('MouseEvents');                                                                    // 288
	clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	clickEvent.forwardedTouchEvent = true;                                                                               // 290
	targetElement.dispatchEvent(clickEvent);                                                                             // 291
};                                                                                                                    // 292
                                                                                                                      // 293
FastClick.prototype.determineEventType = function(targetElement) {                                                    // 294
	'use strict';                                                                                                        // 295
                                                                                                                      // 296
	//Issue #159: Android Chrome Select Box does not open with a synthetic click event                                   // 297
	if (this.deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {                                      // 298
		return 'mousedown';                                                                                                 // 299
	}                                                                                                                    // 300
                                                                                                                      // 301
	return 'click';                                                                                                      // 302
};                                                                                                                    // 303
                                                                                                                      // 304
                                                                                                                      // 305
/**                                                                                                                   // 306
 * @param {EventTarget|Element} targetElement                                                                         // 307
 */                                                                                                                   // 308
FastClick.prototype.focus = function(targetElement) {                                                                 // 309
	'use strict';                                                                                                        // 310
	var length;                                                                                                          // 311
                                                                                                                      // 312
	// Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
	if (this.deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time') {
		length = targetElement.value.length;                                                                                // 315
		targetElement.setSelectionRange(length, length);                                                                    // 316
	} else {                                                                                                             // 317
		targetElement.focus();                                                                                              // 318
	}                                                                                                                    // 319
};                                                                                                                    // 320
                                                                                                                      // 321
                                                                                                                      // 322
/**                                                                                                                   // 323
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.               // 324
 *                                                                                                                    // 325
 * @param {EventTarget|Element} targetElement                                                                         // 326
 */                                                                                                                   // 327
FastClick.prototype.updateScrollParent = function(targetElement) {                                                    // 328
	'use strict';                                                                                                        // 329
	var scrollParent, parentElement;                                                                                     // 330
                                                                                                                      // 331
	scrollParent = targetElement.fastClickScrollParent;                                                                  // 332
                                                                                                                      // 333
	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the            // 334
	// target element was moved to another parent.                                                                       // 335
	if (!scrollParent || !scrollParent.contains(targetElement)) {                                                        // 336
		parentElement = targetElement;                                                                                      // 337
		do {                                                                                                                // 338
			if (parentElement.scrollHeight > parentElement.offsetHeight) {                                                     // 339
				scrollParent = parentElement;                                                                                     // 340
				targetElement.fastClickScrollParent = parentElement;                                                              // 341
				break;                                                                                                            // 342
			}                                                                                                                  // 343
                                                                                                                      // 344
			parentElement = parentElement.parentElement;                                                                       // 345
		} while (parentElement);                                                                                            // 346
	}                                                                                                                    // 347
                                                                                                                      // 348
	// Always update the scroll top tracker if possible.                                                                 // 349
	if (scrollParent) {                                                                                                  // 350
		scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;                                                       // 351
	}                                                                                                                    // 352
};                                                                                                                    // 353
                                                                                                                      // 354
                                                                                                                      // 355
/**                                                                                                                   // 356
 * @param {EventTarget} targetElement                                                                                 // 357
 * @returns {Element|EventTarget}                                                                                     // 358
 */                                                                                                                   // 359
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {                                         // 360
	'use strict';                                                                                                        // 361
                                                                                                                      // 362
	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.           // 363
	if (eventTarget.nodeType === Node.TEXT_NODE) {                                                                       // 364
		return eventTarget.parentNode;                                                                                      // 365
	}                                                                                                                    // 366
                                                                                                                      // 367
	return eventTarget;                                                                                                  // 368
};                                                                                                                    // 369
                                                                                                                      // 370
                                                                                                                      // 371
/**                                                                                                                   // 372
 * On touch start, record the position and scroll offset.                                                             // 373
 *                                                                                                                    // 374
 * @param {Event} event                                                                                               // 375
 * @returns {boolean}                                                                                                 // 376
 */                                                                                                                   // 377
FastClick.prototype.onTouchStart = function(event) {                                                                  // 378
	'use strict';                                                                                                        // 379
	var targetElement, touch, selection;                                                                                 // 380
                                                                                                                      // 381
	// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	if (event.targetTouches.length > 1) {                                                                                // 383
		return true;                                                                                                        // 384
	}                                                                                                                    // 385
                                                                                                                      // 386
	targetElement = this.getTargetElementFromEventTarget(event.target);                                                  // 387
	touch = event.targetTouches[0];                                                                                      // 388
                                                                                                                      // 389
	if (this.deviceIsIOS) {                                                                                              // 390
                                                                                                                      // 391
		// Only trusted events will deselect text on iOS (issue #49)                                                        // 392
		selection = window.getSelection();                                                                                  // 393
		if (selection.rangeCount && !selection.isCollapsed) {                                                               // 394
			return true;                                                                                                       // 395
		}                                                                                                                   // 396
                                                                                                                      // 397
		if (!this.deviceIsIOS4) {                                                                                           // 398
                                                                                                                      // 399
			// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):   // 400
			// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched            // 401
			// with the same identifier as the touch event that previously triggered the click that triggered the alert.       // 402
			// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an        // 403
			// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.                    // 404
			if (touch.identifier === this.lastTouchIdentifier) {                                                               // 405
				event.preventDefault();                                                                                           // 406
				return false;                                                                                                     // 407
			}                                                                                                                  // 408
                                                                                                                      // 409
			this.lastTouchIdentifier = touch.identifier;                                                                       // 410
                                                                                                                      // 411
			// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:           // 412
			// 1) the user does a fling scroll on the scrollable layer                                                         // 413
			// 2) the user stops the fling scroll with another tap                                                             // 414
			// then the event.target of the last 'touchend' event will be the element that was under the user's finger         // 415
			// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check       // 416
			// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).            // 417
			this.updateScrollParent(targetElement);                                                                            // 418
		}                                                                                                                   // 419
	}                                                                                                                    // 420
                                                                                                                      // 421
	this.trackingClick = true;                                                                                           // 422
	this.trackingClickStart = event.timeStamp;                                                                           // 423
	this.targetElement = targetElement;                                                                                  // 424
                                                                                                                      // 425
	this.touchStartX = touch.pageX;                                                                                      // 426
	this.touchStartY = touch.pageY;                                                                                      // 427
                                                                                                                      // 428
	// Prevent phantom clicks on fast double-tap (issue #36)                                                             // 429
	if ((event.timeStamp - this.lastClickTime) < 200) {                                                                  // 430
		event.preventDefault();                                                                                             // 431
	}                                                                                                                    // 432
                                                                                                                      // 433
	return true;                                                                                                         // 434
};                                                                                                                    // 435
                                                                                                                      // 436
                                                                                                                      // 437
/**                                                                                                                   // 438
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.             // 439
 *                                                                                                                    // 440
 * @param {Event} event                                                                                               // 441
 * @returns {boolean}                                                                                                 // 442
 */                                                                                                                   // 443
FastClick.prototype.touchHasMoved = function(event) {                                                                 // 444
	'use strict';                                                                                                        // 445
	var touch = event.changedTouches[0], boundary = this.touchBoundary;                                                  // 446
                                                                                                                      // 447
	if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {    // 448
		return true;                                                                                                        // 449
	}                                                                                                                    // 450
                                                                                                                      // 451
	return false;                                                                                                        // 452
};                                                                                                                    // 453
                                                                                                                      // 454
                                                                                                                      // 455
/**                                                                                                                   // 456
 * Update the last position.                                                                                          // 457
 *                                                                                                                    // 458
 * @param {Event} event                                                                                               // 459
 * @returns {boolean}                                                                                                 // 460
 */                                                                                                                   // 461
FastClick.prototype.onTouchMove = function(event) {                                                                   // 462
	'use strict';                                                                                                        // 463
	if (!this.trackingClick) {                                                                                           // 464
		return true;                                                                                                        // 465
	}                                                                                                                    // 466
                                                                                                                      // 467
	// If the touch has moved, cancel the click tracking                                                                 // 468
	if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {        // 469
		this.trackingClick = false;                                                                                         // 470
		this.targetElement = null;                                                                                          // 471
	}                                                                                                                    // 472
                                                                                                                      // 473
	return true;                                                                                                         // 474
};                                                                                                                    // 475
                                                                                                                      // 476
                                                                                                                      // 477
/**                                                                                                                   // 478
 * Attempt to find the labelled control for the given label element.                                                  // 479
 *                                                                                                                    // 480
 * @param {EventTarget|HTMLLabelElement} labelElement                                                                 // 481
 * @returns {Element|null}                                                                                            // 482
 */                                                                                                                   // 483
FastClick.prototype.findControl = function(labelElement) {                                                            // 484
	'use strict';                                                                                                        // 485
                                                                                                                      // 486
	// Fast path for newer browsers supporting the HTML5 control attribute                                               // 487
	if (labelElement.control !== undefined) {                                                                            // 488
		return labelElement.control;                                                                                        // 489
	}                                                                                                                    // 490
                                                                                                                      // 491
	// All browsers under test that support touch events also support the HTML5 htmlFor attribute                        // 492
	if (labelElement.htmlFor) {                                                                                          // 493
		return document.getElementById(labelElement.htmlFor);                                                               // 494
	}                                                                                                                    // 495
                                                                                                                      // 496
	// If no for attribute exists, attempt to retrieve the first labellable descendant element                           // 497
	// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label                           // 498
	return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};                                                                                                                    // 500
                                                                                                                      // 501
                                                                                                                      // 502
/**                                                                                                                   // 503
 * On touch end, determine whether to send a click event at once.                                                     // 504
 *                                                                                                                    // 505
 * @param {Event} event                                                                                               // 506
 * @returns {boolean}                                                                                                 // 507
 */                                                                                                                   // 508
FastClick.prototype.onTouchEnd = function(event) {                                                                    // 509
	'use strict';                                                                                                        // 510
	var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;          // 511
                                                                                                                      // 512
	if (!this.trackingClick) {                                                                                           // 513
		return true;                                                                                                        // 514
	}                                                                                                                    // 515
                                                                                                                      // 516
	// Prevent phantom clicks on fast double-tap (issue #36)                                                             // 517
	if ((event.timeStamp - this.lastClickTime) < 200) {                                                                  // 518
		this.cancelNextClick = true;                                                                                        // 519
		return true;                                                                                                        // 520
	}                                                                                                                    // 521
                                                                                                                      // 522
	// Reset to prevent wrong click cancel on input (issue #156).                                                        // 523
	this.cancelNextClick = false;                                                                                        // 524
                                                                                                                      // 525
	this.lastClickTime = event.timeStamp;                                                                                // 526
                                                                                                                      // 527
	trackingClickStart = this.trackingClickStart;                                                                        // 528
	this.trackingClick = false;                                                                                          // 529
	this.trackingClickStart = 0;                                                                                         // 530
                                                                                                                      // 531
	// On some iOS devices, the targetElement supplied with the event is invalid if the layer                            // 532
	// is performing a transition or scroll, and has to be re-detected manually. Note that                               // 533
	// for this to function correctly, it must be called *after* the event target is checked!                            // 534
	// See issue #57; also filed as rdar://13048589 .                                                                    // 535
	if (this.deviceIsIOSWithBadTarget) {                                                                                 // 536
		touch = event.changedTouches[0];                                                                                    // 537
                                                                                                                      // 538
		// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null         // 539
		targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
		targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;                                     // 541
	}                                                                                                                    // 542
                                                                                                                      // 543
	targetTagName = targetElement.tagName.toLowerCase();                                                                 // 544
	if (targetTagName === 'label') {                                                                                     // 545
		forElement = this.findControl(targetElement);                                                                       // 546
		if (forElement) {                                                                                                   // 547
			this.focus(targetElement);                                                                                         // 548
			if (this.deviceIsAndroid) {                                                                                        // 549
				return false;                                                                                                     // 550
			}                                                                                                                  // 551
                                                                                                                      // 552
			targetElement = forElement;                                                                                        // 553
		}                                                                                                                   // 554
	} else if (this.needsFocus(targetElement)) {                                                                         // 555
                                                                                                                      // 556
		// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
		// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
		if ((event.timeStamp - trackingClickStart) > 100 || (this.deviceIsIOS && window.top !== window && targetTagName === 'input')) {
			this.targetElement = null;                                                                                         // 560
			return false;                                                                                                      // 561
		}                                                                                                                   // 562
                                                                                                                      // 563
		this.focus(targetElement);                                                                                          // 564
                                                                                                                      // 565
		// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.                   // 566
		if (!this.deviceIsIOS4 || targetTagName !== 'select') {                                                             // 567
			this.targetElement = null;                                                                                         // 568
			event.preventDefault();                                                                                            // 569
		}                                                                                                                   // 570
                                                                                                                      // 571
		return false;                                                                                                       // 572
	}                                                                                                                    // 573
                                                                                                                      // 574
	if (this.deviceIsIOS && !this.deviceIsIOS4) {                                                                        // 575
                                                                                                                      // 576
		// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled    // 577
		// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).                     // 578
		scrollParent = targetElement.fastClickScrollParent;                                                                 // 579
		if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {                               // 580
			return true;                                                                                                       // 581
		}                                                                                                                   // 582
	}                                                                                                                    // 583
                                                                                                                      // 584
	// Prevent the actual click from going though - unless the target node is marked as requiring                        // 585
	// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.                // 586
	if (!this.needsClick(targetElement)) {                                                                               // 587
		event.preventDefault();                                                                                             // 588
		this.sendClick(targetElement, event);                                                                               // 589
	}                                                                                                                    // 590
                                                                                                                      // 591
	return false;                                                                                                        // 592
};                                                                                                                    // 593
                                                                                                                      // 594
                                                                                                                      // 595
/**                                                                                                                   // 596
 * On touch cancel, stop tracking the click.                                                                          // 597
 *                                                                                                                    // 598
 * @returns {void}                                                                                                    // 599
 */                                                                                                                   // 600
FastClick.prototype.onTouchCancel = function() {                                                                      // 601
	'use strict';                                                                                                        // 602
	this.trackingClick = false;                                                                                          // 603
	this.targetElement = null;                                                                                           // 604
};                                                                                                                    // 605
                                                                                                                      // 606
                                                                                                                      // 607
/**                                                                                                                   // 608
 * Determine mouse events which should be permitted.                                                                  // 609
 *                                                                                                                    // 610
 * @param {Event} event                                                                                               // 611
 * @returns {boolean}                                                                                                 // 612
 */                                                                                                                   // 613
FastClick.prototype.onMouse = function(event) {                                                                       // 614
	'use strict';                                                                                                        // 615
                                                                                                                      // 616
	// If a target element was never set (because a touch event was never fired) allow the event                         // 617
	if (!this.targetElement) {                                                                                           // 618
		return true;                                                                                                        // 619
	}                                                                                                                    // 620
                                                                                                                      // 621
	if (event.forwardedTouchEvent) {                                                                                     // 622
		return true;                                                                                                        // 623
	}                                                                                                                    // 624
                                                                                                                      // 625
	// Programmatically generated events targeting a specific element should be permitted                                // 626
	if (!event.cancelable) {                                                                                             // 627
		return true;                                                                                                        // 628
	}                                                                                                                    // 629
                                                                                                                      // 630
	// Derive and check the target element to see whether the mouse event needs to be permitted;                         // 631
	// unless explicitly enabled, prevent non-touch click events from triggering actions,                                // 632
	// to prevent ghost/doubleclicks.                                                                                    // 633
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {                                                  // 634
                                                                                                                      // 635
		// Prevent any user-added listeners declared on FastClick element from being fired.                                 // 636
		if (event.stopImmediatePropagation) {                                                                               // 637
			event.stopImmediatePropagation();                                                                                  // 638
		} else {                                                                                                            // 639
                                                                                                                      // 640
			// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)                // 641
			event.propagationStopped = true;                                                                                   // 642
		}                                                                                                                   // 643
                                                                                                                      // 644
		// Cancel the event                                                                                                 // 645
		event.stopPropagation();                                                                                            // 646
		event.preventDefault();                                                                                             // 647
                                                                                                                      // 648
		return false;                                                                                                       // 649
	}                                                                                                                    // 650
                                                                                                                      // 651
	// If the mouse event is permitted, return true for the action to go through.                                        // 652
	return true;                                                                                                         // 653
};                                                                                                                    // 654
                                                                                                                      // 655
                                                                                                                      // 656
/**                                                                                                                   // 657
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring                      // 658
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or                       // 659
 * an actual click which should be permitted.                                                                         // 660
 *                                                                                                                    // 661
 * @param {Event} event                                                                                               // 662
 * @returns {boolean}                                                                                                 // 663
 */                                                                                                                   // 664
FastClick.prototype.onClick = function(event) {                                                                       // 665
	'use strict';                                                                                                        // 666
	var permitted;                                                                                                       // 667
                                                                                                                      // 668
	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	if (this.trackingClick) {                                                                                            // 670
		this.targetElement = null;                                                                                          // 671
		this.trackingClick = false;                                                                                         // 672
		return true;                                                                                                        // 673
	}                                                                                                                    // 674
                                                                                                                      // 675
	// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	if (event.target.type === 'submit' && event.detail === 0) {                                                          // 677
		return true;                                                                                                        // 678
	}                                                                                                                    // 679
                                                                                                                      // 680
	permitted = this.onMouse(event);                                                                                     // 681
                                                                                                                      // 682
	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	if (!permitted) {                                                                                                    // 684
		this.targetElement = null;                                                                                          // 685
	}                                                                                                                    // 686
                                                                                                                      // 687
	// If clicks are permitted, return true for the action to go through.                                                // 688
	return permitted;                                                                                                    // 689
};                                                                                                                    // 690
                                                                                                                      // 691
                                                                                                                      // 692
/**                                                                                                                   // 693
 * Remove all FastClick's event listeners.                                                                            // 694
 *                                                                                                                    // 695
 * @returns {void}                                                                                                    // 696
 */                                                                                                                   // 697
FastClick.prototype.destroy = function() {                                                                            // 698
	'use strict';                                                                                                        // 699
	var layer = this.layer;                                                                                              // 700
                                                                                                                      // 701
	if (this.deviceIsAndroid) {                                                                                          // 702
		layer.removeEventListener('mouseover', this.onMouse, true);                                                         // 703
		layer.removeEventListener('mousedown', this.onMouse, true);                                                         // 704
		layer.removeEventListener('mouseup', this.onMouse, true);                                                           // 705
	}                                                                                                                    // 706
                                                                                                                      // 707
	layer.removeEventListener('click', this.onClick, true);                                                              // 708
	layer.removeEventListener('touchstart', this.onTouchStart, false);                                                   // 709
	layer.removeEventListener('touchmove', this.onTouchMove, false);                                                     // 710
	layer.removeEventListener('touchend', this.onTouchEnd, false);                                                       // 711
	layer.removeEventListener('touchcancel', this.onTouchCancel, false);                                                 // 712
};                                                                                                                    // 713
                                                                                                                      // 714
                                                                                                                      // 715
/**                                                                                                                   // 716
 * Check whether FastClick is needed.                                                                                 // 717
 *                                                                                                                    // 718
 * @param {Element} layer The layer to listen on                                                                      // 719
 */                                                                                                                   // 720
FastClick.notNeeded = function(layer) {                                                                               // 721
	'use strict';                                                                                                        // 722
	var metaViewport;                                                                                                    // 723
	var chromeVersion;                                                                                                   // 724
                                                                                                                      // 725
	// Devices that don't support touch don't need FastClick                                                             // 726
	if (typeof window.ontouchstart === 'undefined') {                                                                    // 727
		return true;                                                                                                        // 728
	}                                                                                                                    // 729
                                                                                                                      // 730
	// Chrome version - zero for other browsers                                                                          // 731
	chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];                                          // 732
                                                                                                                      // 733
	if (chromeVersion) {                                                                                                 // 734
                                                                                                                      // 735
		if (FastClick.prototype.deviceIsAndroid) {                                                                          // 736
			metaViewport = document.querySelector('meta[name=viewport]');                                                      // 737
			                                                                                                                   // 738
			if (metaViewport) {                                                                                                // 739
				// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)                                   // 740
				if (metaViewport.content.indexOf('user-scalable=no') !== -1) {                                                    // 741
					return true;                                                                                                     // 742
				}                                                                                                                 // 743
				// Chrome 32 and above with width=device-width or less don't need FastClick                                       // 744
				if (chromeVersion > 31 && window.innerWidth <= window.screen.width) {                                             // 745
					return true;                                                                                                     // 746
				}                                                                                                                 // 747
			}                                                                                                                  // 748
                                                                                                                      // 749
		// Chrome desktop doesn't need FastClick (issue #15)                                                                // 750
		} else {                                                                                                            // 751
			return true;                                                                                                       // 752
		}                                                                                                                   // 753
	}                                                                                                                    // 754
                                                                                                                      // 755
	// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)                                   // 756
	if (layer.style.msTouchAction === 'none') {                                                                          // 757
		return true;                                                                                                        // 758
	}                                                                                                                    // 759
                                                                                                                      // 760
	return false;                                                                                                        // 761
};                                                                                                                    // 762
                                                                                                                      // 763
                                                                                                                      // 764
/**                                                                                                                   // 765
 * Factory method for creating a FastClick object                                                                     // 766
 *                                                                                                                    // 767
 * @param {Element} layer The layer to listen on                                                                      // 768
 */                                                                                                                   // 769
FastClick.attach = function(layer) {                                                                                  // 770
	'use strict';                                                                                                        // 771
	return new FastClick(layer);                                                                                         // 772
};                                                                                                                    // 773
                                                                                                                      // 774
                                                                                                                      // 775
if (typeof define !== 'undefined' && define.amd) {                                                                    // 776
                                                                                                                      // 777
	// AMD. Register as an anonymous module.                                                                             // 778
	define(function() {                                                                                                  // 779
		'use strict';                                                                                                       // 780
		return FastClick;                                                                                                   // 781
	});                                                                                                                  // 782
} else if (typeof module !== 'undefined' && module.exports) {                                                         // 783
	module.exports = FastClick.attach;                                                                                   // 784
	module.exports.FastClick = FastClick;                                                                                // 785
} else {                                                                                                              // 786
	window.FastClick = FastClick;                                                                                        // 787
}                                                                                                                     // 788
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/youtap/lib/scroll.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*!                                                                                                                   // 1
 * jQuery Scrollstop Plugin v1.1.0                                                                                    // 2
 * https://github.com/ssorallen/jquery-scrollstop                                                                     // 3
 */                                                                                                                   // 4
(function($) {                                                                                                        // 5
  // $.event.dispatch was undocumented and was deprecated in jQuery 1.7[1]. It                                        // 6
  // was replaced by $.event.handle in jQuery 1.9.                                                                    // 7
  //                                                                                                                  // 8
  // Use the first of the available functions to support jQuery <1.8.                                                 // 9
  //                                                                                                                  // 10
  // [1] https://github.com/jquery/jquery-migrate/blob/master/src/event.js#L25                                        // 11
  var dispatch = $.event.dispatch || $.event.handle;                                                                  // 12
                                                                                                                      // 13
  var special = $.event.special,                                                                                      // 14
      uid1 = 'D' + (+new Date()),                                                                                     // 15
      uid2 = 'D' + (+new Date() + 1);                                                                                 // 16
                                                                                                                      // 17
  special.scrollstart = {                                                                                             // 18
    setup: function(data) {                                                                                           // 19
      var _data = $.extend({                                                                                          // 20
        latency: special.scrollstop.latency                                                                           // 21
      }, data);                                                                                                       // 22
                                                                                                                      // 23
      var timer,                                                                                                      // 24
          handler = function(evt) {                                                                                   // 25
            var _self = this,                                                                                         // 26
                _args = arguments;                                                                                    // 27
                                                                                                                      // 28
            if (timer) {                                                                                              // 29
              clearTimeout(timer);                                                                                    // 30
            } else {                                                                                                  // 31
              evt.type = 'scrollstart';                                                                               // 32
              dispatch.apply(_self, _args);                                                                           // 33
            }                                                                                                         // 34
                                                                                                                      // 35
            timer = setTimeout(function() {                                                                           // 36
              timer = null;                                                                                           // 37
            }, _data.latency);                                                                                        // 38
          };                                                                                                          // 39
                                                                                                                      // 40
      $(this).bind('scroll', handler).data(uid1, handler);                                                            // 41
    },                                                                                                                // 42
    teardown: function() {                                                                                            // 43
      $(this).unbind('scroll', $(this).data(uid1));                                                                   // 44
    }                                                                                                                 // 45
  };                                                                                                                  // 46
                                                                                                                      // 47
  special.scrollstop = {                                                                                              // 48
    latency: 250,                                                                                                     // 49
    setup: function(data) {                                                                                           // 50
      var _data = $.extend({                                                                                          // 51
        latency: special.scrollstop.latency                                                                           // 52
      }, data);                                                                                                       // 53
                                                                                                                      // 54
      var timer,                                                                                                      // 55
          handler = function(evt) {                                                                                   // 56
            var _self = this,                                                                                         // 57
                _args = arguments;                                                                                    // 58
                                                                                                                      // 59
            if (timer) {                                                                                              // 60
              clearTimeout(timer);                                                                                    // 61
            }                                                                                                         // 62
                                                                                                                      // 63
            timer = setTimeout(function() {                                                                           // 64
              timer = null;                                                                                           // 65
              evt.type = 'scrollstop';                                                                                // 66
              dispatch.apply(_self, _args);                                                                           // 67
            }, _data.latency);                                                                                        // 68
          };                                                                                                          // 69
                                                                                                                      // 70
      $(this).bind('scroll', handler).data(uid2, handler);                                                            // 71
    },                                                                                                                // 72
    teardown: function() {                                                                                            // 73
      $(this).unbind('scroll', $(this).data(uid2));                                                                   // 74
    }                                                                                                                 // 75
  };                                                                                                                  // 76
                                                                                                                      // 77
})(jQuery);                                                                                                           // 78
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/youtap/lib/jquery.transit.min.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*!                                                                                                                   // 1
 * jQuery Transit - CSS3 transitions and transformations                                                              // 2
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>                                                                // 3
 * MIT Licensed.                                                                                                      // 4
 *                                                                                                                    // 5
 * http://ricostacruz.com/jquery.transit                                                                              // 6
 * http://github.com/rstacruz/jquery.transit                                                                          // 7
 */                                                                                                                   // 8
(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=true;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=false;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=true;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/youtap/lib/jquery.plugin.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* Simple JavaScript Inheritance                                                                                     // 1
 * By John Resig http://ejohn.org/                                                                                   // 2
 * MIT Licensed.                                                                                                     // 3
 */                                                                                                                  // 4
// Inspired by base2 and Prototype                                                                                   // 5
(function(){                                                                                                         // 6
	var initializing = false;                                                                                           // 7
                                                                                                                     // 8
	// The base JQClass implementation (does nothing)                                                                   // 9
	window.JQClass = function(){};                                                                                      // 10
                                                                                                                     // 11
	// Collection of derived classes                                                                                    // 12
	JQClass.classes = {};                                                                                               // 13
                                                                                                                     // 14
	// Create a new JQClass that inherits from this class                                                               // 15
	JQClass.extend = function extender(prop) {                                                                          // 16
		var base = this.prototype;                                                                                         // 17
                                                                                                                     // 18
		// Instantiate a base class (but only create the instance,                                                         // 19
		// don't run the init constructor)                                                                                 // 20
		initializing = true;                                                                                               // 21
		var prototype = new this();                                                                                        // 22
		initializing = false;                                                                                              // 23
                                                                                                                     // 24
		// Copy the properties over onto the new prototype                                                                 // 25
		for (var name in prop) {                                                                                           // 26
			// Check if we're overwriting an existing function                                                                // 27
			prototype[name] = typeof prop[name] == 'function' &&                                                              // 28
				typeof base[name] == 'function' ?                                                                                // 29
				(function(name, fn){                                                                                             // 30
					return function() {                                                                                             // 31
						var __super = this._super;                                                                                     // 32
                                                                                                                     // 33
						// Add a new ._super() method that is the same method                                                          // 34
						// but on the super-class                                                                                      // 35
						this._super = function(args) {                                                                                 // 36
							return base[name].apply(this, args);                                                                          // 37
						};                                                                                                             // 38
                                                                                                                     // 39
						var ret = fn.apply(this, arguments);				                                                                       // 40
                                                                                                                     // 41
						// The method only need to be bound temporarily, so we                                                         // 42
						// remove it when we're done executing                                                                         // 43
						this._super = __super;                                                                                         // 44
                                                                                                                     // 45
						return ret;                                                                                                    // 46
					};                                                                                                              // 47
				})(name, prop[name]) :                                                                                           // 48
				prop[name];                                                                                                      // 49
		}                                                                                                                  // 50
                                                                                                                     // 51
		// The dummy class constructor                                                                                     // 52
		function JQClass() {                                                                                               // 53
			// All construction is actually done in the init method                                                           // 54
			if (!initializing && this._init) {                                                                                // 55
				this._init.apply(this, arguments);                                                                               // 56
			}                                                                                                                 // 57
		}                                                                                                                  // 58
                                                                                                                     // 59
		// Populate our constructed prototype object                                                                       // 60
		JQClass.prototype = prototype;                                                                                     // 61
                                                                                                                     // 62
		// Enforce the constructor to be what we expect                                                                    // 63
		JQClass.prototype.constructor = JQClass;                                                                           // 64
                                                                                                                     // 65
		// And make this class extendable                                                                                  // 66
		JQClass.extend = extender;                                                                                         // 67
                                                                                                                     // 68
		return JQClass;                                                                                                    // 69
	};                                                                                                                  // 70
})();                                                                                                                // 71
                                                                                                                     // 72
(function($) { // Ensure $, encapsulate                                                                              // 73
                                                                                                                     // 74
	/** Abstract base class for collection plugins.                                                                     // 75
		Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.                                                      // 76
		Licensed under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license.                     // 77
		@module $.JQPlugin                                                                                                 // 78
		@abstract */                                                                                                       // 79
	JQClass.classes.JQPlugin = JQClass.extend({                                                                         // 80
                                                                                                                     // 81
		/** Name to identify this plugin.                                                                                  // 82
			@example name: 'tabs' */                                                                                          // 83
		name: 'plugin',                                                                                                    // 84
                                                                                                                     // 85
		/** Default options for instances of this plugin (default: {}).                                                    // 86
			@example defaultOptions: {                                                                                        // 87
 	selectedClass: 'selected',                                                                                         // 88
 	triggers: 'click'                                                                                                  // 89
 } */                                                                                                                // 90
		defaultOptions: {},                                                                                                // 91
		                                                                                                                   // 92
		/** Options dependent on the locale.                                                                               // 93
			Indexed by language and (optional) country code, with '' denoting the default language (English/US).              // 94
			@example regionalOptions: {                                                                                       // 95
	'': {                                                                                                               // 96
		greeting: 'Hi'                                                                                                     // 97
	}                                                                                                                   // 98
 } */                                                                                                                // 99
		regionalOptions: {},                                                                                               // 100
		                                                                                                                   // 101
		/** Names of getter methods - those that can't be chained (default: []).                                           // 102
			@example _getters: ['activeTab'] */                                                                               // 103
		_getters: [],                                                                                                      // 104
                                                                                                                     // 105
		/** Retrieve a marker class for affected elements.                                                                 // 106
			@private                                                                                                          // 107
			@return {string} The marker class. */                                                                             // 108
		_getMarker: function() {                                                                                           // 109
			return 'is-' + this.name;                                                                                         // 110
		},                                                                                                                 // 111
		                                                                                                                   // 112
		/** Initialise the plugin.                                                                                         // 113
			Create the jQuery bridge - plugin name <code>xyz</code>                                                           // 114
			produces <code>$.xyz</code> and <code>$.fn.xyz</code>. */                                                         // 115
		_init: function() {                                                                                                // 116
			// Apply default localisations                                                                                    // 117
			$.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});                          // 118
			// Camel-case the name                                                                                            // 119
			var jqName = camelCase(this.name);                                                                                // 120
			// Expose jQuery singleton manager                                                                                // 121
			$[jqName] = this;                                                                                                 // 122
			// Expose jQuery collection plugin                                                                                // 123
			$.fn[jqName] = function(options) {                                                                                // 124
				var otherArgs = Array.prototype.slice.call(arguments, 1);                                                        // 125
				if ($[jqName]._isNotChained(options, otherArgs)) {                                                               // 126
					return $[jqName][options].apply($[jqName], [this[0]].concat(otherArgs));                                        // 127
				}                                                                                                                // 128
				return this.each(function() {                                                                                    // 129
					if (typeof options === 'string') {                                                                              // 130
						if (options[0] === '_' || !$[jqName][options]) {                                                               // 131
							throw 'Unknown method: ' + options;                                                                           // 132
						}                                                                                                              // 133
						$[jqName][options].apply($[jqName], [this].concat(otherArgs));                                                 // 134
					}                                                                                                               // 135
					else {                                                                                                          // 136
						$[jqName]._attach(this, options);                                                                              // 137
					}                                                                                                               // 138
				});                                                                                                              // 139
			};                                                                                                                // 140
		},                                                                                                                 // 141
                                                                                                                     // 142
		/** Set default values for all subsequent instances.                                                               // 143
			@param options {object} The new default options.                                                                  // 144
			@example $.plugin.setDefauls({name: value}) */                                                                    // 145
		setDefaults: function(options) {                                                                                   // 146
			$.extend(this.defaultOptions, options || {});                                                                     // 147
		},                                                                                                                 // 148
		                                                                                                                   // 149
		/** Determine whether a method is a getter and doesn't permit chaining.                                            // 150
			@private                                                                                                          // 151
			@param name {string} The method name.                                                                             // 152
			@param otherArgs {any[]} Any other arguments for the method.                                                      // 153
			@return {boolean} True if this method is a getter, false otherwise. */                                            // 154
		_isNotChained: function(name, otherArgs) {                                                                         // 155
			if (name === 'option' && (otherArgs.length === 0 ||                                                               // 156
					(otherArgs.length === 1 && typeof otherArgs[0] === 'string'))) {                                                // 157
				return true;                                                                                                     // 158
			}                                                                                                                 // 159
			return $.inArray(name, this._getters) > -1;                                                                       // 160
		},                                                                                                                 // 161
		                                                                                                                   // 162
		/** Initialise an element. Called internally only.                                                                 // 163
			Adds an instance object as data named for the plugin.                                                             // 164
			@param elem {Element} The element to enhance.                                                                     // 165
			@param options {object} Overriding settings. */                                                                   // 166
		_attach: function(elem, options) {                                                                                 // 167
			elem = $(elem);                                                                                                   // 168
			if (elem.hasClass(this._getMarker())) {                                                                           // 169
				return;                                                                                                          // 170
			}                                                                                                                 // 171
			elem.addClass(this._getMarker());                                                                                 // 172
			options = $.extend({}, this.defaultOptions, this._getMetadata(elem), options || {});                              // 173
			var inst = $.extend({name: this.name, elem: elem, options: options},                                              // 174
				this._instSettings(elem, options));                                                                              // 175
			elem.data(this.name, inst); // Save instance against element                                                      // 176
			this._postAttach(elem, inst);                                                                                     // 177
			this.option(elem, options);                                                                                       // 178
		},                                                                                                                 // 179
                                                                                                                     // 180
		/** Retrieve additional instance settings.                                                                         // 181
			Override this in a sub-class to provide extra settings.                                                           // 182
			@param elem {jQuery} The current jQuery element.                                                                  // 183
			@param options {object} The instance options.                                                                     // 184
			@return {object} Any extra instance values.                                                                       // 185
			@example _instSettings: function(elem, options) {                                                                 // 186
 	return {nav: elem.find(options.navSelector)};                                                                      // 187
 } */                                                                                                                // 188
		_instSettings: function(elem, options) {                                                                           // 189
			return {};                                                                                                        // 190
		},                                                                                                                 // 191
                                                                                                                     // 192
		/** Plugin specific post initialisation.                                                                           // 193
			Override this in a sub-class to perform extra activities.                                                         // 194
			@param elem {jQuery} The current jQuery element.                                                                  // 195
			@param inst {object} The instance settings.                                                                       // 196
			@example _postAttach: function(elem, inst) {                                                                      // 197
 	elem.on('click.' + this.name, function() {                                                                         // 198
 		...                                                                                                               // 199
 	});                                                                                                                // 200
 } */                                                                                                                // 201
		_postAttach: function(elem, inst) {                                                                                // 202
		},                                                                                                                 // 203
                                                                                                                     // 204
		/** Retrieve metadata configuration from the element.                                                              // 205
			Metadata is specified as an attribute:                                                                            // 206
			<code>data-&lt;plugin name>="&lt;setting name>: '&lt;value>', ..."</code>.                                        // 207
			Dates should be specified as strings in this format: 'new Date(y, m-1, d)'.                                       // 208
			@private                                                                                                          // 209
			@param elem {jQuery} The source element.                                                                          // 210
			@return {object} The inline configuration or {}. */                                                               // 211
		_getMetadata: function(elem) {                                                                                     // 212
			try {                                                                                                             // 213
				var data = elem.data(this.name.toLowerCase()) || '';                                                             // 214
				data = data.replace(/'/g, '"');                                                                                  // 215
				data = data.replace(/([a-zA-Z0-9]+):/g, function(match, group, i) {                                              // 216
					var count = data.substring(0, i).match(/"/g); // Handle embedded ':'                                            // 217
					return (!count || count.length % 2 === 0 ? '"' + group + '":' : group + ':');                                   // 218
				});                                                                                                              // 219
				data = $.parseJSON('{' + data + '}');                                                                            // 220
				for (var name in data) { // Convert dates                                                                        // 221
					var value = data[name];                                                                                         // 222
					if (typeof value === 'string' && value.match(/^new Date\((.*)\)$/)) {                                           // 223
						data[name] = eval(value);                                                                                      // 224
					}                                                                                                               // 225
				}                                                                                                                // 226
				return data;                                                                                                     // 227
			}                                                                                                                 // 228
			catch (e) {                                                                                                       // 229
				return {};                                                                                                       // 230
			}                                                                                                                 // 231
		},                                                                                                                 // 232
                                                                                                                     // 233
		/** Retrieve the instance data for element.                                                                        // 234
			@param elem {Element} The source element.                                                                         // 235
			@return {object} The instance data or {}. */                                                                      // 236
		_getInst: function(elem) {                                                                                         // 237
			return $(elem).data(this.name) || {};                                                                             // 238
		},                                                                                                                 // 239
		                                                                                                                   // 240
		/** Retrieve or reconfigure the settings for a plugin.                                                             // 241
			@param elem {Element} The source element.                                                                         // 242
			@param name {object|string} The collection of new option values or the name of a single option.                   // 243
			@param [value] {any} The value for a single named option.                                                         // 244
			@return {any|object} If retrieving a single value or all options.                                                 // 245
			@example $(selector).plugin('option', 'name', value)                                                              // 246
 $(selector).plugin('option', {name: value, ...})                                                                    // 247
 var value = $(selector).plugin('option', 'name')                                                                    // 248
 var options = $(selector).plugin('option') */                                                                       // 249
		option: function(elem, name, value) {                                                                              // 250
			elem = $(elem);                                                                                                   // 251
			var inst = elem.data(this.name);                                                                                  // 252
			if  (!name || (typeof name === 'string' && value == null)) {                                                      // 253
				var options = (inst || {}).options;                                                                              // 254
				return (options && name ? options[name] : options);                                                              // 255
			}                                                                                                                 // 256
			if (!elem.hasClass(this._getMarker())) {                                                                          // 257
				return;                                                                                                          // 258
			}                                                                                                                 // 259
			var options = name || {};                                                                                         // 260
			if (typeof name === 'string') {                                                                                   // 261
				options = {};                                                                                                    // 262
				options[name] = value;                                                                                           // 263
			}                                                                                                                 // 264
			this._optionsChanged(elem, inst, options);                                                                        // 265
			$.extend(inst.options, options);                                                                                  // 266
		},                                                                                                                 // 267
		                                                                                                                   // 268
		/** Plugin specific options processing.                                                                            // 269
			Old value available in <code>inst.options[name]</code>, new value in <code>options[name]</code>.                  // 270
			Override this in a sub-class to perform extra activities.                                                         // 271
			@param elem {jQuery} The current jQuery element.                                                                  // 272
			@param inst {object} The instance settings.                                                                       // 273
			@param options {object} The new options.                                                                          // 274
			@example _optionsChanged: function(elem, inst, options) {                                                         // 275
 	if (options.name != inst.options.name) {                                                                           // 276
 		elem.removeClass(inst.options.name).addClass(options.name);                                                       // 277
 	}                                                                                                                  // 278
 } */                                                                                                                // 279
		_optionsChanged: function(elem, inst, options) {                                                                   // 280
		},                                                                                                                 // 281
		                                                                                                                   // 282
		/** Remove all trace of the plugin.                                                                                // 283
			Override <code>_preDestroy</code> for plugin-specific processing.                                                 // 284
			@param elem {Element} The source element.                                                                         // 285
			@example $(selector).plugin('destroy') */                                                                         // 286
		destroy: function(elem) {                                                                                          // 287
			elem = $(elem);                                                                                                   // 288
			if (!elem.hasClass(this._getMarker())) {                                                                          // 289
				return;                                                                                                          // 290
			}                                                                                                                 // 291
			this._preDestroy(elem, this._getInst(elem));                                                                      // 292
			elem.removeData(this.name).removeClass(this._getMarker());                                                        // 293
		},                                                                                                                 // 294
                                                                                                                     // 295
		/** Plugin specific pre destruction.                                                                               // 296
			Override this in a sub-class to perform extra activities and undo everything that was                             // 297
			done in the <code>_postAttach</code> or <code>_optionsChanged</code> functions.                                   // 298
			@param elem {jQuery} The current jQuery element.                                                                  // 299
			@param inst {object} The instance settings.                                                                       // 300
			@example _preDestroy: function(elem, inst) {                                                                      // 301
 	elem.off('.' + this.name);                                                                                         // 302
 } */                                                                                                                // 303
		_preDestroy: function(elem, inst) {                                                                                // 304
		}                                                                                                                  // 305
	});                                                                                                                 // 306
	                                                                                                                    // 307
	/** Convert names from hyphenated to camel-case.                                                                    // 308
		@private                                                                                                           // 309
		@param value {string} The original hyphenated name.                                                                // 310
		@return {string} The camel-case version. */                                                                        // 311
	function camelCase(name) {                                                                                          // 312
		return name.replace(/-([a-z])/g, function(match, group) {                                                          // 313
			return group.toUpperCase();                                                                                       // 314
		});                                                                                                                // 315
	}                                                                                                                   // 316
	                                                                                                                    // 317
	/** Expose the plugin base.                                                                                         // 318
		@namespace "$.JQPlugin" */                                                                                         // 319
	$.JQPlugin = {                                                                                                      // 320
	                                                                                                                    // 321
		/** Create a new collection plugin.                                                                                // 322
			@memberof "$.JQPlugin"                                                                                            // 323
			@param [superClass='JQPlugin'] {string} The name of the parent class to inherit from.                             // 324
			@param overrides {object} The property/function overrides for the new class.                                      // 325
			@example $.JQPlugin.createPlugin({                                                                                // 326
 	name: 'tabs',                                                                                                      // 327
 	defaultOptions: {selectedClass: 'selected'},                                                                       // 328
 	_initSettings: function(elem, options) { return {...}; },                                                          // 329
 	_postAttach: function(elem, inst) { ... }                                                                          // 330
 }); */                                                                                                              // 331
		createPlugin: function(superClass, overrides) {                                                                    // 332
			if (typeof superClass === 'object') {                                                                             // 333
				overrides = superClass;                                                                                          // 334
				superClass = 'JQPlugin';                                                                                         // 335
			}                                                                                                                 // 336
			superClass = camelCase(superClass);                                                                               // 337
			var className = camelCase(overrides.name);                                                                        // 338
			JQClass.classes[className] = JQClass.classes[superClass].extend(overrides);                                       // 339
			new JQClass.classes[className]();                                                                                 // 340
		}                                                                                                                  // 341
	};                                                                                                                  // 342
                                                                                                                     // 343
})(jQuery);                                                                                                           // 344
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/youtap/lib/jquery.countdown.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* http://keith-wood.name/countdown.html                                                                              // 1
   Countdown for jQuery v2.0.0.                                                                                       // 2
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.                                                       // 3
   Available under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license.                    // 4
   Please attribute the author if you use it. */                                                                      // 5
                                                                                                                      // 6
(function($) { // Hide scope, no $ conflict                                                                           // 7
                                                                                                                      // 8
	var pluginName = 'countdown';                                                                                        // 9
                                                                                                                      // 10
	var Y = 0; // Years                                                                                                  // 11
	var O = 1; // Months                                                                                                 // 12
	var W = 2; // Weeks                                                                                                  // 13
	var D = 3; // Days                                                                                                   // 14
	var H = 4; // Hours                                                                                                  // 15
	var M = 5; // Minutes                                                                                                // 16
	var S = 6; // Seconds                                                                                                // 17
                                                                                                                      // 18
	/** Create the countdown plugin.                                                                                     // 19
		<p>Sets an element to show the time remaining until a given instant.</p>                                            // 20
		<p>Expects HTML like:</p>                                                                                           // 21
		<pre>&lt;div>&lt;/div></pre>                                                                                        // 22
		<p>Provide inline configuration like:</p>                                                                           // 23
		<pre>&lt;div data-countdown="name: 'value'">&lt;/div></pre>                                                         // 24
	 	@module Countdown                                                                                                  // 25
		@augments JQPlugin                                                                                                  // 26
		@example $(selector).countdown({until: +300}) */                                                                    // 27
	$.JQPlugin.createPlugin({                                                                                            // 28
	                                                                                                                     // 29
		/** The name of the plugin. */                                                                                      // 30
		name: pluginName,                                                                                                   // 31
                                                                                                                      // 32
		/** Countdown expiry callback.                                                                                      // 33
			Triggered when the countdown expires.                                                                              // 34
			@callback expiryCallback */                                                                                        // 35
                                                                                                                      // 36
		/** Countdown server synchronisation callback.                                                                      // 37
			Triggered when the countdown is initialised.                                                                       // 38
			@callback serverSyncCallback                                                                                       // 39
			@return {Date} The current date/time on the server as expressed in the local timezone. */                          // 40
			                                                                                                                   // 41
		/** Countdown tick callback.                                                                                        // 42
			Triggered on every <code>tickInterval</code> ticks of the countdown.                                               // 43
			@callback tickCallback                                                                                             // 44
			@param periods {number[]} The breakdown by period (years, months, weeks, days,                                     // 45
					hours, minutes, seconds) of the time remaining/passed. */                                                        // 46
                                                                                                                      // 47
		/** Countdown which labels callback.                                                                                // 48
			Triggered when the countdown is being display to determine which set of labels                                     // 49
			(<code>labels</code>, <code>labels1</code>, ...) are to be used for the current period value.                      // 50
			@callback whichLabelsCallback                                                                                      // 51
			@param num {number} The current period value.                                                                      // 52
			@return {number} The suffix for the label set to use. */                                                           // 53
			                                                                                                                   // 54
		/** Default settings for the plugin.                                                                                // 55
			@property until {Date|number|string} The date/time to count down to, or number of seconds                          // 56
						offset from now, or string of amounts and units for offset(s) from now:                                         // 57
						'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds.                                // 58
			@example until: new Date(2013, 12-1, 25, 13, 30)                                                                   // 59
 until: +300                                                                                                          // 60
 until: '+1O -2D'                                                                                                     // 61
			@property [since] {Date|number|string} The date/time to count up from, or                                          // 62
						number of seconds offset from now, or string for unit offset(s):                                                // 63
						'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds.                                // 64
			@example since: new Date(2013, 1-1, 1)                                                                             // 65
 since: -300                                                                                                          // 66
 since: '-1O +2D'                                                                                                     // 67
			@property [timezone=null] {number} The timezone (hours or minutes from GMT) for the target times,                  // 68
						or null for client local timezone.                                                                              // 69
			@example timezone: +10                                                                                             // 70
 timezone: -60                                                                                                        // 71
			@property [serverSync=null] {serverSyncCallback} A function to retrieve the current server time                    // 72
						for synchronisation.                                                                                            // 73
			@property [format='dHMS'] {string} The format for display - upper case for always, lower case only if non-zero,    // 74
						'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds.                                // 75
			@property [layout=''] {string} Build your own layout for the countdown.                                            // 76
			@example layout: '{d<}{dn} {dl}{d>} {hnn}:{mnn}:{snn}'                                                             // 77
			@property [compact=false] {boolean} True to display in a compact format, false for an expanded one.                // 78
			@property [padZeroes=false] {boolean} True to add leading zeroes                                                   // 79
			@property [significant=0] {number} The number of periods with non-zero values to show, zero for all.               // 80
			@property [description=''] {string} The description displayed for the countdown.                                   // 81
			@property [expiryUrl=''] {string} A URL to load upon expiry, replacing the current page.                           // 82
			@property [expiryText=''] {string} Text to display upon expiry, replacing the countdown. This may be HTML.         // 83
			@property [alwaysExpire=false] {boolean} True to trigger <code>onExpiry</code> even if target time has passed.     // 84
			@property [onExpiry=null] {expiryCallback} Callback when the countdown expires -                                   // 85
						receives no parameters and <code>this</code> is the containing division.                                        // 86
			@example onExpiry: function() {                                                                                    // 87
	...                                                                                                                  // 88
 }                                                                                                                    // 89
			@property [onTick=null] {tickCallback} Callback when the countdown is updated -                                    // 90
						receives <code>number[7]</code> being the breakdown by period                                                   // 91
						(years, months, weeks, days, hours, minutes, seconds - based on                                                 // 92
						<code>format</code>) and <code>this</code> is the containing division.                                          // 93
			@example onTick: function(periods) {                                                                               // 94
 	var secs = $.countdown.periodsToSeconds(periods);                                                                   // 95
 	if (secs < 300) { // Last five minutes                                                                              // 96
		...                                                                                                                 // 97
 	}                                                                                                                   // 98
 }                                                                                                                    // 99
			@property [tickInterval=1] {number} The interval (seconds) between <code>onTick</code> callbacks. */               // 100
		defaultOptions: {                                                                                                   // 101
			until: null,                                                                                                       // 102
			since: null,                                                                                                       // 103
			timezone: null,                                                                                                    // 104
			serverSync: null,                                                                                                  // 105
			format: 'dHMS',                                                                                                    // 106
			layout: '',                                                                                                        // 107
			compact: false,                                                                                                    // 108
			padZeroes: false,                                                                                                  // 109
			significant: 0,                                                                                                    // 110
			description: '',                                                                                                   // 111
			expiryUrl: '',                                                                                                     // 112
			expiryText: '',                                                                                                    // 113
			alwaysExpire: false,                                                                                               // 114
			onExpiry: null,                                                                                                    // 115
			onTick: null,                                                                                                      // 116
			tickInterval: 1                                                                                                    // 117
		},                                                                                                                  // 118
                                                                                                                      // 119
		/** Localisations for the plugin.                                                                                   // 120
			Entries are objects indexed by the language code ('' being the default US/English).                                // 121
			Each object has the following attributes.                                                                          // 122
			@property [labels=['Years','Months','Weeks','Days','Hours','Minutes','Seconds']] {string[]}                        // 123
						The display texts for the counter periods.                                                                      // 124
			@property [labels1=['Year','Month','Week','Day','Hour','Minute','Second']] {string[]}                              // 125
						The display texts for the counter periods if they have a value of 1.                                            // 126
						Add other <code>labels<em>n</em></code> attributes as necessary to                                              // 127
						cater for other numeric idiosyncrasies of the localisation.                                                     // 128
			@property [compactLabels=['y','m','w','d']] {string[]} The compact texts for the counter periods.                  // 129
			@property [whichLabels=null] {whichLabelsCallback} A function to determine which                                   // 130
						<code>labels<em>n</em></code> to use.                                                                           // 131
			@example whichLabels: function(num) {                                                                              // 132
	return (num > 1 ? 0 : 1);                                                                                            // 133
 }                                                                                                                    // 134
			@property [digits=['0','1',...,'9']] {number[]} The digits to display (0-9).                                       // 135
			@property [timeSeparator=':'] {string} Separator for time periods in the compact layout.                           // 136
			@property [isRTL=false] {boolean} True for right-to-left languages, false for left-to-right. */                    // 137
		regionalOptions: { // Available regional settings, indexed by language/country code                                 // 138
			'': { // Default regional settings - English/US                                                                    // 139
		labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],                                        // 140
		labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],                                              // 141
				compactLabels: ['y', 'm', 'w', 'd'],                                                                              // 142
				whichLabels: null,                                                                                                // 143
				digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],                                                       // 144
				timeSeparator: ':',                                                                                               // 145
				isRTL: false                                                                                                      // 146
			}                                                                                                                  // 147
		},                                                                                                                  // 148
		                                                                                                                    // 149
		/** Names of getter methods - those that can't be chained. */                                                       // 150
		_getters: ['getTimes'],                                                                                             // 151
                                                                                                                      // 152
		/* Class name for the right-to-left marker. */                                                                      // 153
		_rtlClass: pluginName + '-rtl',                                                                                     // 154
		/* Class name for the countdown section marker. */                                                                  // 155
		_sectionClass: pluginName + '-section',                                                                             // 156
		/* Class name for the period amount marker. */                                                                      // 157
		_amountClass: pluginName + '-amount',                                                                               // 158
		/* Class name for the period name marker. */                                                                        // 159
		_periodClass: pluginName + '-period',                                                                               // 160
		/* Class name for the countdown row marker. */                                                                      // 161
		_rowClass: pluginName + '-row',                                                                                     // 162
		/* Class name for the holding countdown marker. */                                                                  // 163
		_holdingClass: pluginName + '-holding',                                                                             // 164
		/* Class name for the showing countdown marker. */                                                                  // 165
		_showClass: pluginName + '-show',                                                                                   // 166
		/* Class name for the description marker. */                                                                        // 167
		_descrClass: pluginName + '-descr',                                                                                 // 168
                                                                                                                      // 169
		/* List of currently active countdown elements. */                                                                  // 170
		_timerElems: [],                                                                                                    // 171
                                                                                                                      // 172
		/** Additional setup for the countdown.                                                                             // 173
			Apply default localisations.                                                                                       // 174
			Create the timer. */                                                                                               // 175
		_init: function() {                                                                                                 // 176
			var self = this;                                                                                                   // 177
			this._super();                                                                                                     // 178
	this._serverSyncs = [];                                                                                              // 179
	var now = (typeof Date.now == 'function' ? Date.now :                                                                // 180
		function() { return new Date().getTime(); });                                                                       // 181
	var perfAvail = (window.performance && typeof window.performance.now == 'function');                                 // 182
	// Shared timer for all countdowns                                                                                   // 183
	function timerCallBack(timestamp) {                                                                                  // 184
		var drawStart = (timestamp < 1e12 ? // New HTML5 high resolution timer                                              // 185
			(perfAvail ? (performance.now() + performance.timing.navigationStart) : now()) :                                   // 186
			// Integer milliseconds since unix epoch                                                                           // 187
			timestamp || now());                                                                                               // 188
		if (drawStart - animationStartTime >= 1000) {                                                                       // 189
					self._updateElems();                                                                                             // 190
			animationStartTime = drawStart;                                                                                    // 191
		}                                                                                                                   // 192
		requestAnimationFrame(timerCallBack);                                                                               // 193
	}                                                                                                                    // 194
	var requestAnimationFrame = window.requestAnimationFrame ||                                                          // 195
		window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||                                            // 196
		window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;                                            // 197
		// This is when we expect a fall-back to setInterval as it's much more fluid                                        // 198
	var animationStartTime = 0;                                                                                          // 199
	if (!requestAnimationFrame || $.noRequestAnimationFrame) {                                                           // 200
		$.noRequestAnimationFrame = null;                                                                                   // 201
				setInterval(function() { self._updateElems(); }, 980); // Fall back to good old setInterval                       // 202
	}                                                                                                                    // 203
	else {                                                                                                               // 204
		animationStartTime = window.animationStartTime ||                                                                   // 205
			window.webkitAnimationStartTime || window.mozAnimationStartTime ||                                                 // 206
			window.oAnimationStartTime || window.msAnimationStartTime || now();                                                // 207
		requestAnimationFrame(timerCallBack);                                                                               // 208
	}                                                                                                                    // 209
		},                                                                                                                  // 210
	                                                                                                                     // 211
		/** Convert a date/time to UTC.                                                                                     // 212
			@param tz {number} The hour or minute offset from GMT, e.g. +9, -360.                                              // 213
			@param year {Date|number} the date/time in that timezone or the year in that timezone.                             // 214
			@param [month] {number} The month (0 - 11) (omit if <code>year</code> is a <code>Date</code>).                     // 215
			@param [day] {number} The day (omit if <code>year</code> is a <code>Date</code>).                                  // 216
			@param [hours] {number} The hour (omit if <code>year</code> is a <code>Date</code>).                               // 217
			@param [mins] {number} The minute (omit if <code>year</code> is a <code>Date</code>).                              // 218
			@param [secs] {number} The second (omit if <code>year</code> is a <code>Date</code>).                              // 219
			@param [ms] {number} The millisecond (omit if <code>year</code> is a <code>Date</code>).                           // 220
			@return {Date} The equivalent UTC date/time.                                                                       // 221
			@example $.countdown.UTCDate(+10, 2013, 12-1, 25, 12, 0)                                                           // 222
 $.countdown.UTCDate(-7, new Date(2013, 12-1, 25, 12, 0)) */                                                          // 223
	UTCDate: function(tz, year, month, day, hours, mins, secs, ms) {                                                     // 224
		if (typeof year == 'object' && year.constructor == Date) {                                                          // 225
			ms = year.getMilliseconds();                                                                                       // 226
			secs = year.getSeconds();                                                                                          // 227
			mins = year.getMinutes();                                                                                          // 228
			hours = year.getHours();                                                                                           // 229
			day = year.getDate();                                                                                              // 230
			month = year.getMonth();                                                                                           // 231
			year = year.getFullYear();                                                                                         // 232
		}                                                                                                                   // 233
		var d = new Date();                                                                                                 // 234
		d.setUTCFullYear(year);                                                                                             // 235
		d.setUTCDate(1);                                                                                                    // 236
		d.setUTCMonth(month || 0);                                                                                          // 237
		d.setUTCDate(day || 1);                                                                                             // 238
		d.setUTCHours(hours || 0);                                                                                          // 239
		d.setUTCMinutes((mins || 0) - (Math.abs(tz) < 30 ? tz * 60 : tz));                                                  // 240
		d.setUTCSeconds(secs || 0);                                                                                         // 241
		d.setUTCMilliseconds(ms || 0);                                                                                      // 242
		return d;                                                                                                           // 243
	},                                                                                                                   // 244
                                                                                                                      // 245
		/** Convert a set of periods into seconds.                                                                          // 246
	   Averaged for months and years.                                                                                    // 247
			@param periods {number[]} The periods per year/month/week/day/hour/minute/second.                                  // 248
			@return {number} The corresponding number of seconds.                                                              // 249
			@example var secs = $.countdown.periodsToSeconds(periods) */                                                       // 250
	periodsToSeconds: function(periods) {                                                                                // 251
		return periods[0] * 31557600 + periods[1] * 2629800 + periods[2] * 604800 +                                         // 252
			periods[3] * 86400 + periods[4] * 3600 + periods[5] * 60 + periods[6];                                             // 253
	},                                                                                                                   // 254
                                                                                                                      // 255
		_instSettings: function(elem, options) {                                                                            // 256
			return {_periods: [0, 0, 0, 0, 0, 0, 0]};                                                                          // 257
	},                                                                                                                   // 258
                                                                                                                      // 259
		/** Add an element to the list of active ones.                                                                      // 260
			@private                                                                                                           // 261
			@param elem {Element} The countdown element. */                                                                    // 262
		_addElem: function(elem) {                                                                                          // 263
			if (!this._hasElem(elem)) {                                                                                        // 264
				this._timerElems.push(elem);                                                                                      // 265
		}                                                                                                                   // 266
	},                                                                                                                   // 267
                                                                                                                      // 268
		/** See if an element is in the list of active ones.                                                                // 269
			@private                                                                                                           // 270
			@param elem {Element} The countdown element.                                                                       // 271
			@return {boolean} True if present, false if not. */                                                                // 272
		_hasElem: function(elem) {                                                                                          // 273
			return ($.inArray(elem, this._timerElems) > -1);                                                                   // 274
	},                                                                                                                   // 275
                                                                                                                      // 276
		/** Remove an element from the list of active ones.                                                                 // 277
			@private                                                                                                           // 278
			@param elem {Element} The countdown element. */                                                                    // 279
		_removeElem: function(elem) {                                                                                       // 280
			this._timerElems = $.map(this._timerElems,                                                                         // 281
				function(value) { return (value == elem ? null : value); }); // delete entry                                      // 282
	},                                                                                                                   // 283
                                                                                                                      // 284
		/** Update each active timer element.                                                                               // 285
			@private */                                                                                                        // 286
		_updateElems: function() {                                                                                          // 287
			for (var i = this._timerElems.length - 1; i >= 0; i--) {                                                           // 288
				this._updateCountdown(this._timerElems[i]);                                                                       // 289
		}                                                                                                                   // 290
	},                                                                                                                   // 291
                                                                                                                      // 292
		_optionsChanged: function(elem, inst, options) {                                                                    // 293
		if (options.layout) {                                                                                               // 294
			options.layout = options.layout.replace(/&lt;/g, '<').replace(/&gt;/g, '>');                                       // 295
		}                                                                                                                   // 296
		this._resetExtraLabels(inst.options, options);                                                                      // 297
		var timezoneChanged = (inst.options.timezone != options.timezone);                                                  // 298
		$.extend(inst.options, options);                                                                                    // 299
			this._adjustSettings(elem, inst,                                                                                   // 300
			options.until != null || options.since != null || timezoneChanged);                                                // 301
		var now = new Date();                                                                                               // 302
		if ((inst._since && inst._since < now) || (inst._until && inst._until > now)) {                                     // 303
				this._addElem(elem[0]);                                                                                           // 304
		}                                                                                                                   // 305
			this._updateCountdown(elem, inst);                                                                                 // 306
	},                                                                                                                   // 307
                                                                                                                      // 308
		/** Redisplay the countdown with an updated display.                                                                // 309
			@private                                                                                                           // 310
			@param elem {Element|jQuery} The containing division.                                                              // 311
			@param inst {object} The current settings for this instance. */                                                    // 312
		_updateCountdown: function(elem, inst) {                                                                            // 313
			elem = elem.jquery ? elem : $(elem);                                                                               // 314
			inst = inst || elem.data(this.name);                                                                               // 315
		if (!inst) {                                                                                                        // 316
			return;                                                                                                            // 317
		}                                                                                                                   // 318
			elem.html(this._generateHTML(inst)).toggleClass(this._rtlClass, inst.options.isRTL);                               // 319
		if ($.isFunction(inst.options.onTick)) {                                                                            // 320
			var periods = inst._hold != 'lap' ? inst._periods :                                                                // 321
				this._calculatePeriods(inst, inst._show, inst.options.significant, new Date());                                   // 322
			if (inst.options.tickInterval == 1 ||                                                                              // 323
					this.periodsToSeconds(periods) % inst.options.tickInterval == 0) {                                               // 324
					inst.options.onTick.apply(elem[0], [periods]);                                                                   // 325
			}                                                                                                                  // 326
		}                                                                                                                   // 327
		var expired = inst._hold != 'pause' &&                                                                              // 328
			(inst._since ? inst._now.getTime() < inst._since.getTime() :                                                       // 329
			inst._now.getTime() >= inst._until.getTime());                                                                     // 330
		if (expired && !inst._expiring) {                                                                                   // 331
			inst._expiring = true;                                                                                             // 332
				if (this._hasElem(elem[0]) || inst.options.alwaysExpire) {                                                        // 333
					this._removeElem(elem[0]);                                                                                       // 334
				if ($.isFunction(inst.options.onExpiry)) {                                                                        // 335
						inst.options.onExpiry.apply(elem[0], []);                                                                       // 336
				}                                                                                                                 // 337
				if (inst.options.expiryText) {                                                                                    // 338
					var layout = inst.options.layout;                                                                                // 339
					inst.options.layout = inst.options.expiryText;                                                                   // 340
						this._updateCountdown(elem[0], inst);                                                                           // 341
					inst.options.layout = layout;                                                                                    // 342
				}                                                                                                                 // 343
				if (inst.options.expiryUrl) {                                                                                     // 344
					window.location = inst.options.expiryUrl;                                                                        // 345
				}                                                                                                                 // 346
			}                                                                                                                  // 347
			inst._expiring = false;                                                                                            // 348
		}                                                                                                                   // 349
		else if (inst._hold == 'pause') {                                                                                   // 350
				this._removeElem(elem[0]);                                                                                        // 351
		}                                                                                                                   // 352
	},                                                                                                                   // 353
                                                                                                                      // 354
		/** Reset any extra labelsn and compactLabelsn entries if changing labels.                                          // 355
			@private                                                                                                           // 356
			@param base {object} The options to be updated.                                                                    // 357
			@param options {object} The new option values. */                                                                  // 358
	_resetExtraLabels: function(base, options) {                                                                         // 359
		var changingLabels = false;                                                                                         // 360
		for (var n in options) {                                                                                            // 361
			if (n != 'whichLabels' && n.match(/[Ll]abels/)) {                                                                  // 362
				changingLabels = true;                                                                                            // 363
				break;                                                                                                            // 364
			}                                                                                                                  // 365
		}                                                                                                                   // 366
		if (changingLabels) {                                                                                               // 367
			for (var n in base) { // Remove custom numbered labels                                                             // 368
				if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {                                                                  // 369
					base[n] = null;                                                                                                  // 370
				}                                                                                                                 // 371
			}                                                                                                                  // 372
		}                                                                                                                   // 373
	},                                                                                                                   // 374
	                                                                                                                     // 375
		/** Calculate internal settings for an instance.                                                                    // 376
			@private                                                                                                           // 377
			@param elem {jQuery} The containing division.                                                                      // 378
			@param inst {object} The current settings for this instance.                                                       // 379
			@param recalc {boolean} True if until or since are set. */                                                         // 380
		_adjustSettings: function(elem, inst, recalc) {                                                                     // 381
		var now;                                                                                                            // 382
		var serverOffset = 0;                                                                                               // 383
		var serverEntry = null;                                                                                             // 384
		for (var i = 0; i < this._serverSyncs.length; i++) {                                                                // 385
			if (this._serverSyncs[i][0] == inst.options.serverSync) {                                                          // 386
				serverEntry = this._serverSyncs[i][1];                                                                            // 387
				break;                                                                                                            // 388
			}                                                                                                                  // 389
		}                                                                                                                   // 390
		if (serverEntry != null) {                                                                                          // 391
			serverOffset = (inst.options.serverSync ? serverEntry : 0);                                                        // 392
			now = new Date();                                                                                                  // 393
		}                                                                                                                   // 394
		else {                                                                                                              // 395
			var serverResult = ($.isFunction(inst.options.serverSync) ?                                                        // 396
					inst.options.serverSync.apply(elem[0], []) : null);                                                              // 397
			now = new Date();                                                                                                  // 398
			serverOffset = (serverResult ? now.getTime() - serverResult.getTime() : 0);                                        // 399
			this._serverSyncs.push([inst.options.serverSync, serverOffset]);                                                   // 400
		}                                                                                                                   // 401
		var timezone = inst.options.timezone;                                                                               // 402
		timezone = (timezone == null ? -now.getTimezoneOffset() : timezone);                                                // 403
		if (recalc || (!recalc && inst._until == null && inst._since == null)) {                                            // 404
			inst._since = inst.options.since;                                                                                  // 405
			if (inst._since != null) {                                                                                         // 406
				inst._since = this.UTCDate(timezone, this._determineTime(inst._since, null));                                     // 407
				if (inst._since && serverOffset) {                                                                                // 408
					inst._since.setMilliseconds(inst._since.getMilliseconds() + serverOffset);                                       // 409
				}                                                                                                                 // 410
			}                                                                                                                  // 411
			inst._until = this.UTCDate(timezone, this._determineTime(inst.options.until, now));                                // 412
			if (serverOffset) {                                                                                                // 413
				inst._until.setMilliseconds(inst._until.getMilliseconds() + serverOffset);                                        // 414
			}                                                                                                                  // 415
		}                                                                                                                   // 416
		inst._show = this._determineShow(inst);                                                                             // 417
	},                                                                                                                   // 418
                                                                                                                      // 419
		/** Remove the countdown widget from a div.                                                                         // 420
			@param elem {jQuery} The containing division.                                                                      // 421
			@param inst {object} The current instance object. */                                                               // 422
		_preDestroy: function(elem, inst) {                                                                                 // 423
			this._removeElem(elem[0]);                                                                                         // 424
			elem.empty();                                                                                                      // 425
	},                                                                                                                   // 426
                                                                                                                      // 427
		/** Pause a countdown widget at the current time.                                                                   // 428
	   Stop it running but remember and display the current time.                                                        // 429
			@param elem {Element} The containing division.                                                                     // 430
			@example $(selector).countdown('pause') */                                                                         // 431
		pause: function(elem) {                                                                                             // 432
			this._hold(elem, 'pause');                                                                                         // 433
	},                                                                                                                   // 434
                                                                                                                      // 435
		/** Pause a countdown widget at the current time.                                                                   // 436
	   Stop the display but keep the countdown running.                                                                  // 437
			@param elem {Element} The containing division.                                                                     // 438
			@example $(selector).countdown('lap') */                                                                           // 439
		lap: function(elem) {                                                                                               // 440
			this._hold(elem, 'lap');                                                                                           // 441
		},                                                                                                                  // 442
                                                                                                                      // 443
		/** Resume a paused countdown widget.                                                                               // 444
			@param elem {Element} The containing division.                                                                     // 445
			@example $(selector).countdown('resume') */                                                                        // 446
		resume: function(elem) {                                                                                            // 447
			this._hold(elem, null);                                                                                            // 448
		},                                                                                                                  // 449
                                                                                                                      // 450
		/** Toggle a paused countdown widget.                                                                               // 451
			@param elem {Element} The containing division.                                                                     // 452
			@example $(selector).countdown('toggle') */                                                                        // 453
		toggle: function(elem) {                                                                                            // 454
			var inst = $.data(elem, this.name) || {};                                                                          // 455
			this[!inst._hold ? 'pause' : 'resume'](elem);                                                                      // 456
		},                                                                                                                  // 457
                                                                                                                      // 458
		/** Toggle a lapped countdown widget.                                                                               // 459
			@param elem {Element} The containing division.                                                                     // 460
			@example $(selector).countdown('toggleLap') */                                                                     // 461
		toggleLap: function(elem) {                                                                                         // 462
			var inst = $.data(elem, this.name) || {};                                                                          // 463
			this[!inst._hold ? 'lap' : 'resume'](elem);                                                                        // 464
		},                                                                                                                  // 465
                                                                                                                      // 466
		/** Pause or resume a countdown widget.                                                                             // 467
			@private                                                                                                           // 468
			@param elem {Element} The containing division.                                                                     // 469
			@param hold {string} The new hold setting. */                                                                      // 470
		_hold: function(elem, hold) {                                                                                       // 471
			var inst = $.data(elem, this.name);                                                                                // 472
		if (inst) {                                                                                                         // 473
			if (inst._hold == 'pause' && !hold) {                                                                              // 474
				inst._periods = inst._savePeriods;                                                                                // 475
				var sign = (inst._since ? '-' : '+');                                                                             // 476
				inst[inst._since ? '_since' : '_until'] =                                                                         // 477
					this._determineTime(sign + inst._periods[0] + 'y' +                                                              // 478
						sign + inst._periods[1] + 'o' + sign + inst._periods[2] + 'w' +                                                 // 479
						sign + inst._periods[3] + 'd' + sign + inst._periods[4] + 'h' +                                                 // 480
						sign + inst._periods[5] + 'm' + sign + inst._periods[6] + 's');                                                 // 481
					this._addElem(elem);                                                                                             // 482
			}                                                                                                                  // 483
			inst._hold = hold;                                                                                                 // 484
			inst._savePeriods = (hold == 'pause' ? inst._periods : null);                                                      // 485
				$.data(elem, this.name, inst);                                                                                    // 486
				this._updateCountdown(elem, inst);                                                                                // 487
		}                                                                                                                   // 488
	},                                                                                                                   // 489
                                                                                                                      // 490
		/** Return the current time periods.                                                                                // 491
			@param elem {Element} The containing division.                                                                     // 492
			@return {number[]} The current periods for the countdown.                                                          // 493
			@example var periods = $(selector).countdown('getTimes') */                                                        // 494
		getTimes: function(elem) {                                                                                          // 495
			var inst = $.data(elem, this.name);                                                                                // 496
		return (!inst ? null : (inst._hold == 'pause' ? inst._savePeriods : (!inst._hold ? inst._periods :                  // 497
			this._calculatePeriods(inst, inst._show, inst.options.significant, new Date()))));                                 // 498
	},                                                                                                                   // 499
                                                                                                                      // 500
		/** A time may be specified as an exact value or a relative one.                                                    // 501
			@private                                                                                                           // 502
			@param setting {string|number|Date} The date/time value as a relative or absolute value.                           // 503
			@param defaultTime {Date} The date/time to use if no other is supplied.                                            // 504
			@return {Date} The corresponding date/time. */                                                                     // 505
	_determineTime: function(setting, defaultTime) {                                                                     // 506
			var self = this;                                                                                                   // 507
		var offsetNumeric = function(offset) { // e.g. +300, -2                                                             // 508
			var time = new Date();                                                                                             // 509
			time.setTime(time.getTime() + offset * 1000);                                                                      // 510
			return time;                                                                                                       // 511
		};                                                                                                                  // 512
		var offsetString = function(offset) { // e.g. '+2d', '-4w', '+3h +30m'                                              // 513
			offset = offset.toLowerCase();                                                                                     // 514
			var time = new Date();                                                                                             // 515
			var year = time.getFullYear();                                                                                     // 516
			var month = time.getMonth();                                                                                       // 517
			var day = time.getDate();                                                                                          // 518
			var hour = time.getHours();                                                                                        // 519
			var minute = time.getMinutes();                                                                                    // 520
			var second = time.getSeconds();                                                                                    // 521
			var pattern = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;                                                                 // 522
			var matches = pattern.exec(offset);                                                                                // 523
			while (matches) {                                                                                                  // 524
				switch (matches[2] || 's') {                                                                                      // 525
					case 's': second += parseInt(matches[1], 10); break;                                                             // 526
					case 'm': minute += parseInt(matches[1], 10); break;                                                             // 527
					case 'h': hour += parseInt(matches[1], 10); break;                                                               // 528
					case 'd': day += parseInt(matches[1], 10); break;                                                                // 529
					case 'w': day += parseInt(matches[1], 10) * 7; break;                                                            // 530
					case 'o':                                                                                                        // 531
						month += parseInt(matches[1], 10);                                                                              // 532
							day = Math.min(day, self._getDaysInMonth(year, month));                                                        // 533
						break;                                                                                                          // 534
					case 'y':                                                                                                        // 535
						year += parseInt(matches[1], 10);                                                                               // 536
							day = Math.min(day, self._getDaysInMonth(year, month));                                                        // 537
						break;                                                                                                          // 538
				}                                                                                                                 // 539
				matches = pattern.exec(offset);                                                                                   // 540
			}                                                                                                                  // 541
			return new Date(year, month, day, hour, minute, second, 0);                                                        // 542
		};                                                                                                                  // 543
		var time = (setting == null ? defaultTime :                                                                         // 544
			(typeof setting == 'string' ? offsetString(setting) :                                                              // 545
			(typeof setting == 'number' ? offsetNumeric(setting) : setting)));                                                 // 546
		if (time) time.setMilliseconds(0);                                                                                  // 547
		return time;                                                                                                        // 548
	},                                                                                                                   // 549
                                                                                                                      // 550
		/** Determine the number of days in a month.                                                                        // 551
			@private                                                                                                           // 552
			@param year {number} The year.                                                                                     // 553
			@param month {number} The month.                                                                                   // 554
			@return {number} The days in that month. */                                                                        // 555
	_getDaysInMonth: function(year, month) {                                                                             // 556
		return 32 - new Date(year, month, 32).getDate();                                                                    // 557
	},                                                                                                                   // 558
                                                                                                                      // 559
		/** Default implementation to determine which set of labels should be used for an amount.                           // 560
			Use the <code>labels</code> attribute with the same numeric suffix (if it exists).                                 // 561
			@private                                                                                                           // 562
			@param num {number} The amount to be displayed.                                                                    // 563
			@return {number} The set of labels to be used for this amount. */                                                  // 564
	_normalLabels: function(num) {                                                                                       // 565
		return num;                                                                                                         // 566
	},                                                                                                                   // 567
                                                                                                                      // 568
		/** Generate the HTML to display the countdown widget.                                                              // 569
			@private                                                                                                           // 570
			@param inst {object} The current settings for this instance.                                                       // 571
			@return {string} The new HTML for the countdown display. */                                                        // 572
	_generateHTML: function(inst) {                                                                                      // 573
		var self = this;                                                                                                    // 574
		// Determine what to show                                                                                           // 575
		inst._periods = (inst._hold ? inst._periods :                                                                       // 576
			this._calculatePeriods(inst, inst._show, inst.options.significant, new Date()));                                   // 577
		// Show all 'asNeeded' after first non-zero value                                                                   // 578
		var shownNonZero = false;                                                                                           // 579
		var showCount = 0;                                                                                                  // 580
		var sigCount = inst.options.significant;                                                                            // 581
		var show = $.extend({}, inst._show);                                                                                // 582
		for (var period = Y; period <= S; period++) {                                                                       // 583
			shownNonZero |= (inst._show[period] == '?' && inst._periods[period] > 0);                                          // 584
			show[period] = (inst._show[period] == '?' && !shownNonZero ? null : inst._show[period]);                           // 585
			showCount += (show[period] ? 1 : 0);                                                                               // 586
			sigCount -= (inst._periods[period] > 0 ? 1 : 0);                                                                   // 587
		}                                                                                                                   // 588
		var showSignificant = [false, false, false, false, false, false, false];                                            // 589
		for (var period = S; period >= Y; period--) { // Determine significant periods                                      // 590
			if (inst._show[period]) {                                                                                          // 591
				if (inst._periods[period]) {                                                                                      // 592
					showSignificant[period] = true;                                                                                  // 593
				}                                                                                                                 // 594
				else {                                                                                                            // 595
					showSignificant[period] = sigCount > 0;                                                                          // 596
					sigCount--;                                                                                                      // 597
				}                                                                                                                 // 598
			}                                                                                                                  // 599
		}                                                                                                                   // 600
		var labels = (inst.options.compact ? inst.options.compactLabels : inst.options.labels);                             // 601
		var whichLabels = inst.options.whichLabels || this._normalLabels;                                                   // 602
		var showCompact = function(period) {                                                                                // 603
			var labelsNum = inst.options['compactLabels' + whichLabels(inst._periods[period])];                                // 604
			return (show[period] ? self._translateDigits(inst, inst._periods[period]) +                                        // 605
				(labelsNum ? labelsNum[period] : labels[period]) + ' ' : '');                                                     // 606
		};                                                                                                                  // 607
		var minDigits = (inst.options.padZeroes ? 2 : 1);                                                                   // 608
		var showFull = function(period) {                                                                                   // 609
			return "";                                                                                                         // 610
			var labelsNum = inst.options['labels' + whichLabels(inst._periods[period])];                                       // 611
			return ((!inst.options.significant && show[period]) ||                                                             // 612
				(inst.options.significant && showSignificant[period]) ?                                                           // 613
					'' + self._sectionClass + '' +                                                                                   // 614
					'' + self._amountClass + '' +                                                                                    // 615
				self._minDigits(inst, inst._periods[period], minDigits) + '' +                                                    // 616
				'' + self._periodClass + '' +                                                                                     // 617
				(labelsNum ? labelsNum[period] : labels[period]) + '' : '');                                                      // 618
		};                                                                                                                  // 619
		return "";                                                                                                          // 620
	},                                                                                                                   // 621
                                                                                                                      // 622
		/** Construct a custom layout.                                                                                      // 623
			@private                                                                                                           // 624
			@param inst {object} The current settings for this instance.                                                       // 625
			@param show {boolean[]} Flags indicating which periods are requested.                                              // 626
			@param layout {string} The customised layout.                                                                      // 627
			@param compact {boolean} True if using compact labels.                                                             // 628
			@param significant {number} The number of periods with values to show, zero for all.                               // 629
			@param showSignificant {boolean[]} Other periods to show for significance.                                         // 630
			@return {string} The custom HTML. */                                                                               // 631
	_buildLayout: function(inst, show, layout, compact, significant, showSignificant) {                                  // 632
		var labels = inst.options[compact ? 'compactLabels' : 'labels'];                                                    // 633
		var whichLabels = inst.options.whichLabels || this._normalLabels;                                                   // 634
		var labelFor = function(index) {                                                                                    // 635
			return (inst.options[(compact ? 'compactLabels' : 'labels') +                                                      // 636
				whichLabels(inst._periods[index])] || labels)[index];                                                             // 637
		};                                                                                                                  // 638
		var digit = function(value, position) {                                                                             // 639
			return inst.options.digits[Math.floor(value / position) % 10];                                                     // 640
		};                                                                                                                  // 641
		var subs = {desc: inst.options.description, sep: inst.options.timeSeparator,                                        // 642
			yl: labelFor(Y), yn: this._minDigits(inst, inst._periods[Y], 1),                                                   // 643
			ynn: this._minDigits(inst, inst._periods[Y], 2),                                                                   // 644
			ynnn: this._minDigits(inst, inst._periods[Y], 3), y1: digit(inst._periods[Y], 1),                                  // 645
			y10: digit(inst._periods[Y], 10), y100: digit(inst._periods[Y], 100),                                              // 646
			y1000: digit(inst._periods[Y], 1000),                                                                              // 647
			ol: labelFor(O), on: this._minDigits(inst, inst._periods[O], 1),                                                   // 648
			onn: this._minDigits(inst, inst._periods[O], 2),                                                                   // 649
			onnn: this._minDigits(inst, inst._periods[O], 3), o1: digit(inst._periods[O], 1),                                  // 650
			o10: digit(inst._periods[O], 10), o100: digit(inst._periods[O], 100),                                              // 651
			o1000: digit(inst._periods[O], 1000),                                                                              // 652
			wl: labelFor(W), wn: this._minDigits(inst, inst._periods[W], 1),                                                   // 653
			wnn: this._minDigits(inst, inst._periods[W], 2),                                                                   // 654
			wnnn: this._minDigits(inst, inst._periods[W], 3), w1: digit(inst._periods[W], 1),                                  // 655
			w10: digit(inst._periods[W], 10), w100: digit(inst._periods[W], 100),                                              // 656
			w1000: digit(inst._periods[W], 1000),                                                                              // 657
			dl: labelFor(D), dn: this._minDigits(inst, inst._periods[D], 1),                                                   // 658
			dnn: this._minDigits(inst, inst._periods[D], 2),                                                                   // 659
			dnnn: this._minDigits(inst, inst._periods[D], 3), d1: digit(inst._periods[D], 1),                                  // 660
			d10: digit(inst._periods[D], 10), d100: digit(inst._periods[D], 100),                                              // 661
			d1000: digit(inst._periods[D], 1000),                                                                              // 662
			hl: labelFor(H), hn: this._minDigits(inst, inst._periods[H], 1),                                                   // 663
			hnn: this._minDigits(inst, inst._periods[H], 2),                                                                   // 664
			hnnn: this._minDigits(inst, inst._periods[H], 3), h1: digit(inst._periods[H], 1),                                  // 665
			h10: digit(inst._periods[H], 10), h100: digit(inst._periods[H], 100),                                              // 666
			h1000: digit(inst._periods[H], 1000),                                                                              // 667
			ml: labelFor(M), mn: this._minDigits(inst, inst._periods[M], 1),                                                   // 668
			mnn: this._minDigits(inst, inst._periods[M], 2),                                                                   // 669
			mnnn: this._minDigits(inst, inst._periods[M], 3), m1: digit(inst._periods[M], 1),                                  // 670
			m10: digit(inst._periods[M], 10), m100: digit(inst._periods[M], 100),                                              // 671
			m1000: digit(inst._periods[M], 1000),                                                                              // 672
			sl: labelFor(S), sn: this._minDigits(inst, inst._periods[S], 1),                                                   // 673
			snn: this._minDigits(inst, inst._periods[S], 2),                                                                   // 674
			snnn: this._minDigits(inst, inst._periods[S], 3), s1: digit(inst._periods[S], 1),                                  // 675
			s10: digit(inst._periods[S], 10), s100: digit(inst._periods[S], 100),                                              // 676
			s1000: digit(inst._periods[S], 1000)};                                                                             // 677
		var html = layout;                                                                                                  // 678
		// Replace period containers: {p<}...{p>}                                                                           // 679
		for (var i = Y; i <= S; i++) {                                                                                      // 680
			var period = 'yowdhms'.charAt(i);                                                                                  // 681
			var re = new RegExp('\\{' + period + '<\\}([\\s\\S]*)\\{' + period + '>\\}', 'g');                                 // 682
			html = html.replace(re, ((!significant && show[i]) ||                                                              // 683
				(significant && showSignificant[i]) ? '$1' : ''));                                                                // 684
		}                                                                                                                   // 685
		// Replace period values: {pn}                                                                                      // 686
		$.each(subs, function(n, v) {                                                                                       // 687
			var re = new RegExp('\\{' + n + '\\}', 'g');                                                                       // 688
			html = html.replace(re, v);                                                                                        // 689
		});                                                                                                                 // 690
		return html;                                                                                                        // 691
	},                                                                                                                   // 692
                                                                                                                      // 693
		/** Ensure a numeric value has at least n digits for display.                                                       // 694
			@private                                                                                                           // 695
			@param inst {object} The current settings for this instance.                                                       // 696
			@param value {number} The value to display.                                                                        // 697
			@param len {number} The minimum length.                                                                            // 698
			@return {string} The display text. */                                                                              // 699
	_minDigits: function(inst, value, len) {                                                                             // 700
		value = '' + value;                                                                                                 // 701
		if (value.length >= len) {                                                                                          // 702
			return this._translateDigits(inst, value);                                                                         // 703
		}                                                                                                                   // 704
		value = '0000000000' + value;                                                                                       // 705
		return this._translateDigits(inst, value.substr(value.length - len));                                               // 706
	},                                                                                                                   // 707
                                                                                                                      // 708
		/** Translate digits into other representations.                                                                    // 709
			@private                                                                                                           // 710
			@param inst {object} The current settings for this instance.                                                       // 711
			@param value {string} The text to translate.                                                                       // 712
			@return {string} The translated text. */                                                                           // 713
	_translateDigits: function(inst, value) {                                                                            // 714
		return ('' + value).replace(/[0-9]/g, function(digit) {                                                             // 715
				return inst.options.digits[digit];                                                                                // 716
			});                                                                                                                // 717
	},                                                                                                                   // 718
                                                                                                                      // 719
		/** Translate the format into flags for each period.                                                                // 720
			@private                                                                                                           // 721
			@param inst {object} The current settings for this instance.                                                       // 722
			@return {string[]} Flags indicating which periods are requested (?) or                                             // 723
					required (!) by year, month, week, day, hour, minute, second. */                                                 // 724
	_determineShow: function(inst) {                                                                                     // 725
		var format = inst.options.format;                                                                                   // 726
		var show = [];                                                                                                      // 727
		show[Y] = (format.match('y') ? '?' : (format.match('Y') ? '!' : null));                                             // 728
		show[O] = (format.match('o') ? '?' : (format.match('O') ? '!' : null));                                             // 729
		show[W] = (format.match('w') ? '?' : (format.match('W') ? '!' : null));                                             // 730
		show[D] = (format.match('d') ? '?' : (format.match('D') ? '!' : null));                                             // 731
		show[H] = (format.match('h') ? '?' : (format.match('H') ? '!' : null));                                             // 732
		show[M] = (format.match('m') ? '?' : (format.match('M') ? '!' : null));                                             // 733
		show[S] = (format.match('s') ? '?' : (format.match('S') ? '!' : null));                                             // 734
		return show;                                                                                                        // 735
	},                                                                                                                   // 736
	                                                                                                                     // 737
		/** Calculate the requested periods between now and the target time.                                                // 738
			@private                                                                                                           // 739
			@param inst {object} The current settings for this instance.                                                       // 740
			@param show {string[]} Flags indicating which periods are requested/required.                                      // 741
			@param significant {number} The number of periods with values to show, zero for all.                               // 742
			@param now {Date} The current date and time.                                                                       // 743
			@return {number[]} The current time periods (always positive)                                                      // 744
					by year, month, week, day, hour, minute, second. */                                                              // 745
	_calculatePeriods: function(inst, show, significant, now) {                                                          // 746
		// Find endpoints                                                                                                   // 747
		inst._now = now;                                                                                                    // 748
		inst._now.setMilliseconds(0);                                                                                       // 749
		var until = new Date(inst._now.getTime());                                                                          // 750
		if (inst._since) {                                                                                                  // 751
			if (now.getTime() < inst._since.getTime()) {                                                                       // 752
				inst._now = now = until;                                                                                          // 753
			}                                                                                                                  // 754
			else {                                                                                                             // 755
				now = inst._since;                                                                                                // 756
			}                                                                                                                  // 757
		}                                                                                                                   // 758
		else {                                                                                                              // 759
			until.setTime(inst._until.getTime());                                                                              // 760
			if (now.getTime() > inst._until.getTime()) {                                                                       // 761
				inst._now = now = until;                                                                                          // 762
			}                                                                                                                  // 763
		}                                                                                                                   // 764
		// Calculate differences by period                                                                                  // 765
		var periods = [0, 0, 0, 0, 0, 0, 0];                                                                                // 766
		if (show[Y] || show[O]) {                                                                                           // 767
			// Treat end of months as the same                                                                                 // 768
				var lastNow = this._getDaysInMonth(now.getFullYear(), now.getMonth());                                            // 769
				var lastUntil = this._getDaysInMonth(until.getFullYear(), until.getMonth());                                      // 770
			var sameDay = (until.getDate() == now.getDate() ||                                                                 // 771
				(until.getDate() >= Math.min(lastNow, lastUntil) &&                                                               // 772
				now.getDate() >= Math.min(lastNow, lastUntil)));                                                                  // 773
			var getSecs = function(date) {                                                                                     // 774
				return (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds();                                       // 775
			};                                                                                                                 // 776
			var months = Math.max(0,                                                                                           // 777
				(until.getFullYear() - now.getFullYear()) * 12 + until.getMonth() - now.getMonth() +                              // 778
				((until.getDate() < now.getDate() && !sameDay) ||                                                                 // 779
				(sameDay && getSecs(until) < getSecs(now)) ? -1 : 0));                                                            // 780
			periods[Y] = (show[Y] ? Math.floor(months / 12) : 0);                                                              // 781
			periods[O] = (show[O] ? months - periods[Y] * 12 : 0);                                                             // 782
			// Adjust for months difference and end of month if necessary                                                      // 783
			now = new Date(now.getTime());                                                                                     // 784
			var wasLastDay = (now.getDate() == lastNow);                                                                       // 785
				var lastDay = this._getDaysInMonth(now.getFullYear() + periods[Y],                                                // 786
				now.getMonth() + periods[O]);                                                                                     // 787
			if (now.getDate() > lastDay) {                                                                                     // 788
				now.setDate(lastDay);                                                                                             // 789
			}                                                                                                                  // 790
			now.setFullYear(now.getFullYear() + periods[Y]);                                                                   // 791
			now.setMonth(now.getMonth() + periods[O]);                                                                         // 792
			if (wasLastDay) {                                                                                                  // 793
				now.setDate(lastDay);                                                                                             // 794
			}                                                                                                                  // 795
		}                                                                                                                   // 796
		var diff = Math.floor((until.getTime() - now.getTime()) / 1000);                                                    // 797
		var extractPeriod = function(period, numSecs) {                                                                     // 798
			periods[period] = (show[period] ? Math.floor(diff / numSecs) : 0);                                                 // 799
			diff -= periods[period] * numSecs;                                                                                 // 800
		};                                                                                                                  // 801
		extractPeriod(W, 604800);                                                                                           // 802
		extractPeriod(D, 86400);                                                                                            // 803
		extractPeriod(H, 3600);                                                                                             // 804
		extractPeriod(M, 60);                                                                                               // 805
		extractPeriod(S, 1);                                                                                                // 806
		if (diff > 0 && !inst._since) { // Round up if left overs                                                           // 807
			var multiplier = [1, 12, 4.3482, 7, 24, 60, 60];                                                                   // 808
			var lastShown = S;                                                                                                 // 809
			var max = 1;                                                                                                       // 810
			for (var period = S; period >= Y; period--) {                                                                      // 811
				if (show[period]) {                                                                                               // 812
					if (periods[lastShown] >= max) {                                                                                 // 813
						periods[lastShown] = 0;                                                                                         // 814
						diff = 1;                                                                                                       // 815
					}                                                                                                                // 816
					if (diff > 0) {                                                                                                  // 817
						periods[period]++;                                                                                              // 818
						diff = 0;                                                                                                       // 819
						lastShown = period;                                                                                             // 820
						max = 1;                                                                                                        // 821
					}                                                                                                                // 822
				}                                                                                                                 // 823
				max *= multiplier[period];                                                                                        // 824
			}                                                                                                                  // 825
		}                                                                                                                   // 826
		if (significant) { // Zero out insignificant periods                                                                // 827
			for (var period = Y; period <= S; period++) {                                                                      // 828
				if (significant && periods[period]) {                                                                             // 829
					significant--;                                                                                                   // 830
				}                                                                                                                 // 831
				else if (!significant) {                                                                                          // 832
					periods[period] = 0;                                                                                             // 833
				}                                                                                                                 // 834
			}                                                                                                                  // 835
		}                                                                                                                   // 836
		return periods;                                                                                                     // 837
	}                                                                                                                    // 838
	});                                                                                                                  // 839
                                                                                                                      // 840
})(jQuery);                                                                                                           // 841
                                                                                                                      // 842
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/youtap/lib/noty.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*!                                                                                                                   // 1
 @package noty - jQuery Notification Plugin                                                                           // 2
 @version version: 2.2.5                                                                                              // 3
 @contributors https://github.com/needim/noty/graphs/contributors                                                     // 4
                                                                                                                      // 5
 @documentation Examples and Documentation - http://needim.github.com/noty/                                           // 6
                                                                                                                      // 7
 @license Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php                         // 8
 */                                                                                                                   // 9
"function"!=typeof Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),function(a){var b={init:function(b){return this.options=a.extend({},a.noty.defaults,b),this.options.layout=this.options.custom?a.noty.layouts.inline:a.noty.layouts[this.options.layout],a.noty.themes[this.options.theme]?this.options.theme=a.noty.themes[this.options.theme]:b.themeClassName=this.options.theme,delete b.layout,delete b.theme,this.options=a.extend({},this.options,this.options.layout.options),this.options.id="noty_"+(new Date).getTime()*Math.floor(1e6*Math.random()),this.options=a.extend({},this.options,b),this._build(),this},_build:function(){var b=a('<div class="noty_bar noty_type_'+this.options.type+'"></div>').attr("id",this.options.id);if(b.append(this.options.template).find(".noty_text").html(this.options.text),this.$bar=null!==this.options.layout.parent.object?a(this.options.layout.parent.object).css(this.options.layout.parent.css).append(b):b,this.options.themeClassName&&this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_"+this.options.type),this.options.buttons){this.options.closeWith=[],this.options.timeout=!1;var c=a("<div/>").addClass("noty_buttons");null!==this.options.layout.parent.object?this.$bar.find(".noty_bar").append(c):this.$bar.append(c);var d=this;a.each(this.options.buttons,function(b,c){var e=a("<button/>").addClass(c.addClass?c.addClass:"gray").html(c.text).attr("id",c.id?c.id:"button-"+b).appendTo(d.$bar.find(".noty_buttons")).on("click",function(){a.isFunction(c.onClick)&&c.onClick.call(e,d)})})}this.$message=this.$bar.find(".noty_message"),this.$closeButton=this.$bar.find(".noty_close"),this.$buttons=this.$bar.find(".noty_buttons"),a.noty.store[this.options.id]=this},show:function(){var b=this;return b.options.custom?b.options.custom.find(b.options.layout.container.selector).append(b.$bar):a(b.options.layout.container.selector).append(b.$bar),b.options.theme&&b.options.theme.style&&b.options.theme.style.apply(b),"function"===a.type(b.options.layout.css)?this.options.layout.css.apply(b.$bar):b.$bar.css(this.options.layout.css||{}),b.$bar.addClass(b.options.layout.addClass),b.options.layout.container.style.apply(a(b.options.layout.container.selector)),b.showing=!0,b.options.theme&&b.options.theme.style&&b.options.theme.callback.onShow.apply(this),a.inArray("click",b.options.closeWith)>-1&&b.$bar.css("cursor","pointer").one("click",function(a){b.stopPropagation(a),b.options.callback.onCloseClick&&b.options.callback.onCloseClick.apply(b),b.close()}),a.inArray("hover",b.options.closeWith)>-1&&b.$bar.one("mouseenter",function(){b.close()}),a.inArray("button",b.options.closeWith)>-1&&b.$closeButton.one("click",function(a){b.stopPropagation(a),b.close()}),-1==a.inArray("button",b.options.closeWith)&&b.$closeButton.remove(),b.options.callback.onShow&&b.options.callback.onShow.apply(b),b.$bar.animate(b.options.animation.open,b.options.animation.speed,b.options.animation.easing,function(){b.options.callback.afterShow&&b.options.callback.afterShow.apply(b),b.showing=!1,b.shown=!0}),b.options.timeout&&b.$bar.delay(b.options.timeout).promise().done(function(){b.close()}),this},close:function(){if(!(this.closed||this.$bar&&this.$bar.hasClass("i-am-closing-now"))){var b=this;if(this.showing)return b.$bar.queue(function(){b.close.apply(b)}),void 0;if(!this.shown&&!this.showing){var c=[];return a.each(a.noty.queue,function(a,d){d.options.id!=b.options.id&&c.push(d)}),a.noty.queue=c,void 0}b.$bar.addClass("i-am-closing-now"),b.options.callback.onClose&&b.options.callback.onClose.apply(b),b.$bar.clearQueue().stop().animate(b.options.animation.close,b.options.animation.speed,b.options.animation.easing,function(){b.options.callback.afterClose&&b.options.callback.afterClose.apply(b)}).promise().done(function(){b.options.modal&&(a.notyRenderer.setModalCount(-1),0==a.notyRenderer.getModalCount()&&a(".noty_modal").fadeOut("fast",function(){a(this).remove()})),a.notyRenderer.setLayoutCountFor(b,-1),0==a.notyRenderer.getLayoutCountFor(b)&&a(b.options.layout.container.selector).remove(),"undefined"!=typeof b.$bar&&null!==b.$bar&&(b.$bar.remove(),b.$bar=null,b.closed=!0),delete a.noty.store[b.options.id],b.options.theme.callback&&b.options.theme.callback.onClose&&b.options.theme.callback.onClose.apply(b),b.options.dismissQueue||(a.noty.ontap=!0,a.notyRenderer.render()),b.options.maxVisible>0&&b.options.dismissQueue&&a.notyRenderer.render()})}},setText:function(a){return this.closed||(this.options.text=a,this.$bar.find(".noty_text").html(a)),this},setType:function(a){return this.closed||(this.options.type=a,this.options.theme.style.apply(this),this.options.theme.callback.onShow.apply(this)),this},setTimeout:function(a){if(!this.closed){var b=this;this.options.timeout=a,b.$bar.delay(b.options.timeout).promise().done(function(){b.close()})}return this},stopPropagation:function(a){a=a||window.event,"undefined"!=typeof a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},closed:!1,showing:!1,shown:!1};a.notyRenderer={},a.notyRenderer.init=function(c){var d=Object.create(b).init(c);return d.options.killer&&a.noty.closeAll(),d.options.force?a.noty.queue.unshift(d):a.noty.queue.push(d),a.notyRenderer.render(),"object"==a.noty.returns?d:d.options.id},a.notyRenderer.render=function(){var b=a.noty.queue[0];"object"===a.type(b)?b.options.dismissQueue?b.options.maxVisible>0?a(b.options.layout.container.selector+" li").length<b.options.maxVisible&&a.notyRenderer.show(a.noty.queue.shift()):a.notyRenderer.show(a.noty.queue.shift()):a.noty.ontap&&(a.notyRenderer.show(a.noty.queue.shift()),a.noty.ontap=!1):a.noty.ontap=!0},a.notyRenderer.show=function(b){b.options.modal&&(a.notyRenderer.createModalFor(b),a.notyRenderer.setModalCount(1)),b.options.custom?0==b.options.custom.find(b.options.layout.container.selector).length?b.options.custom.append(a(b.options.layout.container.object).addClass("i-am-new")):b.options.custom.find(b.options.layout.container.selector).removeClass("i-am-new"):0==a(b.options.layout.container.selector).length?a("body").append(a(b.options.layout.container.object).addClass("i-am-new")):a(b.options.layout.container.selector).removeClass("i-am-new"),a.notyRenderer.setLayoutCountFor(b,1),b.show()},a.notyRenderer.createModalFor=function(b){if(0==a(".noty_modal").length){var c=a("<div/>").addClass("noty_modal").addClass(b.options.theme).data("noty_modal_count",0);b.options.theme.modal&&b.options.theme.modal.css&&c.css(b.options.theme.modal.css),c.prependTo(a("body")).fadeIn("fast")}},a.notyRenderer.getLayoutCountFor=function(b){return a(b.options.layout.container.selector).data("noty_layout_count")||0},a.notyRenderer.setLayoutCountFor=function(b,c){return a(b.options.layout.container.selector).data("noty_layout_count",a.notyRenderer.getLayoutCountFor(b)+c)},a.notyRenderer.getModalCount=function(){return a(".noty_modal").data("noty_modal_count")||0},a.notyRenderer.setModalCount=function(b){return a(".noty_modal").data("noty_modal_count",a.notyRenderer.getModalCount()+b)},a.fn.noty=function(b){return b.custom=a(this),a.notyRenderer.init(b)},a.noty={},a.noty.queue=[],a.noty.ontap=!0,a.noty.layouts={},a.noty.themes={},a.noty.returns="object",a.noty.store={},a.noty.get=function(b){return a.noty.store.hasOwnProperty(b)?a.noty.store[b]:!1},a.noty.close=function(b){return a.noty.get(b)?a.noty.get(b).close():!1},a.noty.setText=function(b,c){return a.noty.get(b)?a.noty.get(b).setText(c):!1},a.noty.setType=function(b,c){return a.noty.get(b)?a.noty.get(b).setType(c):!1},a.noty.clearQueue=function(){a.noty.queue=[]},a.noty.closeAll=function(){a.noty.clearQueue(),a.each(a.noty.store,function(a,b){b.close()})};var c=window.alert;a.noty.consumeAlert=function(b){window.alert=function(c){b?b.text=c:b={text:c},a.notyRenderer.init(b)}},a.noty.stopConsumeAlert=function(){window.alert=c},a.noty.defaults={layout:"top",theme:"defaultTheme",type:"alert",text:"",dismissQueue:!0,template:'<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',animation:{open:{height:"toggle"},close:{height:"toggle"},easing:"swing",speed:500},timeout:!1,force:!1,modal:!1,maxVisible:5,killer:!1,closeWith:["click"],callback:{onShow:function(){},afterShow:function(){},onClose:function(){},afterClose:function(){},onCloseClick:function(){}},buttons:!1},a(window).on("resize",function(){a.each(a.noty.layouts,function(b,c){c.container.style.apply(a(c.container.selector))})})}(jQuery),window.noty=function(a){return jQuery.notyRenderer.init(a)},function(a){a.noty.layouts.bottom={name:"bottom",options:{},container:{object:'<ul id="noty_bottom_layout_container" />',selector:"ul#noty_bottom_layout_container",style:function(){a(this).css({bottom:0,left:"5%",position:"fixed",width:"90%",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:9999999})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none"},addClass:""}}(jQuery),function(a){a.noty.layouts.bottomCenter={name:"bottomCenter",options:{},container:{object:'<ul id="noty_bottomCenter_layout_container" />',selector:"ul#noty_bottomCenter_layout_container",style:function(){a(this).css({bottom:20,left:0,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),a(this).css({left:(a(window).width()-a(this).outerWidth(!1))/2+"px"})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.bottomLeft={name:"bottomLeft",options:{},container:{object:'<ul id="noty_bottomLeft_layout_container" />',selector:"ul#noty_bottomLeft_layout_container",style:function(){a(this).css({bottom:20,left:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),window.innerWidth<600&&a(this).css({left:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.bottomRight={name:"bottomRight",options:{},container:{object:'<ul id="noty_bottomRight_layout_container" />',selector:"ul#noty_bottomRight_layout_container",style:function(){a(this).css({bottom:20,right:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),window.innerWidth<600&&a(this).css({right:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.center={name:"center",options:{},container:{object:'<ul id="noty_center_layout_container" />',selector:"ul#noty_center_layout_container",style:function(){a(this).css({position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7});var b=a(this).clone().css({visibility:"hidden",display:"block",position:"absolute",top:0,left:0}).attr("id","dupe");a("body").append(b),b.find(".i-am-closing-now").remove(),b.find("li").css("display","block");var c=b.height();b.remove(),a(this).hasClass("i-am-new")?a(this).css({left:(a(window).width()-a(this).outerWidth(!1))/2+"px",top:(a(window).height()-c)/2+"px"}):a(this).animate({left:(a(window).width()-a(this).outerWidth(!1))/2+"px",top:(a(window).height()-c)/2+"px"},500)}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.centerLeft={name:"centerLeft",options:{},container:{object:'<ul id="noty_centerLeft_layout_container" />',selector:"ul#noty_centerLeft_layout_container",style:function(){a(this).css({left:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7});var b=a(this).clone().css({visibility:"hidden",display:"block",position:"absolute",top:0,left:0}).attr("id","dupe");a("body").append(b),b.find(".i-am-closing-now").remove(),b.find("li").css("display","block");var c=b.height();b.remove(),a(this).hasClass("i-am-new")?a(this).css({top:(a(window).height()-c)/2+"px"}):a(this).animate({top:(a(window).height()-c)/2+"px"},500),window.innerWidth<600&&a(this).css({left:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.centerRight={name:"centerRight",options:{},container:{object:'<ul id="noty_centerRight_layout_container" />',selector:"ul#noty_centerRight_layout_container",style:function(){a(this).css({right:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7});var b=a(this).clone().css({visibility:"hidden",display:"block",position:"absolute",top:0,left:0}).attr("id","dupe");a("body").append(b),b.find(".i-am-closing-now").remove(),b.find("li").css("display","block");var c=b.height();b.remove(),a(this).hasClass("i-am-new")?a(this).css({top:(a(window).height()-c)/2+"px"}):a(this).animate({top:(a(window).height()-c)/2+"px"},500),window.innerWidth<600&&a(this).css({right:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.inline={name:"inline",options:{},container:{object:'<ul class="noty_inline_layout_container" />',selector:"ul.noty_inline_layout_container",style:function(){a(this).css({width:"100%",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:9999999})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none"},addClass:""}}(jQuery),function(a){a.noty.layouts.top={name:"top",options:{},container:{object:'<ul id="noty_top_layout_container" />',selector:"ul#noty_top_layout_container",style:function(){a(this).css({top:0,left:"5%",position:"fixed",width:"90%",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:9999999})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none"},addClass:""}}(jQuery),function(a){a.noty.layouts.topCenter={name:"topCenter",options:{},container:{object:'<ul id="noty_topCenter_layout_container" />',selector:"ul#noty_topCenter_layout_container",style:function(){a(this).css({top:20,left:0,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),a(this).css({left:(a(window).width()-a(this).outerWidth(!1))/2+"px"})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.topLeft={name:"topLeft",options:{},container:{object:'<ul id="noty_topLeft_layout_container" />',selector:"ul#noty_topLeft_layout_container",style:function(){a(this).css({top:20,left:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),window.innerWidth<600&&a(this).css({left:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.layouts.topRight={name:"topRight",options:{},container:{object:'<ul id="noty_topRight_layout_container" />',selector:"ul#noty_topRight_layout_container",style:function(){a(this).css({top:20,right:20,position:"fixed",width:"310px",height:"auto",margin:0,padding:0,listStyleType:"none",zIndex:1e7}),window.innerWidth<600&&a(this).css({right:5})}},parent:{object:"<li />",selector:"li",css:{}},css:{display:"none",width:"310px"},addClass:""}}(jQuery),function(a){a.noty.themes.defaultTheme={name:"defaultTheme",helpers:{borderFix:function(){if(this.options.dismissQueue){var b=this.options.layout.container.selector+" "+this.options.layout.parent.selector;switch(this.options.layout.name){case"top":a(b).css({borderRadius:"0px 0px 0px 0px"}),a(b).last().css({borderRadius:"0px 0px 5px 5px"});break;case"topCenter":case"topLeft":case"topRight":case"bottomCenter":case"bottomLeft":case"bottomRight":case"center":case"centerLeft":case"centerRight":case"inline":a(b).css({borderRadius:"0px 0px 0px 0px"}),a(b).first().css({"border-top-left-radius":"5px","border-top-right-radius":"5px"}),a(b).last().css({"border-bottom-left-radius":"5px","border-bottom-right-radius":"5px"});break;case"bottom":a(b).css({borderRadius:"0px 0px 0px 0px"}),a(b).first().css({borderRadius:"5px 5px 0px 0px"})}}}},modal:{css:{position:"fixed",width:"100%",height:"100%",backgroundColor:"#000",zIndex:1e4,opacity:.6,display:"none",left:0,top:0}},style:function(){switch(this.$bar.css({overflow:"hidden",background:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==') repeat-x scroll left top #fff"}),this.$message.css({fontSize:"13px",lineHeight:"16px",textAlign:"center",padding:"8px 10px 9px",width:"auto",position:"relative"}),this.$closeButton.css({position:"absolute",top:4,right:4,width:10,height:10,background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAATpJREFUeNoszrFqVFEUheG19zlz7sQ7ijMQBAvfYBqbpJCoZSAQbOwEE1IHGytbLQUJ8SUktW8gCCFJMSGSNxCmFBJO7j5rpXD6n5/P5vM53H3b3T9LOiB5AQDuDjM7BnA7DMPHDGBH0nuSzwHsRcRVRNRSysuU0i6AOwA/02w2+9Fae00SEbEh6SGAR5K+k3zWWptKepCm0+kpyRoRGyRBcpPkDsn1iEBr7drdP2VJZyQXERGSPpiZAViTBACXKaV9kqd5uVzCzO5KKb/d/UZSDwD/eyxqree1VqSu6zKAF2Z2RPJJaw0rAkjOJT0m+SuT/AbgDcmnkmBmfwAsJL1dXQ8lWY6IGwB1ZbrOOb8zs8thGP4COFwx/mE8Ho9Go9ErMzvJOW/1fY/JZIJSypqZfXX3L13X9fcDAKJct1sx3OiuAAAAAElFTkSuQmCC)",display:"none",cursor:"pointer"}),this.$buttons.css({padding:5,textAlign:"right",borderTop:"1px solid #ccc",backgroundColor:"#fff"}),this.$buttons.find("button").css({marginLeft:5}),this.$buttons.find("button:first").css({marginLeft:0}),this.$bar.on({mouseenter:function(){a(this).find(".noty_close").stop().fadeTo("normal",1)},mouseleave:function(){a(this).find(".noty_close").stop().fadeTo("normal",0)}}),this.options.layout.name){case"top":this.$bar.css({borderRadius:"0px 0px 5px 5px",borderBottom:"2px solid #eee",borderLeft:"2px solid #eee",borderRight:"2px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"});break;case"topCenter":case"center":case"bottomCenter":case"inline":this.$bar.css({borderRadius:"5px",border:"1px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}),this.$message.css({fontSize:"13px",textAlign:"center"});break;case"topLeft":case"topRight":case"bottomLeft":case"bottomRight":case"centerLeft":case"centerRight":this.$bar.css({borderRadius:"5px",border:"1px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}),this.$message.css({fontSize:"13px",textAlign:"left"});break;case"bottom":this.$bar.css({borderRadius:"5px 5px 0px 0px",borderTop:"2px solid #eee",borderLeft:"2px solid #eee",borderRight:"2px solid #eee",boxShadow:"0 -2px 4px rgba(0, 0, 0, 0.1)"});break;default:this.$bar.css({border:"2px solid #eee",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"})}switch(this.options.type){case"alert":case"notification":this.$bar.css({backgroundColor:"#FFF",borderColor:"#CCC",color:"#444"});break;case"warning":this.$bar.css({backgroundColor:"#FFEAA8",borderColor:"#FFC237",color:"#826200"}),this.$buttons.css({borderTop:"1px solid #FFC237"});break;case"error":this.$bar.css({backgroundColor:"red",borderColor:"darkred",color:"#FFF"}),this.$message.css({fontWeight:"bold"}),this.$buttons.css({borderTop:"1px solid darkred"});break;case"information":this.$bar.css({backgroundColor:"#57B7E2",borderColor:"#0B90C4",color:"#FFF"}),this.$buttons.css({borderTop:"1px solid #0B90C4"});break;case"success":this.$bar.css({backgroundColor:"lightgreen",borderColor:"#50C24E",color:"darkgreen"}),this.$buttons.css({borderTop:"1px solid #50C24E"});break;default:this.$bar.css({backgroundColor:"#FFF",borderColor:"#CCC",color:"#444"})}},callback:{onShow:function(){a.noty.themes.defaultTheme.helpers.borderFix.apply(this)},onClose:function(){a.noty.themes.defaultTheme.helpers.borderFix.apply(this)}}}}(jQuery);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.youtap = {};

})();

//# sourceMappingURL=9ec615e64cda3e0fc5cdcffce810d6c71a816d74.map

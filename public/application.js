
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.ProgressBar=a()}}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,b,a,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(b,c,d){(function(){var b=this,e=function(){"use strict";function e(){}function f(a,b){var c;for(c in a)Object.hasOwnProperty.call(a,c)&&b(c)}function g(a,b){return f(b,function(c){a[c]=b[c]}),a}function h(a,b){f(b,function(c){"undefined"==typeof a[c]&&(a[c]=b[c])})}function i(a,b,c,d,e,f,g){var h,i,k,l=f>a?0:(a-f)/e;for(h in b)b.hasOwnProperty(h)&&(i=g[h],k="function"==typeof i?i:o[i],b[h]=j(c[h],d[h],k,l));return b}function j(a,b,c,d){return a+(b-a)*c(d)}function k(a,b){var c=n.prototype.filter,d=a._filterArgs;f(c,function(e){"undefined"!=typeof c[e][b]&&c[e][b].apply(a,d)})}function l(a,b,c,d,e,f,g,h,j,l,m){v=b+c+d,w=Math.min(m||u(),v),x=w>=v,y=d-(v-w),a.isPlaying()&&!x?(a._scheduleId=l(a._timeoutHandler,s),k(a,"beforeTween"),b+c>w?i(1,e,f,g,1,1,h):i(w,e,f,g,d,b+c,h),k(a,"afterTween"),j(e,a._attachment,y)):a.isPlaying()&&x&&(j(g,a._attachment,y),a.stop(!0))}function m(a,b){var c={},d=typeof b;return"string"===d||"function"===d?f(a,function(a){c[a]=b}):f(a,function(a){c[a]||(c[a]=b[a]||q)}),c}function n(a,b){this._currentState=a||{},this._configured=!1,this._scheduleFunction=p,"undefined"!=typeof b&&this.setConfig(b)}var o,p,q="linear",r=500,s=1e3/60,t=Date.now?Date.now:function(){return+new Date},u="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:t;p="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame||setTimeout:setTimeout;var v,w,x,y;return n.prototype.tween=function(a){return this._isTweening?this:(void 0===a&&this._configured||this.setConfig(a),this._timestamp=u(),this._start(this.get(),this._attachment),this.resume())},n.prototype.setConfig=function(a){a=a||{},this._configured=!0,this._attachment=a.attachment,this._pausedAtTime=null,this._scheduleId=null,this._delay=a.delay||0,this._start=a.start||e,this._step=a.step||e,this._finish=a.finish||e,this._duration=a.duration||r,this._currentState=g({},a.from)||this.get(),this._originalState=this.get(),this._targetState=g({},a.to)||this.get();var b=this;this._timeoutHandler=function(){l(b,b._timestamp,b._delay,b._duration,b._currentState,b._originalState,b._targetState,b._easing,b._step,b._scheduleFunction)};var c=this._currentState,d=this._targetState;return h(d,c),this._easing=m(c,a.easing||q),this._filterArgs=[c,this._originalState,d,this._easing],k(this,"tweenCreated"),this},n.prototype.get=function(){return g({},this._currentState)},n.prototype.set=function(a){this._currentState=a},n.prototype.pause=function(){return this._pausedAtTime=u(),this._isPaused=!0,this},n.prototype.resume=function(){return this._isPaused&&(this._timestamp+=u()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this},n.prototype.seek=function(a){a=Math.max(a,0);var b=u();return this._timestamp+a===0?this:(this._timestamp=b-a,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,l(this,this._timestamp,this._delay,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction,b),this.pause()),this)},n.prototype.stop=function(a){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=e,(b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.oCancelAnimationFrame||b.msCancelAnimationFrame||b.mozCancelRequestAnimationFrame||b.clearTimeout)(this._scheduleId),a&&(k(this,"beforeTween"),i(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),k(this,"afterTween"),k(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this},n.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},n.prototype.setScheduleFunction=function(a){this._scheduleFunction=a},n.prototype.dispose=function(){var a;for(a in this)this.hasOwnProperty(a)&&delete this[a]},n.prototype.filter={},n.prototype.formula={linear:function(a){return a}},o=n.prototype.formula,g(n,{now:u,each:f,tweenProps:i,tweenProp:j,applyFilter:k,shallowCopy:g,defaults:h,composeEasingObject:m}),"function"==typeof SHIFTY_DEBUG_NOW&&(b.timeoutHandler=l),"object"==typeof d?c.exports=n:"function"==typeof a&&a.amd?a(function(){return n}):"undefined"==typeof b.Tweenable&&(b.Tweenable=n),n}();!function(){e.shallowCopy(e.prototype.formula,{easeInQuad:function(a){return Math.pow(a,2)},easeOutQuad:function(a){return-(Math.pow(a-1,2)-1)},easeInOutQuad:function(a){return(a/=.5)<1?.5*Math.pow(a,2):-.5*((a-=2)*a-2)},easeInCubic:function(a){return Math.pow(a,3)},easeOutCubic:function(a){return Math.pow(a-1,3)+1},easeInOutCubic:function(a){return(a/=.5)<1?.5*Math.pow(a,3):.5*(Math.pow(a-2,3)+2)},easeInQuart:function(a){return Math.pow(a,4)},easeOutQuart:function(a){return-(Math.pow(a-1,4)-1)},easeInOutQuart:function(a){return(a/=.5)<1?.5*Math.pow(a,4):-.5*((a-=2)*Math.pow(a,3)-2)},easeInQuint:function(a){return Math.pow(a,5)},easeOutQuint:function(a){return Math.pow(a-1,5)+1},easeInOutQuint:function(a){return(a/=.5)<1?.5*Math.pow(a,5):.5*(Math.pow(a-2,5)+2)},easeInSine:function(a){return-Math.cos(a*(Math.PI/2))+1},easeOutSine:function(a){return Math.sin(a*(Math.PI/2))},easeInOutSine:function(a){return-.5*(Math.cos(Math.PI*a)-1)},easeInExpo:function(a){return 0===a?0:Math.pow(2,10*(a-1))},easeOutExpo:function(a){return 1===a?1:-Math.pow(2,-10*a)+1},easeInOutExpo:function(a){return 0===a?0:1===a?1:(a/=.5)<1?.5*Math.pow(2,10*(a-1)):.5*(-Math.pow(2,-10*--a)+2)},easeInCirc:function(a){return-(Math.sqrt(1-a*a)-1)},easeOutCirc:function(a){return Math.sqrt(1-Math.pow(a-1,2))},easeInOutCirc:function(a){return(a/=.5)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},easeOutBounce:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},easeInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},easeOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},easeInOutBack:function(a){var b=1.70158;return(a/=.5)<1?.5*(a*a*(((b*=1.525)+1)*a-b)):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},elastic:function(a){return-1*Math.pow(4,-8*a)*Math.sin((6*a-1)*(2*Math.PI)/2)+1},swingFromTo:function(a){var b=1.70158;return(a/=.5)<1?.5*(a*a*(((b*=1.525)+1)*a-b)):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},swingFrom:function(a){var b=1.70158;return a*a*((b+1)*a-b)},swingTo:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},bounce:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},bouncePast:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?2-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?2-(7.5625*(a-=2.25/2.75)*a+.9375):2-(7.5625*(a-=2.625/2.75)*a+.984375)},easeFromTo:function(a){return(a/=.5)<1?.5*Math.pow(a,4):-.5*((a-=2)*Math.pow(a,3)-2)},easeFrom:function(a){return Math.pow(a,4)},easeTo:function(a){return Math.pow(a,.25)}})}(),function(){function a(a,b,c,d,e,f){function g(a){return((n*a+o)*a+p)*a}function h(a){return((q*a+r)*a+s)*a}function i(a){return(3*n*a+2*o)*a+p}function j(a){return 1/(200*a)}function k(a,b){return h(m(a,b))}function l(a){return a>=0?a:0-a}function m(a,b){var c,d,e,f,h,j;for(e=a,j=0;8>j;j++){if(f=g(e)-a,l(f)<b)return e;if(h=i(e),l(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),l(f-a)<b)return e;a>f?c=e:d=e,e=.5*(d-c)+c}return e}var n=0,o=0,p=0,q=0,r=0,s=0;return p=3*b,o=3*(d-b)-p,n=1-p-o,s=3*c,r=3*(e-c)-s,q=1-s-r,k(a,j(f))}function b(b,c,d,e){return function(f){return a(f,b,c,d,e,1)}}e.setBezierFunction=function(a,c,d,f,g){var h=b(c,d,f,g);return h.displayName=a,h.x1=c,h.y1=d,h.x2=f,h.y2=g,e.prototype.formula[a]=h},e.unsetBezierFunction=function(a){delete e.prototype.formula[a]}}(),function(){function a(a,b,c,d,f,g){return e.tweenProps(d,b,a,c,1,g,f)}var b=new e;b._filterArgs=[],e.interpolate=function(c,d,f,g,h){var i=e.shallowCopy({},c),j=h||0,k=e.composeEasingObject(c,g||"linear");b.set({});var l=b._filterArgs;l.length=0,l[0]=i,l[1]=c,l[2]=d,l[3]=k,e.applyFilter(b,"tweenCreated"),e.applyFilter(b,"beforeTween");var m=a(c,i,d,f,k,j);return e.applyFilter(b,"afterTween"),m}}(),function(a){function b(a,b){var c,d=[],e=a.length;for(c=0;e>c;c++)d.push("_"+b+"_"+c);return d}function c(a){var b=a.match(v);return b?(1===b.length||a[0].match(u))&&b.unshift(""):b=["",""],b.join(A)}function d(b){a.each(b,function(a){var c=b[a];"string"==typeof c&&c.match(z)&&(b[a]=e(c))})}function e(a){return i(z,a,f)}function f(a){var b=g(a);return"rgb("+b[0]+","+b[1]+","+b[2]+")"}function g(a){return a=a.replace(/#/,""),3===a.length&&(a=a.split(""),a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),B[0]=h(a.substr(0,2)),B[1]=h(a.substr(2,2)),B[2]=h(a.substr(4,2)),B}function h(a){return parseInt(a,16)}function i(a,b,c){var d=b.match(a),e=b.replace(a,A);if(d)for(var f,g=d.length,h=0;g>h;h++)f=d.shift(),e=e.replace(A,c(f));return e}function j(a){return i(x,a,k)}function k(a){for(var b=a.match(w),c=b.length,d=a.match(y)[0],e=0;c>e;e++)d+=parseInt(b[e],10)+",";return d=d.slice(0,-1)+")"}function l(d){var e={};return a.each(d,function(a){var f=d[a];if("string"==typeof f){var g=r(f);e[a]={formatString:c(f),chunkNames:b(g,a)}}}),e}function m(b,c){a.each(c,function(a){for(var d=b[a],e=r(d),f=e.length,g=0;f>g;g++)b[c[a].chunkNames[g]]=+e[g];delete b[a]})}function n(b,c){a.each(c,function(a){var d=b[a],e=o(b,c[a].chunkNames),f=p(e,c[a].chunkNames);d=q(c[a].formatString,f),b[a]=j(d)})}function o(a,b){for(var c,d={},e=b.length,f=0;e>f;f++)c=b[f],d[c]=a[c],delete a[c];return d}function p(a,b){C.length=0;for(var c=b.length,d=0;c>d;d++)C.push(a[b[d]]);return C}function q(a,b){for(var c=a,d=b.length,e=0;d>e;e++)c=c.replace(A,+b[e].toFixed(4));return c}function r(a){return a.match(w)}function s(b,c){a.each(c,function(a){var d,e=c[a],f=e.chunkNames,g=f.length,h=b[a];if("string"==typeof h){var i=h.split(" "),j=i[i.length-1];for(d=0;g>d;d++)b[f[d]]=i[d]||j}else for(d=0;g>d;d++)b[f[d]]=h;delete b[a]})}function t(b,c){a.each(c,function(a){var d=c[a],e=d.chunkNames,f=e.length,g=b[e[0]],h=typeof g;if("string"===h){for(var i="",j=0;f>j;j++)i+=" "+b[e[j]],delete b[e[j]];b[a]=i.substr(1)}else b[a]=g})}var u=/(\d|\-|\.)/,v=/([^\-0-9\.]+)/g,w=/[0-9.\-]+/g,x=new RegExp("rgb\\("+w.source+/,\s*/.source+w.source+/,\s*/.source+w.source+"\\)","g"),y=/^.*\(/,z=/#([0-9]|[a-f]){3,6}/gi,A="VAL",B=[],C=[];a.prototype.filter.token={tweenCreated:function(a,b,c,e){d(a),d(b),d(c),this._tokenData=l(a)},beforeTween:function(a,b,c,d){s(d,this._tokenData),m(a,this._tokenData),m(b,this._tokenData),m(c,this._tokenData)},afterTween:function(a,b,c,d){n(a,this._tokenData),n(b,this._tokenData),n(c,this._tokenData),t(d,this._tokenData)}}}(e)}).call(null)},{}],2:[function(a,b,c){var d=a("./shape"),e=a("./utils"),f=function(a,b){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",d.apply(this,arguments)};f.prototype=new d,f.prototype.constructor=f,f.prototype._pathString=function(a){var b=a.strokeWidth;a.trailWidth&&a.trailWidth>a.strokeWidth&&(b=a.trailWidth);var c=50-b/2;return e.render(this._pathTemplate,{radius:c,"2radius":2*c})},f.prototype._trailString=function(a){return this._pathString(a)},b.exports=f},{"./shape":7,"./utils":8}],3:[function(a,b,c){var d=a("./shape"),e=a("./utils"),f=function(a,b){this._pathTemplate="M 0,{center} L 100,{center}",d.apply(this,arguments)};f.prototype=new d,f.prototype.constructor=f,f.prototype._initializeSvg=function(a,b){a.setAttribute("viewBox","0 0 100 "+b.strokeWidth),a.setAttribute("preserveAspectRatio","none")},f.prototype._pathString=function(a){return e.render(this._pathTemplate,{center:a.strokeWidth/2})},f.prototype._trailString=function(a){return this._pathString(a)},b.exports=f},{"./shape":7,"./utils":8}],4:[function(a,b,c){b.exports={Line:a("./line"),Circle:a("./circle"),SemiCircle:a("./semicircle"),Path:a("./path"),Shape:a("./shape"),utils:a("./utils")}},{"./circle":2,"./line":3,"./path":5,"./semicircle":6,"./shape":7,"./utils":8}],5:[function(a,b,c){var d=a("shifty"),e=a("./utils"),f={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},g=function(a,b){b=e.extend({duration:800,easing:"linear",from:{},to:{},step:function(){}},b);var c;c=e.isString(a)?document.querySelector(a):a,this.path=c,this._opts=b,this._tweenable=null;var d=this.path.getTotalLength();this.path.style.strokeDasharray=d+" "+d,this.set(0)};g.prototype.value=function(){var a=this._getComputedDashOffset(),b=this.path.getTotalLength(),c=1-a/b;return parseFloat(c.toFixed(6),10)},g.prototype.set=function(a){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(a);var b=this._opts.step;if(e.isFunction(b)){var c=this._easing(this._opts.easing),d=this._calculateTo(a,c),f=this._opts.shape||this;b(d,f,this._opts.attachment)}},g.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},g.prototype.animate=function(a,b,c){b=b||{},e.isFunction(b)&&(c=b,b={});var f=e.extend({},b),g=e.extend({},this._opts);b=e.extend(g,b);var h=this._easing(b.easing),i=this._resolveFromAndTo(a,h,f);this.stop(),this.path.getBoundingClientRect();var j=this._getComputedDashOffset(),k=this._progressToOffset(a),l=this;this._tweenable=new d,this._tweenable.tween({from:e.extend({offset:j},i.from),to:e.extend({offset:k},i.to),duration:b.duration,easing:h,step:function(a){l.path.style.strokeDashoffset=a.offset;var c=b.shape||l;b.step(a,c,b.attachment)},finish:function(a){e.isFunction(c)&&c()}})},g.prototype._getComputedDashOffset=function(){var a=window.getComputedStyle(this.path,null);return parseFloat(a.getPropertyValue("stroke-dashoffset"),10)},g.prototype._progressToOffset=function(a){var b=this.path.getTotalLength();return b-a*b},g.prototype._resolveFromAndTo=function(a,b,c){return c.from&&c.to?{from:c.from,to:c.to}:{from:this._calculateFrom(b),to:this._calculateTo(a,b)}},g.prototype._calculateFrom=function(a){return d.interpolate(this._opts.from,this._opts.to,this.value(),a)},g.prototype._calculateTo=function(a,b){return d.interpolate(this._opts.from,this._opts.to,a,b)},g.prototype._stopTween=function(){null!==this._tweenable&&(this._tweenable.stop(),this._tweenable.dispose(),this._tweenable=null)},g.prototype._easing=function(a){return f.hasOwnProperty(a)?f[a]:a},b.exports=g},{"./utils":8,shifty:1}],6:[function(a,b,c){var d=a("./shape"),e=a("./circle"),f=a("./utils"),g=function(a,b){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",d.apply(this,arguments)};g.prototype=new d,g.prototype.constructor=g,g.prototype._initializeSvg=function(a,b){a.setAttribute("viewBox","0 0 100 50")},g.prototype._initializeTextElement=function(a,b,c){a.text.style&&(c.style.top="auto",c.style.bottom="0",a.text.alignToBottom?f.setStyle(c,"transform","translate(-50%, 0)"):f.setStyle(c,"transform","translate(-50%, 50%)"))},g.prototype._pathString=e.prototype._pathString,g.prototype._trailString=e.prototype._trailString,b.exports=g},{"./circle":2,"./shape":7,"./utils":8}],7:[function(a,b,c){var d=a("./path"),e=a("./utils"),f="Object is destroyed",g=function h(a,b){if(!(this instanceof h))throw new Error("Constructor was called without new keyword");if(0!==arguments.length){this._opts=e.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},alignToBottom:!0,value:"",className:"progressbar-text"},svgStyle:{display:"block",width:"100%"}},b,!0);var c,f=this._createSvgView(this._opts);if(c=e.isString(a)?document.querySelector(a):a,!c)throw new Error("Container does not exist: "+a);this._container=c,this._container.appendChild(f.svg),this._opts.svgStyle&&e.setStyles(f.svg,this._opts.svgStyle),this.text=null,this._opts.text.value&&(this.text=this._createTextElement(this._opts,this._container),this._container.appendChild(this.text)),this.svg=f.svg,this.path=f.path,this.trail=f.trail;var g=e.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new d(f.path,g)}};g.prototype.animate=function(a,b,c){if(null===this._progressPath)throw new Error(f);this._progressPath.animate(a,b,c)},g.prototype.stop=function(){if(null===this._progressPath)throw new Error(f);void 0!==this._progressPath&&this._progressPath.stop()},g.prototype.destroy=function(){if(null===this._progressPath)throw new Error(f);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,null!==this.text&&(this.text.parentNode.removeChild(this.text),this.text=null)},g.prototype.set=function(a){if(null===this._progressPath)throw new Error(f);this._progressPath.set(a)},g.prototype.value=function(){if(null===this._progressPath)throw new Error(f);return void 0===this._progressPath?0:this._progressPath.value()},g.prototype.setText=function(a){if(null===this._progressPath)throw new Error(f);null===this.text&&(this.text=this._createTextElement(this._opts,this._container),this._container.appendChild(this.text)),this.text.removeChild(this.text.firstChild),this.text.appendChild(document.createTextNode(a))},g.prototype._createSvgView=function(a){var b=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(b,a);var c=null;(a.trailColor||a.trailWidth)&&(c=this._createTrail(a),b.appendChild(c));var d=this._createPath(a);return b.appendChild(d),{svg:b,path:d,trail:c}},g.prototype._initializeSvg=function(a,b){a.setAttribute("viewBox","0 0 100 100")},g.prototype._createPath=function(a){var b=this._pathString(a);return this._createPathElement(b,a)},g.prototype._createTrail=function(a){var b=this._trailString(a),c=e.extend({},a);return c.trailColor||(c.trailColor="#eee"),c.trailWidth||(c.trailWidth=c.strokeWidth),c.color=c.trailColor,c.strokeWidth=c.trailWidth,c.fill=null,this._createPathElement(b,c)},g.prototype._createPathElement=function(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg","path");return c.setAttribute("d",a),c.setAttribute("stroke",b.color),c.setAttribute("stroke-width",b.strokeWidth),b.fill?c.setAttribute("fill",b.fill):c.setAttribute("fill-opacity","0"),c},g.prototype._createTextElement=function(a,b){var c=document.createElement("p");c.appendChild(document.createTextNode(a.text.value));var d=a.text.style;return d&&(b.style.position="relative",e.setStyles(c,d),d.color||(c.style.color=a.color)),c.className=a.text.className,this._initializeTextElement(a,b,c),c},g.prototype._initializeTextElement=function(a,b,c){},g.prototype._pathString=function(a){throw new Error("Override this function for each progress bar")},g.prototype._trailString=function(a){throw new Error("Override this function for each progress bar")},b.exports=g},{"./path":5,"./utils":8}],8:[function(a,b,c){function d(a,b,c){a=a||{},b=b||{},c=c||!1;for(var e in b)if(b.hasOwnProperty(e)){var f=a[e],g=b[e];c&&l(f)&&l(g)?a[e]=d(f,g,c):a[e]=g}return a}function e(a,b){var c=a;for(var d in b)if(b.hasOwnProperty(d)){var e=b[d],f="\\{"+d+"\\}",g=new RegExp(f,"g");c=c.replace(g,e)}return c}function f(a,b,c){for(var d=0;d<n.length;++d){var e=n[d];a.style[e+h(b)]=c}a.style[b]=c}function g(a,b){m(b,function(b,c){null!==b&&void 0!==b&&(l(b)&&b.prefix===!0?f(a,c,b.value):a.style[c]=b)})}function h(a){return a.charAt(0).toUpperCase()+a.slice(1)}function i(a){return"string"==typeof a||a instanceof String}function j(a){return"function"==typeof a}function k(a){return"[object Array]"===Object.prototype.toString.call(a)}function l(a){if(k(a))return!1;var b=typeof a;return"object"===b&&!!a}function m(a,b){for(var c in a)if(a.hasOwnProperty(c)){var d=a[c];b(d,c)}}var n="Webkit Moz O ms".split(" ");b.exports={extend:d,render:e,setStyle:f,setStyles:g,capitalize:h,isString:i,isFunction:j,isObject:l,forEachObject:m}},{}]},{},[4])(4)});
//# sourceMappingURL=progressbar.min.js.map


/*
  JSQR - JavaScript Quick Response Code Encoder Library v0.2
  http://jsqr.de/

  Copyright 2011, Jens Duttke
  Dual licensed under the MIT or GPL Version 2 licenses.
  http://jsqr.de/license
 
  Date: 2011-09-29
*/
(function(w,z){var A='JSQR';w[A]=function(){};w[A].prototype.encode=function(a,b){return new w[A].prototype.Matrix(a,b)};w[A].prototype.Input=function(b,c){if(typeof(b)!=='undefined'){if(!isEnumValue(this.DATA_TYPE,b)){throw new TypeError('Unsupported dataType.');}}else{b=this.DATA_TYPE.DEFAULT}try{Object.defineProperty(this,'dataType',{configurable:false,writeable:true,get:function(){return b},set:function(a){if(isEnumValue(this.DATA_TYPE,a)){b=a}else{throw new TypeError('Unsupported dataType.');}}})}catch(e){this.dataType=b}if(typeof(c)==='object'){this.data=copyObject(c)}else{this.data=c}};w[A].prototype.Input.prototype.DATA_TYPE={DEFAULT:0,TEXT:0,URL:1,BOOKMARK:2,CALL:3,SMS:4,EMAIL:5,VCARD:6,MECARD:7,VEVENT:8,GOOGLE_MAPS:9,BING_MAPS:10,GEO:11,ITUNES:12,ITUNES_REVIEW:13,ANDROID_MARKET:14,FACEBOOK_USER_PROFILE:15,FOURSQUARE:16,TWEET_FETCH:17,TWEET:18,BLACKBERRY_MESSENGER_USER:19,ANDROID_WIFI:20,WIKIPEDIA:21,YOUTUBE_USER:22,YOUTUBE_VIDEO:23};w[A].prototype.DATA_TYPE=w[A].prototype.Input.prototype.DATA_TYPE;w[A].prototype.Input.prototype.toString=function(){var d=this,str,tmp,replaceObj;switch(this.dataType){case this.DATA_TYPE.DEFAULT:case this.DATA_TYPE.TEXT:if(typeof(this.data)==='object'){validateType('data.text','string','number');validateRequired('data.text');return dataStr('text')}else{validateType('data','string','number');validateRequired('data');return dataStr()}case this.DATA_TYPE.URL:switch(typeof(this.data)){case'string':validateRequired('data');return(/^[a-zA-Z]+:\/\//.test(dataStr())?'':'http://')+dataStr();case'object':validateType('data.url','string');validateRequired('data.url');return(/^[a-zA-Z]+:\/\//.test(dataStr('url'))?'':'http://')+dataStr('url');default:throw new TypeError('Unexcepted type of data.url (string).');}case this.DATA_TYPE.BOOKMARK:validateType('data','object');validateType('data.title','string','number');validateType('data.url','string');validateRequired('data.title','data.url');return'MEBKM:TITLE:'+dataStr('title')+';URL:'+(/^[a-zA-Z]+:\/\//.test(dataStr('url'))?'':'http://')+dataStr('url');case this.DATA_TYPE.CALL:switch(typeof(this.data)){case'string':case'number':validateRequired('data');return'TEL:'+dataStr();case'object':switch(typeof(this.data.phoneNumber)){case'string':case'number':validateRequired('data.phoneNumber');return'TEL:'+dataStr('phoneNumber');default:throw new TypeError('Unexcepted type of data (string|number).');}default:throw new TypeError('Unexcepted type of data.phoneNumber (string|number).');}case this.DATA_TYPE.SMS:validateType('data','object');validateType('data.phoneNumber','string','number');validateType('data.message','string','number');validateRequired('data.phoneNumber');return'SMSTO:'+dataStr('phoneNumber')+':'+dataStr('message');case this.DATA_TYPE.EMAIL:validateType('data','object');validateType('data.recipient','string');validateType('data.subject','string');validateType('data.body','string');validateRequired('data.recipient');return'SMTP:'+dataStr('recipient').replace(':','')+':'+dataStr('subject').replace(/:/g,'\\:')+':'+dataStr('body');case this.DATA_TYPE.VCARD:validateType('data','object');validateType('data.version','string','number');validateType('data.type','string');validateType('data.firstName','string','number');validateType('data.middleName','string','number');validateType('data.lastName','string','number');validateType('data.organization','string','number');validateType('data.title','string','number');validateType('data.mobilePhone','string','number');validateType('data.work','object');validateType('data.work.street','string','number');validateType('data.work.city','string');validateType('data.work.zip','string','number');validateType('data.work.state','string');validateType('data.work.country','string');validateType('data.work.phone','string','number');validateType('data.work.fax','string','number');validateType('data.work.eMail','string');validateType('data.work.url','string');validateType('data.home','object');validateType('data.home.street','string','number');validateType('data.home.city','string','number');validateType('data.home.zip','string','number');validateType('data.home.state','string','number');validateType('data.home.country','string');validateType('data.home.phone','string','number');validateType('data.home.eMail','string');validateType('data.home.url','string');validateType('data.birthday',Date,null);validateRequired('data.version','data.type');replaceObj={'\\':'\\\\',';':'\\;',',':'\\,','\n':'\\n'};str=[];switch(parseFloat(dataStr('version'))){case 2.1:str[0]='2.1';break;case 3:str[0]='3.0';break;default:throw new Error('Unsupported VCARD.version ('+dataStr('version')+').');}switch(dataStr('type').toLowerCase()){case'person':str[1]=(dataStr('firstName').length>0||dataStr('middleName').length>0||dataStr('lastName').length>0?'FN:'+(translateChars(dataStr('firstName'),replaceObj)+' '+translateChars(dataStr('middleName'),replaceObj)+' '+translateChars(dataStr('lastName'),replaceObj)).replace(/\s{2,}/g,' ').replace(/^\s+|\s+$/g,'')+'\n':'')+(dataStr('organization').length>0?'ORG:'+translateChars(dataStr('organization'),replaceObj)+'\n':'');break;case'company':str[1]=(dataStr('organization').length>0?'ORG:'+translateChars(dataStr('organization'),replaceObj)+'\n':'')+(dataStr('organization').length>0?'FN:'+translateChars(dataStr('organization'),replaceObj)+'\n':'')+'X-ABShowAs:COMPANY\n';break;default:throw new Error('Unsupported VCARD.type ('+dataStr('type')+').');}return'BEGIN:VCARD\n'+'VERSION:'+str[0]+'\n'+(dataStr('lastName').length>0||dataStr('firstName').length>0||dataStr('middleName').length>0?'N:'+translateChars(dataStr('lastName'),replaceObj)+';'+translateChars(dataStr('firstName'),replaceObj)+';'+translateChars(dataStr('middleName'),replaceObj)+';;\n':'')+str[1]+(dataStr('title').length>0?'TITLE:'+translateChars(dataStr('title'),replaceObj)+'\n':'')+(data('work')&&dataStr('work.eMail').length>0?'EMAIL;'+(str[0]==='3.0'?'type=INTERNET;type=':'INTERNET;')+'WORK:'+translateChars(dataStr('work.eMail'),replaceObj)+'\n':'')+(data('home')&&dataStr('home.eMail').length>0?'EMAIL;'+(str[0]==='3.0'?'type=INTERNET;type=':'INTERNET;')+'HOME:'+translateChars(dataStr('home.eMail'),replaceObj)+'\n':'')+(dataStr('mobilePhone').length>0?'TEL;'+(str[0]==='3.0'?'type=':'')+'CELL:'+translateChars(dataStr('mobilePhone'),replaceObj)+'\n':'')+(data('work')&&dataStr('work.phone').length>0?'TEL;'+(str[0]==='3.0'?'type=':'')+'WORK:'+translateChars(dataStr('work.phone'),replaceObj)+'\n':'')+(data('home')&&dataStr('home.phone').length>0?'TEL;'+(str[0]==='3.0'?'type=':'')+'HOME:'+translateChars(dataStr('home.phone'),replaceObj)+'\n':'')+(data('work')&&dataStr('work.fax').length>0?'TEL;'+(str[0]==='3.0'?'type=WORK,':'WORK;')+'FAX:'+translateChars(dataStr('work.fax'),replaceObj)+'\n':'')+(data('work')&&(dataStr('work.street').length>0||dataStr('work.city').length>0||dataStr('work.state').length>0||dataStr('work.zip').length>0||dataStr('work.country').length>0)?'ADR;'+(str[0]==='3.0'?'type=':'')+'WORK:;;'+translateChars(dataStr('work.street'),replaceObj)+';'+translateChars(dataStr('work.city'),replaceObj)+';'+translateChars(dataStr('work.state'),replaceObj)+';'+translateChars(dataStr('work.zip'),replaceObj)+';'+translateChars(dataStr('work.country'),replaceObj)+'\n':'')+(data('home')&&(dataStr('home.street').length>0||dataStr('home.city').length>0||dataStr('home.state').length>0||dataStr('home.zip').length>0||dataStr('home.country').length>0)?'ADR;'+(str[0]==='3.0'?'type=':'')+'HOME:;;'+translateChars(dataStr('home.street'),replaceObj)+';'+translateChars(dataStr('home.city'),replaceObj)+';'+translateChars(dataStr('home.state'),replaceObj)+';'+translateChars(dataStr('home.zip'),replaceObj)+';'+translateChars(dataStr('home.country'),replaceObj)+'\n':'')+(data('birthday')&&data('birthday')!==null?'BDAY;value=date:'+data('birthday').getFullYear()+('0'+(data('birthday').getMonth()+1)).substr(-2)+('0'+data('birthday').getDate()).substr(-2)+';':'')+(data('work')&&dataStr('work.url').length>0?'URL;'+(str[0]==='3.0'?'type=':'')+'WORK:'+translateChars(dataStr('work.url'),replaceObj)+'\n':'')+(data('home')&&dataStr('home.url').length>0?'URL;'+(str[0]==='3.0'?'type=':'')+'HOME:'+translateChars(dataStr('home.url'),replaceObj)+'\n':'')+'END:VCARD';case this.DATA_TYPE.MECARD:validateType('data','object');validateType('data.firstName','string','number');validateType('data.lastName','string','number');validateType('data.eMail','string');validateType('data.phoneNumber','string','number');validateType('data.videoCall','string','number');validateType('data.birthday',Date,null);validateType('data.poBox','string','number');validateType('data.room','string','number');validateType('data.street','string','number');validateType('data.city','string');validateType('data.state','string');validateType('data.zip','string','number');validateType('data.country','string');validateType('data.url','string','number');validateType('data.memo','string','number');replaceObj={'\\':'\\\\',':':'\\:',';':'\\;',',':'\\,'};return'MECARD:'+(dataStr('lastName').length>0||dataStr('firstName')>0?'N:'+translateChars(dataStr('lastName'),replaceObj)+(dataStr('firstName').length>0?','+translateChars(dataStr('firstName'),replaceObj):'')+';':'')+(dataStr('phoneNumber').length>0?'TEL:'+translateChars(dataStr('phoneNumber'),replaceObj)+';':'')+(dataStr('videoCall').length>0?'TEL-AV:'+translateChars(dataStr('videoCall'),replaceObj)+';':'')+(dataStr('eMail').length>0?'EMAIL:'+translateChars(dataStr('eMail'),replaceObj)+';':'')+(dataStr('url').length>0?'URL:'+translateChars(dataStr('url'),replaceObj)+';':'')+(dataStr('memo').length>0?'NOTE:'+translateChars(dataStr('memo'),replaceObj)+';':'')+(data('birthday')&&data('birthday')!==null?'BDAY:'+data('birthday').getFullYear()+('0'+(data('birthday').getMonth()+1)).substr(-2)+('0'+data('birthday').getDate()).substr(-2)+';':'')+(dataStr('street').length>0?'ADR:'+translateChars(dataStr('poBox'),replaceObj)+','+translateChars(dataStr('room'),replaceObj)+','+translateChars(dataStr('street'),replaceObj)+','+translateChars(dataStr('city'),replaceObj)+','+translateChars(dataStr('state'),replaceObj)+','+translateChars(dataStr('zip'),replaceObj)+','+translateChars(dataStr('country'),replaceObj)+';':'')+';';case this.DATA_TYPE.VEVENT:validateType('data','object');validateType('data.format','string');validateType('data.summary','string','number');validateType('data.description','string','number');validateType('data.locationName','string','number');validateType('data.fullDay','boolean');validateType('data.startDate',Date);validateType('data.endDate',Date);validateRequired('data.format','data.summary','data.fullDay','data.startDate','data.endDate');if(Date.parse(dataStr('startDate'))>Date.parse(dataStr('endDate'))){throw new RangeError('VEVENT.startDate must be older than VEVENT.endDate.');}replaceObj={'\\':'\\\\',';':'\\;',',':'\\,','\n':'\\n'};str='BEGIN:VEVENT\n'+'SUMMARY:'+translateChars(dataStr('summary'),replaceObj)+'\n'+(dataStr('description').length>0?'DESCRIPTION:'+translateChars(dataStr('description'),replaceObj)+'\n':'')+(dataStr('locationName').length>0?'LOCATION:'+translateChars(dataStr('locationName'),replaceObj)+'\n':'')+'DTSTART:'+data('startDate').getFullYear()+('0'+(data('startDate').getMonth()+1)).substr(-2)+('0'+data('startDate').getDate()).substr(-2)+(!data('fullDay')?'T'+('0'+data('startDate').getHours()).substr(-2)+('0'+data('startDate').getMinutes()).substr(-2)+('0'+data('startDate').getSeconds()).substr(-2):'')+'\n'+'DTEND:'+data('endDate').getFullYear()+('0'+(data('endDate').getMonth()+1)).substr(-2)+('0'+data('endDate').getDate()).substr(-2)+(!data('fullDay')?'T'+('0'+data('endDate').getHours()).substr(-2)+('0'+data('endDate').getMinutes()).substr(-2)+('0'+data('endDate').getSeconds()).substr(-2):'')+'\n'+'END:VEVENT';switch(dataStr('format').toLowerCase()){case'icalendar':return'BEGIN:VCALENDAR\n'+'VERSION:2.0\n'+str+'\n'+'END:VCALENDAR';case'zxing':return str;default:throw new Error('Unsupported VEVENT.format ('+dataStr('format')+').');}case this.DATA_TYPE.GOOGLE_MAPS:validateType('data','object');validateType('data.locationName','string');validateType('data.longitude','string','number');validateType('data.latitude','string','number');validateRequired('data.longitude','data.latitude');return'http://maps.google.com/maps?f=q&q='+dataStr('latitude')+'%2C'+dataStr('longitude')+'+%28'+encodeURIComponent(dataStr('locationName'))+'%29';case this.DATA_TYPE.BING_MAPS:validateType('data','object');validateType('data.longitude','string','number');validateType('data.latitude','string','number');validateRequired('data.longitude','data.latitude');return'http://www.bing.com/maps/?v=2&cp='+dataStr('latitude')+'~'+dataStr('longitude')+'&lvl=16&dir=0&sty=r';case this.DATA_TYPE.GEO:validateType('data','object');validateType('data.longitude','string','number');validateType('data.latitude','string','number');validateRequired('data.longitude','data.latitude');return'GEO:'+dataStr('latitude')+','+dataStr('longitude');case this.DATA_TYPE.ITUNES:if(typeof(this.data)==='object'){validateType('data.appId','string','number');validateRequired('data.appId');str=dataStr('appId')}else{validateType('data','string','number');validateRequired('data');str=dataStr()}if(!(/\d+$/).test(str)){throw new Error('Invalid ITUNES.appId. The id must be numeric.');}return'http://itunes.apple.com/app/id'+(/\d+$/).exec(str)[0];case this.DATA_TYPE.ITUNES_REVIEW:if(typeof(this.data)==='object'){validateType('data.appId','string','number');validateRequired('data.appId');str=dataStr('appId')}else{validateType('data','string','number');validateRequired('data');str=dataStr()}if(!(/\d+$/).test(str)){throw new Error('Invalid ITUNES.appId. The id must be numeric.');}return'itms-apps://ax.itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?type=Purple+Software&id='+(/\d+$/).exec(str)[0];case this.DATA_TYPE.ANDROID_MARKET:validateType('data','object');validateType('data.searchType','string');validateType('data.linkType','string');validateType('data.search','string','number');validateRequired('data.searchType','data.linkType','data.search');switch(dataStr('linkType').toLowerCase()){case'market':str='market://';break;case'website':str='http://market.android.com/';break;default:throw new Error('Unsupported ANDROID_MARKET.linkType ('+dataStr('linkType')+').');}switch(dataStr('searchType').toLowerCase()){case'raw':return str+'search?q='+encodeURIComponent(dataStr('search'));case'package':return str+'search?q=pname%3A'+encodeURIComponent(dataStr('search'));case'publisher':return str+'search?q=pub%3A'+encodeURIComponent(dataStr('search'));case'details':return str+'details?id='+encodeURIComponent(dataStr('search'));default:throw new Error('Unsupported ANDROID_MARKET.searchType ('+dataStr('searchType')+').');}case this.DATA_TYPE.FACEBOOK_USER_PROFILE:if(typeof(this.data)==='object'){validateType('data.profileId','string','number');validateRequired('data.profileId');str=dataStr('profileId')}else{validateType('data','string','number');validateRequired('data');str=dataStr()}if((/^\d{15}$/).test(str)){return'fb://profile/'+str}else if((/(\/profile\/|(\?|&)id=)(\d{15})(%26|&|$)/).test(str)){return'fb://profile/'+(/(\/profile\/|(\?|&)id=)(\d{15})(%26|&|$)/).exec(str)[3]}throw new Error('Invalid FACEBOOK_USER_PROFILE.videoId. The id must be numeric, 15 characters in length.');case this.DATA_TYPE.FOURSQUARE:if(typeof(this.data)==='object'){validateType('data.venueId','string','number');validateRequired('data.venueId');str=dataStr('venueId')}else{validateType('data','string','number');validateRequired('data');str=dataStr()}if(!(/\d+$/).test(str)){throw new Error('Invalid FOURSQUARE.venueId. The id must be numeric.');}return'http://foursquare.com/venue/'+(/\d+$/).exec(str)[0];case this.DATA_TYPE.WIKIPEDIA:if(typeof(this.data)==='object'){validateType('data.url','string','number');validateRequired('data.url');str=dataStr('url')}else{validateType('data','string','number');validateRequired('data');str=dataStr()}replaceObj={' ':'_'};tmp=(/\/\/([a-z\-]*)\.?wikipedia.org\/wiki\/(.*)/i).exec(str);if(tmp===null||tmp.length!==3){return'http://qrwp.org/'+translateChars(str,replaceObj)}else{return'http://'+(tmp[1].length>0?tmp[1]+'.':'')+'qrwp.org/'+translateChars(tmp[2],replaceObj)}case this.DATA_TYPE.YOUTUBE_USER:if(typeof(this.data)==='object'){validateType('data.userName','string','number');validateRequired('data.userName');str=dataStr('userName')}else{validateType('data','string','number');validateRequired('data');str=dataStr()}return'http://youtube.com/user/'+str;case this.DATA_TYPE.YOUTUBE_VIDEO:if(typeof(this.data)==='object'){validateType('data.videoId','string','number');validateRequired('data.videoId');str=dataStr('videoId')}else{validateType('data','string','number');validateRequired('data');str=dataStr()}if((/^[-_A-Za-z0-9]+$/).test(str)){return'youtube://'+str}else if((/(youtu.be\/|(\?|&)v=|\/v\/)([-_A-Za-z0-9]+)(%26|&|$)/).test(str)){return'youtube://'+(/(youtu.be\/|(\?|&)v=|\/v\/)([-_A-Za-z0-9]+)(%26|&|$)/).exec(str)[3]}throw new Error('Invalid YOUTUBE.videoId. The id must be alphanumeric.');case this.DATA_TYPE.TWEET_FETCH:throw new Error('DATA_TYPE.TWEET_FETCH is currently unsupported.');case this.DATA_TYPE.TWEET:if(typeof(this.data)==='object'){validateType('data.text','string','number');validateRequired('data.text');return'http://twitter.com/home?status='+encodeURIComponent(dataStr('text'))}else{validateType('data','string','number');validateRequired('data');return'http://twitter.com/home?status='+encodeURIComponent(dataStr())}case this.DATA_TYPE.BLACKBERRY_MESSENGER_USER:validateType('data','object');validateType('data.firstName','string');validateType('data.lastName','string');validateType('data.bbmPin','string');validateRequired('data.bbmPin');if(!(/^[A-Za-z0-9]{8}$/).test(dataStr('bbmPin'))){throw new Error('Invalid BLACKBERRY_MESSENGER_USER.bbmPin. The pin must be alphanumeric, eight characters in length.');}return'bbm:'+dataStr('bbmPin')+'00000000'+dataStr('firstName')+' '+dataStr('lastName');case this.DATA_TYPE.ANDROID_WIFI:validateType('data','object');validateType('data.ssid','string');validateType('data.password','string','number');validateType('data.networkType','string');validateRequired('data.ssid','data.networkType');return'WIFI:S:'+dataStr('ssid')+';T:'+dataStr('networkType')+(dataStr('password').length>0?';P:'+dataStr('password'):'')+';;';default:throw new TypeError('Unsupported dataType.');}function data(a){var b=d.data;if(typeof(a)==='string'){var c=a.split('.'),i;for(i=0;i<c.length;i++){b=b[c[i]]}}return b}function dataStr(a){var b=data(a);return(typeof(b)==='undefined'?'':b.toString())}function translateChars(a,b){for(var r in b){a=a.replace(r,b[r],'g')}return a}function validateType(){var a=arguments[0].split('.'),prop=d,i;for(i=0;i<a.length;i++){prop=prop[a[i]]}for(i=1;i<arguments.length;i++){if((typeof(prop)==='object'&&typeof(arguments[i])==='function'&&prop!==null&&prop.constructor===arguments[i])||(prop===null&&arguments[i]===null)||(typeof(prop)===arguments[i])){return true}if(typeof(arguments[i])==='function'){arguments[i]=arguments[i].name}}if(typeof(prop)==='undefined'){throw new TypeError(arguments[0]+' is undefined.');}else{throw new TypeError('Unexcepted type ('+typeof(prop)+') of '+arguments[0]+' ('+[].slice.call(arguments,1).join('|')+').');}}function validateRequired(){var a,prop,i,j;for(i=0;i<arguments.length;i++){a=arguments[i].split('.');prop=d;for(j=0;j<a.length;j++){prop=prop[a[j]]}if(typeof(prop)==='string'&&prop.length===0){throw new Error('Required: '+arguments[i]);}}}return''};w[A].prototype.Code=function(b,c,d){if(typeof(b)==='object'&&typeof(c)==='undefined'&&typeof(d)==='undefined'){d=b.errorCorrection;c=b.version;b=b.encodeMode}if(typeof(b)!=='undefined'){if(!isEnumValue(this.ENCODE_MODE,b)){throw new TypeError('Unsupported encodeMode.');}}else{b=this.ENCODE_MODE.UTF8}try{Object.defineProperty(this,'encodeMode',{configurable:false,writeable:true,get:function(){return b},set:function(a){if(isEnumValue(this.ENCODE_MODE,a)){b=a}else{throw new TypeError('Unsupported encodeMode.');}}})}catch(e){this.encodeMode=b}if(typeof(c)!=='undefined'){if(typeof(c)!=='number'){throw new TypeError('Invalid version type.');}else if(c<-40||c>40){throw new RangeError('Invalid version value.');}}else{c=this.DEFAULT}try{Object.defineProperty(this,'version',{configurable:false,writeable:true,get:function(){return c},set:function(a){if(typeof(a)!=='number'){throw new TypeError('Invalid version type.');}else if(a<-40||a>40){throw new RangeError('Invalid version value.');}else{c=a;}}})}catch(e){this.version=c}if(typeof(d)!=='undefined'){if(!isEnumValue(this.ERROR_CORRECTION,d)){throw new TypeError('Invalid errorCorrection.');}}else{d=this.ERROR_CORRECTION.M}try{Object.defineProperty(this,'errorCorrection',{configurable:false,writeable:true,get:function(){return d},set:function(a){if(isEnumValue(this.ERROR_CORRECTION,a)){d=a}else{throw new TypeError('Invalid errorCorrection.');}}})}catch(e){this.errorCorrection=d}};w[A].prototype.Code.prototype.ENCODE_MODE={NUMERIC:1,ALPHA_NUMERIC:2,BYTE:4,UTF8:0x14,UTF8_SIGNATURE:0x24,STRUCTURED_APPEND:3,FNC1_POS1:5,ECI:7,KANJI:8,FNC1_POS2:9};w[A].prototype.ENCODE_MODE=w[A].prototype.Code.prototype.ENCODE_MODE;w[A].prototype.Code.prototype.ERROR_CORRECTION={L:1,M:0,Q:3,H:2};w[A].prototype.ERROR_CORRECTION=w[A].prototype.Code.prototype.ERROR_CORRECTION;w[A].prototype.Code.prototype.DEFAULT=0;w[A].prototype.DEFAULT=w[A].prototype.Code.prototype.DEFAULT;w[A].prototype.Code.prototype.getVersion=function(a){if(this.version>0){return this.version}else{return encodeMatrix(processInput(a,this),this,true)}};w[A].prototype.Code.prototype.getMinVersion=function(a){var b=new w[A].prototype.Code(this.encodeMode,this.DEFAULT,this.errorCorrection);return encodeMatrix(processInput(a,b),b,true)};w[A].prototype.Matrix=function(f,g){var h,matrix,i,_this=this;matrix=encodeMatrix(processInput(f,g),g);for(i=0;i<matrix.length;i++){this[i]=matrix[i]}try{Object.defineProperty(this,'scale',{configurable:false,writeable:true,get:function(){return j},set:function(a){if(typeof(a)!=='number'){throw new TypeError('Invalid scale type.');}else if(a<=0||a>256){throw new RangeError('Scale value out of range.');}else{j=a}}});var j=4}catch(e){this.scale=4}try{Object.defineProperty(this,'margin',{configurable:false,writeable:true,get:function(){return k},set:function(a){if(typeof(a)!=='number'){throw new TypeError('Invalid margin type.');}else if(a<0||a>256){throw new RangeError('Margin value out of range.');}else{k=a}}});var k=4}catch(e){this.margin=4}try{Object.defineProperty(this,'color1',{configurable:false,writeable:true,get:function(){return l},set:function(a){if(typeof(a)==='string'){l=a}else{throw new TypeError('Invalid color1 type.');}}});var l='rgb(0,0,0)'}catch(e){this.color1='rgb(0,0,0)'}try{Object.defineProperty(this,'color0',{configurable:false,writeable:true,get:function(){return m},set:function(a){if(typeof(a)==='string'){m=a}else{throw new TypeError('Invalid color2 type.');}}});var m='none'}catch(e){this.color0='none'}try{Object.defineProperty(this,'length',{configurable:false,writeable:false,get:function(){return matrix.length}})}catch(e){this.length=new function(){this.toString=function(){return matrix.length}}}try{Object.defineProperty(this,'width',{configurable:false,writeable:false,get:function(){return matrix.length+(_this.margin<<1)}})}catch(e){this.width=new function(){this.toString=function(){return matrix.length+(_this.margin<<1)}}}try{Object.defineProperty(this,'pixelWidth',{configurable:false,writeable:false,get:function(){return(matrix.length+(_this.margin<<1))*_this.scale}})}catch(e){this.pixelWidth=new function(){this.toString=function(){return(matrix.length+(_this.margin<<1))*_this.scale}}}this.draw=function(a,b,c){var d=a.getContext('2d'),j=this.scale,k=this.margin,x,y;for(y=0;y<matrix.length;y++){for(x=0;x<matrix[y].length;x++){if(matrix[y][x]){d.fillRect(b+(x+k)*j,c+(y+k)*j,j,j)}}}};this.drawHTML=function(a,b,c){b=b||'div';var d=this.scale,k=this.margin,background=this.color1,html='<div style="position:relative; background:'+this.color2+'">',x,y,xW;for(y=0;y<matrix.length;y++){for(x=0;x<matrix.length;x=x+xW){xW=1;if(matrix[y][x]===1){while(x+xW<matrix.length&&matrix[y][x+xW]===1){xW++}if(c){html+='<'+b+' style="width:'+(xW*d)+'px; height:'+d+'px; left:'+((x+k)*d)+'px; top:'+((y+k)*d)+'px;"></'+b+'>'}else{html+='<'+b+' style="position:absolute; width:'+(xW*d)+'px; height:'+d+'px; left:'+((x+k)*d)+'px; top:'+((y+k)*d)+'px; background:'+background+';"></'+b+'>'}}}}html+=+'</div>';if(a&&typeof(a.innerHTML)!='undefined'){a.innerHTML=html}return html};this.toDataURL=function(){};this.toSVG=function(){};this.toArray=function(){var x,y,arr=typedArray(matrix.length+(k<<1),0);for(y=0;y<matrix.length;y++){arr[y+k]=typedArray(matrix[y].length+(k<<1),0);for(x=0;x<matrix[y].length;x++){arr[y+k][x+k]=matrix[y][x]}}return arr};this.toString=function(){return this.toArray().toString()};this.getDebuggingData=function(){}};var B={TOTAL_BYTES:0,REMAINDER_BITS:1,ECC_BYTES:2,EC_BLOCKS:3,ALIGNMENT_PATTERN_POSITION_OFFSET:4,VERSION_PATTERN:5},versionInfo=[null,[26,0,[10,7,17,13],[[1,0],[1,0],[1,0],[1,0]],0,null],[44,7,[16,10,28,22],[[1,0],[1,0],[1,0],[1,0]],12,null],[70,7,[26,15,44,36],[[1,0],[1,0],[2,0],[2,0]],16,null],[100,7,[36,20,64,52],[[2,0],[1,0],[4,0],[2,0]],20,null],[134,7,[48,26,88,72],[[2,0],[1,0],[2,2],[2,2]],24,null],[172,7,[64,36,112,96],[[4,0],[2,0],[4,0],[4,0]],28,null],[196,0,[72,40,130,108],[[4,0],[2,0],[4,1],[2,4]],16,0x07c94],[242,0,[88,48,156,132],[[2,2],[2,0],[4,2],[4,2]],18,0x085bc],[292,0,[110,60,192,160],[[3,2],[2,0],[4,4],[4,4]],20,0x09a99],[346,0,[130,72,224,192],[[4,1],[2,2],[6,2],[6,2]],22,0x0a4d3],[404,0,[150,80,264,224],[[1,4],[4,0],[3,8],[4,4]],24,0x0bbf6],[466,0,[176,96,308,260],[[6,2],[2,2],[7,4],[4,6]],26,0x0c762],[532,0,[198,104,352,288],[[8,1],[4,0],[12,4],[8,4]],28,0x0d847],[581,3,[216,120,384,320],[[4,5],[3,1],[11,5],[11,5]],20,0x0e60d],[655,3,[240,132,432,360],[[5,5],[5,1],[11,7],[5,7]],22,0x0f928],[733,3,[280,144,480,408],[[7,3],[5,1],[3,13],[15,2]],24,0x10b78],[815,3,[308,168,532,448],[[10,1],[1,5],[2,17],[1,15]],24,0x1145d],[901,3,[338,180,588,504],[[9,4],[5,1],[2,19],[17,1]],26,0x12a17],[991,3,[364,196,650,546],[[3,11],[3,4],[9,16],[17,4]],28,0x13532],[1085,3,[416,224,700,600],[[3,13],[3,5],[15,10],[15,5]],28,0x149a6],[1156,4,[442,224,750,644],[[17,0],[4,4],[19,6],[17,6]],22,0x15683],[1258,4,[476,252,816,690],[[17,0],[2,7],[34,0],[7,16]],24,0x168c9],[1364,4,[504,270,900,750],[[4,14],[4,5],[16,14],[11,14]],24,0x177ec],[1474,4,[560,300,960,810],[[6,14],[6,4],[30,2],[11,16]],26,0x18ec4],[1588,4,[588,312,1050,870],[[8,13],[8,4],[22,13],[7,22]],26,0x191e1],[1706,4,[644,336,1110,952],[[19,4],[10,2],[33,4],[28,6]],28,0x1afab],[1828,4,[700,360,1200,1020],[[22,3],[8,4],[12,28],[8,26]],28,0x1b08e],[1921,3,[728,390,1260,1050],[[3,23],[3,10],[11,31],[4,31]],24,0x1cc1a],[2051,3,[784,420,1350,1140],[[21,7],[7,7],[19,26],[1,37]],24,0x1d33f],[2185,3,[812,450,1440,1200],[[19,10],[5,10],[23,25],[15,25]],26,0x1ed75],[2323,3,[868,480,1530,1290],[[2,29],[13,3],[23,28],[42,1]],26,0x1f250],[2465,3,[924,510,1620,1350],[[10,23],[17,0],[19,35],[10,35]],26,0x209d5],[2611,3,[980,540,1710,1440],[[14,21],[17,1],[11,46],[29,19]],28,0x216f0],[2761,3,[1036,570,1800,1530],[[14,23],[13,6],[59,1],[44,7]],28,0x228ba],[2876,0,[1064,570,1890,1590],[[12,26],[12,7],[22,41],[39,14]],24,0x2379f],[3034,0,[1120,600,1980,1680],[[6,34],[6,14],[2,64],[46,10]],26,0x24b0b],[3196,0,[1204,630,2100,1770],[[29,14],[17,4],[24,46],[49,10]],26,0x2542e],[3362,0,[1260,660,2220,1860],[[13,32],[4,18],[42,32],[48,14]],26,0x26a64],[3532,0,[1316,720,2310,1950],[[40,7],[20,4],[10,67],[43,22]],28,0x27541],[3706,0,[1372,750,2430,2040],[[18,31],[19,6],[20,61],[34,34]],28,0x28c69]],formatInfo=[[0x5412,0x5125,0x5e7c,0x5b4b,0x45f9,0x40ce,0x4f97,0x4aa0],[0x77c4,0x72f3,0x7daa,0x789d,0x662f,0x6318,0x6c41,0x6976],[0x1689,0x13be,0x1ce7,0x19d0,0x0762,0x0255,0x0d0c,0x083b],[0x355f,0x3068,0x3f31,0x3a06,0x24b4,0x2183,0x2eda,0x2bed]],pdp=[[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,1,1,1,0,1],[1,0,1,1,1,0,1],[1,0,1,1,1,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]],ap=[[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]],maskPattern=[function(j,i){return(i+j)%2===0},function(j,i){return i%2===0},function(j,i){return j%3===0},function(j,i){return(i+j)%3===0},function(j,i){return(Math.floor(i/2)+Math.floor(j/3))%2===0},function(j,i){return(i*j)%2+(i*j)%3===0},function(j,i){return((i*j)%2+(i*j)%3)%2===0},function(j,i){return((i*j)%3+(i+j)%2)%2===0}],BIT_TYPE={FINDER:0x02,SEPARATOR:0x04,TIMING:0x08,ALIGNMENT:0x10,VERSION:0x20,FORMAT:0x40,DATA:0x80};function encodeMatrix(a,b,c){var i,j,x,y,len,version=b.version,ecLevel=b.errorCorrection;var d=new Array(versionInfo[versionInfo.length-1][B.TOTAL_BYTES]*8),bitStreamLen=0,cciLength,minVersion;switch(b.encodeMode){case b.ENCODE_MODE.NUMERIC:var e=0;for(i=0;i<a.length;i++){if(a[i]>=0x30&&a[i]<=0x39){e=(e*10)+(a[i]-0x30);if((i%3)===2){bitStreamLen=arrayCopy(d,bitStreamLen,toBits(e,10));e=0}}else{throw new TypeError('Invalid data format.');}}switch(i%3){case 1:bitStreamLen=arrayCopy(d,bitStreamLen,toBits(e,4));break;case 2:bitStreamLen=arrayCopy(d,bitStreamLen,toBits(e,7));break;default:break}if(version>0){if(version>=1&&version<=9){cciLength=10}else if(version>=10&&version<=26){cciLength=12}else if(version>=27&&version<=40){cciLength=14}}else{minVersion=getMinVersionByBits(bitStreamLen+4+10,ecLevel);if(minVersion>0){if(minVersion<Math.abs(version)){minVersion=Math.abs(version)}if(minVersion>=1&&minVersion<=9){cciLength=10}else{minVersion=getMinVersionByBits(bitStreamLen+4+12,ecLevel);if(minVersion>0){if(minVersion<Math.abs(version)){minVersion=Math.abs(version)}if(minVersion>=10&&minVersion<=26){cciLength=12}else{minVersion=getMinVersionByBits(bitStreamLen+4+14,ecLevel);if(minVersion>0){if(minVersion<Math.abs(version)){minVersion=Math.abs(version)}if(minVersion>=27&&minVersion<=40){cciLength=14}else{throw new RangeError('Bug in version detection.');}}else{throw new RangeError('Too much data.');}}}else{throw new RangeError('Too much data.');}}}else{throw new RangeError('Too much data.');}version=minVersion}break;case b.ENCODE_MODE.ALPHA_NUMERIC:var f=[48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,32,36,37,42,43,45,46,47,58],charCode1,charCode2;for(i=0;i<a.length-1;i+=2){charCode1=indexInArray((a[i]&0x60)===0x60?a[i]&0x5f:a[i],f);charCode2=indexInArray((a[i+1]&0x60)===0x60?a[i+1]&0x5f:a[i+1],f);if(charCode1===-1||charCode2===-1){throw new Error('Character not supported in ALPHA_NUMERIC encoding mode.');}bitStreamLen=arrayCopy(d,bitStreamLen,toBits((charCode1*45)+charCode2,11))}if(i===(a.length-1)){charCode1=indexInArray((a[i]&0x60)===0x60?a[i]&0x5f:a[i],f);if(charCode1===-1){throw new Error('Character not supported in ALPHA_NUMERIC encoding mode.');}bitStreamLen=arrayCopy(d,bitStreamLen,toBits(charCode1,6))}if(version>0){if(version>=1&&version<=9){cciLength=9}else if(version>=10&&version<=26){cciLength=11}else if(version>=27&&version<=40){cciLength=13}}else{minVersion=getMinVersionByBits(bitStreamLen+4+9,ecLevel);if(minVersion>0){if(minVersion<Math.abs(version)){minVersion=Math.abs(version)}if(minVersion>=1&&minVersion<=9){cciLength=9}else{minVersion=getMinVersionByBits(bitStreamLen+4+11,ecLevel);if(minVersion>0){if(minVersion<Math.abs(version)){minVersion=Math.abs(version)}if(minVersion>=10&&minVersion<=26){cciLength=11}else{minVersion=getMinVersionByBits(bitStreamLen+4+13,ecLevel);if(minVersion>0){if(minVersion<Math.abs(version)){minVersion=Math.abs(version)}if(minVersion>=27&&minVersion<=40){cciLength=13}else{throw new RangeError('Bug in version detection.');}}else{throw new RangeError('Too much data.');}}}else{throw new RangeError('Too much data.');}}}else{throw new RangeError('Too much data.');}version=minVersion}break;case b.ENCODE_MODE.BYTE:case b.ENCODE_MODE.UTF8:case b.ENCODE_MODE.UTF8_SIGNATURE:for(i=0;i<a.length;i++){bitStreamLen=arrayCopy(d,bitStreamLen,toBits(a[i],8))}if(version>0){if(version>=0&&version<=9){cciLength=8}else if(version>=10&&version<=40){cciLength=16}}else{minVersion=getMinVersionByBits(bitStreamLen+4+8,ecLevel);if(minVersion>0){if(minVersion<Math.abs(version)){minVersion=Math.abs(version)}if(minVersion>=1&&minVersion<=9){cciLength=8}else{minVersion=getMinVersionByBits(bitStreamLen+4+16,ecLevel);if(minVersion>0){if(minVersion<Math.abs(version)){minVersion=Math.abs(version)}if(minVersion>=10&&minVersion<=40){cciLength=16}else{throw new RangeError('Bug in version detection.');}}else{throw new RangeError('Too much data.');}}}else{throw new RangeError('Too much data.');}version=minVersion}break;case b.ENCODE_MODE.KANJI:throw new Error('Encoding mode "KANJI" not supported yet.');break;default:throw new Error('Unsupported encoding mode.');break}if(c){return version}d=toBits(b.encodeMode&0xf,4).concat(toBits(a.length,cciLength)).concat(d);bitStreamLen+=(4+cciLength);var g=versionInfo[version][B.TOTAL_BYTES]-versionInfo[version][B.ECC_BYTES][ecLevel]<<3;if(bitStreamLen>g){throw new RangeError('Too much data for the selected version.');}var h=g-bitStreamLen;if(h>4){h=4}bitStreamLen=arrayCopy(d,bitStreamLen,typedArray(h,0));bitStreamLen=arrayCopy(d,bitStreamLen,typedArray((8-(bitStreamLen%8))%8,0));for(i=0,len=(g-bitStreamLen)>>>3;i<len;i++){bitStreamLen=arrayCopy(d,bitStreamLen,i&1?[0,0,0,1,0,0,0,1]:[1,1,1,0,1,1,0,0])}var k=Math.floor((versionInfo[version][B.TOTAL_BYTES]-versionInfo[version][B.ECC_BYTES][ecLevel])/(versionInfo[version][B.EC_BLOCKS][ecLevel][0]+versionInfo[version][B.EC_BLOCKS][ecLevel][1])),eccBlockSize=Math.floor(versionInfo[version][B.ECC_BYTES][ecLevel]/(versionInfo[version][B.EC_BLOCKS][ecLevel][0]+versionInfo[version][B.EC_BLOCKS][ecLevel][1])),dataBlocks=[],codeword=[];for(i=0,len=versionInfo[version][B.EC_BLOCKS][ecLevel][0];i<len;i++){codeword=[];for(j=0;j<k;j++){codeword.push(toByte(d.splice(0,8)))}dataBlocks.push(codeword)}for(i=0,len=versionInfo[version][B.EC_BLOCKS][ecLevel][1];i<len;i++){codeword=[];for(j=0;j<=k;j++){codeword.push(toByte(d.splice(0,8)))}dataBlocks.push(codeword)}var l=[],gfRev=[];j=1;for(i=0;i<255;i++){l.push(j);gfRev[j]=i;j<<=1;if(j>0xff){j=0x11d^j}}var m=[1];for(i=0,len=eccBlockSize;i<len;i++){m[i+1]=1;for(j=i;j>0;j--){if(m[j]>0){m[j]=m[j-1]^l[(gfRev[m[j]]+i)%0xff]}else{m[j]=m[j-1]}}m[0]=l[(gfRev[m[0]]+i)%0xff]}var n=[];for(i=m.length-1;i>=0;i--){n.push(m[i])}var o=[];for(j=0;j<dataBlocks.length;j++){o[j]=[].concat(dataBlocks[j]).concat(typedArray(eccBlockSize,0));var p;while(o[j].length>=n.length){p=o[j][0];for(i=0;i<n.length;i++){o[j][i]^=l[(gfRev[n[i]]+gfRev[p])%0xff]}if(o[j].shift()!==0){throw new Error('Bug while generating the ECC');}}}d=new Array(versionInfo[versionInfo.length-1][B.TOTAL_BYTES]*8);bitStreamLen=0;for(i=0;i<=k;i++){for(j=0;j<dataBlocks.length;j++){if(i<dataBlocks[j].length){bitStreamLen=arrayCopy(d,bitStreamLen,toBits(dataBlocks[j][i],8))}}}for(i=0;i<eccBlockSize;i++){for(j=0;j<o.length;j++){if(i<o[j].length){bitStreamLen=arrayCopy(d,bitStreamLen,toBits(o[j][i],8))}}}var q=17+(version<<2),matrix=new Array(q);for(i=0;i<q;i++){matrix[i]=typedArray(q,0)}matrixCopy(matrix,0,0,pdp,BIT_TYPE.FINDER);matrixCopy(matrix,0,q-7,pdp,BIT_TYPE.FINDER);matrixCopy(matrix,q-7,0,pdp,BIT_TYPE.FINDER);for(i=0;i<8;i++){matrix[i][7]=BIT_TYPE.SEPARATOR;matrix[7][i]=BIT_TYPE.SEPARATOR;matrix[i][q-8]=BIT_TYPE.SEPARATOR;matrix[7][(q-1)-i]=BIT_TYPE.SEPARATOR;matrix[(q-1)-i][7]=BIT_TYPE.SEPARATOR;matrix[q-8][i]=BIT_TYPE.SEPARATOR}for(i=8;i<(q-8);i++){matrix[i][6]=BIT_TYPE.TIMING|((i+1)%2);matrix[6][i]=BIT_TYPE.TIMING|((i+1)%2)}if(version>1){var r=versionInfo[version][B.ALIGNMENT_PATTERN_POSITION_OFFSET],appMax=(version*4)+10;y=appMax;while(true){x=appMax;while(true){if(!((x===6&&y===6)||(x===6&&y===(q-7))||(x===(q-7)&&y===6))){matrixCopy(matrix,x-2,y-2,ap,BIT_TYPE.ALIGNMENT)}if(x===6){break}x-=r;if(x<18){x=6}}if(y===6){break}y-=r;if(y<18){y=6}}}if(version>=7){var v=versionInfo[version][B.VERSION_PATTERN];for(i=0;i<6;i++){for(j=0;j<3;j++){matrix[(q-11)+j][i]=BIT_TYPE.VERSION|(v&1);matrix[i][(q-11)+j]=BIT_TYPE.VERSION|(v&1);v=v>>1}}}for(i=0;i<8;i++){matrix[(q-1)-i][8]=BIT_TYPE.FORMAT|0;matrix[8][(q-1)-i]=BIT_TYPE.FORMAT|0;if(i!==6){matrix[8][i]=BIT_TYPE.FORMAT|0;matrix[i][8]=BIT_TYPE.FORMAT|0}}matrix[8][8]=BIT_TYPE.FORMAT|0;matrix[q-8][8]=BIT_TYPE.FORMAT|1;var s=-1;x=y=q-1;for(i=0;i<bitStreamLen;i++){matrix[y][x]=BIT_TYPE.DATA|d[i];do{if(((x>6)&&((x&1)===0))||((x<6)&&((x&1)===1))){x--}else if(((s===-1)&&(y===0))||((s===1)&&(y===(q-1)))){if(x===0){if(i<bitStreamLen-1){throw new RangeError('Too much data while writing the symbol.');}break}s=-s;x--;if(x===6){x--}}else{y+=s;x++}}while(matrix[y][x]!==0)}var t=[],formatBits;for(i=0;i<maskPattern.length;i++){t[i]=[];for(y=0;y<q;y++){t[i][y]=[];for(x=0;x<q;x++){if(matrix[y][x]&BIT_TYPE.DATA){t[i][y][x]=(matrix[y][x]^maskPattern[i](x,y))&1}else{t[i][y][x]=matrix[y][x]&1}}}formatBits=toBits(formatInfo[ecLevel][i],15);t[i][q-1][8]=t[i][8][0]=formatBits[0];t[i][q-2][8]=t[i][8][1]=formatBits[1];t[i][q-3][8]=t[i][8][2]=formatBits[2];t[i][q-4][8]=t[i][8][3]=formatBits[3];t[i][q-5][8]=t[i][8][4]=formatBits[4];t[i][q-6][8]=t[i][8][5]=formatBits[5];t[i][q-7][8]=t[i][8][7]=formatBits[6];t[i][8][q-8]=t[i][8][8]=formatBits[7];t[i][8][q-7]=t[i][7][8]=formatBits[8];t[i][8][q-6]=t[i][5][8]=formatBits[9];t[i][8][q-5]=t[i][4][8]=formatBits[10];t[i][8][q-4]=t[i][3][8]=formatBits[11];t[i][8][q-3]=t[i][2][8]=formatBits[12];t[i][8][q-2]=t[i][1][8]=formatBits[13];t[i][8][q-1]=t[i][0][8]=formatBits[14]}var u=0,selectedMaskScore=0xffffffff,n1,n2,n3,n4,score;for(i=0;i<maskPattern.length;i++){n1=n2=n3=n4=score=0;for(y=0;y<q;y++){for(x=0;x<q;x++){if((x>=6)&&(((t[i][y][x-6]&t[i][y][x-5]&t[i][y][x-4]&t[i][y][x-3]&t[i][y][x-2]&t[i][y][x-1]&t[i][y][x])===1)||((t[i][y][x-6]|t[i][y][x-5]|t[i][y][x-4]|t[i][y][x-3]|t[i][y][x-2]|t[i][y][x-1]|t[i][y][x])===0))){n1++}if((y>=6)&&(((t[i][y-6][x]&t[i][y-5][x]&t[i][y-4][x]&t[i][y-3][x]&t[i][y-2][x]&t[i][y-1][x]&t[i][y][x])===1)||((t[i][y-6][x]|t[i][y-5][x]|t[i][y-4][x]|t[i][y-3][x]|t[i][y-2][x]|t[i][y-1][x]|t[i][y][x])===0))){n1++}if((x>0&&y>0)&&(((t[i][y][x]&t[i][y][x-1]&t[i][y-1][x]&t[i][y-1][x-1])===1)||((t[i][y][x]|t[i][y][x-1]|t[i][y-1][x]|t[i][y-1][x-1])===0))){n2++}if((x>=6)&&((t[i][y][x-6]===1)&&(t[i][y][x-5]===0)&&(t[i][y][x-4]===1)&&(t[i][y][x-3]===1)&&(t[i][y][x-2]===1)&&(t[i][y][x-1]===0)&&(t[i][y][x]===1))){n3++}if((y>=6)&&((t[i][y-6][x]===1)&&(t[i][y-5][x]===0)&&(t[i][y-4][x]===1)&&(t[i][y-3][x]===1)&&(t[i][y-2][x]===1)&&(t[i][y-1][x]===0)&&(t[i][y][x]===1))){n3++}n4+=t[i][y][x]}}n4=Math.abs(((100*n4)/(q*q))-50)/5;score=(n1*3)+(n2*3)+(n3*40)+(n4*10);if(score<selectedMaskScore){selectedMaskScore=score;u=i}}for(y=0;y<q;y++){for(x=0;x<q;x++){if(matrix[y][x]&(BIT_TYPE.DATA|BIT_TYPE.FORMAT)){matrix[y][x]=t[u][y][x]}else{matrix[y][x]=matrix[y][x]&0x1}}}return matrix}function processInput(a,b){var d,dataArr,i,c,len;switch(typeof(a)){case'string':d=a;break;case'number':d=a.toString();break;case'object':if(a.constructor===w[A].prototype.Input){d=a.toString()}else if((Array.isArray||function(o){return Object.prototype.toString.call(o)==='[object Array]'})(a)){return a}else{d=(new w[A].prototype.Input(a.dataType,a.data)).toString()}break;default:throw new TypeError('Unsupported input parameter.');}dataArr=(b.encodeMode===b.ENCODE_MODE.UTF8_SIGNATURE?[0xef,0xbb,0xbf]:[]);if(b.encodeMode===b.ENCODE_MODE.UTF8_SIGNATURE||b.encodeMode===b.ENCODE_MODE.UTF8){for(i=0,len=d.length;i<len;i++){c=d.charCodeAt(i);if(c<128){dataArr.push(c)}else if((c>127)&&(c<2048)){dataArr.push((c>>6)|192,(c&63)|128)}else{dataArr.push((c>>12)|224,((c>>6)&63)|128,(c&63)|128)}}}else{for(i=0,len=d.length;i<len;i++){dataArr.push(d.charCodeAt(i))}}return dataArr}function getMinVersionByBits(a,b){for(var i=1;i<versionInfo.length;i++){if(a<=((versionInfo[i][B.TOTAL_BYTES]-versionInfo[i][B.ECC_BYTES][b])<<3)){return i}}return 0}function toBits(a,b){var c=new Array(b);if((typeof(a)==='number')&&(b>0)&&(b<=32)){for(var i=b-1;i>=0;i--){c[i]=a&0x1;a>>=1}return c}else{throw new Error("Invalid parameters in toBits().");}return[]}function toByte(a,b){b=b||0;return((a[b]||0)<<7)+((a[b+1]||0)<<6)+((a[b+2]||0)<<5)+((a[b+3]||0)<<4)+((a[b+4]||0)<<3)+((a[b+5]||0)<<2)+((a[b+6]||0)<<1)+((a[b+7]||0))}function typedArray(a,b){var c=new Array(a);for(var i=0;i<a;i++){c[i]=b}return c}function arrayCopy(a,b,c){for(var i=0;i<c.length;i++){a[b+i]=c[i]}return b+c.length}function matrixCopy(a,b,c,d,e){var x,xLen,y,yLen;for(y=0,yLen=d.length;y<yLen;y++){for(x=0,xLen=d[y].length;x<xLen;x++){a[c+y][b+x]=d[y][x]^e}}}function indexInArray(a,b){if(typeof(b.indexOf)==='function'){return b.indexOf(a)}else{for(var i=0;i<b.length;i++){if(b[i]===a){return i}}}return-1}function isEnumValue(a,b){for(var v in a){if(a[v]===b){return true}}return false}function copyObject(a){if(typeof(a)!='object'){return a}var b={};for(var c in a){if(typeof(a[c])==='object'){b[c]=copyObject(a[c])}else{b[c]=a[c]}}return b}})(window);




var SALT_DEFAULT = null; // assign a string and save this file.



(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);




window.params  = { 
  "N"        : 18,
  "p"        : 1,
  "r"        : 8,
  "dkLen"    : 32,
  "pbkdf2c"  : 65536
}
;
window.package = {
  "name": "warpwallet",
  "version": "1.0.6",
  "description": "Open Source JavaScript Client-Side Bitcoin Wallet Generator Using scrypt",
  "dependencies": {
    "iced-coffee-script": "",
    "iced-utils" : ">=0.1.1",
    "keybase-bitcoin": ">=0.0.0",
    "triplesec" : "keybase/triplesec#header_v3",
    "browserify" : "*",
    "iced-error" : "*",
    "iced-test"  : "*",
    "brew" : "*",
    "colors" : "*",
    "icsify" : "*"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/keybase/warpwallet"
  },
  "keywords": [
    "bitcoin address wallet generator"
  ],
  "author": "",
  "license": "",
  "bugs": {
    "url": "https://github.com/keybase/warpwallet/issues"
  }
}
;






(function() {
  var Warper;



  Warper = (function() {
    function Warper() {
      this.check_compatibility();
      this.attach_ux();
      if (window.SALT_DEFAULT != null) {
        $('#salt').val(window.SALT_DEFAULT);
        $('#salt').attr('disabled', true);
        $('.salt-label').text('Prefilled salt');
      }
    }

    Warper.prototype.check_compatibility = function() {
      if (typeof Int32Array === "undefined" || Int32Array === null) {
        return $('.form-container').html('<p>\n  Sorry, but your browser is too old to run WarpWallet, which requires Int32Array support.\n</p>');
      }
    };

    Warper.prototype.attach_ux = function() {
      var _this = this;
      $('#btn-submit').on('click', function() {
        return _this.click_submit();
      });
      $('#btn-reset').on('click', function() {
        return _this.click_reset();
      });
      $('#salt').on('change', function() {
        return _this.salt_change();
      });
      $('#salt').on('keyup', function() {
        return _this.salt_change();
      });
      $('#checkbox-salt-confirm').on('click', function() {
        return _this.any_change();
      });
      $('#passphrase').on('change', function() {
        return _this.any_change();
      });
      $('#passphrase').on('keyup', function() {
        return _this.any_change();
      });
      $('#public-address').on('click', function() {
        return $(this).select();
      });
      $('#private-key').on('click', function() {
        return $(this).select();
      });
      return $('.what-salt').on('click', function() {
        return $('.salt-explanation').toggle();
      });
    };

    Warper.prototype.any_change = function() {
      var chk, err, pp, salt, warn;
      $('.progress-form').hide();
      $('#private-key').val('');
      $('#public-address').val('');
      $('#btn-submit').attr('disabled', false).show().html('Generate');
      pp = $('#passphrase').val();
      salt = $('#salt').val();
      chk = $('#checkbox-salt-confirm').is(":checked");
      err = null;
      warn = null;
      if (!pp.length) {
        err = "Please enter a passphrase";
      } else if ((salt != null ? salt.length : void 0) && !this.salt_ok()) {
        err = "Fix your salt";
      } else if ((salt != null ? salt.length : void 0) && (!chk) && (window.SALT_DEFAULT == null)) {
        err = "Confirm your salt";
      } else if (pp.length < 12) {
        warn = "Consider a larger passphrase";
      }
      if (err) {
        $('#btn-submit').attr('disabled', true).html(err);
      } else if (warn) {
        $('#btn-submit').attr('disabled', false).html(warn);
      } else {
        $('#btn-submit').attr('disabled', false).html("Generate");
      }
      $('.output-form').hide();
      $('#public-address-qr').html('');
      return $('#private-key-qr').html('');
    };

    Warper.prototype.commas = function(n) {
      while (/(\d+)(\d{3})/.test(n.toString())) {
        n = n.toString().replace(/(\d+)(\d{3})/, '$1,$2');
      }
      return n;
    };

    Warper.prototype.salt_ok = function() {
      var salt;
      salt = $('#salt').val();
      return (salt.match(/^[\S]+@[\S]+\.[\S]+$/)) || (window.SALT_DEFAULT != null);
    };

    Warper.prototype.salt_change = function() {
      var salt;
      salt = $('#salt').val();
      $('#checkbox-salt-confirm').attr('checked', false);
      if (!salt.length) {
        $('.salt-confirm').hide();
      }
      if (window.SALT_DEFAULT != null) {
        $('.salt-confirm').hide();
      } else if (this.salt_ok()) {
        $('.salt-confirm').show();
        $('.salt-summary').html(salt);
      } else {
        $('.salt-confirm').hide();
      }
      return this.any_change();
    };

    Warper.prototype.progress_hook = function(o) {
      var w;
      if (o.what === 'scrypt') {
        w = (o.i / o.total) * 50;
        $('.progress-form .bar').css('width', "" + w + "%");
        return $('.progress-form .bar .progress-scrypt').html("scrypt " + (this.commas(o.i)) + " of " + (this.commas(o.total)));
      } else if (o.what === 'pbkdf2') {
        w = 50 + (o.i / o.total) * 50;
        $('.progress-form .bar').css('width', "" + w + "%");
        return $('.progress-form .bar .progress-pbkdf2').html("&nbsp; pbkdf2 " + (this.commas(o.i)) + " of " + (this.commas(o.total)));
      }
    };

    Warper.prototype.click_reset = function() {
      $('#btn-submit').attr('disabled', false).show().html('Please enter a passphrase');
      $('#passphrase, #public-address, #private-key').val('');
      if (window.SALT_DEFAULT == null) {
        $('#salt').val('');
      }
      $('#checkbox-salt-confirm').attr('checked', false);
      $('.salt-summary').html('');
      $('.salt-confirm').hide();
      $('.progress-form').hide();
      $('.output-form').hide();
      $('#public-address-qr').html('');
      return $('#private-key-qr').html('');
    };

    Warper.prototype.write_qrs = function(pub, priv) {
      var params;
      params = {
        width: 256,
        height: 256,
        colorLight: "#f8f8f4",
        correctLevel: QRCode.CorrectLevel.H
      };
      (new QRCode("public-address-qr", params)).makeCode(pub);
      return (new QRCode("private-key-qr", params)).makeCode(priv);
    };

    Warper.prototype.click_submit = function() {
      var _this = this;
      $('#btn-submit').attr('disabled', true).html('Running...');
      $('#btn-reset').attr('disabled', true).html('Running...');
      $('#passphrase, #salt, checkbox-salt-confirm').attr('disabled', true);
      $('.progress-pbkdf2, .progress-scrypt').html('');
      $('.progress-form').show();
      return warpwallet.run({
        passphrase: $('#passphrase').val(),
        salt: $('#salt').val(),
        progress_hook: function(o) {
          return _this.progress_hook(o);
        },
        params: window.params
      }, function(res) {
        $('#passphrase, #checkbox-salt-confirm').attr('disabled', false);
        if (window.SALT_DEFAULT == null) {
          $('#salt').attr('disabled', false);
        }
        $('.progress-form').hide();
        $('.output-form').show();
        $('#btn-submit').hide();
        $('#btn-reset').attr('disabled', false).html('Clear &amp; reset');
        $('#public-address').val(res["public"]);
        $('#private-key').val(res["private"]);
        _this.write_qrs(res["public"], res["private"]);
        return console.log;
      });
    };

    return Warper;

  })();

  $(function() {
    return new Warper();
  });

}).call(this);















!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.warpwallet=e():"undefined"!=typeof global?global.warpwallet=e():"undefined"!=typeof self&&(self.warpwallet=e())}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


//
// The shims in this file are not fully implemented shims for the ES5
// features, but do work for the particular usecases there is in
// the other modules.
//

var toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

// Array.isArray is supported in IE9
function isArray(xs) {
  return toString.call(xs) === '[object Array]';
}
exports.isArray = typeof Array.isArray === 'function' ? Array.isArray : isArray;

// Array.prototype.indexOf is supported in IE9
exports.indexOf = function indexOf(xs, x) {
  if (xs.indexOf) return xs.indexOf(x);
  for (var i = 0; i < xs.length; i++) {
    if (x === xs[i]) return i;
  }
  return -1;
};

// Array.prototype.filter is supported in IE9
exports.filter = function filter(xs, fn) {
  if (xs.filter) return xs.filter(fn);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    if (fn(xs[i], i, xs)) res.push(xs[i]);
  }
  return res;
};

// Array.prototype.forEach is supported in IE9
exports.forEach = function forEach(xs, fn, self) {
  if (xs.forEach) return xs.forEach(fn, self);
  for (var i = 0; i < xs.length; i++) {
    fn.call(self, xs[i], i, xs);
  }
};

// Array.prototype.map is supported in IE9
exports.map = function map(xs, fn) {
  if (xs.map) return xs.map(fn);
  var out = new Array(xs.length);
  for (var i = 0; i < xs.length; i++) {
    out[i] = fn(xs[i], i, xs);
  }
  return out;
};

// Array.prototype.reduce is supported in IE9
exports.reduce = function reduce(array, callback, opt_initialValue) {
  if (array.reduce) return array.reduce(callback, opt_initialValue);
  var value, isValueSet = false;

  if (2 < arguments.length) {
    value = opt_initialValue;
    isValueSet = true;
  }
  for (var i = 0, l = array.length; l > i; ++i) {
    if (array.hasOwnProperty(i)) {
      if (isValueSet) {
        value = callback(value, array[i], i, array);
      }
      else {
        value = array[i];
        isValueSet = true;
      }
    }
  }

  return value;
};

// String.prototype.substr - negative index don't work in IE8
if ('ab'.substr(-1) !== 'b') {
  exports.substr = function (str, start, length) {
    // did we get a negative start, calculate how much it is from the beginning of the string
    if (start < 0) start = str.length + start;

    // call the original function
    return str.substr(start, length);
  };
} else {
  exports.substr = function (str, start, length) {
    return str.substr(start, length);
  };
}

// String.prototype.trim is supported in IE9
exports.trim = function (str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
};

// Function.prototype.bind is supported in IE9
exports.bind = function () {
  var args = Array.prototype.slice.call(arguments);
  var fn = args.shift();
  if (fn.bind) return fn.bind.apply(fn, args);
  var self = args.shift();
  return function () {
    fn.apply(self, args.concat([Array.prototype.slice.call(arguments)]));
  };
};

// Object.create is supported in IE9
function create(prototype, properties) {
  var object;
  if (prototype === null) {
    object = { '__proto__' : null };
  }
  else {
    if (typeof prototype !== 'object') {
      throw new TypeError(
        'typeof prototype[' + (typeof prototype) + '] != \'object\''
      );
    }
    var Type = function () {};
    Type.prototype = prototype;
    object = new Type();
    object.__proto__ = prototype;
  }
  if (typeof properties !== 'undefined' && Object.defineProperties) {
    Object.defineProperties(object, properties);
  }
  return object;
}
exports.create = typeof Object.create === 'function' ? Object.create : create;

// Object.keys and Object.getOwnPropertyNames is supported in IE9 however
// they do show a description and number property on Error objects
function notObject(object) {
  return ((typeof object != "object" && typeof object != "function") || object === null);
}

function keysShim(object) {
  if (notObject(object)) {
    throw new TypeError("Object.keys called on a non-object");
  }

  var result = [];
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      result.push(name);
    }
  }
  return result;
}

// getOwnPropertyNames is almost the same as Object.keys one key feature
//  is that it returns hidden properties, since that can't be implemented,
//  this feature gets reduced so it just shows the length property on arrays
function propertyShim(object) {
  if (notObject(object)) {
    throw new TypeError("Object.getOwnPropertyNames called on a non-object");
  }

  var result = keysShim(object);
  if (exports.isArray(object) && exports.indexOf(object, 'length') === -1) {
    result.push('length');
  }
  return result;
}

var keys = typeof Object.keys === 'function' ? Object.keys : keysShim;
var getOwnPropertyNames = typeof Object.getOwnPropertyNames === 'function' ?
  Object.getOwnPropertyNames : propertyShim;

if (new Error().hasOwnProperty('description')) {
  var ERROR_PROPERTY_FILTER = function (obj, array) {
    if (toString.call(obj) === '[object Error]') {
      array = exports.filter(array, function (name) {
        return name !== 'description' && name !== 'number' && name !== 'message';
      });
    }
    return array;
  };

  exports.keys = function (object) {
    return ERROR_PROPERTY_FILTER(object, keys(object));
  };
  exports.getOwnPropertyNames = function (object) {
    return ERROR_PROPERTY_FILTER(object, getOwnPropertyNames(object));
  };
} else {
  exports.keys = keys;
  exports.getOwnPropertyNames = getOwnPropertyNames;
}

// Object.getOwnPropertyDescriptor - supported in IE8 but only on dom elements
function valueObject(value, key) {
  return { value: value[key] };
}

if (typeof Object.getOwnPropertyDescriptor === 'function') {
  try {
    Object.getOwnPropertyDescriptor({'a': 1}, 'a');
    exports.getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  } catch (e) {
    // IE8 dom element issue - use a try catch and default to valueObject
    exports.getOwnPropertyDescriptor = function (value, key) {
      try {
        return Object.getOwnPropertyDescriptor(value, key);
      } catch (e) {
        return valueObject(value, key);
      }
    };
  }
} else {
  exports.getOwnPropertyDescriptor = valueObject;
}

},{}],2:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var shims = require('_shims');

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  shims.forEach(array, function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = shims.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = shims.getOwnPropertyNames(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }

  shims.forEach(keys, function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = shims.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (shims.indexOf(ctx.seen, desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = shims.reduce(output, function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return shims.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) && objectToString(e) === '[object Error]';
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.binarySlice === 'function'
  ;
}
exports.isBuffer = isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = function(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = shims.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = shims.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

},{"_shims":1}],3:[function(require,module,exports){
require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.readIEEE754 = function(buffer, offset, isBE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isBE ? 0 : (nBytes - 1),
      d = isBE ? 1 : -1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.writeIEEE754 = function(buffer, value, offset, isBE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isBE ? (nBytes - 1) : 0,
      d = isBE ? -1 : 1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],"q9TxCC":[function(require,module,exports){
var assert;
exports.Buffer = Buffer;
exports.SlowBuffer = Buffer;
Buffer.poolSize = 8192;
exports.INSPECT_MAX_BYTES = 50;

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function Buffer(subject, encoding, offset) {
  if(!assert) assert= require('assert');
  if (!(this instanceof Buffer)) {
    return new Buffer(subject, encoding, offset);
  }
  this.parent = this;
  this.offset = 0;

  // Work-around: node's base64 implementation
  // allows for non-padded strings while base64-js
  // does not..
  if (encoding == "base64" && typeof subject == "string") {
    subject = stringtrim(subject);
    while (subject.length % 4 != 0) {
      subject = subject + "="; 
    }
  }

  var type;

  // Are we slicing?
  if (typeof offset === 'number') {
    this.length = coerce(encoding);
    // slicing works, with limitations (no parent tracking/update)
    // check https://github.com/toots/buffer-browserify/issues/19
    for (var i = 0; i < this.length; i++) {
        this[i] = subject.get(i+offset);
    }
  } else {
    // Find the length
    switch (type = typeof subject) {
      case 'number':
        this.length = coerce(subject);
        break;

      case 'string':
        this.length = Buffer.byteLength(subject, encoding);
        break;

      case 'object': // Assume object is an array
        this.length = coerce(subject.length);
        break;

      default:
        throw new Error('First argument needs to be a number, ' +
                        'array or string.');
    }

    // Treat array-ish objects as a byte array.
    if (isArrayIsh(subject)) {
      for (var i = 0; i < this.length; i++) {
        if (subject instanceof Buffer) {
          this[i] = subject.readUInt8(i);
        }
        else {
          this[i] = subject[i];
        }
      }
    } else if (type == 'string') {
      // We are a string
      this.length = this.write(subject, 0, encoding);
    } else if (type === 'number') {
      for (var i = 0; i < this.length; i++) {
        this[i] = 0;
      }
    }
  }
}

Buffer.prototype.get = function get(i) {
  if (i < 0 || i >= this.length) throw new Error('oob');
  return this[i];
};

Buffer.prototype.set = function set(i, v) {
  if (i < 0 || i >= this.length) throw new Error('oob');
  return this[i] = v;
};

Buffer.byteLength = function (str, encoding) {
  switch (encoding || "utf8") {
    case 'hex':
      return str.length / 2;

    case 'utf8':
    case 'utf-8':
      return utf8ToBytes(str).length;

    case 'ascii':
    case 'binary':
      return str.length;

    case 'base64':
      return base64ToBytes(str).length;

    default:
      throw new Error('Unknown encoding');
  }
};

Buffer.prototype.utf8Write = function (string, offset, length) {
  var bytes, pos;
  return Buffer._charsWritten =  blitBuffer(utf8ToBytes(string), this, offset, length);
};

Buffer.prototype.asciiWrite = function (string, offset, length) {
  var bytes, pos;
  return Buffer._charsWritten =  blitBuffer(asciiToBytes(string), this, offset, length);
};

Buffer.prototype.binaryWrite = Buffer.prototype.asciiWrite;

Buffer.prototype.base64Write = function (string, offset, length) {
  var bytes, pos;
  return Buffer._charsWritten = blitBuffer(base64ToBytes(string), this, offset, length);
};

Buffer.prototype.base64Slice = function (start, end) {
  var bytes = Array.prototype.slice.apply(this, arguments)
  return require("base64-js").fromByteArray(bytes);
};

Buffer.prototype.utf8Slice = function () {
  var bytes = Array.prototype.slice.apply(this, arguments);
  var res = "";
  var tmp = "";
  var i = 0;
  while (i < bytes.length) {
    if (bytes[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(bytes[i]);
      tmp = "";
    } else
      tmp += "%" + bytes[i].toString(16);

    i++;
  }

  return res + decodeUtf8Char(tmp);
}

Buffer.prototype.asciiSlice = function () {
  var bytes = Array.prototype.slice.apply(this, arguments);
  var ret = "";
  for (var i = 0; i < bytes.length; i++)
    ret += String.fromCharCode(bytes[i]);
  return ret;
}

Buffer.prototype.binarySlice = Buffer.prototype.asciiSlice;

Buffer.prototype.inspect = function() {
  var out = [],
      len = this.length;
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i]);
    if (i == exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...';
      break;
    }
  }
  return '<Buffer ' + out.join(' ') + '>';
};


Buffer.prototype.hexSlice = function(start, end) {
  var len = this.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; i++) {
    out += toHex(this[i]);
  }
  return out;
};


Buffer.prototype.toString = function(encoding, start, end) {
  encoding = String(encoding || 'utf8').toLowerCase();
  start = +start || 0;
  if (typeof end == 'undefined') end = this.length;

  // Fastpath empty strings
  if (+end == start) {
    return '';
  }

  switch (encoding) {
    case 'hex':
      return this.hexSlice(start, end);

    case 'utf8':
    case 'utf-8':
      return this.utf8Slice(start, end);

    case 'ascii':
      return this.asciiSlice(start, end);

    case 'binary':
      return this.binarySlice(start, end);

    case 'base64':
      return this.base64Slice(start, end);

    case 'ucs2':
    case 'ucs-2':
      return this.ucs2Slice(start, end);

    default:
      throw new Error('Unknown encoding');
  }
};


Buffer.prototype.hexWrite = function(string, offset, length) {
  offset = +offset || 0;
  var remaining = this.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = +length;
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2) {
    throw new Error('Invalid hex string');
  }
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(byte)) throw new Error('Invalid hex string');
    this[offset + i] = byte;
  }
  Buffer._charsWritten = i * 2;
  return i;
};


Buffer.prototype.write = function(string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length;
      length = undefined;
    }
  } else {  // legacy
    var swap = encoding;
    encoding = offset;
    offset = length;
    length = swap;
  }

  offset = +offset || 0;
  var remaining = this.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = +length;
    if (length > remaining) {
      length = remaining;
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase();

  switch (encoding) {
    case 'hex':
      return this.hexWrite(string, offset, length);

    case 'utf8':
    case 'utf-8':
      return this.utf8Write(string, offset, length);

    case 'ascii':
      return this.asciiWrite(string, offset, length);

    case 'binary':
      return this.binaryWrite(string, offset, length);

    case 'base64':
      return this.base64Write(string, offset, length);

    case 'ucs2':
    case 'ucs-2':
      return this.ucs2Write(string, offset, length);

    default:
      throw new Error('Unknown encoding');
  }
};

// slice(start, end)
function clamp(index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue;
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len;
  if (index >= 0) return index;
  index += len;
  if (index >= 0) return index;
  return 0;
}

Buffer.prototype.slice = function(start, end) {
  var len = this.length;
  start = clamp(start, len, 0);
  end = clamp(end, len, len);
  return new Buffer(this, end - start, +start);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function(target, target_start, start, end) {
  var source = this;
  start || (start = 0);
  if (end === undefined || isNaN(end)) {
    end = this.length;
  }
  target_start || (target_start = 0);

  if (end < start) throw new Error('sourceEnd < sourceStart');

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length == 0 || source.length == 0) return 0;

  if (target_start < 0 || target_start >= target.length) {
    throw new Error('targetStart out of bounds');
  }

  if (start < 0 || start >= source.length) {
    throw new Error('sourceStart out of bounds');
  }

  if (end < 0 || end > source.length) {
    throw new Error('sourceEnd out of bounds');
  }

  // Are we oob?
  if (end > this.length) {
    end = this.length;
  }

  if (target.length - target_start < end - start) {
    end = target.length - target_start + start;
  }

  var temp = [];
  for (var i=start; i<end; i++) {
    assert.ok(typeof this[i] !== 'undefined', "copying undefined buffer bytes!");
    temp.push(this[i]);
  }

  for (var i=target_start; i<target_start+temp.length; i++) {
    target[i] = temp[i-target_start];
  }
};

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill(value, start, end) {
  value || (value = 0);
  start || (start = 0);
  end || (end = this.length);

  if (typeof value === 'string') {
    value = value.charCodeAt(0);
  }
  if (!(typeof value === 'number') || isNaN(value)) {
    throw new Error('value is not a number');
  }

  if (end < start) throw new Error('end < start');

  // Fill 0 bytes; we're done
  if (end === start) return 0;
  if (this.length == 0) return 0;

  if (start < 0 || start >= this.length) {
    throw new Error('start out of bounds');
  }

  if (end < 0 || end > this.length) {
    throw new Error('end out of bounds');
  }

  for (var i = start; i < end; i++) {
    this[i] = value;
  }
}

// Static methods
Buffer.isBuffer = function isBuffer(b) {
  return b instanceof Buffer || b instanceof Buffer;
};

Buffer.concat = function (list, totalLength) {
  if (!isArray(list)) {
    throw new Error("Usage: Buffer.concat(list, [totalLength])\n \
      list should be an Array.");
  }

  if (list.length === 0) {
    return new Buffer(0);
  } else if (list.length === 1) {
    return list[0];
  }

  if (typeof totalLength !== 'number') {
    totalLength = 0;
    for (var i = 0; i < list.length; i++) {
      var buf = list[i];
      totalLength += buf.length;
    }
  }

  var buffer = new Buffer(totalLength);
  var pos = 0;
  for (var i = 0; i < list.length; i++) {
    var buf = list[i];
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

Buffer.isEncoding = function(encoding) {
  switch ((encoding + '').toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
    case 'raw':
      return true;

    default:
      return false;
  }
};

// helpers

function coerce(length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length);
  return length < 0 ? 0 : length;
}

function isArray(subject) {
  return (Array.isArray ||
    function(subject){
      return {}.toString.apply(subject) == '[object Array]'
    })
    (subject)
}

function isArrayIsh(subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
         subject && typeof subject === 'object' &&
         typeof subject.length === 'number';
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; i++)
    if (str.charCodeAt(i) <= 0x7F)
      byteArray.push(str.charCodeAt(i));
    else {
      var h = encodeURIComponent(str.charAt(i)).substr(1).split('%');
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16));
    }

  return byteArray;
}

function asciiToBytes(str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++ )
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push( str.charCodeAt(i) & 0xFF );

  return byteArray;
}

function base64ToBytes(str) {
  return require("base64-js").toByteArray(str);
}

function blitBuffer(src, dst, offset, length) {
  var pos, i = 0;
  while (i < length) {
    if ((i+offset >= dst.length) || (i >= src.length))
      break;

    dst[i + offset] = src[i];
    i++;
  }
  return i;
}

function decodeUtf8Char(str) {
  try {
    return decodeURIComponent(str);
  } catch (err) {
    return String.fromCharCode(0xFFFD); // UTF 8 invalid char
  }
}

// read/write bit-twiddling

Buffer.prototype.readUInt8 = function(offset, noAssert) {
  var buffer = this;

  if (!noAssert) {
    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (offset >= buffer.length) return;

  return buffer[offset];
};

function readUInt16(buffer, offset, isBigEndian, noAssert) {
  var val = 0;


  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (offset >= buffer.length) return 0;

  if (isBigEndian) {
    val = buffer[offset] << 8;
    if (offset + 1 < buffer.length) {
      val |= buffer[offset + 1];
    }
  } else {
    val = buffer[offset];
    if (offset + 1 < buffer.length) {
      val |= buffer[offset + 1] << 8;
    }
  }

  return val;
}

Buffer.prototype.readUInt16LE = function(offset, noAssert) {
  return readUInt16(this, offset, false, noAssert);
};

Buffer.prototype.readUInt16BE = function(offset, noAssert) {
  return readUInt16(this, offset, true, noAssert);
};

function readUInt32(buffer, offset, isBigEndian, noAssert) {
  var val = 0;

  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (offset >= buffer.length) return 0;

  if (isBigEndian) {
    if (offset + 1 < buffer.length)
      val = buffer[offset + 1] << 16;
    if (offset + 2 < buffer.length)
      val |= buffer[offset + 2] << 8;
    if (offset + 3 < buffer.length)
      val |= buffer[offset + 3];
    val = val + (buffer[offset] << 24 >>> 0);
  } else {
    if (offset + 2 < buffer.length)
      val = buffer[offset + 2] << 16;
    if (offset + 1 < buffer.length)
      val |= buffer[offset + 1] << 8;
    val |= buffer[offset];
    if (offset + 3 < buffer.length)
      val = val + (buffer[offset + 3] << 24 >>> 0);
  }

  return val;
}

Buffer.prototype.readUInt32LE = function(offset, noAssert) {
  return readUInt32(this, offset, false, noAssert);
};

Buffer.prototype.readUInt32BE = function(offset, noAssert) {
  return readUInt32(this, offset, true, noAssert);
};


/*
 * Signed integer types, yay team! A reminder on how two's complement actually
 * works. The first bit is the signed bit, i.e. tells us whether or not the
 * number should be positive or negative. If the two's complement value is
 * positive, then we're done, as it's equivalent to the unsigned representation.
 *
 * Now if the number is positive, you're pretty much done, you can just leverage
 * the unsigned translations and return those. Unfortunately, negative numbers
 * aren't quite that straightforward.
 *
 * At first glance, one might be inclined to use the traditional formula to
 * translate binary numbers between the positive and negative values in two's
 * complement. (Though it doesn't quite work for the most negative value)
 * Mainly:
 *  - invert all the bits
 *  - add one to the result
 *
 * Of course, this doesn't quite work in Javascript. Take for example the value
 * of -128. This could be represented in 16 bits (big-endian) as 0xff80. But of
 * course, Javascript will do the following:
 *
 * > ~0xff80
 * -65409
 *
 * Whoh there, Javascript, that's not quite right. But wait, according to
 * Javascript that's perfectly correct. When Javascript ends up seeing the
 * constant 0xff80, it has no notion that it is actually a signed number. It
 * assumes that we've input the unsigned value 0xff80. Thus, when it does the
 * binary negation, it casts it into a signed value, (positive 0xff80). Then
 * when you perform binary negation on that, it turns it into a negative number.
 *
 * Instead, we're going to have to use the following general formula, that works
 * in a rather Javascript friendly way. I'm glad we don't support this kind of
 * weird numbering scheme in the kernel.
 *
 * (BIT-MAX - (unsigned)val + 1) * -1
 *
 * The astute observer, may think that this doesn't make sense for 8-bit numbers
 * (really it isn't necessary for them). However, when you get 16-bit numbers,
 * you do. Let's go back to our prior example and see how this will look:
 *
 * (0xffff - 0xff80 + 1) * -1
 * (0x007f + 1) * -1
 * (0x0080) * -1
 */
Buffer.prototype.readInt8 = function(offset, noAssert) {
  var buffer = this;
  var neg;

  if (!noAssert) {
    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'Trying to read beyond buffer length');
  }

  if (offset >= buffer.length) return;

  neg = buffer[offset] & 0x80;
  if (!neg) {
    return (buffer[offset]);
  }

  return ((0xff - buffer[offset] + 1) * -1);
};

function readInt16(buffer, offset, isBigEndian, noAssert) {
  var neg, val;

  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'Trying to read beyond buffer length');
  }

  val = readUInt16(buffer, offset, isBigEndian, noAssert);
  neg = val & 0x8000;
  if (!neg) {
    return val;
  }

  return (0xffff - val + 1) * -1;
}

Buffer.prototype.readInt16LE = function(offset, noAssert) {
  return readInt16(this, offset, false, noAssert);
};

Buffer.prototype.readInt16BE = function(offset, noAssert) {
  return readInt16(this, offset, true, noAssert);
};

function readInt32(buffer, offset, isBigEndian, noAssert) {
  var neg, val;

  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to read beyond buffer length');
  }

  val = readUInt32(buffer, offset, isBigEndian, noAssert);
  neg = val & 0x80000000;
  if (!neg) {
    return (val);
  }

  return (0xffffffff - val + 1) * -1;
}

Buffer.prototype.readInt32LE = function(offset, noAssert) {
  return readInt32(this, offset, false, noAssert);
};

Buffer.prototype.readInt32BE = function(offset, noAssert) {
  return readInt32(this, offset, true, noAssert);
};

function readFloat(buffer, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset + 3 < buffer.length,
        'Trying to read beyond buffer length');
  }

  return require('./buffer_ieee754').readIEEE754(buffer, offset, isBigEndian,
      23, 4);
}

Buffer.prototype.readFloatLE = function(offset, noAssert) {
  return readFloat(this, offset, false, noAssert);
};

Buffer.prototype.readFloatBE = function(offset, noAssert) {
  return readFloat(this, offset, true, noAssert);
};

function readDouble(buffer, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset + 7 < buffer.length,
        'Trying to read beyond buffer length');
  }

  return require('./buffer_ieee754').readIEEE754(buffer, offset, isBigEndian,
      52, 8);
}

Buffer.prototype.readDoubleLE = function(offset, noAssert) {
  return readDouble(this, offset, false, noAssert);
};

Buffer.prototype.readDoubleBE = function(offset, noAssert) {
  return readDouble(this, offset, true, noAssert);
};


/*
 * We have to make sure that the value is a valid integer. This means that it is
 * non-negative. It has no fractional component and that it does not exceed the
 * maximum allowed value.
 *
 *      value           The number to check for validity
 *
 *      max             The maximum value
 */
function verifuint(value, max) {
  assert.ok(typeof (value) == 'number',
      'cannot write a non-number as a number');

  assert.ok(value >= 0,
      'specified a negative value for writing an unsigned value');

  assert.ok(value <= max, 'value is larger than maximum value for type');

  assert.ok(Math.floor(value) === value, 'value has a fractional component');
}

Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {
  var buffer = this;

  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'trying to write beyond buffer length');

    verifuint(value, 0xff);
  }

  if (offset < buffer.length) {
    buffer[offset] = value;
  }
};

function writeUInt16(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'trying to write beyond buffer length');

    verifuint(value, 0xffff);
  }

  for (var i = 0; i < Math.min(buffer.length - offset, 2); i++) {
    buffer[offset + i] =
        (value & (0xff << (8 * (isBigEndian ? 1 - i : i)))) >>>
            (isBigEndian ? 1 - i : i) * 8;
  }

}

Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
  writeUInt16(this, value, offset, false, noAssert);
};

Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
  writeUInt16(this, value, offset, true, noAssert);
};

function writeUInt32(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'trying to write beyond buffer length');

    verifuint(value, 0xffffffff);
  }

  for (var i = 0; i < Math.min(buffer.length - offset, 4); i++) {
    buffer[offset + i] =
        (value >>> (isBigEndian ? 3 - i : i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
  writeUInt32(this, value, offset, false, noAssert);
};

Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
  writeUInt32(this, value, offset, true, noAssert);
};


/*
 * We now move onto our friends in the signed number category. Unlike unsigned
 * numbers, we're going to have to worry a bit more about how we put values into
 * arrays. Since we are only worrying about signed 32-bit values, we're in
 * slightly better shape. Unfortunately, we really can't do our favorite binary
 * & in this system. It really seems to do the wrong thing. For example:
 *
 * > -32 & 0xff
 * 224
 *
 * What's happening above is really: 0xe0 & 0xff = 0xe0. However, the results of
 * this aren't treated as a signed number. Ultimately a bad thing.
 *
 * What we're going to want to do is basically create the unsigned equivalent of
 * our representation and pass that off to the wuint* functions. To do that
 * we're going to do the following:
 *
 *  - if the value is positive
 *      we can pass it directly off to the equivalent wuint
 *  - if the value is negative
 *      we do the following computation:
 *         mb + val + 1, where
 *         mb   is the maximum unsigned value in that byte size
 *         val  is the Javascript negative integer
 *
 *
 * As a concrete value, take -128. In signed 16 bits this would be 0xff80. If
 * you do out the computations:
 *
 * 0xffff - 128 + 1
 * 0xffff - 127
 * 0xff80
 *
 * You can then encode this value as the signed version. This is really rather
 * hacky, but it should work and get the job done which is our goal here.
 */

/*
 * A series of checks to make sure we actually have a signed 32-bit number
 */
function verifsint(value, max, min) {
  assert.ok(typeof (value) == 'number',
      'cannot write a non-number as a number');

  assert.ok(value <= max, 'value larger than maximum allowed value');

  assert.ok(value >= min, 'value smaller than minimum allowed value');

  assert.ok(Math.floor(value) === value, 'value has a fractional component');
}

function verifIEEE754(value, max, min) {
  assert.ok(typeof (value) == 'number',
      'cannot write a non-number as a number');

  assert.ok(value <= max, 'value larger than maximum allowed value');

  assert.ok(value >= min, 'value smaller than minimum allowed value');
}

Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
  var buffer = this;

  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset < buffer.length,
        'Trying to write beyond buffer length');

    verifsint(value, 0x7f, -0x80);
  }

  if (value >= 0) {
    buffer.writeUInt8(value, offset, noAssert);
  } else {
    buffer.writeUInt8(0xff + value + 1, offset, noAssert);
  }
};

function writeInt16(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 1 < buffer.length,
        'Trying to write beyond buffer length');

    verifsint(value, 0x7fff, -0x8000);
  }

  if (value >= 0) {
    writeUInt16(buffer, value, offset, isBigEndian, noAssert);
  } else {
    writeUInt16(buffer, 0xffff + value + 1, offset, isBigEndian, noAssert);
  }
}

Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
  writeInt16(this, value, offset, false, noAssert);
};

Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
  writeInt16(this, value, offset, true, noAssert);
};

function writeInt32(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to write beyond buffer length');

    verifsint(value, 0x7fffffff, -0x80000000);
  }

  if (value >= 0) {
    writeUInt32(buffer, value, offset, isBigEndian, noAssert);
  } else {
    writeUInt32(buffer, 0xffffffff + value + 1, offset, isBigEndian, noAssert);
  }
}

Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
  writeInt32(this, value, offset, false, noAssert);
};

Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
  writeInt32(this, value, offset, true, noAssert);
};

function writeFloat(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 3 < buffer.length,
        'Trying to write beyond buffer length');

    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  require('./buffer_ieee754').writeIEEE754(buffer, value, offset, isBigEndian,
      23, 4);
}

Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {
  writeFloat(this, value, offset, false, noAssert);
};

Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {
  writeFloat(this, value, offset, true, noAssert);
};

function writeDouble(buffer, value, offset, isBigEndian, noAssert) {
  if (!noAssert) {
    assert.ok(value !== undefined && value !== null,
        'missing value');

    assert.ok(typeof (isBigEndian) === 'boolean',
        'missing or invalid endian');

    assert.ok(offset !== undefined && offset !== null,
        'missing offset');

    assert.ok(offset + 7 < buffer.length,
        'Trying to write beyond buffer length');

    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  require('./buffer_ieee754').writeIEEE754(buffer, value, offset, isBigEndian,
      52, 8);
}

Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
  writeDouble(this, value, offset, false, noAssert);
};

Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
  writeDouble(this, value, offset, true, noAssert);
};

},{"./buffer_ieee754":1,"assert":6,"base64-js":4}],"buffer-browserify":[function(require,module,exports){
module.exports=require('q9TxCC');
},{}],4:[function(require,module,exports){
(function (exports) {
  'use strict';

  var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  function b64ToByteArray(b64) {
    var i, j, l, tmp, placeHolders, arr;
  
    if (b64.length % 4 > 0) {
      throw 'Invalid string. Length must be a multiple of 4';
    }

    // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice
    placeHolders = b64.indexOf('=');
    placeHolders = placeHolders > 0 ? b64.length - placeHolders : 0;

    // base64 is 4/3 + up to two characters of the original data
    arr = [];//new Uint8Array(b64.length * 3 / 4 - placeHolders);

    // if there are placeholders, only get up to the last complete 4 chars
    l = placeHolders > 0 ? b64.length - 4 : b64.length;

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = (lookup.indexOf(b64[i]) << 18) | (lookup.indexOf(b64[i + 1]) << 12) | (lookup.indexOf(b64[i + 2]) << 6) | lookup.indexOf(b64[i + 3]);
      arr.push((tmp & 0xFF0000) >> 16);
      arr.push((tmp & 0xFF00) >> 8);
      arr.push(tmp & 0xFF);
    }

    if (placeHolders === 2) {
      tmp = (lookup.indexOf(b64[i]) << 2) | (lookup.indexOf(b64[i + 1]) >> 4);
      arr.push(tmp & 0xFF);
    } else if (placeHolders === 1) {
      tmp = (lookup.indexOf(b64[i]) << 10) | (lookup.indexOf(b64[i + 1]) << 4) | (lookup.indexOf(b64[i + 2]) >> 2);
      arr.push((tmp >> 8) & 0xFF);
      arr.push(tmp & 0xFF);
    }

    return arr;
  }

  function uint8ToBase64(uint8) {
    var i,
      extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
      output = "",
      temp, length;

    function tripletToBase64 (num) {
      return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
    };

    // go through the array every three bytes, we'll deal with trailing stuff later
    for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
      temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
      output += tripletToBase64(temp);
    }

    // pad the end with zeros, but make sure to not forget the extra bytes
    switch (extraBytes) {
      case 1:
        temp = uint8[uint8.length - 1];
        output += lookup[temp >> 2];
        output += lookup[(temp << 4) & 0x3F];
        output += '==';
        break;
      case 2:
        temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
        output += lookup[temp >> 10];
        output += lookup[(temp >> 4) & 0x3F];
        output += lookup[(temp << 2) & 0x3F];
        output += '=';
        break;
    }

    return output;
  }

  module.exports.toByteArray = b64ToByteArray;
  module.exports.fromByteArray = uint8ToBase64;
}());

},{}],5:[function(require,module,exports){


//
// The shims in this file are not fully implemented shims for the ES5
// features, but do work for the particular usecases there is in
// the other modules.
//

var toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

// Array.isArray is supported in IE9
function isArray(xs) {
  return toString.call(xs) === '[object Array]';
}
exports.isArray = typeof Array.isArray === 'function' ? Array.isArray : isArray;

// Array.prototype.indexOf is supported in IE9
exports.indexOf = function indexOf(xs, x) {
  if (xs.indexOf) return xs.indexOf(x);
  for (var i = 0; i < xs.length; i++) {
    if (x === xs[i]) return i;
  }
  return -1;
};

// Array.prototype.filter is supported in IE9
exports.filter = function filter(xs, fn) {
  if (xs.filter) return xs.filter(fn);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    if (fn(xs[i], i, xs)) res.push(xs[i]);
  }
  return res;
};

// Array.prototype.forEach is supported in IE9
exports.forEach = function forEach(xs, fn, self) {
  if (xs.forEach) return xs.forEach(fn, self);
  for (var i = 0; i < xs.length; i++) {
    fn.call(self, xs[i], i, xs);
  }
};

// Array.prototype.map is supported in IE9
exports.map = function map(xs, fn) {
  if (xs.map) return xs.map(fn);
  var out = new Array(xs.length);
  for (var i = 0; i < xs.length; i++) {
    out[i] = fn(xs[i], i, xs);
  }
  return out;
};

// Array.prototype.reduce is supported in IE9
exports.reduce = function reduce(array, callback, opt_initialValue) {
  if (array.reduce) return array.reduce(callback, opt_initialValue);
  var value, isValueSet = false;

  if (2 < arguments.length) {
    value = opt_initialValue;
    isValueSet = true;
  }
  for (var i = 0, l = array.length; l > i; ++i) {
    if (array.hasOwnProperty(i)) {
      if (isValueSet) {
        value = callback(value, array[i], i, array);
      }
      else {
        value = array[i];
        isValueSet = true;
      }
    }
  }

  return value;
};

// String.prototype.substr - negative index don't work in IE8
if ('ab'.substr(-1) !== 'b') {
  exports.substr = function (str, start, length) {
    // did we get a negative start, calculate how much it is from the beginning of the string
    if (start < 0) start = str.length + start;

    // call the original function
    return str.substr(start, length);
  };
} else {
  exports.substr = function (str, start, length) {
    return str.substr(start, length);
  };
}

// String.prototype.trim is supported in IE9
exports.trim = function (str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
};

// Function.prototype.bind is supported in IE9
exports.bind = function () {
  var args = Array.prototype.slice.call(arguments);
  var fn = args.shift();
  if (fn.bind) return fn.bind.apply(fn, args);
  var self = args.shift();
  return function () {
    fn.apply(self, args.concat([Array.prototype.slice.call(arguments)]));
  };
};

// Object.create is supported in IE9
function create(prototype, properties) {
  var object;
  if (prototype === null) {
    object = { '__proto__' : null };
  }
  else {
    if (typeof prototype !== 'object') {
      throw new TypeError(
        'typeof prototype[' + (typeof prototype) + '] != \'object\''
      );
    }
    var Type = function () {};
    Type.prototype = prototype;
    object = new Type();
    object.__proto__ = prototype;
  }
  if (typeof properties !== 'undefined' && Object.defineProperties) {
    Object.defineProperties(object, properties);
  }
  return object;
}
exports.create = typeof Object.create === 'function' ? Object.create : create;

// Object.keys and Object.getOwnPropertyNames is supported in IE9 however
// they do show a description and number property on Error objects
function notObject(object) {
  return ((typeof object != "object" && typeof object != "function") || object === null);
}

function keysShim(object) {
  if (notObject(object)) {
    throw new TypeError("Object.keys called on a non-object");
  }

  var result = [];
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      result.push(name);
    }
  }
  return result;
}

// getOwnPropertyNames is almost the same as Object.keys one key feature
//  is that it returns hidden properties, since that can't be implemented,
//  this feature gets reduced so it just shows the length property on arrays
function propertyShim(object) {
  if (notObject(object)) {
    throw new TypeError("Object.getOwnPropertyNames called on a non-object");
  }

  var result = keysShim(object);
  if (exports.isArray(object) && exports.indexOf(object, 'length') === -1) {
    result.push('length');
  }
  return result;
}

var keys = typeof Object.keys === 'function' ? Object.keys : keysShim;
var getOwnPropertyNames = typeof Object.getOwnPropertyNames === 'function' ?
  Object.getOwnPropertyNames : propertyShim;

if (new Error().hasOwnProperty('description')) {
  var ERROR_PROPERTY_FILTER = function (obj, array) {
    if (toString.call(obj) === '[object Error]') {
      array = exports.filter(array, function (name) {
        return name !== 'description' && name !== 'number' && name !== 'message';
      });
    }
    return array;
  };

  exports.keys = function (object) {
    return ERROR_PROPERTY_FILTER(object, keys(object));
  };
  exports.getOwnPropertyNames = function (object) {
    return ERROR_PROPERTY_FILTER(object, getOwnPropertyNames(object));
  };
} else {
  exports.keys = keys;
  exports.getOwnPropertyNames = getOwnPropertyNames;
}

// Object.getOwnPropertyDescriptor - supported in IE8 but only on dom elements
function valueObject(value, key) {
  return { value: value[key] };
}

if (typeof Object.getOwnPropertyDescriptor === 'function') {
  try {
    Object.getOwnPropertyDescriptor({'a': 1}, 'a');
    exports.getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  } catch (e) {
    // IE8 dom element issue - use a try catch and default to valueObject
    exports.getOwnPropertyDescriptor = function (value, key) {
      try {
        return Object.getOwnPropertyDescriptor(value, key);
      } catch (e) {
        return valueObject(value, key);
      }
    };
  }
} else {
  exports.getOwnPropertyDescriptor = valueObject;
}

},{}],6:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// UTILITY
var util = require('util');
var shims = require('_shims');
var pSlice = Array.prototype.slice;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  this.message = options.message || getMessage(this);
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (util.isUndefined(value)) {
    return '' + value;
  }
  if (util.isNumber(value) && (isNaN(value) || !isFinite(value))) {
    return value.toString();
  }
  if (util.isFunction(value) || util.isRegExp(value)) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (util.isString(s)) {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function getMessage(self) {
  return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' +
         self.operator + ' ' +
         truncate(JSON.stringify(self.expected, replacer), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!util.isObject(actual) && !util.isObject(expected)) {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  try {
    var ka = shims.keys(a),
        kb = shims.keys(b),
        key, i;
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (util.isString(expected)) {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};
},{"_shims":5,"util":7}],7:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var shims = require('_shims');

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  shims.forEach(array, function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = shims.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = shims.getOwnPropertyNames(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }

  shims.forEach(keys, function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = shims.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (shims.indexOf(ctx.seen, desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = shims.reduce(output, function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return shims.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) && objectToString(e) === '[object Error]';
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

function isBuffer(arg) {
  return arg instanceof Buffer;
}
exports.isBuffer = isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = function(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = shims.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = shims.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

},{"_shims":5}]},{},[])
;;module.exports=require("buffer-browserify")

},{}],4:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],5:[function(require,module,exports){
var process=require("__browserify_process");// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var generator,
    __slice = [].slice;



  exports.generator = generator = function(intern, compiletime, runtime) {
    var C, Deferrals, Rendezvous, exceptionHandler, findDeferral, stackWalk;
    compiletime.transform = function(x, options) {
      return x.icedTransform(options);
    };
    compiletime["const"] = C = {
      k: "__iced_k",
      k_noop: "__iced_k_noop",
      param: "__iced_p_",
      ns: "iced",
      runtime: "runtime",
      Deferrals: "Deferrals",
      deferrals: "__iced_deferrals",
      fulfill: "_fulfill",
      b_while: "_break",
      t_while: "_while",
      c_while: "_continue",
      n_while: "_next",
      n_arg: "__iced_next_arg",
      context: "context",
      defer_method: "defer",
      slot: "__slot",
      assign_fn: "assign_fn",
      autocb: "autocb",
      retslot: "ret",
      trace: "__iced_trace",
      passed_deferral: "__iced_passed_deferral",
      findDeferral: "findDeferral",
      lineno: "lineno",
      parent: "parent",
      filename: "filename",
      funcname: "funcname",
      catchExceptions: 'catchExceptions',
      runtime_modes: ["node", "inline", "window", "none", "browserify"],
      trampoline: "trampoline"
    };
    intern.makeDeferReturn = function(obj, defer_args, id, trace_template, multi) {
      var k, ret, trace, v;
      trace = {};
      for (k in trace_template) {
        v = trace_template[k];
        trace[k] = v;
      }
      trace[C.lineno] = defer_args != null ? defer_args[C.lineno] : void 0;
      ret = function() {
        var inner_args, o, _ref;
        inner_args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (defer_args != null) {
          if ((_ref = defer_args.assign_fn) != null) {
            _ref.apply(null, inner_args);
          }
        }
        if (obj) {
          o = obj;
          if (!multi) {
            obj = null;
          }
          return o._fulfill(id, trace);
        } else {
          return intern._warn("overused deferral at " + (intern._trace_to_string(trace)));
        }
      };
      ret[C.trace] = trace;
      return ret;
    };
    intern.__c = 0;
    intern.tickCounter = function(mod) {
      intern.__c++;
      if ((intern.__c % mod) === 0) {
        intern.__c = 0;
        return true;
      } else {
        return false;
      }
    };
    intern.__active_trace = null;
    intern._trace_to_string = function(tr) {
      var fn;
      fn = tr[C.funcname] || "<anonymous>";
      return "" + fn + " (" + tr[C.filename] + ":" + (tr[C.lineno] + 1) + ")";
    };
    intern._warn = function(m) {
      return typeof console !== "undefined" && console !== null ? console.log("ICED warning: " + m) : void 0;
    };
    runtime.trampoline = function(fn) {
      if (!intern.tickCounter(500)) {
        return fn();
      } else if (typeof process !== "undefined" && process !== null) {
        return process.nextTick(fn);
      } else {
        return setTimeout(fn);
      }
    };
    runtime.Deferrals = Deferrals = (function() {
      function Deferrals(k, trace) {
        this.trace = trace;
        this.continuation = k;
        this.count = 1;
        this.ret = null;
      }

      Deferrals.prototype._call = function(trace) {
        var c;
        if (this.continuation) {
          intern.__active_trace = trace;
          c = this.continuation;
          this.continuation = null;
          return c(this.ret);
        } else {
          return intern._warn("Entered dead await at " + (intern._trace_to_string(trace)));
        }
      };

      Deferrals.prototype._fulfill = function(id, trace) {
        var _this = this;
        if (--this.count > 0) {

        } else {
          return runtime.trampoline((function() {
            return _this._call(trace);
          }));
        }
      };

      Deferrals.prototype.defer = function(args) {
        var self;
        this.count++;
        self = this;
        return intern.makeDeferReturn(self, args, null, this.trace);
      };

      Deferrals.prototype._defer = function(args) {
        return this["defer"](args);
      };

      return Deferrals;

    })();
    runtime.findDeferral = findDeferral = function(args) {
      var a, _i, _len;
      for (_i = 0, _len = args.length; _i < _len; _i++) {
        a = args[_i];
        if (a != null ? a[C.trace] : void 0) {
          return a;
        }
      }
      return null;
    };
    runtime.Rendezvous = Rendezvous = (function() {
      var RvId;

      function Rendezvous() {
        this.completed = [];
        this.waiters = [];
        this.defer_id = 0;
      }

      RvId = (function() {
        function RvId(rv, id, multi) {
          this.rv = rv;
          this.id = id;
          this.multi = multi;
        }

        RvId.prototype.defer = function(defer_args) {
          return this.rv._deferWithId(this.id, defer_args, this.multi);
        };

        return RvId;

      })();

      Rendezvous.prototype.wait = function(cb) {
        var x;
        if (this.completed.length) {
          x = this.completed.shift();
          return cb(x);
        } else {
          return this.waiters.push(cb);
        }
      };

      Rendezvous.prototype.defer = function(defer_args) {
        var id;
        id = this.defer_id++;
        return this.deferWithId(id, defer_args);
      };

      Rendezvous.prototype.id = function(i, multi) {
        if (multi == null) {
          multi = false;
        }
        return new RvId(this, i, multi);
      };

      Rendezvous.prototype._fulfill = function(id, trace) {
        var cb;
        if (this.waiters.length) {
          cb = this.waiters.shift();
          return cb(id);
        } else {
          return this.completed.push(id);
        }
      };

      Rendezvous.prototype._deferWithId = function(id, defer_args, multi) {
        this.count++;
        return intern.makeDeferReturn(this, defer_args, id, {}, multi);
      };

      return Rendezvous;

    })();
    runtime.stackWalk = stackWalk = function(cb) {
      var line, ret, tr, _ref;
      ret = [];
      tr = cb ? cb[C.trace] : intern.__active_trace;
      while (tr) {
        line = "   at " + (intern._trace_to_string(tr));
        ret.push(line);
        tr = tr != null ? (_ref = tr[C.parent]) != null ? _ref[C.trace] : void 0 : void 0;
      }
      return ret;
    };
    runtime.exceptionHandler = exceptionHandler = function(err, logger) {
      var stack;
      if (!logger) {
        logger = console.log;
      }
      logger(err.stack);
      stack = stackWalk();
      if (stack.length) {
        logger("Iced callback trace:");
        return logger(stack.join("\n"));
      }
    };
    return runtime.catchExceptions = function(logger) {
      return typeof process !== "undefined" && process !== null ? process.on('uncaughtException', function(err) {
        exceptionHandler(err, logger);
        return process.exit(1);
      }) : void 0;
    };
  };

  exports.runtime = {};

  generator(this, exports, exports.runtime);

}).call(this);

},{"__browserify_process":4}],6:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.2d
(function() {
  var BaseError, Canceler, EscErr, EscOk, c_to_camel, ipush, make_error_klass, make_errors, make_esc, to_lower, util,
    __slice = [].slice;



  util = require('util');

  exports.BaseError = BaseError = function(msg, constructor) {
    Error.captureStackTrace(this, this.constructor);
    return this.message = msg || 'Error';
  };

  util.inherits(BaseError, Error);

  BaseError.prototype.name = "BaseError";

  to_lower = function(s) {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
  };

  c_to_camel = function(s) {
    var p;
    return ((function() {
      var _i, _len, _ref, _results;
      _ref = s.split(/_/);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        p = _ref[_i];
        _results.push(to_lower(p));
      }
      return _results;
    })()).join('');
  };

  make_error_klass = function(k, code, default_msg) {
    var ctor;
    ctor = function(msg) {
      BaseError.call(this, msg || default_msg, this.constructor);
      this.istack = [];
      this.code = code;
      return this;
    };
    util.inherits(ctor, BaseError);
    ctor.prototype.name = k;
    ctor.prototype.inspect = function() {
      return "[" + k + ": " + this.message + " (code " + this.code + ")]";
    };
    return ctor;
  };

  exports.make_errors = make_errors = function(d) {
    var enam, errno, k, msg, out, val;
    out = {
      msg: {},
      name: {},
      code: {}
    };
    d.OK = "Success";
    errno = 100;
    for (k in d) {
      msg = d[k];
      if (k !== "OK") {
        enam = (c_to_camel(k)) + "Error";
        val = errno++;
        out[enam] = make_error_klass(enam, val, msg);
      } else {
        val = 0;
      }
      out[k] = val;
      out.msg[k] = out.msg[val] = msg;
      out.name[k] = out.name[val] = k;
      out.code[k] = val;
    }
    return out;
  };

  ipush = function(e, msg) {
    if (msg != null) {
      if (e.istack == null) {
        e.istack = [];
      }
      return e.istack.push(msg);
    }
  };

  exports.make_esc = make_esc = function(gcb, where) {
    return function(lcb) {
      return function() {
        var args, err;
        err = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (err == null) {
          return lcb.apply(null, args);
        } else if (!gcb.__esc) {
          gcb.__esc = true;
          ipush(err, where);
          return gcb(err);
        }
      };
    };
  };

  exports.EscOk = EscOk = (function() {
    function EscOk(gcb, where) {
      this.gcb = gcb;
      this.where = where;
    }

    EscOk.prototype.bailout = function() {
      var t;
      if (this.gcb) {
        t = this.gcb;
        this.gcb = null;
        return t(false);
      }
    };

    EscOk.prototype.check_ok = function(cb) {
      var _this = this;
      return function() {
        var args, ok;
        ok = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (!ok) {
          return _this.bailout();
        } else {
          return cb.apply(null, args);
        }
      };
    };

    EscOk.prototype.check_err = function(cb) {
      var _this = this;
      return function() {
        var args, err;
        err = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (err != null) {
          ipush(err, _this.where);
          return _this.bailout();
        } else {
          return cb.apply(null, args);
        }
      };
    };

    EscOk.prototype.check_non_null = function(cb) {
      var _this = this;
      return function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (args[0] == null) {
          return _this.bailout();
        } else {
          return cb.apply(null, args);
        }
      };
    };

    return EscOk;

  })();

  exports.EscErr = EscErr = (function() {
    function EscErr(gcb, where) {
      this.gcb = gcb;
      this.where = where;
    }

    EscErr.prototype.finish = function(err) {
      var t;
      if (this.gcb) {
        t = this.gcb;
        this.gcb = null;
        return t(err);
      }
    };

    EscErr.prototype.check_ok = function(cb, eclass, emsg) {
      if (eclass == null) {
        eclass = Error;
      }
      if (emsg == null) {
        emsg = null;
      }
      return function() {
        var args, err, ok;
        ok = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (!ok) {
          err = new eclass(emsg);
          ipush(err, this.where);
          return this.finish(err);
        } else {
          return cb.apply(null, args);
        }
      };
    };

    EscErr.prototype.check_err = function(cb) {
      return function() {
        var args, err;
        err = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        if (err != null) {
          ipush(err, this.where);
          return this.finish(err);
        } else {
          return cb.apply(null, args);
        }
      };
    };

    return EscErr;

  })();

  exports.Canceler = Canceler = (function() {
    function Canceler(klass) {
      this.klass = klass != null ? klass : Error;
      this._canceled = false;
    }

    Canceler.prototype.is_canceled = function() {
      return this._canceled;
    };

    Canceler.prototype.is_ok = function() {
      return !this._canceled;
    };

    Canceler.prototype.cancel = function() {
      return this._canceled = true;
    };

    Canceler.prototype.err = function() {
      if (this._canceled) {
        return new this.klass("Aborted");
      } else {
        return null;
      }
    };

    return Canceler;

  })();

}).call(this);

/*
//@ sourceMappingDisabled=index.map
*/

},{"util":2}],7:[function(require,module,exports){

var lib = require('./lib/lib.js');

// This is actually the one function that we expose.  The rest
// isn't ready to use, yet.
exports.generate = function(buffer) {
    var a = new Array(buffer.length);
    var i;
    for (i = 0; i < buffer.length; i++) {
        a[i] = buffer.readUInt8(i);
    }
    var key = new lib.Bitcoin.ECKey(a);
    var ret = {
        "public"  : key.getBitcoinAddress(),
        "private" : key.getBitcoinWalletImportFormat()
    };
    return ret;
};

},{"./lib/lib.js":8}],8:[function(require,module,exports){

var Crypto = exports.Crypto = {};
var Bitcoin = exports.Bitcoin = {};
// Array.prototype.map function is in the public domain.
// Production steps of ECMA-262, Edition 5, 15.4.4.19  
// Reference: http://es5.github.com/#x15.4.4.19  
if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    var T, A, k;
    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }
    // 1. Let O be the result of calling ToObject passing the |this| value as the argument.  
    var O = Object(this);
    // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".  
    // 3. Let len be ToUint32(lenValue).  
    var len = O.length >>> 0;
    // 4. If IsCallable(callback) is false, throw a TypeError exception.  
    // See: http://es5.github.com/#x9.11  
    if ({}.toString.call(callback) != "[object Function]") {
      throw new TypeError(callback + " is not a function");
    }
    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.  
    if (thisArg) {
      T = thisArg;
    }
    // 6. Let A be a new array created as if by the expression new Array(len) where Array is  
    // the standard built-in constructor with that name and len is the value of len.  
    A = new Array(len);
    // 7. Let k be 0  
    k = 0;
    // 8. Repeat, while k < len  
    while (k < len) {
      var kValue, mappedValue;
      // a. Let Pk be ToString(k).  
      //   This is implicit for LHS operands of the in operator  
      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.  
      //   This step can be combined with c  
      // c. If kPresent is true, then  
      if (k in O) {
        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.  
        kValue = O[k];
        // ii. Let mappedValue be the result of calling the Call internal method of callback  
        // with T as the this value and argument list containing kValue, k, and O.  
        mappedValue = callback.call(T, kValue, k, O);
        // iii. Call the DefineOwnProperty internal method of A with arguments  
        // Pk, Property Descriptor {Value: mappedValue, Writable: true, Enumerable: true, Configurable: true},  
        // and false.  
        // In browsers that support Object.defineProperty, use the following:  
        // Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });  
        // For best browser support, use the following:  
        A[k] = mappedValue;
      }
      // d. Increase k by 1.  
      k++;
    }
    // 9. return A  
    return A;
  };
}/*!
* Basic JavaScript BN library - subset useful for RSA encryption. v1.3
* 
* Copyright (c) 2005  Tom Wu
* All Rights Reserved.
* BSD License
* http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*
* Copyright Stephan Thomas
* Copyright bitaddress.org
*/


(function (x) {

  // (public) Constructor function of Global BigInteger object
  var BigInteger = x.BigInteger = function BigInteger(a, b, c) {
    if (a != null)
      if ("number" == typeof a) this.fromNumber(a, b, c);
      else if (b == null && "string" != typeof a) this.fromString(a, 256);
      else this.fromString(a, b);
  };

  // Bits per digit
  var dbits;

  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary & 0xffffff) == 0xefcafe);

  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }

  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.

  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i, x, w, j, c, n) {
    while (--n >= 0) {
      var v = x * this[i++] + w[j] + c;
      c = Math.floor(v / 0x4000000);
      w[j++] = v & 0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i, x, w, j, c, n) {
    var xl = x & 0x7fff, xh = x >> 15;
    while (--n >= 0) {
      var l = this[i] & 0x7fff;
      var h = this[i++] >> 15;
      var m = xh * l + h * xl;
      l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
      c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
      w[j++] = l & 0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i, x, w, j, c, n) {
    var xl = x & 0x3fff, xh = x >> 14;
    while (--n >= 0) {
      var l = this[i] & 0x3fff;
      var h = this[i++] >> 14;
      var m = xh * l + h * xl;
      l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
      c = (l >> 28) + (m >> 14) + xh * h;
      w[j++] = l & 0xfffffff;
    }
    return c;
  }

  // Hardcode this for modern browsers
  BigInteger.prototype.am = am3;
  dbits = 28;

  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1 << dbits) - 1);
  BigInteger.prototype.DV = (1 << dbits);

  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2, BI_FP);
  BigInteger.prototype.F1 = BI_FP - dbits;
  BigInteger.prototype.F2 = 2 * dbits - BI_FP;

  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr, vv;
  rr = "0".charCodeAt(0);
  for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c == null) ? -1 : c;
  }



  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }


  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if ((t = x >>> 16) != 0) { x = t; r += 16; }
    if ((t = x >> 8) != 0) { x = t; r += 8; }
    if ((t = x >> 4) != 0) { x = t; r += 4; }
    if ((t = x >> 2) != 0) { x = t; r += 2; }
    if ((t = x >> 1) != 0) { x = t; r += 1; }
    return r;
  }







  // (protected) copy this to r
  BigInteger.prototype.copyTo = function (r) {
    for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  };


  // (protected) set from integer value x, -DV <= x < DV
  BigInteger.prototype.fromInt = function (x) {
    this.t = 1;
    this.s = (x < 0) ? -1 : 0;
    if (x > 0) this[0] = x;
    else if (x < -1) this[0] = x + DV;
    else this.t = 0;
  };

  // (protected) set from string and radix
  BigInteger.prototype.fromString = function (s, b) {
    var k;
    if (b == 16) k = 4;
    else if (b == 8) k = 3;
    else if (b == 256) k = 8; // byte array
    else if (b == 2) k = 1;
    else if (b == 32) k = 5;
    else if (b == 4) k = 2;
    else { this.fromRadix(s, b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while (--i >= 0) {
      var x = (k == 8) ? s[i] & 0xff : intAt(s, i);
      if (x < 0) {
        if (s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if (sh == 0)
        this[this.t++] = x;
      else if (sh + k > this.DB) {
        this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
        this[this.t++] = (x >> (this.DB - sh));
      }
      else
        this[this.t - 1] |= x << sh;
      sh += k;
      if (sh >= this.DB) sh -= this.DB;
    }
    if (k == 8 && (s[0] & 0x80) != 0) {
      this.s = -1;
      if (sh > 0) this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
    }
    this.clamp();
    if (mi) BigInteger.ZERO.subTo(this, this);
  };


  // (protected) clamp off excess high words
  BigInteger.prototype.clamp = function () {
    var c = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == c) --this.t;
  };

  // (protected) r = this << n*DB
  BigInteger.prototype.dlShiftTo = function (n, r) {
    var i;
    for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
    for (i = n - 1; i >= 0; --i) r[i] = 0;
    r.t = this.t + n;
    r.s = this.s;
  };

  // (protected) r = this >> n*DB
  BigInteger.prototype.drShiftTo = function (n, r) {
    for (var i = n; i < this.t; ++i) r[i - n] = this[i];
    r.t = Math.max(this.t - n, 0);
    r.s = this.s;
  };


  // (protected) r = this << n
  BigInteger.prototype.lShiftTo = function (n, r) {
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << cbs) - 1;
    var ds = Math.floor(n / this.DB), c = (this.s << bs) & this.DM, i;
    for (i = this.t - 1; i >= 0; --i) {
      r[i + ds + 1] = (this[i] >> cbs) | c;
      c = (this[i] & bm) << bs;
    }
    for (i = ds - 1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t + ds + 1;
    r.s = this.s;
    r.clamp();
  };


  // (protected) r = this >> n
  BigInteger.prototype.rShiftTo = function (n, r) {
    r.s = this.s;
    var ds = Math.floor(n / this.DB);
    if (ds >= this.t) { r.t = 0; return; }
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << bs) - 1;
    r[0] = this[ds] >> bs;
    for (var i = ds + 1; i < this.t; ++i) {
      r[i - ds - 1] |= (this[i] & bm) << cbs;
      r[i - ds] = this[i] >> bs;
    }
    if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
    r.t = this.t - ds;
    r.clamp();
  };


  // (protected) r = this - a
  BigInteger.prototype.subTo = function (a, r) {
    var i = 0, c = 0, m = Math.min(a.t, this.t);
    while (i < m) {
      c += this[i] - a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    if (a.t < this.t) {
      c -= a.s;
      while (i < this.t) {
        c += this[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while (i < a.t) {
        c -= a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c < 0) ? -1 : 0;
    if (c < -1) r[i++] = this.DV + c;
    else if (c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  };


  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  BigInteger.prototype.multiplyTo = function (a, r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i + y.t;
    while (--i >= 0) r[i] = 0;
    for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
    r.s = 0;
    r.clamp();
    if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
  };


  // (protected) r = this^2, r != this (HAC 14.16)
  BigInteger.prototype.squareTo = function (r) {
    var x = this.abs();
    var i = r.t = 2 * x.t;
    while (--i >= 0) r[i] = 0;
    for (i = 0; i < x.t - 1; ++i) {
      var c = x.am(i, x[i], r, 2 * i, 0, 1);
      if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
        r[i + x.t] -= x.DV;
        r[i + x.t + 1] = 1;
      }
    }
    if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
    r.s = 0;
    r.clamp();
  };



  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  BigInteger.prototype.divRemTo = function (m, q, r) {
    var pm = m.abs();
    if (pm.t <= 0) return;
    var pt = this.abs();
    if (pt.t < pm.t) {
      if (q != null) q.fromInt(0);
      if (r != null) this.copyTo(r);
      return;
    }
    if (r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus
    if (nsh > 0) { pm.lShiftTo(nsh, y); pt.lShiftTo(nsh, r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys - 1];
    if (y0 == 0) return;
    var yt = y0 * (1 << this.F1) + ((ys > 1) ? y[ys - 2] >> this.F2 : 0);
    var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2;
    var i = r.t, j = i - ys, t = (q == null) ? nbi() : q;
    y.dlShiftTo(j, t);
    if (r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t, r);
    }
    BigInteger.ONE.dlShiftTo(ys, t);
    t.subTo(y, y); // "negative" y so we can replace sub with am later
    while (y.t < ys) y[y.t++] = 0;
    while (--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
      if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {  // Try it out
        y.dlShiftTo(j, t);
        r.subTo(t, r);
        while (r[i] < --qd) r.subTo(t, r);
      }
    }
    if (q != null) {
      r.drShiftTo(ys, q);
      if (ts != ms) BigInteger.ZERO.subTo(q, q);
    }
    r.t = ys;
    r.clamp();
    if (nsh > 0) r.rShiftTo(nsh, r); // Denormalize remainder
    if (ts < 0) BigInteger.ZERO.subTo(r, r);
  };


  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  BigInteger.prototype.invDigit = function () {
    if (this.t < 1) return 0;
    var x = this[0];
    if ((x & 1) == 0) return 0;
    var y = x & 3;  // y == 1/x mod 2^2
    y = (y * (2 - (x & 0xf) * y)) & 0xf; // y == 1/x mod 2^4
    y = (y * (2 - (x & 0xff) * y)) & 0xff; // y == 1/x mod 2^8
    y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff; // y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y * (2 - x * y % this.DV)) % this.DV;  // y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y > 0) ? this.DV - y : -y;
  };


  // (protected) true iff this is even
  BigInteger.prototype.isEven = function () { return ((this.t > 0) ? (this[0] & 1) : this.s) == 0; };


  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  BigInteger.prototype.exp = function (e, z) {
    if (e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e) - 1;
    g.copyTo(r);
    while (--i >= 0) {
      z.sqrTo(r, r2);
      if ((e & (1 << i)) > 0) z.mulTo(r2, g, r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  };


  // (public) return string representation in given radix
  BigInteger.prototype.toString = function (b) {
    if (this.s < 0) return "-" + this.negate().toString(b);
    var k;
    if (b == 16) k = 4;
    else if (b == 8) k = 3;
    else if (b == 2) k = 1;
    else if (b == 32) k = 5;
    else if (b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1 << k) - 1, d, m = false, r = "", i = this.t;
    var p = this.DB - (i * this.DB) % k;
    if (i-- > 0) {
      if (p < this.DB && (d = this[i] >> p) > 0) { m = true; r = int2char(d); }
      while (i >= 0) {
        if (p < k) {
          d = (this[i] & ((1 << p) - 1)) << (k - p);
          d |= this[--i] >> (p += this.DB - k);
        }
        else {
          d = (this[i] >> (p -= k)) & km;
          if (p <= 0) { p += this.DB; --i; }
        }
        if (d > 0) m = true;
        if (m) r += int2char(d);
      }
    }
    return m ? r : "0";
  };


  // (public) -this
  BigInteger.prototype.negate = function () { var r = nbi(); BigInteger.ZERO.subTo(this, r); return r; };

  // (public) |this|
  BigInteger.prototype.abs = function () { return (this.s < 0) ? this.negate() : this; };

  // (public) return + if this > a, - if this < a, 0 if equal
  BigInteger.prototype.compareTo = function (a) {
    var r = this.s - a.s;
    if (r != 0) return r;
    var i = this.t;
    r = i - a.t;
    if (r != 0) return (this.s < 0) ? -r : r;
    while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
    return 0;
  }

  // (public) return the number of bits in "this"
  BigInteger.prototype.bitLength = function () {
    if (this.t <= 0) return 0;
    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM));
  };

  // (public) this mod a
  BigInteger.prototype.mod = function (a) {
    var r = nbi();
    this.abs().divRemTo(a, null, r);
    if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
    return r;
  }

  // (public) this^e % m, 0 <= e < 2^32
  BigInteger.prototype.modPowInt = function (e, m) {
    var z;
    if (e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e, z);
  };

  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);







  // Copyright (c) 2005-2009  Tom Wu
  // All Rights Reserved.
  // See "LICENSE" for details.
  // Extended JavaScript BN functions, required for RSA private ops.
  // Version 1.1: new BigInteger("0", 10) returns "proper" zero
  // Version 1.2: square() API, isProbablePrime fix


  // return index of lowest 1-bit in x, x < 2^31
  function lbit(x) {
    if (x == 0) return -1;
    var r = 0;
    if ((x & 0xffff) == 0) { x >>= 16; r += 16; }
    if ((x & 0xff) == 0) { x >>= 8; r += 8; }
    if ((x & 0xf) == 0) { x >>= 4; r += 4; }
    if ((x & 3) == 0) { x >>= 2; r += 2; }
    if ((x & 1) == 0) ++r;
    return r;
  }

  // return number of 1 bits in x
  function cbit(x) {
    var r = 0;
    while (x != 0) { x &= x - 1; ++r; }
    return r;
  }

  var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
  var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];



  // (protected) return x s.t. r^x < DV
  BigInteger.prototype.chunkSize = function (r) { return Math.floor(Math.LN2 * this.DB / Math.log(r)); };

  // (protected) convert to radix string
  BigInteger.prototype.toRadix = function (b) {
    if (b == null) b = 10;
    if (this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b, cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d, y, z);
    while (y.signum() > 0) {
      r = (a + z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d, y, z);
    }
    return z.intValue().toString(b) + r;
  };

  // (protected) convert from radix string
  BigInteger.prototype.fromRadix = function (s, b) {
    this.fromInt(0);
    if (b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b, cs), mi = false, j = 0, w = 0;
    for (var i = 0; i < s.length; ++i) {
      var x = intAt(s, i);
      if (x < 0) {
        if (s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b * w + x;
      if (++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w, 0);
        j = 0;
        w = 0;
      }
    }
    if (j > 0) {
      this.dMultiply(Math.pow(b, j));
      this.dAddOffset(w, 0);
    }
    if (mi) BigInteger.ZERO.subTo(this, this);
  };

  // (protected) alternate constructor
  BigInteger.prototype.fromNumber = function (a, b, c) {
    if ("number" == typeof b) {
      // new BigInteger(int,int,RNG)
      if (a < 2) this.fromInt(1);
      else {
        this.fromNumber(a, c);
        if (!this.testBit(a - 1)) // force MSB set
          this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
        if (this.isEven()) this.dAddOffset(1, 0); // force odd
        while (!this.isProbablePrime(b)) {
          this.dAddOffset(2, 0);
          if (this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
        }
      }
    }
    else {
      // new BigInteger(int,RNG)
      var x = new Array(), t = a & 7;
      x.length = (a >> 3) + 1;
      b.nextBytes(x);
      if (t > 0) x[0] &= ((1 << t) - 1); else x[0] = 0;
      this.fromString(x, 256);
    }
  };

  // (protected) r = this op a (bitwise)
  BigInteger.prototype.bitwiseTo = function (a, op, r) {
    var i, f, m = Math.min(a.t, this.t);
    for (i = 0; i < m; ++i) r[i] = op(this[i], a[i]);
    if (a.t < this.t) {
      f = a.s & this.DM;
      for (i = m; i < this.t; ++i) r[i] = op(this[i], f);
      r.t = this.t;
    }
    else {
      f = this.s & this.DM;
      for (i = m; i < a.t; ++i) r[i] = op(f, a[i]);
      r.t = a.t;
    }
    r.s = op(this.s, a.s);
    r.clamp();
  };

  // (protected) this op (1<<n)
  BigInteger.prototype.changeBit = function (n, op) {
    var r = BigInteger.ONE.shiftLeft(n);
    this.bitwiseTo(r, op, r);
    return r;
  };

  // (protected) r = this + a
  BigInteger.prototype.addTo = function (a, r) {
    var i = 0, c = 0, m = Math.min(a.t, this.t);
    while (i < m) {
      c += this[i] + a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }
    if (a.t < this.t) {
      c += a.s;
      while (i < this.t) {
        c += this[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while (i < a.t) {
        c += a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c < 0) ? -1 : 0;
    if (c > 0) r[i++] = c;
    else if (c < -1) r[i++] = this.DV + c;
    r.t = i;
    r.clamp();
  };

  // (protected) this *= n, this >= 0, 1 < n < DV
  BigInteger.prototype.dMultiply = function (n) {
    this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp();
  };

  // (protected) this += n << w words, this >= 0
  BigInteger.prototype.dAddOffset = function (n, w) {
    if (n == 0) return;
    while (this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while (this[w] >= this.DV) {
      this[w] -= this.DV;
      if (++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  };

  // (protected) r = lower n words of "this * a", a.t <= n
  // "this" should be the larger one if appropriate.
  BigInteger.prototype.multiplyLowerTo = function (a, n, r) {
    var i = Math.min(this.t + a.t, n);
    r.s = 0; // assumes a,this >= 0
    r.t = i;
    while (i > 0) r[--i] = 0;
    var j;
    for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
    for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a[i], r, i, 0, n - i);
    r.clamp();
  };


  // (protected) r = "this * a" without lower n words, n > 0
  // "this" should be the larger one if appropriate.
  BigInteger.prototype.multiplyUpperTo = function (a, n, r) {
    --n;
    var i = r.t = this.t + a.t - n;
    r.s = 0; // assumes a,this >= 0
    while (--i >= 0) r[i] = 0;
    for (i = Math.max(n - this.t, 0); i < a.t; ++i)
      r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
    r.clamp();
    r.drShiftTo(1, r);
  };

  // (protected) this % n, n < 2^26
  BigInteger.prototype.modInt = function (n) {
    if (n <= 0) return 0;
    var d = this.DV % n, r = (this.s < 0) ? n - 1 : 0;
    if (this.t > 0)
      if (d == 0) r = this[0] % n;
      else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
    return r;
  };


  // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
  BigInteger.prototype.millerRabin = function (t) {
    var n1 = this.subtract(BigInteger.ONE);
    var k = n1.getLowestSetBit();
    if (k <= 0) return false;
    var r = n1.shiftRight(k);
    t = (t + 1) >> 1;
    if (t > lowprimes.length) t = lowprimes.length;
    var a = nbi();
    for (var i = 0; i < t; ++i) {
      //Pick bases at random, instead of starting at 2
      a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
      var y = a.modPow(r, this);
      if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
        var j = 1;
        while (j++ < k && y.compareTo(n1) != 0) {
          y = y.modPowInt(2, this);
          if (y.compareTo(BigInteger.ONE) == 0) return false;
        }
        if (y.compareTo(n1) != 0) return false;
      }
    }
    return true;
  };



  // (public)
  BigInteger.prototype.clone = function () { var r = nbi(); this.copyTo(r); return r; };

  // (public) return value as integer
  BigInteger.prototype.intValue = function () {
    if (this.s < 0) {
      if (this.t == 1) return this[0] - this.DV;
      else if (this.t == 0) return -1;
    }
    else if (this.t == 1) return this[0];
    else if (this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
  };


  // (public) return value as byte
  BigInteger.prototype.byteValue = function () { return (this.t == 0) ? this.s : (this[0] << 24) >> 24; };

  // (public) return value as short (assumes DB>=16)
  BigInteger.prototype.shortValue = function () { return (this.t == 0) ? this.s : (this[0] << 16) >> 16; };

  // (public) 0 if this == 0, 1 if this > 0
  BigInteger.prototype.signum = function () {
    if (this.s < 0) return -1;
    else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  };


  // (public) convert to bigendian byte array
  BigInteger.prototype.toByteArray = function () {
    var i = this.t, r = new Array();
    r[0] = this.s;
    var p = this.DB - (i * this.DB) % 8, d, k = 0;
    if (i-- > 0) {
      if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p)
        r[k++] = d | (this.s << (this.DB - p));
      while (i >= 0) {
        if (p < 8) {
          d = (this[i] & ((1 << p) - 1)) << (8 - p);
          d |= this[--i] >> (p += this.DB - 8);
        }
        else {
          d = (this[i] >> (p -= 8)) & 0xff;
          if (p <= 0) { p += this.DB; --i; }
        }
        if ((d & 0x80) != 0) d |= -256;
        if (k == 0 && (this.s & 0x80) != (d & 0x80)) ++k;
        if (k > 0 || d != this.s) r[k++] = d;
      }
    }
    return r;
  };

  BigInteger.prototype.equals = function (a) { return (this.compareTo(a) == 0); };
  BigInteger.prototype.min = function (a) { return (this.compareTo(a) < 0) ? this : a; };
  BigInteger.prototype.max = function (a) { return (this.compareTo(a) > 0) ? this : a; };

  // (public) this & a
  function op_and(x, y) { return x & y; }
  BigInteger.prototype.and = function (a) { var r = nbi(); this.bitwiseTo(a, op_and, r); return r; };

  // (public) this | a
  function op_or(x, y) { return x | y; }
  BigInteger.prototype.or = function (a) { var r = nbi(); this.bitwiseTo(a, op_or, r); return r; };

  // (public) this ^ a
  function op_xor(x, y) { return x ^ y; }
  BigInteger.prototype.xor = function (a) { var r = nbi(); this.bitwiseTo(a, op_xor, r); return r; };

  // (public) this & ~a
  function op_andnot(x, y) { return x & ~y; }
  BigInteger.prototype.andNot = function (a) { var r = nbi(); this.bitwiseTo(a, op_andnot, r); return r; };

  // (public) ~this
  BigInteger.prototype.not = function () {
    var r = nbi();
    for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i];
    r.t = this.t;
    r.s = ~this.s;
    return r;
  };

  // (public) this << n
  BigInteger.prototype.shiftLeft = function (n) {
    var r = nbi();
    if (n < 0) this.rShiftTo(-n, r); else this.lShiftTo(n, r);
    return r;
  };

  // (public) this >> n
  BigInteger.prototype.shiftRight = function (n) {
    var r = nbi();
    if (n < 0) this.lShiftTo(-n, r); else this.rShiftTo(n, r);
    return r;
  };

  // (public) returns index of lowest 1-bit (or -1 if none)
  BigInteger.prototype.getLowestSetBit = function () {
    for (var i = 0; i < this.t; ++i)
      if (this[i] != 0) return i * this.DB + lbit(this[i]);
    if (this.s < 0) return this.t * this.DB;
    return -1;
  };

  // (public) return number of set bits
  BigInteger.prototype.bitCount = function () {
    var r = 0, x = this.s & this.DM;
    for (var i = 0; i < this.t; ++i) r += cbit(this[i] ^ x);
    return r;
  };

  // (public) true iff nth bit is set
  BigInteger.prototype.testBit = function (n) {
    var j = Math.floor(n / this.DB);
    if (j >= this.t) return (this.s != 0);
    return ((this[j] & (1 << (n % this.DB))) != 0);
  };

  // (public) this | (1<<n)
  BigInteger.prototype.setBit = function (n) { return this.changeBit(n, op_or); };
  // (public) this & ~(1<<n)
  BigInteger.prototype.clearBit = function (n) { return this.changeBit(n, op_andnot); };
  // (public) this ^ (1<<n)
  BigInteger.prototype.flipBit = function (n) { return this.changeBit(n, op_xor); };
  // (public) this + a
  BigInteger.prototype.add = function (a) { var r = nbi(); this.addTo(a, r); return r; };
  // (public) this - a
  BigInteger.prototype.subtract = function (a) { var r = nbi(); this.subTo(a, r); return r; };
  // (public) this * a
  BigInteger.prototype.multiply = function (a) { var r = nbi(); this.multiplyTo(a, r); return r; };
  // (public) this / a
  BigInteger.prototype.divide = function (a) { var r = nbi(); this.divRemTo(a, r, null); return r; };
  // (public) this % a
  BigInteger.prototype.remainder = function (a) { var r = nbi(); this.divRemTo(a, null, r); return r; };
  // (public) [this/a,this%a]
  BigInteger.prototype.divideAndRemainder = function (a) {
    var q = nbi(), r = nbi();
    this.divRemTo(a, q, r);
    return new Array(q, r);
  };

  // (public) this^e % m (HAC 14.85)
  BigInteger.prototype.modPow = function (e, m) {
    var i = e.bitLength(), k, r = nbv(1), z;
    if (i <= 0) return r;
    else if (i < 18) k = 1;
    else if (i < 48) k = 3;
    else if (i < 144) k = 4;
    else if (i < 768) k = 5;
    else k = 6;
    if (i < 8)
      z = new Classic(m);
    else if (m.isEven())
      z = new Barrett(m);
    else
      z = new Montgomery(m);

    // precomputation
    var g = new Array(), n = 3, k1 = k - 1, km = (1 << k) - 1;
    g[1] = z.convert(this);
    if (k > 1) {
      var g2 = nbi();
      z.sqrTo(g[1], g2);
      while (n <= km) {
        g[n] = nbi();
        z.mulTo(g2, g[n - 2], g[n]);
        n += 2;
      }
    }

    var j = e.t - 1, w, is1 = true, r2 = nbi(), t;
    i = nbits(e[j]) - 1;
    while (j >= 0) {
      if (i >= k1) w = (e[j] >> (i - k1)) & km;
      else {
        w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i);
        if (j > 0) w |= e[j - 1] >> (this.DB + i - k1);
      }

      n = k;
      while ((w & 1) == 0) { w >>= 1; --n; }
      if ((i -= n) < 0) { i += this.DB; --j; }
      if (is1) {  // ret == 1, don't bother squaring or multiplying it
        g[w].copyTo(r);
        is1 = false;
      }
      else {
        while (n > 1) { z.sqrTo(r, r2); z.sqrTo(r2, r); n -= 2; }
        if (n > 0) z.sqrTo(r, r2); else { t = r; r = r2; r2 = t; }
        z.mulTo(r2, g[w], r);
      }

      while (j >= 0 && (e[j] & (1 << i)) == 0) {
        z.sqrTo(r, r2); t = r; r = r2; r2 = t;
        if (--i < 0) { i = this.DB - 1; --j; }
      }
    }
    return z.revert(r);
  };

  // (public) 1/this % m (HAC 14.61)
  BigInteger.prototype.modInverse = function (m) {
    var ac = m.isEven();
    if ((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
    var u = m.clone(), v = this.clone();
    var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
    while (u.signum() != 0) {
      while (u.isEven()) {
        u.rShiftTo(1, u);
        if (ac) {
          if (!a.isEven() || !b.isEven()) { a.addTo(this, a); b.subTo(m, b); }
          a.rShiftTo(1, a);
        }
        else if (!b.isEven()) b.subTo(m, b);
        b.rShiftTo(1, b);
      }
      while (v.isEven()) {
        v.rShiftTo(1, v);
        if (ac) {
          if (!c.isEven() || !d.isEven()) { c.addTo(this, c); d.subTo(m, d); }
          c.rShiftTo(1, c);
        }
        else if (!d.isEven()) d.subTo(m, d);
        d.rShiftTo(1, d);
      }
      if (u.compareTo(v) >= 0) {
        u.subTo(v, u);
        if (ac) a.subTo(c, a);
        b.subTo(d, b);
      }
      else {
        v.subTo(u, v);
        if (ac) c.subTo(a, c);
        d.subTo(b, d);
      }
    }
    if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
    if (d.compareTo(m) >= 0) return d.subtract(m);
    if (d.signum() < 0) d.addTo(m, d); else return d;
    if (d.signum() < 0) return d.add(m); else return d;
  };


  // (public) this^e
  BigInteger.prototype.pow = function (e) { return this.exp(e, new NullExp()); };

  // (public) gcd(this,a) (HAC 14.54)
  BigInteger.prototype.gcd = function (a) {
    var x = (this.s < 0) ? this.negate() : this.clone();
    var y = (a.s < 0) ? a.negate() : a.clone();
    if (x.compareTo(y) < 0) { var t = x; x = y; y = t; }
    var i = x.getLowestSetBit(), g = y.getLowestSetBit();
    if (g < 0) return x;
    if (i < g) g = i;
    if (g > 0) {
      x.rShiftTo(g, x);
      y.rShiftTo(g, y);
    }
    while (x.signum() > 0) {
      if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
      if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
      if (x.compareTo(y) >= 0) {
        x.subTo(y, x);
        x.rShiftTo(1, x);
      }
      else {
        y.subTo(x, y);
        y.rShiftTo(1, y);
      }
    }
    if (g > 0) y.lShiftTo(g, y);
    return y;
  };

  // (public) test primality with certainty >= 1-.5^t
  BigInteger.prototype.isProbablePrime = function (t) {
    var i, x = this.abs();
    if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
      for (i = 0; i < lowprimes.length; ++i)
        if (x[0] == lowprimes[i]) return true;
      return false;
    }
    if (x.isEven()) return false;
    i = 1;
    while (i < lowprimes.length) {
      var m = lowprimes[i], j = i + 1;
      while (j < lowprimes.length && m < lplim) m *= lowprimes[j++];
      m = x.modInt(m);
      while (i < j) if (m % lowprimes[i++] == 0) return false;
    }
    return x.millerRabin(t);
  };


  // JSBN-specific extension

  // (public) this^2
  BigInteger.prototype.square = function () { var r = nbi(); this.squareTo(r); return r; };


  // NOTE: BigInteger interfaces not implemented in jsbn:
  // BigInteger(int signum, byte[] magnitude)
  // double doubleValue()
  // float floatValue()
  // int hashCode()
  // long longValue()
  // static BigInteger valueOf(long val)



  // Copyright Stephan Thomas (start) --- //
  // https://raw.github.com/bitcoinjs/bitcoinjs-lib/07f9d55ccb6abd962efb6befdd37671f85ea4ff9/src/util.js
  // BigInteger monkey patching
  BigInteger.valueOf = nbv;

  /**
  * Returns a byte array representation of the big integer.
  *
  * This returns the absolute of the contained value in big endian
  * form. A value of zero results in an empty array.
  */
  BigInteger.prototype.toByteArrayUnsigned = function () {
    var ba = this.abs().toByteArray();
    if (ba.length) {
      if (ba[0] == 0) {
        ba = ba.slice(1);
      }
      return ba.map(function (v) {
        return (v < 0) ? v + 256 : v;
      });
    } else {
      // Empty array, nothing to do
      return ba;
    }
  };

  /**
  * Turns a byte array into a big integer.
  *
  * This function will interpret a byte array as a big integer in big
  * endian notation and ignore leading zeros.
  */
  BigInteger.fromByteArrayUnsigned = function (ba) {
    if (!ba.length) {
      return ba.valueOf(0);
    } else if (ba[0] & 0x80) {
      // Prepend a zero so the BigInteger class doesn't mistake this
      // for a negative integer.
      return new BigInteger([0].concat(ba));
    } else {
      return new BigInteger(ba);
    }
  };

  /**
  * Converts big integer to signed byte representation.
  *
  * The format for this value uses a the most significant bit as a sign
  * bit. If the most significant bit is already occupied by the
  * absolute value, an extra byte is prepended and the sign bit is set
  * there.
  *
  * Examples:
  *
  *      0 =>     0x00
  *      1 =>     0x01
  *     -1 =>     0x81
  *    127 =>     0x7f
  *   -127 =>     0xff
  *    128 =>   0x0080
  *   -128 =>   0x8080
  *    255 =>   0x00ff
  *   -255 =>   0x80ff
  *  16300 =>   0x3fac
  * -16300 =>   0xbfac
  *  62300 => 0x00f35c
  * -62300 => 0x80f35c
  */
  BigInteger.prototype.toByteArraySigned = function () {
    var val = this.abs().toByteArrayUnsigned();
    var neg = this.compareTo(BigInteger.ZERO) < 0;

    if (neg) {
      if (val[0] & 0x80) {
        val.unshift(0x80);
      } else {
        val[0] |= 0x80;
      }
    } else {
      if (val[0] & 0x80) {
        val.unshift(0x00);
      }
    }

    return val;
  };

  /**
  * Parse a signed big integer byte representation.
  *
  * For details on the format please see BigInteger.toByteArraySigned.
  */
  BigInteger.fromByteArraySigned = function (ba) {
    // Check for negative value
    if (ba[0] & 0x80) {
      // Remove sign bit
      ba[0] &= 0x7f;

      return BigInteger.fromByteArrayUnsigned(ba).negate();
    } else {
      return BigInteger.fromByteArrayUnsigned(ba);
    }
  };
  // Copyright Stephan Thomas (end) --- //




  // ****** REDUCTION ******* //

  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  Classic.prototype.convert = function (x) {
    if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  };
  Classic.prototype.revert = function (x) { return x; };
  Classic.prototype.reduce = function (x) { x.divRemTo(this.m, null, x); };
  Classic.prototype.mulTo = function (x, y, r) { x.multiplyTo(y, r); this.reduce(r); };
  Classic.prototype.sqrTo = function (x, r) { x.squareTo(r); this.reduce(r); };





  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp & 0x7fff;
    this.mph = this.mp >> 15;
    this.um = (1 << (m.DB - 15)) - 1;
    this.mt2 = 2 * m.t;
  }
  // xR mod m
  Montgomery.prototype.convert = function (x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t, r);
    r.divRemTo(this.m, null, r);
    if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
    return r;
  }
  // x/R mod m
  Montgomery.prototype.revert = function (x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  };
  // x = x/R mod m (HAC 14.32)
  Montgomery.prototype.reduce = function (x) {
    while (x.t <= this.mt2) // pad x so am has enough room later
      x[x.t++] = 0;
    for (var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i] & 0x7fff;
      var u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i + this.m.t;
      x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
      // propagate carry
      while (x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t, x);
    if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
  };
  // r = "xy/R mod m"; x,y != r
  Montgomery.prototype.mulTo = function (x, y, r) { x.multiplyTo(y, r); this.reduce(r); };
  // r = "x^2/R mod m"; x != r
  Montgomery.prototype.sqrTo = function (x, r) { x.squareTo(r); this.reduce(r); };





  // A "null" reducer
  function NullExp() { }
  NullExp.prototype.convert = function (x) { return x; };
  NullExp.prototype.revert = function (x) { return x; };
  NullExp.prototype.mulTo = function (x, y, r) { x.multiplyTo(y, r); };
  NullExp.prototype.sqrTo = function (x, r) { x.squareTo(r); };





  // Barrett modular reduction
  function Barrett(m) {
    // setup Barrett
    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
    this.mu = this.r2.divide(m);
    this.m = m;
  }
  Barrett.prototype.convert = function (x) {
    if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);
    else if (x.compareTo(this.m) < 0) return x;
    else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
  };
  Barrett.prototype.revert = function (x) { return x; };
  // x = x mod m (HAC 14.42)
  Barrett.prototype.reduce = function (x) {
    x.drShiftTo(this.m.t - 1, this.r2);
    if (x.t > this.m.t + 1) { x.t = this.m.t + 1; x.clamp(); }
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    while (x.compareTo(this.r2) < 0) x.dAddOffset(1, this.m.t + 1);
    x.subTo(this.r2, x);
    while (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
  };
  // r = x*y mod m; x,y != r
  Barrett.prototype.mulTo = function (x, y, r) { x.multiplyTo(y, r); this.reduce(r); };
  // r = x^2 mod m; x != r
  Barrett.prototype.sqrTo = function (x, r) { x.squareTo(r); this.reduce(r); };

})(exports);

var BigInteger = exports.BigInteger;
/*!
* Crypto-JS v2.5.4  Crypto.js
* http://code.google.com/p/crypto-js/
* Copyright (c) 2009-2013, Jeff Mott. All rights reserved.
* http://code.google.com/p/crypto-js/wiki/License
*/

(function (Crypto) {

  var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Crypto utilities
  var util = Crypto.util = {

    // Bit-wise rotate left
    rotl: function (n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotate right
    rotr: function (n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function (n) {

      // If number given, swap endian
      if (n.constructor == Number) {
        return util.rotl(n, 8) & 0x00FF00FF |
        util.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = util.endian(n[i]);
      return n;

    },

    // Generate an array of any length of random bytes
    randomBytes: function (n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function (bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= (bytes[i] & 0xFF) << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function (words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function (bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join("");
    },

    // Convert a hex string to a byte array
    hexToBytes: function (hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function (bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++) {
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else base64.push("=");
        }
      }

      return base64.join("");
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function (base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1)) & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2)) |
            (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }

      return bytes;
    }

  };

  // Crypto character encodings
  var charenc = Crypto.charenc = {};

  // UTF-8 encoding
  var UTF8 = charenc.UTF8 = {

    // Convert a string to a byte array
    stringToBytes: function (str) {
      return Binary.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function (bytes) {
      return decodeURIComponent(escape(Binary.bytesToString(bytes)));
    }

  };

  // Binary encoding
  var Binary = charenc.Binary = {

    // Convert a string to a byte array
    stringToBytes: function (str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function (bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join("");
    }

  };

})(Crypto);
/*!
* Crypto-JS v2.0.0  RIPEMD-160
* http://code.google.com/p/crypto-js/
* Copyright (c) 2009, Jeff Mott. All rights reserved.
* http://code.google.com/p/crypto-js/wiki/License
*
* A JavaScript implementation of the RIPEMD-160 Algorithm
* Version 2.2 Copyright Jeremy Lin, Paul Johnston 2000 - 2009.
* Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
* Distributed under the BSD License
* See http://pajhome.org.uk/crypt/md5 for details.
* Also http://www.ocf.berkeley.edu/~jjlin/jsotp/
* Ported to Crypto-JS by Stefan Thomas.
*/

(function (Crypto) {
  // Shortcuts
  var C = Crypto,
  util = C.util,
  charenc = C.charenc,
  UTF8 = charenc.UTF8,
  Binary = charenc.Binary;

  // Convert a byte array to little-endian 32-bit words
  util.bytesToLWords = function (bytes) {

    var output = Array(bytes.length >> 2);
    for (var i = 0; i < output.length; i++)
      output[i] = 0;
    for (var i = 0; i < bytes.length * 8; i += 8)
      output[i >> 5] |= (bytes[i / 8] & 0xFF) << (i % 32);
    return output;
  };

  // Convert little-endian 32-bit words to a byte array
  util.lWordsToBytes = function (words) {
    var output = [];
    for (var i = 0; i < words.length * 32; i += 8)
      output.push((words[i >> 5] >>> (i % 32)) & 0xff);
    return output;
  };

  // Public API
  var RIPEMD160 = C.RIPEMD160 = function (message, options) {
    var digestbytes = util.lWordsToBytes(RIPEMD160._rmd160(message));
    return options && options.asBytes ? digestbytes :
      options && options.asString ? Binary.bytesToString(digestbytes) :
      util.bytesToHex(digestbytes);
  };

  // The core
  RIPEMD160._rmd160 = function (message) {
    // Convert to byte array
    if (message.constructor == String) message = UTF8.stringToBytes(message);

    var x = util.bytesToLWords(message),
      len = message.length * 8;

    /* append padding */
    x[len >> 5] |= 0x80 << (len % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;

    var h0 = 0x67452301;
    var h1 = 0xefcdab89;
    var h2 = 0x98badcfe;
    var h3 = 0x10325476;
    var h4 = 0xc3d2e1f0;

    for (var i = 0; i < x.length; i += 16) {
      var T;
      var A1 = h0, B1 = h1, C1 = h2, D1 = h3, E1 = h4;
      var A2 = h0, B2 = h1, C2 = h2, D2 = h3, E2 = h4;
      for (var j = 0; j <= 79; ++j) {
        T = safe_add(A1, rmd160_f(j, B1, C1, D1));
        T = safe_add(T, x[i + rmd160_r1[j]]);
        T = safe_add(T, rmd160_K1(j));
        T = safe_add(bit_rol(T, rmd160_s1[j]), E1);
        A1 = E1; E1 = D1; D1 = bit_rol(C1, 10); C1 = B1; B1 = T;
        T = safe_add(A2, rmd160_f(79 - j, B2, C2, D2));
        T = safe_add(T, x[i + rmd160_r2[j]]);
        T = safe_add(T, rmd160_K2(j));
        T = safe_add(bit_rol(T, rmd160_s2[j]), E2);
        A2 = E2; E2 = D2; D2 = bit_rol(C2, 10); C2 = B2; B2 = T;
      }
      T = safe_add(h1, safe_add(C1, D2));
      h1 = safe_add(h2, safe_add(D1, E2));
      h2 = safe_add(h3, safe_add(E1, A2));
      h3 = safe_add(h4, safe_add(A1, B2));
      h4 = safe_add(h0, safe_add(B1, C2));
      h0 = T;
    }
    return [h0, h1, h2, h3, h4];
  }

  function rmd160_f(j, x, y, z) {
    return (0 <= j && j <= 15) ? (x ^ y ^ z) :
      (16 <= j && j <= 31) ? (x & y) | (~x & z) :
      (32 <= j && j <= 47) ? (x | ~y) ^ z :
      (48 <= j && j <= 63) ? (x & z) | (y & ~z) :
      (64 <= j && j <= 79) ? x ^ (y | ~z) :
      "rmd160_f: j out of range";
  }
  function rmd160_K1(j) {
    return (0 <= j && j <= 15) ? 0x00000000 :
      (16 <= j && j <= 31) ? 0x5a827999 :
      (32 <= j && j <= 47) ? 0x6ed9eba1 :
      (48 <= j && j <= 63) ? 0x8f1bbcdc :
      (64 <= j && j <= 79) ? 0xa953fd4e :
      "rmd160_K1: j out of range";
  }
  function rmd160_K2(j) {
    return (0 <= j && j <= 15) ? 0x50a28be6 :
      (16 <= j && j <= 31) ? 0x5c4dd124 :
      (32 <= j && j <= 47) ? 0x6d703ef3 :
      (48 <= j && j <= 63) ? 0x7a6d76e9 :
      (64 <= j && j <= 79) ? 0x00000000 :
      "rmd160_K2: j out of range";
  }
  var rmd160_r1 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
    3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
    1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
    4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
  ];
  var rmd160_r2 = [
    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
    6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
    15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
    8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
    12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
  ];
  var rmd160_s1 = [
    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
    7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
    11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
    11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
    9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
  ];
  var rmd160_s2 = [
    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
    9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
    9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
    15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
    8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
  ];

  /*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */
  function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
  }

  /*
  * Bitwise rotate a 32-bit number to the left.
  */
  function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }
})(Crypto);/*!
* Crypto-JS v2.5.4  SHA256.js
* http://code.google.com/p/crypto-js/
* Copyright (c) 2009-2013, Jeff Mott. All rights reserved.
* http://code.google.com/p/crypto-js/wiki/License
*/
(function (Crypto) {

  // Shortcuts
  var C = Crypto,
    util = C.util,
    charenc = C.charenc,
    UTF8 = charenc.UTF8,
    Binary = charenc.Binary;

  // Constants
  var K = [0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
        0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
        0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
        0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
        0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
        0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
        0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
        0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
        0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
        0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
        0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
        0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
        0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
        0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
        0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
        0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];

  // Public API
  var SHA256 = C.SHA256 = function (message, options) {
    var digestbytes = util.wordsToBytes(SHA256._sha256(message));
    return options && options.asBytes ? digestbytes :
      options && options.asString ? Binary.bytesToString(digestbytes) :
      util.bytesToHex(digestbytes);
  };

  // The core
  SHA256._sha256 = function (message) {

    // Convert to byte array
    if (message.constructor == String) message = UTF8.stringToBytes(message);
    /* else, assume byte array already */

    var m = util.bytesToWords(message),
    l = message.length * 8,
    H = [0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A,
        0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19],
    w = [],
    a, b, c, d, e, f, g, h, i, j,
    t1, t2;

    // Padding
    m[l >> 5] |= 0x80 << (24 - l % 32);
    m[((l + 64 >> 9) << 4) + 15] = l;

    for (var i = 0; i < m.length; i += 16) {

      a = H[0];
      b = H[1];
      c = H[2];
      d = H[3];
      e = H[4];
      f = H[5];
      g = H[6];
      h = H[7];

      for (var j = 0; j < 64; j++) {

        if (j < 16) w[j] = m[j + i];
        else {

          var gamma0x = w[j - 15],
        gamma1x = w[j - 2],
        gamma0 = ((gamma0x << 25) | (gamma0x >>> 7)) ^
                    ((gamma0x << 14) | (gamma0x >>> 18)) ^
                    (gamma0x >>> 3),
        gamma1 = ((gamma1x << 15) | (gamma1x >>> 17)) ^
                    ((gamma1x << 13) | (gamma1x >>> 19)) ^
                    (gamma1x >>> 10);

          w[j] = gamma0 + (w[j - 7] >>> 0) +
            gamma1 + (w[j - 16] >>> 0);

        }

        var ch = e & f ^ ~e & g,
      maj = a & b ^ a & c ^ b & c,
      sigma0 = ((a << 30) | (a >>> 2)) ^
                  ((a << 19) | (a >>> 13)) ^
                  ((a << 10) | (a >>> 22)),
      sigma1 = ((e << 26) | (e >>> 6)) ^
                  ((e << 21) | (e >>> 11)) ^
                  ((e << 7) | (e >>> 25));


        t1 = (h >>> 0) + sigma1 + ch + (K[j]) + (w[j] >>> 0);
        t2 = sigma0 + maj;

        h = g;
        g = f;
        f = e;
        e = (d + t1) >>> 0;
        d = c;
        c = b;
        b = a;
        a = (t1 + t2) >>> 0;

      }

      H[0] += a;
      H[1] += b;
      H[2] += c;
      H[3] += d;
      H[4] += e;
      H[5] += f;
      H[6] += g;
      H[7] += h;

    }

    return H;

  };

  // Package private blocksize
  SHA256._blocksize = 16;

  SHA256._digestsize = 32;

})(Crypto);//https://raw.github.com/bitcoinjs/bitcoinjs-lib/faa10f0f6a1fff0b9a99fffb9bc30cee33b17212/src/ecdsa.js
/*!
* Basic Javascript Elliptic Curve implementation
* Ported loosely from BouncyCastle's Java EC code
* Only Fp curves implemented for now
* 
* Copyright Tom Wu, bitaddress.org  BSD License.
* http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*/
(function (exports) {

  // Constructor function of Global EllipticCurve object
  var ec = exports.EllipticCurve = function () { };

  // ----------------
  // ECFieldElementFp constructor
  // q instanceof BigInteger
  // x instanceof BigInteger
  ec.FieldElementFp = function (q, x) {
    this.x = x;
    // TODO if(x.compareTo(q) >= 0) error
    this.q = q;
  };

  ec.FieldElementFp.prototype.equals = function (other) {
    if (other == this) return true;
    return (this.q.equals(other.q) && this.x.equals(other.x));
  };

  ec.FieldElementFp.prototype.toBigInteger = function () {
    return this.x;
  };

  ec.FieldElementFp.prototype.negate = function () {
    return new ec.FieldElementFp(this.q, this.x.negate().mod(this.q));
  };

  ec.FieldElementFp.prototype.add = function (b) {
    return new ec.FieldElementFp(this.q, this.x.add(b.toBigInteger()).mod(this.q));
  };

  ec.FieldElementFp.prototype.subtract = function (b) {
    return new ec.FieldElementFp(this.q, this.x.subtract(b.toBigInteger()).mod(this.q));
  };

  ec.FieldElementFp.prototype.multiply = function (b) {
    return new ec.FieldElementFp(this.q, this.x.multiply(b.toBigInteger()).mod(this.q));
  };

  ec.FieldElementFp.prototype.square = function () {
    return new ec.FieldElementFp(this.q, this.x.square().mod(this.q));
  };

  ec.FieldElementFp.prototype.divide = function (b) {
    return new ec.FieldElementFp(this.q, this.x.multiply(b.toBigInteger().modInverse(this.q)).mod(this.q));
  };

  ec.FieldElementFp.prototype.getByteLength = function () {
    return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
  };

  // D.1.4 91
  /**
  * return a sqrt root - the routine verifies that the calculation
  * returns the right value - if none exists it returns null.
  * 
  * Copyright (c) 2000 - 2011 The Legion Of The Bouncy Castle (http://www.bouncycastle.org)
  * Ported to JavaScript by bitaddress.org
  */
  ec.FieldElementFp.prototype.sqrt = function () {
    throw new Error("this feature is disabled since we don't have a randomness source");
    if (!this.q.testBit(0)) throw new Error("even value of q");

    // p mod 4 == 3
    if (this.q.testBit(1)) {
      // z = g^(u+1) + p, p = 4u + 3
      var z = new ec.FieldElementFp(this.q, this.x.modPow(this.q.shiftRight(2).add(BigInteger.ONE), this.q));
      return z.square().equals(this) ? z : null;
    }

    // p mod 4 == 1
    var qMinusOne = this.q.subtract(BigInteger.ONE);
    var legendreExponent = qMinusOne.shiftRight(1);
    if (!(this.x.modPow(legendreExponent, this.q).equals(BigInteger.ONE))) return null;
    var u = qMinusOne.shiftRight(2);
    var k = u.shiftLeft(1).add(BigInteger.ONE);
    var Q = this.x;
    var fourQ = Q.shiftLeft(2).mod(this.q);
    var U, V;

    do {
      var rand = new SecureRandom();
      var P;
      do {
        P = new BigInteger(this.q.bitLength(), rand);
      }
      while (P.compareTo(this.q) >= 0 || !(P.multiply(P).subtract(fourQ).modPow(legendreExponent, this.q).equals(qMinusOne)));

      var result = ec.FieldElementFp.fastLucasSequence(this.q, P, Q, k);

      U = result[0];
      V = result[1];
      if (V.multiply(V).mod(this.q).equals(fourQ)) {
        // Integer division by 2, mod q
        if (V.testBit(0)) {
          V = V.add(this.q);
        }
        V = V.shiftRight(1);
        return new ec.FieldElementFp(this.q, V);
      }
    }
    while (U.equals(BigInteger.ONE) || U.equals(qMinusOne));

    return null;
  };

  /*
  * Copyright (c) 2000 - 2011 The Legion Of The Bouncy Castle (http://www.bouncycastle.org)
  * Ported to JavaScript by bitaddress.org
  */
  ec.FieldElementFp.fastLucasSequence = function (p, P, Q, k) {
    // TODO Research and apply "common-multiplicand multiplication here"

    var n = k.bitLength();
    var s = k.getLowestSetBit();
    var Uh = BigInteger.ONE;
    var Vl = BigInteger.TWO;
    var Vh = P;
    var Ql = BigInteger.ONE;
    var Qh = BigInteger.ONE;

    for (var j = n - 1; j >= s + 1; --j) {
      Ql = Ql.multiply(Qh).mod(p);
      if (k.testBit(j)) {
        Qh = Ql.multiply(Q).mod(p);
        Uh = Uh.multiply(Vh).mod(p);
        Vl = Vh.multiply(Vl).subtract(P.multiply(Ql)).mod(p);
        Vh = Vh.multiply(Vh).subtract(Qh.shiftLeft(1)).mod(p);
      }
      else {
        Qh = Ql;
        Uh = Uh.multiply(Vl).subtract(Ql).mod(p);
        Vh = Vh.multiply(Vl).subtract(P.multiply(Ql)).mod(p);
        Vl = Vl.multiply(Vl).subtract(Ql.shiftLeft(1)).mod(p);
      }
    }

    Ql = Ql.multiply(Qh).mod(p);
    Qh = Ql.multiply(Q).mod(p);
    Uh = Uh.multiply(Vl).subtract(Ql).mod(p);
    Vl = Vh.multiply(Vl).subtract(P.multiply(Ql)).mod(p);
    Ql = Ql.multiply(Qh).mod(p);

    for (var j = 1; j <= s; ++j) {
      Uh = Uh.multiply(Vl).mod(p);
      Vl = Vl.multiply(Vl).subtract(Ql.shiftLeft(1)).mod(p);
      Ql = Ql.multiply(Ql).mod(p);
    }

    return [Uh, Vl];
  };

  // ----------------
  // ECPointFp constructor
  ec.PointFp = function (curve, x, y, z, compressed) {
    this.curve = curve;
    this.x = x;
    this.y = y;
    // Projective coordinates: either zinv == null or z * zinv == 1
    // z and zinv are just BigIntegers, not fieldElements
    if (z == null) {
      this.z = BigInteger.ONE;
    }
    else {
      this.z = z;
    }
    this.zinv = null;
    // compression flag
    this.compressed = !!compressed;
  };

  ec.PointFp.prototype.getX = function () {
    if (this.zinv == null) {
      this.zinv = this.z.modInverse(this.curve.q);
    }
    return this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
  };

  ec.PointFp.prototype.getY = function () {
    if (this.zinv == null) {
      this.zinv = this.z.modInverse(this.curve.q);
    }
    return this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
  };

  ec.PointFp.prototype.equals = function (other) {
    if (other == this) return true;
    if (this.isInfinity()) return other.isInfinity();
    if (other.isInfinity()) return this.isInfinity();
    var u, v;
    // u = Y2 * Z1 - Y1 * Z2
    u = other.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(other.z)).mod(this.curve.q);
    if (!u.equals(BigInteger.ZERO)) return false;
    // v = X2 * Z1 - X1 * Z2
    v = other.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(other.z)).mod(this.curve.q);
    return v.equals(BigInteger.ZERO);
  };

  ec.PointFp.prototype.isInfinity = function () {
    if ((this.x == null) && (this.y == null)) return true;
    return this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO);
  };

  ec.PointFp.prototype.negate = function () {
    return new ec.PointFp(this.curve, this.x, this.y.negate(), this.z);
  };

  ec.PointFp.prototype.add = function (b) {
    if (this.isInfinity()) return b;
    if (b.isInfinity()) return this;

    // u = Y2 * Z1 - Y1 * Z2
    var u = b.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(b.z)).mod(this.curve.q);
    // v = X2 * Z1 - X1 * Z2
    var v = b.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(b.z)).mod(this.curve.q);


    if (BigInteger.ZERO.equals(v)) {
      if (BigInteger.ZERO.equals(u)) {
        return this.twice(); // this == b, so double
      }
      return this.curve.getInfinity(); // this = -b, so infinity
    }

    var THREE = new BigInteger("3");
    var x1 = this.x.toBigInteger();
    var y1 = this.y.toBigInteger();
    var x2 = b.x.toBigInteger();
    var y2 = b.y.toBigInteger();

    var v2 = v.square();
    var v3 = v2.multiply(v);
    var x1v2 = x1.multiply(v2);
    var zu2 = u.square().multiply(this.z);

    // x3 = v * (z2 * (z1 * u^2 - 2 * x1 * v^2) - v^3)
    var x3 = zu2.subtract(x1v2.shiftLeft(1)).multiply(b.z).subtract(v3).multiply(v).mod(this.curve.q);
    // y3 = z2 * (3 * x1 * u * v^2 - y1 * v^3 - z1 * u^3) + u * v^3
    var y3 = x1v2.multiply(THREE).multiply(u).subtract(y1.multiply(v3)).subtract(zu2.multiply(u)).multiply(b.z).add(u.multiply(v3)).mod(this.curve.q);
    // z3 = v^3 * z1 * z2
    var z3 = v3.multiply(this.z).multiply(b.z).mod(this.curve.q);

    return new ec.PointFp(this.curve, this.curve.fromBigInteger(x3), this.curve.fromBigInteger(y3), z3);
  };

  ec.PointFp.prototype.twice = function () {
    if (this.isInfinity()) return this;
    if (this.y.toBigInteger().signum() == 0) return this.curve.getInfinity();

    // TODO: optimized handling of constants
    var THREE = new BigInteger("3");
    var x1 = this.x.toBigInteger();
    var y1 = this.y.toBigInteger();

    var y1z1 = y1.multiply(this.z);
    var y1sqz1 = y1z1.multiply(y1).mod(this.curve.q);
    var a = this.curve.a.toBigInteger();

    // w = 3 * x1^2 + a * z1^2
    var w = x1.square().multiply(THREE);
    if (!BigInteger.ZERO.equals(a)) {
      w = w.add(this.z.square().multiply(a));
    }
    w = w.mod(this.curve.q);
    // x3 = 2 * y1 * z1 * (w^2 - 8 * x1 * y1^2 * z1)
    var x3 = w.square().subtract(x1.shiftLeft(3).multiply(y1sqz1)).shiftLeft(1).multiply(y1z1).mod(this.curve.q);
    // y3 = 4 * y1^2 * z1 * (3 * w * x1 - 2 * y1^2 * z1) - w^3
    var y3 = w.multiply(THREE).multiply(x1).subtract(y1sqz1.shiftLeft(1)).shiftLeft(2).multiply(y1sqz1).subtract(w.square().multiply(w)).mod(this.curve.q);
    // z3 = 8 * (y1 * z1)^3
    var z3 = y1z1.square().multiply(y1z1).shiftLeft(3).mod(this.curve.q);

    return new ec.PointFp(this.curve, this.curve.fromBigInteger(x3), this.curve.fromBigInteger(y3), z3);
  };

  // Simple NAF (Non-Adjacent Form) multiplication algorithm
  // TODO: modularize the multiplication algorithm
  ec.PointFp.prototype.multiply = function (k) {
    if (this.isInfinity()) return this;
    if (k.signum() == 0) return this.curve.getInfinity();

    var e = k;
    var h = e.multiply(new BigInteger("3"));

    var neg = this.negate();
    var R = this;

    var i;
    for (i = h.bitLength() - 2; i > 0; --i) {
      R = R.twice();

      var hBit = h.testBit(i);
      var eBit = e.testBit(i);

      if (hBit != eBit) {
        R = R.add(hBit ? this : neg);
      }
    }

    return R;
  };

  // Compute this*j + x*k (simultaneous multiplication)
  ec.PointFp.prototype.multiplyTwo = function (j, x, k) {
    var i;
    if (j.bitLength() > k.bitLength())
      i = j.bitLength() - 1;
    else
      i = k.bitLength() - 1;

    var R = this.curve.getInfinity();
    var both = this.add(x);
    while (i >= 0) {
      R = R.twice();
      if (j.testBit(i)) {
        if (k.testBit(i)) {
          R = R.add(both);
        }
        else {
          R = R.add(this);
        }
      }
      else {
        if (k.testBit(i)) {
          R = R.add(x);
        }
      }
      --i;
    }

    return R;
  };

  // patched by bitaddress.org and Casascius for use with Bitcoin.ECKey
  // patched by coretechs to support compressed public keys
  ec.PointFp.prototype.getEncoded = function (compressed) {
    var x = this.getX().toBigInteger();
    var y = this.getY().toBigInteger();
    var len = 32; // integerToBytes will zero pad if integer is less than 32 bytes. 32 bytes length is required by the Bitcoin protocol.
    var enc = ec.integerToBytes(x, len);

    // when compressed prepend byte depending if y point is even or odd 
    if (compressed) {
      if (y.isEven()) {
        enc.unshift(0x02);
      }
      else {
        enc.unshift(0x03);
      }
    }
    else {
      enc.unshift(0x04);
      enc = enc.concat(ec.integerToBytes(y, len)); // uncompressed public key appends the bytes of the y point
    }
    return enc;
  };

  ec.PointFp.decodeFrom = function (curve, enc) {
    var type = enc[0];
    var dataLen = enc.length - 1;

    // Extract x and y as byte arrays
    var xBa = enc.slice(1, 1 + dataLen / 2);
    var yBa = enc.slice(1 + dataLen / 2, 1 + dataLen);

    // Prepend zero byte to prevent interpretation as negative integer
    xBa.unshift(0);
    yBa.unshift(0);

    // Convert to BigIntegers
    var x = new BigInteger(xBa);
    var y = new BigInteger(yBa);

    // Return point
    return new ec.PointFp(curve, curve.fromBigInteger(x), curve.fromBigInteger(y));
  };

  ec.PointFp.prototype.add2D = function (b) {
    if (this.isInfinity()) return b;
    if (b.isInfinity()) return this;

    if (this.x.equals(b.x)) {
      if (this.y.equals(b.y)) {
        // this = b, i.e. this must be doubled
        return this.twice();
      }
      // this = -b, i.e. the result is the point at infinity
      return this.curve.getInfinity();
    }

    var x_x = b.x.subtract(this.x);
    var y_y = b.y.subtract(this.y);
    var gamma = y_y.divide(x_x);

    var x3 = gamma.square().subtract(this.x).subtract(b.x);
    var y3 = gamma.multiply(this.x.subtract(x3)).subtract(this.y);

    return new ec.PointFp(this.curve, x3, y3);
  };

  ec.PointFp.prototype.twice2D = function () {
    if (this.isInfinity()) return this;
    if (this.y.toBigInteger().signum() == 0) {
      // if y1 == 0, then (x1, y1) == (x1, -y1)
      // and hence this = -this and thus 2(x1, y1) == infinity
      return this.curve.getInfinity();
    }

    var TWO = this.curve.fromBigInteger(BigInteger.valueOf(2));
    var THREE = this.curve.fromBigInteger(BigInteger.valueOf(3));
    var gamma = this.x.square().multiply(THREE).add(this.curve.a).divide(this.y.multiply(TWO));

    var x3 = gamma.square().subtract(this.x.multiply(TWO));
    var y3 = gamma.multiply(this.x.subtract(x3)).subtract(this.y);

    return new ec.PointFp(this.curve, x3, y3);
  };

  ec.PointFp.prototype.multiply2D = function (k) {
    if (this.isInfinity()) return this;
    if (k.signum() == 0) return this.curve.getInfinity();

    var e = k;
    var h = e.multiply(new BigInteger("3"));

    var neg = this.negate();
    var R = this;

    var i;
    for (i = h.bitLength() - 2; i > 0; --i) {
      R = R.twice();

      var hBit = h.testBit(i);
      var eBit = e.testBit(i);

      if (hBit != eBit) {
        R = R.add2D(hBit ? this : neg);
      }
    }

    return R;
  };

  ec.PointFp.prototype.isOnCurve = function () {
    var x = this.getX().toBigInteger();
    var y = this.getY().toBigInteger();
    var a = this.curve.getA().toBigInteger();
    var b = this.curve.getB().toBigInteger();
    var n = this.curve.getQ();
    var lhs = y.multiply(y).mod(n);
    var rhs = x.multiply(x).multiply(x).add(a.multiply(x)).add(b).mod(n);
    return lhs.equals(rhs);
  };

  ec.PointFp.prototype.toString = function () {
    return '(' + this.getX().toBigInteger().toString() + ',' + this.getY().toBigInteger().toString() + ')';
  };

  /**
  * Validate an elliptic curve point.
  *
  * See SEC 1, section 3.2.2.1: Elliptic Curve Public Key Validation Primitive
  */
  ec.PointFp.prototype.validate = function () {
    var n = this.curve.getQ();

    // Check Q != O
    if (this.isInfinity()) {
      throw new Error("Point is at infinity.");
    }

    // Check coordinate bounds
    var x = this.getX().toBigInteger();
    var y = this.getY().toBigInteger();
    if (x.compareTo(BigInteger.ONE) < 0 || x.compareTo(n.subtract(BigInteger.ONE)) > 0) {
      throw new Error('x coordinate out of bounds');
    }
    if (y.compareTo(BigInteger.ONE) < 0 || y.compareTo(n.subtract(BigInteger.ONE)) > 0) {
      throw new Error('y coordinate out of bounds');
    }

    // Check y^2 = x^3 + ax + b (mod n)
    if (!this.isOnCurve()) {
      throw new Error("Point is not on the curve.");
    }

    // Check nQ = 0 (Q is a scalar multiple of G)
    if (this.multiply(n).isInfinity()) {
      // TODO: This check doesn't work - fix.
      throw new Error("Point is not a scalar multiple of G.");
    }

    return true;
  };




  // ----------------
  // ECCurveFp constructor
  ec.CurveFp = function (q, a, b) {
    this.q = q;
    this.a = this.fromBigInteger(a);
    this.b = this.fromBigInteger(b);
    this.infinity = new ec.PointFp(this, null, null);
  }

  ec.CurveFp.prototype.getQ = function () {
    return this.q;
  };

  ec.CurveFp.prototype.getA = function () {
    return this.a;
  };

  ec.CurveFp.prototype.getB = function () {
    return this.b;
  };

  ec.CurveFp.prototype.equals = function (other) {
    if (other == this) return true;
    return (this.q.equals(other.q) && this.a.equals(other.a) && this.b.equals(other.b));
  };

  ec.CurveFp.prototype.getInfinity = function () {
    return this.infinity;
  };

  ec.CurveFp.prototype.fromBigInteger = function (x) {
    return new ec.FieldElementFp(this.q, x);
  };

  // for now, work with hex strings because they're easier in JS
  // compressed support added by bitaddress.org
  ec.CurveFp.prototype.decodePointHex = function (s) {
    var firstByte = parseInt(s.substr(0, 2), 16);
    switch (firstByte) { // first byte
      case 0:
        return this.infinity;
      case 2: // compressed
      case 3: // compressed
        var yTilde = firstByte & 1;
        var xHex = s.substr(2, s.length - 2);
        var X1 = new BigInteger(xHex, 16);
        return this.decompressPoint(yTilde, X1);
      case 4: // uncompressed
      case 6: // hybrid
      case 7: // hybrid
        var len = (s.length - 2) / 2;
        var xHex = s.substr(2, len);
        var yHex = s.substr(len + 2, len);

        return new ec.PointFp(this,
          this.fromBigInteger(new BigInteger(xHex, 16)),
          this.fromBigInteger(new BigInteger(yHex, 16)));

      default: // unsupported
        return null;
    }
  };

  /*
  * Copyright (c) 2000 - 2011 The Legion Of The Bouncy Castle (http://www.bouncycastle.org)
  * Ported to JavaScript by bitaddress.org
  *
  * Number yTilde
  * BigInteger X1
  */
  ec.CurveFp.prototype.decompressPoint = function (yTilde, X1) {
    var x = this.fromBigInteger(X1);
    var alpha = x.multiply(x.square().add(this.getA())).add(this.getB());
    var beta = alpha.sqrt();
    // if we can't find a sqrt we haven't got a point on the curve - run!
    if (beta == null) throw new Error("Invalid point compression");
    var betaValue = beta.toBigInteger();
    var bit0 = betaValue.testBit(0) ? 1 : 0;
    if (bit0 != yTilde) {
      // Use the other root
      beta = this.fromBigInteger(this.getQ().subtract(betaValue));
    }
    return new ec.PointFp(this, x, beta, null, true);
  };


  ec.fromHex = function (s) { return new BigInteger(s, 16); };

  ec.integerToBytes = function (i, len) {
    var bytes = i.toByteArrayUnsigned();
    if (len < bytes.length) {
      bytes = bytes.slice(bytes.length - len);
    } else while (len > bytes.length) {
      bytes.unshift(0);
    }
    return bytes;
  };


  // Named EC curves
  // ----------------
  // X9ECParameters constructor
  ec.X9Parameters = function (curve, g, n, h) {
    this.curve = curve;
    this.g = g;
    this.n = n;
    this.h = h;
  }
  ec.X9Parameters.prototype.getCurve = function () { return this.curve; };
  ec.X9Parameters.prototype.getG = function () { return this.g; };
  ec.X9Parameters.prototype.getN = function () { return this.n; };
  ec.X9Parameters.prototype.getH = function () { return this.h; };

  // secp256k1 is the Curve used by Bitcoin
  ec.secNamedCurves = {
    // used by Bitcoin
    "secp256k1": function () {
      // p = 2^256 - 2^32 - 2^9 - 2^8 - 2^7 - 2^6 - 2^4 - 1
      var p = ec.fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F");
      var a = BigInteger.ZERO;
      var b = ec.fromHex("7");
      var n = ec.fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141");
      var h = BigInteger.ONE;
      var curve = new ec.CurveFp(p, a, b);
      var G = curve.decodePointHex("04"
          + "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798"
          + "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8");
      return new ec.X9Parameters(curve, G, n, h);
    }
  };

  // secp256k1 called by Bitcoin's ECKEY
  ec.getSECCurveByName = function (name) {
    if (ec.secNamedCurves[name] == undefined) return null;
    return ec.secNamedCurves[name]();
  }
})(exports);

var EllipticCurve = exports.EllipticCurve;//https://raw.github.com/bitcoinjs/bitcoinjs-lib/09e8c6e184d6501a0c2c59d73ca64db5c0d3eb95/src/address.js
// See here for license information: https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/LICENSE
(function (Bitcoin) {
  Bitcoin.Address = function (bytes) {
    if ("string" == typeof bytes) {
      bytes = Bitcoin.Address.decodeString(bytes);
    }
    this.hash = bytes;
    this.version = Bitcoin.Address.networkVersion;
  };

  Bitcoin.Address.networkVersion = 0x00; // mainnet

  /**
  * Serialize this object as a standard Bitcoin address.
  *
  * Returns the address as a base58-encoded string in the standardized format.
  */
  Bitcoin.Address.prototype.toString = function () {
    // Get a copy of the hash
    var hash = this.hash.slice(0);

    // Version
    hash.unshift(this.version);
    var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });
    var bytes = hash.concat(checksum.slice(0, 4));
    return Bitcoin.Base58.encode(bytes);
  };

  Bitcoin.Address.prototype.getHashBase64 = function () {
    return Crypto.util.bytesToBase64(this.hash);
  };

  /**
  * Parse a Bitcoin address contained in a string.
  */
  Bitcoin.Address.decodeString = function (string) {
    var bytes = Bitcoin.Base58.decode(string);
    var hash = bytes.slice(0, 21);
    var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });

    if (checksum[0] != bytes[21] ||
        checksum[1] != bytes[22] ||
        checksum[2] != bytes[23] ||
        checksum[3] != bytes[24]) {
      throw "Checksum validation failed!";
    }

    var version = hash.shift();

    if (version != 0) {
      throw "Version " + version + " not supported!";
    }

    return hash;
  };
})(Bitcoin);
//https://raw.github.com/bitcoinjs/bitcoinjs-lib/c952aaeb3ee472e3776655b8ea07299ebed702c7/src/base58.js
// See here for license information: https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/LICENSE
(function (Bitcoin) {
  Bitcoin.Base58 = {
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
    validRegex: /^[1-9A-HJ-NP-Za-km-z]+$/,
    base: BigInteger.valueOf(58),

    /**
    * Convert a byte array to a base58-encoded string.
    *
    * Written by Mike Hearn for BitcoinJ.
    *   Copyright (c) 2011 Google Inc.
    *
    * Ported to JavaScript by Stefan Thomas.
    */
    encode: function (input) {
      var bi = BigInteger.fromByteArrayUnsigned(input);
      var chars = [];

      while (bi.compareTo(B58.base) >= 0) {
        var mod = bi.mod(B58.base);
        chars.unshift(B58.alphabet[mod.intValue()]);
        bi = bi.subtract(mod).divide(B58.base);
      }
      chars.unshift(B58.alphabet[bi.intValue()]);

      // Convert leading zeros too.
      for (var i = 0; i < input.length; i++) {
        if (input[i] == 0x00) {
          chars.unshift(B58.alphabet[0]);
        } else break;
      }

      return chars.join('');
    },

    /**
    * Convert a base58-encoded string to a byte array.
    *
    * Written by Mike Hearn for BitcoinJ.
    *   Copyright (c) 2011 Google Inc.
    *
    * Ported to JavaScript by Stefan Thomas.
    */
    decode: function (input) {
      var bi = BigInteger.valueOf(0);
      var leadingZerosNum = 0;
      for (var i = input.length - 1; i >= 0; i--) {
        var alphaIndex = B58.alphabet.indexOf(input[i]);
        if (alphaIndex < 0) {
          throw "Invalid character";
        }
        bi = bi.add(BigInteger.valueOf(alphaIndex)
                .multiply(B58.base.pow(input.length - 1 - i)));

        // This counts leading zero bytes
        if (input[i] == "1") leadingZerosNum++;
        else leadingZerosNum = 0;
      }
      var bytes = bi.toByteArrayUnsigned();

      // Add leading zeros
      while (leadingZerosNum-- > 0) bytes.unshift(0);

      return bytes;
    }
  };

  var B58 = Bitcoin.Base58;
})(Bitcoin);
//https://raw.github.com/pointbiz/bitcoinjs-lib/9b2f94a028a7bc9bed94e0722563e9ff1d8e8db8/src/eckey.js
// See here for license information: https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/LICENSE
(function (Bitcoin) {
  Bitcoin.ECKey = (function () {
    var ecparams = EllipticCurve.getSECCurveByName("secp256k1");

    var ECKey = function (input) {
      if (input instanceof BigInteger) {
        // Input is a private key value
        this.priv = input;
      } else if (Bitcoin.Util.isArray(input)) {
        // Prepend zero byte to prevent interpretation as negative integer
        this.priv = BigInteger.fromByteArrayUnsigned(input);
      } else if ("string" == typeof input) {
        var bytes = null;
        if (ECKey.isWalletImportFormat(input)) {
          bytes = ECKey.decodeWalletImportFormat(input);
        } else if (ECKey.isCompressedWalletImportFormat(input)) {
          bytes = ECKey.decodeCompressedWalletImportFormat(input);
          this.compressed = true;
        } else if (ECKey.isMiniFormat(input)) {
          bytes = Crypto.SHA256(input, { asBytes: true });
        } else if (ECKey.isHexFormat(input)) {
          bytes = Crypto.util.hexToBytes(input);
        } else if (ECKey.isBase64Format(input)) {
          bytes = Crypto.util.base64ToBytes(input);
        }
        
        if (ECKey.isBase6Format(input)) {
          this.priv = new BigInteger(input, 6);
        } else if (bytes == null || bytes.length != 32) {
          this.priv = null;
        } else {
          // Prepend zero byte to prevent interpretation as negative integer
          this.priv = BigInteger.fromByteArrayUnsigned(bytes);
        }
      } else {
        throw new Error("no plausible constructor behavior"); 
      }

      this.compressed = (this.compressed == undefined) ? !!ECKey.compressByDefault : this.compressed;
    };

    ECKey.privateKeyPrefix = 0x80; // mainnet 0x80    testnet 0xEF

    /**
    * Whether public keys should be returned compressed by default.
    */
    ECKey.compressByDefault = false;

    /**
    * Set whether the public key should be returned compressed or not.
    */
    ECKey.prototype.setCompressed = function (v) {
      this.compressed = !!v;
      if (this.pubPoint) this.pubPoint.compressed = this.compressed;
      return this;
    };

    /*
    * Return public key as a byte array in DER encoding
    */
    ECKey.prototype.getPub = function () {
      if (this.compressed) {
        if (this.pubComp) return this.pubComp;
        return this.pubComp = this.getPubPoint().getEncoded(1);
      } else {
        if (this.pubUncomp) return this.pubUncomp;
        return this.pubUncomp = this.getPubPoint().getEncoded(0);
      }
    };

    /**
    * Return public point as ECPoint object.
    */
    ECKey.prototype.getPubPoint = function () {
      if (!this.pubPoint) {
        this.pubPoint = ecparams.getG().multiply(this.priv);
        this.pubPoint.compressed = this.compressed;
      }
      return this.pubPoint;
    };

    ECKey.prototype.getPubKeyHex = function () {
      if (this.compressed) {
        if (this.pubKeyHexComp) return this.pubKeyHexComp;
        return this.pubKeyHexComp = Crypto.util.bytesToHex(this.getPub()).toString().toUpperCase();
      } else {
        if (this.pubKeyHexUncomp) return this.pubKeyHexUncomp;
        return this.pubKeyHexUncomp = Crypto.util.bytesToHex(this.getPub()).toString().toUpperCase();
      }
    };

    /**
    * Get the pubKeyHash for this key.
    *
    * This is calculated as RIPE160(SHA256([encoded pubkey])) and returned as
    * a byte array.
    */
    ECKey.prototype.getPubKeyHash = function () {
      if (this.compressed) {
        if (this.pubKeyHashComp) return this.pubKeyHashComp;
        return this.pubKeyHashComp = Bitcoin.Util.sha256ripe160(this.getPub());
      } else {
        if (this.pubKeyHashUncomp) return this.pubKeyHashUncomp;
        return this.pubKeyHashUncomp = Bitcoin.Util.sha256ripe160(this.getPub());
      }
    };

    ECKey.prototype.getBitcoinAddress = function () {
      var hash = this.getPubKeyHash();
      var addr = new Bitcoin.Address(hash);
      return addr.toString();
    };

    /*
    * Takes a public point as a hex string or byte array
    */
    ECKey.prototype.setPub = function (pub) {
      // byte array
      if (Bitcoin.Util.isArray(pub)) {
        pub = Crypto.util.bytesToHex(pub).toString().toUpperCase();
      }
      var ecPoint = ecparams.getCurve().decodePointHex(pub);
      this.setCompressed(ecPoint.compressed);
      this.pubPoint = ecPoint;
      return this;
    };

    // Sipa Private Key Wallet Import Format 
    ECKey.prototype.getBitcoinWalletImportFormat = function () {
      var bytes = this.getBitcoinPrivateKeyByteArray();
      bytes.unshift(ECKey.privateKeyPrefix); // prepend 0x80 byte
      if (this.compressed) bytes.push(0x01); // append 0x01 byte for compressed format
      var checksum = Crypto.SHA256(Crypto.SHA256(bytes, { asBytes: true }), { asBytes: true });
      bytes = bytes.concat(checksum.slice(0, 4));
      var privWif = Bitcoin.Base58.encode(bytes);
      return privWif;
    };

    // Private Key Hex Format 
    ECKey.prototype.getBitcoinHexFormat = function () {
      return Crypto.util.bytesToHex(this.getBitcoinPrivateKeyByteArray()).toString().toUpperCase();
    };

    // Private Key Base64 Format 
    ECKey.prototype.getBitcoinBase64Format = function () {
      return Crypto.util.bytesToBase64(this.getBitcoinPrivateKeyByteArray());
    };

    ECKey.prototype.getBitcoinPrivateKeyByteArray = function () {
      // Get a copy of private key as a byte array
      var bytes = this.priv.toByteArrayUnsigned();
      // zero pad if private key is less than 32 bytes 
      while (bytes.length < 32) bytes.unshift(0x00);
      return bytes;
    };

    ECKey.prototype.toString = function (format) {
      format = format || "";
      if (format.toString().toLowerCase() == "base64" || format.toString().toLowerCase() == "b64") {
        return this.getBitcoinBase64Format();
      }
      // Wallet Import Format
      else if (format.toString().toLowerCase() == "wif") {
        return this.getBitcoinWalletImportFormat();
      }
      else {
        return this.getBitcoinHexFormat();
      }
    };

    /**
    * Parse a wallet import format private key contained in a string.
    */
    ECKey.decodeWalletImportFormat = function (privStr) {
      var bytes = Bitcoin.Base58.decode(privStr);
      var hash = bytes.slice(0, 33);
      var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });
      if (checksum[0] != bytes[33] ||
            checksum[1] != bytes[34] ||
            checksum[2] != bytes[35] ||
            checksum[3] != bytes[36]) {
        throw "Checksum validation failed!";
      }
      var version = hash.shift();
      if (version != ECKey.privateKeyPrefix) {
        throw "Version " + version + " not supported!";
      }
      return hash;
    };

    /**
    * Parse a compressed wallet import format private key contained in a string.
    */
    ECKey.decodeCompressedWalletImportFormat = function (privStr) {
      var bytes = Bitcoin.Base58.decode(privStr);
      var hash = bytes.slice(0, 34);
      var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });
      if (checksum[0] != bytes[34] ||
            checksum[1] != bytes[35] ||
            checksum[2] != bytes[36] ||
            checksum[3] != bytes[37]) {
        throw "Checksum validation failed!";
      }
      var version = hash.shift();
      if (version != ECKey.privateKeyPrefix) {
        throw "Version " + version + " not supported!";
      }
      hash.pop();
      return hash;
    };

    // 64 characters [0-9A-F]
    ECKey.isHexFormat = function (key) {
      key = key.toString();
      return /^[A-Fa-f0-9]{64}$/.test(key);
    };

    // 51 characters base58, always starts with a '5'
    ECKey.isWalletImportFormat = function (key) {
      key = key.toString();
      return (ECKey.privateKeyPrefix == 0x80) ?
                (/^5[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$/.test(key)) :
                (/^9[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$/.test(key));
    };

    // 52 characters base58
    ECKey.isCompressedWalletImportFormat = function (key) {
      key = key.toString();
      return (ECKey.privateKeyPrefix == 0x80) ?
                (/^[LK][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$/.test(key)) :
                (/^c[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$/.test(key));
    };

    // 44 characters
    ECKey.isBase64Format = function (key) {
      key = key.toString();
      return (/^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=+\/]{44}$/.test(key));
    };

    // 99 characters, 1=1, if using dice convert 6 to 0
    ECKey.isBase6Format = function (key) {
      key = key.toString();
      return (/^[012345]{99}$/.test(key));
    };

    // 22, 26 or 30 characters, always starts with an 'S'
    ECKey.isMiniFormat = function (key) {
      key = key.toString();
      var validChars22 = /^S[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{21}$/.test(key);
      var validChars26 = /^S[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{25}$/.test(key);
      var validChars30 = /^S[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{29}$/.test(key);
      var testBytes = Crypto.SHA256(key + "?", { asBytes: true });

      return ((testBytes[0] === 0x00 || testBytes[0] === 0x01) && (validChars22 || validChars26 || validChars30));
    };

    return ECKey;
  })();
})(Bitcoin);//https://raw.github.com/bitcoinjs/bitcoinjs-lib/09e8c6e184d6501a0c2c59d73ca64db5c0d3eb95/src/util.js
// See here for license information: https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/LICENSE
// Bitcoin utility functions
(function (Bitcoin) {
  Bitcoin.Util = {
    /**
    * Cross-browser compatibility version of Array.isArray.
    */
    isArray: Array.isArray || function (o) {
      return Object.prototype.toString.call(o) === '[object Array]';
    },
    /**
    * Create an array of a certain length filled with a specific value.
    */
    makeFilledArray: function (len, val) {
      var array = [];
      var i = 0;
      while (i < len) {
        array[i++] = val;
      }
      return array;
    },
    /**
    * Turn an integer into a "var_int".
    *
    * "var_int" is a variable length integer used by Bitcoin's binary format.
    *
    * Returns a byte array.
    */
    numToVarInt: function (i) {
      if (i < 0xfd) {
        // unsigned char
        return [i];
      } else if (i <= 1 << 16) {
        // unsigned short (LE)
        return [0xfd, i >>> 8, i & 255];
      } else if (i <= 1 << 32) {
        // unsigned int (LE)
        return [0xfe].concat(Crypto.util.wordsToBytes([i]));
      } else {
        // unsigned long long (LE)
        return [0xff].concat(Crypto.util.wordsToBytes([i >>> 32, i]));
      }
    },
    /**
    * Parse a Bitcoin value byte array, returning a BigInteger.
    */
    valueToBigInt: function (valueBuffer) {
      if (valueBuffer instanceof BigInteger) return valueBuffer;

      // Prepend zero byte to prevent interpretation as negative integer
      return BigInteger.fromByteArrayUnsigned(valueBuffer);
    },
    /**
    * Format a Bitcoin value as a string.
    *
    * Takes a BigInteger or byte-array and returns that amount of Bitcoins in a
    * nice standard formatting.
    *
    * Examples:
    * 12.3555
    * 0.1234
    * 900.99998888
    * 34.00
    */
    formatValue: function (valueBuffer) {
      var value = this.valueToBigInt(valueBuffer).toString();
      var integerPart = value.length > 8 ? value.substr(0, value.length - 8) : '0';
      var decimalPart = value.length > 8 ? value.substr(value.length - 8) : value;
      while (decimalPart.length < 8) decimalPart = "0" + decimalPart;
      decimalPart = decimalPart.replace(/0*$/, '');
      while (decimalPart.length < 2) decimalPart += "0";
      return integerPart + "." + decimalPart;
    },
    /**
    * Parse a floating point string as a Bitcoin value.
    *
    * Keep in mind that parsing user input is messy. You should always display
    * the parsed value back to the user to make sure we understood his input
    * correctly.
    */
    parseValue: function (valueString) {
      // TODO: Detect other number formats (e.g. comma as decimal separator)
      var valueComp = valueString.split('.');
      var integralPart = valueComp[0];
      var fractionalPart = valueComp[1] || "0";
      while (fractionalPart.length < 8) fractionalPart += "0";
      fractionalPart = fractionalPart.replace(/^0+/g, '');
      var value = BigInteger.valueOf(parseInt(integralPart));
      value = value.multiply(BigInteger.valueOf(100000000));
      value = value.add(BigInteger.valueOf(parseInt(fractionalPart)));
      return value;
    },
    /**
    * Calculate RIPEMD160(SHA256(data)).
    *
    * Takes an arbitrary byte array as inputs and returns the hash as a byte
    * array.
    */
    sha256ripe160: function (data) {
      return Crypto.RIPEMD160(Crypto.SHA256(data, { asBytes: true }), { asBytes: true });
    },
    // double sha256
    dsha256: function (data) {
      return Crypto.SHA256(Crypto.SHA256(data, { asBytes: true }), { asBytes: true });
    }
  };
})(Bitcoin);
},{}],9:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var AES, BlockCipher, G, Global, scrub_vec,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };



  BlockCipher = require('./algbase').BlockCipher;

  scrub_vec = require('./util').scrub_vec;

  Global = (function() {
    function Global() {
      var i;
      this.SBOX = [];
      this.INV_SBOX = [];
      this.SUB_MIX = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i < 4; i = ++_i) {
          _results.push([]);
        }
        return _results;
      })();
      this.INV_SUB_MIX = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i < 4; i = ++_i) {
          _results.push([]);
        }
        return _results;
      })();
      this.init();
      this.RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
    }

    Global.prototype.init = function() {
      var d, i, sx, t, x, x2, x4, x8, xi, _i;
      d = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i < 256; i = ++_i) {
          if (i < 128) {
            _results.push(i << 1);
          } else {
            _results.push((i << 1) ^ 0x11b);
          }
        }
        return _results;
      })();
      x = 0;
      xi = 0;
      for (i = _i = 0; _i < 256; i = ++_i) {
        sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
        sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
        this.SBOX[x] = sx;
        this.INV_SBOX[sx] = x;
        x2 = d[x];
        x4 = d[x2];
        x8 = d[x4];
        t = (d[sx] * 0x101) ^ (sx * 0x1010100);
        this.SUB_MIX[0][x] = (t << 24) | (t >>> 8);
        this.SUB_MIX[1][x] = (t << 16) | (t >>> 16);
        this.SUB_MIX[2][x] = (t << 8) | (t >>> 24);
        this.SUB_MIX[3][x] = t;
        t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
        this.INV_SUB_MIX[0][sx] = (t << 24) | (t >>> 8);
        this.INV_SUB_MIX[1][sx] = (t << 16) | (t >>> 16);
        this.INV_SUB_MIX[2][sx] = (t << 8) | (t >>> 24);
        this.INV_SUB_MIX[3][sx] = t;
        if (x === 0) {
          x = xi = 1;
        } else {
          x = x2 ^ d[d[d[x8 ^ x2]]];
          xi ^= d[d[xi]];
        }
      }
      return true;
    };

    return Global;

  })();

  G = new Global();

  AES = (function(_super) {
    __extends(AES, _super);

    AES.blockSize = 4 * 4;

    AES.prototype.blockSize = AES.blockSize;

    AES.keySize = 256 / 8;

    AES.prototype.keySize = AES.keySize;

    AES.ivSize = AES.blockSize;

    AES.prototype.ivSize = AES.ivSize;

    function AES(key) {
      this._key = key.clone();
      this._doReset();
    }

    AES.prototype._doReset = function() {
      var invKsRow, keySize, keyWords, ksRow, ksRows, t, _i, _j;
      keyWords = this._key.words;
      keySize = this._key.sigBytes / 4;
      this._nRounds = keySize + 6;
      ksRows = (this._nRounds + 1) * 4;
      this._keySchedule = [];
      for (ksRow = _i = 0; 0 <= ksRows ? _i < ksRows : _i > ksRows; ksRow = 0 <= ksRows ? ++_i : --_i) {
        this._keySchedule[ksRow] = ksRow < keySize ? keyWords[ksRow] : (t = this._keySchedule[ksRow - 1], (ksRow % keySize) === 0 ? (t = (t << 8) | (t >>> 24), t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff], t ^= G.RCON[(ksRow / keySize) | 0] << 24) : keySize > 6 && ksRow % keySize === 4 ? t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff] : void 0, this._keySchedule[ksRow - keySize] ^ t);
      }
      this._invKeySchedule = [];
      for (invKsRow = _j = 0; 0 <= ksRows ? _j < ksRows : _j > ksRows; invKsRow = 0 <= ksRows ? ++_j : --_j) {
        ksRow = ksRows - invKsRow;
        t = this._keySchedule[ksRow - (invKsRow % 4 ? 0 : 4)];
        this._invKeySchedule[invKsRow] = invKsRow < 4 || ksRow <= 4 ? t : G.INV_SUB_MIX[0][G.SBOX[t >>> 24]] ^ G.INV_SUB_MIX[1][G.SBOX[(t >>> 16) & 0xff]] ^ G.INV_SUB_MIX[2][G.SBOX[(t >>> 8) & 0xff]] ^ G.INV_SUB_MIX[3][G.SBOX[t & 0xff]];
      }
      return true;
    };

    AES.prototype.encryptBlock = function(M, offset) {
      if (offset == null) {
        offset = 0;
      }
      return this._doCryptBlock(M, offset, this._keySchedule, G.SUB_MIX, G.SBOX);
    };

    AES.prototype.decryptBlock = function(M, offset) {
      var _ref, _ref1;
      if (offset == null) {
        offset = 0;
      }
      _ref = [M[offset + 3], M[offset + 1]], M[offset + 1] = _ref[0], M[offset + 3] = _ref[1];
      this._doCryptBlock(M, offset, this._invKeySchedule, G.INV_SUB_MIX, G.INV_SBOX);
      return _ref1 = [M[offset + 3], M[offset + 1]], M[offset + 1] = _ref1[0], M[offset + 3] = _ref1[1], _ref1;
    };

    AES.prototype.scrub = function() {
      scrub_vec(this._keySchedule);
      scrub_vec(this._invKeySchedule);
      return this._key.scrub();
    };

    AES.prototype._doCryptBlock = function(M, offset, keySchedule, SUB_MIX, SBOX) {
      var ksRow, round, s0, s1, s2, s3, t0, t1, t2, t3, _i, _ref;
      s0 = M[offset] ^ keySchedule[0];
      s1 = M[offset + 1] ^ keySchedule[1];
      s2 = M[offset + 2] ^ keySchedule[2];
      s3 = M[offset + 3] ^ keySchedule[3];
      ksRow = 4;
      for (round = _i = 1, _ref = this._nRounds; 1 <= _ref ? _i < _ref : _i > _ref; round = 1 <= _ref ? ++_i : --_i) {
        t0 = SUB_MIX[0][s0 >>> 24] ^ SUB_MIX[1][(s1 >>> 16) & 0xff] ^ SUB_MIX[2][(s2 >>> 8) & 0xff] ^ SUB_MIX[3][s3 & 0xff] ^ keySchedule[ksRow++];
        t1 = SUB_MIX[0][s1 >>> 24] ^ SUB_MIX[1][(s2 >>> 16) & 0xff] ^ SUB_MIX[2][(s3 >>> 8) & 0xff] ^ SUB_MIX[3][s0 & 0xff] ^ keySchedule[ksRow++];
        t2 = SUB_MIX[0][s2 >>> 24] ^ SUB_MIX[1][(s3 >>> 16) & 0xff] ^ SUB_MIX[2][(s0 >>> 8) & 0xff] ^ SUB_MIX[3][s1 & 0xff] ^ keySchedule[ksRow++];
        t3 = SUB_MIX[0][s3 >>> 24] ^ SUB_MIX[1][(s0 >>> 16) & 0xff] ^ SUB_MIX[2][(s1 >>> 8) & 0xff] ^ SUB_MIX[3][s2 & 0xff] ^ keySchedule[ksRow++];
        s0 = t0;
        s1 = t1;
        s2 = t2;
        s3 = t3;
      }
      t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
      t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
      t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
      t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];
      M[offset] = t0;
      M[offset + 1] = t1;
      M[offset + 2] = t2;
      return M[offset + 3] = t3;
    };

    return AES;

  })(BlockCipher);

  exports.AES = AES;

}).call(this);

},{"./algbase":10,"./util":29}],10:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var BlockCipher, BufferedBlockAlgorithm, Hasher, StreamCipher, WordArray, util,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };



  WordArray = require('./wordarray').WordArray;

  util = require('./util');

  BufferedBlockAlgorithm = (function() {
    BufferedBlockAlgorithm.prototype._minBufferSize = 0;

    function BufferedBlockAlgorithm() {
      this.reset();
    }

    BufferedBlockAlgorithm.prototype.reset = function() {
      this._data = new WordArray();
      return this._nDataBytes = 0;
    };

    BufferedBlockAlgorithm.prototype._append = function(data) {
      this._data.concat(data);
      return this._nDataBytes += data.sigBytes;
    };

    BufferedBlockAlgorithm.prototype._process = function(doFlush) {
      var blockSizeBytes, data, dataSigBytes, dataWords, nBlocksReady, nBytesReady, nWordsReady, offset, processedWords, _i, _ref;
      data = this._data;
      dataWords = data.words;
      dataSigBytes = data.sigBytes;
      blockSizeBytes = this.blockSize * 4;
      nBlocksReady = dataSigBytes / blockSizeBytes;
      if (doFlush) {
        nBlocksReady = Math.ceil(nBlocksReady);
      } else {
        nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
      }
      nWordsReady = nBlocksReady * this.blockSize;
      nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
      if (nWordsReady) {
        for (offset = _i = 0, _ref = this.blockSize; _ref > 0 ? _i < nWordsReady : _i > nWordsReady; offset = _i += _ref) {
          this._doProcessBlock(dataWords, offset);
        }
        processedWords = dataWords.splice(0, nWordsReady);
        data.sigBytes -= nBytesReady;
      }
      return new WordArray(processedWords, nBytesReady);
    };

    BufferedBlockAlgorithm.prototype.copy_to = function(out) {
      out._data = this._data.clone();
      return out._nDataBytes = this._nDataBytes;
    };

    BufferedBlockAlgorithm.prototype.clone = function() {
      var obj;
      obj = new BufferedBlockAlgorithm();
      this.copy_to(obj);
      return obj;
    };

    return BufferedBlockAlgorithm;

  })();

  Hasher = (function(_super) {
    __extends(Hasher, _super);

    function Hasher() {
      Hasher.__super__.constructor.call(this);
    }

    Hasher.prototype.reset = function() {
      Hasher.__super__.reset.call(this);
      this._doReset();
      return this;
    };

    Hasher.prototype.update = function(messageUpdate) {
      this._append(messageUpdate);
      this._process();
      return this;
    };

    Hasher.prototype.finalize = function(messageUpdate) {
      if (messageUpdate) {
        this._append(messageUpdate);
      }
      return this._doFinalize();
    };

    Hasher.prototype.bufhash = function(input) {
      var out, wa_in, wa_out;
      wa_in = WordArray.from_buffer(input);
      wa_out = this.finalize(wa_in);
      out = wa_out.to_buffer();
      wa_in.scrub();
      wa_out.scrub();
      return out;
    };

    return Hasher;

  })(BufferedBlockAlgorithm);

  exports.BlockCipher = BlockCipher = (function() {
    function BlockCipher(key) {}

    BlockCipher.prototype.encryptBlock = function(M, offset) {};

    return BlockCipher;

  })();

  StreamCipher = (function() {
    function StreamCipher() {}

    StreamCipher.prototype.encryptBlock = function(word_array, dst_offset) {
      var n_words, pad;
      if (dst_offset == null) {
        dst_offset = 0;
      }
      pad = this.get_pad();
      n_words = Math.min(word_array.words.length - dst_offset, this.bsiw);
      word_array.xor(pad, {
        dst_offset: dst_offset,
        n_words: n_words
      });
      pad.scrub();
      return this.bsiw;
    };

    StreamCipher.prototype.encrypt = function(word_array) {
      var i, _i, _ref, _ref1;
      for (i = _i = 0, _ref = word_array.words.length, _ref1 = this.bsiw; _ref1 > 0 ? _i < _ref : _i > _ref; i = _i += _ref1) {
        this.encryptBlock(word_array, i);
      }
      return word_array;
    };

    StreamCipher.prototype.bulk_encrypt = function(_arg, cb) {
      var async_args, input, progress_hook, slice_args, what,
        _this = this;
      input = _arg.input, progress_hook = _arg.progress_hook, what = _arg.what;
      slice_args = {
        update: function(lo, hi) {
          var i, _i, _ref, _results;
          _results = [];
          for (i = _i = lo, _ref = _this.bsiw; _ref > 0 ? _i < hi : _i > hi; i = _i += _ref) {
            _results.push(_this.encryptBlock(input, i));
          }
          return _results;
        },
        finalize: function() {
          return input;
        },
        default_n: this.bsiw * 1024
      };
      async_args = {
        progress_hook: progress_hook,
        cb: cb,
        what: what
      };
      return util.bulk(input.sigBytes, slice_args, async_args);
    };

    return StreamCipher;

  })();

  exports.BlockCipher = BlockCipher;

  exports.Hasher = Hasher;

  exports.BufferedBlockAlgorithm = BufferedBlockAlgorithm;

  exports.StreamCipher = StreamCipher;

}).call(this);

},{"./util":29,"./wordarray":30}],11:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var CombineBase, Concat, HMAC, SHA3, SHA512, WordArray, XOR, bulk_sign, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };



  _ref = require('./hmac'), HMAC = _ref.HMAC, bulk_sign = _ref.bulk_sign;

  SHA512 = require('./sha512').SHA512;

  SHA3 = require('./sha3').SHA3;

  WordArray = require('./wordarray').WordArray;

  CombineBase = (function() {
    function CombineBase() {
      this.hasherBlockSize = this.hashers[0].hasherBlockSize;
      this.hasherBlockSizeBytes = this.hasherBlockSize * 4;
      this.reset();
    }

    CombineBase.prototype.reset = function() {
      var h, _i, _len, _ref1;
      _ref1 = this.hashers;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        h = _ref1[_i];
        h.reset();
      }
      return this;
    };

    CombineBase.prototype.update = function(w) {
      var h, _i, _len, _ref1;
      _ref1 = this.hashers;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        h = _ref1[_i];
        h.update(w);
      }
      return this;
    };

    CombineBase.prototype.scrub = function() {
      var h, _i, _len, _ref1;
      _ref1 = this.hashers;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        h = _ref1[_i];
        h.scrub();
      }
      return this;
    };

    CombineBase.prototype.finalize = function(w) {
      var h, hashes, out, _i, _len, _ref1;
      hashes = (function() {
        var _i, _len, _ref1, _results;
        _ref1 = this.hashers;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          h = _ref1[_i];
          _results.push(h.finalize(w));
        }
        return _results;
      }).call(this);
      out = hashes[0];
      _ref1 = hashes.slice(1);
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        h = _ref1[_i];
        this._coalesce(out, h);
        h.scrub();
      }
      return out;
    };

    return CombineBase;

  })();

  Concat = (function(_super) {
    __extends(Concat, _super);

    function Concat(key, klasses) {
      var hm, i, klass, subkey, subkeys;
      if (klasses == null) {
        klasses = [SHA512, SHA3];
      }
      subkeys = key.split(klasses.length);
      this.hashers = (function() {
        var _i, _len, _results;
        _results = [];
        for (i = _i = 0, _len = klasses.length; _i < _len; i = ++_i) {
          klass = klasses[i];
          subkey = subkeys[i];
          hm = new HMAC(subkey, klass);
          subkey.scrub();
          _results.push(hm);
        }
        return _results;
      })();
      Concat.__super__.constructor.call(this);
    }

    Concat.get_output_size = function() {
      return SHA512.output_size + SHA3.output_size;
    };

    Concat.prototype._coalesce = function(out, h) {
      return out.concat(h);
    };

    Concat.prototype.get_output_size = function() {
      var h, tot, _i, _len, _ref1;
      tot = 0;
      _ref1 = this.hashers;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        h = _ref1[_i];
        tot += h.get_output_size();
      }
      return tot;
    };

    Concat.sign = function(_arg) {
      var input, key;
      key = _arg.key, input = _arg.input;
      return (new Concat(key)).finalize(input);
    };

    Concat.bulk_sign = function(args, cb) {
      args.klass = Concat;
      args.what = "HMAC-SHA512-SHA3";
      return bulk_sign(args, cb);
    };

    return Concat;

  })(CombineBase);

  XOR = (function(_super) {
    __extends(XOR, _super);

    function XOR(key, klasses) {
      var klass;
      if (klasses == null) {
        klasses = [SHA512, SHA3];
      }
      this.hashers = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = klasses.length; _i < _len; _i++) {
          klass = klasses[_i];
          _results.push(new HMAC(key, klass));
        }
        return _results;
      })();
      XOR.__super__.constructor.call(this);
    }

    XOR.prototype.reset = function() {
      var h, i, _i, _len, _ref1;
      XOR.__super__.reset.call(this);
      _ref1 = this.hashers;
      for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
        h = _ref1[i];
        h.update(new WordArray([i]));
      }
      return this;
    };

    XOR.get_output_size = function() {
      return Math.max(SHA512.output_size, SHA3.output_size);
    };

    XOR.prototype._coalesce = function(out, h) {
      return out.xor(h, {});
    };

    XOR.prototype.get_output_size = function() {
      var h;
      return Math.max.apply(Math, (function() {
        var _i, _len, _ref1, _results;
        _ref1 = this.hashers;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          h = _ref1[_i];
          _results.push(h.get_output_size());
        }
        return _results;
      }).call(this));
    };

    XOR.sign = function(_arg) {
      var input, key;
      key = _arg.key, input = _arg.input;
      return (new XOR(key)).finalize(input);
    };

    XOR.bulk_sign = function(arg, cb) {
      arg.klass = XOR;
      arg.what = "HMAC-SHA512-XOR-SHA3";
      return bulk_sign(arg, cb);
    };

    return XOR;

  })(CombineBase);

  exports.Concat = Concat;

  exports.XOR = XOR;

}).call(this);

},{"./hmac":16,"./sha3":26,"./sha512":27,"./wordarray":30}],12:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var Cipher, Counter, StreamCipher, WordArray, bulk_encrypt, encrypt, iced, __iced_k, __iced_k_noop,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  WordArray = require('./wordarray').WordArray;

  StreamCipher = require('./algbase').StreamCipher;

  Counter = (function() {
    Counter.prototype.WORD_MAX = 0xffffffff;

    function Counter(_arg) {
      var i, len, value;
      value = _arg.value, len = _arg.len;
      this._value = value != null ? value.clone() : (len == null ? len = 2 : void 0, new WordArray((function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; 0 <= len ? _i < len : _i > len; i = 0 <= len ? ++_i : --_i) {
          _results.push(0);
        }
        return _results;
      })()));
    }

    Counter.prototype.inc = function() {
      var go, i;
      go = true;
      i = this._value.words.length - 1;
      while (go && i >= 0) {
        if ((++this._value.words[i]) > Counter.WORD_MAX) {
          this._value.words[i] = 0;
        } else {
          go = false;
        }
        i--;
      }
      return this;
    };

    Counter.prototype.inc_le = function() {
      var go, i;
      go = true;
      i = 0;
      while (go && i < this._value.words.length) {
        if ((++this._value.words[i]) > Counter.WORD_MAX) {
          this._value.words[i] = 0;
        } else {
          go = false;
        }
        i++;
      }
      return this;
    };

    Counter.prototype.get = function() {
      return this._value;
    };

    Counter.prototype.copy = function() {
      return this._value.clone();
    };

    return Counter;

  })();

  Cipher = (function(_super) {
    __extends(Cipher, _super);

    function Cipher(_arg) {
      this.block_cipher = _arg.block_cipher, this.iv = _arg.iv;
      Cipher.__super__.constructor.call(this);
      this.bsiw = this.block_cipher.blockSize / 4;
      if (!(this.iv.sigBytes === this.block_cipher.blockSize)) {
        throw new Error("IV is wrong length (" + this.iv.sigBytes + ")");
      }
      this.ctr = new Counter({
        value: this.iv
      });
    }

    Cipher.prototype.scrub = function() {
      return this.block_cipher.scrub();
    };

    Cipher.prototype.get_pad = function() {
      var pad;
      pad = this.ctr.copy();
      this.ctr.inc();
      this.block_cipher.encryptBlock(pad.words);
      return pad;
    };

    return Cipher;

  })(StreamCipher);

  encrypt = function(_arg) {
    var block_cipher, cipher, input, iv, ret;
    block_cipher = _arg.block_cipher, iv = _arg.iv, input = _arg.input;
    cipher = new Cipher({
      block_cipher: block_cipher,
      iv: iv
    });
    ret = cipher.encrypt(input);
    cipher.scrub();
    return ret;
  };

  bulk_encrypt = function(_arg, cb) {
    var block_cipher, cipher, input, iv, progress_hook, ret, what, ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    block_cipher = _arg.block_cipher, iv = _arg.iv, input = _arg.input, progress_hook = _arg.progress_hook, what = _arg.what;
    cipher = new Cipher({
      block_cipher: block_cipher,
      iv: iv
    });
    (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral,
        filename: "src/ctr.iced",
        funcname: "bulk_encrypt"
      });
      cipher.bulk_encrypt({
        input: input,
        progress_hook: progress_hook,
        what: what
      }, __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            return ret = arguments[0];
          };
        })(),
        lineno: 121
      }));
      __iced_deferrals._fulfill();
    })(function() {
      return cb(ret);
    });
  };

  exports.Counter = Counter;

  exports.Cipher = Cipher;

  exports.encrypt = encrypt;

  exports.bulk_encrypt = bulk_encrypt;

}).call(this);

},{"./algbase":10,"./wordarray":30,"iced-coffee-script/lib/coffee-script/iced":5}],13:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var AES, Base, Concat, Decryptor, SHA512, Salsa20, TwoFish, V, WordArray, ctr, decrypt, iced, make_esc, salsa20, __iced_k, __iced_k_noop, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  WordArray = require('./wordarray').WordArray;

  salsa20 = require('./salsa20');

  AES = require('./aes').AES;

  TwoFish = require('./twofish').TwoFish;

  ctr = require('./ctr');

  Concat = require('./combine').Concat;

  SHA512 = require('./sha512').SHA512;

  Salsa20 = require('./salsa20').Salsa20;

  _ref = require('./enc'), Base = _ref.Base, V = _ref.V;

  make_esc = require('iced-error').make_esc;

  Decryptor = (function(_super) {
    __extends(Decryptor, _super);

    function Decryptor(_arg) {
      var enc, key;
      key = _arg.key, enc = _arg.enc;
      Decryptor.__super__.constructor.call(this, {
        key: key
      });
      if (enc != null) {
        this.key = enc.key;
        this.derived_keys = enc.derived_keys;
      }
    }

    Decryptor.prototype.read_header = function(cb) {
      var err, wa;
      err = (wa = this.ct.unshift(2)) == null ? new Error("Ciphertext underrun in header") : (this.version = V[wa.words[1]]) == null ? new Error("bad header; couldn't find a good version (got " + wa.words[1] + ")") : wa.words[0] !== this.version.header[0] ? new Error("Bad header: unrecognized magic value") : null;
      return cb(err);
    };

    Decryptor.prototype.verify_sig = function(key, cb) {
      var computed, err, received, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(__iced_k) {
        if ((received = _this.ct.unshift(Concat.get_output_size() / 4)) == null) {
          return __iced_k(err = new Error("Ciphertext underrun in signature"));
        } else {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "src/dec.iced",
              funcname: "Decryptor.verify_sig"
            });
            _this.sign({
              input: _this.ct,
              key: key,
              salt: _this.salt
            }, __iced_deferrals.defer({
              assign_fn: (function() {
                return function() {
                  err = arguments[0];
                  return computed = arguments[1];
                };
              })(),
              lineno: 63
            }));
            __iced_deferrals._fulfill();
          })(function() {
            return __iced_k(err = err != null ? err : received.equal(computed) ? null : new Error('Signature mismatch or bad decryption key'));
          });
        }
      })(function() {
        return cb(err);
      });
    };

    Decryptor.prototype.unshift_iv = function(n_bytes, which, cb) {
      var err, iv;
      err = (iv = this.ct.unshift(n_bytes / 4)) != null ? null : new Error("Ciphertext underrun in " + which);
      return cb(err, iv);
    };

    Decryptor.prototype.read_salt = function(cb) {
      var err;
      err = (this.salt = this.ct.unshift(this.version.salt_size / 4)) == null ? new Error("Ciphertext underrrun in read_salt") : null;
      return cb(err);
    };

    Decryptor.prototype.generate_keys = function(_arg, cb) {
      var err, keys, progress_hook, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      progress_hook = _arg.progress_hook;
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/dec.iced",
          funcname: "Decryptor.generate_keys"
        });
        _this.kdf({
          salt: _this.salt,
          progress_hook: progress_hook
        }, __iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              err = arguments[0];
              return keys = arguments[1];
            };
          })(),
          lineno: 114
        }));
        __iced_deferrals._fulfill();
      })(function() {
        return cb(err, keys);
      });
    };

    Decryptor.prototype.run = function(_arg, cb) {
      var ct1, ct2, data, esc, iv, progress_hook, pt, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      data = _arg.data, progress_hook = _arg.progress_hook;
      esc = make_esc(cb, "Decryptor::run");
      this.ct = WordArray.from_buffer(data);
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/dec.iced",
          funcname: "Decryptor.run"
        });
        _this.read_header(esc(__iced_deferrals.defer({
          lineno: 141
        })));
        __iced_deferrals._fulfill();
      })(function() {
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "src/dec.iced",
            funcname: "Decryptor.run"
          });
          _this.read_salt(esc(__iced_deferrals.defer({
            lineno: 142
          })));
          __iced_deferrals._fulfill();
        })(function() {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "src/dec.iced",
              funcname: "Decryptor.run"
            });
            _this.generate_keys({
              progress_hook: progress_hook
            }, esc(__iced_deferrals.defer({
              assign_fn: (function(__slot_1) {
                return function() {
                  return __slot_1.keys = arguments[0];
                };
              })(_this),
              lineno: 143
            })));
            __iced_deferrals._fulfill();
          })(function() {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "src/dec.iced",
                funcname: "Decryptor.run"
              });
              _this.verify_sig(_this.keys.hmac, esc(__iced_deferrals.defer({
                lineno: 144
              })));
              __iced_deferrals._fulfill();
            })(function() {
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "src/dec.iced",
                  funcname: "Decryptor.run"
                });
                _this.unshift_iv(AES.ivSize, "AES", esc(__iced_deferrals.defer({
                  assign_fn: (function() {
                    return function() {
                      return iv = arguments[0];
                    };
                  })(),
                  lineno: 145
                })));
                __iced_deferrals._fulfill();
              })(function() {
                (function(__iced_k) {
                  __iced_deferrals = new iced.Deferrals(__iced_k, {
                    parent: ___iced_passed_deferral,
                    filename: "src/dec.iced",
                    funcname: "Decryptor.run"
                  });
                  _this.run_aes({
                    iv: iv,
                    input: _this.ct,
                    key: _this.keys.aes,
                    progress_hook: progress_hook
                  }, esc(__iced_deferrals.defer({
                    assign_fn: (function() {
                      return function() {
                        return ct2 = arguments[0];
                      };
                    })(),
                    lineno: 146
                  })));
                  __iced_deferrals._fulfill();
                })(function() {
                  (function(__iced_k) {
                    __iced_deferrals = new iced.Deferrals(__iced_k, {
                      parent: ___iced_passed_deferral,
                      filename: "src/dec.iced",
                      funcname: "Decryptor.run"
                    });
                    _this.unshift_iv(TwoFish.ivSize, "2fish", esc(__iced_deferrals.defer({
                      assign_fn: (function() {
                        return function() {
                          return iv = arguments[0];
                        };
                      })(),
                      lineno: 147
                    })));
                    __iced_deferrals._fulfill();
                  })(function() {
                    (function(__iced_k) {
                      __iced_deferrals = new iced.Deferrals(__iced_k, {
                        parent: ___iced_passed_deferral,
                        filename: "src/dec.iced",
                        funcname: "Decryptor.run"
                      });
                      _this.run_twofish({
                        iv: iv,
                        input: _this.ct,
                        key: _this.keys.twofish,
                        progress_hook: progress_hook
                      }, esc(__iced_deferrals.defer({
                        assign_fn: (function() {
                          return function() {
                            return ct1 = arguments[0];
                          };
                        })(),
                        lineno: 148
                      })));
                      __iced_deferrals._fulfill();
                    })(function() {
                      (function(__iced_k) {
                        __iced_deferrals = new iced.Deferrals(__iced_k, {
                          parent: ___iced_passed_deferral,
                          filename: "src/dec.iced",
                          funcname: "Decryptor.run"
                        });
                        _this.unshift_iv(Salsa20.ivSize, "Salsa", esc(__iced_deferrals.defer({
                          assign_fn: (function() {
                            return function() {
                              return iv = arguments[0];
                            };
                          })(),
                          lineno: 149
                        })));
                        __iced_deferrals._fulfill();
                      })(function() {
                        (function(__iced_k) {
                          __iced_deferrals = new iced.Deferrals(__iced_k, {
                            parent: ___iced_passed_deferral,
                            filename: "src/dec.iced",
                            funcname: "Decryptor.run"
                          });
                          _this.run_salsa20({
                            iv: iv,
                            input: _this.ct,
                            key: _this.keys.salsa20,
                            output_iv: false,
                            progress_hook: progress_hook
                          }, esc(__iced_deferrals.defer({
                            assign_fn: (function() {
                              return function() {
                                return pt = arguments[0];
                              };
                            })(),
                            lineno: 150
                          })));
                          __iced_deferrals._fulfill();
                        })(function() {
                          return cb(null, pt.to_buffer());
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    };

    return Decryptor;

  })(Base);

  decrypt = function(_arg, cb) {
    var data, dec, err, key, progress_hook, pt, ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    key = _arg.key, data = _arg.data, progress_hook = _arg.progress_hook;
    dec = new Decryptor({
      key: key
    });
    (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral,
        filename: "src/dec.iced",
        funcname: "decrypt"
      });
      dec.run({
        data: data,
        progress_hook: progress_hook
      }, __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            err = arguments[0];
            return pt = arguments[1];
          };
        })(),
        lineno: 168
      }));
      __iced_deferrals._fulfill();
    })(function() {
      dec.scrub();
      return cb(err, pt);
    });
  };

  exports.Decryptor = Decryptor;

  exports.decrypt = decrypt;

}).call(this);

},{"./aes":9,"./combine":11,"./ctr":12,"./enc":15,"./salsa20":21,"./sha512":27,"./twofish":28,"./wordarray":30,"iced-coffee-script/lib/coffee-script/iced":5,"iced-error":6}],14:[function(require,module,exports){
var Buffer=require("__browserify_Buffer").Buffer;// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var ADRBG, DRBG, Lock, WordArray, XOR, hmac, iced, sha3, sha512, __iced_k, __iced_k_noop;

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  hmac = require('./hmac');

  XOR = require('./combine').XOR;

  sha512 = require('./sha512');

  sha3 = require('./sha3');

  WordArray = require('./wordarray').WordArray;

  Lock = require('./lock').Lock;

  DRBG = (function() {
    function DRBG(entropy, personalization_string, hmac_func) {
      this.hmac = hmac_func || hmac.sign;
      this.security_strength = 256;
      entropy = this.check_entropy(entropy);
      personalization_string || (personalization_string = new WordArray([]));
      this._instantiate(entropy, personalization_string);
    }

    DRBG.prototype.check_entropy = function(entropy, reseed) {
      if (reseed == null) {
        reseed = false;
      }
      if ((entropy.sigBytes * 8 * 2) < ((reseed ? 2 : 3) * this.security_strength)) {
        throw new Error("entropy must be at least " + (1.5 * this.security_strength) + " bits.");
      }
      return entropy;
    };

    DRBG.prototype._hmac = function(key, input) {
      return this.hmac({
        key: key,
        input: input
      });
    };

    DRBG.prototype._update = function(provided_data) {
      var V, V_in;
      V = new WordArray([0], 1);
      if (provided_data != null) {
        V = V.concat(provided_data);
      }
      V_in = this.V.clone().concat(V);
      this.K = this._hmac(this.K, V_in);
      V_in.scrub();
      V.scrub();
      this.V = this._hmac(this.K, this.V);
      if (provided_data != null) {
        V_in = this.V.clone().concat(new WordArray([1 << 24], 1)).concat(provided_data);
        this.K = this._hmac(this.K, V_in);
        V_in.scrub();
        this.V = this._hmac(this.K, this.V);
      }
      return provided_data != null ? provided_data.scrub() : void 0;
    };

    DRBG.prototype._instantiate = function(entropy, personalization_string) {
      var i, n, seed_material;
      seed_material = entropy.concat(personalization_string);
      n = 64;
      this.K = WordArray.from_buffer(new Buffer((function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {
          _results.push(0);
        }
        return _results;
      })()));
      this.V = WordArray.from_buffer(new Buffer((function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {
          _results.push(1);
        }
        return _results;
      })()));
      this._update(seed_material);
      entropy.scrub();
      return this.reseed_counter = 1;
    };

    DRBG.prototype.reseed = function(entropy) {
      this._update(this.check_entropy(entropy, true));
      return this.reseed_counter = 1;
    };

    DRBG.prototype.generate = function(num_bytes) {
      var i, tmp, _ref;
      if ((num_bytes * 8) > 7500) {
        throw new Error("generate cannot generate > 7500 bits in 1 call.");
      }
      if (this.reseed_counter >= 10000) {
        throw new Error("Need a reseed!");
      }
      tmp = [];
      i = 0;
      while ((tmp.length === 0) || (tmp.length * tmp[0].length * 4) < num_bytes) {
        this.V = this._hmac(this.K, this.V);
        tmp.push(this.V.words);
      }
      this._update();
      this.reseed_counter += 1;
      return (new WordArray((_ref = []).concat.apply(_ref, tmp))).truncate(num_bytes);
    };

    return DRBG;

  })();

  ADRBG = (function() {
    function ADRBG(gen_seed, hmac) {
      this.gen_seed = gen_seed;
      this.hmac = hmac;
      this.drbg = null;
      this.lock = new Lock();
    }

    ADRBG.prototype.generate = function(n, cb) {
      var ret, seed, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/drbg.iced",
          funcname: "ADRBG.generate"
        });
        _this.lock.acquire(__iced_deferrals.defer({
          lineno: 148
        }));
        __iced_deferrals._fulfill();
      })(function() {
        (function(__iced_k) {
          if (_this.drbg == null) {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "src/drbg.iced",
                funcname: "ADRBG.generate"
              });
              _this.gen_seed(256, __iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    return seed = arguments[0];
                  };
                })(),
                lineno: 150
              }));
              __iced_deferrals._fulfill();
            })(function() {
              return __iced_k(_this.drbg = new DRBG(seed, null, _this.hmac));
            });
          } else {
            return __iced_k();
          }
        })(function() {
          (function(__iced_k) {
            if (_this.drbg.reseed_counter > 100) {
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "src/drbg.iced",
                  funcname: "ADRBG.generate"
                });
                _this.gen_seed(256, __iced_deferrals.defer({
                  assign_fn: (function() {
                    return function() {
                      return seed = arguments[0];
                    };
                  })(),
                  lineno: 153
                }));
                __iced_deferrals._fulfill();
              })(function() {
                return __iced_k(_this.drbg.reseed(seed));
              });
            } else {
              return __iced_k();
            }
          })(function() {
            ret = _this.drbg.generate(n);
            _this.lock.release();
            return cb(ret);
          });
        });
      });
    };

    return ADRBG;

  })();

  exports.DRBG = DRBG;

  exports.ADRBG = ADRBG;

}).call(this);

},{"./combine":11,"./hmac":16,"./lock":17,"./sha3":26,"./sha512":27,"./wordarray":30,"__browserify_Buffer":3,"iced-coffee-script/lib/coffee-script/iced":5}],15:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var AES, Base, Concat, Encryptor, HMAC_SHA256, PBKDF2, SHA512, Scrypt, TwoFish, V, WordArray, XOR, ctr, encrypt, iced, make_esc, prng, salsa20, util, __iced_k, __iced_k_noop, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  WordArray = require('./wordarray').WordArray;

  salsa20 = require('./salsa20');

  AES = require('./aes').AES;

  TwoFish = require('./twofish').TwoFish;

  ctr = require('./ctr');

  _ref = require('./combine'), XOR = _ref.XOR, Concat = _ref.Concat;

  SHA512 = require('./sha512').SHA512;

  PBKDF2 = require('./pbkdf2').PBKDF2;

  Scrypt = require('./scrypt').Scrypt;

  util = require('./util');

  prng = require('./prng');

  make_esc = require('iced-error').make_esc;

  HMAC_SHA256 = require('./hmac').HMAC_SHA256;

  V = {
    "1": {
      header: [0x1c94d7de, 1],
      salt_size: 8,
      xsalsa20_rev: true,
      kdf: {
        klass: PBKDF2,
        opts: {
          c: 1024,
          klass: XOR
        }
      },
      hmac_key_size: 768 / 8
    },
    "2": {
      header: [0x1c94d7de, 2],
      salt_size: 16,
      xsalsa20_rev: true,
      kdf: {
        klass: Scrypt,
        opts: {
          c: 64,
          klass: XOR,
          N: 12,
          r: 8,
          p: 1
        }
      },
      hmac_key_size: 768 / 8
    },
    "3": {
      header: [0x1c94d7de, 3],
      salt_size: 16,
      xsalsa20_rev: false,
      kdf: {
        klass: Scrypt,
        opts: {
          c: 1,
          klass: HMAC_SHA256,
          N: 15,
          r: 8,
          p: 1
        }
      },
      hmac_key_size: 768 / 8
    }
  };

  Base = (function() {
    function Base(_arg) {
      var key, version;
      key = _arg.key, version = _arg.version;
      this.version = V[version != null ? version : 1];
      if (this.version == null) {
        throw new Error("unknown version: " + version);
      }
      this.set_key(key);
      this.derived_keys = {};
    }

    Base.prototype.kdf = function(_arg, cb) {
      var args, dkLen, end, extra_keymaterial, i, k, key, keys, len, lens, order, progress_hook, raw, salt, salt_hex, v, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      salt = _arg.salt, extra_keymaterial = _arg.extra_keymaterial, progress_hook = _arg.progress_hook;
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/enc.iced",
          funcname: "Base.kdf"
        });
        _this._check_scrubbed(_this.key, "in KDF", cb, __iced_deferrals.defer({
          lineno: 90
        }));
        __iced_deferrals._fulfill();
      })(function() {
        salt_hex = salt.to_hex();
        key = _this.key.clone();
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "src/enc.iced",
            funcname: "Base.kdf"
          });
          _this._check_scrubbed(key, "KDF", cb, __iced_deferrals.defer({
            lineno: 98
          }));
          __iced_deferrals._fulfill();
        })(function() {
          (function(__iced_k) {
            if ((keys = _this.derived_keys[salt_hex]) == null) {
              _this._kdf = new _this.version.kdf.klass(_this.version.kdf.opts);
              lens = {
                hmac: _this.version.hmac_key_size,
                aes: AES.keySize,
                twofish: TwoFish.keySize,
                salsa20: salsa20.Salsa20.keySize
              };
              order = ['hmac', 'aes', 'twofish', 'salsa20'];
              dkLen = extra_keymaterial || 0;
              for (k in lens) {
                v = lens[k];
                dkLen += v;
              }
              args = {
                dkLen: dkLen,
                key: key,
                progress_hook: progress_hook,
                salt: salt
              };
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "src/enc.iced",
                  funcname: "Base.kdf"
                });
                _this._kdf.run(args, __iced_deferrals.defer({
                  assign_fn: (function() {
                    return function() {
                      return raw = arguments[0];
                    };
                  })(),
                  lineno: 117
                }));
                __iced_deferrals._fulfill();
              })(function() {
                var _i, _len;
                keys = {};
                i = 0;
                for (_i = 0, _len = order.length; _i < _len; _i++) {
                  k = order[_i];
                  v = lens[k];
                  len = v / 4;
                  end = i + len;
                  keys[k] = new WordArray(raw.words.slice(i, end));
                  i = end;
                }
                keys.extra = (new WordArray(raw.words.slice(end))).to_buffer();
                return __iced_k(_this.derived_keys[salt_hex] = keys);
              });
            } else {
              return __iced_k();
            }
          })(function() {
            return cb(null, keys);
          });
        });
      });
    };

    Base.prototype.set_key = function(key) {
      var wakey;
      if (key != null) {
        wakey = WordArray.from_buffer(key);
        if (!this.key || !this.key.equal(wakey)) {
          this.scrub();
          return this.key = wakey;
        }
      } else {
        return this.scrub();
      }
    };

    Base.prototype._check_scrubbed = function(key, where, ecb, okcb) {
      if ((key != null) && !key.is_scrubbed()) {
        return okcb();
      } else {
        return ecb(new Error("" + where + ": Failed due to scrubbed key!"), null);
      }
    };

    Base.prototype.sign = function(_arg, cb) {
      var input, key, out, progress_hook, salt, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      input = _arg.input, key = _arg.key, salt = _arg.salt, progress_hook = _arg.progress_hook;
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/enc.iced",
          funcname: "Base.sign"
        });
        _this._check_scrubbed(key, "HMAC", cb, __iced_deferrals.defer({
          lineno: 175
        }));
        __iced_deferrals._fulfill();
      })(function() {
        input = (new WordArray(_this.version.header)).concat(salt).concat(input);
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "src/enc.iced",
            funcname: "Base.sign"
          });
          Concat.bulk_sign({
            key: key,
            input: input,
            progress_hook: progress_hook
          }, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return out = arguments[0];
              };
            })(),
            lineno: 177
          }));
          __iced_deferrals._fulfill();
        })(function() {
          input.scrub();
          return cb(null, out);
        });
      });
    };

    Base.prototype.run_salsa20 = function(_arg, cb) {
      var args, ct, input, iv, key, output_iv, progress_hook, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      input = _arg.input, key = _arg.key, iv = _arg.iv, output_iv = _arg.output_iv, progress_hook = _arg.progress_hook;
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/enc.iced",
          funcname: "Base.run_salsa20"
        });
        _this._check_scrubbed(key, "Salsa20", cb, __iced_deferrals.defer({
          lineno: 193
        }));
        __iced_deferrals._fulfill();
      })(function() {
        args = {
          input: input,
          progress_hook: progress_hook,
          key: key,
          iv: iv
        };
        if (_this.version.xsalsa20_rev) {
          args.key = key.clone().endian_reverse();
          args.iv = iv.clone().endian_reverse();
        }
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "src/enc.iced",
            funcname: "Base.run_salsa20"
          });
          salsa20.bulk_encrypt(args, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return ct = arguments[0];
              };
            })(),
            lineno: 205
          }));
          __iced_deferrals._fulfill();
        })(function() {
          if (output_iv) {
            ct = iv.clone().concat(ct);
          }
          if (_this.version.xsalsa20_rev) {
            args.key.scrub();
            args.iv.scrub();
          }
          return cb(null, ct);
        });
      });
    };

    Base.prototype.run_twofish = function(_arg, cb) {
      var block_cipher, ct, input, iv, key, progress_hook, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      input = _arg.input, key = _arg.key, iv = _arg.iv, progress_hook = _arg.progress_hook;
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/enc.iced",
          funcname: "Base.run_twofish"
        });
        _this._check_scrubbed(key, "TwoFish", cb, __iced_deferrals.defer({
          lineno: 228
        }));
        __iced_deferrals._fulfill();
      })(function() {
        block_cipher = new TwoFish(key);
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "src/enc.iced",
            funcname: "Base.run_twofish"
          });
          ctr.bulk_encrypt({
            block_cipher: block_cipher,
            iv: iv,
            input: input,
            progress_hook: progress_hook,
            what: "twofish"
          }, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return ct = arguments[0];
              };
            })(),
            lineno: 230
          }));
          __iced_deferrals._fulfill();
        })(function() {
          block_cipher.scrub();
          return cb(null, iv.clone().concat(ct));
        });
      });
    };

    Base.prototype.run_aes = function(_arg, cb) {
      var block_cipher, ct, input, iv, key, progress_hook, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      input = _arg.input, key = _arg.key, iv = _arg.iv, progress_hook = _arg.progress_hook;
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/enc.iced",
          funcname: "Base.run_aes"
        });
        _this._check_scrubbed(key, "AES", cb, __iced_deferrals.defer({
          lineno: 245
        }));
        __iced_deferrals._fulfill();
      })(function() {
        block_cipher = new AES(key);
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "src/enc.iced",
            funcname: "Base.run_aes"
          });
          ctr.bulk_encrypt({
            block_cipher: block_cipher,
            iv: iv,
            input: input,
            progress_hook: progress_hook,
            what: "aes"
          }, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return ct = arguments[0];
              };
            })(),
            lineno: 247
          }));
          __iced_deferrals._fulfill();
        })(function() {
          block_cipher.scrub();
          return cb(null, iv.clone().concat(ct));
        });
      });
    };

    Base.prototype.scrub = function() {
      var key, key_ring, salt, _i, _len, _ref1;
      if (this.key != null) {
        this.key.scrub();
      }
      if (this.derived_keys != null) {
        _ref1 = this.derived_keys;
        for (salt in _ref1) {
          key_ring = _ref1[salt];
          for (_i = 0, _len = key_ring.length; _i < _len; _i++) {
            key = key_ring[_i];
            key.scrub();
          }
        }
      }
      this.derived_keys = {};
      if (this.salt != null) {
        this.salt.scrub();
      }
      this.salt = null;
      return this.key = null;
    };

    return Base;

  })();

  Encryptor = (function(_super) {
    __extends(Encryptor, _super);

    function Encryptor(_arg) {
      var key, rng, version;
      key = _arg.key, rng = _arg.rng, version = _arg.version;
      Encryptor.__super__.constructor.call(this, {
        key: key,
        version: version
      });
      this.rng = rng || prng.generate;
    }

    Encryptor.prototype.pick_random_ivs = function(_arg, cb) {
      var iv_lens, ivs, k, progress_hook, v, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      progress_hook = _arg.progress_hook;
      iv_lens = {
        aes: AES.ivSize,
        twofish: TwoFish.ivSize,
        salsa20: salsa20.Salsa20.ivSize
      };
      ivs = {};
      (function(__iced_k) {
        var _i, _k, _keys, _ref1, _results, _while;
        _ref1 = iv_lens;
        _keys = (function() {
          var _results1;
          _results1 = [];
          for (_k in _ref1) {
            _results1.push(_k);
          }
          return _results1;
        })();
        _i = 0;
        _results = [];
        _while = function(__iced_k) {
          var _break, _continue, _next;
          _break = function() {
            return __iced_k(_results);
          };
          _continue = function() {
            return iced.trampoline(function() {
              ++_i;
              return _while(__iced_k);
            });
          };
          _next = function(__iced_next_arg) {
            _results.push(__iced_next_arg);
            return _continue();
          };
          if (!(_i < _keys.length)) {
            return _break();
          } else {
            k = _keys[_i];
            v = _ref1[k];
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "src/enc.iced",
                funcname: "Encryptor.pick_random_ivs"
              });
              _this.rng(v, __iced_deferrals.defer({
                assign_fn: (function(__slot_1, __slot_2) {
                  return function() {
                    return __slot_1[__slot_2] = arguments[0];
                  };
                })(ivs, k),
                lineno: 349
              }));
              __iced_deferrals._fulfill();
            })(_next);
          }
        };
        _while(__iced_k);
      })(function() {
        return cb(ivs);
      });
    };

    Encryptor.prototype.resalt = function(_arg, cb) {
      var err, extra_keymaterial, progress_hook, salt, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      salt = _arg.salt, extra_keymaterial = _arg.extra_keymaterial, progress_hook = _arg.progress_hook;
      err = null;
      (function(__iced_k) {
        if (salt == null) {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "src/enc.iced",
              funcname: "Encryptor.resalt"
            });
            _this.rng(_this.version.salt_size, __iced_deferrals.defer({
              assign_fn: (function(__slot_1) {
                return function() {
                  return __slot_1.salt = arguments[0];
                };
              })(_this),
              lineno: 365
            }));
            __iced_deferrals._fulfill();
          })(__iced_k);
        } else {
          return __iced_k(salt.length !== _this.version.salt_size ? err = new Error("Need a salt of exactly " + _this.version.salt_size + " bytes (got " + salt.length + ")") : _this.salt = WordArray.alloc(salt));
        }
      })(function() {
        (function(__iced_k) {
          if (err == null) {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "src/enc.iced",
                funcname: "Encryptor.resalt"
              });
              _this.kdf({
                extra_keymaterial: extra_keymaterial,
                progress_hook: progress_hook,
                salt: _this.salt
              }, __iced_deferrals.defer({
                assign_fn: (function(__slot_1) {
                  return function() {
                    err = arguments[0];
                    return __slot_1.keys = arguments[1];
                  };
                })(_this),
                lineno: 371
              }));
              __iced_deferrals._fulfill();
            })(__iced_k);
          } else {
            return __iced_k();
          }
        })(function() {
          return cb(err, _this.keys);
        });
      });
    };

    Encryptor.prototype.run = function(_arg, cb) {
      var ct1, ct2, ct3, data, esc, extra_keymaterial, ivs, progress_hook, pt, ret, salt, sig, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      data = _arg.data, salt = _arg.salt, extra_keymaterial = _arg.extra_keymaterial, progress_hook = _arg.progress_hook;
      esc = make_esc(cb, "Encryptor::run");
      (function(__iced_k) {
        if ((salt != null) || (_this.salt == null)) {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "src/enc.iced",
              funcname: "Encryptor.run"
            });
            _this.resalt({
              salt: salt,
              extra_keymaterial: extra_keymaterial,
              progress_hook: progress_hook
            }, esc(__iced_deferrals.defer({
              lineno: 402
            })));
            __iced_deferrals._fulfill();
          })(__iced_k);
        } else {
          return __iced_k();
        }
      })(function() {
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "src/enc.iced",
            funcname: "Encryptor.run"
          });
          _this.pick_random_ivs({
            progress_hook: progress_hook
          }, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return ivs = arguments[0];
              };
            })(),
            lineno: 403
          }));
          __iced_deferrals._fulfill();
        })(function() {
          pt = WordArray.from_buffer(data);
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "src/enc.iced",
              funcname: "Encryptor.run"
            });
            _this.run_salsa20({
              input: pt,
              key: _this.keys.salsa20,
              progress_hook: progress_hook,
              iv: ivs.salsa20,
              output_iv: true
            }, esc(__iced_deferrals.defer({
              assign_fn: (function() {
                return function() {
                  return ct1 = arguments[0];
                };
              })(),
              lineno: 405
            })));
            __iced_deferrals._fulfill();
          })(function() {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "src/enc.iced",
                funcname: "Encryptor.run"
              });
              _this.run_twofish({
                input: ct1,
                key: _this.keys.twofish,
                progress_hook: progress_hook,
                iv: ivs.twofish
              }, esc(__iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    return ct2 = arguments[0];
                  };
                })(),
                lineno: 406
              })));
              __iced_deferrals._fulfill();
            })(function() {
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "src/enc.iced",
                  funcname: "Encryptor.run"
                });
                _this.run_aes({
                  input: ct2,
                  key: _this.keys.aes,
                  progress_hook: progress_hook,
                  iv: ivs.aes
                }, esc(__iced_deferrals.defer({
                  assign_fn: (function() {
                    return function() {
                      return ct3 = arguments[0];
                    };
                  })(),
                  lineno: 407
                })));
                __iced_deferrals._fulfill();
              })(function() {
                (function(__iced_k) {
                  __iced_deferrals = new iced.Deferrals(__iced_k, {
                    parent: ___iced_passed_deferral,
                    filename: "src/enc.iced",
                    funcname: "Encryptor.run"
                  });
                  _this.sign({
                    input: ct3,
                    key: _this.keys.hmac,
                    progress_hook: progress_hook,
                    salt: _this.salt
                  }, esc(__iced_deferrals.defer({
                    assign_fn: (function() {
                      return function() {
                        return sig = arguments[0];
                      };
                    })(),
                    lineno: 408
                  })));
                  __iced_deferrals._fulfill();
                })(function() {
                  ret = (new WordArray(_this.version.header)).concat(_this.salt).concat(sig).concat(ct3).to_buffer();
                  util.scrub_buffer(data);
                  return cb(null, ret);
                });
              });
            });
          });
        });
      });
    };

    return Encryptor;

  })(Base);

  encrypt = function(_arg, cb) {
    var data, enc, err, key, progress_hook, ret, rng, version, ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    key = _arg.key, data = _arg.data, rng = _arg.rng, progress_hook = _arg.progress_hook, version = _arg.version;
    enc = new Encryptor({
      key: key,
      rng: rng,
      version: version
    });
    (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral,
        filename: "src/enc.iced",
        funcname: "encrypt"
      });
      enc.run({
        data: data,
        progress_hook: progress_hook
      }, __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            err = arguments[0];
            return ret = arguments[1];
          };
        })(),
        lineno: 436
      }));
      __iced_deferrals._fulfill();
    })(function() {
      enc.scrub();
      return cb(err, ret);
    });
  };

  exports.V = V;

  exports.encrypt = encrypt;

  exports.Base = Base;

  exports.Encryptor = Encryptor;

}).call(this);

},{"./aes":9,"./combine":11,"./ctr":12,"./hmac":16,"./pbkdf2":19,"./prng":20,"./salsa20":21,"./scrypt":22,"./sha512":27,"./twofish":28,"./util":29,"./wordarray":30,"iced-coffee-script/lib/coffee-script/iced":5,"iced-error":6}],16:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var HMAC, HMAC_SHA256, SHA256, SHA512, bulk_sign, iced, sign, util, __iced_k, __iced_k_noop,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  SHA512 = require('./sha512').SHA512;

  SHA256 = require('./sha256').SHA256;

  util = require('./util');

  HMAC = (function() {
    HMAC.outputSize = 512 / 8;

    HMAC.prototype.outputSize = HMAC.outputSize;

    function HMAC(key, klass) {
      var i, _i, _ref;
      if (klass == null) {
        klass = SHA512;
      }
      this.key = key.clone();
      this.hasher = new klass();
      this.hasherBlockSize = this.hasher.blockSize;
      this.hasherBlockSizeBytes = this.hasherBlockSize * 4;
      if (this.key.sigBytes > this.hasherBlockSizeBytes) {
        this.key = this.hasher.finalize(this.key);
      }
      this.key.clamp();
      this._oKey = this.key.clone();
      this._iKey = this.key.clone();
      for (i = _i = 0, _ref = this.hasherBlockSize; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        this._oKey.words[i] ^= 0x5c5c5c5c;
        this._iKey.words[i] ^= 0x36363636;
      }
      this._oKey.sigBytes = this._iKey.sigBytes = this.hasherBlockSizeBytes;
      this.reset();
    }

    HMAC.prototype.get_output_size = function() {
      return this.hasher.output_size;
    };

    HMAC.prototype.reset = function() {
      return this.hasher.reset().update(this._iKey);
    };

    HMAC.prototype.update = function(wa) {
      this.hasher.update(wa);
      return this;
    };

    HMAC.prototype.finalize = function(wa) {
      var innerHash, innerHash2, out;
      innerHash = this.hasher.finalize(wa);
      this.hasher.reset();
      innerHash2 = this._oKey.clone().concat(innerHash);
      out = this.hasher.finalize(innerHash2);
      innerHash.scrub();
      innerHash2.scrub();
      return out;
    };

    HMAC.prototype.scrub = function() {
      this.key.scrub();
      this._iKey.scrub();
      return this._oKey.scrub();
    };

    return HMAC;

  })();

  sign = function(_arg) {
    var eng, hash_class, input, key, out;
    key = _arg.key, input = _arg.input, hash_class = _arg.hash_class;
    eng = new HMAC(key, hash_class);
    out = eng.finalize(input.clamp());
    eng.scrub();
    return out;
  };

  bulk_sign = function(_arg, cb) {
    var eng, input, key, klass, progress_hook, res, slice_args, what, ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    key = _arg.key, input = _arg.input, progress_hook = _arg.progress_hook, klass = _arg.klass, what = _arg.what;
    klass || (klass = HMAC);
    what || (what = "hmac_sha512");
    eng = new klass(key);
    input.clamp();
    slice_args = {
      update: function(lo, hi) {
        return eng.update(input.slice(lo, hi));
      },
      finalize: function() {
        return eng.finalize();
      },
      default_n: eng.hasherBlockSize * 1000
    };
    (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral,
        filename: "src/hmac.iced",
        funcname: "bulk_sign"
      });
      util.bulk(input.sigBytes, slice_args, {
        what: what,
        progress_hook: progress_hook,
        cb: __iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              return res = arguments[0];
            };
          })(),
          lineno: 137
        })
      });
      __iced_deferrals._fulfill();
    })(function() {
      eng.scrub();
      return cb(res);
    });
  };

  exports.HMAC_SHA256 = HMAC_SHA256 = (function(_super) {
    __extends(HMAC_SHA256, _super);

    function HMAC_SHA256(key) {
      HMAC_SHA256.__super__.constructor.call(this, key, SHA256);
    }

    return HMAC_SHA256;

  })(HMAC);

  exports.HMAC = HMAC;

  exports.sign = sign;

  exports.bulk_sign = bulk_sign;

}).call(this);

},{"./sha256":25,"./sha512":27,"./util":29,"iced-coffee-script/lib/coffee-script/iced":5}],17:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var Lock, NamedLock, Table, iced, __iced_k, __iced_k_noop,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  Lock = (function() {
    function Lock() {
      this._open = true;
      this._waiters = [];
    }

    Lock.prototype.acquire = function(cb) {
      if (this._open) {
        this._open = false;
        return cb();
      } else {
        return this._waiters.push(cb);
      }
    };

    Lock.prototype.release = function() {
      var w;
      if (this._waiters.length) {
        w = this._waiters.shift();
        return w();
      } else {
        return this._open = true;
      }
    };

    Lock.prototype.open = function() {
      return this._open;
    };

    return Lock;

  })();

  NamedLock = (function(_super) {
    __extends(NamedLock, _super);

    function NamedLock(tab, name) {
      this.tab = tab;
      this.name = name;
      NamedLock.__super__.constructor.call(this);
      this.refs = 0;
    }

    NamedLock.prototype.incref = function() {
      return ++this.refs;
    };

    NamedLock.prototype.decref = function() {
      return --this.refs;
    };

    NamedLock.prototype.release = function() {
      NamedLock.__super__.release.call(this);
      if (this.decref() === 0) {
        return delete this.tab[this.name];
      }
    };

    return NamedLock;

  })(Lock);

  Table = (function() {
    function Table() {
      this.locks = {};
    }

    Table.prototype.create = function(name) {
      var l;
      l = new NamedLock(this, name);
      return this.locks[name] = l;
    };

    Table.prototype.acquire = function(name, cb, wait) {
      var l, was_open, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      l = this.locks[name] || this.create(name);
      was_open = l._open;
      l.incref();
      (function(__iced_k) {
        if (wait || l._open) {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "src/lock.iced",
              funcname: "Table.acquire"
            });
            l.acquire(__iced_deferrals.defer({
              lineno: 68
            }));
            __iced_deferrals._fulfill();
          })(__iced_k);
        } else {
          return __iced_k(l = null);
        }
      })(function() {
        return cb(l, was_open);
      });
    };

    Table.prototype.lookup = function(name) {
      return this.locks[name];
    };

    return Table;

  })();

  exports.Lock = Lock;

  exports.Table = Table;

}).call(this);

},{"iced-coffee-script/lib/coffee-script/iced":5}],18:[function(require,module,exports){
var Buffer=require("__browserify_Buffer").Buffer;// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var k, v, _ref, _ref1;



  _ref = require('./enc');
  for (k in _ref) {
    v = _ref[k];
    exports[k] = v;
  }

  _ref1 = require('./dec');
  for (k in _ref1) {
    v = _ref1[k];
    exports[k] = v;
  }

  exports.prng = require('./prng');

  exports.Buffer = Buffer;

  exports.WordArray = require('./wordarray').WordArray;

  exports.util = require('./util');

  exports.ciphers = {
    AES: require('./aes').AES,
    TwoFish: require('./twofish').TwoFish
  };

  exports.hash = {
    SHA1: require('./sha1').SHA1,
    SHA224: require('./sha224').SHA224,
    SHA256: require('./sha256').SHA256,
    SHA512: require('./sha512').SHA512,
    SHA3: require('./sha3').SHA3
  };

  exports.scrypt = require('./scrypt').scrypt;

  exports.pbkdf2 = require('./pbkdf2').pbkdf2;

  exports.HMAC_SHA256 = require('./hmac').HMAC_SHA256;

}).call(this);

},{"./aes":9,"./dec":13,"./enc":15,"./hmac":16,"./pbkdf2":19,"./prng":20,"./scrypt":22,"./sha1":23,"./sha224":24,"./sha256":25,"./sha3":26,"./sha512":27,"./twofish":28,"./util":29,"./wordarray":30,"__browserify_Buffer":3}],19:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var HMAC, PBKDF2, WordArray, iced, pbkdf2, util, __iced_k, __iced_k_noop;

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  HMAC = require('./hmac').HMAC;

  WordArray = require('./wordarray').WordArray;

  util = require('./util');

  PBKDF2 = (function() {
    function PBKDF2(_arg) {
      this.klass = _arg.klass, this.c = _arg.c;
      this.c || (this.c = 1024);
      this.klass || (this.klass = HMAC);
    }

    PBKDF2.prototype._PRF = function(input) {
      this.prf.reset();
      return this.prf.finalize(input);
    };

    PBKDF2.prototype._gen_T_i = function(_arg, cb) {
      var U, i, progress_hook, ret, salt, seed, stop, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      salt = _arg.salt, i = _arg.i, progress_hook = _arg.progress_hook;
      progress_hook(0);
      seed = salt.clone().concat(new WordArray([i]));
      U = this._PRF(seed);
      ret = U.clone();
      i = 1;
      (function(__iced_k) {
        var _results, _while;
        _results = [];
        _while = function(__iced_k) {
          var _break, _continue, _next;
          _break = function() {
            return __iced_k(_results);
          };
          _continue = function() {
            return iced.trampoline(function() {
              return _while(__iced_k);
            });
          };
          _next = function(__iced_next_arg) {
            _results.push(__iced_next_arg);
            return _continue();
          };
          if (!(i < _this.c)) {
            return _break();
          } else {
            stop = Math.min(_this.c, i + 128);
            while (i < stop) {
              U = _this._PRF(U);
              ret.xor(U, {});
              i++;
            }
            progress_hook(i);
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "src/pbkdf2.iced",
                funcname: "PBKDF2._gen_T_i"
              });
              util.default_delay(0, 0, __iced_deferrals.defer({
                lineno: 57
              }));
              __iced_deferrals._fulfill();
            })(function() {
              return _next(null);
            });
          }
        };
        _while(__iced_k);
      })(function() {
        progress_hook(i);
        return cb(ret);
      });
    };

    PBKDF2.prototype.run = function(_arg, cb) {
      var bs, dkLen, flat, i, key, n, ph, progress_hook, salt, tmp, tph, words, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      key = _arg.key, salt = _arg.salt, dkLen = _arg.dkLen, progress_hook = _arg.progress_hook;
      this.prf = new this.klass(key);
      bs = this.prf.get_output_size();
      n = Math.ceil(dkLen / bs);
      words = [];
      tph = null;
      ph = function(block) {
        return function(iter) {
          return typeof progress_hook === "function" ? progress_hook({
            what: "pbkdf2",
            total: n * _this.c,
            i: block * _this.c + iter
          }) : void 0;
        };
      };
      ph(0)(0);
      (function(__iced_k) {
        var _i, _results, _while;
        i = 1;
        _results = [];
        _while = function(__iced_k) {
          var _break, _continue, _next;
          _break = function() {
            return __iced_k(_results);
          };
          _continue = function() {
            return iced.trampoline(function() {
              ++i;
              return _while(__iced_k);
            });
          };
          _next = function(__iced_next_arg) {
            _results.push(__iced_next_arg);
            return _continue();
          };
          if (!(i <= n)) {
            return _break();
          } else {

            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "src/pbkdf2.iced",
                funcname: "PBKDF2.run"
              });
              _this._gen_T_i({
                salt: salt,
                i: i,
                progress_hook: ph(i - 1)
              }, __iced_deferrals.defer({
                assign_fn: (function() {
                  return function() {
                    return tmp = arguments[0];
                  };
                })(),
                lineno: 80
              }));
              __iced_deferrals._fulfill();
            })(function() {
              return _next(words.push(tmp.words));
            });
          }
        };
        _while(__iced_k);
      })(function() {
        var _ref;
        ph(n)(0);
        flat = (_ref = []).concat.apply(_ref, words);
        key.scrub();
        _this.prf.scrub();
        _this.prf = null;
        return cb(new WordArray(flat, dkLen));
      });
    };

    return PBKDF2;

  })();

  pbkdf2 = function(_arg, cb) {
    var c, dkLen, eng, key, klass, out, progress_hook, salt, ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    key = _arg.key, salt = _arg.salt, klass = _arg.klass, c = _arg.c, dkLen = _arg.dkLen, progress_hook = _arg.progress_hook;
    eng = new PBKDF2({
      klass: klass,
      c: c
    });
    (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral,
        filename: "src/pbkdf2.iced",
        funcname: "pbkdf2"
      });
      eng.run({
        key: key,
        salt: salt,
        dkLen: dkLen,
        progress_hook: progress_hook
      }, __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            return out = arguments[0];
          };
        })(),
        lineno: 106
      }));
      __iced_deferrals._fulfill();
    })(function() {
      return cb(out);
    });
  };

  exports.pbkdf2 = pbkdf2;

  exports.PBKDF2 = PBKDF2;

}).call(this);

},{"./hmac":16,"./util":29,"./wordarray":30,"iced-coffee-script/lib/coffee-script/iced":5}],20:[function(require,module,exports){
var Buffer=require("__browserify_Buffer").Buffer;// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var ADRBG, PRNG, WordArray, XOR, browser_rng, e, generate, iced, more_entropy, native_rng, rng, util, __iced_k, __iced_k_noop, _native_rng, _prng, _ref;

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  more_entropy = require('more-entropy');

  ADRBG = require('./drbg').ADRBG;

  WordArray = require('./wordarray').WordArray;

  XOR = require('./combine').XOR;

  util = require('./util');

  browser_rng = function(n) {
    var v;
    v = new Uint8Array(n);
    window.crypto.getRandomValues(v);
    return new Buffer(v);
  };

  if ((typeof window !== "undefined" && window !== null ? (_ref = window.crypto) != null ? _ref.getRandomValues : void 0 : void 0) != null) {
    _native_rng = browser_rng;
  } else {
    try {
      rng = require('cry' + 'pto').rng;
      if (rng != null) {
        _native_rng = rng;
      }
    } catch (_error) {
      e = _error;
    }
  }

  native_rng = function(x) {
    if (_native_rng == null) {
      throw new Error('No rng found; tried requiring "crypto" and window.crypto');
    }
    return _native_rng(x);
  };

  PRNG = (function() {
    function PRNG() {
      var _this = this;
      this.meg = new more_entropy.Generator();
      this.adrbg = new ADRBG((function(n, cb) {
        return _this.gen_seed(n, cb);
      }), XOR.sign);
    }

    PRNG.prototype.now_to_buffer = function() {
      var buf, d, ms, s;
      d = Date.now();
      ms = d % 1000;
      s = Math.floor(d / 1000);
      buf = new Buffer(8);
      buf.writeUInt32BE(s, 0);
      buf.writeUInt32BE(ms, 4);
      return buf;
    };

    PRNG.prototype.gen_seed = function(nbits, cb) {
      var b, bufs, cat, nbytes, wa, words, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      nbytes = nbits / 8;
      bufs = [];
      bufs.push(this.now_to_buffer());
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/prng.iced",
          funcname: "PRNG.gen_seed"
        });
        _this.meg.generate(nbits, __iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              return words = arguments[0];
            };
          })(),
          lineno: 76
        }));
        __iced_deferrals._fulfill();
      })(function() {
        var _i, _len;
        bufs.push(_this.now_to_buffer());
        bufs.push(new Buffer(words));
        bufs.push(native_rng(nbytes));
        bufs.push(_this.now_to_buffer());
        cat = Buffer.concat(bufs);
        wa = WordArray.from_buffer(cat);
        util.scrub_buffer(cat);
        for (_i = 0, _len = bufs.length; _i < _len; _i++) {
          b = bufs[_i];
          util.scrub_buffer(b);
        }
        return cb(wa);
      });
    };

    PRNG.prototype.generate = function(n, cb) {
      return this.adrbg.generate(n, cb);
    };

    return PRNG;

  })();

  _prng = null;

  generate = function(n, cb) {
    if (_prng == null) {
      _prng = new PRNG();
    }
    return _prng.generate(n, cb);
  };

  exports.PRNG = PRNG;

  exports.generate = generate;

  exports.native_rng = native_rng;

}).call(this);

},{"./combine":11,"./drbg":14,"./util":29,"./wordarray":30,"__browserify_Buffer":3,"iced-coffee-script/lib/coffee-script/iced":5,"more-entropy":32}],21:[function(require,module,exports){
var Buffer=require("__browserify_Buffer").Buffer;// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var Cipher, Counter, Salsa20, Salsa20Core, Salsa20InnerCore, Salsa20WordStream, StreamCipher, WordArray, asum, bulk_encrypt, encrypt, endian_reverse, fixup_uint32, iced, util, __iced_k, __iced_k_noop, _ref, _ref1, _ref2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  _ref = require('./wordarray'), endian_reverse = _ref.endian_reverse, WordArray = _ref.WordArray;

  Counter = require('./ctr').Counter;

  fixup_uint32 = require('./util').fixup_uint32;

  StreamCipher = require('./algbase').StreamCipher;

  util = require('./util');

  asum = function(out, v) {
    var e, i, _i, _len;
    for (i = _i = 0, _len = v.length; _i < _len; i = ++_i) {
      e = v[i];
      out[i] += e;
    }
    return false;
  };

  Salsa20InnerCore = (function() {
    function Salsa20InnerCore(rounds) {
      this.rounds = rounds;
    }

    Salsa20InnerCore.prototype._core = function(v) {
      "use asm";
      var i, u, x0, x1, x10, x11, x12, x13, x14, x15, x2, x3, x4, x5, x6, x7, x8, x9, _i, _ref1;
      x0 = v[0], x1 = v[1], x2 = v[2], x3 = v[3], x4 = v[4], x5 = v[5], x6 = v[6], x7 = v[7], x8 = v[8], x9 = v[9], x10 = v[10], x11 = v[11], x12 = v[12], x13 = v[13], x14 = v[14], x15 = v[15];
      for (i = _i = 0, _ref1 = this.rounds; _i < _ref1; i = _i += 2) {
        u = (x0 + x12) | 0;
        x4 ^= (u << 7) | (u >>> 25);
        u = (x4 + x0) | 0;
        x8 ^= (u << 9) | (u >>> 23);
        u = (x8 + x4) | 0;
        x12 ^= (u << 13) | (u >>> 19);
        u = (x12 + x8) | 0;
        x0 ^= (u << 18) | (u >>> 14);
        u = (x5 + x1) | 0;
        x9 ^= (u << 7) | (u >>> 25);
        u = (x9 + x5) | 0;
        x13 ^= (u << 9) | (u >>> 23);
        u = (x13 + x9) | 0;
        x1 ^= (u << 13) | (u >>> 19);
        u = (x1 + x13) | 0;
        x5 ^= (u << 18) | (u >>> 14);
        u = (x10 + x6) | 0;
        x14 ^= (u << 7) | (u >>> 25);
        u = (x14 + x10) | 0;
        x2 ^= (u << 9) | (u >>> 23);
        u = (x2 + x14) | 0;
        x6 ^= (u << 13) | (u >>> 19);
        u = (x6 + x2) | 0;
        x10 ^= (u << 18) | (u >>> 14);
        u = (x15 + x11) | 0;
        x3 ^= (u << 7) | (u >>> 25);
        u = (x3 + x15) | 0;
        x7 ^= (u << 9) | (u >>> 23);
        u = (x7 + x3) | 0;
        x11 ^= (u << 13) | (u >>> 19);
        u = (x11 + x7) | 0;
        x15 ^= (u << 18) | (u >>> 14);
        u = (x0 + x3) | 0;
        x1 ^= (u << 7) | (u >>> 25);
        u = (x1 + x0) | 0;
        x2 ^= (u << 9) | (u >>> 23);
        u = (x2 + x1) | 0;
        x3 ^= (u << 13) | (u >>> 19);
        u = (x3 + x2) | 0;
        x0 ^= (u << 18) | (u >>> 14);
        u = (x5 + x4) | 0;
        x6 ^= (u << 7) | (u >>> 25);
        u = (x6 + x5) | 0;
        x7 ^= (u << 9) | (u >>> 23);
        u = (x7 + x6) | 0;
        x4 ^= (u << 13) | (u >>> 19);
        u = (x4 + x7) | 0;
        x5 ^= (u << 18) | (u >>> 14);
        u = (x10 + x9) | 0;
        x11 ^= (u << 7) | (u >>> 25);
        u = (x11 + x10) | 0;
        x8 ^= (u << 9) | (u >>> 23);
        u = (x8 + x11) | 0;
        x9 ^= (u << 13) | (u >>> 19);
        u = (x9 + x8) | 0;
        x10 ^= (u << 18) | (u >>> 14);
        u = (x15 + x14) | 0;
        x12 ^= (u << 7) | (u >>> 25);
        u = (x12 + x15) | 0;
        x13 ^= (u << 9) | (u >>> 23);
        u = (x13 + x12) | 0;
        x14 ^= (u << 13) | (u >>> 19);
        u = (x14 + x13) | 0;
        x15 ^= (u << 18) | (u >>> 14);
      }
      return [x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15];
    };

    return Salsa20InnerCore;

  })();

  Salsa20Core = (function(_super) {
    __extends(Salsa20Core, _super);

    Salsa20Core.prototype.sigma = WordArray.from_buffer_le(new Buffer("expand 32-byte k"));

    Salsa20Core.prototype.tau = WordArray.from_buffer_le(new Buffer("expand 16-byte k"));

    Salsa20Core.blockSize = 64;

    Salsa20Core.prototype.blockSize = Salsa20Core.blockSize;

    Salsa20Core.keySize = 32;

    Salsa20Core.prototype.keySize = Salsa20Core.keySize;

    Salsa20Core.ivSize = 192 / 8;

    Salsa20Core.prototype.ivSize = Salsa20Core.ivSize;

    function Salsa20Core(key, nonce) {
      var _ref1;
      Salsa20Core.__super__.constructor.call(this, 20);
      this.key = key.clone().endian_reverse();
      this.nonce = nonce.clone().endian_reverse();
      if (!(((this.key.sigBytes === 16) && (this.nonce.sigBytes === 8)) || ((this.key.sigBytes === 32) && ((_ref1 = this.nonce.sigBytes) === 8 || _ref1 === 24)))) {
        throw new Error("Bad key/nonce lengths");
      }
      if (this.nonce.sigBytes === 24) {
        this.xsalsa_setup();
      }
      this.input = this.key_iv_setup(this.nonce, this.key);
      this._reset();
    }

    Salsa20Core.prototype.scrub = function() {
      this.key.scrub();
      this.nonce.scrub();
      return util.scrub_vec(this.input);
    };

    Salsa20Core.prototype.xsalsa_setup = function() {
      var n0, n1;
      n0 = new WordArray(this.nonce.words.slice(0, 4));
      this.nonce = n1 = new WordArray(this.nonce.words.slice(4));
      return this.key = this.hsalsa20(n0, this.key);
    };

    Salsa20Core.prototype.hsalsa20 = function(nonce, key) {
      var i, indexes, input, v;
      input = this.key_iv_setup(nonce, key);
      input[8] = nonce.words[2];
      input[9] = nonce.words[3];
      v = this._core(input);
      indexes = [0, 5, 10, 15, 6, 7, 8, 9];
      v = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = indexes.length; _i < _len; _i++) {
          i = indexes[_i];
          _results.push(fixup_uint32(v[i]));
        }
        return _results;
      })();
      util.scrub_vec(input);
      return new WordArray(v);
    };

    Salsa20Core.prototype.key_iv_setup = function(nonce, key) {
      var A, C, i, out, _i, _j, _k, _ref1;
      out = [];
      for (i = _i = 0; _i < 4; i = ++_i) {
        out[i + 1] = key.words[i];
      }
      _ref1 = key.sigBytes === 32 ? [this.sigma, key.words.slice(4)] : [this.tau, key.words], C = _ref1[0], A = _ref1[1];
      for (i = _j = 0; _j < 4; i = ++_j) {
        out[i + 11] = A[i];
      }
      for (i = _k = 0; _k < 4; i = ++_k) {
        out[i * 5] = C.words[i];
      }
      out[6] = nonce.words[0];
      out[7] = nonce.words[1];
      return out;
    };

    Salsa20Core.prototype.counter_setup = function() {
      this.input[8] = this.counter.get().words[0];
      return this.input[9] = this.counter.get().words[1];
    };

    Salsa20Core.prototype._reset = function() {
      return this.counter = new Counter({
        len: 2
      });
    };

    Salsa20Core.prototype._generateBlock = function() {
      var v;
      this.counter_setup();
      v = this._core(this.input);
      asum(v, this.input);
      this.counter.inc_le();
      return v;
    };

    return Salsa20Core;

  })(Salsa20InnerCore);

  exports.Salsa20WordStream = Salsa20WordStream = (function(_super) {
    __extends(Salsa20WordStream, _super);

    function Salsa20WordStream() {
      _ref1 = Salsa20WordStream.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    Salsa20WordStream.prototype._reset = function() {
      return Salsa20WordStream.__super__._reset.call(this);
    };

    Salsa20WordStream.prototype.getWordArray = function(nbytes) {
      var blocks, i, nblocks, w, words, _i, _len, _ref2;
      if ((nbytes == null) || nbytes === this.blockSize) {
        words = this._generateBlock();
      } else {
        nblocks = Math.ceil(nbytes / this.blockSize);
        blocks = (function() {
          var _i, _results;
          _results = [];
          for (i = _i = 0; 0 <= nblocks ? _i < nblocks : _i > nblocks; i = 0 <= nblocks ? ++_i : --_i) {
            _results.push(this._generateBlock());
          }
          return _results;
        }).call(this);
        words = (_ref2 = []).concat.apply(_ref2, blocks);
      }
      for (i = _i = 0, _len = words.length; _i < _len; i = ++_i) {
        w = words[i];
        words[i] = endian_reverse(w);
      }
      return new WordArray(words, nbytes);
    };

    return Salsa20WordStream;

  })(Salsa20Core);

  exports.Salsa20 = Salsa20 = (function(_super) {
    __extends(Salsa20, _super);

    function Salsa20() {
      _ref2 = Salsa20.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    Salsa20.prototype._reset = function() {
      Salsa20.__super__._reset.call(this);
      return this._i = this.blockSize;
    };

    Salsa20.prototype.getBytes = function(needed) {
      var bsz, n, v;
      if (needed == null) {
        needed = this.blockSize;
      }
      v = [];
      bsz = this.blockSize;
      if ((this._i === bsz) && (needed === bsz)) {
        return this._generateBlockBuffer();
      } else {
        while (needed > 0) {
          if (this._i === bsz) {
            this._generateBlockBuffer();
            this._i = 0;
          }
          n = Math.min(needed, bsz - this._i);
          v.push((n === bsz ? this._buf : this._buf.slice(this._i, this._i + n)));
          this._i += n;
          needed -= n;
        }
        return Buffer.concat(v);
      }
    };

    Salsa20.prototype._generateBlockBuffer = function() {
      var e, i, v, _i, _len;
      this._buf = new Buffer(this.blockSize);
      v = this._generateBlock();
      for (i = _i = 0, _len = v.length; _i < _len; i = ++_i) {
        e = v[i];
        this._buf.writeUInt32LE(fixup_uint32(e), i * 4);
      }
      return this._buf;
    };

    return Salsa20;

  })(Salsa20Core);

  exports.Cipher = Cipher = (function(_super) {
    __extends(Cipher, _super);

    function Cipher(_arg) {
      var iv, key;
      key = _arg.key, iv = _arg.iv;
      Cipher.__super__.constructor.call(this);
      this.salsa = new Salsa20WordStream(key, iv);
      this.bsiw = this.salsa.blockSize / 4;
    }

    Cipher.prototype.scrub = function() {
      return this.salsa.scrub();
    };

    Cipher.prototype.get_pad = function() {
      var pad;
      pad = this.salsa.getWordArray();
      return pad;
    };

    return Cipher;

  })(StreamCipher);

  exports.encrypt = encrypt = function(_arg) {
    var cipher, input, iv, key, ret;
    key = _arg.key, iv = _arg.iv, input = _arg.input;
    cipher = new Cipher({
      key: key,
      iv: iv
    });
    ret = cipher.encrypt(input);
    cipher.scrub();
    return ret;
  };

  exports.bulk_encrypt = bulk_encrypt = function(_arg, cb) {
    var cipher, input, iv, key, progress_hook, ret, ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    key = _arg.key, iv = _arg.iv, input = _arg.input, progress_hook = _arg.progress_hook;
    cipher = new Cipher({
      key: key,
      iv: iv
    });
    (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral,
        filename: "src/salsa20.iced",
        funcname: "bulk_encrypt"
      });
      cipher.bulk_encrypt({
        input: input,
        progress_hook: progress_hook,
        what: "salsa20"
      }, __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            return ret = arguments[0];
          };
        })(),
        lineno: 257
      }));
      __iced_deferrals._fulfill();
    })(function() {
      cipher.scrub();
      return cb(ret);
    });
  };

  exports.Salsa20InnerCore = Salsa20InnerCore;

  exports.endian_reverse = endian_reverse;

  exports.asum = asum;

}).call(this);

},{"./algbase":10,"./ctr":12,"./util":29,"./wordarray":30,"__browserify_Buffer":3,"iced-coffee-script/lib/coffee-script/iced":5}],22:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var HMAC_SHA256, Salsa20InnerCore, Scrypt, WordArray, blkcpy, blkxor, default_delay, endian_reverse, fixup_uint32, iced, pbkdf2, scrub_vec, scrypt, ui8a_to_buffer, v_endian_reverse, __iced_k, __iced_k_noop, _ref, _ref1, _ref2;

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  HMAC_SHA256 = require('./hmac').HMAC_SHA256;

  pbkdf2 = require('./pbkdf2').pbkdf2;

  _ref = require('./salsa20'), endian_reverse = _ref.endian_reverse, Salsa20InnerCore = _ref.Salsa20InnerCore;

  _ref1 = require('./wordarray'), ui8a_to_buffer = _ref1.ui8a_to_buffer, WordArray = _ref1.WordArray;

  _ref2 = require('./util'), fixup_uint32 = _ref2.fixup_uint32, default_delay = _ref2.default_delay, scrub_vec = _ref2.scrub_vec;

  blkcpy = function(D, S, d_offset, s_offset, len) {
    "use asm";
    var end, i, j;
    j = (d_offset << 4) | 0;
    i = (s_offset << 4) | 0;
    end = (i + (len << 4)) | 0;
    while (i < end) {
      D[j] = S[i];
      D[j + 1] = S[i + 1];
      D[j + 2] = S[i + 2];
      D[j + 3] = S[i + 3];
      D[j + 4] = S[i + 4];
      D[j + 5] = S[i + 5];
      D[j + 6] = S[i + 6];
      D[j + 7] = S[i + 7];
      D[j + 8] = S[i + 8];
      D[j + 9] = S[i + 9];
      D[j + 10] = S[i + 10];
      D[j + 11] = S[i + 11];
      D[j + 12] = S[i + 12];
      D[j + 13] = S[i + 13];
      D[j + 14] = S[i + 14];
      D[j + 15] = S[i + 15];
      i += 16;
      j += 16;
    }
    return true;
  };

  blkxor = function(D, S, s_offset, len) {
    "use asm";
    var i, j;
    len = (len << 4) | 0;
    i = 0;
    j = (s_offset << 4) | 0;
    while (i < len) {
      D[i] ^= S[j];
      D[i + 1] ^= S[j + 1];
      D[i + 2] ^= S[j + 2];
      D[i + 3] ^= S[j + 3];
      D[i + 4] ^= S[j + 4];
      D[i + 5] ^= S[j + 5];
      D[i + 6] ^= S[j + 6];
      D[i + 7] ^= S[j + 7];
      D[i + 8] ^= S[j + 8];
      D[i + 9] ^= S[j + 9];
      D[i + 10] ^= S[j + 10];
      D[i + 11] ^= S[j + 11];
      D[i + 12] ^= S[j + 12];
      D[i + 13] ^= S[j + 13];
      D[i + 14] ^= S[j + 14];
      D[i + 15] ^= S[j + 15];
      i += 16;
      j += 16;
    }
    return true;
  };

  v_endian_reverse = function(v) {
    var e, i, _i, _len;
    for (i = _i = 0, _len = v.length; _i < _len; i = ++_i) {
      e = v[i];
      v[i] = endian_reverse(e);
    }
    return true;
  };

  Scrypt = (function() {
    function Scrypt(_arg) {
      var N, c, c0, c1;
      N = _arg.N, this.r = _arg.r, this.p = _arg.p, c = _arg.c, c0 = _arg.c0, c1 = _arg.c1, this.klass = _arg.klass;
      this.N || (this.N = 1 << (N || 10));
      this.r || (this.r = 16);
      this.p || (this.p = 2);
      this.c0 = c0 || c || 1;
      this.c1 = c1 || c || 1;
      this.klass || (this.klass = HMAC_SHA256);
      this.X16_tmp = new Int32Array(0x10);
      this.s20ic = new Salsa20InnerCore(8);
    }

    Scrypt.prototype.salsa20_8 = function(B) {
      var X, i, x, _i, _len;
      X = this.s20ic._core(B);
      for (i = _i = 0, _len = X.length; _i < _len; i = ++_i) {
        x = X[i];
        B[i] += x;
      }
      return true;
    };

    Scrypt.prototype.pbkdf2 = function(_arg, cb) {
      var c, dkLen, key, progress_hook, salt, wa, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      key = _arg.key, salt = _arg.salt, dkLen = _arg.dkLen, progress_hook = _arg.progress_hook, c = _arg.c;
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/scrypt.iced",
          funcname: "Scrypt.pbkdf2"
        });
        pbkdf2({
          key: key,
          salt: salt,
          c: c,
          dkLen: dkLen,
          klass: _this.klass,
          progress_hook: progress_hook
        }, __iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              return wa = arguments[0];
            };
          })(),
          lineno: 103
        }));
        __iced_deferrals._fulfill();
      })(function() {
        return cb(wa);
      });
    };

    Scrypt.prototype.blockmix_salsa8 = function(B, Y) {
      var X, i, _i, _j, _k, _ref3, _ref4, _ref5;
      X = this.X16_tmp;
      blkcpy(X, B, 0, 2 * this.r - 1, 1);
      for (i = _i = 0, _ref3 = 2 * this.r; 0 <= _ref3 ? _i < _ref3 : _i > _ref3; i = 0 <= _ref3 ? ++_i : --_i) {
        blkxor(X, B, i, 1);
        this.salsa20_8(X);
        blkcpy(Y, X, i, 0, 1);
      }
      for (i = _j = 0, _ref4 = this.r; 0 <= _ref4 ? _j < _ref4 : _j > _ref4; i = 0 <= _ref4 ? ++_j : --_j) {
        blkcpy(B, Y, i, i * 2, 1);
      }
      for (i = _k = 0, _ref5 = this.r; 0 <= _ref5 ? _k < _ref5 : _k > _ref5; i = 0 <= _ref5 ? ++_k : --_k) {
        blkcpy(B, Y, i + this.r, i * 2 + 1, 1);
      }
      return true;
    };

    Scrypt.prototype.smix = function(_arg, cb) {
      var B, V, X, XY, Y, i, j, lim, progress_hook, stop, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      B = _arg.B, V = _arg.V, XY = _arg.XY, progress_hook = _arg.progress_hook;
      X = XY;
      lim = 2 * this.r;
      Y = XY.subarray(0x10 * lim);
      blkcpy(X, B, 0, 0, lim);
      i = 0;
      (function(__iced_k) {
        var _results, _while;
        _results = [];
        _while = function(__iced_k) {
          var _break, _continue, _next;
          _break = function() {
            return __iced_k(_results);
          };
          _continue = function() {
            return iced.trampoline(function() {
              return _while(__iced_k);
            });
          };
          _next = function(__iced_next_arg) {
            _results.push(__iced_next_arg);
            return _continue();
          };
          if (!(i < _this.N)) {
            return _break();
          } else {
            stop = Math.min(_this.N, i + 2048);
            while (i < stop) {
              blkcpy(V, X, lim * i, 0, lim);
              _this.blockmix_salsa8(X, Y);
              i++;
            }
            if (typeof progress_hook === "function") {
              progress_hook(i);
            }
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "src/scrypt.iced",
                funcname: "Scrypt.smix"
              });
              default_delay(0, 0, __iced_deferrals.defer({
                lineno: 156
              }));
              __iced_deferrals._fulfill();
            })(_next);
          }
        };
        _while(__iced_k);
      })(function() {
        i = 0;
        (function(__iced_k) {
          var _results, _while;
          _results = [];
          _while = function(__iced_k) {
            var _break, _continue, _next;
            _break = function() {
              return __iced_k(_results);
            };
            _continue = function() {
              return iced.trampoline(function() {
                return _while(__iced_k);
              });
            };
            _next = function(__iced_next_arg) {
              _results.push(__iced_next_arg);
              return _continue();
            };
            if (!(i < _this.N)) {
              return _break();
            } else {
              stop = Math.min(_this.N, i + 256);
              while (i < stop) {
                j = fixup_uint32(X[0x10 * (lim - 1)]) & (_this.N - 1);
                blkxor(X, V, j * lim, lim);
                _this.blockmix_salsa8(X, Y);
                i++;
              }
              if (typeof progress_hook === "function") {
                progress_hook(i + _this.N);
              }
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "src/scrypt.iced",
                  funcname: "Scrypt.smix"
                });
                default_delay(0, 0, __iced_deferrals.defer({
                  lineno: 173
                }));
                __iced_deferrals._fulfill();
              })(_next);
            }
          };
          _while(__iced_k);
        })(function() {
          blkcpy(B, X, 0, 0, lim);
          return cb();
        });
      });
    };

    Scrypt.prototype.run = function(_arg, cb) {
      var B, MAX, V, XY, dkLen, err, j, key, lph, out, progress_hook, ret, salt, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      key = _arg.key, salt = _arg.salt, dkLen = _arg.dkLen, progress_hook = _arg.progress_hook;
      MAX = 0xffffffff;
      err = ret = null;
      err = dkLen > MAX ? err = new Error("asked for too much data") : this.r * this.p >= (1 << 30) ? new Error("r & p are too big") : (this.r > MAX / 128 / this.p) || (this.r > MAX / 256) || (this.N > MAX / 128 / this.r) ? new Error("N is too big") : null;
      XY = new Int32Array(64 * this.r);
      V = new Int32Array(32 * this.r * this.N);
      lph = function(o) {
        o.what += " (pass 1)";
        return typeof progress_hook === "function" ? progress_hook(o) : void 0;
      };
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "src/scrypt.iced",
          funcname: "Scrypt.run"
        });
        _this.pbkdf2({
          key: key.clone(),
          salt: salt,
          dkLen: 128 * _this.r * _this.p,
          c: _this.c0,
          progress_hook: lph
        }, __iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              return B = arguments[0];
            };
          })(),
          lineno: 204
        }));
        __iced_deferrals._fulfill();
      })(function() {
        B = new Int32Array(B.words);
        v_endian_reverse(B);
        lph = function(j) {
          return function(i) {
            return typeof progress_hook === "function" ? progress_hook({
              i: i + j * _this.N * 2,
              what: "scrypt",
              total: _this.p * _this.N * 2
            }) : void 0;
          };
        };
        (function(__iced_k) {
          var _i, _results, _while;
          j = 0;
          _results = [];
          _while = function(__iced_k) {
            var _break, _continue, _next;
            _break = function() {
              return __iced_k(_results);
            };
            _continue = function() {
              return iced.trampoline(function() {
                ++j;
                return _while(__iced_k);
              });
            };
            _next = function(__iced_next_arg) {
              _results.push(__iced_next_arg);
              return _continue();
            };
            if (!(j < _this.p)) {
              return _break();
            } else {

              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "src/scrypt.iced",
                  funcname: "Scrypt.run"
                });
                _this.smix({
                  B: B.subarray(32 * _this.r * j),
                  V: V,
                  XY: XY,
                  progress_hook: lph(j)
                }, __iced_deferrals.defer({
                  lineno: 211
                }));
                __iced_deferrals._fulfill();
              })(_next);
            }
          };
          _while(__iced_k);
        })(function() {
          v_endian_reverse(B);
          lph = function(o) {
            o.what += " (pass 2)";
            return typeof progress_hook === "function" ? progress_hook(o) : void 0;
          };
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "src/scrypt.iced",
              funcname: "Scrypt.run"
            });
            _this.pbkdf2({
              key: key,
              salt: WordArray.from_i32a(B),
              dkLen: dkLen,
              c: _this.c1,
              progress_hook: lph
            }, __iced_deferrals.defer({
              assign_fn: (function() {
                return function() {
                  return out = arguments[0];
                };
              })(),
              lineno: 219
            }));
            __iced_deferrals._fulfill();
          })(function() {
            scrub_vec(XY);
            scrub_vec(V);
            scrub_vec(B);
            key.scrub();
            return cb(out);
          });
        });
      });
    };

    return Scrypt;

  })();

  scrypt = function(_arg, cb) {
    var N, c, c0, c1, dkLen, eng, key, klass, p, progress_hook, r, salt, wa, ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    key = _arg.key, salt = _arg.salt, r = _arg.r, N = _arg.N, p = _arg.p, c0 = _arg.c0, c1 = _arg.c1, c = _arg.c, klass = _arg.klass, progress_hook = _arg.progress_hook, dkLen = _arg.dkLen;
    eng = new Scrypt({
      r: r,
      N: N,
      p: p,
      c: c,
      c0: c0,
      c1: c1,
      klass: klass
    });
    (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral,
        filename: "src/scrypt.iced",
        funcname: "scrypt"
      });
      eng.run({
        key: key,
        salt: salt,
        progress_hook: progress_hook,
        dkLen: dkLen
      }, __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            return wa = arguments[0];
          };
        })(),
        lineno: 249
      }));
      __iced_deferrals._fulfill();
    })(function() {
      return cb(wa);
    });
  };

  exports.Scrypt = Scrypt;

  exports.scrypt = scrypt;

  exports.v_endian_reverse = v_endian_reverse;

}).call(this);

},{"./hmac":16,"./pbkdf2":19,"./salsa20":21,"./util":29,"./wordarray":30,"iced-coffee-script/lib/coffee-script/iced":5}],23:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var Hasher, SHA1, W, WordArray, transform, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };



  WordArray = require('./wordarray').WordArray;

  Hasher = require('./algbase').Hasher;

  W = [];

  SHA1 = (function(_super) {
    __extends(SHA1, _super);

    function SHA1() {
      _ref = SHA1.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SHA1.blockSize = 512 / 32;

    SHA1.prototype.blockSize = SHA1.blockSize;

    SHA1.output_size = 20;

    SHA1.prototype.output_size = SHA1.output_size;

    SHA1.prototype._doReset = function() {
      return this._hash = new WordArray([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
    };

    SHA1.prototype._doProcessBlock = function(M, offset) {
      var H, a, b, c, d, e, i, n, t, _i;
      H = this._hash.words;
      a = H[0];
      b = H[1];
      c = H[2];
      d = H[3];
      e = H[4];
      for (i = _i = 0; _i < 80; i = ++_i) {
        if (i < 16) {
          W[i] = M[offset + i] | 0;
        } else {
          n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
          W[i] = (n << 1) | (n >>> 31);
        }
        t = ((a << 5) | (a >>> 27)) + e + W[i];
        if (i < 20) {
          t += ((b & c) | (~b & d)) + 0x5a827999;
        } else if (i < 40) {
          t += (b ^ c ^ d) + 0x6ed9eba1;
        } else if (i < 60) {
          t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
        } else {
          t += (b ^ c ^ d) - 0x359d3e2a;
        }
        e = d;
        d = c;
        c = (b << 30) | (b >>> 2);
        b = a;
        a = t;
      }
      H[0] = (H[0] + a) | 0;
      H[1] = (H[1] + b) | 0;
      H[2] = (H[2] + c) | 0;
      H[3] = (H[3] + d) | 0;
      return H[4] = (H[4] + e) | 0;
    };

    SHA1.prototype._doFinalize = function() {
      var data, dataWords, nBitsLeft, nBitsTotal;
      data = this._data;
      dataWords = data.words;
      nBitsTotal = this._nDataBytes * 8;
      nBitsLeft = data.sigBytes * 8;
      dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
      data.sigBytes = dataWords.length * 4;
      this._process();
      return this._hash;
    };

    SHA1.prototype.copy_to = function(obj) {
      SHA1.__super__.copy_to.call(this, obj);
      return obj._hash = this._hash.clone();
    };

    SHA1.prototype.clone = function() {
      var out;
      out = new SHA1();
      this.copy_to(out);
      return out;
    };

    return SHA1;

  })(Hasher);

  transform = transform = function(x) {
    var out;
    out = (new SHA1).finalize(x);
    x.scrub();
    return out;
  };

  exports.SHA1 = SHA1;

  exports.transform = transform;

}).call(this);

},{"./algbase":10,"./wordarray":30}],24:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var SHA224, SHA256, WordArray, transform, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };



  WordArray = require('./wordarray').WordArray;

  SHA256 = require('./sha256').SHA256;

  SHA224 = (function(_super) {
    __extends(SHA224, _super);

    function SHA224() {
      _ref = SHA224.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SHA224.prototype._doReset = function() {
      return this._hash = new WordArray([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);
    };

    SHA224.prototype._doFinalize = function() {
      var hash;
      hash = SHA224.__super__._doFinalize.call(this);
      hash.sigBytes -= 4;
      return hash;
    };

    SHA224.prototype.clone = function() {
      var out;
      out = new SHA224();
      this.copy_to(out);
      return out;
    };

    return SHA224;

  })(SHA256);

  transform = function(x) {
    var out;
    out = (new SHA224).finalize(x);
    x.scrub();
    return out;
  };

  exports.SHA224 = SHA224;

  exports.transform = transform;

}).call(this);

},{"./sha256":25,"./wordarray":30}],25:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var Global, Hasher, SHA256, WordArray, glbl, transform, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };



  WordArray = require('./wordarray').WordArray;

  Hasher = require('./algbase').Hasher;

  Global = (function() {
    function Global() {
      this.H = [];
      this.K = [];
      this.W = [];
      this.init();
    }

    Global.prototype.isPrime = function(n) {
      var f, sqn, _i;
      if (n === 2 || n === 3 || n === 5 || n === 7) {
        return true;
      }
      if (n === 1 || n === 4 || n === 6 || n === 8 || n === 9) {
        return false;
      }
      sqn = Math.ceil(Math.sqrt(n));
      for (f = _i = 2; 2 <= sqn ? _i <= sqn : _i >= sqn; f = 2 <= sqn ? ++_i : --_i) {
        if ((n % f) === 0) {
          return false;
        }
      }
      return true;
    };

    Global.prototype.getFractionalBits = function(n) {
      return ((n - (n | 0)) * 0x100000000) | 0;
    };

    Global.prototype.init = function() {
      var n, nPrime, _results;
      n = 2;
      nPrime = 0;
      _results = [];
      while (nPrime < 64) {
        if (this.isPrime(n)) {
          if (nPrime < 8) {
            this.H[nPrime] = this.getFractionalBits(Math.pow(n, 1 / 2));
          }
          this.K[nPrime] = this.getFractionalBits(Math.pow(n, 1 / 3));
          nPrime++;
        }
        _results.push(n++);
      }
      return _results;
    };

    return Global;

  })();

  glbl = new Global();

  SHA256 = (function(_super) {
    __extends(SHA256, _super);

    function SHA256() {
      _ref = SHA256.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SHA256.blockSize = 512 / 32;

    SHA256.prototype.blockSize = SHA256.blockSize;

    SHA256.output_size = 256 / 8;

    SHA256.prototype.output_size = SHA256.output_size;

    SHA256.prototype._doReset = function() {
      return this._hash = new WordArray(glbl.H.slice(0));
    };

    SHA256.prototype.get_output_size = function() {
      return this.output_size;
    };

    SHA256.prototype._doProcessBlock = function(M, offset) {
      var H, K, W, a, b, c, ch, d, e, f, g, gamma0, gamma0x, gamma1, gamma1x, h, i, maj, sigma0, sigma1, t1, t2, _i;
      H = this._hash.words;
      W = glbl.W;
      K = glbl.K;
      a = H[0];
      b = H[1];
      c = H[2];
      d = H[3];
      e = H[4];
      f = H[5];
      g = H[6];
      h = H[7];
      for (i = _i = 0; _i < 64; i = ++_i) {
        if (i < 16) {
          W[i] = M[offset + i] | 0;
        } else {
          gamma0x = W[i - 15];
          gamma0 = ((gamma0x << 25) | (gamma0x >>> 7)) ^ ((gamma0x << 14) | (gamma0x >>> 18)) ^ (gamma0x >>> 3);
          gamma1x = W[i - 2];
          gamma1 = ((gamma1x << 15) | (gamma1x >>> 17)) ^ ((gamma1x << 13) | (gamma1x >>> 19)) ^ (gamma1x >>> 10);
          W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
        }
        ch = (e & f) ^ (~e & g);
        maj = (a & b) ^ (a & c) ^ (b & c);
        sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
        sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));
        t1 = h + sigma1 + ch + K[i] + W[i];
        t2 = sigma0 + maj;
        h = g;
        g = f;
        f = e;
        e = (d + t1) | 0;
        d = c;
        c = b;
        b = a;
        a = (t1 + t2) | 0;
      }
      H[0] = (H[0] + a) | 0;
      H[1] = (H[1] + b) | 0;
      H[2] = (H[2] + c) | 0;
      H[3] = (H[3] + d) | 0;
      H[4] = (H[4] + e) | 0;
      H[5] = (H[5] + f) | 0;
      H[6] = (H[6] + g) | 0;
      return H[7] = (H[7] + h) | 0;
    };

    SHA256.prototype._doFinalize = function() {
      var data, dataWords, nBitsLeft, nBitsTotal;
      data = this._data;
      dataWords = data.words;
      nBitsTotal = this._nDataBytes * 8;
      nBitsLeft = data.sigBytes * 8;
      dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
      data.sigBytes = dataWords.length * 4;
      this._process();
      return this._hash;
    };

    SHA256.prototype.scrub = function() {
      return this._hash.scrub();
    };

    SHA256.prototype.copy_to = function(obj) {
      SHA256.__super__.copy_to.call(this, obj);
      return obj._hash = this._hash.clone();
    };

    SHA256.prototype.clone = function() {
      var out;
      out = new SHA256();
      this.copy_to(out);
      return out;
    };

    return SHA256;

  })(Hasher);

  transform = function(x) {
    var out;
    out = (new SHA256).finalize(x);
    x.scrub();
    return out;
  };

  exports.SHA256 = SHA256;

  exports.transform = transform;

}).call(this);

},{"./algbase":10,"./wordarray":30}],26:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var Global, Hasher, SHA3, WordArray, X64Word, X64WordArray, glbl, _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };



  _ref = require('./wordarray'), WordArray = _ref.WordArray, X64Word = _ref.X64Word, X64WordArray = _ref.X64WordArray;

  Hasher = require('./algbase').Hasher;

  Global = (function() {
    function Global() {
      this.RHO_OFFSETS = [];
      this.PI_INDEXES = [];
      this.ROUND_CONSTANTS = [];
      this.T = [];
      this.compute_rho_offsets();
      this.compute_pi_indexes();
      this.compute_round_constants();
      this.make_reusables();
    }

    Global.prototype.compute_rho_offsets = function() {
      var newX, newY, t, x, y, _i, _results;
      x = 1;
      y = 0;
      _results = [];
      for (t = _i = 0; _i < 24; t = ++_i) {
        this.RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;
        newX = y % 5;
        newY = (2 * x + 3 * y) % 5;
        x = newX;
        _results.push(y = newY);
      }
      return _results;
    };

    Global.prototype.compute_pi_indexes = function() {
      var x, y, _i, _results;
      _results = [];
      for (x = _i = 0; _i < 5; x = ++_i) {
        _results.push((function() {
          var _j, _results1;
          _results1 = [];
          for (y = _j = 0; _j < 5; y = ++_j) {
            _results1.push(this.PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5);
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    Global.prototype.compute_round_constants = function() {
      var LFSR, bitPosition, i, j, roundConstantLsw, roundConstantMsw, _i, _j, _results;
      LFSR = 0x01;
      _results = [];
      for (i = _i = 0; _i < 24; i = ++_i) {
        roundConstantMsw = 0;
        roundConstantLsw = 0;
        for (j = _j = 0; _j < 7; j = ++_j) {
          if (LFSR & 0x01) {
            bitPosition = (1 << j) - 1;
            if (bitPosition < 32) {
              roundConstantLsw ^= 1 << bitPosition;
            } else {
              roundConstantMsw ^= 1 << (bitPosition - 32);
            }
          }
          if (LFSR & 0x80) {
            LFSR = (LFSR << 1) ^ 0x71;
          } else {
            LFSR <<= 1;
          }
        }
        _results.push(this.ROUND_CONSTANTS[i] = new X64Word(roundConstantMsw, roundConstantLsw));
      }
      return _results;
    };

    Global.prototype.make_reusables = function() {
      var i;
      return this.T = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i < 25; i = ++_i) {
          _results.push(new X64Word(0, 0));
        }
        return _results;
      })();
    };

    return Global;

  })();

  glbl = new Global();

  exports.SHA3 = SHA3 = (function(_super) {
    __extends(SHA3, _super);

    function SHA3() {
      _ref1 = SHA3.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    SHA3.outputLength = 512;

    SHA3.prototype.outputLength = SHA3.outputLength;

    SHA3.blockSize = (1600 - 2 * SHA3.outputLength) / 32;

    SHA3.prototype.blockSize = SHA3.blockSize;

    SHA3.output_size = SHA3.outputLength / 8;

    SHA3.prototype.output_size = SHA3.output_size;

    SHA3.prototype._doReset = function() {
      var i;
      return this._state = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i < 25; i = ++_i) {
          _results.push(new X64Word(0, 0));
        }
        return _results;
      })();
    };

    SHA3.prototype._doProcessBlock = function(M, offset) {
      var G, M2i, M2i1, T0, TLane, TPiLane, Tx, Tx1, Tx1Lane, Tx1Lsw, Tx1Msw, Tx2Lane, Tx4, i, lane, laneIndex, laneLsw, laneMsw, nBlockSizeLanes, rhoOffset, round, roundConstant, state, state0, tLsw, tMsw, x, y, _i, _j, _k, _l, _m, _n, _o, _p, _q, _results;
      G = glbl;
      state = this._state;
      nBlockSizeLanes = this.blockSize / 2;
      for (i = _i = 0; 0 <= nBlockSizeLanes ? _i < nBlockSizeLanes : _i > nBlockSizeLanes; i = 0 <= nBlockSizeLanes ? ++_i : --_i) {
        M2i = M[offset + 2 * i];
        M2i1 = M[offset + 2 * i + 1];
        M2i = (((M2i << 8) | (M2i >>> 24)) & 0x00ff00ff) | (((M2i << 24) | (M2i >>> 8)) & 0xff00ff00);
        M2i1 = (((M2i1 << 8) | (M2i1 >>> 24)) & 0x00ff00ff) | (((M2i1 << 24) | (M2i1 >>> 8)) & 0xff00ff00);
        lane = state[i];
        lane.high ^= M2i1;
        lane.low ^= M2i;
      }
      _results = [];
      for (round = _j = 0; _j < 24; round = ++_j) {
        for (x = _k = 0; _k < 5; x = ++_k) {
          tMsw = tLsw = 0;
          for (y = _l = 0; _l < 5; y = ++_l) {
            lane = state[x + 5 * y];
            tMsw ^= lane.high;
            tLsw ^= lane.low;
          }
          Tx = G.T[x];
          Tx.high = tMsw;
          Tx.low = tLsw;
        }
        for (x = _m = 0; _m < 5; x = ++_m) {
          Tx4 = G.T[(x + 4) % 5];
          Tx1 = G.T[(x + 1) % 5];
          Tx1Msw = Tx1.high;
          Tx1Lsw = Tx1.low;
          tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
          tLsw = Tx4.low ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
          for (y = _n = 0; _n < 5; y = ++_n) {
            lane = state[x + 5 * y];
            lane.high ^= tMsw;
            lane.low ^= tLsw;
          }
        }
        for (laneIndex = _o = 1; _o < 25; laneIndex = ++_o) {
          lane = state[laneIndex];
          laneMsw = lane.high;
          laneLsw = lane.low;
          rhoOffset = G.RHO_OFFSETS[laneIndex];
          if (rhoOffset < 32) {
            tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
            tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
          } else {
            tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
            tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
          }
          TPiLane = G.T[G.PI_INDEXES[laneIndex]];
          TPiLane.high = tMsw;
          TPiLane.low = tLsw;
        }
        T0 = G.T[0];
        state0 = state[0];
        T0.high = state0.high;
        T0.low = state0.low;
        for (x = _p = 0; _p < 5; x = ++_p) {
          for (y = _q = 0; _q < 5; y = ++_q) {
            laneIndex = x + 5 * y;
            lane = state[laneIndex];
            TLane = G.T[laneIndex];
            Tx1Lane = G.T[((x + 1) % 5) + 5 * y];
            Tx2Lane = G.T[((x + 2) % 5) + 5 * y];
            lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
            lane.low = TLane.low ^ (~Tx1Lane.low & Tx2Lane.low);
          }
        }
        lane = state[0];
        roundConstant = G.ROUND_CONSTANTS[round];
        lane.high ^= roundConstant.high;
        _results.push(lane.low ^= roundConstant.low);
      }
      return _results;
    };

    SHA3.prototype._doFinalize = function() {
      var blockSizeBits, data, dataWords, hashWords, i, lane, laneLsw, laneMsw, nBitsLeft, nBitsTotal, outputLengthBytes, outputLengthLanes, state, _i;
      data = this._data;
      dataWords = data.words;
      nBitsTotal = this._nDataBytes * 8;
      nBitsLeft = data.sigBytes * 8;
      blockSizeBits = this.blockSize * 32;
      dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
      dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
      data.sigBytes = dataWords.length * 4;
      this._process();
      state = this._state;
      outputLengthBytes = this.outputLength / 8;
      outputLengthLanes = outputLengthBytes / 8;
      hashWords = [];
      for (i = _i = 0; 0 <= outputLengthLanes ? _i < outputLengthLanes : _i > outputLengthLanes; i = 0 <= outputLengthLanes ? ++_i : --_i) {
        lane = state[i];
        laneMsw = lane.high;
        laneLsw = lane.low;
        laneMsw = (((laneMsw << 8) | (laneMsw >>> 24)) & 0x00ff00ff) | (((laneMsw << 24) | (laneMsw >>> 8)) & 0xff00ff00);
        laneLsw = (((laneLsw << 8) | (laneLsw >>> 24)) & 0x00ff00ff) | (((laneLsw << 24) | (laneLsw >>> 8)) & 0xff00ff00);
        hashWords.push(laneLsw);
        hashWords.push(laneMsw);
      }
      return new WordArray(hashWords, outputLengthBytes);
    };

    SHA3.prototype.copy_to = function(obj) {
      var s;
      SHA3.__super__.copy_to.call(this, obj);
      return obj._state = (function() {
        var _i, _len, _ref2, _results;
        _ref2 = this._state;
        _results = [];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          s = _ref2[_i];
          _results.push(s.clone());
        }
        return _results;
      }).call(this);
    };

    SHA3.prototype.scrub = function() {};

    SHA3.prototype.clone = function() {
      var out;
      out = new SHA3();
      this.copy_to(out);
      return out;
    };

    return SHA3;

  })(Hasher);

  exports.transform = function(x) {
    var out;
    out = (new SHA3).finalize(x);
    x.scrub();
    return out;
  };

}).call(this);

},{"./algbase":10,"./wordarray":30}],27:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var Global, Hasher, SHA512, X64Word, X64WordArray, glbl, _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };



  _ref = require('./wordarray'), X64Word = _ref.X64Word, X64WordArray = _ref.X64WordArray;

  Hasher = require('./algbase').Hasher;

  Global = (function() {
    Global.prototype.convert = function(raw) {
      var i, _i, _ref1, _results;
      _results = [];
      for (i = _i = 0, _ref1 = raw.length; _i < _ref1; i = _i += 2) {
        _results.push(new X64Word(raw[i], raw[i + 1]));
      }
      return _results;
    };

    function Global() {
      var i;
      this.K = this.convert([0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817]);
      this.I = new X64WordArray(this.convert([0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179]));
      this.W = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i < 80; i = ++_i) {
          _results.push(new X64Word(0, 0));
        }
        return _results;
      })();
    }

    return Global;

  })();

  glbl = new Global();

  exports.SHA512 = SHA512 = (function(_super) {
    __extends(SHA512, _super);

    function SHA512() {
      _ref1 = SHA512.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    SHA512.blockSize = 1024 / 32;

    SHA512.prototype.blockSize = SHA512.blockSize;

    SHA512.output_size = 512 / 8;

    SHA512.prototype.output_size = SHA512.output_size;

    SHA512.prototype._doReset = function() {
      return this._hash = glbl.I.clone();
    };

    SHA512.prototype._doProcessBlock = function(M, offset) {
      var H, H0, H0h, H0l, H1, H1h, H1l, H2, H2h, H2l, H3, H3h, H3l, H4, H4h, H4l, H5, H5h, H5l, H6, H6h, H6l, H7, H7h, H7l, Ki, Kih, Kil, W, Wi, Wi16, Wi16h, Wi16l, Wi7, Wi7h, Wi7l, Wih, Wil, ah, al, bh, bl, ch, chh, chl, cl, dh, dl, eh, el, fh, fl, gamma0h, gamma0l, gamma0x, gamma0xh, gamma0xl, gamma1h, gamma1l, gamma1x, gamma1xh, gamma1xl, gh, gl, hh, hl, i, majh, majl, sigma0h, sigma0l, sigma1h, sigma1l, t1h, t1l, t2h, t2l, _i;
      H = this._hash.words;
      W = glbl.W;
      H0 = H[0];
      H1 = H[1];
      H2 = H[2];
      H3 = H[3];
      H4 = H[4];
      H5 = H[5];
      H6 = H[6];
      H7 = H[7];
      H0h = H0.high;
      H0l = H0.low;
      H1h = H1.high;
      H1l = H1.low;
      H2h = H2.high;
      H2l = H2.low;
      H3h = H3.high;
      H3l = H3.low;
      H4h = H4.high;
      H4l = H4.low;
      H5h = H5.high;
      H5l = H5.low;
      H6h = H6.high;
      H6l = H6.low;
      H7h = H7.high;
      H7l = H7.low;
      ah = H0h;
      al = H0l;
      bh = H1h;
      bl = H1l;
      ch = H2h;
      cl = H2l;
      dh = H3h;
      dl = H3l;
      eh = H4h;
      el = H4l;
      fh = H5h;
      fl = H5l;
      gh = H6h;
      gl = H6l;
      hh = H7h;
      hl = H7l;
      for (i = _i = 0; _i < 80; i = ++_i) {
        Wi = W[i];
        if (i < 16) {
          Wih = Wi.high = M[offset + i * 2] | 0;
          Wil = Wi.low = M[offset + i * 2 + 1] | 0;
        } else {
          gamma0x = W[i - 15];
          gamma0xh = gamma0x.high;
          gamma0xl = gamma0x.low;
          gamma0h = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
          gamma0l = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));
          gamma1x = W[i - 2];
          gamma1xh = gamma1x.high;
          gamma1xl = gamma1x.low;
          gamma1h = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
          gamma1l = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));
          Wi7 = W[i - 7];
          Wi7h = Wi7.high;
          Wi7l = Wi7.low;
          Wi16 = W[i - 16];
          Wi16h = Wi16.high;
          Wi16l = Wi16.low;
          Wil = gamma0l + Wi7l;
          Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
          Wil = Wil + gamma1l;
          Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
          Wil = Wil + Wi16l;
          Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);
          Wi.high = Wih;
          Wi.low = Wil;
        }
        chh = (eh & fh) ^ (~eh & gh);
        chl = (el & fl) ^ (~el & gl);
        majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
        majl = (al & bl) ^ (al & cl) ^ (bl & cl);
        sigma0h = ((ah >>> 28) | (al << 4)) ^ ((ah << 30) | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
        sigma0l = ((al >>> 28) | (ah << 4)) ^ ((al << 30) | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
        sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
        sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));
        Ki = glbl.K[i];
        Kih = Ki.high;
        Kil = Ki.low;
        t1l = hl + sigma1l;
        t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
        t1l = t1l + chl;
        t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
        t1l = t1l + Kil;
        t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
        t1l = t1l + Wil;
        t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);
        t2l = sigma0l + majl;
        t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);
        hh = gh;
        hl = gl;
        gh = fh;
        gl = fl;
        fh = eh;
        fl = el;
        el = (dl + t1l) | 0;
        eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
        dh = ch;
        dl = cl;
        ch = bh;
        cl = bl;
        bh = ah;
        bl = al;
        al = (t1l + t2l) | 0;
        ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
      }
      H0l = H0.low = H0l + al;
      H0.high = H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0);
      H1l = H1.low = H1l + bl;
      H1.high = H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0);
      H2l = H2.low = H2l + cl;
      H2.high = H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0);
      H3l = H3.low = H3l + dl;
      H3.high = H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0);
      H4l = H4.low = H4l + el;
      H4.high = H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0);
      H5l = H5.low = H5l + fl;
      H5.high = H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0);
      H6l = H6.low = H6l + gl;
      H6.high = H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0);
      H7l = H7.low = H7l + hl;
      return H7.high = H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0);
    };

    SHA512.prototype._doFinalize = function() {
      var dataWords, nBitsLeft, nBitsTotal;
      dataWords = this._data.words;
      nBitsTotal = this._nDataBytes * 8;
      nBitsLeft = this._data.sigBytes * 8;
      dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
      dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
      dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
      this._data.sigBytes = dataWords.length * 4;
      this._process();
      return this._hash.toX32();
    };

    SHA512.prototype.copy_to = function(obj) {
      SHA512.__super__.copy_to.call(this, obj);
      return obj._hash = this._hash.clone();
    };

    SHA512.prototype.clone = function() {
      var out;
      out = new SHA512();
      this.copy_to(out);
      return out;
    };

    return SHA512;

  })(Hasher);

  exports.transform = function(x) {
    var out;
    out = (new SHA512).finalize(x);
    x.scrub();
    return out;
  };

}).call(this);

},{"./algbase":10,"./wordarray":30}],28:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var BlockCipher, G, Global, TwoFish, scrub_vec,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };



  BlockCipher = require('./algbase').BlockCipher;

  scrub_vec = require('./util').scrub_vec;

  Global = (function() {
    function Global() {
      this.P = [[0xA9, 0x67, 0xB3, 0xE8, 0x04, 0xFD, 0xA3, 0x76, 0x9A, 0x92, 0x80, 0x78, 0xE4, 0xDD, 0xD1, 0x38, 0x0D, 0xC6, 0x35, 0x98, 0x18, 0xF7, 0xEC, 0x6C, 0x43, 0x75, 0x37, 0x26, 0xFA, 0x13, 0x94, 0x48, 0xF2, 0xD0, 0x8B, 0x30, 0x84, 0x54, 0xDF, 0x23, 0x19, 0x5B, 0x3D, 0x59, 0xF3, 0xAE, 0xA2, 0x82, 0x63, 0x01, 0x83, 0x2E, 0xD9, 0x51, 0x9B, 0x7C, 0xA6, 0xEB, 0xA5, 0xBE, 0x16, 0x0C, 0xE3, 0x61, 0xC0, 0x8C, 0x3A, 0xF5, 0x73, 0x2C, 0x25, 0x0B, 0xBB, 0x4E, 0x89, 0x6B, 0x53, 0x6A, 0xB4, 0xF1, 0xE1, 0xE6, 0xBD, 0x45, 0xE2, 0xF4, 0xB6, 0x66, 0xCC, 0x95, 0x03, 0x56, 0xD4, 0x1C, 0x1E, 0xD7, 0xFB, 0xC3, 0x8E, 0xB5, 0xE9, 0xCF, 0xBF, 0xBA, 0xEA, 0x77, 0x39, 0xAF, 0x33, 0xC9, 0x62, 0x71, 0x81, 0x79, 0x09, 0xAD, 0x24, 0xCD, 0xF9, 0xD8, 0xE5, 0xC5, 0xB9, 0x4D, 0x44, 0x08, 0x86, 0xE7, 0xA1, 0x1D, 0xAA, 0xED, 0x06, 0x70, 0xB2, 0xD2, 0x41, 0x7B, 0xA0, 0x11, 0x31, 0xC2, 0x27, 0x90, 0x20, 0xF6, 0x60, 0xFF, 0x96, 0x5C, 0xB1, 0xAB, 0x9E, 0x9C, 0x52, 0x1B, 0x5F, 0x93, 0x0A, 0xEF, 0x91, 0x85, 0x49, 0xEE, 0x2D, 0x4F, 0x8F, 0x3B, 0x47, 0x87, 0x6D, 0x46, 0xD6, 0x3E, 0x69, 0x64, 0x2A, 0xCE, 0xCB, 0x2F, 0xFC, 0x97, 0x05, 0x7A, 0xAC, 0x7F, 0xD5, 0x1A, 0x4B, 0x0E, 0xA7, 0x5A, 0x28, 0x14, 0x3F, 0x29, 0x88, 0x3C, 0x4C, 0x02, 0xB8, 0xDA, 0xB0, 0x17, 0x55, 0x1F, 0x8A, 0x7D, 0x57, 0xC7, 0x8D, 0x74, 0xB7, 0xC4, 0x9F, 0x72, 0x7E, 0x15, 0x22, 0x12, 0x58, 0x07, 0x99, 0x34, 0x6E, 0x50, 0xDE, 0x68, 0x65, 0xBC, 0xDB, 0xF8, 0xC8, 0xA8, 0x2B, 0x40, 0xDC, 0xFE, 0x32, 0xA4, 0xCA, 0x10, 0x21, 0xF0, 0xD3, 0x5D, 0x0F, 0x00, 0x6F, 0x9D, 0x36, 0x42, 0x4A, 0x5E, 0xC1, 0xE0], [0x75, 0xF3, 0xC6, 0xF4, 0xDB, 0x7B, 0xFB, 0xC8, 0x4A, 0xD3, 0xE6, 0x6B, 0x45, 0x7D, 0xE8, 0x4B, 0xD6, 0x32, 0xD8, 0xFD, 0x37, 0x71, 0xF1, 0xE1, 0x30, 0x0F, 0xF8, 0x1B, 0x87, 0xFA, 0x06, 0x3F, 0x5E, 0xBA, 0xAE, 0x5B, 0x8A, 0x00, 0xBC, 0x9D, 0x6D, 0xC1, 0xB1, 0x0E, 0x80, 0x5D, 0xD2, 0xD5, 0xA0, 0x84, 0x07, 0x14, 0xB5, 0x90, 0x2C, 0xA3, 0xB2, 0x73, 0x4C, 0x54, 0x92, 0x74, 0x36, 0x51, 0x38, 0xB0, 0xBD, 0x5A, 0xFC, 0x60, 0x62, 0x96, 0x6C, 0x42, 0xF7, 0x10, 0x7C, 0x28, 0x27, 0x8C, 0x13, 0x95, 0x9C, 0xC7, 0x24, 0x46, 0x3B, 0x70, 0xCA, 0xE3, 0x85, 0xCB, 0x11, 0xD0, 0x93, 0xB8, 0xA6, 0x83, 0x20, 0xFF, 0x9F, 0x77, 0xC3, 0xCC, 0x03, 0x6F, 0x08, 0xBF, 0x40, 0xE7, 0x2B, 0xE2, 0x79, 0x0C, 0xAA, 0x82, 0x41, 0x3A, 0xEA, 0xB9, 0xE4, 0x9A, 0xA4, 0x97, 0x7E, 0xDA, 0x7A, 0x17, 0x66, 0x94, 0xA1, 0x1D, 0x3D, 0xF0, 0xDE, 0xB3, 0x0B, 0x72, 0xA7, 0x1C, 0xEF, 0xD1, 0x53, 0x3E, 0x8F, 0x33, 0x26, 0x5F, 0xEC, 0x76, 0x2A, 0x49, 0x81, 0x88, 0xEE, 0x21, 0xC4, 0x1A, 0xEB, 0xD9, 0xC5, 0x39, 0x99, 0xCD, 0xAD, 0x31, 0x8B, 0x01, 0x18, 0x23, 0xDD, 0x1F, 0x4E, 0x2D, 0xF9, 0x48, 0x4F, 0xF2, 0x65, 0x8E, 0x78, 0x5C, 0x58, 0x19, 0x8D, 0xE5, 0x98, 0x57, 0x67, 0x7F, 0x05, 0x64, 0xAF, 0x63, 0xB6, 0xFE, 0xF5, 0xB7, 0x3C, 0xA5, 0xCE, 0xE9, 0x68, 0x44, 0xE0, 0x4D, 0x43, 0x69, 0x29, 0x2E, 0xAC, 0x15, 0x59, 0xA8, 0x0A, 0x9E, 0x6E, 0x47, 0xDF, 0x34, 0x35, 0x6A, 0xCF, 0xDC, 0x22, 0xC9, 0xC0, 0x9B, 0x89, 0xD4, 0xED, 0xAB, 0x12, 0xA2, 0x0D, 0x52, 0xBB, 0x02, 0x2F, 0xA9, 0xD7, 0x61, 0x1E, 0xB4, 0x50, 0x04, 0xF6, 0xC2, 0x16, 0x25, 0x86, 0x56, 0x55, 0x09, 0xBE, 0x91]];
      this.P_00 = 1;
      this.P_01 = 0;
      this.P_02 = 0;
      this.P_03 = 1;
      this.P_04 = 1;
      this.P_10 = 0;
      this.P_11 = 0;
      this.P_12 = 1;
      this.P_13 = 1;
      this.P_14 = 0;
      this.P_20 = 1;
      this.P_21 = 1;
      this.P_22 = 0;
      this.P_23 = 0;
      this.P_24 = 0;
      this.P_30 = 0;
      this.P_31 = 1;
      this.P_32 = 1;
      this.P_33 = 0;
      this.P_34 = 1;
      this.GF256_FDBK = 0x169;
      this.GF256_FDBK_2 = this.GF256_FDBK / 2;
      this.GF256_FDBK_4 = this.GF256_FDBK / 4;
      this.RS_GF_FDBK = 0x14D;
      this.SK_STEP = 0x02020202;
      this.SK_BUMP = 0x01010101;
      this.SK_ROTL = 9;
    }

    return Global;

  })();

  G = new Global();

  exports.TwoFish = TwoFish = (function(_super) {
    __extends(TwoFish, _super);

    TwoFish.blockSize = 4 * 4;

    TwoFish.prototype.blockSize = TwoFish.blockSize;

    TwoFish.keySize = 256 / 8;

    TwoFish.prototype.keySize = TwoFish.keySize;

    TwoFish.ivSize = TwoFish.blockSize;

    TwoFish.prototype.ivSize = TwoFish.ivSize;

    function TwoFish(key) {
      this._key = key.clone();
      this.gMDS0 = [];
      this.gMDS1 = [];
      this.gMDS2 = [];
      this.gMDS3 = [];
      this.gSubKeys = [];
      this.gSBox = [];
      this.k64Cnt = 0;
      this._doReset();
    }

    TwoFish.prototype.getByte = function(x, n) {
      return (x >>> (n * 8)) & 0xFF;
    };

    TwoFish.prototype.switchEndianness = function(word) {
      return ((word & 0xff) << 24) | (((word >> 8) & 0xff) << 16) | (((word >> 16) & 0xff) << 8) | ((word >> 24) & 0xff);
    };

    TwoFish.prototype.LFSR1 = function(x) {
      return (x >> 1) ^ ((x & 0x01) !== 0 ? G.GF256_FDBK_2 : 0);
    };

    TwoFish.prototype.LFSR2 = function(x) {
      return (x >> 2) ^ ((x & 0x02) !== 0 ? G.GF256_FDBK_2 : 0) ^ ((x & 0x01) !== 0 ? G.GF256_FDBK_4 : 0);
    };

    TwoFish.prototype.Mx_X = function(x) {
      return x ^ this.LFSR2(x);
    };

    TwoFish.prototype.Mx_Y = function(x) {
      return x ^ this.LFSR1(x) ^ this.LFSR2(x);
    };

    TwoFish.prototype.RS_rem = function(x) {
      var b, g2, g3;
      b = (x >>> 24) & 0xff;
      g2 = ((b << 1) ^ ((b & 0x80) !== 0 ? G.RS_GF_FDBK : 0)) & 0xff;
      g3 = ((b >>> 1) ^ ((b & 0x01) !== 0 ? G.RS_GF_FDBK >>> 1 : 0)) ^ g2;
      return (x << 8) ^ (g3 << 24) ^ (g2 << 16) ^ (g3 << 8) ^ b;
    };

    TwoFish.prototype.RS_MDS_Encode = function(k0, k1) {
      var i, r, _i, _j;
      r = k1;
      for (i = _i = 0; _i < 4; i = ++_i) {
        r = this.RS_rem(r);
      }
      r ^= k0;
      for (i = _j = 0; _j < 4; i = ++_j) {
        r = this.RS_rem(r);
      }
      return r;
    };

    TwoFish.prototype.F32 = function(x, k32) {
      var b0, b1, b2, b3, k0, k1, k2, k3, m, res;
      b0 = this.getByte(x, 0);
      b1 = this.getByte(x, 1);
      b2 = this.getByte(x, 2);
      b3 = this.getByte(x, 3);
      k0 = k32[0];
      k1 = k32[1];
      k2 = k32[2];
      k3 = k32[3];
      m = this.k64Cnt & 3;
      res = m === 1 ? this.gMDS0[(G.P[G.P_01][b0] & 0xff) ^ this.getByte(k0, 0)] ^ this.gMDS1[(G.P[G.P_11][b1] & 0xff) ^ this.getByte(k0, 1)] ^ this.gMDS2[(G.P[G.P_21][b2] & 0xff) ^ this.getByte(k0, 2)] ^ this.gMDS3[(G.P[G.P_31][b3] & 0xff) ^ this.getByte(k0, 3)] : (m === 0 ? (b0 = (G.P[G.P_04][b0] & 0xff) ^ this.getByte(k3, 0), b1 = (G.P[G.P_14][b1] & 0xff) ^ this.getByte(k3, 1), b2 = (G.P[G.P_24][b2] & 0xff) ^ this.getByte(k3, 2), b3 = (G.P[G.P_34][b3] & 0xff) ^ this.getByte(k3, 3)) : void 0, m === 0 || m === 3 ? (b0 = (G.P[G.P_03][b0] & 0xff) ^ this.getByte(k2, 0), b1 = (G.P[G.P_13][b1] & 0xff) ^ this.getByte(k2, 1), b2 = (G.P[G.P_23][b2] & 0xff) ^ this.getByte(k2, 2), b3 = (G.P[G.P_33][b3] & 0xff) ^ this.getByte(k2, 3)) : void 0, this.gMDS0[(G.P[G.P_01][(G.P[G.P_02][b0] & 0xff) ^ this.getByte(k1, 0)] & 0xff) ^ this.getByte(k0, 0)] ^ this.gMDS1[(G.P[G.P_11][(G.P[G.P_12][b1] & 0xff) ^ this.getByte(k1, 1)] & 0xff) ^ this.getByte(k0, 1)] ^ this.gMDS2[(G.P[G.P_21][(G.P[G.P_22][b2] & 0xff) ^ this.getByte(k1, 2)] & 0xff) ^ this.getByte(k0, 2)] ^ this.gMDS3[(G.P[G.P_31][(G.P[G.P_32][b3] & 0xff) ^ this.getByte(k1, 3)] & 0xff) ^ this.getByte(k0, 3)]);
      return res;
    };

    TwoFish.prototype.Fe32_0 = function(x) {
      return this.gSBox[0x000 + 2 * (x & 0xff)] ^ this.gSBox[0x001 + 2 * ((x >>> 8) & 0xff)] ^ this.gSBox[0x200 + 2 * ((x >>> 16) & 0xff)] ^ this.gSBox[0x201 + 2 * ((x >>> 24) & 0xff)];
    };

    TwoFish.prototype.Fe32_3 = function(x) {
      return this.gSBox[0x000 + 2 * ((x >>> 24) & 0xff)] ^ this.gSBox[0x001 + 2 * (x & 0xff)] ^ this.gSBox[0x200 + 2 * ((x >>> 8) & 0xff)] ^ this.gSBox[0x201 + 2 * ((x >>> 16) & 0xff)];
    };

    TwoFish.prototype._doReset = function() {
      var A, B, b0, b1, b2, b3, i, j, k0, k1, k2, k3, k32e, k32o, m, m1, mX, mY, p, q, sBoxKeys, _i, _j, _k, _l, _ref, _ref1, _results;
      k32e = [];
      k32o = [];
      sBoxKeys = [];
      m1 = [];
      mX = [];
      mY = [];
      this.k64Cnt = this._key.words.length / 2;
      if (this.k64Cnt < 1) {
        throw "Key size less than 64 bits";
      }
      if (this.k64Cnt > 4) {
        throw "Key size larger than 256 bits";
      }
      for (i = _i = 0; _i < 256; i = ++_i) {
        j = G.P[0][i] & 0xff;
        m1[0] = j;
        mX[0] = this.Mx_X(j) & 0xff;
        mY[0] = this.Mx_Y(j) & 0xff;
        j = G.P[1][i] & 0xff;
        m1[1] = j;
        mX[1] = this.Mx_X(j) & 0xff;
        mY[1] = this.Mx_Y(j) & 0xff;
        this.gMDS0[i] = m1[G.P_00] | mX[G.P_00] << 8 | mY[G.P_00] << 16 | mY[G.P_00] << 24;
        this.gMDS1[i] = mY[G.P_10] | mY[G.P_10] << 8 | mX[G.P_10] << 16 | m1[G.P_10] << 24;
        this.gMDS2[i] = mX[G.P_20] | mY[G.P_20] << 8 | m1[G.P_20] << 16 | mY[G.P_20] << 24;
        this.gMDS3[i] = mX[G.P_30] | m1[G.P_30] << 8 | mY[G.P_30] << 16 | mX[G.P_30] << 24;
      }
      for (i = _j = 0, _ref = this.k64Cnt; 0 <= _ref ? _j < _ref : _j > _ref; i = 0 <= _ref ? ++_j : --_j) {
        p = i * 2;
        k32e[i] = this.switchEndianness(this._key.words[p]);
        k32o[i] = this.switchEndianness(this._key.words[p + 1]);
        sBoxKeys[this.k64Cnt - 1 - i] = this.RS_MDS_Encode(k32e[i], k32o[i]);
      }
      for (i = _k = 0, _ref1 = 40 / 2; 0 <= _ref1 ? _k < _ref1 : _k > _ref1; i = 0 <= _ref1 ? ++_k : --_k) {
        q = i * G.SK_STEP;
        A = this.F32(q, k32e);
        B = this.F32(q + G.SK_BUMP, k32o);
        B = B << 8 | B >>> 24;
        A += B;
        this.gSubKeys[i * 2] = A;
        A += B;
        this.gSubKeys[i * 2 + 1] = A << G.SK_ROTL | A >>> (32 - G.SK_ROTL);
      }
      k0 = sBoxKeys[0];
      k1 = sBoxKeys[1];
      k2 = sBoxKeys[2];
      k3 = sBoxKeys[3];
      this.gSBox = [];
      _results = [];
      for (i = _l = 0; _l < 256; i = ++_l) {
        b0 = b1 = b2 = b3 = i;
        m = this.k64Cnt & 3;
        if (m === 1) {
          this.gSBox[i * 2] = this.gMDS0[(G.P[G.P_01][b0] & 0xff) ^ this.getByte(k0, 0)];
          this.gSBox[i * 2 + 1] = this.gMDS1[(G.P[G.P_11][b1] & 0xff) ^ this.getByte(k0, 1)];
          this.gSBox[i * 2 + 0x200] = this.gMDS2[(G.P[G.P_21][b2] & 0xff) ^ this.getByte(k0, 2)];
          _results.push(this.gSBox[i * 2 + 0x201] = this.gMDS3[(G.P[G.P_31][b3] & 0xff) ^ this.getByte(k0, 3)]);
        } else {
          if (m === 0) {
            b0 = (G.P[G.P_04][b0] & 0xff) ^ this.getByte(k3, 0);
            b1 = (G.P[G.P_14][b1] & 0xff) ^ this.getByte(k3, 1);
            b2 = (G.P[G.P_24][b2] & 0xff) ^ this.getByte(k3, 2);
            b3 = (G.P[G.P_34][b3] & 0xff) ^ this.getByte(k3, 3);
          }
          if (m === 0 || m === 3) {
            b0 = (G.P[G.P_03][b0] & 0xff) ^ this.getByte(k2, 0);
            b1 = (G.P[G.P_13][b1] & 0xff) ^ this.getByte(k2, 1);
            b2 = (G.P[G.P_23][b2] & 0xff) ^ this.getByte(k2, 2);
            b3 = (G.P[G.P_33][b3] & 0xff) ^ this.getByte(k2, 3);
          }
          this.gSBox[i * 2] = this.gMDS0[(G.P[G.P_01][(G.P[G.P_02][b0] & 0xff) ^ this.getByte(k1, 0)] & 0xff) ^ this.getByte(k0, 0)];
          this.gSBox[i * 2 + 1] = this.gMDS1[(G.P[G.P_11][(G.P[G.P_12][b1] & 0xff) ^ this.getByte(k1, 1)] & 0xff) ^ this.getByte(k0, 1)];
          this.gSBox[i * 2 + 0x200] = this.gMDS2[(G.P[G.P_21][(G.P[G.P_22][b2] & 0xff) ^ this.getByte(k1, 2)] & 0xff) ^ this.getByte(k0, 2)];
          _results.push(this.gSBox[i * 2 + 0x201] = this.gMDS3[(G.P[G.P_31][(G.P[G.P_32][b3] & 0xff) ^ this.getByte(k1, 3)] & 0xff) ^ this.getByte(k0, 3)]);
        }
      }
      return _results;
    };

    TwoFish.prototype.scrub = function() {
      scrub_vec(this.gSubKeys);
      scrub_vec(this.gSBox);
      return this._key.scrub();
    };

    TwoFish.prototype.decryptBlock = function(M, offset) {
      var k, r, t0, t1, x0, x1, x2, x3, _i;
      if (offset == null) {
        offset = 0;
      }
      x2 = this.switchEndianness(M[offset]) ^ this.gSubKeys[4];
      x3 = this.switchEndianness(M[offset + 1]) ^ this.gSubKeys[5];
      x0 = this.switchEndianness(M[offset + 2]) ^ this.gSubKeys[6];
      x1 = this.switchEndianness(M[offset + 3]) ^ this.gSubKeys[7];
      k = 8 + 2 * 16 - 1;
      for (r = _i = 0; _i < 16; r = _i += 2) {
        t0 = this.Fe32_0(x2);
        t1 = this.Fe32_3(x3);
        x1 ^= t0 + 2 * t1 + this.gSubKeys[k--];
        x0 = (x0 << 1 | x0 >>> 31) ^ (t0 + t1 + this.gSubKeys[k--]);
        x1 = x1 >>> 1 | x1 << 31;
        t0 = this.Fe32_0(x0);
        t1 = this.Fe32_3(x1);
        x3 ^= t0 + 2 * t1 + this.gSubKeys[k--];
        x2 = (x2 << 1 | x2 >>> 31) ^ (t0 + t1 + this.gSubKeys[k--]);
        x3 = x3 >>> 1 | x3 << 31;
      }
      M[offset] = this.switchEndianness(x0 ^ this.gSubKeys[0]);
      M[offset + 1] = this.switchEndianness(x1 ^ this.gSubKeys[1]);
      M[offset + 2] = this.switchEndianness(x2 ^ this.gSubKeys[2]);
      return M[offset + 3] = this.switchEndianness(x3 ^ this.gSubKeys[3]);
    };

    TwoFish.prototype.encryptBlock = function(M, offset) {
      var k, r, t0, t1, x0, x1, x2, x3, _i;
      if (offset == null) {
        offset = 0;
      }
      x0 = this.switchEndianness(M[offset]) ^ this.gSubKeys[0];
      x1 = this.switchEndianness(M[offset + 1]) ^ this.gSubKeys[1];
      x2 = this.switchEndianness(M[offset + 2]) ^ this.gSubKeys[2];
      x3 = this.switchEndianness(M[offset + 3]) ^ this.gSubKeys[3];
      k = 8;
      for (r = _i = 0; _i < 16; r = _i += 2) {
        t0 = this.Fe32_0(x0);
        t1 = this.Fe32_3(x1);
        x2 ^= t0 + t1 + this.gSubKeys[k++];
        x2 = x2 >>> 1 | x2 << 31;
        x3 = (x3 << 1 | x3 >>> 31) ^ (t0 + 2 * t1 + this.gSubKeys[k++]);
        t0 = this.Fe32_0(x2);
        t1 = this.Fe32_3(x3);
        x0 ^= t0 + t1 + this.gSubKeys[k++];
        x0 = x0 >>> 1 | x0 << 31;
        x1 = (x1 << 1 | x1 >>> 31) ^ (t0 + 2 * t1 + this.gSubKeys[k++]);
      }
      M[offset] = this.switchEndianness(x2 ^ this.gSubKeys[4]);
      M[offset + 1] = this.switchEndianness(x3 ^ this.gSubKeys[5]);
      M[offset + 2] = this.switchEndianness(x0 ^ this.gSubKeys[6]);
      return M[offset + 3] = this.switchEndianness(x1 ^ this.gSubKeys[7]);
    };

    return TwoFish;

  })(BlockCipher);

}).call(this);

},{"./algbase":10,"./util":29}],29:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var default_delay, iced, uint_max, __iced_k, __iced_k_noop;

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  uint_max = Math.pow(2, 32);

  exports.fixup_uint32 = function(x) {
    var ret, x_pos;
    ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x;
    return ret;
  };

  exports.scrub_buffer = function(b) {
    var i, n_full_words;
    n_full_words = b.length >> 2;
    i = 0;
    while (i < n_full_words) {
      b.writeUInt32LE(0, i);
      i += 4;
    }
    while (i < b.length) {
      b.writeUInt8(0, i);
      i++;
    }
    return false;
  };

  exports.scrub_vec = function(v) {
    var i, _i, _ref;
    for (i = _i = 0, _ref = v.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      v[i] = 0;
    }
    return false;
  };

  exports.default_delay = default_delay = function(i, n, cb) {
    var ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    (function(__iced_k) {
      if (typeof setImmediate !== "undefined" && setImmediate !== null) {
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "src/util.iced",
            funcname: "default_delay"
          });
          setImmediate(__iced_deferrals.defer({
            lineno: 37
          }));
          __iced_deferrals._fulfill();
        })(__iced_k);
      } else {
        (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "src/util.iced",
            funcname: "default_delay"
          });
          setTimeout(__iced_deferrals.defer({
            lineno: 39
          }), 1);
          __iced_deferrals._fulfill();
        })(__iced_k);
      }
    })(function() {
      return cb();
    });
  };

  exports.bulk = function(n_input_bytes, _arg, _arg1) {
    var call_ph, cb, default_n, delay, finalize, i, left, n, n_words, progress_hook, ret, total_words, update, what, ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    update = _arg.update, finalize = _arg.finalize, default_n = _arg.default_n;
    delay = _arg1.delay, n = _arg1.n, cb = _arg1.cb, what = _arg1.what, progress_hook = _arg1.progress_hook;
    i = 0;
    left = 0;
    total_words = Math.ceil(n_input_bytes / 4);
    delay || (delay = default_delay);
    n || (n = default_n);
    call_ph = function(i) {
      return typeof progress_hook === "function" ? progress_hook({
        what: what,
        i: i,
        total: total_words
      }) : void 0;
    };
    call_ph(0);
    (function(__iced_k) {
      var _results, _while;
      _results = [];
      _while = function(__iced_k) {
        var _break, _continue, _next;
        _break = function() {
          return __iced_k(_results);
        };
        _continue = function() {
          return iced.trampoline(function() {
            return _while(__iced_k);
          });
        };
        _next = function(__iced_next_arg) {
          _results.push(__iced_next_arg);
          return _continue();
        };
        if (!((left = total_words - i) > 0)) {
          return _break();
        } else {
          n_words = Math.min(n, left);
          update(i, i + n_words);
          call_ph(i);
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "src/util.iced",
              funcname: "bulk"
            });
            delay(i, total_words, __iced_deferrals.defer({
              lineno: 73
            }));
            __iced_deferrals._fulfill();
          })(function() {
            return _next(i += n_words);
          });
        }
      };
      _while(__iced_k);
    })(function() {
      call_ph(total_words);
      ret = finalize();
      return cb(ret);
    });
  };

}).call(this);

},{"iced-coffee-script/lib/coffee-script/iced":5}],30:[function(require,module,exports){
var Buffer=require("__browserify_Buffer").Buffer;// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var WordArray, X64Word, X64WordArray, buffer_to_ui8a, endian_reverse, ui8a_to_buffer, util;



  util = require('./util');

  buffer_to_ui8a = function(b) {
    var i, ret, _i, _ref;
    ret = new Uint8Array(b.length);
    for (i = _i = 0, _ref = b.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      ret[i] = b.readUInt8(i);
    }
    return ret;
  };

  ui8a_to_buffer = function(v) {
    var i, ret, _i, _ref;
    ret = new Buffer(v.length);
    for (i = _i = 0, _ref = v.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      ret.writeUInt8(v[i], i);
    }
    return ret;
  };

  endian_reverse = function(x) {
    return ((x >>> 24) & 0xff) | (((x >>> 16) & 0xff) << 8) | (((x >>> 8) & 0xff) << 16) | ((x & 0xff) << 24);
  };

  exports.WordArray = WordArray = (function() {
    function WordArray(words, sigBytes) {
      this.words = words || [];
      this.sigBytes = sigBytes != null ? sigBytes : this.words.length * 4;
    }

    WordArray.prototype.concat = function(wordArray) {
      var i, thatByte, thatSigBytes, thatWords, _i;
      thatWords = wordArray.words;
      thatSigBytes = wordArray.sigBytes;
      this.clamp();
      if (this.sigBytes % 4) {
        for (i = _i = 0; 0 <= thatSigBytes ? _i < thatSigBytes : _i > thatSigBytes; i = 0 <= thatSigBytes ? ++_i : --_i) {
          thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
          this.words[(this.sigBytes + i) >>> 2] |= thatByte << (24 - ((this.sigBytes + i) % 4) * 8);
        }
      } else {
        this.words = this.words.concat(thatWords);
      }
      this.sigBytes += thatSigBytes;
      return this;
    };

    WordArray.prototype.clamp = function() {
      this.words[this.sigBytes >>> 2] &= 0xffffffff << (32 - (this.sigBytes % 4) * 8);
      this.words.length = Math.ceil(this.sigBytes / 4);
      return this;
    };

    WordArray.prototype.clone = function() {
      return new WordArray(this.words.slice(0), this.sigBytes);
    };

    WordArray.prototype.to_buffer = function() {
      var ch, out, p, w, _i, _len, _ref;
      out = new Buffer(this.sigBytes);
      p = 0;
      _ref = this.words;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        w = _ref[_i];
        if (!((this.sigBytes - p) >= 4)) {
          continue;
        }
        w = util.fixup_uint32(w);
        out.writeUInt32BE(w, p);
        p += 4;
      }
      while (p < this.sigBytes) {
        ch = (this.words[p >>> 2] >>> (24 - (p % 4) * 8)) & 0xff;
        out.writeUInt8(ch, p);
        p++;
      }
      return out;
    };

    WordArray.prototype.endian_reverse = function() {
      var i, w, _i, _len, _ref;
      _ref = this.words;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        w = _ref[i];
        this.words[i] = endian_reverse(w);
      }
      return this;
    };

    WordArray.prototype.split = function(n) {
      var i, out, sz;
      if (!(((this.sigBytes % 4) === 0) && ((this.words.length % n) === 0))) {
        throw new Error("bad key alignment");
      }
      sz = this.words.length / n;
      out = (function() {
        var _i, _ref, _results;
        _results = [];
        for (i = _i = 0, _ref = this.words.length; sz > 0 ? _i < _ref : _i > _ref; i = _i += sz) {
          _results.push(new WordArray(this.words.slice(i, i + sz)));
        }
        return _results;
      }).call(this);
      return out;
    };

    WordArray.prototype.to_utf8 = function() {
      return this.to_buffer().toString('utf8');
    };

    WordArray.prototype.to_hex = function() {
      return this.to_buffer().toString('hex');
    };

    WordArray.prototype.to_ui8a = function() {
      return buffer_to_ui8a(this.to_buffer());
    };

    WordArray.alloc = function(b) {
      if (Buffer.isBuffer(b)) {
        return WordArray.from_buffer(b);
      } else if ((typeof b === 'object') && (b instanceof WordArray)) {
        return b;
      } else if (typeof b === 'string') {
        return WordArray.from_hex(b);
      } else {
        return null;
      }
    };

    WordArray.from_buffer = function(b) {
      var ch, last, p, words;
      words = [];
      p = 0;
      while ((b.length - p) >= 4) {
        words.push(b.readUInt32BE(p));
        p += 4;
      }
      if (p < b.length) {
        last = 0;
        while (p < b.length) {
          ch = b.readUInt8(p);
          last |= ch << (24 - (p % 4) * 8);
          p++;
        }
        last = util.fixup_uint32(last);
        words.push(last);
      }
      return new WordArray(words, b.length);
    };

    WordArray.from_buffer_le = function(b) {
      var ch, last, p, words;
      words = [];
      p = 0;
      while ((b.length - p) >= 4) {
        words.push(b.readUInt32LE(p));
        p += 4;
      }
      if (p < b.length) {
        last = 0;
        while (p < b.length) {
          ch = b.readUInt8(p);
          last |= ch << ((p % 4) * 8);
          p++;
        }
        last = util.fixup_uint32(last);
        words.push(last);
      }
      return new WordArray(words, b.length);
    };

    WordArray.from_utf8 = function(s) {
      return WordArray.from_buffer(new Buffer(s, 'utf8'));
    };

    WordArray.from_utf8_le = function(s) {
      return WordArray.from_buffer_le(new Buffer(s, 'utf8'));
    };

    WordArray.from_hex = function(s) {
      return WordArray.from_buffer(new Buffer(s, 'hex'));
    };

    WordArray.from_hex_le = function(s) {
      return WordArray.from_buffer_le(new Buffer(s, 'hex'));
    };

    WordArray.from_ui8a = function(v) {
      return WordArray.from_buffer(ui8a_to_buffer(v));
    };

    WordArray.from_i32a = function(v) {
      return new WordArray(Array.apply([], v));
    };

    WordArray.prototype.equal = function(wa) {
      var i, ret, w, _i, _len, _ref;
      ret = true;
      if (wa.sigBytes !== this.sigBytes) {
        ret = false;
      } else {
        _ref = this.words;
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          w = _ref[i];
          if (util.fixup_uint32(w) !== util.fixup_uint32(wa.words[i])) {
            ret = false;
          }
        }
      }
      return ret;
    };

    WordArray.prototype.xor = function(wa2, _arg) {
      var dst_offset, i, n_words, src_offset, tmp, _i;
      dst_offset = _arg.dst_offset, src_offset = _arg.src_offset, n_words = _arg.n_words;
      if (!dst_offset) {
        dst_offset = 0;
      }
      if (!src_offset) {
        src_offset = 0;
      }
      if (n_words == null) {
        n_words = wa2.words.length - src_offset;
      }
      if (this.words.length < dst_offset + n_words) {
        throw new Error("dest range exceeded (" + this.words.length + " < " + (dst_offset + n_words) + ")");
      }
      if (wa2.words.length < src_offset + n_words) {
        throw new Error("source range exceeded");
      }
      for (i = _i = 0; 0 <= n_words ? _i < n_words : _i > n_words; i = 0 <= n_words ? ++_i : --_i) {
        tmp = this.words[dst_offset + i] ^ wa2.words[src_offset + i];
        this.words[dst_offset + i] = util.fixup_uint32(tmp);
      }
      return this;
    };

    WordArray.prototype.truncate = function(n_bytes) {
      var n_words;
      if (!(n_bytes <= this.sigBytes)) {
        throw new Error("Cannot truncate: " + n_bytes + " > " + this.sigBytes);
      }
      n_words = Math.ceil(n_bytes / 4);
      return new WordArray(this.words.slice(0, n_words), n_bytes);
    };

    WordArray.prototype.unshift = function(n_words) {
      var ret;
      if (this.words.length >= n_words) {
        ret = this.words.splice(0, n_words);
        this.sigBytes -= n_words * 4;
        return new WordArray(ret);
      } else {
        return null;
      }
    };

    WordArray.prototype.is_scrubbed = function() {
      var w, _i, _len, _ref;
      _ref = this.words;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        w = _ref[_i];
        if (w !== 0) {
          return false;
        }
      }
      return true;
    };

    WordArray.prototype.scrub = function() {
      return util.scrub_vec(this.words);
    };

    WordArray.prototype.slice = function(low, hi) {
      var n, sb;
      n = this.words.length;
      if (!((low < hi) && (hi <= n))) {
        throw new Error("Bad WordArray slice [" + low + "," + hi + ")] when only " + n + " avail");
      }
      sb = (hi - low) * 4;
      if (hi === n) {
        sb -= n * 4 - this.sigBytes;
      }
      return new WordArray(this.words.slice(low, hi), sb);
    };

    return WordArray;

  })();

  exports.X64Word = X64Word = (function() {
    function X64Word(high, low) {
      this.high = high;
      this.low = low;
    }

    X64Word.prototype.clone = function() {
      return new X64Word(this.high, this.low);
    };

    return X64Word;

  })();

  exports.X64WordArray = X64WordArray = (function() {
    function X64WordArray(words, sigBytes) {
      this.sigBytes = sigBytes;
      this.words = words || [];
      if (!this.sigBytes) {
        this.sigBytes = this.words.length * 8;
      }
    }

    X64WordArray.prototype.toX32 = function() {
      var v, w, _i, _len, _ref;
      v = [];
      _ref = this.words;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        w = _ref[_i];
        v.push(w.high);
        v.push(w.low);
      }
      return new WordArray(v, this.sigBytes);
    };

    X64WordArray.prototype.clone = function() {
      var w;
      return new X64WordArray((function() {
        var _i, _len, _ref, _results;
        _ref = this.words;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          w = _ref[_i];
          _results.push(w.clone());
        }
        return _results;
      }).call(this), this.sigBytes);
    };

    return X64WordArray;

  })();

  exports.buffer_to_ui8a = buffer_to_ui8a;

  exports.ui8a_to_buffer = ui8a_to_buffer;

  exports.endian_reverse = endian_reverse;

}).call(this);

},{"./util":29,"__browserify_Buffer":3}],31:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {
  var Generator, iced, __iced_k, __iced_k_noop;

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  Generator = Generator = (function() {
    function Generator(opts) {
      opts = opts || {};
      this.loop_delay = opts.loop_delay || 10;
      this.work_min = opts.work_min || 1;
      this.auto_stop_bits = opts.auto_stop_bits || 4096;
      this.max_bits_per_delta = opts.max_bits_per_delta || 4;
      this.entropies = [];
      this.running = true;
      this.timer_race_loop();
    }

    Generator.prototype.generate = function(bits_wanted, cb) {
      var e, harvested_bits, res, ___iced_passed_deferral, __iced_deferrals, __iced_k,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      harvested_bits = 0;
      res = [];
      (function(__iced_k) {
        var _results, _while;
        _results = [];
        _while = function(__iced_k) {
          var _break, _continue, _next;
          _break = function() {
            return __iced_k(_results);
          };
          _continue = function() {
            return iced.trampoline(function() {
              return _while(__iced_k);
            });
          };
          _next = function(__iced_next_arg) {
            _results.push(__iced_next_arg);
            return _continue();
          };
          if (!(harvested_bits < bits_wanted)) {
            return _break();
          } else {
            (function(__iced_k) {
              if (_this.entropies.length) {
                e = _this.entropies.splice(0, 1)[0];
                harvested_bits += e[1];
                return __iced_k(res.push(e[0]));
              } else {
                (function(__iced_k) {
                  __iced_deferrals = new iced.Deferrals(__iced_k, {
                    parent: ___iced_passed_deferral,
                    filename: "src/generator.iced",
                    funcname: "Generator.generate"
                  });
                  setTimeout(__iced_deferrals.defer({
                    lineno: 22
                  }), _this.loop_delay);
                  __iced_deferrals._fulfill();
                })(__iced_k);
              }
            })(_next);
          }
        };
        _while(__iced_k);
      })(function() {
        return cb(res);
      });
    };

    Generator.prototype.stop = function() {
      return this.running = false;
    };

    Generator.prototype.resume = function() {
      return this.running = true;
    };

    Generator.prototype.reset = function() {
      this.entropies = [];
      return this.total_bits = 0;
    };

    Generator.prototype.count_unused_bits = function() {
      var bits, e, _i, _len, _ref;
      bits = 0;
      _ref = this.entropies;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        e = _ref[_i];
        bits += e[1];
      }
      return bits;
    };

    Generator.prototype.timer_race_loop = function() {
      var count, delta, entropy, v, ___iced_passed_deferral, __iced_deferrals, __iced_k, _results, _while,
        _this = this;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      this._last_count = null;
      _results = [];
      _while = function(__iced_k) {
        var _break, _continue, _next;
        _break = function() {
          return __iced_k(_results);
        };
        _continue = function() {
          return iced.trampoline(function() {
            return _while(__iced_k);
          });
        };
        _next = function(__iced_next_arg) {
          _results.push(__iced_next_arg);
          return _continue();
        };
        if (!true) {
          return _break();
        } else {
          if (_this.running && (_this.count_unused_bits() < _this.auto_stop_bits)) {
            count = _this.millisecond_count();
            if ((_this._last_count != null) && (delta = count - _this._last_count)) {
              entropy = Math.floor(_this.log_2(Math.abs(delta)));
              entropy = Math.min(_this.max_bits_per_delta, entropy);
              v = [delta, entropy];
              _this.entropies.push(v);
            }
            _this._last_count = count;
          }
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "src/generator.iced",
              funcname: "Generator.timer_race_loop"
            });
            setTimeout(__iced_deferrals.defer({
              lineno: 48
            }), _this.loop_delay);
            __iced_deferrals._fulfill();
          })(_next);
        }
      };
      _while(__iced_k);
    };

    Generator.prototype.log_2 = function(x) {
      return Math.log(x) / Math.LN2;
    };

    Generator.prototype.millisecond_count = function() {
      var d, i, x;
      d = Date.now();
      i = x = 0;
      while (Date.now() < d + this.work_min + 1) {
        i++;
        x = Math.sin(Math.sqrt(Math.log(i + x)));
      }
      return i;
    };

    return Generator;

  })();

  if (typeof window !== "undefined" && window !== null) {
    window.Generator = Generator;
  }

  if (typeof exports !== "undefined" && exports !== null) {
    exports.Generator = Generator;
  }

}).call(this);

},{"iced-coffee-script/lib/coffee-script/iced":5}],32:[function(require,module,exports){
// Generated by IcedCoffeeScript 1.6.3-g
(function() {


  exports.Generator = require('../lib/generator').Generator;

}).call(this);

},{"../lib/generator":31}],33:[function(require,module,exports){
var Buffer=require("__browserify_Buffer").Buffer;(function() {
  var HMAC_SHA256, WordArray, from_utf8, generate, iced, params, pbkdf2, run, scrypt, util, __iced_k, __iced_k_noop, _ref;

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  _ref = require('triplesec'), scrypt = _ref.scrypt, pbkdf2 = _ref.pbkdf2, HMAC_SHA256 = _ref.HMAC_SHA256, WordArray = _ref.WordArray, util = _ref.util;

  generate = require('keybase-bitcoin').generate;

  params = require('../json/params.json');

  from_utf8 = function(s, i) {
    var b, b2, ret;
    b = new Buffer(s, 'utf8');
    b2 = Buffer.concat([b, new Buffer([i])]);
    ret = WordArray.from_buffer(b2);
    util.scrub_buffer(b);
    util.scrub_buffer(b2);
    return ret;
  };

  exports.run = run = function(_arg, cb) {
    var d, d2, k, obj, out, passphrase, progress_hook, s1, s2, salt, seed_final, seeds, v, ___iced_passed_deferral, __iced_deferrals, __iced_k,
      _this = this;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    passphrase = _arg.passphrase, salt = _arg.salt, progress_hook = _arg.progress_hook;
    d = {};
    seeds = [];
    for (k in params) {
      v = params[k];
      d[k] = v;
    }
    d.key = from_utf8(passphrase, 1);
    d.salt = from_utf8(salt, 1);
    d.progress_hook = progress_hook;
    (function(__iced_k) {
      __iced_deferrals = new iced.Deferrals(__iced_k, {
        parent: ___iced_passed_deferral,
        funcname: "run"
      });
      scrypt(d, __iced_deferrals.defer({
        assign_fn: (function() {
          return function() {
            return s1 = arguments[0];
          };
        })(),
        lineno: 26
      }));
      __iced_deferrals._fulfill();
    })(function() {
      seeds.push(s1.to_buffer());
      d2 = {
        key: from_utf8(passphrase, 2),
        salt: from_utf8(salt, 2),
        c: params.pbkdf2c,
        dkLen: params.dkLen,
        progress_hook: progress_hook,
        klass: HMAC_SHA256
      };
      (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          funcname: "run"
        });
        pbkdf2(d2, __iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              return s2 = arguments[0];
            };
          })(),
          lineno: 38
        }));
        __iced_deferrals._fulfill();
      })(function() {
        var _i, _len, _ref1;
        seeds.push(s2.to_buffer());
        s1.xor(s2, {});
        seed_final = s1.to_buffer();
        seeds.push(seed_final);
        _ref1 = [s1, s2, d.key, d2.key];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          obj = _ref1[_i];
          obj.scrub();
        }
        out = generate(seed_final);
        out.seeds = seeds;
        return cb(out);
      });
    });
  };

}).call(this);


},{"../json/params.json":34,"__browserify_Buffer":3,"iced-coffee-script/lib/coffee-script/iced":5,"keybase-bitcoin":7,"triplesec":18}],34:[function(require,module,exports){
module.exports={ 
  "N"        : 18,
  "p"        : 1,
  "r"        : 8,
  "dkLen"    : 32,
  "pbkdf2c"  : 65536
}

},{}]},{},[33])
(33)
});
;

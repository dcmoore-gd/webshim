(function(jQuery){
(function(){var h=Function.prototype.call,i=Object.prototype,j=Array.prototype.slice,m,e;if(!Function.prototype.bind)Function.prototype.bind=function(f){var k=this;if("function"!=typeof k)throw new TypeError;var c=j.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=k.prototype;var e=new e,a=k.apply(e,c.concat(j.call(arguments)));return null!==a&&Object(a)===a?a:e}return k.apply(f,c.concat(j.call(arguments)))};return d};e=h.bind(i.toString);m=h.bind(i.hasOwnProperty);
if(!Array.isArray)Array.isArray=function(f){return"[object Array]"==e(f)};if(!Array.prototype.forEach)Array.prototype.forEach=function(f,k){var c=l(this),d=0,a=c.length>>>0;if("[object Function]"!=e(f))throw new TypeError;for(;d<a;)d in c&&f.call(k,c[d],d,c),d++};if(!Array.prototype.map)Array.prototype.map=function(f,k){var c=l(this),d=c.length>>>0,a=Array(d);if("[object Function]"!=e(f))throw new TypeError;for(var b=0;b<d;b++)b in c&&(a[b]=f.call(k,c[b],b,c));return a};if(!Array.prototype.filter)Array.prototype.filter=
function(f,k){var c=l(this),d=c.length>>>0,a=[];if("[object Function]"!=e(f))throw new TypeError;for(var b=0;b<d;b++)b in c&&f.call(k,c[b],b,c)&&a.push(c[b]);return a};if(!Array.prototype.every)Array.prototype.every=function(f,a){var c=l(this),d=c.length>>>0;if("[object Function]"!=e(f))throw new TypeError;for(var b=0;b<d;b++)if(b in c&&!f.call(a,c[b],b,c))return!1;return!0};if(!Array.prototype.some)Array.prototype.some=function(f,a){var c=l(this),d=c.length>>>0;if("[object Function]"!=e(f))throw new TypeError;
for(var b=0;b<d;b++)if(b in c&&f.call(a,c[b],b,c))return!0;return!1};if(!Array.prototype.reduce)Array.prototype.reduce=function(f){var a=l(this),c=a.length>>>0;if("[object Function]"!=e(f))throw new TypeError;if(!c&&1==arguments.length)throw new TypeError;var d=0,b;if(2<=arguments.length)b=arguments[1];else{do{if(d in a){b=a[d++];break}if(++d>=c)throw new TypeError;}while(1)}for(;d<c;d++)d in a&&(b=f.call(void 0,b,a[d],d,a));return b};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(f){var a=
l(this),c=a.length>>>0;if("[object Function]"!=e(f))throw new TypeError;if(!c&&1==arguments.length)throw new TypeError;var d,c=c-1;if(2<=arguments.length)d=arguments[1];else{do{if(c in a){d=a[c--];break}if(0>--c)throw new TypeError;}while(1)}do c in this&&(d=f.call(void 0,d,a[c],c,a));while(c--);return d};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(a){var b=l(this),c=b.length>>>0;if(!c)return-1;var d=0;1<arguments.length&&(d=n(arguments[1]));for(d=0<=d?d:c-Math.abs(d);d<c;d++)if(d in
b&&b[d]===a)return d;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(a){var b=l(this),c=b.length>>>0;if(!c)return-1;var d=c-1;1<arguments.length&&(d=n(arguments[1]));for(d=0<=d?d:c-Math.abs(d);0<=d;d--)if(d in b&&a===b[d])return d;return-1};if(!Object.keys){var b=!0,a="toString,toLocaleString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,constructor".split(","),o=a.length,g;for(g in{toString:null})b=!1;Object.keys=function(f){if("object"!=typeof f&&"function"!=
typeof f||null===f)throw new TypeError("Object.keys called on a non-object");var e=[],c;for(c in f)m(f,c)&&e.push(c);if(b)for(c=0;c<o;c++){var d=a[c];m(f,d)&&e.push(d)}return e}}if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){var a,b,c;if(!isFinite(this))throw new RangeError;a=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];for(b=a.length;b--;)c=a[b],10>c&&(a[b]="0"+c);return a.slice(0,3).join("-")+"T"+
a.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()};h="\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";if(!String.prototype.trim||h.trim()){var h="["+h+"]",p=RegExp("^"+h+h+"*"),q=
RegExp(h+h+"*$");String.prototype.trim=function(){return(""+this).replace(p,"").replace(q,"")}}var n=function(a){a=+a;a!==a?a=-1:0!==a&&a!==1/0&&a!==-(1/0)&&(a=(0<a||-1)*Math.floor(Math.abs(a)));return a},r="a"!="a"[0],l=function(a){if(null==a)throw new TypeError;return r&&"string"==typeof a&&a?a.split(""):Object(a)}})();
(function(h,i){var j=!(!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor);j&&!h.browser.msie&&Object.defineProperty&&Object.prototype.__defineGetter__&&function(){try{var e=document.createElement("foo");Object.defineProperty(e,"bar",{get:function(){return!0}});j=!!e.bar}catch(b){j=!1}e=null}();Modernizr.objectAccessor=!(!(j||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__)||h.browser.opera&&!(11<=i.browserVersion));Modernizr.advancedObjectProperties=j;
if(!j||!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor||!Object.defineProperty){var m=Function.prototype.call.bind(Object.prototype.hasOwnProperty);i.objectCreate=function(e,b,a,h){var g;g=function(){};g.prototype=e;g=new g;if(!h&&!("__proto__"in g)&&!Modernizr.objectAccessor)g.__proto__=e;b&&i.defineProperties(g,b);if(a)g.options=jQuery.extend(!0,{},g.options||{},a),a=g.options;g._create&&jQuery.isFunction(g._create)&&g._create(a);return g};i.defineProperties=function(e,
b){for(var a in b)m(b,a)&&i.defineProperty(e,a,b[a]);return e};i.defineProperty=function(e,b,a){if("object"!=typeof a||null===a)return e;if(m(a,"value"))return e[b]=a.value,e;e.__defineGetter__&&("function"==typeof a.get&&e.__defineGetter__(b,a.get),"function"==typeof a.set&&e.__defineSetter__(b,a.set));return e};i.getPrototypeOf=function(e){return Object.getPrototypeOf&&Object.getPrototypeOf(e)||e.__proto__||e.constructor&&e.constructor.prototype};i.getOwnPropertyDescriptor=function(e,b){if("object"!==
typeof e&&"function"!==typeof e||null===e)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var a;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return a=Object.getOwnPropertyDescriptor(e,b)}catch(h){}a={configurable:!0,enumerable:!0,writable:!0,value:void 0};var g=e.__lookupGetter__&&e.__lookupGetter__(b),i=e.__lookupSetter__&&e.__lookupSetter__(b);if(!g&&!i){if(!m(e,b))return;a.value=e[b];return a}delete a.writable;delete a.value;a.get=a.set=void 0;if(g)a.get=
g;if(i)a.set=i;return a}}})(jQuery,jQuery.webshims);
})(typeof webshimJq!='undefined'?webshimJq:jQuery);

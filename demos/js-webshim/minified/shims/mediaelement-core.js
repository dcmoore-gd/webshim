(function(jQuery){
(function(i,h,k){var j=h.audio&&h.video,o=!1;if(j)i=document.createElement("video"),h.videoBuffered="buffered"in i,o="loop"in i,k.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),h.videoBuffered||(k.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:h.videoBuffered,d:["dom-support"]}),k.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(c,e,h,i,k){var f=e.mediaelement,v=e.cfg.mediaelement,
r=function(a,b){var a=c(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;var g=a.attr("type");if(g)d.type=g,d.container=c.trim(g.split(";")[0]);else if(b||(b=a[0].nodeName.toLowerCase(),"source"==b&&(b=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),g=f.getTypeForSrc(d.src,b))d.type=g,d.container=g;if(g=a.attr("media"))d.media=g;return d},l=swfobject.hasFlashPlayerVersion("9.0.115"),m=!l&&"postMessage"in h&&j,w=function(){e.ready("mediaelement-swf",
function(){if(!f.createSWF)e.modules["mediaelement-swf"].test=c.noop,e.reTest(["mediaelement-swf"],j)})},s=function(){var a;return function(){!a&&m&&(a=!0,e.loader.loadScript("https://www.youtube.com/player_api"),e.polyfill("mediaelement-yt"))}}(),t=function(){l?w():s()};e.addPolyfill("mediaelement-yt",{test:!m,d:["dom-support"]});f.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],
"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};f.mimeTypes.source=c.extend({},f.mimeTypes.audio,
f.mimeTypes.video);f.getTypeForSrc=function(a,b){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],d;c.each(f.mimeTypes[b],function(b,c){if(-1!==c.indexOf(a))return d=b,!1});return d};f.srces=function(a,b){a=c(a);if(b)a.removeAttr("src").removeAttr("type").find("source").remove(),c.isArray(b)||(b=[b]),b.forEach(function(b){var d=i.createElement("source");"string"==typeof b&&(b={src:b});d.setAttribute("src",
b.src);b.type&&d.setAttribute("type",b.type);b.media&&d.setAttribute("media",b.media);a.append(d)});else{var b=[],d=a[0].nodeName.toLowerCase(),g=r(a,d);g.src?b.push(g):c("source",a).each(function(){g=r(this,d);g.src&&b.push(g)});return b}};c.fn.loadMediaSrc=function(a,b){return this.each(function(){b!==k&&(c(this).removeAttr("poster"),b&&c.attr(this,"poster",b));f.srces(this,a);c(this).mediaLoad()})};f.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
f.canThirdPlaySrces=function(a,b){var d="";if(l||m)a=c(a),b=b||f.srces(a),c.each(b,function(a,b){if(b.container&&b.src&&(l&&-1!=f.swfMimeTypes.indexOf(b.container)||m&&"video/youtube"==b.container))return d=b,!1});return d};var n={};f.canNativePlaySrces=function(a,b){var d="";if(j){var a=c(a),g=(a[0].nodeName||"").toLowerCase();if(!n[g])return d;b=b||f.srces(a);c.each(b,function(b,c){if(c.type&&n[g].prop._supvalue.call(a[0],c.type))return d=c,!1})}return d};f.setError=function(a,b){b||(b="can't play sources");
c(a).pause().data("mediaerror",b);e.warn("mediaelementError: "+b);setTimeout(function(){c(a).data("mediaerror")&&c(a).trigger("mediaerror")},1)};var u=function(){var a;return function(b,d,c){e.ready(l?"mediaelement-swf":"mediaelement-yt",function(){f.createSWF?f.createSWF(b,d,c):a||(a=!0,t(),u(b,d,c))});!a&&m&&!f.createSWF&&s()}}(),p=function(a,b,d,c,e){d||!1!==d&&b&&"third"==b.isActive?(d=f.canThirdPlaySrces(a,c))?u(a,d,b):e?f.setError(a,!1):p(a,b,!1,c,!0):(d=f.canNativePlaySrces(a,c))?b&&"third"==
b.isActive&&f.setActive(a,"html5",b):e?(f.setError(a,!1),b&&"third"==b.isActive&&f.setActive(a,"html5",b)):p(a,b,!0,c,!0)},x=/^(?:embed|object|datalist)$/i,q=function(a,b){var d=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{}),g=f.srces(a),h=a.parentNode;clearTimeout(d.loadTimer);c.data(a,"mediaerror",!1);if(g.length&&h&&!(1!=h.nodeType||x.test(h.nodeName||"")))b=b||e.data(a,"mediaelement"),p(a,b,v.preferFlash||k,g)};c(i).bind("ended",function(a){var b=e.data(a.target,"mediaelement");
(!o||b&&"html5"!=b.isActive||c.prop(a.target,"loop"))&&setTimeout(function(){!c.prop(a.target,"paused")&&c.prop(a.target,"loop")&&c(a.target).prop("currentTime",0).play()},1)});o||e.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var b=e.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=e.data(this,"mediaelement");q(this,a);j&&(!a||"html5"==a.isActive)&&b.prop._supvalue&&b.prop._supvalue.apply(this,arguments)}}});n[a]=e.defineNodeNameProperty(a,
"canPlayType",{prop:{value:function(b){var g="";j&&n[a].prop._supvalue&&(g=n[a].prop._supvalue.call(this,b),"no"==g&&(g=""));!g&&l&&(b=c.trim((b||"").split(";")[0]),-1!=f.swfMimeTypes.indexOf(b)&&(g="maybe"));return g}}})});e.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){q(a);a=null},9)}});h=function(){e.addReady(function(a,b){c("video, audio",
a).add(b.filter("video, audio")).each(function(){c.browser.msie&&8<e.browserVersion&&c.prop(this,"paused")&&!c.prop(this,"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():q(this);if(j){var a,b,f=this,h=function(){var a=c.prop(f,"buffered");if(a){for(var b="",d=0,e=a.length;d<e;d++)b+=a.end(d);return b}},i=function(){var a=h();a!=b&&(b=a,c(f).triggerHandler("progress"))};c(this).bind("play loadstart progress",function(c){"progress"==
c.type&&(b=h());clearTimeout(a);a=setTimeout(i,999)}).bind("emptied stalled mediaerror abort suspend",function(c){"emptied"==c.type&&(b=!1);clearTimeout(a)})}})})};j?(e.isReady("mediaelement-core",!0),h(),e.ready("WINDOWLOAD mediaelement",t)):e.ready("mediaelement-swf",h)})})(jQuery,Modernizr,jQuery.webshims);
})(typeof webshimJq!='undefined'?webshimJq:jQuery);

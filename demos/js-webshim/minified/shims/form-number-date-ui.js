(function(jQuery){
jQuery.webshims.register("form-number-date-ui",function(c,f,n,l,v,g){var o=f.triggerInlineForm,s=Modernizr.inputtypes,t=function(){var c={"padding-box":"innerWidth","border-box":"outerWidth","content-box":"width"},a=Modernizr.prefixed&&Modernizr.prefixed("boxSizing");return function(b,h){var f,i,g;i="width";a&&(i=c[b.css(a)]||i);f=b[i]();i="width"==i;if(f){var k=parseInt(h.css("marginLeft"),10)||0,q=h.outerWidth();(g=parseInt(b.css("marginRight"),10)||0)&&b.css("marginRight",0);k<=-1*q?(h.css("marginRight",
Math.floor(Math.abs(q+k)+g)),b.css("paddingRight",(parseInt(b.css("paddingRight"),10)||0)+Math.abs(k)),i&&b.css("width",Math.floor(f+k))):(h.css("marginRight",g),b.css("width",Math.floor(f-k-q)))}}}(),p={},w=c([]),r,j=function(d,a){c("input",d).add(a.filter("input")).each(function(){var b=c.prop(this,"type");if(j[b]&&!f.data(this,"shadowData"))j[b](c(this))})},x=function(d,a){if(g.lazyDate){var b=c.data(d[0],"setDateLazyTimer");b&&clearTimeout(b);c.data(d[0],"setDateLazyTimer",setTimeout(function(){d.datepicker("setDate",
a);c.removeData(d[0],"setDateLazyTimer");d=null},0))}else d.datepicker("setDate",a)};if(g.lazyDate===v)try{g.lazyDate=c.browser.msie&&9>f.browserVersion||500>c(n).width()&&500>c(n).height()}catch(z){}var u={tabindex:1,tabIndex:1,title:1,"aria-required":1,"aria-invalid":1};if(!g.copyAttrs)g.copyAttrs={};f.extendUNDEFProp(g.copyAttrs,u);j.common=function(d,a,b){Modernizr.formvalidation&&d.bind("firstinvalid",function(b){(f.fromSubmit||!r)&&d.unbind("invalid.replacedwidgetbubble").bind("invalid.replacedwidgetbubble",
function(c){!b.isInvalidUIPrevented()&&!c.isDefaultPrevented()&&(f.validityAlert.showFor(b.target),b.preventDefault(),c.preventDefault());d.unbind("invalid.replacedwidgetbubble")})});var h,m,i=c("input, span.ui-slider-handle",a),j=d[0].attributes;for(h in g.copyAttrs)if((m=j[h])&&m.specified)u[h]&&i[0]?i.attr(h,m.nodeValue):a[0].setAttribute(h,m.nodeValue);m=d.attr("id");h=g.calculateWidth?{css:{marginRight:d.css("marginRight"),marginLeft:d.css("marginLeft")},outerWidth:d.outerWidth()}:{};h.label=
m?c('label[for="'+m+'"]',d[0].form):w;m=f.getID(h.label);a.addClass(d[0].className);f.addShadowDom(d,a,{data:b||{},shadowFocusElement:c("input.input-datetime-local-date, span.ui-slider-handle",a)[0],shadowChilds:i});d.after(a).hide();d[0].form&&c(d[0].form).bind("reset",function(b){b.originalEvent&&!b.isDefaultPrevented()&&setTimeout(function(){d.prop("value",d.prop("value"))},0)});1==a.length&&!c("*",a)[0]&&(a.attr("aria-labelledby",m),h.label.bind("click",function(){a.focus();return!1}));return h};
Modernizr.formvalidation&&["input","form"].forEach(function(c){var a=f.defineNodeNameProperty(c,"checkValidity",{prop:{value:function(){r=!0;var b=a.prop._supvalue.apply(this,arguments);r=!1;return b}}})});if(!s.date||g.replaceUI){var y=function(d,a,b,h){var m,i,j=function(){k.dpDiv.unbind("mousedown.webshimsmousedownhandler");i=m=!1},k=a.bind("focusin",function(){j();k.dpDiv.unbind("mousedown.webshimsmousedownhandler").bind("mousedown.webshimsmousedownhandler",function(){m=!0})}).bind("focusout blur",
function(b){m&&(i=!0,b.stopImmediatePropagation())}).datepicker(c.extend(!0,{onClose:function(){i&&a.not(":focus")?(j(),a.trigger("focusout"),a.triggerHandler("blur")):j()}},p,g.datepicker,d.data("datepicker"))).bind("change",b).data("datepicker");k.dpDiv.addClass("input-date-datepicker-control");h&&f.triggerDomUpdate(h[0]);["disabled","min","max","value","step"].forEach(function(b){var c=d.prop(b);""!==c&&("disabled"!=b||!c)&&d.prop(b,c)});return k};j.date=function(d){if(c.fn.datepicker){var a=c('<input class="input-date" type="text" />'),
b=this.common(d,a,j.date.attrs),h=y(d,a,function(b){j.date.blockAttr=!0;var h;if(g.lazyDate){var f=c.data(a[0],"setDateLazyTimer");f&&(clearTimeout(f),c.removeData(a[0],"setDateLazyTimer"))}try{h=(h=c.datepicker.parseDate(a.datepicker("option","dateFormat"),a.prop("value")))?c.datepicker.formatDate("yy-mm-dd",h):a.prop("value")}catch(k){h=a.prop("value")}d.prop("value",h);j.date.blockAttr=!1;b.stopImmediatePropagation();o(d[0],"input");o(d[0],"change")});b.css&&(a.css(b.css),b.outerWidth&&a.outerWidth(b.outerWidth),
h.trigger[0]&&t(a,h.trigger))}};j.date.attrs={disabled:function(d,a,b){c.prop(a,"disabled",!!b)},min:function(d,a,b){try{b=c.datepicker.parseDate("yy-mm-dd",b)}catch(h){b=!1}b&&c(a).datepicker("option","minDate",b)},max:function(d,a,b){try{b=c.datepicker.parseDate("yy-mm-dd",b)}catch(h){b=!1}b&&c(a).datepicker("option","maxDate",b)},value:function(d,a,b){if(!j.date.blockAttr){try{var h=c.datepicker.parseDate("yy-mm-dd",b)}catch(f){h=!1}h?x(c(a),h):c.prop(a,"value",b)}}}}if(!s.range||g.replaceUI)j.range=
function(d){if(c.fn.slider){var a=c('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),b=this.common(d,a,j.range.attrs);c("span",a).attr("aria-labelledby",b.label.attr("id"));b.label.bind("click",function(){c("span",a).focus();return!1});b.css&&(a.css(b.css),b.outerWidth&&a.outerWidth(b.outerWidth));a.slider(c.extend(!0,{},g.slider,d.data("slider"))).bind("slide",function(b,c){if(b.originalEvent)j.range.blockAttr=!0,d.prop("value",c.value),j.range.blockAttr=
!1,o(d[0],"input"),o(d[0],"change")});["disabled","min","max","step","value"].forEach(function(b){var a=d.attr(b),f;"value"==b&&!a&&(f=d.getShadowElement())&&(a=(c(f).slider("option","max")-c(f).slider("option","min"))/2);null!=a&&d.attr(b,a)})}},j.range.attrs={disabled:function(d,a,b){b=!!b;c(a).slider("option","disabled",b);c("span",a).attr({"aria-disabled":b+"",tabindex:b?"-1":"0"})},min:function(d,a,b){b=b?1*b||0:0;c(a).slider("option","min",b);c("span",a).attr({"aria-valuemin":b})},max:function(d,
a,b){b=b||0===b?1*b||100:100;c(a).slider("option","max",b);c("span",a).attr({"aria-valuemax":b})},value:function(d,a,b){b=c(d).prop("valueAsNumber");isNaN(b)||(j.range.blockAttr||c(a).slider("option","value",b),c("span",a).attr({"aria-valuenow":b,"aria-valuetext":b}))},step:function(d,a,b){b=b&&c.trim(b)?1*b||1:1;c(a).slider("option","step",b)}};if(!f.bugs.valueAsNumberSet&&(g.replaceUI||!Modernizr.inputtypes.date||!Modernizr.inputtypes.range))n=function(){f.data(this,"hasShadow")&&c.prop(this,"value",
c.prop(this,"value"))},f.onNodeNamesPropertyModify("input","valueAsNumber",n),f.onNodeNamesPropertyModify("input","valueAsDate",n);c.each(["disabled","min","max","value","step"],function(c,a){f.onNodeNamesPropertyModify("input",a,function(b){var c=f.data(this,"shadowData");if(c&&c.data&&c.data[a]&&c.nativeElement===this)c.data[a](this,c.shadowElement,b)})});if(!g.availabeLangs)g.availabeLangs="af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" ");
n=function(){c.datepicker&&(f.activeLang({langObj:c.datepicker.regional,module:"form-number-date-ui",callback:function(d){c("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option",c.extend(!0,p,d,g.datepicker))}}),c(l).unbind("jquery-uiReady.langchange input-widgetsReady.langchange"))};c(l).bind("jquery-uiReady.langchange input-widgetsReady.langchange",n);n();(function(){var d=function(){var b={};return function(a){return a in b?b[a]:b[a]=c('<input type="'+a+'" />')[0].type===
a}}();if(!d("number")){var a=f.cfg["forms-ext"],b=f.inputTypes,h=function(a,d,e){e=e||{};if(!("type"in e))e.type=c.prop(a,"type");if(!("step"in e))e.step=f.getStep(a,e.type);if(!("valueAsNumber"in e))e.valueAsNumber=b[e.type].asNumber(c.prop(a,"value"));var h="any"==e.step?b[e.type].step*b[e.type].stepScaleFactor:e.step;f.addMinMaxNumberToCache("min",c(a),e);f.addMinMaxNumberToCache("max",c(a),e);if(isNaN(e.valueAsNumber))e.valueAsNumber=b[e.type].stepBase||0;if("any"!==e.step&&(a=Math.round(1E7*
((e.valueAsNumber-(e.minAsnumber||0))%e.step))/1E7)&&Math.abs(a)!=e.step)e.valueAsNumber-=a;a=e.valueAsNumber+h*d;return a=!isNaN(e.minAsNumber)&&a<e.minAsNumber?e.valueAsNumber*d<e.minAsNumber?e.minAsNumber:isNaN(e.maxAsNumber)?e.valueAsNumber:e.maxAsNumber:!isNaN(e.maxAsNumber)&&a>e.maxAsNumber?e.valueAsNumber*d>e.maxAsNumber?e.maxAsNumber:isNaN(e.minAsNumber)?e.valueAsNumber:e.minAsNumber:Math.round(1E7*a)/1E7};f.modules["form-number-date-ui"].getNextStep=h;var j=function(a,d,e){if(!a.disabled&&
!a.readOnly&&!c(e).hasClass("step-controls")&&(c.prop(a,"value",b[d].numberToString(h(a,c(e).hasClass("step-up")?1:-1,{type:d}))),c(a).unbind("blur.stepeventshim"),o(a,"input"),l.activeElement)){if(l.activeElement!==a)try{a.focus()}catch(f){}setTimeout(function(){if(l.activeElement!==a)try{a.focus()}catch(b){}c(a).one("blur.stepeventshim",function(){o(a,"change")})},0)}};if(a.stepArrows){var g={set:function(){var a=f.data(this,"step-controls");if(a)a[this.disabled||this.readonly?"addClass":"removeClass"]("disabled-step-control")}};
f.onNodeNamesPropertyModify("input","disabled",g);f.onNodeNamesPropertyModify("input","readonly",c.extend({},g))}var n={38:1,40:-1};f.addReady(function(g,i){a.stepArrows&&c("input",g).add(i.filter("input")).each(function(){var e=c.prop(this,"type");if(b[e]&&b[e].asNumber&&a.stepArrows&&!(!0!==a.stepArrows&&!a.stepArrows[e]||d(e)||c(g).hasClass("has-step-controls"))){var g=this,i=c('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>').insertAfter(g).bind("selectstart dragstart",
function(){return!1}).bind("mousedown mousepress",function(a){j(g,e,a.target);return!1}).bind("mousepressstart mousepressend",function(a){c(a.target)["mousepressstart"==a.type?"addClass":"removeClass"]("mousepress-ui")}),k=function(a,d){if(!g.disabled&&!g.readOnly)return c.prop(g,"value",b[e].numberToString(h(g,d,{type:e}))),o(g,"input"),!1},l=c(g).addClass("has-step-controls").attr({readonly:g.readOnly,disabled:g.disabled,autocomplete:"off",role:"spinbutton"}).bind(c.browser.msie?"keydown":"keypress",
function(a){if(!g.disabled&&!g.readOnly&&n[a.keyCode])return c.prop(g,"value",b[e].numberToString(h(g,n[a.keyCode],{type:e}))),o(g,"input"),!1});c.fn.mwheelIntent?l.add(i).bind("mwheelIntent",k):l.bind("focus",function(){l.add(i).unbind(".mwhellwebshims").bind("mousewheel.mwhellwebshims",k)}).bind("blur",function(){c(g).add(i).unbind(".mwhellwebshims")});f.data(g,"step-controls",i);a.calculateWidth&&(t(l,i),i.css("marginTop",(l.outerHeight()-i.outerHeight())/2))}})})}})();f.addReady(function(d,a){c(l).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",
function(){if(c.datepicker||c.fn.slider){if(c.datepicker&&!p.dateFormat)p.dateFormat=c.datepicker._defaults.dateFormat;j(d,a)}c.datepicker&&c.fn.slider?c(l).unbind(".initinputui"):f.modules["input-widgets"].src||f.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src')})})});
})(typeof webshimJq!='undefined'?webshimJq:jQuery);

(function(jQuery){
(function(a){var b=window.Modernizr,k=a.webshims,j=k.bugs,o=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),g=function(){if(o[0].querySelector)try{j.findRequired=!o[0].querySelector("select:required")}catch(a){j.findRequired=!1}};j.findRequired=!1;j.validationMessage=!1;j.valueAsNumberSet=!1;k.capturingEventPrevented=function(b){if(!b._isPolyfilled){var d=b.isDefaultPrevented,
w=b.preventDefault;b.preventDefault=function(){clearTimeout(a.data(b.target,b.type+"DefaultPrevented"));a.data(b.target,b.type+"DefaultPrevented",setTimeout(function(){a.removeData(b.target,b.type+"DefaultPrevented")},30));return w.apply(this,arguments)};b.isDefaultPrevented=function(){return!(!d.apply(this,arguments)&&!a.data(b.target,b.type+"DefaultPrevented"))};b._isPolyfilled=!0}};if(!b.formvalidation||j.bustedValidity)g();else if(k.capturingEvents(["input"]),k.capturingEvents(["invalid"],!0),
b.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var d=a("input",o).eq(0),l,w=function(a){k.loader.loadList(["dom-extend"]);k.ready("dom-extend",a)},n=function(g){var j=["form-extend","form-message","form-native-fix"];g&&(g.preventDefault(),g.stopImmediatePropagation());clearTimeout(l);setTimeout(function(){o&&(o.remove(),o=d=null)},9);if(!b.bugfreeformvalidation)k.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),k.modules["form-extend"].test=a.noop;k.isReady("form-number-date-api")&&
j.push("form-number-date-api");k.reTest(j);if(d)try{d.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&w(function(){k.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(b){!b&&this&&a.prop(this,"value",a.prop(this,"value"))}});k.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(b){if(!b&&this)b=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(b)}})})}catch(z){}(a.browser.opera||window.testGoodWithFix)&&
w(function(){var d=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(b){var c=k.defineNodeNameProperty(b,"checkValidity",{prop:{value:function(){k.fromSubmit||a(this).bind("invalid.checkvalidity",d);k.fromCheckValidity=!0;var f=c.prop._supvalue.apply(this,arguments);k.fromSubmit||a(this).unbind("invalid.checkvalidity",d);k.fromCheckValidity=!1;return f}}})});b.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&
k.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=a("select",this);if(c[0]&&c[0].options&&c[0].options.length)b=c[0].options}return b}}})})};o.appendTo("head");if(window.opera||window.testGoodWithFix){g();j.validationMessage=!d.prop("validationMessage");if((b.inputtypes||{}).date){try{d.prop("valueAsNumber",0)}catch(z){}j.valueAsNumberSet="1970-01-01"!=d.prop("value")}d.prop("value","")}o.bind("submit",function(a){b.bugfreeformvalidation=
!1;n(a)});l=setTimeout(function(){o&&o.triggerHandler("submit")},9);a("input, select",o).bind("invalid",n).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}})(jQuery);
jQuery.webshims.register("form-core",function(a,b,k,j,o,g){var d={radio:1},l={checkbox:1,radio:1},w=a([]),n=b.bugs,z=function(f){var f=a(f),c,b;c=w;if(d[f[0].type])b=f.prop("form"),c=(c=f[0].name)?b?a(b[c]):a(j.getElementsByName(c)).filter(function(){return!a.prop(this,"form")}):f,c=c.filter('[type="radio"]');return c},p=b.getContentValidationMessage=function(f,c,b){var i=a(f).data("errormessage")||f.getAttribute("x-moz-errormessage")||"";b&&i[b]&&(i=i[b]);"object"==typeof i&&(c=c||a.prop(f,"validity")||
{valid:1},c.valid||a.each(c,function(a,f){if(f&&"valid"!=a&&i[a])return i=i[a],!1}));if("object"==typeof i)i=i.defaultMessage;return i||""},y={number:1,range:1,date:1};a.extend(a.expr.filters,{"valid-element":function(f){return!(!a.prop(f,"willValidate")||!(a.prop(f,"validity")||{valid:1}).valid)},"invalid-element":function(f){return!(!a.prop(f,"willValidate")||(a.prop(f,"validity")||{valid:1}).valid)},"required-element":function(f){return!(!a.prop(f,"willValidate")||!a.prop(f,"required"))},"optional-element":function(f){return!!(a.prop(f,
"willValidate")&&!1===a.prop(f,"required"))},"in-range":function(f){if(!y[a.prop(f,"type")]||!a.prop(f,"willValidate"))return!1;f=a.prop(f,"validity");return!(!f||f.rangeOverflow||f.rangeUnderflow)},"out-of-range":function(f){if(!y[a.prop(f,"type")]||!a.prop(f,"willValidate"))return!1;f=a.prop(f,"validity");return!(!f||!f.rangeOverflow&&!f.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(f){a.expr.filters[f]=a.expr.filters[f+"-element"]});a.expr.filters.focus=function(a){try{var c=
a.ownerDocument;return a===c.activeElement&&(!c.hasFocus||c.hasFocus())}catch(b){}return!1};var q=a.event.customEvent||{};(n.bustedValidity||n.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var c=a.find,b=a.find.matchesSelector,m=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,i=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,b=function(b){var h=arguments,h=a.call(h,1,h.length);h.unshift(b.replace(m,i));return c.apply(this,
h)},h;for(h in c)c.hasOwnProperty(h)&&(b[h]=c[h]);return b}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",j.documentElement))a.find.matchesSelector=function(a,c){c=c.replace(m,i);return b.call(this,a,c)}}();var B=a.prop,r={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(c,b,m){var i=B.apply(this,arguments);if(c&&"form"in c&&r[b]&&m!==o&&a(c).hasClass("form-ui-invalid")&&(a.prop(c,"validity")||{valid:1}).valid)a(c).getShadowElement().removeClass("form-ui-invalid"),
"checked"==b&&m&&z(c).not(c).removeClass("form-ui-invalid").removeAttr("aria-invalid");return i};var c=function(c,b){var m;a.each(c,function(c,f){if(f)return m="customError"==c?a.prop(b,"validationMessage"):c,!1});return m};a(j).bind(g.validityUIEvents||"focusout change refreshvalidityui",function(f){if(f.target&&"submit"!=f.target.type&&a.prop(f.target,"willValidate")){var b=a.data(f.target,"webshimsswitchvalidityclass"),m=function(){var b=a(f.target).getNativeElement().trigger("refreshCustomValidityRules")[0],
h=a.prop(b,"validity"),m=a(b).getShadowElement(),x,t,v,u;h.valid?m.hasClass("form-ui-valid")||(x="form-ui-valid",t="form-ui-invalid",u="changedvaliditystate",v="changedvalid",l[b.type]&&b.checked&&z(b).not(b).removeClass(t).addClass(x).removeAttr("aria-invalid"),a.removeData(b,"webshimsinvalidcause")):(h=c(h,b),a.data(b,"webshimsinvalidcause")!=h&&(a.data(b,"webshimsinvalidcause",h),u="changedvaliditystate"),m.hasClass("form-ui-invalid")||(x="form-ui-invalid",t="form-ui-valid",l[b.type]&&!b.checked&&
z(b).not(b).removeClass(t).addClass(x),v="changedinvalid"));x&&(m.addClass(x).removeClass(t),setTimeout(function(){a(b).trigger(v)},0));u&&setTimeout(function(){a(b).trigger(u)},0);a.removeData(f.target,"webshimsswitchvalidityclass")};b&&clearTimeout(b);"refreshvalidityui"==f.type?m():a.data(f.target,"webshimsswitchvalidityclass",setTimeout(m,9))}});q.changedvaliditystate=!0;q.refreshCustomValidityRules=!0;q.changedvalid=!0;q.changedinvalid=!0;q.refreshvalidityui=!0;b.triggerInlineForm=function(c,
b){a(c).trigger(b)};b.modules["form-core"].getGroupElements=z;n=function(){b.scrollRoot=a.browser.webkit||"BackCompat"==j.compatMode?a(j.body):a(j.documentElement)};n();b.ready("DOM",n);b.getRelOffset=function(c,b){var c=a(c),m=a(b).offset(),i;a.swap(a(c)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=c.offset()});m.top-=i.top;m.left-=i.left;return m};b.validityAlert=function(){var c=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",h,m=!1,i=!1,s,d={hideDelay:5E3,
showFor:function(c,b,f,u){d._create();var c=a(c),A=a(c).getShadowElement(),g=d.getOffsetFromBody(A);d.clear();u?this.hide():(this.getMessage(c,b),this.position(A,g),h.css({fontSize:c.css("fontSize"),fontFamily:c.css("fontFamily")}),this.show(),this.hideDelay&&(m=setTimeout(s,this.hideDelay)),a(k).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(i);i=setTimeout(function(){d.position(A)},9)}));f||this.setFocus(A,g)},getOffsetFromBody:function(a){return b.getRelOffset(h,
a)},setFocus:function(i,t){var v=a(i).getShadowFocusElement(),u=b.scrollRoot.scrollTop(),d=(t||v.offset()).top-30,m;b.getID&&"label"==c&&h.attr("for",b.getID(v));u>d&&(b.scrollRoot.animate({scrollTop:d-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(u-d)),80)}),m=!0);try{v[0].focus()}catch(C){}m&&(b.scrollRoot.scrollTop(u),setTimeout(function(){b.scrollRoot.scrollTop(u)},0));setTimeout(function(){a(j).bind("focusout.validityalert",s)},10)},getMessage:function(c,b){b||(b=p(c[0])||c.prop("validationMessage"));
b?a("span.va-box",h).text(b):this.hide()},position:function(c,b){b=b?a.extend({},b):d.getOffsetFromBody(c);b.top+=c.outerHeight();h.css(b)},show:function(){"none"===h.css("display")&&h.css({opacity:0}).show();h.addClass("va-visible").fadeTo(400,1)},hide:function(){h.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(m);a(j).unbind(".validityalert");a(k).unbind(".validityalert");h.stop().removeAttr("for")},_create:function(){if(!h)h=d.errorBubble=a("<"+c+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
c+">").css({position:"absolute",display:"none"}),b.ready("DOM",function(){h.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&h.bgIframe()})}};s=a.proxy(d,"hide");return d}();(function(){var c,b=[],d;a(j).bind("invalid",function(i){if(!i.wrongWebkitInvalid){var s=a(i.target),g=s.getShadowElement();g.hasClass("form-ui-invalid")||(g.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(i.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!c)c=a.Event("firstinvalid"),c.isInvalidUIPrevented=i.isDefaultPrevented,g=a.Event("firstinvalidsystem"),a(j).triggerHandler(g,{element:i.target,form:i.target.form,isInvalidUIPrevented:i.isDefaultPrevented}),s.trigger(c);c&&c.isDefaultPrevented()&&i.preventDefault();b.push(i.target);i.extraData="fix";clearTimeout(d);d=setTimeout(function(){var d={type:"lastinvalid",cancelable:!1,invalidlist:a(b)};c=!1;b=[];a(i.target).trigger(d,d)},9);g=s=null}})})();a.fn.getErrorMessage=function(){var c="",
b=this[0];b&&(c=p(b)||a.prop(b,"customValidationMessage")||a.prop(b,"validationMessage"));return c};g.replaceValidationUI&&b.ready("DOM",function(){a(j).bind("firstinvalid",function(c){c.isInvalidUIPrevented()||(c.preventDefault(),a.webshims.validityAlert.showFor(c.target,a(c.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,b,k,j,o,g){var d=b.validityMessages,k=g.overrideMessages||g.customMessages?["customValidationMessage"]:[];d.en=d.en||d["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){d.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){d.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){d.en.rangeOverflow[a]=
"Value must be at or before {%max}."});d["en-US"]=d["en-US"]||d.en;d[""]=d[""]||d["en-US"];d.de=d.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){d.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){d.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){d.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var l=
d[""];b.createValidationMessage=function(b,d){var g=l[d];g&&"string"!==typeof g&&(g=g[a.prop(b,"type")]||g[(b.nodeName||"").toLowerCase()]||g.defaultMessage);g&&"value,min,max,title,maxlength,label".split(",").forEach(function(d){if(-1!==g.indexOf("{%"+d)){var j=("label"==d?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,d))||"";g=g.replace("{%"+d+"}",j);"value"==d&&(g=g.replace("{%valueLen}",j.length))}});return g||""};(b.bugs.validationMessage||!Modernizr.formvalidation||
b.bugs.bustedValidity)&&k.push("validationMessage");b.activeLang({langObj:d,module:"form-core",callback:function(a){l=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var d=a("select",this);if(d[0]&&d[0].options&&d[0].options.length)b=d[0].options}return b}}});k.forEach(function(d){b.defineNodeNamesProperty(["fieldset",
"output","button"],d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(g){var j=b.defineNodeNameProperty(g,d,{prop:{get:function(){var d=this,g="";if(!a.prop(d,"willValidate"))return g;var l=a.prop(d,"validity")||{valid:1};if(l.valid||(g=b.getContentValidationMessage(d,l)))return g;if(l.customError&&d.nodeName&&(g=Modernizr.formvalidation&&!b.bugs.bustedValidity&&j.prop._supget?j.prop._supget.call(d):b.data(d,"customvalidationMessage")))return g;a.each(l,function(a,j){if("valid"!=
a&&j&&(g=b.createValidationMessage(d,a)))return!1});return g||""},writeable:!1}})})})});
(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-extend",function(a,b,k,j){b.inputTypes=b.inputTypes||{};var o=b.cfg.forms,g,d=b.inputTypes,l={radio:1,checkbox:1};b.addInputType=function(a,b){d[a]=b};var w={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},n={valueMissing:function(c,f,h){if(!c.prop("required"))return!1;var d=!1;if(!("type"in h))h.type=(c[0].getAttribute("type")||
c[0].type||"").toLowerCase();if("select"==h.nodeName){if(f=!f)if(!(f=0>c[0].selectedIndex))c=c[0],f="select-one"==c.type&&2>c.size?!!a("> option:first-child",c).prop("selected"):!1;c=f}else c=l[h.type]?"checkbox"==h.type?!c.is(":checked"):!b.modules["form-core"].getGroupElements(c).filter(":checked")[0]:!f;return c},tooLong:function(){return!1},typeMismatch:function(a,b,h){if(""===b||"select"==h.nodeName)return!1;var g=!1;if(!("type"in h))h.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();
if(d[h.type]&&d[h.type].mismatch)g=d[h.type].mismatch(b,a);else if("validity"in a[0])g=a[0].validity.typeMismatch;return g},patternMismatch:function(a,f,h){if(""===f||"select"==h.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(d){b.error('invalid pattern value: "'+a+'" | '+d),a=!1}return!a?!1:!a.test(f)}};b.addValidityRule=function(a,b){n[a]=b};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var c=
this.form||this;if(!a.data(c,"invalidEventShim")&&(a(c).data("invalidEventShim",!0).bind("submit",a.event.special.invalid.handler),b.moveToFirstEvent(c,"submit"),b.bugs.bustedValidity&&a.nodeName(c,"form"))){var f=c.getAttribute("novalidate");c.setAttribute("novalidate","novalidate");b.data(c,"bustedNoValidate",null==f?null:f)}},teardown:a.noop,handler:function(c){if(!("submit"!=c.type||c.testedValidity||!c.originalEvent||!a.nodeName(c.target,"form")||a.prop(c.target,"noValidate"))){g=!0;c.testedValidity=
!0;if(!a(c.target).checkValidity())return c.stopImmediatePropagation(),g=!1;g=!1}}};a(j).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var z=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return z.apply(this,arguments)}});b.addInputType("email",{mismatch:function(){var a=o.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
return function(b){return!a.test(b)}}()});b.addInputType("url",{mismatch:function(){var a=o.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},w)}}},"prop");var p=function(c){var f,h=a.prop(c,"validity");if(h)a.data(c,"cachedValidity",
h);else return!0;if(!h.valid){f=a.Event("invalid");var d=a(c).trigger(f);if(g&&!p.unhandledInvalids&&!f.isDefaultPrevented())b.validityAlert.showFor(d),p.unhandledInvalids=!0}a.removeData(c,"cachedValidity");return h.valid},y=/^(?:select|textarea|input)/i;b.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var c=!0,f=a(a.prop(this,"elements")).filter(function(){if(!y.test(this.nodeName))return!1;var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});
p.unhandledInvalids=!1;for(var h=0,d=f.length;h<d;h++)p(f[h])||(c=!1);return c}}});b.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){p.unhandledInvalids=!1;return p(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(c){a.removeData(this,"cachedValidity");b.data(this,"customvalidationMessage",""+c)}},willValidate:{writeable:!1,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var f=a(this).getNativeElement()[0];return!(f.disabled||
f.readOnly||b[f.type])}}()},validity:{writeable:!1,get:function(){var c=a(this).getNativeElement(),f=c[0],h=a.data(f,"cachedValidity");if(h)return h;h=a.extend({},w);if(!a.prop(f,"willValidate")||"submit"==f.type)return h;var d=c.val(),g={nodeName:f.nodeName.toLowerCase()};h.customError=!!b.data(f,"customvalidationMessage");if(h.customError)h.valid=!1;a.each(n,function(a,b){if(b(c,d,g))h[a]=!0,h.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",h.valid?"false":"true");f=c=null;return h}}},
"prop");b.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:!a.browser.msie||7<b.browserVersion});b.reflectProperties(["input"],["pattern"]);if(!("maxLength"in j.createElement("textarea"))){var q=function(){var b,f=0,d=a([]),g=1E9,i=function(){var a=d.prop("value"),b=a.length;b>f&&b>g&&(b=Math.max(f,g),d.prop("value",a.substr(0,b)));f=b},s=function(){clearTimeout(b);d.unbind(".maxlengthconstraint")};
return function(j,x){s();if(-1<x)g=x,f=a.prop(j,"value").length,d=a(j),d.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",function(){setTimeout(i,0)}),d.bind("keyup.maxlengthconstraint",i),d.bind("blur.maxlengthconstraint",s),b=setInterval(i,200)}}();q.update=function(b,f){a(b).is(":focus")&&(null==f&&(f=a.prop(b,"maxlength")),q(e.target,f))};a(j).bind("focusin",function(b){var f;"TEXTAREA"==b.target.nodeName&&-1<(f=a.prop(b.target,
"maxlength"))&&q(b.target,f)});b.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);q.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);q.update(this,a)}else this.setAttribute("maxlength","0"),q.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==
typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});b.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}})}var B={submit:1,button:1,image:1},r={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},
{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var f="form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),d="form"+b.name,g=b.name,i="click.webshimssubmittermutate"+g,s=function(){if("form"in this&&B[this.type]){var i=a.prop(this,"form");if(i){var t=a.attr(this,d);if(null!=t&&(!b.limitedTo||t.toLowerCase()===a.prop(this,f))){var v=a.attr(i,g);a.attr(i,g,t);setTimeout(function(){if(null!=v)a.attr(i,g,v);else try{a(i).removeAttr(g)}catch(b){i.removeAttribute(g)}},
9)}}}};switch(b.proptype){case "url":var l=j.createElement("form");r[f]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);if(null==b)return"";l.setAttribute("action",b);return l.action}}};break;case "boolean":r[f]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":r[f]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var f=a.attr(this,
d);return!f||(f=f.toLowerCase())&&!b.limitedTo[f]?b.defaultProp:f}}};break;default:r[f]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);return null!=b?b:""}}}}r[d]||(r[d]={});r[d].attr={set:function(b){r[d].attr._supset.call(this,b);a(this).unbind(i).bind(i,s)},get:function(){return r[d].attr._supget.call(this)}};r[d].initAttr=!0;r[d].removeAttr={value:function(){a(this).unbind(i);r[d].removeAttr._supvalue.call(this)}}});b.defineNodeNamesProperties(["input","button"],
r);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):b.bugs.bustedValidity&&(b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){b.data(this,"bustedNoValidate",""+a)},get:function(){var a=b.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){b.data(this,
"bustedNoValidate",null)}}}),a.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(a,b){n[b]=function(a){return(a[0].validity||{})[b]||!1}}));b.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});a.browser.webkit&&Modernizr.inputtypes.date&&function(){var c={updateInput:1,input:1},d={date:1,time:1,"datetime-local":1},h={focusout:1,blur:1},l=
{updateInput:1,change:1},i=function(a){var b,d=!0,f=a.prop("value"),g=f,i=function(b){if(a){var i=a.prop("value");i!==f&&(f=i,(!b||!c[b.type])&&a.trigger("input"));b&&l[b.type]&&(g=i);!d&&i!==g&&a.trigger("change")}},j,k=function(c){clearInterval(b);setTimeout(function(){c&&h[c.type]&&(d=!1);a&&(a.unbind("focusout blur",k).unbind("input change updateInput",i),i());a=null},1)};clearInterval(b);b=setInterval(i,160);clearTimeout(j);j=setTimeout(i,9);a.unbind("focusout blur",k).unbind("input change updateInput",
i);a.bind("focusout blur",k).bind("input updateInput change",i)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;(function(){var c=function(b){var c=1,d,f;if("date"==b.type&&(g||!a(b).is(":focus")))if((f=b.value)&&10>f.length&&(f=f.split("-"))&&3==f.length){for(;3>c;c++)if(1==f[c].length)f[c]="0"+f[c];else if(2!=f[c].length){d=!0;break}if(!d)return f=f.join("-"),a.prop(b,"value",f),f}},d,f,i,h;d=b.defineNodeNameProperty("input","checkValidity",{prop:{value:function(){c(this);return d.prop._supvalue.apply(this,
arguments)}}});f=b.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){a("input",this).each(function(){c(this)});return f.prop._supvalue.apply(this,arguments)}}});i=b.defineNodeNameProperty("input","value",{prop:{set:function(){return i.prop._supset.apply(this,arguments)},get:function(){return c(this)||i.prop._supget.apply(this,arguments)}}});h=b.defineNodeNameProperty("input","validity",{prop:{writeable:!1,get:function(){c(this);return h.prop._supget.apply(this,arguments)}}});a(j).bind("change",
function(a){isChangeSubmit=!0;c(a.target);isChangeSubmit=!1})})();a(j).bind("focusin",function(b){b.target&&d[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&i(a(b.target))})}();b.addReady(function(b,f){var d;a("form",b).add(f.filter("form")).bind("invalid",a.noop);try{if(b==j&&!("form"in(j.activeElement||{})))(d=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0])&&d.offsetHeight&&d.offsetWidth&&d.focus()}catch(g){}});Modernizr.formattribute||
function(){b.defineNodeNamesProperty(["input","textarea","select","button","fieldset"],"form",{prop:{get:function(){var a=b.contentAttr(this,"form");a&&(a=j.getElementById(a));return a||this.form},writeable:!1}});var c=function(b){var c=a.data(b,"webshimsAddedElements");c&&(c.remove(),a.removeData(b,"webshimsAddedElements"))};b.defineNodeNamesProperty(["form"],"elements",{prop:{get:function(){var b=this.id,d;b&&(c(this),d=a('input[form="'+b+'"], select[form="'+b+'"], textarea[form="'+b+'"], button[form="'+
b+'"], fieldset[form="'+b+'"]').add(this.elements).get());return d||this.elements},writeable:!1}});a(function(){var b=function(a){a.stopPropagation()};a(k).delegate("form[id]","submit",function(b){if(!b.isDefaultPrevented()){var d=this;if(b=d.id)c(d),b=a('input[form="'+b+'"], select[form="'+b+'"], textarea[form="'+b+'"]').filter(function(){return!this.disabled&&this.name&&this.form!=d}).clone(),b.length&&(a.data(d,"webshimsAddedElements",a('<div class="webshims-visual-hide" />').append(b).appendTo(d)),
setTimeout(function(){c(d)},9)),b=null}});a(k).delegate('input[type="submit"][form], button[form], input[type="button"][form], input[type="image"][form], input[type="reset"][form]',"click",function(c){if(!c.isDefaultPrevented()){var d=a.prop(this,"form"),f=this.form,g;d&&d!=f&&(g=a(this).clone().addClass("webshims-visual-hide").bind("click",b).appendTo(d),f&&c.preventDefault(),g.trigger("click"),setTimeout(function(){g.remove();g=null},9))}})});var d=/\r?\n/g,g=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
l=/^(?:select|textarea)/i;a.fn.serializeArray=function(){return this.map(function(){var b=a.prop(this,"elements");return b?a.makeArray(b):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||l.test(this.nodeName)||g.test(this.type))}).map(function(b,c){var g=a(this).val();return null==g?null:a.isArray(g)?a.map(g,function(a){return{name:c.name,value:a.replace(d,"\r\n")}}):{name:c.name,value:g.replace(d,"\r\n")}}).get()}}();(function(){Modernizr.textareaPlaceholder=!!("placeholder"in
a("<textarea />")[0]);var c=a.browser.webkit&&Modernizr.textareaPlaceholder;if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder||c){var d="over"==b.cfg.forms.placeholderType,g=["textarea"];Modernizr.input.placeholder||g.push("input");var j=function(a){if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a)return a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",0),a.moveStart("character",0),a.select(),!0},i=function(b,c,g,i){!1===g&&(g=a.prop(b,"value"));if(!d&&"password"!=
b.type){if(!g&&i&&j(b)){var h;a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(d){if(!d||!(17==d.keyCode||16==d.keyCode))b.value=a.prop(b,"value"),c.box.removeClass("placeholder-visible"),clearTimeout(h),a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",function(){j(b);clearTimeout(h);h=setTimeout(function(){j(b)},9)}).bind("blur.placeholderremove",
function(){clearTimeout(h);a(b).unbind(".placeholderremove")});return}b.value=g}else if(!g&&i){a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(d){if(!d||!(17==d.keyCode||16==d.keyCode))c.box.removeClass("placeholder-visible"),a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});return}c.box.removeClass("placeholder-visible")},l=function(b,
c,g,h,j){if(!h&&(h=a.data(b,"placeHolder"),!h))return;a(b).unbind(".placeholderremove");if("focus"==j||!j&&a(b).is(":focus"))("password"==b.type||d||a(b).hasClass("placeholder-visible"))&&i(b,h,"",!0);else if(!1===c&&(c=a.prop(b,"value")),c)i(b,h,c);else if(!1===g&&(g=a.attr(b,"placeholder")||""),g&&!c){c=h;!1===g&&(g=a.prop(b,"placeholder"));if(!d&&"password"!=b.type)b.value=g;c.box.addClass("placeholder-visible")}else i(b,h,c)},o=function(b){var b=a(b),c=b.prop("id"),d=!(!b.prop("title")&&!b.attr("aria-labelledby"));
!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},n=function(){var c={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var c=a.data(b,"placeHolder");if(c)return c;c=a.data(b,"placeHolder",{});a(b).bind("focus.placeholder blur.placeholder",function(a){l(this,!1,!1,c,a.type);c.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")});
b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){l(b,!1,!1,c,a.type)},0)});if("password"==b.type||d){c.text=o(b);c.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();c.text.insertAfter(b).bind("mousedown.placeholder",function(){l(this,!1,!1,c,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(d,f){var g=(parseInt(a.css(b,"padding"+f),10)||0)+Math.max(parseInt(a.css(b,
"margin"+f),10)||0,0)+(parseInt(a.css(b,"border"+f+"Width"),10)||0);c.text.css("padding"+f,g)});a.css(b,"lineHeight");var g={width:a(b).width(),height:a(b).height()},h=a.css(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(d,f){var g=a.css(b,f);c.text.css(f)!=g&&c.text.css(f,g)});g.width&&g.height&&c.text.css(g);"none"!==h&&c.box.addClass("placeholder-box-"+h)}else g=function(d){a(b).hasClass("placeholder-visible")&&(i(b,c,""),d&&"submit"==d.type&&setTimeout(function(){d.isDefaultPrevented()&&
l(b,!1,!1,c)},9))},a(k).bind("beforeunload",g),c.box=a(b),b.form&&a(b.form).submit(g);return c},update:function(d,f){if(!c[a.prop(d,"type")]&&!a.nodeName(d,"textarea"))b.warn("placeholder not allowed on type: "+a.prop(d,"type"));else{var g=n.create(d);g.text&&g.text.text(f);l(d,!1,f,g)}}}}();a.webshims.publicMethods={pHolder:n};g.forEach(function(a){b.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){c?(b.data(this,"textareaPlaceholder",a),this.placeholder=""):b.contentAttr(this,"placeholder",
a);n.update(this,a)},get:function(){return(c?b.data(this,"textareaPlaceholder"):"")||b.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});g.forEach(function(d){var f={},g;["attr","prop"].forEach(function(d){f[d]={set:function(f){var h;c&&(h=b.data(this,"textareaPlaceholder"));h||(h=b.contentAttr(this,"placeholder"));a.removeData(this,"cachedValidity");var i=g[d]._supset.call(this,f);h&&"value"in this&&l(this,f,h);return i},get:function(){return a(this).hasClass("placeholder-visible")?"":
g[d]._supget.call(this)}}});g=b.defineNodeNameProperty(d,"value",f)})}})()});
jQuery.webshims.ready("dom-support",function(a,b,k,j){(function(){if(!("value"in j.createElement("output"))){b.defineNodeNameProperty("output","value",{prop:{set:function(b){var d=a.data(this,"outputShim");d||(d=k(this));d(b)},get:function(){return b.contentAttr(this,"value")||a(this).text()||""}}});b.onNodeNamesPropertyModify("input","value",function(b,d,j){"removeAttr"!=j&&(d=a.data(this,"outputShim"))&&d(b)});var k=function(g){if(!g.getAttribute("aria-live")){var g=a(g),d=(g.text()||"").trim(),
l=g.attr("id"),k=g.attr("for"),n=a('<input class="output-shim" type="text" disabled name="'+(g.attr("name")||"")+'" value="'+d+'" style="display: none !important;" />').insertAfter(g),o=n[0].form||j,p=function(a){n[0].value=a;a=n[0].value;g.text(a);b.contentAttr(g[0],"value",a)};g[0].defaultValue=d;b.contentAttr(g[0],"value",d);g.attr({"aria-live":"polite"});l&&(n.attr("id",l),g.attr("aria-labelledby",b.getID(a('label[for="'+l+'"]',o))));k&&(l=b.getID(g),k.split(" ").forEach(function(a){(a=j.getElementById(a))&&
a.setAttribute("aria-controls",l)}));g.data("outputShim",p);n.data("outputShim",p);return p}};b.addReady(function(b,d){a("output",b).add(d.filter("output")).each(function(){k(this)})})}})();(function(){var k={updateInput:1,input:1},g={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},d=function(a){var d,g=a.prop("value"),j=function(d){if(a){var j=a.prop("value");j!==g&&(g=j,(!d||!k[d.type])&&b.triggerInlineForm&&b.triggerInlineForm(a[0],"input"))}},p,y=function(){clearTimeout(p);
p=setTimeout(j,9)},q=function(){a.unbind("focusout",q).unbind("keyup keypress keydown paste cut",y).unbind("input change updateInput",j);clearInterval(d);setTimeout(function(){j();a=null},1)};clearInterval(d);d=setInterval(j,99);y();a.bind("keyup keypress keydown paste cut",y).bind("focusout",q).bind("input updateInput change",j)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(j).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||
"").toLowerCase()&&!g[b.target.type]&&d(a(b.target))})})();b.isReady("form-output",!0)});
})(typeof webshimJq!='undefined'?webshimJq:jQuery);

(function(jQuery){
(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-extend",function(a,d,u,l){d.inputTypes=d.inputTypes||{};var x=d.cfg.forms,r,t=d.inputTypes,A={radio:1,checkbox:1};d.addInputType=function(a,c){t[a]=c};var y={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},v={valueMissing:function(b,c,f){if(!b.prop("required"))return!1;var j=!1;if(!("type"in f))f.type=(b[0].getAttribute("type")||
b[0].type||"").toLowerCase();if("select"==f.nodeName){if(c=!c)if(!(c=0>b[0].selectedIndex))b=b[0],c="select-one"==b.type&&2>b.size?!!a("> option:first-child",b).prop("selected"):!1;b=c}else b=A[f.type]?"checkbox"==f.type?!b.is(":checked"):!d.modules["form-core"].getGroupElements(b).filter(":checked")[0]:!c;return b},tooLong:function(){return!1},typeMismatch:function(a,c,f){if(""===c||"select"==f.nodeName)return!1;var d=!1;if(!("type"in f))f.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();
if(t[f.type]&&t[f.type].mismatch)d=t[f.type].mismatch(c,a);else if("validity"in a[0])d=a[0].validity.typeMismatch;return d},patternMismatch:function(a,c,f){if(""===c||"select"==f.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(j){d.error('invalid pattern value: "'+a+'" | '+j),a=!1}return!a?!1:!a.test(c)}};d.addValidityRule=function(a,c){v[a]=c};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var b=
this.form||this;if(!a.data(b,"invalidEventShim")&&(a(b).data("invalidEventShim",!0).bind("submit",a.event.special.invalid.handler),d.moveToFirstEvent(b,"submit"),d.bugs.bustedValidity&&a.nodeName(b,"form"))){var c=b.getAttribute("novalidate");b.setAttribute("novalidate","novalidate");d.data(b,"bustedNoValidate",null==c?null:c)}},teardown:a.noop,handler:function(b){if(!("submit"!=b.type||b.testedValidity||!b.originalEvent||!a.nodeName(b.target,"form")||a.prop(b.target,"noValidate"))){r=!0;b.testedValidity=
!0;if(!a(b.target).checkValidity())return b.stopImmediatePropagation(),r=!1;r=!1}}};a(l).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var B=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return B.apply(this,arguments)}});d.addInputType("email",{mismatch:function(){var a=x.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
return function(c){return!a.test(c)}}()});d.addInputType("url",{mismatch:function(){var a=x.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!a.test(c)}}()});d.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return d.inputTypes[a]?a:this.type}}});d.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},y)}}},"prop");var o=function(b){var c,f=a.prop(b,"validity");if(f)a.data(b,"cachedValidity",
f);else return!0;if(!f.valid){c=a.Event("invalid");var j=a(b).trigger(c);if(r&&!o.unhandledInvalids&&!c.isDefaultPrevented())d.validityAlert.showFor(j),o.unhandledInvalids=!0}a.removeData(b,"cachedValidity");return f.valid},C=/^(?:select|textarea|input)/i;d.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var b=!0,c=a(a.prop(this,"elements")).filter(function(){if(!C.test(this.nodeName))return!1;var a=d.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});
o.unhandledInvalids=!1;for(var f=0,j=c.length;f<j;f++)o(c[f])||(b=!1);return b}}});d.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){o.unhandledInvalids=!1;return o(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(b){a.removeData(this,"cachedValidity");d.data(this,"customvalidationMessage",""+b)}},willValidate:{writeable:!1,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var c=a(this).getNativeElement()[0];return!(c.disabled||
c.readOnly||b[c.type])}}()},validity:{writeable:!1,get:function(){var b=a(this).getNativeElement(),c=b[0],f=a.data(c,"cachedValidity");if(f)return f;f=a.extend({},y);if(!a.prop(c,"willValidate")||"submit"==c.type)return f;var j=b.val(),g={nodeName:c.nodeName.toLowerCase()};f.customError=!!d.data(c,"customvalidationMessage");if(f.customError)f.valid=!1;a.each(v,function(a,c){if(c(b,j,g))f[a]=!0,f.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",f.valid?"false":"true");c=b=null;return f}}},
"prop");d.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:!a.browser.msie||7<d.browserVersion});d.reflectProperties(["input"],["pattern"]);if(!("maxLength"in l.createElement("textarea"))){var p=function(){var b,c=0,f=a([]),d=1E9,g=function(){var a=f.prop("value"),b=a.length;b>c&&b>d&&(b=Math.max(c,d),f.prop("value",a.substr(0,b)));c=b},i=function(){clearTimeout(b);f.unbind(".maxlengthconstraint")};
return function(s,z){i();if(-1<z)d=z,c=a.prop(s,"value").length,f=a(s),f.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",function(){setTimeout(g,0)}),f.bind("keyup.maxlengthconstraint",g),f.bind("blur.maxlengthconstraint",i),b=setInterval(g,200)}}();p.update=function(b,c){a(b).is(":focus")&&(null==c&&(c=a.prop(b,"maxlength")),p(e.target,c))};a(l).bind("focusin",function(b){var c;"TEXTAREA"==b.target.nodeName&&-1<(c=a.prop(b.target,
"maxlength"))&&p(b.target,c)});d.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);p.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);p.update(this,a)}else this.setAttribute("maxlength","0"),p.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==
typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});d.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}})}var D={submit:1,button:1,image:1},k={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},
{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var c="form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),f="form"+b.name,d=b.name,g="click.webshimssubmittermutate"+d,i=function(){if("form"in this&&D[this.type]){var i=a.prop(this,"form");if(i){var h=a.attr(this,f);if(null!=h&&(!b.limitedTo||h.toLowerCase()===a.prop(this,c))){var n=a.attr(i,d);a.attr(i,d,h);setTimeout(function(){if(null!=n)a.attr(i,d,n);else try{a(i).removeAttr(d)}catch(b){i.removeAttribute(d)}},
9)}}}};switch(b.proptype){case "url":var s=l.createElement("form");k[c]={prop:{set:function(b){a.attr(this,f,b)},get:function(){var b=a.attr(this,f);if(null==b)return"";s.setAttribute("action",b);return s.action}}};break;case "boolean":k[c]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":k[c]={prop:{set:function(b){a.attr(this,f,b)},get:function(){var c=a.attr(this,
f);return!c||(c=c.toLowerCase())&&!b.limitedTo[c]?b.defaultProp:c}}};break;default:k[c]={prop:{set:function(b){a.attr(this,f,b)},get:function(){var b=a.attr(this,f);return null!=b?b:""}}}}k[f]||(k[f]={});k[f].attr={set:function(b){k[f].attr._supset.call(this,b);a(this).unbind(g).bind(g,i)},get:function(){return k[f].attr._supget.call(this)}};k[f].initAttr=!0;k[f].removeAttr={value:function(){a(this).unbind(g);k[f].removeAttr._supvalue.call(this)}}});d.defineNodeNamesProperties(["input","button"],
k);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?d.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):d.bugs.bustedValidity&&(d.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){d.data(this,"bustedNoValidate",""+a)},get:function(){var a=d.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){d.data(this,
"bustedNoValidate",null)}}}),a.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(a,c){v[c]=function(a){return(a[0].validity||{})[c]||!1}}));d.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});a.browser.webkit&&Modernizr.inputtypes.date&&function(){var b={updateInput:1,input:1},c={date:1,time:1,"datetime-local":1},f={focusout:1,blur:1},j=
{updateInput:1,change:1},g=function(a){var c,d=!0,h=a.prop("value"),n=h,q=function(c){if(a){var f=a.prop("value");f!==h&&(h=f,(!c||!b[c.type])&&a.trigger("input"));c&&j[c.type]&&(n=f);!d&&f!==n&&a.trigger("change")}},g,w=function(b){clearInterval(c);setTimeout(function(){b&&f[b.type]&&(d=!1);a&&(a.unbind("focusout blur",w).unbind("input change updateInput",q),q());a=null},1)};clearInterval(c);c=setInterval(q,160);clearTimeout(g);g=setTimeout(q,9);a.unbind("focusout blur",w).unbind("input change updateInput",
q);a.bind("focusout blur",w).bind("input updateInput change",q)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;(function(){var b=function(b){var c=1,f,d;if("date"==b.type&&(r||!a(b).is(":focus")))if((d=b.value)&&10>d.length&&(d=d.split("-"))&&3==d.length){for(;3>c;c++)if(1==d[c].length)d[c]="0"+d[c];else if(2!=d[c].length){f=!0;break}if(!f)return d=d.join("-"),a.prop(b,"value",d),d}},c,f,h,n;c=d.defineNodeNameProperty("input","checkValidity",{prop:{value:function(){b(this);return c.prop._supvalue.apply(this,
arguments)}}});f=d.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){a("input",this).each(function(){b(this)});return f.prop._supvalue.apply(this,arguments)}}});h=d.defineNodeNameProperty("input","value",{prop:{set:function(){return h.prop._supset.apply(this,arguments)},get:function(){return b(this)||h.prop._supget.apply(this,arguments)}}});n=d.defineNodeNameProperty("input","validity",{prop:{writeable:!1,get:function(){b(this);return n.prop._supget.apply(this,arguments)}}});a(l).bind("change",
function(a){isChangeSubmit=!0;b(a.target);isChangeSubmit=!1})})();a(l).bind("focusin",function(b){b.target&&c[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&g(a(b.target))})}();d.addReady(function(b,c){var d;a("form",b).add(c.filter("form")).bind("invalid",a.noop);try{if(b==l&&!("form"in(l.activeElement||{})))(d=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0])&&d.offsetHeight&&d.offsetWidth&&d.focus()}catch(j){}});Modernizr.formattribute||
function(){d.defineNodeNamesProperty(["input","textarea","select","button","fieldset"],"form",{prop:{get:function(){var a=d.contentAttr(this,"form");a&&(a=l.getElementById(a));return a||this.form},writeable:!1}});var b=function(b){var c=a.data(b,"webshimsAddedElements");c&&(c.remove(),a.removeData(b,"webshimsAddedElements"))};d.defineNodeNamesProperty(["form"],"elements",{prop:{get:function(){var c=this.id,d;c&&(b(this),d=a('input[form="'+c+'"], select[form="'+c+'"], textarea[form="'+c+'"], button[form="'+
c+'"], fieldset[form="'+c+'"]').add(this.elements).get());return d||this.elements},writeable:!1}});a(function(){var c=function(a){a.stopPropagation()};a(u).delegate("form[id]","submit",function(c){if(!c.isDefaultPrevented()){var d=this;if(c=d.id)b(d),c=a('input[form="'+c+'"], select[form="'+c+'"], textarea[form="'+c+'"]').filter(function(){return!this.disabled&&this.name&&this.form!=d}).clone(),c.length&&(a.data(d,"webshimsAddedElements",a('<div class="webshims-visual-hide" />').append(c).appendTo(d)),
setTimeout(function(){b(d)},9)),c=null}});a(u).delegate('input[type="submit"][form], button[form], input[type="button"][form], input[type="image"][form], input[type="reset"][form]',"click",function(b){if(!b.isDefaultPrevented()){var d=a.prop(this,"form"),f=this.form,h;d&&d!=f&&(h=a(this).clone().addClass("webshims-visual-hide").bind("click",c).appendTo(d),f&&b.preventDefault(),h.trigger("click"),setTimeout(function(){h.remove();h=null},9))}})});var c=/\r?\n/g,f=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
j=/^(?:select|textarea)/i;a.fn.serializeArray=function(){return this.map(function(){var b=a.prop(this,"elements");return b?a.makeArray(b):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||j.test(this.nodeName)||f.test(this.type))}).map(function(b,d){var f=a(this).val();return null==f?null:a.isArray(f)?a.map(f,function(a){return{name:d.name,value:a.replace(c,"\r\n")}}):{name:d.name,value:f.replace(c,"\r\n")}}).get()}}();(function(){Modernizr.textareaPlaceholder=!!("placeholder"in
a("<textarea />")[0]);var b=a.browser.webkit&&Modernizr.textareaPlaceholder;if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder||b){var c="over"==d.cfg.forms.placeholderType,f=["textarea"];Modernizr.input.placeholder||f.push("input");var j=function(a){if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a)return a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",0),a.moveStart("character",0),a.select(),!0},g=function(b,d,f,m){!1===f&&(f=a.prop(b,"value"));if(!c&&"password"!=
b.type){if(!f&&m&&j(b)){var g;a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(c){if(!c||!(17==c.keyCode||16==c.keyCode))b.value=a.prop(b,"value"),d.box.removeClass("placeholder-visible"),clearTimeout(g),a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",function(){j(b);clearTimeout(g);g=setTimeout(function(){j(b)},9)}).bind("blur.placeholderremove",
function(){clearTimeout(g);a(b).unbind(".placeholderremove")});return}b.value=f}else if(!f&&m){a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(c){if(!c||!(17==c.keyCode||16==c.keyCode))d.box.removeClass("placeholder-visible"),a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});return}d.box.removeClass("placeholder-visible")},i=function(b,
d,f,m,i){if(!m&&(m=a.data(b,"placeHolder"),!m))return;a(b).unbind(".placeholderremove");if("focus"==i||!i&&a(b).is(":focus"))("password"==b.type||c||a(b).hasClass("placeholder-visible"))&&g(b,m,"",!0);else if(!1===d&&(d=a.prop(b,"value")),d)g(b,m,d);else if(!1===f&&(f=a.attr(b,"placeholder")||""),f&&!d){d=m;!1===f&&(f=a.prop(b,"placeholder"));if(!c&&"password"!=b.type)b.value=f;d.box.addClass("placeholder-visible")}else g(b,m,d)},k=function(b){var b=a(b),c=b.prop("id"),d=!(!b.prop("title")&&!b.attr("aria-labelledby"));
!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},l=function(){var b={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var d=a.data(b,"placeHolder");if(d)return d;d=a.data(b,"placeHolder",{});a(b).bind("focus.placeholder blur.placeholder",function(a){i(this,!1,!1,d,a.type);d.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")});
b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){i(b,!1,!1,d,a.type)},0)});if("password"==b.type||c){d.text=k(b);d.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();d.text.insertAfter(b).bind("mousedown.placeholder",function(){i(this,!1,!1,d,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(c,f){var g=(parseInt(a.css(b,"padding"+f),10)||0)+Math.max(parseInt(a.css(b,
"margin"+f),10)||0,0)+(parseInt(a.css(b,"border"+f+"Width"),10)||0);d.text.css("padding"+f,g)});a.css(b,"lineHeight");var f={width:a(b).width(),height:a(b).height()},h=a.css(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(c,f){var g=a.css(b,f);d.text.css(f)!=g&&d.text.css(f,g)});f.width&&f.height&&d.text.css(f);"none"!==h&&d.box.addClass("placeholder-box-"+h)}else f=function(c){a(b).hasClass("placeholder-visible")&&(g(b,d,""),c&&"submit"==c.type&&setTimeout(function(){c.isDefaultPrevented()&&
i(b,!1,!1,d)},9))},a(u).bind("beforeunload",f),d.box=a(b),b.form&&a(b.form).submit(f);return d},update:function(c,f){if(!b[a.prop(c,"type")]&&!a.nodeName(c,"textarea"))d.warn("placeholder not allowed on type: "+a.prop(c,"type"));else{var g=l.create(c);g.text&&g.text.text(f);i(c,!1,f,g)}}}}();a.webshims.publicMethods={pHolder:l};f.forEach(function(a){d.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b?(d.data(this,"textareaPlaceholder",a),this.placeholder=""):d.contentAttr(this,"placeholder",
a);l.update(this,a)},get:function(){return(b?d.data(this,"textareaPlaceholder"):"")||d.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});f.forEach(function(c){var f={},g;["attr","prop"].forEach(function(c){f[c]={set:function(f){var h;b&&(h=d.data(this,"textareaPlaceholder"));h||(h=d.contentAttr(this,"placeholder"));a.removeData(this,"cachedValidity");var j=g[c]._supset.call(this,f);h&&"value"in this&&i(this,f,h);return j},get:function(){return a(this).hasClass("placeholder-visible")?"":
g[c]._supget.call(this)}}});g=d.defineNodeNameProperty(c,"value",f)})}})()});
})(typeof webshimJq!='undefined'?webshimJq:jQuery);

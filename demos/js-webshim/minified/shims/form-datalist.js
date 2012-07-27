(function(jQuery){
jQuery.webshims.register("form-datalist",function(b,d,h,l,k){d.propTypes.element=function(g){d.createPropDefault(g,"attr");if(!g.prop)g.prop={get:function(){var d=g.attr.get.call(this);d&&(d=b("#"+d)[0])&&g.propNodeName&&!b.nodeName(d,g.propNodeName)&&(d=null);return d||null},writeable:!1}};(function(){var g=b.webshims.cfg.forms,m=Modernizr.input.list;if(!m||g.customDatalist){var n=0,r={submit:1,button:1,reset:1,hidden:1,range:1,date:1},s=b.browser.msie&&7>parseInt(b.browser.version,10),o={},p=function(a){if(!a)return[];
if(o[a])return o[a];var b;try{b=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(c){}o[a]=b||[];return b||[]},q={_create:function(a){if(!r[b.prop(a.input,"type")]){var e=a.datalist,c=b.data(a.input,"datalistWidget");if(e&&c&&c.datalist!==e)c.datalist=e,c.id=a.id,c.shadowList.prop("className","datalist-polyfill "+(c.datalist.className||"")+" "+c.datalist.id+"-shadowdom"),g.positionDatalist?c.shadowList.insertAfter(a.input):c.shadowList.appendTo("body"),b(c.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",
b.proxy(c,"_resetListCached")),c._resetListCached();else if(e){if(!(c&&c.datalist===e)){n++;var f=this;this.hideList=b.proxy(f,"hideList");this.timedHide=function(){clearTimeout(f.hideTimer);f.hideTimer=setTimeout(f.hideList,9)};this.datalist=e;this.id=a.id;this.hasViewableData=!0;this._autocomplete=b.attr(a.input,"autocomplete");b.data(a.input,"datalistWidget",this);this.shadowList=b('<div class="datalist-polyfill '+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom" />');g.positionDatalist?
this.shadowList.insertAfter(a.input):this.shadowList.appendTo("body");this.index=-1;this.input=a.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(e){var c=b("li:not(.hidden-item)",f.shadowList),d="mousedown"==e.type||"click"==e.type;f.markItem(c.index(e.currentTarget),d,c);"click"==e.type&&(f.hideList(),b(a.input).trigger("datalistselect"));return"mousedown"!=e.type}).bind("focusout",this.timedHide);a.input.setAttribute("autocomplete",
"off");b(a.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!f.triggeredByDatalist)f.changedValue=!1,f.showHideOptions()}).bind("keydown.datalistWidget",function(e){var c=e.keyCode,d;if(40==c&&!f.showList())return f.markItem(f.index+1,!0),!1;if(f.isListVisible){if(38==c)return f.markItem(f.index-1,!0),!1;if(!e.shiftKey&&(33==c||36==c))return f.markItem(0,!0),!1;if(!e.shiftKey&&(34==c||35==c))return e=b("li:not(.hidden-item)",f.shadowList),f.markItem(e.length-1,!0,e),
!1;if(13==c||27==c)return 13==c&&(d=b("li.active-item:not(.hidden-item)",f.shadowList),f.changeValue(b("li.active-item:not(.hidden-item)",f.shadowList))),f.hideList(),d&&d[0]&&b(a.input).trigger("datalistselect"),!1}}).bind("focus.datalistWidget",function(){b(this).hasClass("list-focus")&&f.showList()}).bind("mousedown.datalistWidget",function(){b(this).is(":focus")&&f.showList()}).bind("blur.datalistWidget",this.timedHide);b(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",
b.proxy(this,"_resetListCached"));this._resetListCached();a.input.form&&(a.input.name||a.input.id)&&b(a.input.form).bind("submit.datalistWidget"+a.input.id,function(){if(!b(a.input).hasClass("no-datalist-cache")){var e=b.prop(a.input,"value"),c=(a.input.name||a.input.id)+b.prop(a.input,"type");if(!f.storedOptions)f.storedOptions=p(c);if(e&&-1==f.storedOptions.indexOf(e)&&(f.storedOptions.push(e),e=f.storedOptions,c)){e=e||[];try{localStorage.setItem("storedDatalistOptions"+c,JSON.stringify(e))}catch(d){}}}});
b(h).bind("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){f.destroy()})}}else c&&c.destroy()}},destroy:function(){var a=b.attr(this.input,"autocomplete");b(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();b(l).unbind(".datalist"+this.id);b(h).unbind(".datalist"+this.id);this.input.form&&this.input.id&&b(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");a===k?this.input.removeAttribute("autocomplete"):
b(this.input).attr("autocomplete",a)},_resetListCached:function(a){var e=this,b;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(h.QUnit||(b=a&&l.activeElement==e.input)?e.updateListOptions(b):d.ready("WINDOWLOAD",function(){e.updateTimer=setTimeout(function(){e.updateListOptions();e=null;n=1},200+100*n)}))},updateListOptions:function(a){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:b.css(this.input,"fontSize"),
fontFamily:b.css(this.input,"fontFamily")});this.searchStart=b(this.input).hasClass("search-start");var e=[],c=[],f=[],d,j,i,g;for(j=b.prop(this.datalist,"options"),i=0,g=j.length;i<g;i++){d=j[i];if(d.disabled)return;d={value:b(d).val()||"",text:b.trim(b.attr(d,"label")||d.textContent||d.innerText||b.text([d])||""),className:d.className||"",style:b.attr(d,"style")||""};d.text?d.text!=d.value&&(d.className+=" different-label-value"):d.text=d.value;c[i]=d.value;f[i]=d}if(!this.storedOptions)this.storedOptions=
b(this.input).hasClass("no-datalist-cache")?[]:p((this.input.name||this.input.id)+b.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==c.indexOf(a)&&f.push({value:a,text:a,className:"stored-suggest",style:""})});for(i=0,g=f.length;i<g;i++)j=f[i],e[i]='<li class="'+j.className+'" style="'+j.style+'" tabindex="-1" role="listitem"><span class="option-label">'+j.text+'</span> <span class="option-value">'+j.value+"</span></li>";this.arrayOptions=f;this.shadowList.html('<div class="datalist-outer-box"><div class="datalist-box"><ul role="list">'+
e.join("\n")+"</ul></div></div>");b.fn.bgIframe&&s&&this.shadowList.bgIframe();(a||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(a){var e=b.prop(this.input,"value").toLowerCase();if(!(e===this.lastUpdatedValue||this.lastUnfoundValue&&0===e.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=e;var c=!1,f=this.searchStart,d=b("li",this.shadowList);e?this.arrayOptions.forEach(function(a,g){var h;if(!("lowerText"in a))a.lowerText=a.text!=a.value?a.text.toLowerCase()+a.value.toLowerCase():
a.text.toLowerCase();h=a.lowerText.indexOf(e);(h=f?!h:-1!==h)?(b(d[g]).removeClass("hidden-item"),c=!0):b(d[g]).addClass("hidden-item")}):d.length&&(d.removeClass("hidden-item"),c=!0);this.hasViewableData=c;!a&&c&&this.showList();if(!c)this.lastUnfoundValue=e,this.hideList()}},setPos:function(){this.shadowList.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0});var a=g.positionDatalist?b(this.input).position():d.getRelOffset(this.shadowList,this.input);a.top+=b(this.input).outerHeight();
a.width=b(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);this.shadowList.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(a);return a},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var a=this,e;a.setPos();a.shadowList.addClass("datalist-visible").find("li.active-item").removeClass("active-item");
b(l).unbind(".datalist"+a.id).bind("mousedown.datalist"+a.id+" focusin.datalist"+a.id,function(e){e.target===a.input||a.shadowList[0]===e.target||b.contains(a.shadowList[0],e.target)?(clearTimeout(a.hideTimer),setTimeout(function(){clearTimeout(a.hideTimer)},9)):a.timedHide()});b(h).unbind(".datalist"+a.id).bind("resize.datalist"+a.id+" orientationchange.datalist "+a.id+" emchange.datalist"+a.id,function(){clearTimeout(e);e=setTimeout(function(){a.setPos()},9)});clearTimeout(e);return!0},hideList:function(){if(!this.isListVisible)return!1;
var a=this,e=function(){a.changedValue&&b(a.input).trigger("change");a.changedValue=!1};a.shadowList.removeClass("datalist-visible list-item-active");a.index=-1;a.isListVisible=!1;if(a.changedValue){a.triggeredByDatalist=!0;d.triggerInlineForm&&d.triggerInlineForm(a.input,"input");if(b(a.input).is(":focus"))b(a.input).one("blur",e);else e();a.triggeredByDatalist=!1}b(l).unbind(".datalist"+a.id);b(h).unbind(".datalist"+a.id).bind("resize.datalist"+a.id+" orientationchange.datalist "+a.id+" emchange.datalist"+
a.id,function(){a.shadowList.css({top:0,left:0});b(h).unbind(".datalist"+a.id)});return!0},scrollIntoView:function(a){var e=b("ul",this.shadowList),c=b("div.datalist-box",this.shadowList),d=a.position();d.top-=(parseInt(e.css("paddingTop"),10)||0)+(parseInt(e.css("marginTop"),10)||0)+(parseInt(e.css("borderTopWidth"),10)||0);0>d.top?c.scrollTop(c.scrollTop()+d.top-2):(d.top+=a.outerHeight(),a=c.height(),d.top>a&&c.scrollTop(c.scrollTop()+(d.top-a)+2))},changeValue:function(a){if(a[0]){var a=b("span.option-value",
a).text(),e=b.prop(this.input,"value");if(a!=e)b(this.input).prop("value",a).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(a,e,c){c=c||b("li:not(.hidden-item)",this.shadowList);if(c.length)0>a?a=c.length-1:a>=c.length&&(a=0),c.removeClass("active-item"),this.shadowList.addClass("list-item-active"),c=c.filter(":eq("+a+")").addClass("active-item"),e&&(this.changeValue(c),this.scrollIntoView(c)),this.index=a}};(function(){m||d.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,
get:function(){var a=b("select",this);a[0]?a=a[0].options:(a=b("option",this).get(),a.length&&d.warn("you should wrap you option-elements for a datalist in a select element to support IE and other old browsers."));return a}}});var a={autocomplete:{attr:{get:function(){var a=b.data(this,"datalistWidget");return a?a._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(a){var c=b.data(this,"datalistWidget");c?(c._autocomplete=a,"off"==a&&c.hideList()):
"autocomplete"in this?this.autocomplete=a:this.setAttribute("autocomplete",a)}}}};if(!m||!1 in b("<input />")[0])a.selectedOption={prop:{writeable:!1,get:function(){var a=b.prop(this,"list"),c=null,d;if(!a)return c;d=b.attr(this,"value");if(!d)return c;a=b.prop(a,"options");if(!a.length)return c;b.each(a,function(a,e){if(d==b.prop(e,"value"))return c=e,!1});return c}}};a.list=m?{attr:{get:function(){var a=d.contentAttr(this,"list");null!=a?this.removeAttribute("list"):a=b.data(this,"datalistListAttr");
return null==a?k:a},set:function(a){b.data(this,"datalistListAttr",a);d.objectCreate(q,k,{input:this,id:a,datalist:b.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}:{attr:{get:function(){var a=d.contentAttr(this,"list");return null==a?k:a},set:function(a){d.contentAttr(this,"list",a);d.objectCreate(q,k,{input:this,id:a,datalist:b.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"};d.defineNodeNameProperties("input",a);if(b.event.customEvent)b.event.customEvent.updateDatalist=
!0,b.event.customEvent.updateInput=!0,b.event.customEvent.datalistselect=!0;d.addReady(function(a,b){b.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})})()}})()});
})(typeof webshimJq!='undefined'?webshimJq:jQuery);

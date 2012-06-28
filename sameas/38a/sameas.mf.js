
/*
 * Copyright 2012, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Additional Licenses for Third Party components can be found here:
 * http://wiki.freebase.com/wiki/Freebase_Site_License
 *
 */
(function(b){b.factory("collapse_module",{init:function(){var d=this;this.$column=b(this.options.column);this.modules=b(this.options.modules,this.element);this.first_module=this.modules.get(0);this.trigger=b(".trigger:first",this.first_module);this.first_section=b(".module-section",this.first_module);this.other_modules=this.modules.slice(1);this.column_offset=this.$column.css("margin-left");this.set_collapsed(this.options.collapsed);this.trigger.click(function(c){return d.toggle(c)})},set_collapsed:function(d){if(this.toggle_state=
d){this.trigger.addClass("collapsed");this.$column.css("margin-left",0);this.first_section.hide();this.other_modules.hide()}else{this.trigger.removeClass("collapsed");this.$column.css("margin-left",this.column_offset);this.first_section.show();this.other_modules.show()}},toggle:function(){var d=this;if(this.toggle_state){b.localstore("filters_collapsed",0,false);this.trigger.removeClass("collapsed");this.$column.animate({marginLeft:this.column_offset},function(){d.first_section.slideDown(function(){d.modules.removeClass("collapsed")});
d.other_modules.fadeIn()})}else{b.localstore("filters_collapsed",1,false);this.trigger.addClass("collapsed");this.other_modules.fadeOut();this.first_section.slideUp(function(){d.$column.animate({marginLeft:0});d.modules.addClass("collapsed")})}this.toggle_state=!this.toggle_state;this.options.toggle_callback&&this.options.toggle_callback.call(this.trigger,this.toggle_state);return false}});var e=b("body").is(".embed")||b.localstore("filters_collapsed");b.extend(true,b.collapse_module,{defaults:{collapsed:e===
null?true:!!e,modules:".module",column:"#main-column"}})})(jQuery);
(function(b,e){function d(c){return!b(c).parents().andSelf().filter(function(){return b.curCSS(this,"visibility")==="hidden"||b.expr.filters.hidden(this)}).length}b.ui=b.ui||{};if(!b.ui.version){b.extend(b.ui,{version:"1.8.10",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});b.fn.extend({_focus:b.fn.focus,focus:function(c,g){return typeof c==="number"?this.each(function(){var a=this;setTimeout(function(){b(a).focus();g&&g.call(a)},c)}):this._focus.apply(this,arguments)},scrollParent:function(){var c;c=b.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(b.curCSS(this,
"position",1))&&/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!c.length?b(document):c},zIndex:function(c){if(c!==e)return this.css("zIndex",c);if(this.length){c=b(this[0]);for(var g;c.length&&c[0]!==document;){g=c.css("position");
if(g==="absolute"||g==="relative"||g==="fixed"){g=parseInt(c.css("zIndex"),10);if(!isNaN(g)&&g!==0)return g}c=c.parent()}}return 0},disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(c){c.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});b.each(["Width","Height"],function(c,g){function a(l,o,p,s){b.each(h,function(){o-=parseFloat(b.curCSS(l,"padding"+this,true))||0;if(p)o-=parseFloat(b.curCSS(l,
"border"+this+"Width",true))||0;if(s)o-=parseFloat(b.curCSS(l,"margin"+this,true))||0});return o}var h=g==="Width"?["Left","Right"]:["Top","Bottom"],i=g.toLowerCase(),m={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};b.fn["inner"+g]=function(l){if(l===e)return m["inner"+g].call(this);return this.each(function(){b(this).css(i,a(this,l)+"px")})};b.fn["outer"+g]=function(l,o){if(typeof l!=="number")return m["outer"+g].call(this,l);return this.each(function(){b(this).css(i,
a(this,l,true,o)+"px")})}});b.extend(b.expr[":"],{data:function(c,g,a){return!!b.data(c,a[3])},focusable:function(c){var g=c.nodeName.toLowerCase(),a=b.attr(c,"tabindex");if("area"===g){g=c.parentNode;a=g.name;if(!c.href||!a||g.nodeName.toLowerCase()!=="map")return false;c=b("img[usemap=#"+a+"]")[0];return!!c&&d(c)}return(/input|select|textarea|button|object/.test(g)?!c.disabled:"a"==g?c.href||!isNaN(a):!isNaN(a))&&d(c)},tabbable:function(c){var g=b.attr(c,"tabindex");return(isNaN(g)||g>=0)&&b(c).is(":focusable")}});
b(function(){var c=document.body,g=c.appendChild(g=document.createElement("div"));b.extend(g.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});b.support.minHeight=g.offsetHeight===100;b.support.selectstart="onselectstart"in g;c.removeChild(g).style.display="none"});b.extend(b.ui,{plugin:{add:function(c,g,a){c=b.ui[c].prototype;for(var h in a){c.plugins[h]=c.plugins[h]||[];c.plugins[h].push([g,a[h]])}},call:function(c,g,a){if((g=c.plugins[g])&&c.element[0].parentNode)for(var h=0;h<g.length;h++)c.options[g[h][0]]&&
g[h][1].apply(c.element,a)}},contains:function(c,g){return document.compareDocumentPosition?c.compareDocumentPosition(g)&16:c!==g&&c.contains(g)},hasScroll:function(c,g){if(b(c).css("overflow")==="hidden")return false;var a=g&&g==="left"?"scrollLeft":"scrollTop",h=false;if(c[a]>0)return true;c[a]=1;h=c[a]>0;c[a]=0;return h},isOverAxis:function(c,g,a){return c>g&&c<g+a},isOver:function(c,g,a,h,i,m){return b.ui.isOverAxis(c,a,i)&&b.ui.isOverAxis(g,h,m)}})}})(jQuery);
(function(b){b.widget("ui.slider",b.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var e=this,d=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");d.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=b([]);if(d.range){if(d.range===true){this.range=b("<div></div>");if(!d.values)d.values=[this._valueMin(),this._valueMin()];if(d.values.length&&d.values.length!==2)d.values=[d.values[0],d.values[0]]}else this.range=b("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(d.range==="min"||d.range==="max")this.range.addClass("ui-slider-range-"+d.range);this.range.addClass("ui-widget-header")}b(".ui-slider-handle",this.element).length===0&&b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(d.values&&d.values.length)for(;b(".ui-slider-handle",this.element).length<d.values.length;)b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=b(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(c){c.preventDefault()}).hover(function(){d.disabled||b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")}).focus(function(){if(d.disabled)b(this).blur();
else{b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");b(this).addClass("ui-state-focus")}}).blur(function(){b(this).removeClass("ui-state-focus")});this.handles.each(function(c){b(this).data("index.ui-slider-handle",c)});this.handles.keydown(function(c){var g=true,a=b(this).data("index.ui-slider-handle"),h,i,m;if(!e.options.disabled){switch(c.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:g=
false;if(!e._keySliding){e._keySliding=true;b(this).addClass("ui-state-active");h=e._start(c,a);if(h===false)return}break}m=e.options.step;h=e.options.values&&e.options.values.length?(i=e.values(a)):(i=e.value());switch(c.keyCode){case b.ui.keyCode.HOME:i=e._valueMin();break;case b.ui.keyCode.END:i=e._valueMax();break;case b.ui.keyCode.PAGE_UP:i=e._trimAlignValue(h+(e._valueMax()-e._valueMin())/5);break;case b.ui.keyCode.PAGE_DOWN:i=e._trimAlignValue(h-(e._valueMax()-e._valueMin())/5);break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(h===
e._valueMax())return;i=e._trimAlignValue(h+m);break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(h===e._valueMin())return;i=e._trimAlignValue(h-m);break}e._slide(c,a,i);return g}}).keyup(function(c){var g=b(this).data("index.ui-slider-handle");if(e._keySliding){e._keySliding=false;e._stop(c,g);e._change(c,g);b(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(e){var d=this.options,c,g,a,h,i;if(d.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:e.pageX,y:e.pageY});g=this._valueMax()-this._valueMin()+1;h=this;this.handles.each(function(m){var l=Math.abs(c-h.values(m));if(g>l){g=l;a=b(this);i=m}});if(d.range===true&&this.values(1)===d.min){i+=1;a=b(this.handles[i])}if(this._start(e,
i)===false)return false;this._mouseSliding=true;h._handleIndex=i;a.addClass("ui-state-active").focus();d=a.offset();this._clickOffset=!b(e.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:e.pageX-d.left-a.width()/2,top:e.pageY-d.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(e,i,c);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(e){var d=this._normValueFromMouse({x:e.pageX,y:e.pageY});this._slide(e,this._handleIndex,d);return false},_mouseStop:function(e){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(e,this._handleIndex);this._change(e,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var d;
if(this.orientation==="horizontal"){d=this.elementSize.width;e=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{d=this.elementSize.height;e=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}d=e/d;if(d>1)d=1;if(d<0)d=0;if(this.orientation==="vertical")d=1-d;e=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+d*e)},_start:function(e,d){var c={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){c.value=
this.values(d);c.values=this.values()}return this._trigger("start",e,c)},_slide:function(e,d,c){var g;if(this.options.values&&this.options.values.length){g=this.values(d?0:1);if(this.options.values.length===2&&this.options.range===true&&(d===0&&c>g||d===1&&c<g))c=g;if(c!==this.values(d)){g=this.values();g[d]=c;e=this._trigger("slide",e,{handle:this.handles[d],value:c,values:g});this.values(d?0:1);e!==false&&this.values(d,c,true)}}else if(c!==this.value()){e=this._trigger("slide",e,{handle:this.handles[d],
value:c});e!==false&&this.value(c)}},_stop:function(e,d){var c={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(d);c.values=this.values()}this._trigger("stop",e,c)},_change:function(e,d){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[d],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(d);c.values=this.values()}this._trigger("change",e,c)}},value:function(e){if(arguments.length){this.options.value=
this._trimAlignValue(e);this._refreshValue();this._change(null,0)}return this._value()},values:function(e,d){var c,g,a;if(arguments.length>1){this.options.values[e]=this._trimAlignValue(d);this._refreshValue();this._change(null,e)}if(arguments.length)if(b.isArray(arguments[0])){c=this.options.values;g=arguments[0];for(a=0;a<c.length;a+=1){c[a]=this._trimAlignValue(g[a]);this._change(null,a)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(e):this.value();
else return this._values()},_setOption:function(e,d){var c,g=0;if(b.isArray(this.options.values))g=this.options.values.length;b.Widget.prototype._setOption.apply(this,arguments);switch(e){case "disabled":if(d){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<g;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var d,c;if(arguments.length){d=this.options.values[e];
return d=this._trimAlignValue(d)}else{d=this.options.values.slice();for(c=0;c<d.length;c+=1)d[c]=this._trimAlignValue(d[c]);return d}},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var d=this.options.step>0?this.options.step:1,c=(e-this._valueMin())%d;alignValue=e-c;if(Math.abs(c)*2>=d)alignValue+=c>0?d:-d;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var e=this.options.range,d=this.options,c=this,g=!this._animateOff?d.animate:false,a,h={},i,m,l,o;if(this.options.values&&this.options.values.length)this.handles.each(function(p){a=(c.values(p)-c._valueMin())/(c._valueMax()-c._valueMin())*100;h[c.orientation==="horizontal"?"left":"bottom"]=a+"%";b(this).stop(1,1)[g?"animate":"css"](h,d.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(p===0)c.range.stop(1,1)[g?"animate":"css"]({left:a+"%"},d.animate);
if(p===1)c.range[g?"animate":"css"]({width:a-i+"%"},{queue:false,duration:d.animate})}else{if(p===0)c.range.stop(1,1)[g?"animate":"css"]({bottom:a+"%"},d.animate);if(p===1)c.range[g?"animate":"css"]({height:a-i+"%"},{queue:false,duration:d.animate})}i=a});else{m=this.value();l=this._valueMin();o=this._valueMax();a=o!==l?(m-l)/(o-l)*100:0;h[c.orientation==="horizontal"?"left":"bottom"]=a+"%";this.handle.stop(1,1)[g?"animate":"css"](h,d.animate);if(e==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[g?"animate":"css"]({width:a+"%"},d.animate);if(e==="max"&&this.orientation==="horizontal")this.range[g?"animate":"css"]({width:100-a+"%"},{queue:false,duration:d.animate});if(e==="min"&&this.orientation==="vertical")this.range.stop(1,1)[g?"animate":"css"]({height:a+"%"},d.animate);if(e==="max"&&this.orientation==="vertical")this.range[g?"animate":"css"]({height:100-a+"%"},{queue:false,duration:d.animate})}}});b.extend(b.ui.slider,{version:"1.8.10"})})(jQuery);
(function(b,e){e.filters={init_domain_type_property_filter:function(d){b(":text[name=domain], :text[name=type], :text[name=property]",d).suggest(b.extend({scoring:"schema",format:null,mql_output:JSON.stringify([{id:null,name:null,type:{id:null,"id|=":["/type/domain","/type/type","/type/property"],limit:1}}])},e.suggest_options.any("type:/type/domain","type:/type/type","type:/type/property"))).bind("fb-select",function(c,g){var a=b(this);a.val(g.id);var h=g.type.id;if(h==="/type/domain")a.attr("name",
"domain");else if(h==="/type/type")a.attr("name","type");else h==="/type/property"&&a.attr("name","property");this.form.submit()}).parents(".filter-form").submit(function(){return false})},init_limit_slider_filter:function(d,c,g,a,h){var i=b(".limit-slider",d),m=b(".current-limit",d),l=b("input[name=limit]",d),o=parseInt(l.val()||c,10);i.slider({value:o,min:g||1,max:a||100,step:h||10,slide:function(p,s){m.css({color:"#f71"});m.text(s.value)},stop:function(p,s){m.css({color:"#333"});l.val(s.value);
s.value!=o&&l[0].form.submit()}})}};b(function(){b(".filter-form-trigger").click(function(){var d=b(this).siblings(".filter-form");d.is(":hidden")?d.slideDown(function(){b(":text:first",d).focus()}):d.slideUp()})})})(jQuery,window.freebase);
(function(b){var e=function(){return typeof window.innerWidth!="undefined"?function(){return{w:window.innerWidth,h:window.innerHeight}}:typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0?function(){return{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}}:function(){return{w:document.getElementsByTagName("body")[0].clientWidth,h:document.getElementsByTagName("body")[0].clientHeight}}}();
window.kbs=function(d){b(".kbs.current",d).removeClass("current");var c=b(".domain-section:first",d),g=b(".domain-section:last",d),a=this.scroll_to=function(f){var j=b(document).scrollTop();b(document).height();var k=e().h;k=j+k;var n=f.offset().top;f=n+f.height();if(n<j)b(document).scrollTop(n);else f>k&&b(document).scrollTop(j+(f-k))},h=this.get_current=function(){return b(".kbs.current:first",d)},i=this.set_next=function(f,j,k){f=f||h();if(j.length){f.removeClass("current");j.addClass("current");
k||a(j)}},m=this.next_domain=function(f){var j=h(),k=l(j);if(k){k=k.find(".kbs:first");i(j,k,f)}},l=this._next_domain=function(f){if(!(f&&f.length))return b(".domain-section:first",d);f=f.closest(".domain-section");return!f.length||f[0]===g[0]?c:f.next(".domain-section")},o=this.prev_domain=function(){var f=h(),j=p(f);if(j){j=j.find(".kbs:first");i(f,j)}},p=this._prev_domain=function(f){if(!(f&&f.length))return b(".domain-section:last",d);var j=f.closest(".domain-section");if(f.closest(".property-section").length||
f.closest(".type-section").length)return j;return!j.length||j[0]===c[0]?g:j.prev(".domain-section")},s=this.next_type=function(){var f=h(),j=q(f);if(j){j=j.find(".kbs:first");i(f,j)}},q=this._next_type=function(f){if(!(f&&f.length))return b(".type-section:first",d);var j=f.closest(".domain-section");f=f.closest(".type-section");f=f.length?f.next(".type-section"):j.find(".type-section:first");if(!(f&&f.length)){var k=l(j);if(k)for(;k.get(0)!==j.get(0);){f=k.find(".type-section:first");if(f.length)break;
k=l(k)}}return f},r=this.prev_type=function(){var f=h(),j=t(f);if(j){j=j.find(".kbs:first");i(f,j)}},t=this._prev_type=function(f){if(!(f&&f.length))return b(".type-section:last",d);var j=f.closest(".domain-section"),k=f.closest(".type-section");if(f.closest(".property-section").length)return k;var n;if(k.length)n=k.prev(".type-section");if(!(n&&n.length))if(f=p(j))for(;f.get(0)!==j.get(0);){n=f.find(".type-section:last");if(n.length)break;f=p(f)}return n},x=this.next_prop=function(){var f=h(),j=
w(f);if(j){j=j.find(".kbs:first");i(f,j)}},w=this._next_prop=function(f){if(!(f&&f.length))return b(".property-section:first",d);var j=f.closest(".domain-section"),k=f.closest(".type-section"),n=f.closest(".property-section");j=n.length?n.next(".property-section"):k.length?k.find(".property-section:first"):j.find(".property-section:first");if(!(j&&j.length))if(f=q(f))for(;f.get(0)!==k.get(0);){j=f.find(".property-section:first");if(j.length)break;if(k.get(0)==null)k=f;f=q(f)}return j},z=this.prev_prop=
function(){var f=h(),j=y(f);if(j){j=j.find(".kbs:first");i(f,j)}},y=this._prev_prop=function(f){if(!(f&&f.length))return b(".property-section:last",d);var j=f.closest(".domain-section"),k=f.closest(".type-section"),n=f.closest(".property-section");if(f.closest(".data-section").length)return n;var u;if(n.length)u=n.prev(".property-section");if(!(u&&u.length))if(r=k.length?t(k):t(j))for(;r.get(0)!==k.get(0);){u=r.find(".property-section:last");if(u.length)break;if(k.get(0)==null)k=r;r=t(r)}return u};
this.next=function(){var f=h(),j=this._next(f);j&&i(f,j)};this._next=function(f){if(!(f&&f.length))return b(".domain-section:first .kbs:first",d);var j=f.closest(".domain-section"),k=f.closest(".type-section"),n=f.closest(".property-section");if(f.closest(".data-section").length){f=f.next(".kbs");if(f.length)return f;f=n.next(".property-section").find(".kbs:first");if(f.length)return f;f=k.next(".type-section").find(".kbs:first")}else if(n.length){f=n.find(".data-section:first .kbs:first");if(f.length)return f;
f=n.next(".property-section").find(".kbs:first");if(f.length)return f;f=k.next(".type-section").find(".kbs:first")}else if(k.length){f=k.find(".property-section:first .kbs:first");if(f.length)return f;f=k.next(".type-section").find(".kbs:first")}else f=j.find(".type-section:first .kbs:first");if(f.length)return f;return j.get(0)===g.get(0)?c.find(".kbs:first"):j.next(".domain-section").find(".kbs:first")};this.prev=function(){var f=h(),j=this._prev(f);j&&i(f,j)};this._prev=function(f){if(!(f&&f.length)){f=
b(".data-section:last .kbs:last",d);f.length||(f=b(".property-section:last .kbs:first",d));f.length||(f=b(".type-section:last .kbs:first",d));f.length||(f=b(".domain-section:last .kbs:first",d));return f}var j=f.closest(".domain-section"),k=f.closest(".type-section"),n=f.closest(".property-section");if(f.closest(".data-section").length){f=f.prev(".kbs");if(f.length)return f;return n.find(".kbs:first")}else if(n.length){f=n.prev(".property-section").find(".kbs:last");if(f.length)return f;return k.find(".kbs:first")}else if(k.length){f=
k.prev(".type-section").find(".kbs:last");if(f.length)return f;return j.find(".kbs:first")}else return j.get(0)===c.get(0)?g.find(".kbs:last"):j.prev(".domain-section").find(".kbs:last")};this.edit=function(){this.get_current().trigger("edit")};var v=this;b(document).unbind(".kbs").bind("keydown.kbs",function(f){var j=f.target;if(j==document.body||j==document||j==window||j==b("html")[0]){j=f.keyCode;if(j===68)f.shiftKey?o():m();else if(j===84)f.shiftKey?r():s();else if(j===80)f.shiftKey?z():x();else if(j===
74)v.next();else if(j===75)v.prev();else j===69&&v.edit()}})}})(jQuery);
(function(b,e){var d=window.propbox={init:function(c,g){g=b.extend({lang:"/lang/en"},g);if(!g.base_ajax_url)throw new Error("base_ajax_url required in propbox options");if(!g.base_static_url)throw new Error("base_static_url required in propbox options");if(!g.id)throw new Error("topic id required in propbox options");if(!g.lang)throw new Error("lang required in propbox options");d.options=g;d.kbs=new e(c);d.kbs.set_next(d.kbs.get_current(),b(".kbs:visible:first",c,true));b(".kbs",c).live("click",
function(){var a=d.kbs.get_current();d.kbs.set_next(a,b(this),true)}).live("edit",function(){var a=b(this).find(".headmenu:first").data("submenu");a&&b("li:first a:first",a).click()});d.init_menus(c)},init_menus:function(c,g){c=b(c||document);g&&b(".nicemenu",c).nicemenu();(c&&c.is(".data-row")?c:b(".data-row",c)).hover(d.row_menu_hoverover,d.row_menu_hoverout);b(".nicemenu .headmenu",c).add(b(".nicemenu .default-action",c)).click("click",function(){if(d.kbs){var a=d.kbs.get_current();a&&d.kbs.set_next(a,
b(this).parents(".kbs:first"),true)}return false})},row_menu_hoverover:function(){var c=b(this);d.row_menu_hoverover.timeout=setTimeout(function(){c.addClass("row-hover")},300)},row_menu_hoverout:function(){clearTimeout(d.row_menu_hoverover.timeout);b(this).removeClass("row-hover")},get_script:function(c,g){var a=d.get_script.cache;if(!a)a=d.get_script.cache={};var h=a[c];if(h)if(h.state===1)h.callbacks.push(g);else h.state===4&&g();else{h=a[c]={state:0,callbacks:[g]};b.ajax({url:d.options.base_static_url+
c,dataType:"script",beforeSend:function(){h.state=1},success:function(){h.state=4;b.each(h.callbacks,function(i,m){m()})},error:function(){h.state=-1}})}},prop_edit:function(c,g){var a=b(c).parents(".submenu").data("headmenu").parents(".property-section").find(".data-section .data-row:first:visible .nicemenu:first .headmenu:first a");a.length?a.click():d.prop_add(c,g);return false},prop_add:function(c,g){var a=b(c).parents(".submenu").data("headmenu").parents(".property-section");d.get_script("/propbox-edit.mf.js",
function(){d.edit.prop_add_begin(a,g)});return false},value_edit:function(c){var g=b(c).parents(".submenu").data("headmenu").parents(".data-row:first"),a=g.parents(".property-section");d.get_script("/propbox-edit.mf.js",function(){d.edit.value_edit_begin(a,g)});return false},value_delete:function(c){var g=b(c).parents(".submenu").data("headmenu").parents(".data-row:first"),a=g.parents(".property-section");d.get_script("/propbox-edit.mf.js",function(){d.edit.value_delete_begin(a,g)});return false},
close_message:function(c){b(c).parents(".row-msg:first").remove();return false}}})(jQuery,window.kbs);
(function(b,e,d){e.infinitescroll=function(a,h,i){this.element=e(i);this._create(a,h)};e.infinitescroll.defaults={loading:{finished:d,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"http://www.infinite-scroll.com/loading.gif",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:d},state:{isDuringAjax:false,isInvalidPage:false,isDestroyed:false,isDone:false,isPaused:false,currPage:1},callback:d,debug:false,behavior:d,binder:e(b),
nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:false,pathParse:d,dataType:"html",appendCallback:true,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:d,path:d};e.infinitescroll.prototype={_binding:function(a){var h=this,i=h.options;if(i.behavior&&this["_binding_"+i.behavior]!==d)this["_binding_"+i.behavior].call(this);else{if(a!=="bind"&&a!=="unbind"){this._debug("Binding value  "+a+" not valid");
return false}a=="unbind"?this.options.binder.unbind("smartscroll.infscr."+h.options.infid):this.options.binder[a]("smartscroll.infscr."+h.options.infid,function(){h.scroll()});this._debug("Binding",a)}},_create:function(a,h){if(!this._validate(a))return false;var i=this.options=e.extend(true,{},e.infinitescroll.defaults,a),m=e(i.nextSelector).attr("href");i.contentSelector=i.contentSelector||this.element;i.loading.selector=i.loading.selector||i.contentSelector;if(m){i.path=this._determinepath(m);
i.loading.msg=e('<div id="infscr-loading"><img alt="Loading..." src="'+i.loading.img+'" /><div>'+i.loading.msgText+"</div></div>");(new Image).src=i.loading.img;i.pixelsFromNavToBottom=e(document).height()-e(i.navSelector).offset().top;i.loading.start=i.loading.start||function(){e(i.navSelector).hide();i.loading.msg.appendTo(i.loading.selector).show(i.loading.speed,function(){beginAjax(i)})};i.loading.finished=i.loading.finished||function(){i.loading.msg.fadeOut("normal")};i.callback=function(l,o){i.behavior&&
l["_callback_"+i.behavior]!==d&&l["_callback_"+i.behavior].call(e(i.contentSelector)[0],o);h&&h.call(e(i.contentSelector)[0],o)};this._setup()}else this._debug("Navigation selector not found")},_debug:function(){if(this.options.debug)return b.console&&console.log.call(console,arguments)},_determinepath:function(a){var h=this.options;if(h.behavior&&this["_determinepath_"+h.behavior]!==d)this["_determinepath_"+h.behavior].call(this,a);else{if(h.pathParse){this._debug("pathParse manual");if(typeof h.pathParse===
"function")return h.pathParse();return h.pathParse}else if(a.match(/^(.*?)\b2\b(.*?$)/))a=a.match(/^(.*?)\b2\b(.*?$)/).slice(1);else if(a.match(/^(.*?)2(.*?$)/)){if(a.match(/^(.*?page=)2(\/.*|$)/))return a=a.match(/^(.*?page=)2(\/.*|$)/).slice(1);a=a.match(/^(.*?)2(.*?$)/).slice(1)}else if(a.match(/^(.*?page=)1(\/.*|$)/))return a=a.match(/^(.*?page=)1(\/.*|$)/).slice(1);else{this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
h.state.isInvalidPage=true}this._debug("determinePath",a);return a}},_error:function(a){var h=this.options;if(h.behavior&&this["_error_"+h.behavior]!==d)this["_error_"+h.behavior].call(this,a);else{if(a!=="destroy"&&a!=="end")a="unknown";this._debug("Error",a);a=="end"&&this._showdonemsg();h.state.isDone=true;h.state.currPage=1;h.state.isPaused=false;this._binding("unbind")}},_loadcallback:function(a,h){var i=this.options,m=this.options.callback,l=i.state.isDone?"done":!i.appendCallback?"no-append":
"append";if(i.behavior&&this["_loadcallback_"+i.behavior]!==d)this["_loadcallback_"+i.behavior].call(this,a,h);else{switch(l){case "done":this._showdonemsg();return false;case "no-append":if(i.dataType=="html"){h="<div>"+h+"</div>";h=e(h).find(i.itemSelector)}break;case "append":var o=a.children();if(o.length==0)return this._error("end");for(l=document.createDocumentFragment();a[0].firstChild;)l.appendChild(a[0].firstChild);this._debug("contentSelector",e(i.contentSelector)[0]);e(i.contentSelector)[0].appendChild(l);
h=o.get();break}i.loading.finished.call(e(i.contentSelector)[0],i);if(i.animate){l=e(b).scrollTop()+e("#infscr-loading").height()+i.extraScrollPx+"px";e("html,body").animate({scrollTop:l},800,function(){i.state.isDuringAjax=false})}if(!i.animate)i.state.isDuringAjax=false;m(this,h)}},_nearbottom:function(){var a=this.options,h=0+e(document).height()-a.binder.scrollTop()-e(b).height();if(a.behavior&&this["_nearbottom_"+a.behavior]!==d)this["_nearbottom_"+a.behavior].call(this);else{this._debug("math:",
h,a.pixelsFromNavToBottom);return h-a.bufferPx<a.pixelsFromNavToBottom}},_pausing:function(a){var h=this.options;if(h.behavior&&this["_pausing_"+h.behavior]!==d)this["_pausing_"+h.behavior].call(this,a);else{a!=="pause"&&a!=="resume"&&a!==null&&this._debug("Invalid argument. Toggling pause value instead");switch(a&&(a=="pause"||a=="resume")?a:"toggle"){case "pause":h.state.isPaused=true;break;case "resume":h.state.isPaused=false;break;case "toggle":h.state.isPaused=!h.state.isPaused;break}this._debug("Paused",
h.state.isPaused);return false}},_setup:function(){var a=this.options;if(a.behavior&&this["_setup_"+a.behavior]!==d)this["_setup_"+a.behavior].call(this);else{this._binding("bind");return false}},_showdonemsg:function(){var a=this.options;if(a.behavior&&this["_showdonemsg_"+a.behavior]!==d)this["_showdonemsg_"+a.behavior].call(this);else{a.loading.msg.find("img").hide().parent().find("div").html(a.loading.finishedMsg).animate({opacity:1},2E3,function(){e(this).parent().fadeOut("normal")});a.errorCallback.call(e(a.contentSelector)[0],
"done")}},_validate:function(a){for(var h in a){if(h.indexOf&&h.indexOf("Selector")>-1&&e(a[h]).length===0){this._debug("Your "+h+" found no elements.");return false}return true}},bind:function(){this._binding("bind")},destroy:function(){this.options.state.isDestroyed=true;return this._error("destroy")},pause:function(){this._pausing("pause")},resume:function(){this._pausing("resume")},retrieve:function(a){var h=this,i=h.options,m=this._determinepath(m),l,o,p,s;a=a||null;beginAjax=function(q){q.state.currPage++;
h._debug("heading into ajax",m);l=e(q.contentSelector).is("table")?e("<tbody/>"):e("<div/>");o=m.join(q.state.currPage);p=q.dataType=="html"||q.dataType=="json"?q.dataType:"html+callback";if(q.appendCallback&&q.dataType=="html")p+="+callback";switch(p){case "html+callback":h._debug("Using HTML via .load() method");l.load(o+" "+q.itemSelector,null,function(r){h._loadcallback(l,r)});break;case "html":case "json":h._debug("Using "+p.toUpperCase()+" via $.ajax() method");e.ajax({url:o,dataType:q.dataType,
complete:function(r,t){(s=typeof r.isResolved!=="undefined"?r.isResolved():t==="success"||t==="notmodified")?h._loadcallback(l,r.responseText):h._error("end")}});break}};if(i.behavior&&this["retrieve_"+i.behavior]!==d)this["retrieve_"+i.behavior].call(this,a);else{if(i.state.isDestroyed){this._debug("Instance is destroyed");return false}i.state.isDuringAjax=true;i.loading.start.call(e(i.contentSelector)[0],i)}},scroll:function(){var a=this.options,h=a.state;if(a.behavior&&this["scroll_"+a.behavior]!==
d)this["scroll_"+a.behavior].call(this);else h.isDuringAjax||h.isInvalidPage||h.isDone||h.isDestroyed||h.isPaused||this._nearbottom()&&this.retrieve()},toggle:function(){this._pausing()},unbind:function(){this._binding("unbind")},update:function(a){if(e.isPlainObject(a))this.options=e.extend(true,this.options,a)}};e.fn.infinitescroll=function(a,h){switch(typeof a){case "string":var i=Array.prototype.slice.call(arguments,1);this.each(function(){var m=e.data(this,"infinitescroll");if(!m)return false;
if(!e.isFunction(m[a])||a.charAt(0)==="_")return false;m[a].apply(m,i)});break;case "object":this.each(function(){var m=e.data(this,"infinitescroll");m?m.update(a):e.data(this,"infinitescroll",new e.infinitescroll(a,h,this))});break}return this};var c=e.event,g;c.special.smartscroll={setup:function(){e(this).bind("scroll",c.special.smartscroll.handler)},teardown:function(){e(this).unbind("scroll",c.special.smartscroll.handler)},handler:function(a,h){var i=this,m=arguments;a.type="smartscroll";g&&
clearTimeout(g);g=setTimeout(function(){e.event.handle.apply(i,m)},h==="execAsap"?0:100)}};e.fn.smartscroll=function(a){return a?this.bind("smartscroll",a):this.trigger("smartscroll",["execAsap"])}})(window,jQuery);
(function(b,e,d){var c=e.sameas={init:function(){b(".column.nav").collapse_module({modules:".module",column:".section"});b(":text[name=creator]").suggest(e.suggest_options.any("type:/type/user")).bind("fb-select",function(g,a){b(this).val(a.id).parents("form:first").submit()});d.init_menus();c.init_infinitescroll()},init_infinitescroll:function(){var g=b("#infinitescroll > tbody");if(g.attr("data-next")){var a=b("#infinitescroll-next");g.infinitescroll({loading:{msgText:"Fetching more links",img:e.h.static_url("lib/template/horizontal-loader.gif")},
nextSelector:"#infinitescroll-next",navSelector:"#infinitescroll-next",dataType:"json",pathParse:function(){return[a[0].href+"&"+b.param({next:g.attr("data-next")})+"&page=",""]},appendCallback:false},function(h){h=JSON.parse(h);var i=b(h.result.html);if(h=i.attr("data-next")){i=b(">tr",i);g.append(i);i.each(function(){d.init_menus(this,true)});g.attr("data-next",h);h=b(">tr",g).length;i=b("[name=infinitescroll-count]");b(".number",i).attr("data-value",h);i18n.ize_number(i);g.parent("table").trigger("update")}else b(window).unbind(".infscr")});
b(window).trigger("scroll")}},add_key:function(){var g=b(this);e.get_script(e.h.static_url("sameas-edit.mf.js"),function(){c.edit.add_key_begin(g,b("#infinitescroll > tbody:first"))});return false},edit_key:function(g){var a=b(g).parents(".submenu").data("headmenu").parents(".data-row:first");e.get_script(e.h.static_url("sameas-edit.mf.js"),function(){c.edit.edit_key_begin(a)});return false},delete_key:function(g){var a=b(g).parents(".submenu").data("headmenu").parents(".data-row:first");e.get_script(e.h.static_url("sameas-edit.mf.js"),
function(){c.edit.delete_key_begin(a)});return false}};b(c.init)})(jQuery,window.freebase,window.propbox);

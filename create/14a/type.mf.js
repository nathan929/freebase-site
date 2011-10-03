
/*
 * Copyright 2010, Google Inc.
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
(function(c){var f=function(){return typeof window.innerWidth!="undefined"?function(){return{w:window.innerWidth,h:window.innerHeight}}:typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0?function(){return{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}}:function(){return{w:document.getElementsByTagName("body")[0].clientWidth,h:document.getElementsByTagName("body")[0].clientHeight}}}();
window.kbs=function(e){c(".kbs.current",e).removeClass("current");var b=c(".domain-section:first",e),a=c(".domain-section:last",e),d=this.scroll_to=function(g){var k=c(document).scrollTop();c(document).height();var o=f().h;o=k+o;var p=g.offset().top;g=p+g.height();if(p<k)c(document).scrollTop(p);else g>o&&c(document).scrollTop(k+(g-o))},h=this.get_current=function(){return c(".kbs.current:first",e)},i=this.set_next=function(g,k,o){g=g||h();if(k.length){g.removeClass("current");k.addClass("current");
o||d(k)}},j=this.next_domain=function(g){var k=h(),o=m(k);if(o){o=o.find(".kbs:first");i(k,o,g)}},m=this._next_domain=function(g){if(!(g&&g.length))return c(".domain-section:first",e);g=g.closest(".domain-section");return!g.length||g[0]===a[0]?b:g.next(".domain-section")},l=this.prev_domain=function(){var g=h(),k=n(g);if(k){k=k.find(".kbs:first");i(g,k)}},n=this._prev_domain=function(g){if(!(g&&g.length))return c(".domain-section:last",e);var k=g.closest(".domain-section");if(g.closest(".property-section").length||
g.closest(".type-section").length)return k;return!k.length||k[0]===b[0]?a:k.prev(".domain-section")},r=this.next_type=function(){var g=h(),k=q(g);if(k){k=k.find(".kbs:first");i(g,k)}},q=this._next_type=function(g){if(!(g&&g.length))return c(".type-section:first",e);var k=g.closest(".domain-section");g=g.closest(".type-section");g=g.length?g.next(".type-section"):k.find(".type-section:first");if(!(g&&g.length)){var o=m(k);if(o)for(;o.get(0)!==k.get(0);){g=o.find(".type-section:first");if(g.length)break;
o=m(o)}}return g},s=this.prev_type=function(){var g=h(),k=t(g);if(k){k=k.find(".kbs:first");i(g,k)}},t=this._prev_type=function(g){if(!(g&&g.length))return c(".type-section:last",e);var k=g.closest(".domain-section"),o=g.closest(".type-section");if(g.closest(".property-section").length)return o;var p;if(o.length)p=o.prev(".type-section");if(!(p&&p.length))if(g=n(k))for(;g.get(0)!==k.get(0);){p=g.find(".type-section:last");if(p.length)break;g=n(g)}return p},w=this.next_prop=function(){var g=h(),k=
u(g);if(k){k=k.find(".kbs:first");i(g,k)}},u=this._next_prop=function(g){if(!(g&&g.length))return c(".property-section:first",e);var k=g.closest(".domain-section"),o=g.closest(".type-section"),p=g.closest(".property-section");k=p.length?p.next(".property-section"):o.length?o.find(".property-section:first"):k.find(".property-section:first");if(!(k&&k.length))if(g=q(g))for(;g.get(0)!==o.get(0);){k=g.find(".property-section:first");if(k.length)break;if(o.get(0)==null)o=g;g=q(g)}return k},y=this.prev_prop=
function(){var g=h(),k=z(g);if(k){k=k.find(".kbs:first");i(g,k)}},z=this._prev_prop=function(g){if(!(g&&g.length))return c(".property-section:last",e);var k=g.closest(".domain-section"),o=g.closest(".type-section"),p=g.closest(".property-section");if(g.closest(".data-section").length)return p;var v;if(p.length)v=p.prev(".property-section");if(!(v&&v.length))if(s=o.length?t(o):t(k))for(;s.get(0)!==o.get(0);){v=s.find(".property-section:last");if(v.length)break;if(o.get(0)==null)o=s;s=t(s)}return v};
this.next=function(){var g=h(),k=this._next(g);k&&i(g,k)};this._next=function(g){if(!(g&&g.length))return c(".domain-section:first .kbs:first",e);var k=g.closest(".domain-section"),o=g.closest(".type-section"),p=g.closest(".property-section");if(g.closest(".data-section").length){g=g.next(".kbs");if(g.length)return g;g=p.next(".property-section").find(".kbs:first");if(g.length)return g;g=o.next(".type-section").find(".kbs:first")}else if(p.length){g=p.find(".data-section:first .kbs:first");if(g.length)return g;
g=p.next(".property-section").find(".kbs:first");if(g.length)return g;g=o.next(".type-section").find(".kbs:first")}else if(o.length){g=o.find(".property-section:first .kbs:first");if(g.length)return g;g=o.next(".type-section").find(".kbs:first")}else g=k.find(".type-section:first .kbs:first");if(g.length)return g;return k.get(0)===a.get(0)?b.find(".kbs:first"):k.next(".domain-section").find(".kbs:first")};this.prev=function(){var g=h(),k=this._prev(g);k&&i(g,k)};this._prev=function(g){if(!(g&&g.length)){g=
c(".data-section:last .kbs:last",e);g.length||(g=c(".property-section:last .kbs:first",e));g.length||(g=c(".type-section:last .kbs:first",e));g.length||(g=c(".domain-section:last .kbs:first",e));return g}var k=g.closest(".domain-section"),o=g.closest(".type-section"),p=g.closest(".property-section");if(g.closest(".data-section").length){g=g.prev(".kbs");if(g.length)return g;return p.find(".kbs:first")}else if(p.length){g=p.prev(".property-section").find(".kbs:last");if(g.length)return g;return o.find(".kbs:first")}else if(o.length){g=
o.prev(".type-section").find(".kbs:last");if(g.length)return g;return k.find(".kbs:first")}else return k.get(0)===b.get(0)?a.find(".kbs:last"):k.prev(".domain-section").find(".kbs:last")};this.edit=function(){this.get_current().trigger("edit")};var x=this;c(document).unbind(".kbs").bind("keydown.kbs",function(g){var k=g.target;if(k==document.body||k==document||k==window||k==c("html")[0]){k=g.keyCode;if(k===68)g.shiftKey?l():j();else if(k===84)g.shiftKey?s():r();else if(k===80)g.shiftKey?y():w();else if(k===
74)x.next();else if(k===75)x.prev();else k===69&&x.edit()}})}})(jQuery);
(function(c,f){var e=window.propbox={init:function(b,a){a=c.extend({lang:"/lang/en"},a);if(!a.base_ajax_url)throw new Error("base_ajax_url required in propbox options");if(!a.base_static_url)throw new Error("base_static_url required in propbox options");if(!a.id)throw new Error("topic id required in propbox options");if(!a.lang)throw new Error("lang required in propbox options");e.options=a;e.kbs=new f(b);e.kbs.set_next(e.kbs.get_current(),c(".kbs:visible:first",b,true));c(".kbs",b).live("click",
function(){var d=e.kbs.get_current();e.kbs.set_next(d,c(this),true)}).live("edit",function(){var d=c(this).find(".headmenu:first").data("submenu");d&&c("li:first a:first",d).click()});e.init_menus(b)},init_menus:function(b,a){b=c(b||document);a&&c(".nicemenu",b).nicemenu();(b&&b.is(".data-row")?b:c(".data-row",b)).hover(e.row_menu_hoverover,e.row_menu_hoverout);c(".nicemenu .headmenu",b).add(c(".nicemenu .default-action",b)).click("click",function(){if(e.kbs){var d=e.kbs.get_current();d&&e.kbs.set_next(d,
c(this).parents(".kbs:first"),true)}return false})},row_menu_hoverover:function(){var b=c(this);e.row_menu_hoverover.timeout=setTimeout(function(){b.addClass("row-hover")},300)},row_menu_hoverout:function(){clearTimeout(e.row_menu_hoverover.timeout);c(this).removeClass("row-hover")},get_script:function(b,a){var d=e.get_script.cache;if(!d)d=e.get_script.cache={};var h=d[b];if(h)if(h.state===1)h.callbacks.push(a);else h.state===4&&a();else{h=d[b]={state:0,callbacks:[a]};c.ajax({url:e.options.base_static_url+
b,dataType:"script",beforeSend:function(){h.state=1},success:function(){h.state=4;c.each(h.callbacks,function(i,j){j()})},error:function(){h.state=-1}})}},prop_edit:function(b,a){var d=c(b).parents(".submenu").data("headmenu").parents(".property-section").find(".data-section .data-row:first:visible .nicemenu:first .headmenu:first a");d.length?d.click():e.prop_add(b,a);return false},prop_add:function(b,a){var d=c(b).parents(".submenu").data("headmenu").parents(".property-section");if(d.is(".editing"))return false;
d.addClass("editing");e.get_script("/propbox-edit.mf.js",function(){e.edit.prop_add_begin(d,a)});return false},value_edit:function(b){var a=c(b).parents(".submenu").data("headmenu").parents(".data-row:first"),d=a.parents(".property-section");if(d.is(".editing"))return false;d.addClass("editing");e.get_script("/propbox-edit.mf.js",function(){e.edit.value_edit_begin(d,a)});return false},value_delete:function(b){var a=c(b).parents(".submenu").data("headmenu").parents(".data-row:first"),d=a.parents(".property-section");
if(d.is(".editing"))return false;d.addClass("editing");e.get_script("/propbox-edit.mf.js",function(){e.edit.value_delete_begin(d,a)});return false},close_message:function(b){c(b).parents(".row-msg:first").remove();return false}}})(jQuery,window.kbs);
(function(c,f){f.require("dojo.date.stamp");f.require("dojo.date.locale");f.require("dojo.number");c.fn.validate_input=function(b){return this.each(function(){var a=c(this);if(a.is(":text")){var d=a.data("$.validate_input");d&&d._destroy();d=new e(this,b);a.data("$.validate_input",d)}})};var e=c.validate_input=function(b,a){var d=this.options=c.extend(true,{},e.defaults,a);if(typeof d.validator!=="function")throw"A validator is required";if(!d.lang)d.lang="/lang/en";d.lang=d.lang==="/lang/en"?["lang/en"]:
[d.lang,"/lang/en"];d.locales=[];c.each(d.lang,function(i,j){d.locales[i]=f.i18n.normalizeLocale(j.split("/").pop())});this.input=c(b);this.init();var h=this;this.input.bind("remove",function(){h._destroy()});return this};e.prototype={init:function(){var b=this;this.input.bind("keyup.validate_input",function(a){b.textchange(a)}).bind(c.browser.msie?"paste.validate_input":"input.validate_input",function(a){b.textchange(a)}).bind("keypress.validate_input",function(a){a.keyCode===13&&b.validate(true)}).bind("blur.validate_input",
function(){b.validate(true)})},_destroy:function(){this.input.unbind(".validate_input")},valid:function(b){this.input.trigger("valid",b)},invalid:function(b,a){this.input.trigger("invalid",a)},empty:function(){this.input.trigger("empty")},textchange:function(){clearTimeout(this.textchange_timeout);var b=this;this.textchange_timeout=setTimeout(function(){b.validate()},200)},validate:function(b){b&&clearTimeout(this.textchange_timeout);b=this.options;var a=c.trim(this.input.val());if(a==="")return this.empty();
try{return this.valid(b.validator(a,b))}catch(d){return this.invalid(a,""+d)}}};c.extend(e,{defaults:{validator:function(b){return{text:b,value:b}}},log:function(){},invalid:function(b,a,d,h){throw new Error("Invalid "+d+(h?": "+h:""));},text:function(b,a){if(b.lengh>4096)return this.invalid(b,a,type,"Text too long");return{text:b,value:b}},topic:function(){return e.defaults.validator},enumerated:function(){return e.defaults.validator},"boolean":function(){return e.defaults.validator},uri:function(b,
a){var d=e.uri.regex;if(!d)d=e.uri.regex=/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
if(d.test(b))return{text:b,value:b};return e.invalid(b,a,"uri")},"int":function(b,a){return e.number.parse(b,a,false)},"float":function(b,a){return e.number.parse(b,a,true)},number:function(b,a,d){return e.number.parse(b,a,d)},datetime:function(b,a){return e.datetime.parse(b,a)},mqlkey:function(b,a){var d=e.mqlkey.regex;if(!d)d=e.mqlkey.regex=/^[A-Za-z0-9][A-Za-z0-9_-]*$/;if(d.test(b))return{text:b,value:b};return e.invalid(b,a,"mqlkey")}});c.extend(e.number,{parse:function(b,a,d){var h=a&&a.locales||
["en"],i,j;i=0;for(j=h.length;i<j;i++){var m=h[i];a=f.number.parse(b,{locale:m});if(!isNaN(a)){b={};if(d){b.value=a;b.text=f.number.format(a,{locale:m})}else{b.value=f.number.round(a,0);b.text=f.number.format(b.value,{locale:m})}return b}}throw e.invalid("number",b);}});c.extend(e.datetime,{formats:["yyyy",["dateFormatItem-y"],"yyyy-MM",["dateFormatItem-yM","dateFormatItem-yMMM"],"yyyy-MM-dd",["dateFormat-short","dateFormat-medium","dateFormat-long"]],parse:function(b,a){if(!f.date.stamp._isoRegExp)f.date.stamp._isoRegExp=
/^(?:(-?\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;var d=f.date.stamp.fromISOString(b);if(d)return{text:b,value:b,date:d};var h=a&&a.locales||["en"],i,j,m,l,n,r;i=0;for(j=h.length;i<j;i++){var q=h[i],s=f.date.locale._getGregorianBundle(q);m=0;for(l=e.datetime.formats.length;m<l;m+=2){var t=e.datetime.formats[m],w=e.datetime.formats[m+1];n=0;for(r=w.length;n<r;n++){var u=s[w[n]];if(u){u=i18n.normalize_pattern(u);try{d=f.date.locale.parse(b,
{datePattern:u,selector:"date",locale:q});return{text:b,value:f.date.locale.format(d,{datePattern:t,selector:"date"}),date:d}}catch(y){}}}}}throw e.invalid("datetime",b);}})})(jQuery,dojo);
(function(c){c.fn.data_input=function(f){return this.each(function(){var e=c(this),b=e.data("$.data_input");b&&b._destroy();b=new c.data_input(this,f);e.data("$.data_input",b)})};c.data_input=function(f,e){this.options=c.extend(true,{},c.data_input.defaults,e);this.container=c(f);this.metadata=this.container.metadata();this.input=c(":input",this.container);this.init();var b=this;this.input.bind("remove",function(){b._destroy()})};c.data_input.prototype={init:function(){var f=this,e=this.container,
b=this.input,a=this.options;b.bind("focusin.data_input",function(){f.container.addClass("focus")}).bind("focusout.data_input",function(){f.container.removeClass("focus")}).bind("valid.data_input",function(d,h){var i={name:f.input.attr("name")};if(h.id)i.id=h.id;else{i.value=h.value;if(f.metadata.type==="/type/text")i.lang=f.metadata.lang||a.lang}f.container.data("data",i);f.container.removeClass("error").addClass("valid");f.container.trigger("valid")}).bind("invalid.data_input",function(){f.container.removeData("data");
f.container.removeClass("valid").addClass("error");f.container.trigger("invalid")}).bind("empty.data_input",function(){var d={name:f.input.attr("name")};if(f.metadata&&f.metadata.lang)d.lang=f.metadata.lang;f.container.data("data",d);f.container.removeClass("valid").removeClass("error");f.container.trigger("empty")}).bind("keypress.data_input",function(d){d.keyCode===13&&!d.isDefaultPrevented()&&f.container.trigger("submit")}).bind("keyup.data_input",function(d){d.keyCode===27&&f.container.trigger("cancel")});
if(e.is(".topic")){e=c.extend(true,{},a.suggest,c.data_input.suggest_options(f.metadata.type));b.validate_topic(e).bind("valid.data_input",function(d,h){f.fb_select(h)}).bind("invalid.data_input",function(){f.fb_textchange()});if(this.metadata&&this.metadata.id){b.data("data.suggest",this.metadata);this.validate()}}else if(e.is(".text"))b.validate_input({validator:c.validate_input.text});else if(e.is(".datetime"))b.validate_input({validator:c.validate_input.datetime,lang:a.lang});else if(e.is(".enumerated")){b.validate_enumerated().bind("valid.data_input",
function(d,h){f.fb_select(h)}).bind("invalid.data_input",function(){f.fb_textchange()});this.metadata&&this.metadata.id&&this.validate()}else if(e.is(".int"))b.validate_input({validator:c.validate_input["int"],lang:a.lang});else if(e.is(".float"))b.validate_input({validator:c.validate_input["float"],lang:a.lang});else if(e.is(".uri"))b.validate_input({validator:c.validate_input.uri});else if(e.is(".boolean"))b.validate_boolean();else if(e.is(".enumeration"))b.validate_input({validator:c.validate_input.mqlkey});
else if(e.is(".rawstring"))b.validate_input({validator:c.validate_input.text});else throw new Error("Invalid data-input: "+e.attr("class"));},_destroy:function(){this.input.unbind(".data_input")},validate:function(){var f=this.input;c.each(["$.validate_topic","$.validate_input","$.validate_enumerated","$.validate_boolean"],function(e,b){var a=f.data(b);if(a){a.validate(true);return false}})},reset:function(){this.container.removeData("data");if(this.input.is(":text"))this.input.val("");else if(this.input.is("select"))this.input[0].selectedIndex=
0;else this.input.is(":radio")&&this.input.each(function(){this.checked=false})},fb_textchange:function(){},fb_select:function(){},ajax_beforeSend:function(f){if(!this.xhr_queue)this.xhr_queue=[];this.xhr_queue.push(f);this.container.trigger("loading")},ajax_complete:function(f){if(!this.xhr_queue)this.xhr_queue=[];for(var e=0,b=this.xhr_queue.length;e<b;e++)if(f===this.xhr_queue[e]){this.xhr_queue.splice(e,1);break}this.xhr_queue.length===0&&this.container.trigger("loading_complete")}};c.extend(c.data_input,
{defaults:{suggest:{service_url:"http://www.freebase.com",service_path:"/private/suggest",flyout_service_url:"http://www.freebase.com",flyout_service_path:"/private/flyout",mqlread_url:"http://api.freebase.com/api/service/mqlread",category:"object",type:"/common/topic"}},is_metaweb_system_type:function(f){return f.indexOf("/type/")===0||f.indexOf("/common/")===0&&f!=="/common/topic"||f.indexOf("/freebase/")===0&&f.indexOf("_profile")===f.length-8},suggest_options:function(f){var e={category:"instance",
type:f,type_strict:c.data_input.is_metaweb_system_type(f)?"any":"should"},b=["any","type:"+f,"without:fus","without:inst"];c.each(["user","domain","type"],function(a,d){if(f==="/freebase/"+d+"_profile"){b.push("type:/type/"+d);return false}});f==="/book/book_subject"&&b.push("type:/base/skosbase/skos_concept");e.filter="("+b.join(" ")+")";return e}});c.fn.validate_topic=function(f){return this.each(function(){var e=c(this);if(e.is(":text")){var b=e.data("$.validate_topic");b&&b._destroy();b=new c.validate_topic(this,
f);e.data("$.validate_topic",b)}})};c.validate_topic=function(f,e){this.options=c.extend(true,{},e);this.input=c(f);this.init()};c.validate_topic.prototype={init:function(){var f=this;this.input.suggest(this.options).bind("fb-textchange.validate_topic",function(){f.input.val()===""?f.empty():f.invalid()}).bind("fb-select.validate_topic",function(e,b){f.input.val(b.name!=null?b.name:b.id);f.valid(b)})},invalid:function(){this.input.trigger("invalid")},valid:function(f){this.input.trigger("valid",f)},
empty:function(){this.input.trigger("empty")},_destroy:function(){this.input.unbind(".validate_topic")},validate:function(){if(this.input.val()==="")this.empty();else{var f=this.input.data("data.suggest");f?this.valid(f):this.invalid()}}};c.fn.validate_enumerated=function(f){return this.each(function(){var e=c(this);if(e.is("select")){var b=e.data("$.validate_enumerated");b&&b._destroy();b=new c.validate_enumerated(this,f);e.data("$.validate_enumerated",b)}})};c.validate_enumerated=function(f,e){this.options=
c.extend(true,{},e);this.input=c(f);this.init()};c.validate_enumerated.prototype={init:function(){var f=this;this.input.bind("change.validate_enumerated, keypress.validate_enumerated",function(){this.selectedIndex===0?f.empty():f.valid({text:c(":selected",this).text(),id:this.value})})},invalid:function(){this.input.trigger("invalid")},valid:function(f){this.input.trigger("valid",f);this.input.trigger("fb-select",f)},empty:function(){this.input.trigger("empty")},_destroy:function(){this.input.unbind(".validate_enumerated")},
validate:function(){var f=this.input[0];f.selectedIndex>0?this.valid({text:c(":selected",this.input).text(),id:f.value}):this.empty()}};c.fn.validate_boolean=function(f){var e,b;this.each(function(){var d=c(this);if(d.is(":radio"))if(d.val().toLowerCase()==="true")e=d;else if(d.val().toLowerCase()==="false")b=d});if(e&&b){var a=e.data("$.validate_boolean");a&&a._destroy();a=new c.validate_boolean(e,b,f);e.data("$.validate_boolean",a)}return this};c.validate_boolean=function(f,e,b){this.options=c.extend(true,
{},b);this.tradio=f;this.fradio=e;this.input=this.tradio;this.init()};c.validate_boolean.prototype={init:function(){var f=this;this.tradio.bind("change.validate_boolean",function(){f.validate()})},_destroy:function(){this.input.unbind(".validate_boolean")},valid:function(f){this.input.trigger("valid",f)},empty:function(){this.input.trigger("empty")},validate:function(){if(this.tradio.is(":checked"))this.valid({text:this.tradio.text(),value:true});else this.fradio.is(":checked")?this.valid({text:this.fradio.text(),
value:false}):this.empty()}}})(jQuery);
(function(c){var f=window.editparams={Empty:function(e,b,a){this.structure=e;this.data=b;this.msg=a;this.toString=function(){return"Empty: "+this.msg}},Invalid:function(e,b,a){this.structure=e;this.data=b;this.msg=a;this.toString=function(){return"Invalid: "+this.msg}},parse:function(e,b){function a(m,l,n,r,q){try{f.validate(l,n);q.push(n)}catch(s){if(s instanceof f.Empty)q.push(n);else throw s;}}var d=(e.values||[]).slice(),h=e.properties||[],i=e.expected_type.mediator;if(i){if(!h.length)throw new f.Invalid(e,
null,"mediator musth have 1 or more properties");if(d.length&&d.length!==1)throw new f.Invalid(e,null,"Can't edit more than one value (row) for a mediator");}var j=[];c(".data-input",b).each(function(){var m=c(this),l=m.data("$.data_input");if(!l)throw new f.Invalid(e,null,"$.data-input not initialized for",this);l.validate(true);if(m.is(".error"))throw new f.Invalid(e,null,"$.data-input is invalid",this);l=m.data("data");if(!l)throw new f.Invalid(e,null,"$.data-input has no data",this);if(i){if(!j.length){j.push({});
c.each(h,function(q,s){j[0][s.id]=c.extend({},s,{values:[]})})}var n=j[0][l.name];if(n){var r=[];if(d.length)r=(r=d[0][n.id])&&r.values||[];a(m,n,l,r,n.values)}else console.warn("editparams","unknown mediator property data",l)}else a(m,e,l,d,j)});return i?f.parse_mediator(e,d,j):f.parse_simple(e,d,j)},parse_mediator:function(e,b,a){if(a.length!==1)throw new f.Invalid(e,a,"Must specify one (new or updated) value for a mediator");a=a[0];var d;if(b.length)d=b[0];b={};if(d)b.id=d.id;else{b.id=null;b.create=
"unconditional";b.connect=e.unique?"replace":"insert";var h=[];e.expected_type.id!=="/type/object"&&h.push({id:e.expected_type.id,connect:"insert"});var i=e.expected_type.included_types;i&&i.forEach(function(r){r!=="/type/object"&&h.push({id:r,connect:"insert"})});if(h.length)b.type=h}i=false;e=e.properties;for(var j=0,m=e.length;j<m;j++){var l=e[j],n=f.parse_simple(l,d&&d[l.id]&&d[l.id].values||[],a[l.id]&&a[l.id].values||[]);if(n.length){b[l.id]=n;i=true}}return i?[b]:[]},parse_simple:function(e,
b,a){return f.diff(e,b,a)},diff:function(e,b,a){var d=e.expected_type,h=e.expected_type.id,i=e.unique,j=h==="/type/text";if(i)if(!j)if(b.length&&b.length!==1)throw new f.Invalid(e,b,"Can't edit more than one value (row) for a unique property.");else if(a.length&&a.length!==1)throw new f.Invalid(e,a,"Can't edit more than one value (row) for a unique property.");var m=[];if(f.LITERAL_TYPE_IDS[h]){m.push("value");j&&m.push("lang")}else m.push("id");h=[];var l=[],n,r;n=0;for(r=b.length;n<r;n++){var q=
b[n];f.validate(e,q);f.inArray.apply(null,[q,a].concat(m))===-1&&h.push(f.clause(q,"delete"))}n=0;for(r=a.length;n<r;n++){q=a[n];try{f.validate(e,q)}catch(s){continue}if(f.inArray.apply(null,[q,b].concat(m))===-1){if(i)if(j){var t=f.inArray(q,h,"lang");t!==-1&&h.splice(t,1)}else return[f.clause(q,"replace",d)];l.push(f.clause(q,i?"replace":"insert",d))}}return h.concat(l)},validate:function(e,b){var a=e.expected_type.id;if(f.LITERAL_TYPE_IDS[a])if(f.isEmpty(b.value))throw new f.Empty(e,b);else{if(a===
"/type/text"&&f.isEmpty(b.lang))throw new f.Invalid(e,b,"Expected data.lang for /type/text");if(a==="/type/int"||a==="/type/float"){if(c.type(b.value)!=="number")throw new f.Invalid(e,b,"Expected number data.value for "+a);}else if(a==="/type/boolean"){if(c.type(b.value)!=="boolean")throw new f.Invalid(e,b,"Expected boolean data.value for /type/boolean");}else if(c.type(b.value)!=="string")throw new f.Invalid(e,b,"Expected string data.value for "+a);}else if(f.isEmpty(b.id))throw new f.Empty(e,b);
return b},clause:function(e,b,a){var d={connect:b};if(e.id){d.id=e.id;if(b!=="delete"&&a&&!a.enumeration){var h=[];a.id!=="/type/object"&&h.push({id:a.id,connect:"insert"});(e=a.included_types)&&e.forEach(function(i){i!=="/type/object"&&h.push({id:i,connect:"insert"})});if(h.length)d.type=h}}else{d.value=e.value;if(e.lang)d.lang=e.lang}return d},inArray:function(e,b){var a=Array.prototype.slice.call(arguments,2);if(!a.length)return c.inArray(e,b);for(var d=0,h=b.length;d<h;d++){for(var i=b[d],j=true,
m=0,l=a.length;m<l;m++){var n=a[m];if(i[n]!=e[n]){j=false;break}}if(j)return d}return-1},isEmpty:function(e){return e==null||e===""},LITERAL_TYPE_IDS:{"/type/int":1,"/type/float":1,"/type/boolean":1,"/type/rawstring":1,"/type/uri":1,"/type/text":1,"/type/datetime":1,"/type/id":1,"/type/key":1,"/type/value":1,"/type/enumeration":1}}})(jQuery);
(function(c,f,e){var b=f.edit={prop_add_begin:function(a,d){var h={s:f.options.id,p:a.attr("data-id"),lang:f.options.lang};c.ajax({url:f.options.base_ajax_url+"/prop_add_begin.ajax",data:h,dataType:"json",success:function(i,j,m){if(i.code!=="/api/status/ok")return b.ajax_error(m,null,a);i=c(i.result.html).hide();var l={mode:"add",event_prefix:"propbox.edit.prop_add.",ajax:{data:h,url:f.options.base_ajax_url+"/prop_edit_submit.ajax"},init:b.init_prop_add_form,submit:b.submit_prop_add_form,prop_section:a,
msg_row:c(".row-msg",i),edit_row:c(".edit-row",i),submit_row:c(".edit-row-submit",i),structure:i.metadata()};b.init(l);l.edit_row.bind("propbox.edit.prop_add.success",function(){if(d)l.edit_row.trigger(l.event_prefix+"cancel");else{b.reset_data_inputs(l);c(":input:visible:first",l.edit_row).focus();c(".button-submit",l.submit_row).attr("disabled","disabled").addClass("disabled");c(".button-cancel",l.submit_row).text("Done")}})},error:function(i){b.ajax_error(i,null,a)}})},init_prop_add_form:function(a){b.init_data_inputs(a);
c(":input:visible:first",a.edit_row).focus()},submit_prop_add_form:function(a){var d=c.extend({},a.ajax.data);try{var h=e.parse(a.structure,a.edit_row);d.o=JSON.stringify(h)}catch(i){d=c(".data-input.error",a.edit_row);if(d.length){a.edit_row.trigger(a.event_prefix+"error","Please specify a valid value");d.eq(0).find(":input").focus().select()}else a.edit_row.trigger(a.event_prefix+"error",i.toString());return}c.ajax({url:a.ajax.url,type:"POST",dataType:"json",data:d,success:function(j,m,l){if(j.code!==
"/api/status/ok")return b.ajax_error(l,a);j=c(j.result.html);a.msg_row.before(j);i18n.ize(j);c(".edit",j).show();f.init_menus(j,true);f.kbs.set_next(null,j,true);a.edit_row.trigger(a.event_prefix+"success")},error:function(j){b.ajax_error(j,a)}})},value_edit_begin:function(a,d){var h;if(d.is("tr"))h=d.attr("data-id");else{h=c(".property-value:first",d);h=h.attr("data-id")||h.attr("data-value")||h.attr("datetime")}var i={s:f.options.id,p:a.attr("data-id"),replace:h,lang:f.options.lang};c.ajax({url:f.options.base_ajax_url+
"/value_edit_begin.ajax",data:i,dataType:"json",success:function(j,m,l){if(j.code!=="/api/status/ok")return b.ajax_error(l,null,a,d);j=c(j.result.html).hide();var n={mode:"edit",event_prefix:"propbox.edit.value_edit.",ajax:{data:i,url:f.options.base_ajax_url+"/prop_edit_submit.ajax"},init:b.init_value_edit_form,submit:b.submit_value_edit_form,prop_section:a,prop_row:d,msg_row:c(".row-msg",j),edit_row:c(".edit-row",j),submit_row:c(".edit-row-submit",j),structure:j.metadata()};b.init(n);n.edit_row.bind("propbox.edit.value_edit.success",
function(){n.msg_row.remove();n.edit_row.remove();n.submit_row.remove()}).bind("propbox.edit.value_edit.cancel",function(){n.prop_row.show()}).bind("propbox.edit.value_edit.delete",function(){b.loading_begin(n);f.edit.value_delete_begin(a,d,function(){n.msg_row.remove();n.edit_row.remove();n.submit_row.remove()})})},error:function(j){b.ajax_error(j,null,a,d)}})},init_value_edit_form:function(a){b.init_data_inputs(a);c(":input:visible:first",a.edit_row).focus()},submit_value_edit_form:function(a){var d=
c.extend({},a.ajax.data);try{var h=e.parse(a.structure,a.edit_row);d.o=JSON.stringify(h)}catch(i){d=c(".data-input.error",a.edit_row);if(d.length){a.edit_row.trigger(a.event_prefix+"error","Please specify a valid value");d.eq(0).find(":input").focus().select()}else a.edit_row.trigger(a.event_prefix+"error",i.toString());return}c.ajax({url:a.ajax.url,type:"POST",dataType:"json",data:d,success:function(j,m,l){if(j.code!=="/api/status/ok")return b.ajax_error(l,a);j=c(j.result.html);a.prop_row.after(j);
i18n.ize(j);c(".edit",j).show();f.init_menus(j,true);f.kbs.set_next(null,j,true);a.prop_row.remove();a.edit_row.trigger(a.event_prefix+"success")},error:function(j){b.ajax_error(j,a)}})},value_delete_begin:function(a,d,h){var i;if(d.is("tr"))i=d.attr("data-id");else{i=c(".property-value:first",d);i=i.attr("data-id")||i.attr("data-value")||i.attr("datetime")}i={s:f.options.id,p:a.attr("data-id"),o:i,lang:f.options.lang};c.ajax({url:f.options.base_ajax_url+"/value_delete_submit.ajax",type:"POST",data:i,
dataType:"json",success:function(j,m,l){if(j.code!=="/api/status/ok")return b.ajax_error(l,null,a,d);j=c(j.result.html);d.before(j);d.hide();a.removeClass("editing");h&&h()},error:function(j){b.ajax_error(j,null,a,d)}})},value_delete_undo:function(a){var d=c(a).parents(".row-msg:first"),h=d.next(".data-row:hidden"),i=h.parents(".property-section");if(h.is("tr"))a=h.attr("data-id");else{a=c(".property-value:first",h);a=a.attr("data-id")||a.attr("data-value")||a.attr("datetime")}a={s:f.options.id,p:i.attr("data-id"),
o:a,lang:f.options.lang};c.ajax({url:f.options.base_ajax_url+"/value_delete_undo.ajax",type:"POST",data:a,dataType:"json",success:function(j,m,l){if(j.code!=="/api/status/ok")return b.ajax_error(l,null,i,h);h.show();d.remove()},error:function(j){b.ajax_error(j,null,i,h)}});return false},loading_begin:function(a){c.each([a.edit_row,a.msg_row,a.submit_row],function(d,h){h&&h.addClass("loading")})},loading_complete:function(a){c.each([a.edit_row,a.msg_row,a.submit_row],function(d,h){h&&h.removeClass("loading")})},
init_data_inputs:function(a){c(".data-input",a.edit_row).each(function(){b.init_data_input(c(this),a)})},init_data_input:function(a,d){a.data_input({lang:f.options.lang,suggest:f.options.suggest}).bind("valid",function(){d.edit_row.trigger(d.event_prefix+"valid");var h=a.parent(".form-field"),i=h.next(".magicbox-template");if(i.length){i=c("<div>").html(i.html());i=c(".form-field",i);h.after(i);b.init_data_input(c(".data-input",i),d)}}).bind("empty",function(){d.edit_row.trigger(d.event_prefix+"valid")}).bind("invalid",
function(){d.edit_row.trigger(d.event_prefix+"invalid")}).bind("submit",function(){d.edit_row.trigger(d.event_prefix+"submit")}).bind("cancel",function(){d.edit_row.trigger(d.event_prefix+"cancel")}).bind("loading",function(){c(this).addClass("loading")}).bind("loading_complete",function(){c(this).removeClass("loading")});if(a.is(".datetime"))i18n.ize_datetime_input(c(":text",a));else if(a.is(".int")||a.is(".float"))i18n.ize_number_input(c(":text",a))},reset_data_inputs:function(a){c(".data-input",
a.edit_row).each(function(){c(this).data("$.data_input").reset()})},init:function(a){if(a.mode==="add"){var d=c(">.data-section",a.prop_section);c("> .data-table > tbody > .empty-row, > .data-list > .empty-row",d).hide();c("> .data-table > tbody, > .data-list",d).append(a.msg_row).append(a.edit_row).append(a.submit_row)}else if(a.mode==="edit"){a.prop_row.hide();a.prop_row.after(a.msg_row);a.msg_row.after(a.edit_row);a.edit_row.after(a.submit_row)}c(".data-table > thead",a.prop_section).show();var h=
a.event_prefix||"propbox.edit.";a.edit_row.bind(h+"valid",function(){c(".button-submit",a.submit_row).removeAttr("disabled").removeClass("disabled")}).bind(h+"invalid",function(){c(".button-submit",a.submit_row).attr("disabled","disabled").addClass("disabled")}).bind(h+"submit",function(){b.submit(a)}).bind(h+"cancel",function(){b.cancel(a)}).bind(h+"error",function(i,j){b.error(a,j);b.loading_complete(a);a.prop_section.removeClass("editing")}).bind(h+"success",function(){b.loading_complete(a);a.prop_section.removeClass("editing")});
c(".button-submit",a.submit_row).click(function(){a.edit_row.trigger(h+"submit")});c(".button-cancel",a.submit_row).click(function(){a.edit_row.trigger(h+"cancel")});c(".button-delete",a.submit_row).click(function(){a.edit_row.trigger(h+"delete")});a.edit_row.show();a.submit_row.show();f.kbs.scroll_to(a.prop_section);a.init&&a.init(a)},cancel:function(a){a.msg_row.remove();a.edit_row.remove();a.submit_row.remove();a.prop_section.removeClass("editing");a=c(">.data-section",a.prop_section);c("> .data-table > tbody > tr, > .data-list > li",
a).filter(":not(.empty-row)").length||c("> .data-table > tbody > .empty-row, > .data-list > .empty-row",a).show()},submit:function(a){if(!a.edit_row.is(".loading"))if(!c(".button-submit",a.submit_row).is(":disabled")){document.activeElement&&c(document.activeElement).blur();b.clear_form_message(a);b.loading_begin(a);a.submit&&a.submit(a)}},error:function(a,d){c(".button-submit",a.submit_row).attr("disabled","disabled").addClass("disabled");return b.form_message(a,d,"error")},form_message:function(a,
d,h){a.msg_row.find(".close-msg").css("visibility","visible").next().find(".msg-default").hide().next().text(d);a.msg_row.attr("class","row-msg");h&&a.msg_row.addClass("row-msg-"+h)},clear_form_message:function(a){a.msg_row.find(".close-msg").css("visibility","hidden").next().find(".msg-default").show().next().html("&nbsp;")},ajax_error:function(a,d,h,i){a=a.responseText;if(d)d.edit_row.trigger(d.event_prefix+"error",a);else{d=c(".data-table",h);a=d.length?b.row_msg(a,"error","tr",c(">thead>tr:first>th",
d).length):b.row_msg(a,"error","li");if(i){i.before(a);i.is(".edit-row")?i.removeClass("loading"):h.removeClass("editing")}else{d.length?c(">tbody",d).append(a):c(".data-list",h).append(a);h.removeClass("editing")}}},row_msg:function(a,d,h,i){var j=c('<a class="close-msg" href="#">x</a>').click(function(){c(this).parents(".row-msg:first").remove();return false}),m=c("<span>").text(a);a=c("<"+h+' class="row-msg">');if(h==="tr"){h=c("<td>").append(j).append(m);i&&h.attr("colspan",i);a.append(h)}else a.append(j).append(m);
d&&a.addClass("row-msg-"+d);return a}}})(jQuery,window.propbox,window.editparams);
(function(c,f,e,b){function a(){var i=c.extend({status:["","Searching...","Select an item from the list:"]},f.suggest_options.service_defaults);i.mqlread_url=f.acre.freebase.googleapis_url?f.h.fb_googleapis_url("/mqlread"):f.h.fb_api_url("/api/service/mqlread");return i}function d(i){e.edit.init_data_inputs(i);c(":input:visible:first",i.edit_row).focus()}function h(i){var j=c.extend({},i.ajax.data),m;try{m=b.parse(i.structure,i.edit_row)}catch(l){j=c(".data-input.error",i.edit_row);if(j.length){i.edit_row.trigger(i.event_prefix+
"error","Please specify a valid value");j.eq(0).find(":input").focus().select()}else i.edit_row.trigger(i.event_prefix+"error",l.toString());return}if(m&&m.length){j.o=JSON.stringify(m);c.ajax({url:i.ajax.url,type:"POST",dataType:"json",data:j,success:function(n){n=c(n.result.html);n=c(".property-value:first",n).attr("data-id");window.location.href=f.h.fb_url(n)}})}else{i.edit_row.trigger(i.event_prefix+"error","Please specify a valid value");c("input:first",i.edit_row).focus()}}c(function(){var i=
c(".edit-form"),j=c(".edit-row-submit",i),m=c("input[name=s]",j).val(),l=c("input[name=lang]",j).val();e.init(i,{id:m,base_ajax_url:f.h.ajax_url("lib/propbox"),base_static_url:f.h.static_url("lib/propbox"),lang:l,suggest:a()});i={mode:"create.type.instance.",event_prefix:"create.type.instance.",ajax:{data:{s:c("input[name=s]",j).val(),p:c("input[name=p]",j).val(),lang:c("input[name=lang]",j).val()},url:f.h.ajax_url("lib/propbox/prop_edit_submit.ajax")},init:d,submit:h,prop_section:i,msg_row:c(".row-msg",
i),edit_row:i,submit_row:j,structure:i.metadata()};e.edit.init(i)})})(jQuery,window.freebase,window.propbox,window.editparams);

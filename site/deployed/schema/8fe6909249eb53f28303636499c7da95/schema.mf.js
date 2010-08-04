/*
 
 jQuery Tools @VERSION Tabs- The basics of UI design.

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tabs/

 Since: November 2008
 Date: @DATE 
 
 jQuery Tools @VERSION Tooltip - UI essentials

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tooltip/

 Since: November 2008
 Date: @DATE 
*/
jQuery.cookie=function(a,d,e){if(typeof d!="undefined"){e=e||{};if(d===null){d="";e=$.extend({},e);e.expires=-1}var g="";if(e.expires&&(typeof e.expires=="number"||e.expires.toUTCString)){if(typeof e.expires=="number"){g=new Date;g.setTime(g.getTime()+e.expires*24*60*60*1E3)}else g=e.expires;g="; expires="+g.toUTCString()}var c=e.path?"; path="+e.path:"",b=e.domain?"; domain="+e.domain:"";e=e.secure?"; secure":"";document.cookie=[a,"=",encodeURIComponent(d),g,c,b,e].join("")}else{d=null;if(document.cookie&&
document.cookie!=""){e=document.cookie.split(";");for(g=0;g<e.length;g++){c=jQuery.trim(e[g]);if(c.substring(0,a.length+1)==a+"="){d=decodeURIComponent(c.substring(a.length+1));break}}}return d}};
jQuery.fn.textPlaceholder=function(a){a=a||"#AAA";return this.each(function(){var d=this;if(!(d.placeholder&&"placeholder"in document.createElement(d.tagName))){var e=d.style.color,g=d.getAttribute("placeholder"),c=$(d);if(d.value===""||d.value==g){d.value=g;d.style.color=a;c.data("placeholder-visible",true)}c.focus(function(){this.style.color=e;if(c.data("placeholder-visible")){c.data("placeholder-visible",false);this.value=""}});c.blur(function(){if(this.value===""){c.data("placeholder-visible",
true);this.value=g;this.style.color=a}else{this.style.color=e;c.data("placeholder-visible",false)}});d.form&&$(d.form).submit(function(){if(c.data("placeholder-visible"))d.value=""})}})};
(function(a){a.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(d,e){this.defaults.type=d;this.defaults.name=e},get:function(d,e){var g=a.extend({},this.defaults,e);if(!g.single.length)g.single="metadata";var c=a.data(d,g.single);if(c)return c;c="{}";var b=function(h){if(typeof h!="string")return h;return h=eval("("+h+")")};if(g.type=="html5"){var f={};a(d.attributes).each(function(){var h=this.nodeName;if(h.match(/^data-/))h=h.replace(/^data-/,
"");else return true;f[h]=b(this.nodeValue)})}else{if(g.type=="class"){var i=g.cre.exec(d.className);if(i)c=i[1]}else if(g.type=="elem"){if(!d.getElementsByTagName)return;i=d.getElementsByTagName(g.name);if(i.length)c=a.trim(i[0].innerHTML)}else if(d.getAttribute!=undefined)if(i=d.getAttribute(g.name))c=i;f=b(c.indexOf("{")<0?"{"+c+"}":c)}a.data(d,g.single,f);return f}}});a.fn.metadata=function(d){return a.metadata.get(this[0],d)}})(jQuery);
(function(a){a.ui=a.ui||{};if(!a.ui.version){a.extend(a.ui,{version:"1.8.2",plugin:{add:function(d,e,g){d=a.ui[d].prototype;for(var c in g){d.plugins[c]=d.plugins[c]||[];d.plugins[c].push([e,g[c]])}},call:function(d,e,g){if((e=d.plugins[e])&&d.element[0].parentNode)for(var c=0;c<e.length;c++)d.options[e[c][0]]&&e[c][1].apply(d.element,g)}},contains:function(d,e){return document.compareDocumentPosition?d.compareDocumentPosition(e)&16:d!==e&&d.contains(e)},hasScroll:function(d,e){if(a(d).css("overflow")==
"hidden")return false;var g=e&&e=="left"?"scrollLeft":"scrollTop",c=false;if(d[g]>0)return true;d[g]=1;c=d[g]>0;d[g]=0;return c},isOverAxis:function(d,e,g){return d>e&&d<e+g},isOver:function(d,e,g,c,b,f){return a.ui.isOverAxis(d,g,b)&&a.ui.isOverAxis(e,c,f)},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,
NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({_focus:a.fn.focus,focus:function(d,e){return typeof d==="number"?this.each(function(){var g=this;setTimeout(function(){a(g).focus();e&&e.call(g)},d)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect",
"none")},scrollParent:function(){var d;d=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",
1))}).eq(0);return/fixed/.test(this.css("position"))||!d.length?a(document):d},zIndex:function(d){if(d!==undefined)return this.css("zIndex",d);if(this.length){d=a(this[0]);for(var e;d.length&&d[0]!==document;){e=d.css("position");if(e=="absolute"||e=="relative"||e=="fixed"){e=parseInt(d.css("zIndex"));if(!isNaN(e)&&e!=0)return e}d=d.parent()}}return 0}});a.extend(a.expr[":"],{data:function(d,e,g){return!!a.data(d,g[3])},focusable:function(d){var e=d.nodeName.toLowerCase(),g=a.attr(d,"tabindex");return(/input|select|textarea|button|object/.test(e)?
!d.disabled:"a"==e||"area"==e?d.href||!isNaN(g):!isNaN(g))&&!a(d)["area"==e?"parents":"closest"](":hidden").length},tabbable:function(d){var e=a.attr(d,"tabindex");return(isNaN(e)||e>=0)&&a(d).is(":focusable")}})}})(jQuery);
(function(a){var d=a.fn.remove;a.fn.remove=function(e,g){return this.each(function(){if(!g)if(!e||a.filter(e,[this]).length)a("*",this).add(this).each(function(){a(this).triggerHandler("remove")});return d.call(a(this),e,g)})};a.widget=function(e,g,c){var b=e.split(".")[0],f;e=e.split(".")[1];f=b+"-"+e;if(!c){c=g;g=a.Widget}a.expr[":"][f]=function(i){return!!a.data(i,e)};a[b]=a[b]||{};a[b][e]=function(i,h){arguments.length&&this._createWidget(i,h)};g=new g;g.options=a.extend({},g.options);a[b][e].prototype=
a.extend(true,g,{namespace:b,widgetName:e,widgetEventPrefix:a[b][e].prototype.widgetEventPrefix||e,widgetBaseClass:f},c);a.widget.bridge(e,a[b][e])};a.widget.bridge=function(e,g){a.fn[e]=function(c){var b=typeof c==="string",f=Array.prototype.slice.call(arguments,1),i=this;c=!b&&f.length?a.extend.apply(null,[true,c].concat(f)):c;if(b&&c.substring(0,1)==="_")return i;b?this.each(function(){var h=a.data(this,e),k=h&&a.isFunction(h[c])?h[c].apply(h,f):h;if(k!==h&&k!==undefined){i=k;return false}}):this.each(function(){var h=
a.data(this,e);if(h){c&&h.option(c);h._init()}else a.data(this,e,new g(c,this))});return i}};a.Widget=function(e,g){arguments.length&&this._createWidget(e,g)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(e,g){this.element=a(g).data(this.widgetName,this);this.options=a.extend(true,{},this.options,a.metadata&&a.metadata.get(g)[this.widgetName],e);var c=this;this.element.bind("remove."+this.widgetName,function(){c.destroy()});this._create();
this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(e,g){var c=e,b=this;if(arguments.length===0)return a.extend({},b.options);if(typeof e==="string"){if(g===undefined)return this.options[e];c={};c[e]=g}a.each(c,function(f,
i){b._setOption(f,i)});return b},_setOption:function(e,g){this.options[e]=g;if(e==="disabled")this.widget()[g?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",g);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(e,g,c){var b=this.options[e];g=a.Event(g);g.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase();c=c||{};if(g.originalEvent){e=
a.event.props.length;for(var f;e;){f=a.event.props[--e];g[f]=g.originalEvent[f]}}this.element.trigger(g,c);return!(a.isFunction(b)&&b.call(this.element[0],g,c)===false||g.isDefaultPrevented())}}})(jQuery);
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var d=this;this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)}).bind("click."+this.widgetName,function(e){if(d._preventClickEvent){d._preventClickEvent=false;e.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(d){d.originalEvent=d.originalEvent||{};if(!d.originalEvent.mouseHandled){this._mouseStarted&&
this._mouseUp(d);this._mouseDownEvent=d;var e=this,g=d.which==1,c=typeof this.options.cancel=="string"?a(d.target).parents().add(d.target).filter(this.options.cancel).length:false;if(!g||c||!this._mouseCapture(d))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=this._mouseStart(d)!==false;if(!this._mouseStarted){d.preventDefault();
return true}}this._mouseMoveDelegate=function(b){return e._mouseMove(b)};this._mouseUpDelegate=function(b){return e._mouseUp(b)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.browser.safari||d.preventDefault();return d.originalEvent.mouseHandled=true}},_mouseMove:function(d){if(a.browser.msie&&!d.button)return this._mouseUp(d);if(this._mouseStarted){this._mouseDrag(d);return d.preventDefault()}if(this._mouseDistanceMet(d)&&
this._mouseDelayMet(d))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,d)!==false)?this._mouseDrag(d):this._mouseUp(d);return!this._mouseStarted},_mouseUp:function(d){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=d.target==this._mouseDownEvent.target;this._mouseStop(d)}return false},_mouseDistanceMet:function(d){return Math.max(Math.abs(this._mouseDownEvent.pageX-
d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(a){a.ui=a.ui||{};var d=/left|center|right/,e=/top|center|bottom/,g=a.fn.position,c=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var f=a(b.of),i=(b.collision||"flip").split(" "),h=b.offset?b.offset.split(" "):[0,0],k,m,n;if(b.of.nodeType===9){k=f.width();m=f.height();n={top:0,left:0}}else if(b.of.scrollTo&&b.of.document){k=f.width();m=f.height();n={top:f.scrollTop(),left:f.scrollLeft()}}else if(b.of.preventDefault){b.at="left top";k=m=
0;n={top:b.of.pageY,left:b.of.pageX}}else{k=f.outerWidth();m=f.outerHeight();n=f.offset()}a.each(["my","at"],function(){var j=(b[this]||"").split(" ");if(j.length===1)j=d.test(j[0])?j.concat(["center"]):e.test(j[0])?["center"].concat(j):["center","center"];j[0]=d.test(j[0])?j[0]:"center";j[1]=e.test(j[1])?j[1]:"center";b[this]=j});if(i.length===1)i[1]=i[0];h[0]=parseInt(h[0],10)||0;if(h.length===1)h[1]=h[0];h[1]=parseInt(h[1],10)||0;if(b.at[0]==="right")n.left+=k;else if(b.at[0]==="center")n.left+=
k/2;if(b.at[1]==="bottom")n.top+=m;else if(b.at[1]==="center")n.top+=m/2;n.left+=h[0];n.top+=h[1];return this.each(function(){var j=a(this),l=j.outerWidth(),o=j.outerHeight(),q=a.extend({},n);if(b.my[0]==="right")q.left-=l;else if(b.my[0]==="center")q.left-=l/2;if(b.my[1]==="bottom")q.top-=o;else if(b.my[1]==="center")q.top-=o/2;q.left=parseInt(q.left);q.top=parseInt(q.top);a.each(["left","top"],function(t,s){a.ui.position[i[t]]&&a.ui.position[i[t]][s](q,{targetWidth:k,targetHeight:m,elemWidth:l,
elemHeight:o,offset:h,my:b.my,at:b.at})});a.fn.bgiframe&&j.bgiframe();j.offset(a.extend(q,{using:b.using}))})};a.ui.position={fit:{left:function(b,f){var i=a(window);i=b.left+f.elemWidth-i.width()-i.scrollLeft();b.left=i>0?b.left-i:Math.max(0,b.left)},top:function(b,f){var i=a(window);i=b.top+f.elemHeight-i.height()-i.scrollTop();b.top=i>0?b.top-i:Math.max(0,b.top)}},flip:{left:function(b,f){if(f.at[0]!=="center"){var i=a(window);i=b.left+f.elemWidth-i.width()-i.scrollLeft();var h=f.my[0]==="left"?
-f.elemWidth:f.my[0]==="right"?f.elemWidth:0,k=-2*f.offset[0];b.left+=b.left<0?h+f.targetWidth+k:i>0?h-f.targetWidth+k:0}},top:function(b,f){if(f.at[1]!=="center"){var i=a(window);i=b.top+f.elemHeight-i.height()-i.scrollTop();var h=f.my[1]==="top"?-f.elemHeight:f.my[1]==="bottom"?f.elemHeight:0,k=f.at[1]==="top"?f.targetHeight:-f.targetHeight,m=-2*f.offset[1];b.top+=b.top<0?h+f.targetHeight+m:i>0?h+k+m:0}}}};if(!a.offset.setOffset){a.offset.setOffset=function(b,f){if(/static/.test(a.curCSS(b,"position")))b.style.position=
"relative";var i=a(b),h=i.offset(),k=parseInt(a.curCSS(b,"top",true),10)||0,m=parseInt(a.curCSS(b,"left",true),10)||0;h={top:f.top-h.top+k,left:f.left-h.left+m};"using"in f?f.using.call(b,h):i.css(h)};a.fn.offset=function(b){var f=this[0];if(!f||!f.ownerDocument)return null;if(b)return this.each(function(){a.offset.setOffset(this,b)});return c.call(this)}}})(jQuery);window.freebase=window.fb={};
(function(a,d){d.dispatch=function(e,g,c,b){if(typeof g!=="function")return false;e=a.event.fix(e||window.event);c||(c=[]);b||(b=this);return g.apply(b,[e].concat(c))}})(jQuery,window.freebase);
(function(a,d){function e(f,i){var h=f.indexOf("|"+i+"_");if(h!=-1){h=h+2+i.length;var k=f.indexOf("|",h);if(k!=-1)return decodeURIComponent(f.substr(h,k-h))}return null}var g=a.cookie("metaweb-user-info");if(g){var c=e(g,"g"),b=e(g,"u");(g=e(g,"p"))||(g="/user/"+this.name);d.user={guid:c,name:b,id:g}}if(d.user){c=a("#nav-username a:first");if(c.length){c[0].href+=d.user.id;c.text(d.user.name)}a("#signedin").show()}else a("#signedout").show()})(jQuery,window.freebase);
(function(a){a(function(){var d=a("#SearchBox .SearchBox-input,#global-search-input"),e=acre.freebase.site_host;d.suggest({service_url:e,soft:true,category:"object",parent:"#site-search-box",align:"right",status:null});var g=a("#site-search-label"),c=a("#site-search-box .fbs-pane");d.bind("fb-select",function(b,f){window.location=e+"/view"+f.id;return false}).bind("fb-pane-show",function(){g.html("<span>Select an item from the list</span>").removeClass("loading")}).bind("fb-textchange",function(){a.trim(d.val())===
""?g.html("<span>Start typing to get some suggestions</span>").removeClass("loading"):g.html("<span>Searching...</span>").addClass("loading")}).bind("fb-error",function(){g.html("<span>Sorry, something went wrong. Please try again later</span>").removeClass("loading")}).focus(function(){g.is(":visible")||a("#site-search-label").slideDown("fast")}).blur(function(){!c.is(":visible")&&g.is(":visible")&&a("#site-search-label").slideUp("fast")});a(".SearchBox-form").submit(function(){return a.trim(a("#global-search-input").val()).length==
0?false:true});a("input, textarea").textPlaceholder()})})(jQuery,window.freebase);
(function(a){function d(c,b,f){var i=this,h=c.add(this),k=c.find(f.tabs),m=b.jquery?b:c.children(b),n;k.length||(k=c.children());m.length||(m=c.parent().find(b));m.length||(m=a(b));a.extend(this,{click:function(j,l){var o=k.eq(j);if(typeof j=="string"&&j.replace("#","")){o=k.filter("[href*="+j.replace("#","")+"]");j=Math.max(k.index(o),0)}if(f.rotate){var q=k.length-1;if(j<0)return i.click(q,l);if(j>q)return i.click(0,l)}if(!o.length){if(n>=0)return i;j=f.initialIndex;o=k.eq(j)}if(j===n)return i;
l=l||a.Event();l.type="onBeforeClick";h.trigger(l,[j]);if(!l.isDefaultPrevented()){e[f.effect].call(i,j,function(){l.type="onClick";h.trigger(l,[j])});n=j;k.removeClass(f.current);o.addClass(f.current);return i}},getConf:function(){return f},getTabs:function(){return k},getPanes:function(){return m},getCurrentPane:function(){return m.eq(n)},getCurrentTab:function(){return k.eq(n)},getIndex:function(){return n},next:function(){return i.click(n+1)},prev:function(){return i.click(n-1)},destroy:function(){k.unbind(f.event).removeClass(f.current);
m.find("a[href^=#]").unbind("click.T");return i}});a.each("onBeforeClick,onClick".split(","),function(j,l){a.isFunction(f[l])&&a(i).bind(l,f[l]);i[l]=function(o){a(i).bind(l,o);return i}});if(f.history&&a.fn.history){a.tools.history.init(k);f.event="history"}k.each(function(j){a(this).bind(f.event,function(l){i.click(j,l);return l.preventDefault()})});m.find("a[href^=#]").bind("click.T",function(j){i.click(a(this).attr("href"),j)});if(location.hash)i.click(location.hash);else if(f.initialIndex===
0||f.initialIndex>0)i.click(f.initialIndex)}a.tools=a.tools||{version:"@VERSION"};a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(c,b){e[c]=b}};var e={"default":function(c,b){this.getPanes().hide().eq(c).show();b.call()},fade:function(c,b){var f=this.getConf(),i=f.fadeOutSpeed,h=this.getPanes();i?h.fadeOut(i):h.hide();h.eq(c).fadeIn(f.fadeInSpeed,b)},slide:function(c,b){this.getPanes().slideUp(200);
this.getPanes().eq(c).slideDown(400,b)},ajax:function(c,b){this.getPanes().eq(0).load(this.getTabs().eq(c).attr("href"),b)}},g;a.tools.tabs.addEffect("horizontal",function(c,b){g||(g=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){a(this).hide()});this.getPanes().eq(c).animate({width:g},function(){a(this).show();b.call()})});a.fn.tabs=function(c,b){var f=this.data("tabs");if(f){f.destroy();this.removeData("tabs")}if(a.isFunction(b))b={onBeforeClick:b};b=a.extend({},
a.tools.tabs.conf,b);this.each(function(){f=new d(a(this),c,b);a(this).data("tabs",f)});return b.api?f:this}})(jQuery);
(function(a){function d(c,b,f){var i=f.relative?c.position().top:c.offset().top,h=f.relative?c.position().left:c.offset().left,k=f.position[0];i-=b.outerHeight()-f.offset[0];h+=c.outerWidth()+f.offset[1];var m=b.outerHeight()+c.outerHeight();if(k=="center")i+=m/2;if(k=="bottom")i+=m;k=f.position[1];c=b.outerWidth()+c.outerWidth();if(k=="center")h-=c/2;if(k=="left")h-=c;return{top:i,left:h}}function e(c,b){var f=this,i=c.add(f),h,k=0,m=0,n=c.attr("title"),j=g[b.effect],l,o=c.is(":input"),q=o&&c.is(":checkbox, :radio, select, :button, :submit"),
t=c.attr("type"),s=b.events[t]||b.events[o?q?"widget":"input":"def"];if(!j)throw'Nonexistent effect "'+b.effect+'"';s=s.split(/,\s*/);if(s.length!=2)throw"Tooltip: bad events configuration for "+t;c.bind(s[0],function(p){clearTimeout(k);if(b.predelay)m=setTimeout(function(){f.show(p)},b.predelay);else f.show(p)}).bind(s[1],function(p){clearTimeout(m);if(b.delay)k=setTimeout(function(){f.hide(p)},b.delay);else f.hide(p)});if(n&&b.cancelDefault){c.removeAttr("title");c.data("title",n)}a.extend(f,{show:function(p){if(!h){if(n)h=
a(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(n);else if(b.tip)h=a(b.tip).eq(0);else{h=c.next();h.length||(h=c.parent().next())}if(!h.length)throw"Cannot find tooltip for "+c;}if(f.isShown())return f;h.stop(true,true);var r=d(c,h,b);p=p||a.Event();p.type="onBeforeShow";i.trigger(p,[r]);if(p.isDefaultPrevented())return f;r=d(c,h,b);h.css({position:"absolute",top:r.top,left:r.left});l=true;j[0].call(f,function(){p.type="onShow";l="full";i.trigger(p)});r=b.events.tooltip.split(/,\s*/);
h.bind(r[0],function(){clearTimeout(k);clearTimeout(m)});r[1]&&!c.is("input:not(:checkbox, :radio), textarea")&&h.bind(r[1],function(u){u.relatedTarget!=c[0]&&c.trigger(s[1].split(" ")[0])});return f},hide:function(p){if(!h||!f.isShown())return f;p=p||a.Event();p.type="onBeforeHide";i.trigger(p);if(!p.isDefaultPrevented()){l=false;g[b.effect][1].call(f,function(){p.type="onHide";l=false;i.trigger(p)});return f}},isShown:function(p){return p?l=="full":l},getConf:function(){return b},getTip:function(){return h},
getTrigger:function(){return c}});a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(p,r){a.isFunction(b[r])&&a(f).bind(r,b[r]);f[r]=function(u){a(f).bind(r,u);return f}})}a.tools=a.tools||{version:"@VERSION"};a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},
layout:"<div/>",tipClass:"tooltip"},addEffect:function(c,b,f){g[c]=[b,f]}};var g={toggle:[function(c){var b=this.getConf(),f=this.getTip();b=b.opacity;b<1&&f.css({opacity:b});f.show();c.call()},function(c){this.getTip().hide();c.call()}],fade:[function(c){var b=this.getConf();this.getTip().fadeTo(b.fadeInSpeed,b.opacity,c)},function(c){this.getTip().fadeOut(this.getConf().fadeOutSpeed,c)}]};a.fn.tooltip=function(c){var b=this.data("tooltip");if(b)return b;c=a.extend(true,{},a.tools.tooltip.conf,c);
if(typeof c.position=="string")c.position=c.position.split(/,?\s/);this.each(function(){b=new e(a(this),c);a(this).data("tooltip",b)});return c.api?b:this}})(jQuery);
(function(a){a(function(){a("#schema-search > .section-tabset").tabs("#schema-search > .search-box");a.tablesorter.addParser({id:"schemaName",is:function(){return false},format:function(j){console.log("schemaName",j);return a(j).text().toLowerCase()},type:"text"});a.tablesorter.addParser({id:"commaDigit",is:function(){return false},format:function(j){return parseInt(j.replace(/\,/g,""))},type:"numeric"});a(".table-sortable").tablesorter({cssAsc:"column-header-asc",cssDesc:"column-header-desc",cssHeader:"column-header"});
a(".row-menu-trigger").each(function(){a(this).tooltip({events:{def:"click,mouseout"},position:"bottom right",offset:[-10,-10],effect:"fade",delay:300});a(this).closest(".row-menu").children().last().hide()});a(".blurb-trigger").click(function(){var j=a(this),l=j.siblings(".blurb"),o=j.siblings(".blob");console.log(l);console.log(o);if(o.is(":hidden")){o.show();l.hide();j.text("Less")}else{o.hide();l.show();j.text("More")}});var d=a(".breadcrumb-sibling-trigger").outerWidth();a(".breadcrumb-sibling-trigger").tooltip({events:{def:"click,mouseout"},
position:"bottom right",offset:[-5,-d],effect:"fade",delay:300,onBeforeShow:function(){this.getTrigger().addClass("active")},onHide:function(){this.getTrigger().removeClass("active")}});a(".return-link-trigger").tooltip({events:{def:"click,mouseout"},position:"top center",effect:"fade",delay:300,offset:[-8,0]});a(".row-menu-trigger").css({visibility:"hidden"});a(".hoverable").hover(function(){var j=a(this);j.addClass("row-hover");a(".row-menu-trigger",j).css("visibility","visible").hide().fadeIn("fast")},
function(){var j=a(this);a(".row-menu-trigger",j).css("visibility","hidden");j.removeClass("row-hover")});a("#included-types-table").find("tbody").hide();a("#incoming-properties-table").find("tbody:not(.expanded)").hide();a("#included-types-table .tbody-header, #incoming-properties-table .tbody-header").click(function(){var j=a(this),l=a("tbody."+j.attr("data-target")),o=j.find(".tbody-header-title");if(l.is(":hidden")){o.addClass("expanded");l.slideDown();j.addClass("expanded")}else{o.removeClass("expanded");
l.slideUp();j.removeClass("expanded")}});var e={domain:[{key:[{namespace:"/"}]}],type:[{"/type/type/domain":[{key:[{namespace:"/"}]}],"a:/type/type/domain":{id:"/freebase",optional:"forbidden"}}],property:[{"/type/property/schema":{type:"/type/type",domain:[{key:[{namespace:"/"}]}],"a:domain":{id:"/freebase",optional:"forbidden"}}}]},g=a("#domain-search-input"),c=g.closest("form");c.submit(function(){return false});var b={type:"/type/domain"};if(a("#domain-search-toggle-commons").is(":checked"))b.mql_filter=
e.domain;g.suggest(b).bind("fb-select",function(j,l){var o=c.attr("action");window.location.href=o+l.id}).focus(function(){this.select()});var f=a("#type-search-input"),i=f.closest("form");i.submit(function(){return false});var h={type:"/type/type"};if(a("#type-search-toggle-commons").is(":checked"))h.mql_filter=e.type;f.suggest(h).bind("fb-select",function(j,l){var o=i.attr("action");window.location.href=o+l.id}).focus(function(){this.select()});var k=a("#property-search-input"),m=k.closest("form");
m.submit(function(){return false});var n={type:"/type/property"};if(a("#property-search-toggle-commons").is(":checked"))n.mql_filter=e.property;k.suggest(n).bind("fb-select",function(j,l){var o=m.attr("action");window.location.href=o+l.id}).focus(function(){this.select()});a(".search-toggle").click(function(){var j=a(this),l=a(this).parent().siblings("form");l.find(".text-input").focus();j=j.attr("id").split("-");if(l.attr("id")===c.attr("id")){if(j[j.length-1]==="commons")b.mql_filter=e.domain;else delete b.mql_filter;
g.suggest(b)}if(l.attr("id")===i.attr("id")){if(j[j.length-1]==="commons")h.mql_filter=e.type;else delete h.mql_filter;f.suggest(h)}if(l.attr("id")===m.attr("id")){if(j[j.length-1]==="commons")n.mql_filter=e.property;else delete n.mql_filter;k.suggest(n)}})})})(jQuery,window.freebase);

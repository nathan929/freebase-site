/*
 
 jQuery Tools @VERSION Tabs- The basics of UI design.

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tabs/

 Since: November 2008
 Date: @DATE 
*/
jQuery.cookie=function(b,e,a){if(typeof e!="undefined"){a=a||{};if(e===null){e="";a=$.extend({},a);a.expires=-1}var d="";if(a.expires&&(typeof a.expires=="number"||a.expires.toUTCString)){if(typeof a.expires=="number"){d=new Date;d.setTime(d.getTime()+a.expires*24*60*60*1E3)}else d=a.expires;d="; expires="+d.toUTCString()}var f=a.path?"; path="+a.path:"",c=a.domain?"; domain="+a.domain:"";a=a.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(e),d,f,c,a].join("")}else{e=null;if(document.cookie&&
document.cookie!=""){a=document.cookie.split(";");for(d=0;d<a.length;d++){f=jQuery.trim(a[d]);if(f.substring(0,b.length+1)==b+"="){e=decodeURIComponent(f.substring(b.length+1));break}}}return e}};
jQuery.fn.textPlaceholder=function(b){b=b||"#AAA";return this.each(function(){var e=this;if(!(e.placeholder&&"placeholder"in document.createElement(e.tagName))){var a=e.style.color,d=e.getAttribute("placeholder"),f=$(e);if(e.value===""||e.value==d){e.value=d;e.style.color=b;f.data("placeholder-visible",true)}f.focus(function(){this.style.color=a;if(f.data("placeholder-visible")){f.data("placeholder-visible",false);this.value=""}});f.blur(function(){if(this.value===""){f.data("placeholder-visible",
true);this.value=d;this.style.color=b}else{this.style.color=a;f.data("placeholder-visible",false)}});e.form&&$(e.form).submit(function(){if(f.data("placeholder-visible"))e.value=""})}})};
(function(b){b.ui=b.ui||{};if(!b.ui.version){b.extend(b.ui,{version:"1.8.2",plugin:{add:function(e,a,d){e=b.ui[e].prototype;for(var f in d){e.plugins[f]=e.plugins[f]||[];e.plugins[f].push([a,d[f]])}},call:function(e,a,d){if((a=e.plugins[a])&&e.element[0].parentNode)for(var f=0;f<a.length;f++)e.options[a[f][0]]&&a[f][1].apply(e.element,d)}},contains:function(e,a){return document.compareDocumentPosition?e.compareDocumentPosition(a)&16:e!==a&&e.contains(a)},hasScroll:function(e,a){if(b(e).css("overflow")==
"hidden")return false;var d=a&&a=="left"?"scrollLeft":"scrollTop",f=false;if(e[d]>0)return true;e[d]=1;f=e[d]>0;e[d]=0;return f},isOverAxis:function(e,a,d){return e>a&&e<a+d},isOver:function(e,a,d,f,c,g){return b.ui.isOverAxis(e,d,c)&&b.ui.isOverAxis(a,f,g)},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,
NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});b.fn.extend({_focus:b.fn.focus,focus:function(e,a){return typeof e==="number"?this.each(function(){var d=this;setTimeout(function(){b(d).focus();a&&a.call(d)},e)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect",
"none")},scrollParent:function(){var e;e=b.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(b.curCSS(this,"position",1))&&/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",
1))}).eq(0);return/fixed/.test(this.css("position"))||!e.length?b(document):e},zIndex:function(e){if(e!==undefined)return this.css("zIndex",e);if(this.length){e=b(this[0]);for(var a;e.length&&e[0]!==document;){a=e.css("position");if(a=="absolute"||a=="relative"||a=="fixed"){a=parseInt(e.css("zIndex"));if(!isNaN(a)&&a!=0)return a}e=e.parent()}}return 0}});b.extend(b.expr[":"],{data:function(e,a,d){return!!b.data(e,d[3])},focusable:function(e){var a=e.nodeName.toLowerCase(),d=b.attr(e,"tabindex");return(/input|select|textarea|button|object/.test(a)?
!e.disabled:"a"==a||"area"==a?e.href||!isNaN(d):!isNaN(d))&&!b(e)["area"==a?"parents":"closest"](":hidden").length},tabbable:function(e){var a=b.attr(e,"tabindex");return(isNaN(a)||a>=0)&&b(e).is(":focusable")}})}})(jQuery);
(function(b){var e=b.fn.remove;b.fn.remove=function(a,d){return this.each(function(){if(!d)if(!a||b.filter(a,[this]).length)b("*",this).add(this).each(function(){b(this).triggerHandler("remove")});return e.call(b(this),a,d)})};b.widget=function(a,d,f){var c=a.split(".")[0],g;a=a.split(".")[1];g=c+"-"+a;if(!f){f=d;d=b.Widget}b.expr[":"][g]=function(h){return!!b.data(h,a)};b[c]=b[c]||{};b[c][a]=function(h,i){arguments.length&&this._createWidget(h,i)};d=new d;d.options=b.extend({},d.options);b[c][a].prototype=
b.extend(true,d,{namespace:c,widgetName:a,widgetEventPrefix:b[c][a].prototype.widgetEventPrefix||a,widgetBaseClass:g},f);b.widget.bridge(a,b[c][a])};b.widget.bridge=function(a,d){b.fn[a]=function(f){var c=typeof f==="string",g=Array.prototype.slice.call(arguments,1),h=this;f=!c&&g.length?b.extend.apply(null,[true,f].concat(g)):f;if(c&&f.substring(0,1)==="_")return h;c?this.each(function(){var i=b.data(this,a),j=i&&b.isFunction(i[f])?i[f].apply(i,g):i;if(j!==i&&j!==undefined){h=j;return false}}):this.each(function(){var i=
b.data(this,a);if(i){f&&i.option(f);i._init()}else b.data(this,a,new d(f,this))});return h}};b.Widget=function(a,d){arguments.length&&this._createWidget(a,d)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,d){this.element=b(d).data(this.widgetName,this);this.options=b.extend(true,{},this.options,b.metadata&&b.metadata.get(d)[this.widgetName],a);var f=this;this.element.bind("remove."+this.widgetName,function(){f.destroy()});this._create();
this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,d){var f=a,c=this;if(arguments.length===0)return b.extend({},c.options);if(typeof a==="string"){if(d===undefined)return this.options[a];f={};f[a]=d}b.each(f,function(g,
h){c._setOption(g,h)});return c},_setOption:function(a,d){this.options[a]=d;if(a==="disabled")this.widget()[d?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",d);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,d,f){var c=this.options[a];d=b.Event(d);d.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();f=f||{};if(d.originalEvent){a=
b.event.props.length;for(var g;a;){g=b.event.props[--a];d[g]=d.originalEvent[g]}}this.element.trigger(d,f);return!(b.isFunction(c)&&c.call(this.element[0],d,f)===false||d.isDefaultPrevented())}}})(jQuery);
(function(b){b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(a){return e._mouseDown(a)}).bind("click."+this.widgetName,function(a){if(e._preventClickEvent){e._preventClickEvent=false;a.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(e){e.originalEvent=e.originalEvent||{};if(!e.originalEvent.mouseHandled){this._mouseStarted&&
this._mouseUp(e);this._mouseDownEvent=e;var a=this,d=e.which==1,f=typeof this.options.cancel=="string"?b(e.target).parents().add(e.target).filter(this.options.cancel).length:false;if(!d||f||!this._mouseCapture(e))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){a.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=this._mouseStart(e)!==false;if(!this._mouseStarted){e.preventDefault();
return true}}this._mouseMoveDelegate=function(c){return a._mouseMove(c)};this._mouseUpDelegate=function(c){return a._mouseUp(c)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);b.browser.safari||e.preventDefault();return e.originalEvent.mouseHandled=true}},_mouseMove:function(e){if(b.browser.msie&&!e.button)return this._mouseUp(e);if(this._mouseStarted){this._mouseDrag(e);return e.preventDefault()}if(this._mouseDistanceMet(e)&&
this._mouseDelayMet(e))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==false)?this._mouseDrag(e):this._mouseUp(e);return!this._mouseStarted},_mouseUp:function(e){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=e.target==this._mouseDownEvent.target;this._mouseStop(e)}return false},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-
e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(b){b.ui=b.ui||{};var e=/left|center|right/,a=/top|center|bottom/,d=b.fn.position,f=b.fn.offset;b.fn.position=function(c){if(!c||!c.of)return d.apply(this,arguments);c=b.extend({},c);var g=b(c.of),h=(c.collision||"flip").split(" "),i=c.offset?c.offset.split(" "):[0,0],j,o,n;if(c.of.nodeType===9){j=g.width();o=g.height();n={top:0,left:0}}else if(c.of.scrollTo&&c.of.document){j=g.width();o=g.height();n={top:g.scrollTop(),left:g.scrollLeft()}}else if(c.of.preventDefault){c.at="left top";j=o=
0;n={top:c.of.pageY,left:c.of.pageX}}else{j=g.outerWidth();o=g.outerHeight();n=g.offset()}b.each(["my","at"],function(){var k=(c[this]||"").split(" ");if(k.length===1)k=e.test(k[0])?k.concat(["center"]):a.test(k[0])?["center"].concat(k):["center","center"];k[0]=e.test(k[0])?k[0]:"center";k[1]=a.test(k[1])?k[1]:"center";c[this]=k});if(h.length===1)h[1]=h[0];i[0]=parseInt(i[0],10)||0;if(i.length===1)i[1]=i[0];i[1]=parseInt(i[1],10)||0;if(c.at[0]==="right")n.left+=j;else if(c.at[0]==="center")n.left+=
j/2;if(c.at[1]==="bottom")n.top+=o;else if(c.at[1]==="center")n.top+=o/2;n.left+=i[0];n.top+=i[1];return this.each(function(){var k=b(this),l=k.outerWidth(),m=k.outerHeight(),p=b.extend({},n);if(c.my[0]==="right")p.left-=l;else if(c.my[0]==="center")p.left-=l/2;if(c.my[1]==="bottom")p.top-=m;else if(c.my[1]==="center")p.top-=m/2;p.left=parseInt(p.left);p.top=parseInt(p.top);b.each(["left","top"],function(w,v){b.ui.position[h[w]]&&b.ui.position[h[w]][v](p,{targetWidth:j,targetHeight:o,elemWidth:l,
elemHeight:m,offset:i,my:c.my,at:c.at})});b.fn.bgiframe&&k.bgiframe();k.offset(b.extend(p,{using:c.using}))})};b.ui.position={fit:{left:function(c,g){var h=b(window);h=c.left+g.elemWidth-h.width()-h.scrollLeft();c.left=h>0?c.left-h:Math.max(0,c.left)},top:function(c,g){var h=b(window);h=c.top+g.elemHeight-h.height()-h.scrollTop();c.top=h>0?c.top-h:Math.max(0,c.top)}},flip:{left:function(c,g){if(g.at[0]!=="center"){var h=b(window);h=c.left+g.elemWidth-h.width()-h.scrollLeft();var i=g.my[0]==="left"?
-g.elemWidth:g.my[0]==="right"?g.elemWidth:0,j=-2*g.offset[0];c.left+=c.left<0?i+g.targetWidth+j:h>0?i-g.targetWidth+j:0}},top:function(c,g){if(g.at[1]!=="center"){var h=b(window);h=c.top+g.elemHeight-h.height()-h.scrollTop();var i=g.my[1]==="top"?-g.elemHeight:g.my[1]==="bottom"?g.elemHeight:0,j=g.at[1]==="top"?g.targetHeight:-g.targetHeight,o=-2*g.offset[1];c.top+=c.top<0?i+g.targetHeight+o:h>0?i+j+o:0}}}};if(!b.offset.setOffset){b.offset.setOffset=function(c,g){if(/static/.test(b.curCSS(c,"position")))c.style.position=
"relative";var h=b(c),i=h.offset(),j=parseInt(b.curCSS(c,"top",true),10)||0,o=parseInt(b.curCSS(c,"left",true),10)||0;i={top:g.top-i.top+j,left:g.left-i.left+o};"using"in g?g.using.call(c,i):h.css(i)};b.fn.offset=function(c){var g=this[0];if(!g||!g.ownerDocument)return null;if(c)return this.each(function(){b.offset.setOffset(this,c)});return f.call(this)}}})(jQuery);window.freebase=window.fb={};
(function(b,e){e.dispatch=function(a,d,f,c){if(typeof d!=="function")return false;a=b.event.fix(a||window.event);f||(f=[]);c||(c=this);return d.apply(c,[a].concat(f))}})(jQuery,window.freebase);
(function(b,e){function a(g,h){var i=g.indexOf("|"+h+"_");if(i!=-1){i=i+2+h.length;var j=g.indexOf("|",i);if(j!=-1)return decodeURIComponent(g.substr(i,j-i))}return null}var d=b.cookie("metaweb-user-info");if(d){var f=a(d,"g"),c=a(d,"u");(d=a(d,"p"))||(d="/user/"+this.name);e.user={guid:f,name:c,id:d}}if(e.user){f=b("#nav-username a:first");if(f.length){f[0].href+=e.user.id;f.text(e.user.name)}b("#signedin").show()}else b("#signedout").show()})(jQuery,window.freebase);
(function(b){b(function(){var e=b("#SearchBox .SearchBox-input,#global-search-input"),a=acre.freebase.site_host;e.suggest({service_url:a,soft:true,category:"object",parent:"#site-search-box",align:"right",status:null});var d=b("#site-search-label"),f=b("#site-search-box .fbs-pane");e.bind("fb-select",function(c,g){window.location=a+"/view"+g.id;return false}).bind("fb-pane-show",function(){d.html("<span>Select an item from the list</span>").removeClass("loading")}).bind("fb-textchange",function(){b.trim(e.val())===
""?d.html("<span>Start typing to get some suggestions</span>").removeClass("loading"):d.html("<span>Searching...</span>").addClass("loading")}).bind("fb-error",function(){d.html("<span>Sorry, something went wrong. Please try again later</span>").removeClass("loading")}).focus(function(){d.is(":visible")||b("#site-search-label").slideDown("fast")}).blur(function(){!f.is(":visible")&&d.is(":visible")&&b("#site-search-label").slideUp("fast")});b(".SearchBox-form").submit(function(){return b.trim(b("#global-search-input").val()).length==
0?false:true});b("input, textarea").textPlaceholder()})})(jQuery,window.freebase);
(function(b){function e(f,c,g){var h=this,i=f.add(this),j=f.find(g.tabs),o=c.jquery?c:f.children(c),n;j.length||(j=f.children());o.length||(o=f.parent().find(c));o.length||(o=b(c));b.extend(this,{click:function(k,l){var m=j.eq(k);if(typeof k=="string"&&k.replace("#","")){m=j.filter("[href*="+k.replace("#","")+"]");k=Math.max(j.index(m),0)}if(g.rotate){var p=j.length-1;if(k<0)return h.click(p,l);if(k>p)return h.click(0,l)}if(!m.length){if(n>=0)return h;k=g.initialIndex;m=j.eq(k)}if(k===n)return h;
l=l||b.Event();l.type="onBeforeClick";i.trigger(l,[k]);if(!l.isDefaultPrevented()){a[g.effect].call(h,k,function(){l.type="onClick";i.trigger(l,[k])});n=k;j.removeClass(g.current);m.addClass(g.current);return h}},getConf:function(){return g},getTabs:function(){return j},getPanes:function(){return o},getCurrentPane:function(){return o.eq(n)},getCurrentTab:function(){return j.eq(n)},getIndex:function(){return n},next:function(){return h.click(n+1)},prev:function(){return h.click(n-1)},destroy:function(){j.unbind(g.event).removeClass(g.current);
o.find("a[href^=#]").unbind("click.T");return h}});b.each("onBeforeClick,onClick".split(","),function(k,l){b.isFunction(g[l])&&b(h).bind(l,g[l]);h[l]=function(m){b(h).bind(l,m);return h}});if(g.history&&b.fn.history){b.tools.history.init(j);g.event="history"}j.each(function(k){b(this).bind(g.event,function(l){h.click(k,l);return l.preventDefault()})});o.find("a[href^=#]").bind("click.T",function(k){h.click(b(this).attr("href"),k)});if(location.hash)h.click(location.hash);else if(g.initialIndex===
0||g.initialIndex>0)h.click(g.initialIndex)}b.tools=b.tools||{version:"@VERSION"};b.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(f,c){a[f]=c}};var a={"default":function(f,c){this.getPanes().hide().eq(f).show();c.call()},fade:function(f,c){var g=this.getConf(),h=g.fadeOutSpeed,i=this.getPanes();h?i.fadeOut(h):i.hide();i.eq(f).fadeIn(g.fadeInSpeed,c)},slide:function(f,c){this.getPanes().slideUp(200);
this.getPanes().eq(f).slideDown(400,c)},ajax:function(f,c){this.getPanes().eq(0).load(this.getTabs().eq(f).attr("href"),c)}},d;b.tools.tabs.addEffect("horizontal",function(f,c){d||(d=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){b(this).hide()});this.getPanes().eq(f).animate({width:d},function(){b(this).show();c.call()})});b.fn.tabs=function(f,c){var g=this.data("tabs");if(g){g.destroy();this.removeData("tabs")}if(b.isFunction(c))c={onBeforeClick:c};c=b.extend({},
b.tools.tabs.conf,c);this.each(function(){g=new e(b(this),f,c);b(this).data("tabs",g)});return c.api?g:this}})(jQuery);
(function(b){function e(){b.fn.ajaxSubmit.debug&&window.console&&window.console.log&&window.console.log("[jquery.form] "+Array.prototype.join.call(arguments,""))}b.fn.ajaxSubmit=function(a){function d(){function n(){if(!z++){t.detachEvent?t.detachEvent("onload",n):t.removeEventListener("load",n,false);var u=true;try{if(A)throw"timeout";var s,r;r=t.contentWindow?t.contentWindow.document:t.contentDocument?t.contentDocument:t.document;var x=m.dataType=="xml"||r.XMLDocument||b.isXMLDoc(r);e("isXml="+
x);if(!x&&(r.body==null||r.body.innerHTML=="")){if(--E){z=0;setTimeout(n,100);return}e("Could not access iframe DOM after 50 tries.");return}q.responseText=r.body?r.body.innerHTML:null;q.responseXML=r.XMLDocument?r.XMLDocument:r;q.getResponseHeader=function(F){return{"content-type":m.dataType}[F]};if(m.dataType=="json"||m.dataType=="script"){var B=r.getElementsByTagName("textarea")[0];if(B)q.responseText=B.value;else{var C=r.getElementsByTagName("pre")[0];if(C)q.responseText=C.innerHTML}}else if(m.dataType==
"xml"&&!q.responseXML&&q.responseText!=null)q.responseXML=k(q.responseText);s=b.httpData(q,m.dataType)}catch(G){u=false;b.handleError(m,q,"error",G)}if(u){m.success(s,"success");y&&b.event.trigger("ajaxSuccess",[q,m])}y&&b.event.trigger("ajaxComplete",[q,m]);y&&!--b.active&&b.event.trigger("ajaxStop");if(m.complete)m.complete(q,u?"success":"error");setTimeout(function(){v.remove();q.responseXML=null},100)}}function k(u,s){if(window.ActiveXObject){s=new ActiveXObject("Microsoft.XMLDOM");s.async="false";
s.loadXML(u)}else s=(new DOMParser).parseFromString(u,"text/xml");return s&&s.documentElement&&s.documentElement.tagName!="parsererror"?s:null}var l=i[0];if(b(":input[name=submit]",l).length)alert('Error: Form elements must not be named "submit".');else{var m=b.extend({},b.ajaxSettings,a),p=b.extend(true,{},b.extend(true,{},b.ajaxSettings),m),w="jqFormIO"+(new Date).getTime(),v=b('<iframe id="'+w+'" name="'+w+'" src="'+m.iframeSrc+'" />'),t=v[0];v.css({position:"absolute",top:"-1000px",left:"-1000px"});
var q={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;v.attr("src",m.iframeSrc)}},y=m.global;y&&!b.active++&&b.event.trigger("ajaxStart");y&&b.event.trigger("ajaxSend",[q,m]);if(p.beforeSend&&p.beforeSend(q,p)===false)p.global&&b.active--;else if(!q.aborted){var z=0,A=0;if(p=l.clk){var D=p.name;if(D&&!p.disabled){a.extraData=a.extraData||{};a.extraData[D]=
p.value;if(p.type=="image"){a.extraData[name+".x"]=l.clk_x;a.extraData[name+".y"]=l.clk_y}}}setTimeout(function(){var u=i.attr("target"),s=i.attr("action");l.setAttribute("target",w);l.getAttribute("method")!="POST"&&l.setAttribute("method","POST");l.getAttribute("action")!=m.url&&l.setAttribute("action",m.url);a.skipEncodingOverride||i.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});m.timeout&&setTimeout(function(){A=true;n()},m.timeout);var r=[];try{if(a.extraData)for(var x in a.extraData)r.push(b('<input type="hidden" name="'+
x+'" value="'+a.extraData[x]+'" />').appendTo(l)[0]);v.appendTo("body");t.attachEvent?t.attachEvent("onload",n):t.addEventListener("load",n,false);l.submit()}finally{l.setAttribute("action",s);u?l.setAttribute("target",u):i.removeAttr("target");b(r).remove()}},10);var E=50}}}if(!this.length){e("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof a=="function")a={success:a};var f=b.trim(this.attr("action"));if(f)f=(f.match(/^([^#]+)/)||[])[1];f=f||window.location.href||
"";a=b.extend({url:f,type:this.attr("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a||{});f={};this.trigger("form-pre-serialize",[this,a,f]);if(f.veto){e("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(a.beforeSerialize&&a.beforeSerialize(this,a)===false){e("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var c=this.formToArray(a.semantic);if(a.data){a.extraData=a.data;for(var g in a.data)if(a.data[g]instanceof
Array)for(var h in a.data[g])c.push({name:g,value:a.data[g][h]});else c.push({name:g,value:a.data[g]})}if(a.beforeSubmit&&a.beforeSubmit(c,this,a)===false){e("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[c,this,a,f]);if(f.veto){e("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}g=b.param(c);if(a.type.toUpperCase()=="GET"){a.url+=(a.url.indexOf("?")>=0?"&":"?")+g;a.data=null}else a.data=g;var i=this,j=[];a.resetForm&&
j.push(function(){i.resetForm()});a.clearForm&&j.push(function(){i.clearForm()});if(!a.dataType&&a.target){var o=a.success||function(){};j.push(function(n){b(a.target).html(n).each(o,arguments)})}else a.success&&j.push(a.success);a.success=function(n,k){for(var l=0,m=j.length;l<m;l++)j[l].apply(a,[n,k,i])};g=b("input:file",this).fieldValue();h=false;for(f=0;f<g.length;f++)if(g[f])h=true;if(g.length&&a.iframe!==false||a.iframe||h||0)a.closeKeepAlive?b.get(a.closeKeepAlive,d):d();else b.ajax(a);this.trigger("form-submit-notify",
[this,a]);return this};b.fn.ajaxForm=function(a){return this.ajaxFormUnbind().bind("submit.form-plugin",function(){b(this).ajaxSubmit(a);return false}).bind("click.form-plugin",function(d){var f=d.target,c=b(f);if(!c.is(":submit,input:image")){f=c.closest(":submit");if(f.length==0)return;f=f[0]}var g=this;g.clk=f;if(f.type=="image")if(d.offsetX!=undefined){g.clk_x=d.offsetX;g.clk_y=d.offsetY}else if(typeof b.fn.offset=="function"){c=c.offset();g.clk_x=d.pageX-c.left;g.clk_y=d.pageY-c.top}else{g.clk_x=
d.pageX-f.offsetLeft;g.clk_y=d.pageY-f.offsetTop}setTimeout(function(){g.clk=g.clk_x=g.clk_y=null},100)})};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(a){var d=[];if(this.length==0)return d;var f=this[0],c=a?f.getElementsByTagName("*"):f.elements;if(!c)return d;for(var g=0,h=c.length;g<h;g++){var i=c[g],j=i.name;if(j)if(a&&f.clk&&i.type=="image"){if(!i.disabled&&f.clk==i){d.push({name:j,value:b(i).val()});d.push({name:j+".x",
value:f.clk_x},{name:j+".y",value:f.clk_y})}}else if((i=b.fieldValue(i,true))&&i.constructor==Array)for(var o=0,n=i.length;o<n;o++)d.push({name:j,value:i[o]});else i!==null&&typeof i!="undefined"&&d.push({name:j,value:i})}if(!a&&f.clk){a=b(f.clk);c=a[0];if((j=c.name)&&!c.disabled&&c.type=="image"){d.push({name:j,value:a.val()});d.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y})}}return d};b.fn.formSerialize=function(a){return b.param(this.formToArray(a))};b.fn.fieldSerialize=function(a){var d=
[];this.each(function(){var f=this.name;if(f){var c=b.fieldValue(this,a);if(c&&c.constructor==Array)for(var g=0,h=c.length;g<h;g++)d.push({name:f,value:c[g]});else c!==null&&typeof c!="undefined"&&d.push({name:this.name,value:c})}});return b.param(d)};b.fn.fieldValue=function(a){for(var d=[],f=0,c=this.length;f<c;f++){var g=b.fieldValue(this[f],a);g===null||typeof g=="undefined"||g.constructor==Array&&!g.length||(g.constructor==Array?b.merge(d,g):d.push(g))}return d};b.fieldValue=function(a,d){var f=
a.name,c=a.type,g=a.tagName.toLowerCase();if(typeof d=="undefined")d=true;if(d&&(!f||a.disabled||c=="reset"||c=="button"||(c=="checkbox"||c=="radio")&&!a.checked||(c=="submit"||c=="image")&&a.form&&a.form.clk!=a||g=="select"&&a.selectedIndex==-1))return null;if(g=="select"){var h=a.selectedIndex;if(h<0)return null;f=[];g=a.options;var i=(c=c=="select-one")?h+1:g.length;for(h=c?h:0;h<i;h++){var j=g[h];if(j.selected){var o=j.value;o||(o=j.attributes&&j.attributes.value&&!j.attributes.value.specified?
j.text:j.value);if(c)return o;f.push(o)}}return f}return a.value};b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea",this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var a=this.type,d=this.tagName.toLowerCase();if(a=="text"||a=="password"||d=="textarea")this.value="";else if(a=="checkbox"||a=="radio")this.checked=false;else if(d=="select")this.selectedIndex=-1})};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset==
"function"||typeof this.reset=="object"&&!this.reset.nodeType)this.reset()})};b.fn.enable=function(a){if(a==undefined)a=true;return this.each(function(){this.disabled=!a})};b.fn.selected=function(a){if(a==undefined)a=true;return this.each(function(){var d=this.type;if(d=="checkbox"||d=="radio")this.checked=a;else if(this.tagName.toLowerCase()=="option"){d=b(this).parent("select");a&&d[0]&&d[0].type=="select-one"&&d.find("option").selected(false);this.selected=a}})}})(jQuery);
$(function(){$("#apps-search > .section-tabset").tabs("#apps-search > .search-box");$("#user-search-input").closest("form").submit(function(){return false});$("#user-search-input").suggest({type:"/type/user"}).bind("fb-select",function(b,e){location.href=bp+e.id}).focus(function(){this.select()});$("#create-link").click(function(){$.post(bp+"/post/submit/create_app",null,function(b){window.location=bp+"/admin"+b.result},"json");return false});$("#edit-props").ajaxForm({dataType:"json",success:function(b){if(b.code==
"/api/status/ok")window.location.href=bp+b.result.appid;else alert("Error updating listing")}});$("#icon_form").ajaxForm({dataType:"json",beforeSubmit:function(b,e,a){a.url+="?appid="+app.id+"&name="+$("#icon_file").val()},success:function(b){if(b.code==="/api/status/ok"){app.icon=b.result;$("#icon_name").text(b.result.name);$("#icon_delete").text("delete");$("#icon_file").val("")}else if(b.messages&&b.messages[0]&&b.messages[0].message){console.log(b);alert(b.messages[0].message)}else alert("Error uploading")}});
$("#icon_file").change(function(){$("#icon_upload_error").text("");$("#icon_form").submit()});$("#icon_delete").click(function(){$.post(bp+"/post/submit/delete_icon",{appid:app.id,iconid:app.icon.id},function(){$("#icon_name").text("No icon");$("#icon_delete").text("")},"json");return false})});

var YWebClipperConfiguration={logEnabled:false,clipperBaseURL:"http://note.youdao.com/yws",clipperUploadApp:"/mapi/wcp?method=putfile&keyfrom=wcp",logurl:"/mapi/ilogrpt?method=putwcplog",clipperClipType:"OnlyHTML",clipperDomPrefix:"_YNote",loadingHTML:'<div id="_YNoteLoaddingTips" name="_YNoteLoaddingTips" style="position:absolute;z-index:999999;top:50%;left:50%;width:180px;margin:-12px 0 0 -91px;font-weight:bold;text-align:center;line-height:22px;border:1px solid #fff999;background-color:rgba(255,249,153,.9)!important;background:#fff999;border-radius:5px;-khtml-border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;">正在加载中，请稍候…</div>',clipperFormFields:[["title","text","tl"],["path","text","p"],["content","area","bs"],["source","text","src"],["type","text","type"],["userid","text","userid"],["len","text","len"],["charset","text","cs"],["sign","text","e"]],clipperStyle:"position:fixed;right:10px;top:10px;padding-bottom:10px;font:12px/100% arial,sans-serif;color:#333; width: 420px;_right:expression(eval(document.documentElement.scrollLeft));_top:expression(eval(document.documentElement.scrollTop+10));_position:absolute;",styleMerge:{margin:["margin-top","margin-right","margin-bottom","margin-left"],padding:["padding-top","padding-right","padding-bottom","padding-left"],"list-style":["list-style-type","list-style-position","list-style-image"],border:["border-bottom"]},formatTag:{br:null,p:null,img:null},styleQuote:{"font-family":true},clipperFilterStyles:{keep:{"*":["font-size","font-style","font-weight","font-family","color"],li:["list-style"],ul:["list-style"]},remove:{},"default":{}},clipperFilterAttributes:{keep:{},remove:{style:null,"class":null,classname:null,id:null,onclick:null,onsubmit:null,onmouseover:null,onmouseout:null,onmousedown:null,onpaste:null,contenteditable:null,designmode:null,onload:null,"for":null,method:null,tabindex:null}},filterElements:{keep:{},remove:{style:null,script:null,input:null,select:null,option:null,textarea:null,button:null,object:null,applet:null,embed:null}},listNodes:{ul:null,ol:null},selfCloseTag:{base:null,basefont:null,frame:null,link:null,meta:null,area:null,br:null,col:null,hr:null,img:null,input:null,param:null},translateTagName:{body:"div",form:"div",strong:"span",h1:"span"},names:{FrameName:"YNoteForm"+Math.floor(Math.random(10000)),FormName:"YNoteForm"+Math.floor(Math.random(10000))},doc:{mainContent:null,mainContentTag:null,container:window.document,contentType:"1"}};(function(){var c=function(d){this.contentDocument=d};c.common={trim:function(d){return d.replace(/^\s*/,"").replace(/\s*$/,"")},isFunction:function(d){return Object.prototype.toString.call(d)==="[object Function]"},findPos:function(d){var e={x:0,y:0};if(!!document.documentElement.getBoundingClientRect()){e.x=d.getBoundingClientRect().left+this.scroll().left;e.y=d.getBoundingClientRect().top+this.scroll().top}else{while(d){e.x+=d.offsetLeft;e.y+=d.offsetTop;d=d.offsetParent}}return e},indexOf:function b(d,f){if(d.indexOf){return d.indexOf(f)}else{var e=-1;this.each(d,function(g){if(this[g]===f){e=g;return false}});return e}},each:function(h,d,e){if(h===undefined||h===null){return}if(h.length===undefined||this.isFunction(h)){for(var g in h){if(h.hasOwnProperty(g)){if(d.call(e||h[g],g,h[g])===false){break}}}}else{for(var f=0;f<h.length;f++){if(d.call(e||h,f,h[f])===false){break}}}return h},css:function(){var d=function(g,j){var k="";if(j=="float"){document.defaultView?j="float":j="styleFloat"}if(g.style[j]){k=g.style[j]}else{if(g.currentStyle){k=g.currentStyle[j]}else{if(document.defaultView&&document.defaultView.getComputedStyle){j=j.replace(/([A-Z])/g,"-$1").toLowerCase();var i=document.defaultView.getComputedStyle(g,"");k=i&&i.getPropertyValue(j)}else{k=null}}}if((k=="auto"||k.indexOf("%")!==-1)&&("width"===j.toLowerCase()||"height"===j.toLowerCase())&&g.style.display!="none"&&k.indexOf("%")!==-1){k=g["offset"+j.charAt(0).toUpperCase()+j.substring(1).toLowerCase()]+"px"}if(j=="opacity"){try{k=g.filters["DXImageTransform.Microsoft.Alpha"].opacity;k=k/100}catch(f){try{k=g.filters("alpha").opacity}catch(h){}}}return k};return function(e,f){if(typeof f==="string"){return d(e,f)}else{this.each(f,function(g,h){e.style[g]=h})}}}(),scroll:function(){return{left:document.documentElement.scrollLeft+document.body.scrollLeft,top:document.documentElement.scrollTop+document.body.scrollTop}}};c.prototype={IGNORE_TAGS:["HTML","HEAD","META","TITLE","SCRIPT","STYLE","LINK","IMG","FORM","INPUT","BODY","BUTTON","TEXTAREA","SELECT","OPTION","LABEL","IFRAME","UL","OL","LI","DD","DL","DT","A","OBJECT","PARAM","EMBED","NOSCRIPT","EM","B","STRONG","I","INS","BR","HR","PRE","H1","H2","H3","H4","H5","CITE"],getMainArticle:function(){var g=null,e="";if(!!location){e=location.hostname}if(/\b(google|facebook|twitter)\b/i.test(e)){return null}var d=this._getAllArticle();if(!(d&&d.length)){return null}d.sort(function(i,j){return j.weight-i.weight});var h=null;for(var f=0;f<2;f++){g=d[0];d.splice(0,1);if(g&&g.weight<500){g=null}if(g){break}}if(!g){return null}return g},_sort:function(e){for(var h=0,d=null,f=0;f<e.length;f++){var g=e[f];var j=g.weight;if(j>=h){h=j;d=g}}return d},_getAllArticle:function(){var d=this.contentDocument.getElementsByTagName("*"),g=[];for(var f=0,h=d.length;f<h;f++){var e=d[f];if(this._checkTagName(e)&&this._checkSize(e)&&this._checkVisibility(e)){g[g.length]=new a(e)}}return g},_checkTagName:function(d){return c.common.indexOf(this.IGNORE_TAGS,d.tagName)==-1},_checkVisibility:function(d){return !(c.common.css(d,"visibility")=="hidden"||c.common.css(d,"display")=="none"||parseInt(c.common.css(d,"height"))<=0||parseInt(c.common.css(d,"width"))<=0)},_checkSize:function(d){return d.offsetWidth>300&&d.offsetHeight>150}};var a=function(d){this.elem=d;this.common=c.common;this.offset=this.common.findPos(d);this._texts=this._getAllTexts(d,6);this.weight=this.calcWeight()};a.prototype={IGNORE_TAGS:["A","DD","DT","OL","OPTION","DL","DD","SCRIPT","STYLE","UL","LI","IFRAME"],TITLE_TAGS:["H1","H2","H3","H4","H5","H6"],MINOR_REGEXP:/comment|combx|disqus|foot|header|menu|rss|shoutbox|sidebar|sponsor/i,MAJOR_REGEXP:/article|entry|post|body|column|main|content/i,TINY_REGEXP:/comment/i,BLANK_REGEXP:/\S/i,_getAllTexts:function(e,f){var h=[];if(f>0){var i=e.firstChild;while(i){if(i.nodeType==3&&this._checkLength(i)){var g=i.parentNode||{},d=g.parentNode||{};if(!(this._checkMinorContent(g)||this._checkMinorContent(d))&&c.common.trim(i.nodeValue)){h.push(i)}}else{if(i.nodeType==1&&this._checkTagName(i)){h=h.concat(this._getAllTexts(i,f-1))}}i=i.nextSibling}}return h},calcStructWeight:function(){var f=0;for(var h=0,i=this._texts.length;h<i;h++){var g=this._texts[h],e=c.common.trim(g.nodeValue).length,j=1;if(e<20){continue}for(var d=g.parentNode;d&&d!=this.elem;d=d.parentNode){j-=0.1}f+=Math.pow((j*e),1.25)}return f},calcContentWeight:function(){var d=1;for(var e=this.elem;e;e=e.parentNode){if(e.id){if(this.MAJOR_REGEXP.test(e.id)){d+=0.4}if(this.MINOR_REGEXP.test(e.id)){d-=0.8}}if(e.className){if(this.MAJOR_REGEXP.test(e.className)){d+=0.4}if(this.MINOR_REGEXP.test(e.className)){d-=0.8}}}return d},calcWeight:function(){return this.calcStructWeight()*this.calcContentWeight()},_checkTagName:function(d){return c.common.indexOf(this.IGNORE_TAGS,d.tagName)==-1},_checkTitle:function(){var e=this.elem.getElementsByTagName("*");var d=[];for(var l=0;e[l];l++){if(c.common.indexOf(this.TITLE_TAGS,e[l].tagName)>-1){d.push(e[l])}}if(d.length>2){var h=this.elem.offsetHeight;for(var g=0,k=c.common.findPos(this.elem),f=h*0.05,m=0;d[m];m++){var n=c.common.findPos(d[m]);n.y-k.y>f&&(n.y+d[m].offsetHeight)-(k.y+h)&&g++}if(h/g<300){return true}}return false},_checkLength:function(d){return Boolean(this.BLANK_REGEXP.test(d.nodeValue))},_checkMinorContent:function(d){return Boolean(this.TINY_REGEXP.test(d.id+" "+d.className))},_checkVisibility:function(d){return !(c.common.css(d,"visibility")=="hidden"||c.common.css(d,"display")=="none"||parseInt(c.common.css(d,"height"))<=0||parseInt(c.common.css(d,"width"))<=0)}};window.Page=c})();(function(){if(typeof Function.prototype.inherit!="function"){Function.prototype.inherit=function(h){if(typeof h=="function"){this.prototype=new h();this.prototype.parent=h();this.prototype.constructor=this}}}var a=function(h){return h};var e=null;var b=window.document;if(typeof YNote!="undefined"){e=YNote}YNote={};YNote.Common={browser:(function(){return{isIE:(navigator.appVersion.indexOf("MSIE",0)!=-1),isSafari:(navigator.appVersion.indexOf("WebKit",0)!=-1),isFirefox:(navigator.userAgent.indexOf("Firefox",0)!=-1),isIpad:(navigator.userAgent.indexOf("WebKit")>0&&navigator.userAgent.indexOf("iPad")>0),isIphone:(navigator.userAgent.indexOf("WebKit")>0&&navigator.userAgent.indexOf("iPhone")>0),isChrome:(navigator.userAgent.indexOf("WebKit")>0&&navigator.userAgent.indexOf("Chrome")>0)}})(),trim:function(h){if(typeof h!="string"){return h}else{return h.replace(/^\s+/,"").replace(/\s+$/,"")}},getCssText:function(h){},check163Auth:function(h){},configuration:function(){return{load:function(){},reload:function(){},addConfigurationChangeListener:function(h){},removeConfigurationChangeListener:function(h){}}},extend:function(j,h,k){if(typeof h!="object"){return false}for(var i in h){if(typeof j[i]!="undefined"){if(!k){j[i]=h[i]}else{j[i]=[j[i],h[i]]}}else{j[i]=h[i]}}},el:function(h){return b.getElementById(h)},mkel:function(i,k){try{var j=b.createElement(i);if(k){k.appendChild(j)}return j}catch(h){return false}},addEvent:function(h,i,j){if(!h.nodeType||h.nodeType!=1){return false}if(YNote.Common.browser.isIE){h.attachEvent("on"+i,j)}else{h.addEventListener(i,j,false)}},deleteEvent:function(h,i,j){if(!h.nodeType||h.nodeType!=1){return false}if(YNote.Common.browser.isIE){h.detachEvent("on"+i,j)}else{h.removeEventListener(i,j,false)}},wrapperEvent:function(h){var i={target:(YNote.Common.browser.isIE?h.srcElement:h.target),offsetX:(YNote.Common.browser.isIE?h.offsetX:h.layerX),offsetY:(YNote.Common.browser.isIE?h.offsetY:h.layerY),x:(YNote.Common.browser.isIE?h.x:h.pageX),y:(YNote.Common.browser.isIE?h.y:h.pageY)};return i},enableDrag:function(h){var i=window;if(typeof h=="string"){h=YNote.Common.el(h)}if(h.nodeType&&h.nodeType==1&&h.tagName.toLowercase()=="div"){h.style.position="absolute";YNote.Common.addEvent(h,"mousedown",function(j){if(typeof i.YNoteDragObject=="undefined"||i.YNoteDragObject==null){var k=YNote.Common.wrapperEvent(j);i.YNoteDragObject={element:k.target,startX:k.offsetX,startY:k.offsetY}}else{return false}});if(typeof i.YNoteDragObject=="undefined"){YNote.Common.addEvent(i.document,"mouseup",function(j){if(i.YNoteDragObject!=null){i.YNoteDragObject=null}});YNote.Common.addEvent(i.document,"mousemove",function(j){if(typeof i.YNoteDragObject=="undefined"||i.YNoteDragObject==null){return}var k=YNote.Common.wrapperEvent(j);i.YNoteDragObject.element.style.left=(k.x-i.YNoteDragObject.startX)+"px";i.YNoteDragObject.element.style.top=(k.y-i.YNoteDragObject.startY)+"px"})}}},serverlog:function(j){var i=new Image();var h=YWebClipperConfiguration;var k=h.clipperBaseURL+h.logurl;i.src=k+"&s="+j},log:function(h){if(!YWebClipperConfiguration.logEnabled){return false}if(typeof console=="undefined"){console=(function(){var i=b.createElement("div");i.style.cssText="width:100%;height:500px;border:1pt solid black;position:absolute;left:0px;top:800px";i.innerHTML='<textarea style="width:100%;height:450px" id="console_log"></textarea>';b.body.appendChild(i);return{log:function(j){b.getElementById("console_log").value+=j+"\n"}}})()}if(typeof console.log=="undefined"){return}console.log(h)},Dom:{appendHTMLToIframe:function(k,j){if(k.tagName&&k.tagName.toLowerCase()=="iframe"){var h=k.contentWindow.document;try{h.open();h.write(j);h.close()}catch(i){YNode.Common.log("append HTML to [iframe:"+k.name+"] ERROR!")}}}},getCharSet:function(){if(YNote.Common.browser.isIE){return document.charset.toLowerCase()}else{return document.characterSet.toLowerCase()}},HTMLEncode:function(o){var n="";var m=o.length;var p=navigator.userAgent.toLowerCase();var l=/msie/.test(p)?parseFloat(p.match(/msie ([\d.]+)/)[1]):false;if(l>=7){for(var k=0;k<m;k++){n+=(o.charCodeAt(k)+" ")}}else{for(var k=0;k<o.length;k++){var j=o.charCodeAt(k);var h=o[k];if(j>127){n+="&#"+j+";"}else{if(h==">"){n+="&gt;"}else{if(h=="<"){n+="&lt;"}else{if(h=="&"){n+="&amp;"}else{n+=o.charAt(k)}}}}}}return n},unicodeEncode:function(l){var k="";if(typeof l=="string"){for(var j=0;j<l.length;j++){var h=l.charCodeAt(j);if(h>127){k+="&#"+h+";"}else{k+=l.charAt(j)}}}return k}};YNote.EventInterface=function(){};YNote.Common.extend(YNote.EventInterface.prototype,{addEventListener:function(h,i){},removeEventListener:function(h,i){},executeEvent:function(h){},fireEvent:function(h){},events:{}});YNote.StyleUtil=function(){};YNote.Common.extend(YNote.StyleUtil.prototype,{styleForNode:function(n,p){this.cssNameMap={};if(n&&n.nodeType&&n.nodeType==1){var r=null;if(YNote.Common.browser.isIE){r=n.currentStyle}else{r=window.getComputedStyle(n,null)}var l=YWebClipperConfiguration.clipperFilterStyles.keep;var o=null;if(typeof l[n.tagName.toLowerCase()]=="undefined"){o=l["*"]}else{o=l[n.tagName.toLowerCase()]}var q="";var h={};var m=YWebClipperConfiguration.styleMerge;for(var k=0;k<o.length;k++){if(YNote.Common.browser.isIE){var j=o[k];if(m[j]){h[j]=this.getCompoundCssString(j,r)}else{j=this.cssName2ScriptName(o[k]);if(!(/#000000|none|auto|visible|arial/i.test(""+r[j]))){h[j]=(""+r[j]).replace(/"/g,"'")}}}else{var j=o[k];if(m[j]){h[j]=this.getCompoundCssString(j,r)}else{var s=r.getPropertyCSSValue(j);if(s!=null){if(!(/#000000|none|auto|visible|arial/i.test(s.cssText))){h[j]=s.cssText.replace(/"/g,"'")}}}}}this.cssArray=h;return this.getStyleString(h)}else{return""}},getStyleString:function(i){var k="";var h="";for(var j in i){if(i[j].length!=0){if(YNote.Common.browser.isIE){h=(typeof this.cssNameMap[j]!="undefined"&&this.cssNameMap[j].length>0)?this.cssNameMap[j]:j}else{h=j}k+=h+":"+i[j]+";"}}return k},getCompoundCssString:function(h,n){var k=YWebClipperConfiguration.styleMerge;var m="";for(var j=0;j<k[h].length;j++){if(YNote.Common.browser.isIE){var l=this.cssName2ScriptName(k[h][j]);m+=n[l]+" "}else{m+=n.getPropertyCSSValue(k[h][j]).cssText+" "}}m=m.substring(0,m.length-1);if(/(0px ?){4}|(auto ?){4}/i.test(m)){return""}else{return m}},cssName2ScriptName:function(h){if(typeof h=="string"&&h.indexOf("-")>0){var k=h.split("-");var l=k[0];for(var j=1;j<k.length;j++){l+=k[j].substring(0,1).toUpperCase()+k[j].substring(1)}this.cssNameMap[l]=h;return l}else{if(typeof h=="string"){if(h=="float"){return"styleFloat"}else{return h}}else{return""}}},mergeDefaultCssValue:function(){}});YNote.Clipper=function(){this.content=null;this.title=null;try{this.source=window.location.href}catch(h){this.source=""}this.type=null;this.selector=new YNote.Selection();this.init()};YNote.Common.extend(YNote.Clipper,{CLASS_INIT:0,CLIPPING:1,CLIPPED:2,UPLOADING_FILE:3,UPLOADED_FILE:4,UPLOADING_INFO:5,UPLOADING_INFO:6,START_LOGIN:7,DONE:8,ERROR_CLIP:10001,ERROR_UPLOAD_FILE:10002,ERROR_UPLOAD_INFO:10003,ERROR_UPLOAD_LOGIN:10004,ERROR_NO_BODY:10005,CEIL_OF_REQUEST:{COUNT:10}});YNote.Common.extend(YNote.Clipper.prototype,{close:function(){this.wrapper.style.display="none";this.deleteFrame();this.state=YNote.Clipper.DONE},clipContent:function(){this.state=YNote.Clipper.CLIPPING;var l=new Date().getTime();this.loadingView.style.display="block";try{var h=YWebClipperConfiguration.doc.container;if(this.hasSelection()){YNote.Common.log("has selection");YWebClipperConfiguration.doc.contentType="3";this.range=this.selector.getSelectionRange();this.content=this.getSelectedContent();this.state=YNote.Clipper.CLIPPED;return this.content}else{if(h.body){YNote.Common.log("no selection!");this.content=this.getNodeText(h.body);this.state=YNote.Clipper.CLIPPED;return this.content}else{YNote.Common.log("No Body!");document.getElementById("_YNoteLoaddingTips").innerHTML="抱歉，由于页面设置，无法获取所选内容";this.state=YNote.Clipper.ERROR_NO_BODY;YNote.Common.serverlog(2);return""}}this.state=YNote.Clipper.CLIPPED;var k=new Date().getTime();YNote.Common.log("Got Content, time: "+(k-l))}catch(i){try{document.getElementById("_YNoteLoaddingTips").innerHTML="抱歉，由于页面设置，整页抓取失败，请选择部分内容后重试";YNote.Common.serverlog(3)}catch(j){YNote.Common.serverlog(4);alert("抱歉，由于页面设置，页面抓取失败!")}}},hasSelection:function(){this.getSelection();if(typeof this.selection!="undefined"&&this.selection!=null&&(typeof this.selection.getRangeAt=="function"||typeof this.selection.createRange=="object"||typeof this.selection.createRange=="function")){if(typeof this.selection.rangeCount!="undefined"&&this.selection.rangeCount<1){return false}else{if(typeof this.selection.createRange=="function"||typeof this.selection.createRange=="object"){try{if(this.selection.type.toLowerCase()!="text"||this.selection.createRange().htmlText==""){return false}}catch(h){return false}}else{if(typeof this.selection.getRangeAt=="function"){try{var i=this.selection.getRangeAt(0);if((i.startContainer==i.endContainer&&i.startOffset==i.endOffset)){return false}}catch(h){return true}}}}return true}return false},getSelection:function(){this.selection=this.selector.getSelection()},submit:function(){this.state=YNote.Clipper.UPLOADING_FILE;this.loadingView.style.display="block";this.fillForm();this.form.submit()},getClipID:function(){return"/wcp"+(new Date().getTime())+Math.floor(Math.random()*1000)},getHiddenForm:function(){var h=YNote.Common.mkel("form");h.innerHTML="";return h},rangeIntersectsNode:function(i){if(!YNote.Common.browser.isIE){if(this.range){var j=i.ownerDocument.createRange();try{j.selectNode(i)}catch(h){j.selectNodeContents(i)}return this.range.compareBoundaryPoints(Range.START_TO_END,j)==1&&this.range.compareBoundaryPoints(Range.END_TO_START,j)==-1}return false}else{if(this.range){if(i.nodeType==1){var k=i.ownerDocument.body.createTextRange();k.moveToElementText(i);return k.compareEndPoints("StartToEnd",this.range)==-1&&k.compareEndPoints("EndToStart",this.range)==1}else{return true}}return false}},changeNodeName:function(h){var i=YWebClipperConfiguration.translateTagName;if(typeof i[h.tagName.toLowerCase()]!="undefined"){return i[h.tagName.toLowerCase()]}return h.tagName.toLowerCase()},isListNode:function(i){var h=YWebClipperConfiguration.listNodes;return(i&&i.nodeType==1&&typeof h[i.nodeName.toLowerCase()]!="undefined")},withAttribute:function(h){var i=YWebClipperConfiguration.clipperFilterAttributes.remove;return(typeof h=="string"&&typeof i[h.toLowerCase()]=="undefined")},getNodeAttributesString:function(l){var m="";var j=l.attributes;if(j!=null){for(var k=0;k<j.length;k++){var h=j[k].nodeName.toLowerCase();var n=j[k].nodeValue;if(h=="href"||h=="src"){if(n.toLowerCase().indexOf("javascript:")==0||n.indexOf("#")==0){n=""}else{n=this.replaceURL(n)}}else{if(h=="target"&&n=="_blank"){continue}}if(this.withAttribute(h)&&typeof n=="string"&&n.length>0){m+=j[k].nodeName+'="'+n.toString()+'" '}}}return m.replace(/\s+$/,"")},isCloseTag:function(h){return(h&&typeof YWebClipperConfiguration.selfCloseTag[h.nodeName.toLowerCase()]!="undefined")},isNodeVisible:function(k){if(k.nodeType){var i="";if(YNote.Common.browser.isIE){if(k.currentStyle!=null&&k.currentStyle.display=="none"){return false}}else{try{if(window.getComputedStyle(k,null).getPropertyCSSValue("display").cssText=="none"){return false}}catch(j){return false}}var h=YWebClipperConfiguration;if(k.nodeType==3){if(k.nodeValue||k.nodeValue.length==0){return false}}if(k.nodeType==1&&typeof h.formatTag[k.tagName.toLowerCase()]=="undefined"){if(YNote.Common.trim(k.innerHTML).length==0){return false}}return true}else{return false}},keepNode:function(h){if(h){if(h.nodeType==3){return true}else{if(h.nodeType==1){if(h.nodeName.indexOf("#")==0||!this.isNodeVisible(h)){return false}var i=YWebClipperConfiguration.filterElements.remove;return(typeof i[h.nodeName.toLowerCase()]=="undefined")}}}return false},replaceURL:function(l){if(!window.location){return l}var j=null;l=YNote.Common.trim(l);var i=window.location.host;var k=window.location.protocol;var h=window.location.href.split("?")[0].split("#")[0];h=h.substr(0,h.lastIndexOf("/"))+"/";rbase=k+"//"+i;if((j=l.match(/^(https?):/i))!=null){return l}else{if(l.indexOf("/")==0){return rbase+l}else{return h+l}}},getNodeText:function(q,t){var v="";var u=q;var n=YWebClipperConfiguration;while(u!=document.body){if(u==this.wrapper){return v}if(u==null){return v}u=u.parentNode}if(this.range&&!this.rangeIntersectsNode(q)){return v}if(!this.keepNode(q)){return v}if(q.nodeType==3){if(this.range){if(this.range.startContainer==q&&this.range.startContainer==this.range.endContainer){v+=q.nodeValue.substring(this.range.startOffset,this.range.endOffset)}else{if(this.range.startContainer==q){v+=q.nodeValue.substring(this.range.startOffset)}else{if(this.range.endContainer==q){v+=q.nodeValue.substring(0,this.range.endOffset)}else{if(this.range.commonAncestorContainer!=q){v+=q.nodeValue}}}}}else{v+=q.nodeValue}}else{if(q.nodeType==1){if(q===n.doc.mainContent&&n.doc.contentType!=="3"){var w=(new Date().getTime()/100000)+"";v+=w;n.doc.mainContentTag=w}if(this.range&&this.range.commonAncestorContainer==q&&this.range.startContainer!=this.range.commonAncestorContainer&&!this.isListNode(q)){}else{var i=this.changeNodeName(q);v+="<"+i;var h=this.getNodeAttributesString(q);if(h.length>0){v+=" "+h}if(this.styleUtil){var r=this.styleUtil.styleForNode(q,t);if(r!=null&&r.length!=0){v+=" style='"+r+"'"}}if(!q.hasChildNodes()&&this.isCloseTag(q)){v+="/>"}else{v+=">"}}if(q.tagName.toLowerCase()!="iframe"&&q.hasChildNodes()){var l=q.childNodes;for(var p=0,o=l.length;p<o;p++){var k=l[p];if(k!=null&&YNote.Common.trim(k.nodeValue)!=""&&k.nodeType>0&&k.nodeName&&k.nodeName.toLowerCase()!="script"&&k.nodeName.toLowerCase()!="iframe"){var m="";if(k.nodeName.toLowerCase()=="font"){var m=k.outerHTML}else{m=this.getNodeText(k,q)}if(m&&m.length>0){v+=m}}}}if(this.range&&this.range.commonAncestorContainer==q&&!this.isListNode(q)){}else{if(q.hasChildNodes()||!this.isCloseTag(q)){v+="</"+i+">";if(q===n.doc.mainContent&&n.doc.contentType!=="3"){v+=n.doc.mainContentTag}}}}}return v},getSelectedContent:function(){if(this.hasSelection()){if(YNote.Common.browser.isIE){YNote.Common.log(this.selection.htmlText);if(this.selection.htmlText){this.content=this.selection.htmlText;return this.selection.htmlText}else{this.content=this.getNodeText(this.getRangeContainer(this.range));return this.content}}else{var i=this.selector.getSelectionRange();var h="";h=this.getNodeText(i.commonAncestorContainer);if(h==""){YNote.Common.log("Get Selected ERROR!")}return h}}},getRangeContainer:function(k){if(!k){return document.body}var h=k.parentElement();var i=h.getBoundingClientRect();var j=k.getBoundingClientRect();while(i.top>j.top||i.bottom<j.bottom){h=h.parentNode;i=h.getBoundingClientRect()}return h},initFrame:function(){var h=YWebClipperConfiguration;this.view.innerHTML='<iframe width="100%" height="100%" border="0" frameborder="0" src="javascript:document.write(\'\');" style="width:100%;height:100%;border:0px"  id="'+h.clipperDomPrefix+'ContentFrame" name="'+h.doc.contentType+'ContentFrame" onload="yApp.frameHandler(event);" style="border:0px" scrolling ="no"></iframe>'},deleteFrame:function(){this.view.innerHTML=""},filterResults:function(k,i,h){var j=k?k:0;if(i&&(!j||(j>i))){j=i}return h&&(!j||(j>h))?h:j},init:function(){YNote.Common.log("Init Clipper Class");this.styleUtil=new YNote.StyleUtil();this.path=this.getClipID();this.requestCount=0;this.state=YNote.Clipper.CLASS_INIT;var j=YWebClipperConfiguration;var l="ydNoteWebClipper";var h=b.getElementById(l);if(h!=null&&h.parentNode!=null){h.parentNode.removeChild(h)}var s=YNote.Common.mkel("div");s.id=l;s.name=l;if(YNote.Common.browser.isIE){document.getElementsByTagName("html")[0].cssText="background-image:url(about:blank);background-attachment:fixed";document.getElementsByTagName("body")[0].cssText="background-image:url(about:blank);background-attachment:fixed"}s.style.cssText=j.clipperStyle;s.style.zIndex=999999;this.wrapper=s;var k=YNote.Common.mkel("div",s);k.style.cssText="width:400px;padding:5px;background-color:rgba(92,184,229,.5)!important;background:#5cb8e5;border-radius:5px;box-shadow:0 0 2px #5cb8e5;    -khtml-border-radius:5px;-webkit-border-radius:5px;-webkit-box-shadow:0 0 2px #5cb8e5;-moz-border-radius:5px;-moz-box-shadow:0 0 2px #5cb8e5;";k.id="ydNoteWebClipper-New";k.className="ydnwc-dialog";var r=YNote.Common.mkel("div",k);r.id="ydNoteWebClipper_view";r.name="ydNoteWebClipper_view";if(YNote.Common.browser.isIE){r.style.cssText="height:278px;width:398px;border:1px solid #5cb8e5;background:#fff;"}else{r.style.cssText="height:264px;width:398px;border:1px solid #5cb8e5;background:#fff;"}this.view=r;this.initFrame();var o=YNote.Common.mkel("div",s);var n=YNote.Common.mkel("form",o);YNote.Common.extend(n,{id:j.clipperDomPrefix+"ContentForm",name:j.clipperDomPrefix+"ContentForm",action:j.clipperBaseURL+j.clipperUploadApp,target:j.doc.contentType+"ContentFrame",enctype:"multipart/form-data",encoding:"multipart/form-data",method:"POST"});YNote.Common.extend(o.style,{display:"none"});var p="";var m=j.clipperFormFields;for(var q=0;q<m.length;q++){if(m[q][1]=="text"){p+='<input type="text" name="'+m[q][2]+'" id="'+j.clipperDomPrefix+"ContentForm"+m[q][0]+'" value=""/>'}if(m[q][1]=="area"){p+='<textarea name="'+m[q][2]+'" id="'+j.clipperDomPrefix+"ContentForm"+m[q][0]+'"></textarea>'}}n.innerHTML=p;this.form=n;div=YNote.Common.mkel("div",k);if(YNote.Common.browser.isIE){div.style.cssText="position:absolute;height:270px;398px;background:#fff;top:0;left:200px;"}else{div.style.cssText="position:absolute;height:258px;398px;background:#fff;top:0;left:200px;"}div.innerHTML=j.loadingHTML;div.style.display="none";div.name="ydNoteWebClipper_loadview";div.id="ydNoteWebClipper_loadview";this.loadingView=div;window.document.body.appendChild(s)},clearFlash:function(){var n=YNote.Common.browser.isIE;var j=[];if(n){var k=document.getElementsByTagName("object");var l=document.getElementsByTagName("embed");j=(k.length&&k)||l}else{j=document.getElementsByTagName("embed")}for(var m=0,h=j.length;m<h;m++){if((n&&j[m]&&j[m]["classid"]=="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000")||(j[m]&&j[m]["type"]=="application/x-shockwave-flash")||(j[m]&&j[m].parentNode.innerHTML.indexOf("application/x-shockwave-flash")>0)){if(j[m].parentNode){j[m].parentNode.removeChild(j[m])}}}},reset:function(){YNote.Common.log("Call Reset!");this.selection=null;this.range=null;this.title=null;this.content=null;this.state=0;this.requestCount=0;this.path=this.getClipID();this.wrapper.style.display="";if(this.view.innerHTML.length>10){this.deleteFrame()}this.initFrame()},getNavigatorSign:function(){var i=navigator.userAgent.toLowerCase();var h=/msie/.test(i)?parseFloat(i.match(/msie ([\d.]+)/)[1]):false;if(parseInt(h)>=7){return"true"}else{return"false"}},fillForm:function(){YNote.Common.log("Enter fillForm");var k=this.getNavigatorSign();var i=document;var h=YWebClipperConfiguration;var j="FullPage MainBody Selected";this.title=i.title;this.content=this.content.replace(/[\r\n]/g,"");if(h.doc.mainContentTag){this.content+="$"+h.doc.mainContentTag}this.content=(k=="true"?YNote.Common.HTMLEncode(this.content):YNote.Common.unicodeEncode(this.content));i.getElementById(h.clipperDomPrefix+"ContentFormpath").value=this.path;i.getElementById(h.clipperDomPrefix+"ContentFormcontent").value=this.content;i.getElementById(h.clipperDomPrefix+"ContentFormsource").value=YNote.Common.HTMLEncode(this.source);i.getElementById(h.clipperDomPrefix+"ContentFormtitle").value=YNote.Common.HTMLEncode(this.title);i.getElementById(h.clipperDomPrefix+"ContentFormlen").value=this.content.length;i.getElementById(h.clipperDomPrefix+"ContentFormtype").value=j.split(" ")[h.doc.contentType-1];i.getElementById(h.clipperDomPrefix+"ContentFormsign").value=this.getNavigatorSign()}});YNote.Selection=function(){};YNote.Common.extend(YNote.Selection.prototype,{getSelection:function(){var i=window;var h=i.document;if(YNote.Common.browser.isIE){this.selection=document.selection}else{this.selection=i.getSelection()}if(!this.hasSelection()){this.getNestedRange(i)}else{this.selectionParentWindow=i}return this.selection},hasSelection:function(){YNote.Common.log("Enter hasSelection");if(typeof this.selection.createRange=="function"){if(this.selection.createRange().htmlText==""){return false}else{return true}}else{if(this.selection.rangeCount==0){return false}else{return true}}},getNestedRange:function(r){YNote.Common.log("Enter getNestedRange");var j=r.document;var l=null;l=j.getElementsByTagName("iframe");if(!l||l.length==0){return false}for(var m=0,h=l.length;m<h;m++){var q=l[m].contentWindow;try{q.document;if(l[m].clientWidth<=10||l[m].clientHeight<=10){continue}}catch(k){continue}try{var o=(typeof q.getSelection=="function")?q.getSelection():q.document.selection;if(typeof o.createRange=="function"||typeof o.getRangeAt=="function"){var p=this.selection;this.selection=o;this.selectionparentWindow=q;if(!this.hasSelection()){var n=0;var r=q;while(r!==window){n++;if(n>3){break}r=r.parent}if(r===window){this.getNestedRange(q)}}else{this.selection=p;return false}}}catch(k){continue}}YNote.Common.log("getNestedRange over")},getSelectionRange:function(){YNote.Common.log("Enter get getSelectionRange");this.getSelection();if(!this.selection){return false}if(YNote.Common.browser.isIE){this.range=this.selection.createRange()}else{this.range=this.selection.getRangeAt(0)}if(YNote.Common.browser.isIE){if(this.range){this.range.commonAncestorContainer=this.range.parentElement();YNote.Common.log("Enter get range block");var h=this.range.duplicate();h.collapse(true);var j=this.getContainerForIE(h);this.range.startContainer=j.el;this.range.startOffset=j.offset;var i=this.range.duplicate();i.collapse(false);j=this.getContainerForIE(i);this.range.endContainer=j.el;this.range.endOffset=j.offset}}return this.range},getAncestor:function(h,i){},getContainerForIE:function(n){var j=n.parentElement();var l=j.ownerDocument.body.createTextRange();l.moveToElementText(j);l.setEndPoint("EndToStart",n);var m=l.text.length;if(m<j.innerText.length/2){var i=1;var k=j.firstChild}else{i=-1;k=j.lastChild;l.moveToElementText(j);l.setEndPoint("StartToStart",n);m=l.text.length}while(k){switch(k.nodeType){case 3:nodeLength=k.data.length;if(nodeLength<m){var h=m-nodeLength;if(i==1){l.moveStart("character",h)}else{l.moveEnd("character",-h)}m=h}else{if(i==1){return{node:k,offset:m}}else{return{el:k,offset:nodeLength-m}}}break;case 1:nodeLength=k.innerText.length;if(i==1){l.moveStart("character",nodeLength)}else{l.moveEnd("character",-nodeLength)}m=m-nodeLength;break}if(i==1){k=k.nextSibling}else{k=k.previousSibling}}return{el:j,offset:0}},getSelectionHTMLText:function(){this.getSelectionRange();if(!this.range){return false}else{if(YNote.Common.browser.isIE){return this.range.htmlText}else{return""}}}});YNote.ClipperManager=function(){this.init()};YNote.Common.extend(YNote.ClipperManager.prototype,{run:function(){YNote.Common.log("start run..");YNote.Common.serverlog(0);if(!this.checkEnv()){YNote.Common.log("check Env false");YNote.Common.serverlog(1);return false}YNote.Common.log("manager run");this.clipper.reset();this.clipper.wrapper.display="";this.clipper.clearFlash();this.clipper.clipContent();if(this.clipper.state!=YNote.Clipper.CLIPPED){return}YNote.Common.log("manager clip end");this.clipper.submit()},submit:function(){if(this.clipper.state==YNote.Clipper.CLIPPED){YNote.Common.log("Do clipper.submit");this.clipper.submit()}else{YNote.Common.log("ERROR! clipper state error")}},init:function(){this.clipper=new YNote.Clipper()},checkEnv:function(){var h=window.document;if(!h){return false}if(!h.body){return false}YNote.Common.log(this.clipper.state);if(this.clipper.state>0&&this.clipper.state<100){if(this.clipper.state!=YNote.Clipper.DONE){return false}}return true}});YNote.App=function(){};YNote.App.prototype={crossDomain:(function(){var j={};var m,n,i=1,q,r=this,k=!1,p="postMessage",h="addEventListener",o,l=r[p];j.isFunction=function(s){return Object.prototype.toString.call(s)==="[object Function]"};j.browser=function(){var t={};var v=navigator.userAgent.toLowerCase();var u;(u=v.match(/msie ([\d.]+)/))?t.msie=u[1]:(u=v.match(/firefox\/([\d.]+)/))?t.firefox=u[1]:(u=v.match(/chrome\/([\d.]+)/))?t.chrome=u[1]:(u=v.match(/opera.([\d.]+)/))?t.opera=u[1]:(u=v.match(/version\/([\d.]+).*safari/))?t.safari=u[1]:0;return t}();j.each=function(w,s,t){if(w===undefined||w===null){return}if(w.length===undefined||j.isFunction(w)){for(var v in w){if(w.hasOwnProperty(v)){if(s.call(t||w[v],v,w[v])===false){break}}}}else{for(var u=0;u<w.length;u++){if(s.call(t||w,u,w[u])===false){break}}}return w};j.param=function(s){if(typeof s==="string"){return s}var t=[];j.each(s,function(u,v){if(v){v=encodeURIComponent(v);if(j.browser.firefox){v=encodeURIComponent(unescape(v))}t.push(encodeURIComponent(u)+"="+v)}});return t.join("&").replace(r20,"+")};j.postMessage=function(s,u,t){if(!u){return}s=typeof s==="string"?s:j.param(s);t=t||parent;if(l){t[p](s,u.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))}else{if(u){t.location=u.replace(/#.*$/,"")+"#"+(+new Date)+(i++)+"&"+s}}};j.receiveMessage=o=function(s,u,t){if(l){if(s){q&&o();q=function(v){if((typeof u==="string"&&v.origin!==u)||(j.isFunction(u)&&u(v.origin)===k)){return k}s(v)}}if(r[h]){r[s?h:"removeEventListener"]("message",q,k)}else{r[s?"attachEvent":"detachEvent"]("onmessage",q)}}else{m&&clearInterval(m);m=null;if(s){t=typeof u==="number"?u:typeof t==="number"?t:100;m=setInterval(function(){var v=document.location.hash,w=/^#?\d+&/;if(v!==n&&w.test(v)){n=v;s({data:v.replace(w,"")})}},t)}}};return j})(),creatDiv:function(k,n,j,l,m,h){var i=document.createElement("div");i.id=k;if(!h){var h="position:absolute;filter:alpha(opacity=80);background-color:#666;opacity:0.8;z-index:9999;"}h+="height:"+j+"px;";h+="width:"+n+"px;";h+="left:"+l+"px;";h+="top:"+m+"px;";i.style.cssText=h;return i},removeDiv:function(i){var h=document.getElementById(i);if(h){document.body.removeChild(h)}},removeClipDiv:function(){for(var h=0;h<5;h++){this.removeDiv("yShade"+h)}this.shadeStatu=false},createClipDiv:function(){if(this.mainElem){var p=this.mainElem;var u=Math.abs(p.common.findPos(p.elem).y);var t=Math.abs(p.common.findPos(p.elem).x);var r=p.elem.scrollWidth;var q=p.elem.scrollHeight;var m=document.documentElement.scrollWidth;var l=document.documentElement.scrollHeight;this.removeClipDiv();var s=[];var o=(document.body.scrollWidth==document.body.offsetWidth);var k="position:absolute;border:5px solid rgb(0, 154, 226);border:5px solid rgba(0, 154, 226,0.6);-webkit-border-radius:5px;-moz-border-radius:5px;-khtml-border-radius:5px;z-index:9999;";var h=(document.body.offsetWidth-document.documentElement.scrollWidth)/2;s[0]=this.creatDiv("yShade0",m,u,h,0);s[1]=this.creatDiv("yShade1",m,(l-u-q),h,u+q);s[2]=this.creatDiv("yShade2",t,q,h,u);s[3]=this.creatDiv("yShade3",(m-r-t),q,r+t+h,u);s[4]=this.creatDiv("yShade4",r,q,t-5+h,u-5,k);for(var n=0,j=s.length;n<j;n++){document.body.appendChild(s[n])}}this.shadeStatu=true},mainElem:(function(){var h=new Page(window.document);var i=h.getMainArticle();if(i){YWebClipperConfiguration.doc.mainContent=i.elem;YWebClipperConfiguration.doc.contentType="2"}return i})(),run:function(){YNote.Common.log("YNote Run...");if(typeof this.clipperManager=="undefined"){try{this.clipperManager=new YNote.ClipperManager()}catch(h){YNote.Common.log("Exception:"+h)}}this.clipperManager.run()},frameHandler:function(k){YNote.Common.log("Enter framehandler ");var j=YNote.Common.wrapperEvent(k);if(!this.clipperManager||(typeof this.clipperManager=="undefined")){return}var h=this.clipperManager.clipper;var l=j.target;var i=YWebClipperConfiguration;YNote.Common.log("CALL FRAMEHANDLER :The State is "+h.state);switch(this.clipperManager.clipper.state){case YNote.Clipper.UPLOADING_FILE:h.loadingView.style.display="none";h.state=YNote.Clipper.DONE;break}}};if(true){YNote.Common.log("------------------");var c=null;var g=null;var f=null;var d=function(){YNote.Common.log("enter loopFunc:");if((document.readyState=="complete"||document.readyState=="loaded"||document.readyState=="interactive")&&document.body){window._ynote_app_load=true;window.yApp=new YNote.App();yApp.run();if(YWebClipperConfiguration.doc.contentType==="2"){yApp.createClipDiv()}yApp.crossDomain.receiveMessage(function(h){if(h.data==="close"){yApp.clipperManager.clipper.close();yApp.removeClipDiv();window.location=yApp.clipperManager.clipper.source}else{if(h.data==="success"){yApp.clipperManager.clipper.close();var j=document.createElement("div");j.style.cssText="position:fixed;_position:absolute;right:20px; top:20px;padding:10px;color:#d98736;border:1px solid #ffebb4;background:#fffff6;border-radius:5px;z-index:999999;";j.innerHTML="保存成功";document.body.appendChild(j);setTimeout(function(){document.body.removeChild(j);window.location=yApp.clipperManager.clipper.source},3000)}else{if(h.data==="resize_fullpage"||h.data==="resize_login"){var i=248;if(h.data==="resize_fullpage"){i=285}document.getElementById("ydNoteWebClipper_view").style.height=i+"px";if(YNote.Common.browser.isIE){document.getElementById("ydNoteWebClipper_view").style.height=i+10+"px"}}else{if(h.data==="remove"){yApp.removeClipDiv()}else{if(h.data==="creat"){yApp.createClipDiv()}}}}}},"http://note.youdao.com");if(window.addEventListener){window.addEventListener("resize",f)}else{window.attachEvent("onresize",f)}f=function(){};clearTimeout(c)}else{c=setTimeout(d,300)}};c=setTimeout(d,300);f=function(){if(!!window.yApp){if(g){clearTimeout(g);g=null}g=setTimeout(function(){if(yApp.shadeStatu){yApp.createClipDiv()}},200)}}}})();
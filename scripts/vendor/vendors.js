window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function i(e,t){return r(w.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var i=e[r];if(!o(i,"-")&&b[i]!==n)return"pfx"==t?i:!0}return!1}function l(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:a(o,"function")?o.bind(r||t):o}return!1}function c(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+k.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?s(i,t):(i=(e+" "+I.join(r+" ")+r).split(" "),l(i,t,n))}function u(){h.input=function(n){for(var r=0,i=n.length;i>r;r++)N[n[r]]=!!(n[r]in S);return N.list&&(N.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r,i,a,o=0,s=e.length;s>o;o++)S.setAttribute("type",i=e[o]),r="text"!==S.type,r&&(S.value=x,S.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&S.style.WebkitAppearance!==n?(y.appendChild(S),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(S,null).WebkitAppearance&&0!==S.offsetHeight,y.removeChild(S)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?S.checkValidity&&S.checkValidity()===!1:S.value!=x)),P[e[o]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var p,f,d="2.6.2",h={},m=!0,y=t.documentElement,g="modernizr",v=t.createElement(g),b=v.style,S=t.createElement("input"),x=":)",E={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),_="Webkit Moz O ms",k=_.split(" "),I=_.toLowerCase().split(" "),L={svg:"http://www.w3.org/2000/svg"},C={},P={},N={},D=[],O=D.slice,F=function(e,n,r,i){var a,o,s,l,c=t.createElement("div"),u=t.body,p=u||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=i?i[r]:g+(r+1),c.appendChild(s);return a=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),c.id=g,(u?c:p).innerHTML+=a,p.appendChild(c),u||(p.style.background="",p.style.overflow="hidden",l=y.style.overflow,y.style.overflow="hidden",y.appendChild(p)),o=n(c,e),u?c.parentNode.removeChild(c):(p.parentNode.removeChild(p),y.style.overflow=l),!!o},R=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return F("@media "+t+" { #"+g+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var o=e in i;return o||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),o=a(i[e],"function"),a(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,o}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),T={}.hasOwnProperty;f=a(T,"undefined")||a(T.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return T.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=O.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var a=new i,o=t.apply(a,n.concat(O.call(arguments)));return Object(o)===o?o:a}return t.apply(e,n.concat(O.call(arguments)))};return r}),C.flexbox=function(){return c("flexWrap")},C.flexboxlegacy=function(){return c("boxDirection")},C.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},C.canvastext=function(){return!(!h.canvas||!a(t.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!e.WebGLRenderingContext},C.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",w.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!e.postMessage},C.websqldatabase=function(){return!!e.openDatabase},C.indexedDB=function(){return!!c("indexedDB",e)},C.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},C.history=function(){return!(!e.history||!history.pushState)},C.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},C.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},C.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),o(b.backgroundColor,"rgba")},C.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),o(b.backgroundColor,"rgba")||o(b.backgroundColor,"hsla")},C.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},C.backgroundsize=function(){return c("backgroundSize")},C.borderimage=function(){return c("borderImage")},C.borderradius=function(){return c("borderRadius")},C.boxshadow=function(){return c("boxShadow")},C.textshadow=function(){return""===t.createElement("div").style.textShadow},C.opacity=function(){return i("opacity:.55"),/^0.55$/.test(b.opacity)},C.cssanimations=function(){return c("animationName")},C.csscolumns=function(){return c("columnCount")},C.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+w.join(n+e)).slice(0,-e.length)),o(b.backgroundImage,"gradient")},C.cssreflections=function(){return c("boxReflect")},C.csstransforms=function(){return!!c("transform")},C.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in y.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},C.csstransitions=function(){return c("transition")},C.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),a=i.sheet||i.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(o)&&0===o.indexOf(r.split(" ")[0])}),e},C.generatedcontent=function(){var e;return F(["#",g,"{font:0/0 a}#",g,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},C.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},C.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},C.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(e){return!1}},C.webworkers=function(){return!!e.Worker},C.applicationcache=function(){return!!e.applicationCache},C.svg=function(){return!!t.createElementNS&&!!t.createElementNS(L.svg,"svg").createSVGRect},C.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==L.svg},C.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(E.call(t.createElementNS(L.svg,"animate")))},C.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS(L.svg,"clipPath")))};for(var U in C)f(C,U)&&(p=U.toLowerCase(),h[p]=C[U](),D.push((h[p]?"":"no-")+p));return h.input||u(),h.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&h.addTest(r,e[r]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,m!==n&&m&&(y.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),v=S=null,function(e,t){function r(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function i(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=g[e[m]];return t||(t={},y++,e[m]=y,g[y]=t),t}function o(e,n,r){if(n||(n=t),p)return n.createElement(e);r||(r=a(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),i.canHaveChildren&&!d.test(e)?r.frag.appendChild(i):i}function s(e,n){if(e||(e=t),p)return e.createDocumentFragment();n=n||a(e);for(var r=n.frag.cloneNode(),o=0,s=i(),l=s.length;l>o;o++)r.createElement(s[o]);return r}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function c(e){e||(e=t);var n=a(e);return!v.shivCSS||u||n.hasCSS||(n.hasCSS=!!r(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),p||l(e,n),e}var u,p,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",y=0,g={};(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,p=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return e.cloneNode===n||e.createDocumentFragment===n||e.createElement===n}()}catch(r){u=!0,p=!0}})();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:p,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:s};e.html5=v,c(t)}(this,t),h._version=d,h._prefixes=w,h._domPrefixes=I,h._cssomPrefixes=k,h.mq=R,h.hasEvent=A,h.testProp=function(e){return s([e])},h.testAllProps=c,h.testStyles=F,h.prefixed=function(e,t,n){return t?c(e,t,n):c(e,"pfx")},y.className=y.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+D.join(" "):""),h}(this,this.document);
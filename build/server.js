/*! For license information please see server.js.LICENSE.txt */
(()=>{"use strict";var e,t={557:e=>{e.exports=require("google-map-react")},689:e=>{e.exports=require("react")},791:e=>{e.exports=require("react-helmet")},252:e=>{e.exports=require("react-lazy-load-image-component")}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+".server.js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="",e={179:1},r.f.require=(t,n)=>{e[t]||(t=>{var n=t.modules,o=t.ids,a=t.runtime;for(var i in n)r.o(n,i)&&(r.m[i]=n[i]);a&&a(r);for(var c=0;c<o.length;c++)e[o[c]]=1})(require("./"+r.u(t)))},(()=>{const e=require("express");var t=r.n(e);const n=require("morgan");var o=r.n(n);const a=require("body-parser");var i=r.n(a);const c=require("cors");var l=r.n(c);require("ignore-styles");var u=r(689),s=r.n(u);const f=require("react-dom/server"),d=require("react-router-dom/server"),h=require("react-router-dom"),p=function(){return s().createElement("div",{className:"loading"})},m=require("prop-types");var g=r.n(m),v=s().lazy((function(){return Promise.all([r.e(195),r.e(234)]).then(r.bind(r,234))})),y=s().lazy((function(){return Promise.all([r.e(195),r.e(393)]).then(r.bind(r,393))})),w=s().lazy((function(){return Promise.all([r.e(195),r.e(525)]).then(r.bind(r,525))})),b=function(e){return e.route,s().createElement(u.Fragment,null,s().createElement(s().Suspense,{fallback:s().createElement(p,null)},s().createElement(y,null)),s().createElement(s().Suspense,{fallback:s().createElement(p,null)},s().createElement(v,null)),s().createElement(h.Outlet,null),s().createElement(s().Suspense,{fallback:s().createElement(p,null)},s().createElement(w,null)))};b.propTypes={route:g().objectOf(g().any)},b.defaultProps={route:null};const E=b;var x=s().lazy((function(){return Promise.all([r.e(195),r.e(241)]).then(r.bind(r,241))})),L=s().lazy((function(){return Promise.all([r.e(195),r.e(333)]).then(r.bind(r,333))})),j=[{element:s().createElement(E,null),path:"/",children:[{element:s().createElement(s().Suspense,{fallback:s().createElement("div",{className:"devloading"},s().createElement(p,null))},s().createElement(x,null)),path:"/"},{element:s().createElement(s().Suspense,{fallback:s().createElement("div",{className:"devloading"},s().createElement(p,null))},s().createElement(L,null)),path:"/نجار-بالرياض/"},{element:s().createElement(s().Suspense,{fallback:s().createElement("div",{className:"devloading"},s().createElement(p,null))},s().createElement(x,null)),path:"*"}]}];const S=function(){return(0,h.useRoutes)(j)};var O=r(791);function P(e){var t=(0,f.renderToString)(s().createElement(d.StaticRouter,{location:e.url},s().createElement(S,null))),n=O.Helmet.renderStatic();return'\n  <!DOCTYPE html>\n<html lang="ar" class="ar">\n<head>\n<title>نجار بالرياض</title>  \n<meta charset="UTF-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">   \n<link rel="icon" href='.concat("/image/logo.93e566690a31498a0d8cb74ed7d7a472.ico",' />\n<meta name="google-site-verification" content="nudTrOck7CCX6fQdknp6WZMOE27dUN_w89Dm5zcmhFM" />\n').concat(n.title.toString(),"\n").concat(n.meta.toString(),"\n").concat(n.link.toString(),"\n      <meta name=\"theme-color\" content=\"#d8bc64\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/css/main.css\" />\n    \x3c!-- Google tag (gtag.js) --\x3e\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-11228036732\"><\/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'AW-11228036732');\n<\/script>\n\n\n\x3c!-- Google Tag Manager --\x3e\n<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PG6JSZL');<\/script>\n\x3c!-- End Google Tag Manager --\x3e\n\n\n\n\n</head>\n<body ").concat(n.bodyAttributes.toString(),'>\n    <div id="Mahmoud-Almadhoun+467098520">\n         ').concat(t,'\n    </div>\n    <script src="/client/bundle.js" defer ><\/script>\n    \x3c!-- Google tag (gtag.js) --\x3e\n<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11228036732"><\/script>\n\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag(\'js\', new Date());\n\n  gtag(\'config\', \'AW-11228036732\');\n<\/script>\n\n\x3c!-- Google Tag Manager (noscript) --\x3e\n<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PG6JSZL"\nheight="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n\x3c!-- End Google Tag Manager (noscript) --\x3e\n\n    \n</body>\n</html>\n  ')}function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function k(){k=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,o){var a=t&&t.prototype instanceof d?t:d,i=Object.create(a.prototype),c=new S(o||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function d(){}function h(){}function p(){}var m={};l(m,a,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(O([])));v&&v!==t&&n.call(v,a)&&(m=v);var y=p.prototype=d.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function o(r,a,i,c){var l=s(e[r],e,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==T(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,i,c)}),(function(e){o("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return o("throw",e,i,c)}))}c(l.arg)}var a;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return a=a?a.then(r,r):r()}})}function E(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=s(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new b(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(y),l(y,c,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function _(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}var G=process.env.PORT||4e3,q=t()();q.use([t().json(),i().urlencoded({extended:!0}),o()("dev"),l()({origin:"*",credentials:!0})]),q.use("/*",(function(e,t,n){t.header("Access-Control-Allow-Origin","*"),t.setHeader("Last-Modified",(new Date).toUTCString()),n()})),q.use(t().static("build")),q.use(t().static("build")),q.get("/*",function(){var e,t=(e=k().mark((function e(t,n){var r,o,a;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=(0,h.matchRoutes)(j,t.path),a=null==o||null===(r=o.map((function(e){var n=e.route;return null!=n&&n.loadData?null==n?void 0:n.loadData(dispatch,t.url):null})))||void 0===r?void 0:r.map((function(e){return e?new Promise((function(t,n){e.then(t).catch(n)})):null})),Promise.all(a).then((function(){var e=P(t);n.contentType("text/html"),"*"===o[0].route.path?n.status(404):n.status(200),n.send(e)})).catch((function(e){n.status(404),n.send(e.message)}));case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){_(a,r,o,i,c,"next",e)}function c(e){_(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()),q.listen(G,(function(){return console.log("server is runing...".concat(G))}))})()})();
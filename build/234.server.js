"use strict";exports.id=234,exports.ids=[234],exports.modules={699:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(689),a=r.n(n),l=r(195);function i(e){var t=e.ClassName;return a().createElement("ul",{className:t},null===l.w2||void 0===l.w2?void 0:l.w2.map((function(e){return a().createElement("li",{className:"font-size option",key:null==e?void 0:e._id},a().createElement("a",{href:null==e?void 0:e.link,className:"Telefon_link"},null==e?void 0:e.name))})))}},234:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(689),a=r.n(n);const l="/image/call.5df87abe661b2ab187ad24a7c969c3f2.png",i="/image/map.23a5570f973bd0f566f07f4374145c53.png";var o=r(699),c=r(195),s=r(286);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===m(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(){var e,t,r=(e=(0,n.useState)({menubar:"menu-btn",hidden:"hidden"}),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,i,o=[],c=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=r[0],f=r[1];return a().createElement("div",{className:"padding__ background"},a().createElement("div",{className:"flex flex-wrap flex-center margin-topone"},a().createElement("div",{className:"width50 flex flex-center"},a().createElement("div",{className:"margin-leftOne widthx"},a().createElement("p",{className:"font-size"},c.My.title),a().createElement("p",{className:"font-size margin-top option cursor"},a().createElement("a",{href:"tel:".concat(c.My.telefon),className:"Telefon_link",title:"نجار تركيب اثاث ايكيا"},c.My.telefon))),a().createElement("a",{href:"tel:".concat(c.My.telefon),className:"Telefon_link",title:"نجار اثاث"},a().createElement(s.Z,{image:l,className:"CallImage add",alt:"the calling",width:"40px",height:"40px",key:"3"}))),a().createElement("div",{className:"width50 Extra flex flex-center "},a().createElement("div",{className:"margin-leftOne widthx"},a().createElement("p",{className:"font-size"},c.az.title),a().createElement("p",{className:"font-size margin-top option cursor"},c.az.address)),a().createElement(s.Z,{image:i,className:"CallImage",alt:"the calling",width:"40px",height:"40px",key:"5"}))),a().createElement("nav",{className:"flex flex-row align-items flex-wrap margin-top2"},a().createElement("h2",{className:"firstClass font-weight margin-left cursor"}," ",c.kW),a().createElement("div",{onClick:function(){"menu-btn"===m.menubar?f(u(u({},m),{},{menubar:"menu-btn open",hidden:"hidden open"})):f(u(u({},m),{},{menubar:"menu-btn",hidden:"hidden"}))},className:"widthbar flex  flex-row align-items"},a().createElement("div",{className:m.menubar},a().createElement("div",{className:"menu-btn__burger"}))),a().createElement("div",{className:m.hidden},a().createElement(o.Z,{ClassName:"flex flex-row flex-wrap cursor"}))))}},286:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(689),a=r.n(n),l=r(252);const i=function(e){var t=e.image,r=e.alt,n=e.className,i=e.width,o=e.height,c=e.title;return a().createElement(l.LazyLoadImage,{alt:r,src:t,className:n,effect:"blur",width:i,height:o||"yyy",title:c||"loading",loading:"lazy"})}}};
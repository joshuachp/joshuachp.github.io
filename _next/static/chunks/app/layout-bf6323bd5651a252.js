(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3788:function(e,t,r){Promise.resolve().then(r.t.bind(r,1231,23)),Promise.resolve().then(r.bind(r,3508)),Promise.resolve().then(r.bind(r,3495)),Promise.resolve().then(r.bind(r,247))},3495:function(e,t,r){"use strict";r.r(t),r.d(t,{Header:function(){return h},default:function(){return p}});var n=r(9268),o=e=>{let{children:t,onClick:r,className:o}=e;return(0,n.jsx)("button",{onClick:r,className:"rounded border-t-2 border-l-2 border-r-4 border-b-4  border-primary-900 px-4 py-2 text-sm font-medium text-primary-900  hover:bg-primary-100 active:translate-y-0.5 dark:border-primary-50 dark:text-primary-50 dark:hover:bg-primary-800 ".concat(null!=o?o:""),children:t})},a=r(6006),l=e=>{let{children:t,className:r,textSizes:o}=e;return(0,n.jsx)("span",{className:"".concat(null!=o?o:"text-sm sm:text-base xl:text-lg"," text-primary-900 dark:text-primary-50 ").concat(r),children:t})},i=r(247),s=r(8080),c=()=>{let{theme:e,dispatch:t}=(0,a.useContext)(i.ThemeContext);return(0,n.jsx)(o,{onClick:()=>{t(s.cw.ButtonClick)},children:(0,n.jsx)(l,{className:"font-semibold",children:e.type})})},u=r(5846),d=r.n(u),f=r(6008),m=e=>{let{level:t,children:r,className:o}=e,a="".concat(null!=o?o:""," text-primary-900 dark:text-primary-50");if("H1"===t||1===t)return(0,n.jsx)("h1",{className:"".concat(a," text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"),children:r});if("H2"===t||2===t)return(0,n.jsx)("h2",{className:"".concat(a," text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"),children:r});if("H3"===t||3===t)return(0,n.jsx)("h3",{className:"".concat(a," text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"),children:r});if("H4"===t||4===t)return(0,n.jsx)("h4",{className:"".concat(a," text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl"),children:r});if("H5"===t||5===t)return(0,n.jsx)("h5",{className:"".concat(a," text-lg font-semibold tracking-tight sm:text-xl md:text-2xl"),children:r});if("H6"===t||6===t)return(0,n.jsx)("h6",{className:"".concat(a," text-base font-medium tracking-tight sm:text-lg md:text-xl"),children:r});throw Error("Unreachable")};let h=()=>{let e=(0,f.usePathname)(),t={home:"/"===e?"underline":"",posts:e.startsWith("/posts")?"underline":"",notes:e.startsWith("/notes")?"underline":""};return(0,n.jsxs)("header",{className:"flex flex-row items-baseline justify-between gap-4 p-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 2xl:px-96",children:[(0,n.jsxs)("nav",{className:"flex flex-grow flex-row flex-wrap gap-y-4",children:[(0,n.jsx)(d(),{href:"/",title:"Home page",className:"mr-8",children:(0,n.jsx)(m,{level:1,className:t.home,children:"/dev/blog"})}),(0,n.jsxs)("ul",{className:"flex flex-grow flex-row items-end justify-start gap-8",children:[(0,n.jsx)("li",{children:(0,n.jsx)(d(),{href:"/posts",title:"Posts",children:(0,n.jsx)(l,{className:t.posts+" font-bold",textSizes:"text-xl md:text-2xl",children:"Posts"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(d(),{href:"/notes",title:"Notes",children:(0,n.jsx)(l,{className:t.notes+" font-bold",textSizes:"text-xl md:text-2xl",children:"Notes"})})})]})]}),(0,n.jsx)("div",{children:(0,n.jsx)(c,{})})]})};var p=h},3508:function(e,t,r){"use strict";r.r(t),r.d(t,{GoatCounter:function(){return s},default:function(){return c}});var n=r(9268),o=r(6008),a=r(6341),l=r.n(a),i=r(6006);function s(e){let{api:t}=e,r=(0,o.usePathname)(),[a,s]=(0,i.useState)(null);return(0,i.useEffect)(()=>{a&&a.count({path:r})},[r,a]),(0,n.jsx)(l(),{strategy:"afterInteractive","data-goatcounter":"https://".concat(t,".goatcounter.com/count"),src:"//gc.zgo.at/count.js",onLoad:()=>{if(!window.goatcounter)throw Error("goatcounter object is not defined");s(window.goatcounter)}})}function c(e){let{production:t,goatCounterApi:r}=e;return t?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s,{api:r})}):null}},247:function(e,t,r){"use strict";r.r(t),r.d(t,{ThemeContext:function(){return i},ThemeProvider:function(){return s}});var n=r(9268),o=r(9156),a=r(6006),l=r(8080);let i=a.createContext({theme:o.Q2.default(),dispatch:e=>{}}),s=e=>{let{children:t}=e,[r,s]=(0,a.useReducer)(l.xK,null,o.Q2.default);return(0,a.useEffect)(()=>{s(l.cw.InitTheme)},[]),(0,a.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{(0,l._v)(e.matches)};r.type===o.f8.Auto?e.addEventListener("change",t):e.removeEventListener("change",t)},[r]),(0,n.jsx)(i.Provider,{value:{theme:r,dispatch:s},children:t})};t.default=s},8080:function(e,t,r){"use strict";r.d(t,{_v:function(){return i},cw:function(){return o},xK:function(){return s}});var n,o,a=r(9156);let l=[a.f8.Auto,a.f8.Light,a.f8.Dark];function i(e){e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function s(e,t){switch(t){case o.ButtonClick:return function(e){let t=(e.index+1)%l.length,r=a.ZP.fromThemeType(l[t]);return localStorage.setItem("theme",r.type),i(r.isDark()),r}(e);case o.InitTheme:return function(e){let t=e,r=a.ZP.tryFromLocalStorage();return r&&(t=r),t.isDark()&&i(!0),t}(e);case o.MediaChangeLight:return document.documentElement.classList.remove("dark"),a.ZP.fromThemeType(e.type);case o.MediaChangeDark:return document.documentElement.classList.add("dark"),a.ZP.fromThemeType(e.type);default:throw Error("unknown action: ".concat(t))}}(n=o||(o={}))[n.ButtonClick=0]="ButtonClick",n[n.InitTheme=1]="InitTheme",n[n.MediaChangeLight=2]="MediaChangeLight",n[n.MediaChangeDark=3]="MediaChangeDark"},9156:function(e,t,r){"use strict";var n,o;r.d(t,{Q2:function(){return l},f8:function(){return n}});let a="theme";(o=n||(n={})).Auto="Auto",o.Light="Light",o.Dark="Dark";class l{static default(){return new l(0,n.Auto)}static fromThemeType(e){switch(e){case n.Auto:return l.default();case n.Light:return new l(1,n.Light);case n.Dark:return new l(2,n.Dark);default:throw Error("not implemented: ".concat(e))}}static tryFromLocalStorage(){if(!localStorage)return null;let e=localStorage.getItem(a);return e?e in n?l.fromThemeType(e):(localStorage.removeItem(a),null):null}isDark(){switch(this.type){case n.Auto:if(!window)return!1;return window.matchMedia("(prefers-color-scheme: dark)").matches;case n.Light:return!1;case n.Dark:return!0;default:throw Error("not implemented: ".concat(this.type))}}constructor(e,t){this.index=e,this.type=t}}t.ZP=l},6167:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},isEqualNode:function(){return a},default:function(){return l}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:r}=e,o=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let a=n[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!r[e]:o.setAttribute(a,r[e])}let{children:a,dangerouslySetInnerHTML:l}=r;return l?o.innerHTML=l.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,o="";if(n){let{children:e}=n.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),l=Number(n.content),i=[];for(let t=0,r=n.previousElementSibling;t<l;t++,r=(null==r?void 0:r.previousElementSibling)||null){var s;(null==r?void 0:null==(s=r.tagName)?void 0:s.toLowerCase())===e&&i.push(r)}let c=t.map(o).filter(e=>{for(let t=0,r=i.length;t<r;t++){let r=i[t];if(a(r,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>r.insertBefore(e,n)),n.content=(l-i.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1273:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return p},default:function(){return g}});let n=r(6927),o=r(5909),a=n._(r(8431)),l=o._(r(6006)),i=r(5415),s=r(6167),c=r(1722),u=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],m=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:l="",strategy:i="afterInteractive",onError:c}=e,m=r||t;if(m&&d.has(m))return;if(u.has(t)){d.add(m),u.get(t).then(n,c);return}let h=()=>{o&&o(),d.add(m)},p=document.createElement("script"),x=new Promise((e,t)=>{p.addEventListener("load",function(t){e(),n&&n.call(this,t),h()}),p.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[r,n]of(a?(p.innerHTML=a.__html||"",h()):l?(p.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",h()):t&&(p.src=t,u.set(t,x)),Object.entries(e))){if(void 0===n||f.includes(r))continue;let e=s.DOMAttributeNames[r]||r.toLowerCase();p.setAttribute(e,n)}"worker"===i&&p.setAttribute("type","text/partytown"),p.setAttribute("data-nscript",i),document.body.appendChild(p)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function p(e){e.forEach(h),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function x(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:u,...f}=e,{updateScripts:h,scripts:p,getIsSsr:x,appDir:g,nonce:y}=(0,l.useContext)(i.HeadManagerContext),b=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||r;b.current||(o&&e&&d.has(e)&&o(),b.current=!0)},[o,t,r]);let v=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!v.current&&("afterInteractive"===s?m(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),v.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(h?(p[s]=(p[s]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:u,...f}]),h(p)):x&&x()?d.add(t||r):x&&!x()&&m(e)),g){if("beforeInteractive"===s)return r?(a.default.preload(r,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"}),l.default.createElement("script",{nonce:y,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r])+")"}})):(f.dangerouslySetInnerHTML&&(f.children=f.dangerouslySetInnerHTML.__html,delete f.dangerouslySetInnerHTML),l.default.createElement("script",{nonce:y,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...f}])+")"}}));"afterInteractive"===s&&r&&a.default.preload(r,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"})}return null}Object.defineProperty(x,"__nextScript",{value:!0});let g=x;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1231:function(){},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},9268:function(e,t,r){"use strict";e.exports=r(3177)},5846:function(e,t,r){e.exports=r(8920)},6008:function(e,t,r){e.exports=r(3027)},6341:function(e,t,r){e.exports=r(1273)}},function(e){e.O(0,[920,667,488,744],function(){return e(e.s=3788)}),_N_E=e.O()}]);
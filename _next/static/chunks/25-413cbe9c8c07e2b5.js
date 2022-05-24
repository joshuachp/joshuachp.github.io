"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25],{3602:function(e,t,n){n.d(t,{h:function(){return h},Z:function(){return m}});var r=n(5893),i=function(e){var t=e.children,n=e.onClick,i=e.className;return(0,r.jsx)("button",{onClick:n,className:"".concat(i," text-slate-900 border-slate-900 dark:border-slate-50 dark:text-slate-50 rounded border-t-2 border-l-2 border-r-4 border-b-4 px-4 py-2  hover:bg-slate-100 dark:hover:bg-slate-800 active:translate-y-0.5"),children:t})},l=n(1245),c=n(8172),o=n(7294),s=function(){var e=(0,o.useContext)(l.Ni),t=e.theme,n=e.dispatch;return(0,r.jsx)(i,{onClick:function(){n(c.cw.ButtonClick)},children:t.type})},a=n(1664),u=n.n(a),f=n(1163),d=n(8684),x=n(9294),h=function(){var e=(0,f.useRouter)(),t={home:"/"===e.pathname?"underline":"",posts:e.pathname.startsWith("/posts")?"underline":"",notes:e.pathname.startsWith("/notes")?"underline":""};return(0,r.jsx)("header",{className:"p-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 2xl:px-96",children:(0,r.jsxs)("nav",{className:"flex flex-row items-center",children:[(0,r.jsx)(u(),{href:"/",title:"Home page",children:(0,r.jsx)("a",{children:(0,r.jsx)(d.Z,{level:1,className:t.home,children:"/dev/blog"})})}),(0,r.jsxs)("ul",{className:"flex flex-row flex-grow items-end justify-evenly",children:[(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:"/posts",title:"Posts",children:(0,r.jsx)("a",{children:(0,r.jsx)(x.Z,{className:t.posts,children:"Posts"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:"/notes",title:"Notes",children:(0,r.jsx)("a",{children:(0,r.jsx)(x.Z,{className:t.notes,children:"Notes"})})})})]}),(0,r.jsx)(s,{})]})})},m=h},8684:function(e,t,n){n.d(t,{X:function(){return i}});var r=n(5893),i=(n(7294),function(e){var t=e.level,n=e.children,i=e.className,l="".concat(i," text-slate-900 dark:text-slate-50");if("H1"===t||1===t)return(0,r.jsx)("h1",{className:"".concat(l," text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"),children:n});if("H2"===t||2===t)return(0,r.jsx)("h2",{className:"".concat(l," text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"),children:n});if("H3"===t||3===t)return(0,r.jsx)("h3",{className:"".concat(l," text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"),children:n});if("H4"===t||4===t)return(0,r.jsx)("h4",{className:"".concat(l," text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl"),children:n});if("H5"===t||5===t)return(0,r.jsx)("h5",{className:"".concat(l," text-lg font-semibold tracking-tight sm:text-xl md:text-2xl"),children:n});if("H6"===t||6===t)return(0,r.jsx)("h6",{className:"".concat(l," text-base font-medium tracking-tight sm:text-lg md:text-xl"),children:n});throw new Error("Unreachable")});t.Z=i},5392:function(e,t,n){var r=n(5893);n(7294);t.Z=function(e){var t=e.children,n=e.start,i=e.numbered,l=e.className,c="".concat(l," ml-6 text-slate-900 dark:text-slate-50");return i||n?(0,r.jsx)("ol",{start:n,className:"".concat(c," list-decimal"),children:t}):(0,r.jsx)("ul",{className:"".concat(c," list-disc"),children:t})}},2825:function(e,t,n){var r=n(5893);n(7294);t.Z=function(e){var t=e.children,n=e.className;return(0,r.jsx)("p",{className:"".concat(n," text-slate-900 dark:text-slate-50 text-sm sm:text-base xl:text-lg"),children:t})}},9294:function(e,t,n){var r=n(5893);n(7294);t.Z=function(e){var t=e.children,n=e.className;return(0,r.jsx)("span",{className:"".concat(n," text-slate-900 dark:text-slate-50 text-sm sm:text-base xl:text-lg"),children:t})}},4434:function(e,t,n){var r=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,r.jsx)("main",{className:"flex flex-col justify-center p-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 2xl:px-96",children:t})}},5536:function(e,t,n){n.d(t,{d:function(){return H}});var r=n(5893),i=n(7294);function l(e){return"object"===typeof e&&"Start"in e}function c(e){return"object"===typeof e&&"End"in e}function o(e){return"object"===typeof e&&"Text"in e}function s(e){return"object"===typeof e&&"Code"in e}function a(e){return"object"===typeof e&&"Html"in e}function u(e){return"object"===typeof e&&"FootnoteReference"in e}function f(e){return"object"===typeof e&&"FootnoteReference"in e}var d=n(637);n(7563);d.Z.configure({ignoreUnescapedHTML:!0});var x=function(e){var t=e.children,n=e.className,l=e.language,c=(0,i.useRef)(null);return(0,i.useEffect)((function(){if(l&&c.current){var e=c.current;d.Z.highlightElement(e)}}),[c,l]),(0,r.jsx)("pre",{ref:c,className:"language-".concat(l," ").concat(n," overflow-auto text-slate-900 dark:text-slate-50 border-2 rounded p-4"),children:(0,r.jsx)("code",{children:t})})},h=n(8684),m=n(1664),j=n.n(m);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=function(e){var t=e.children,n=e.title,i=b(e,["children","title"]);return(0,r.jsx)(j(),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}({},i,{children:(0,r.jsx)("a",{title:n,className:"text-secondary-700 visited:text-secondary-900 font-bold hover:underline",children:t})}))},v=function(e){return(0,r.jsx)("hr",{})},y=n(2825),N=n(5392);function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(s){o=!0,i=s}finally{try{c||null==n.return||n.return()}finally{if(o)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t,n){if("Paragraph"===e)return(0,r.jsx)(y.Z,{className:"mb-2 inline",children:n},t);if(function(e){return"object"===typeof e&&"Heading"in e}(e))return function(e,t,n){var i=w(e.Heading,3),l=i[0];return i[1],i[2],(0,r.jsx)(h.Z,{level:l,className:"mb-4",children:n},t)}(e,t,n);if("BlockQuote"===e)return(0,r.jsx)("blockquote",{children:n},t);if(function(e){return"object"===typeof e&&"CodeBlock"in e}(e))return function(e,t,n){var i,l=e.CodeBlock;return function(e){return"object"===typeof e&&"Fenced"in e}(l)&&(i=l.Fenced),(0,r.jsx)(x,{language:i,className:"mb-2",children:n},t)}(e,t,n);if(function(e){return"object"===typeof e&&"List"in e}(e))return function(e,t,n){var i,l=null!==(i=e.List)&&void 0!==i?i:void 0;return(0,r.jsx)(N.Z,{start:l,className:"mb-2",children:n},t)}(e,t,n);if("Item"===e)return(0,r.jsx)("li",{children:n},t);if(function(e){return"object"===typeof e&&"FootnoteDefinition"in e}(e))return(0,r.jsxs)("div",{id:e.FootnoteDefinition,children:[(0,r.jsx)("sup",{children:e.FootnoteDefinition}),n]},t);if(function(e){return"object"===typeof e&&"Table"in e}(e))return(0,r.jsx)("table",{children:n},t);if("TableHead"===e)return(0,r.jsx)("thead",{children:n},t);if("TableRow"===e)return(0,r.jsx)("tr",{children:n},t);if("TableCell"===e)return(0,r.jsx)("td",{children:n},t);if("Emphasis"===e)return(0,r.jsx)("em",{children:n},t);if("Strong"===e)return(0,r.jsx)("strong",{children:n},t);if("Strikethrough"===e)return(0,r.jsx)("del",{children:n},t);if(function(e){return"object"===typeof e&&"Link"in e}(e)){var i=w(e.Link,3),l=(i[0],i[1]),c=i[2];return(0,r.jsx)(g,{href:l,title:c,children:n},t)}if(function(e){return"object"===typeof e&&"Image"in e}(e)){var o=w(e.Image,3),s=(o[0],o[1]),a=o[2];return(0,r.jsx)("img",{src:s,alt:a},t)}throw new Error("Unrecognized tag: "+JSON.stringify(e))}function S(e){for(var t=[],n=[],i=0;i<e.content.length;i++){var d=e.content[i];if(l(d))t.push(n),n=[];else if(c(d)){var x=t.pop(),h=O(d.End,i,n);(n=x).push(h)}else if(o(d))n.push(d.Text);else if(s(d))n.push(d.Code);else if(a(d))n.push(d.Html);else if(u(d))n.push((0,r.jsx)("sup",{children:(0,r.jsx)("a",{href:"#".concat(d.FootnoteReference),children:"event.FootnoteReference"})},i));else if("SoftBreak"===d)n.push("\n");else if("HardBreak"===d)n.push((0,r.jsx)("br",{},i));else if("Rule"===d)n.push((0,r.jsx)(v,{},i));else{if(!f(d))throw new Error("Unrecognized event: "+JSON.stringify(d));n.push((0,r.jsx)("input",{type:"checkbox",checked:d.TaskListMarker}))}}return n}var H=function(e){var t=e.article;return(0,r.jsx)("article",{className:"max-w-full grow flex flex-col justify-self-start",children:S(t)})}}}]);
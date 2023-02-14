(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[395],{4812:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes/[path]",function(){return r(9573)}])},3602:function(e,t,r){"use strict";r.d(t,{h:function(){return h},Z:function(){return m}});var n=r(5893);let l=e=>{let{children:t,onClick:r,className:l}=e;return(0,n.jsx)("button",{onClick:r,className:"".concat(l," rounded border-t-2 border-l-2 border-r-4 border-b-4 border-primary-900 px-4 py-0.5 text-primary-900 hover:bg-primary-100 active:translate-y-0.5 dark:border-primary-50  dark:text-primary-50 dark:hover:bg-primary-800 sm:py-1 lg:py-1.5"),children:t})};var s=r(9294),i=r(1245),c=r(8172),o=r(7294);let a=()=>{let{theme:e,dispatch:t}=(0,o.useContext)(i.Ni),r=()=>{t(c.cw.ButtonClick)};return(0,n.jsx)(l,{onClick:r,children:(0,n.jsx)(s.Z,{children:e.type})})};var x=r(1664),d=r.n(x),u=r(1163),f=r(8684);let h=()=>{let e=(0,u.useRouter)(),t={home:"/"===e.pathname?"underline":"",posts:e.pathname.startsWith("/posts")?"underline":"",notes:e.pathname.startsWith("/notes")?"underline":""};return(0,n.jsx)("header",{className:"p-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 2xl:px-96",children:(0,n.jsxs)("nav",{className:"flex flex-row flex-wrap items-center gap-3",children:[(0,n.jsx)(d(),{href:"/",title:"Home page",children:(0,n.jsx)(f.Z,{level:1,className:t.home,children:"/dev/blog"})}),(0,n.jsxs)("ul",{className:"flex flex-grow flex-row items-end justify-evenly",children:[(0,n.jsx)("li",{children:(0,n.jsx)(d(),{href:"/posts",title:"Posts",children:(0,n.jsx)(s.Z,{className:t.posts+" text-xl font-bold sm:text-2xl xl:text-2xl",children:"Posts"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(d(),{href:"/notes",title:"Notes",children:(0,n.jsx)(s.Z,{className:t.notes+" text-xl font-bold sm:text-2xl xl:text-2xl",children:"Notes"})})})]}),(0,n.jsx)(a,{})]})})};var m=h},8684:function(e,t,r){"use strict";r.d(t,{X:function(){return l}});var n=r(5893);r(7294);let l=e=>{let{level:t,children:r,className:l}=e,s="".concat(null!=l?l:""," text-primary-900 dark:text-primary-50");if("H1"===t||1===t)return(0,n.jsx)("h1",{className:"".concat(s," text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"),children:r});if("H2"===t||2===t)return(0,n.jsx)("h2",{className:"".concat(s," text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"),children:r});if("H3"===t||3===t)return(0,n.jsx)("h3",{className:"".concat(s," text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"),children:r});if("H4"===t||4===t)return(0,n.jsx)("h4",{className:"".concat(s," text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl"),children:r});if("H5"===t||5===t)return(0,n.jsx)("h5",{className:"".concat(s," text-lg font-semibold tracking-tight sm:text-xl md:text-2xl"),children:r});if("H6"===t||6===t)return(0,n.jsx)("h6",{className:"".concat(s," text-base font-medium tracking-tight sm:text-lg md:text-xl"),children:r});throw Error("Unreachable")};t.Z=l},5392:function(e,t,r){"use strict";var n=r(5893);r(7294);let l=e=>{let{children:t,start:r,numbered:l,className:s}=e,i="".concat(null!=s?s:""," ml-6 text-primary-900 dark:text-primary-50 text-sm sm:text-base xl:text-lg");return l||r?(0,n.jsx)("ol",{start:r,className:"".concat(i," list-decimal"),children:t}):(0,n.jsx)("ul",{className:"".concat(i," list-disc"),children:t})};t.Z=l},2825:function(e,t,r){"use strict";var n=r(5893);r(7294);let l=e=>{let{children:t,className:r}=e;return(0,n.jsx)("p",{className:"".concat(null!=r?r:""," text-sm text-primary-900 dark:text-primary-50 sm:text-base xl:text-lg"),children:t})};t.Z=l},9294:function(e,t,r){"use strict";var n=r(5893);r(7294);let l=e=>{let{children:t,className:r}=e;return(0,n.jsx)("span",{className:"".concat(r," text-sm text-primary-900 dark:text-primary-50 sm:text-base xl:text-lg"),children:t})};t.Z=l},4434:function(e,t,r){"use strict";var n=r(5893);r(7294);let l=e=>{let{children:t}=e;return(0,n.jsx)("main",{className:"flex flex-col justify-center p-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 2xl:px-96",children:t})};t.Z=l},6999:function(e,t,r){"use strict";r.d(t,{d:function(){return h}});var n=r(5893),l=r(7294);r(8303);let s=e=>{let{children:t,className:s,language:i}=e,c=(0,l.useRef)(null);i&&""!==i||(i="plaintext");let o="language-".concat(i),a=(0,l.useCallback)(()=>{if(!i||!c.current)return;let e=c.current;r.e(637).then(r.bind(r,637)).then(t=>{let r=t.default;r.configure({ignoreUnescapedHTML:!0}),r.highlightElement(e)})},[c,i]);return(0,l.useEffect)(()=>{a()},[c,i,a]),(0,n.jsx)("pre",{ref:c,className:"".concat(o," ").concat(null!=s?s:""," overflow-auto rounded border-2 border-primary-900 p-4 dark:border-primary-50"),children:(0,n.jsx)("code",{children:t})})};var i=r(8684),c=r(1664),o=r.n(c);let a=e=>{let{children:t,title:r,...l}=e;return(0,n.jsx)(o(),{title:r,className:"font-bold text-accent-700 visited:text-accent-900 hover:underline dark:text-accent-400 dark:visited:text-accent-600",...l,children:t})},x=e=>(0,n.jsx)("hr",{});var d=r(2825),u=r(5392);let f=e=>{let{children:t,className:r}=e;return(0,n.jsx)("code",{className:"".concat(null!=r?r:""," items-baseline rounded bg-primary-200 p-0.5 text-sm dark:bg-primary-700 sm:p-1 sm:text-base xl:text-lg"),children:t})},h=e=>{let{article:t}=e;return(0,n.jsx)("article",{className:"flex max-w-full grow flex-col justify-self-start",children:function(e){let t=[],r=[];for(let l=0;l<e.content.length;l++){let c=e.content[l];if("object"==typeof c&&"Start"in c)t.push(r),r=[];else if("object"==typeof c&&"End"in c){let e=t.pop();if(!e)throw Error("content stack is null with end event, expected start");let o=function(e,t,r){if("Paragraph"===e)return(0,n.jsx)(d.Z,{className:"mb-4 inline",children:r},t);if("object"==typeof e&&"Heading"in e)return function(e,t,r){let[l,s,c]=e.Heading;return(0,n.jsx)(i.Z,{level:l,className:"mb-4",children:r},t)}(e,t,r);if("BlockQuote"===e)return(0,n.jsx)("blockquote",{children:r},t);if("object"==typeof e&&"CodeBlock"in e)return function(e,t,r){let l;let i=e.CodeBlock;return"object"==typeof i&&"Fenced"in i&&(l=i.Fenced),(0,n.jsx)(s,{language:l,className:"mb-4",children:r},t)}(e,t,r);if("object"==typeof e&&"List"in e)return function(e,t,r){var l;let s=null!==(l=e.List)&&void 0!==l?l:void 0;return(0,n.jsx)(u.Z,{start:s,className:"mb-4",children:r},t)}(e,t,r);if("Item"===e)return(0,n.jsx)("li",{className:"mb-2",children:r},t);if("object"==typeof e&&"FootnoteDefinition"in e)return(0,n.jsxs)("div",{id:e.FootnoteDefinition,children:[(0,n.jsx)("sup",{children:e.FootnoteDefinition}),r]},t);if("object"==typeof e&&"Table"in e)return(0,n.jsx)("table",{children:r},t);if("TableHead"===e)return(0,n.jsx)("thead",{children:r},t);if("TableRow"===e)return(0,n.jsx)("tr",{children:r},t);if("TableCell"===e)return(0,n.jsx)("td",{children:r},t);if("Emphasis"===e)return(0,n.jsx)("em",{children:r},t);if("Strong"===e)return(0,n.jsx)("strong",{children:r},t);if("Strikethrough"===e)return(0,n.jsx)("del",{children:r},t);if("object"==typeof e&&"Link"in e){let[l,s,i]=e.Link;return(0,n.jsx)(a,{href:s,title:i,children:r},t)}if("object"==typeof e&&"Image"in e){let[r,l,s]=e.Image;return(0,n.jsx)("img",{src:l,alt:s},t)}throw Error("Unrecognized tag: "+JSON.stringify(e))}(c.End,l,r);(r=e).push(o)}else if("object"==typeof c&&"Text"in c)r.push((0,n.jsx)("span",{children:c.Text},l));else if("object"==typeof c&&"Code"in c)r.push((0,n.jsx)(f,{children:c.Code},l));else if("object"==typeof c&&"Html"in c)r.push(c.Html);else if("object"==typeof c&&"FootnoteReference"in c)r.push((0,n.jsx)("sup",{children:(0,n.jsx)("a",{href:"#".concat(c.FootnoteReference),children:"event.FootnoteReference"})},l));else if("SoftBreak"===c)r.push("\r\n");else if("HardBreak"===c)r.push((0,n.jsx)("br",{},l));else if("Rule"===c)r.push((0,n.jsx)(x,{},l));else if("object"==typeof c&&"FootnoteReference"in c)r.push((0,n.jsx)("input",{type:"checkbox",checked:c.TaskListMarker}));else throw Error("Unrecognized event: "+JSON.stringify(c))}return r}(t)})}},9573:function(e,t,r){"use strict";r.r(t),r.d(t,{NotePage:function(){return d},__N_SSG:function(){return x}});var n=r(5893),l=r(9008),s=r.n(l),i=r(7294),c=r(3602),o=r(4434),a=r(6999),x=!0;let d=e=>{var t;let{article:r}=e;return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"/dev/blog - ".concat(r.title)}),(0,n.jsx)("meta",{name:"description",content:null!==(t=r.description)&&void 0!==t?t:"Developer blog"})]}),(0,n.jsx)(c.Z,{}),(0,n.jsx)(o.Z,{children:(0,n.jsx)(a.d,{article:r})})]})};t.default=d},8303:function(){}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=4812)}),_N_E=e.O()}]);
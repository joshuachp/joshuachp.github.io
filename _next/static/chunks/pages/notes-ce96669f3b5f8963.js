(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{7684:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes",function(){return r(8886)}])},3602:function(t,e,r){"use strict";r.d(e,{h:function(){return h},Z:function(){return f}});var s=r(5893);let n=t=>{let{children:e,onClick:r,className:n}=t;return(0,s.jsx)("button",{onClick:r,className:"rounded border-t-2 border-l-2 border-r-4 border-b-4  border-primary-900 px-4 py-2 text-sm font-medium text-primary-900  hover:bg-primary-100 active:translate-y-0.5 dark:border-primary-50 dark:text-primary-50 dark:hover:bg-primary-800 ".concat(null!=n?n:""),children:e})};var l=r(9294),c=r(1245),i=r(8172),a=r(7294);let x=()=>{let{theme:t,dispatch:e}=(0,a.useContext)(c.Ni),r=()=>{e(i.cw.ButtonClick)};return(0,s.jsx)(n,{onClick:r,children:(0,s.jsx)(l.Z,{className:"font-semibold",children:t.type})})};var o=r(1664),d=r.n(o),m=r(1163),u=r(8684);let h=()=>{let t=(0,m.useRouter)(),e={home:"/"===t.pathname?"underline":"",posts:t.pathname.startsWith("/posts")?"underline":"",notes:t.pathname.startsWith("/notes")?"underline":""};return(0,s.jsxs)("header",{className:"flex flex-row items-baseline justify-between gap-4 p-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 2xl:px-96",children:[(0,s.jsxs)("nav",{className:"flex flex-grow flex-row flex-wrap gap-y-4",children:[(0,s.jsx)(d(),{href:"/",title:"Home page",className:"mr-8",children:(0,s.jsx)(u.Z,{level:1,className:e.home,children:"/dev/blog"})}),(0,s.jsxs)("ul",{className:"flex flex-grow flex-row items-end justify-start gap-8",children:[(0,s.jsx)("li",{children:(0,s.jsx)(d(),{href:"/posts",title:"Posts",children:(0,s.jsx)(l.Z,{className:e.posts+" font-bold",textSizes:"text-xl md:text-2xl",children:"Posts"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(d(),{href:"/notes",title:"Notes",children:(0,s.jsx)(l.Z,{className:e.notes+" font-bold",textSizes:"text-xl md:text-2xl",children:"Notes"})})})]})]}),(0,s.jsx)("div",{children:(0,s.jsx)(x,{})})]})};var f=h},8684:function(t,e,r){"use strict";r.d(e,{X:function(){return n}});var s=r(5893);r(7294);let n=t=>{let{level:e,children:r,className:n}=t,l="".concat(null!=n?n:""," text-primary-900 dark:text-primary-50");if("H1"===e||1===e)return(0,s.jsx)("h1",{className:"".concat(l," text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"),children:r});if("H2"===e||2===e)return(0,s.jsx)("h2",{className:"".concat(l," text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"),children:r});if("H3"===e||3===e)return(0,s.jsx)("h3",{className:"".concat(l," text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"),children:r});if("H4"===e||4===e)return(0,s.jsx)("h4",{className:"".concat(l," text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl"),children:r});if("H5"===e||5===e)return(0,s.jsx)("h5",{className:"".concat(l," text-lg font-semibold tracking-tight sm:text-xl md:text-2xl"),children:r});if("H6"===e||6===e)return(0,s.jsx)("h6",{className:"".concat(l," text-base font-medium tracking-tight sm:text-lg md:text-xl"),children:r});throw Error("Unreachable")};e.Z=n},5392:function(t,e,r){"use strict";var s=r(5893);r(7294);let n=t=>{let{children:e,start:r,numbered:n,className:l}=t,c="".concat(null!=l?l:""," ml-6 text-primary-900 dark:text-primary-50 text-sm sm:text-base xl:text-lg");return n||r?(0,s.jsx)("ol",{start:r,className:"".concat(c," list-decimal"),children:e}):(0,s.jsx)("ul",{className:"".concat(c," list-disc"),children:e})};e.Z=n},9294:function(t,e,r){"use strict";var s=r(5893);r(7294);let n=t=>{let{children:e,className:r,textSizes:n}=t;return(0,s.jsx)("span",{className:"".concat(null!=n?n:"text-sm sm:text-base xl:text-lg"," text-primary-900 dark:text-primary-50 ").concat(r),children:e})};e.Z=n},6229:function(t,e,r){"use strict";var s=r(5893),n=r(8684),l=r(5392),c=r(9294),i=r(1664),a=r.n(i);r(7294);let x=t=>{let{noteList:e}=t;return(0,s.jsx)(l.Z,{children:e.map(t=>{let e;return t.description&&(e=(0,s.jsx)(c.Z,{className:"ml-2",children:t.description})),(0,s.jsx)("li",{className:"mt-4",children:(0,s.jsxs)(a(),{href:"/notes/".concat(t.key),children:[(0,s.jsx)(n.Z,{level:5,className:"inline hover:underline",children:t.date}),e]})},t.key)})})};e.Z=x},4434:function(t,e,r){"use strict";var s=r(5893);r(7294);let n=t=>{let{children:e}=t;return(0,s.jsx)("main",{className:"flex flex-col justify-center p-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 2xl:px-96",children:e})};e.Z=n},8530:function(t,e,r){"use strict";var s=r(5893),n=r(9008),l=r.n(n);let c=t=>{let{title:e,description:r,path:n}=t;return(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:"/dev/blog - ".concat(e)}),(0,s.jsx)("meta",{name:"description",content:r}),(0,s.jsx)("link",{rel:"canonical",href:"https://".concat("joshuachp.dev").concat(null!=n?n:"")})]})};e.Z=c},8886:function(t,e,r){"use strict";r.r(e),r.d(e,{Notes:function(){return o},__N_SSG:function(){return x}});var s=r(5893);r(7294);var n=r(8684),l=r(4434),c=r(6229),i=r(8530),a=r(3602),x=!0;let o=t=>{let{noteList:e}=t;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{title:"/dev/blog - Notes",description:"Notes and journal entries",path:"/notes"}),(0,s.jsx)(a.Z,{}),(0,s.jsx)(l.Z,{children:(0,s.jsxs)("section",{className:"flex grow flex-col",children:[(0,s.jsx)(n.Z,{level:2,children:"Notes"}),(0,s.jsx)(c.Z,{noteList:e})]})})]})};e.default=o}},function(t){t.O(0,[424,774,888,179],function(){return t(t.s=7684)}),_N_E=t.O()}]);
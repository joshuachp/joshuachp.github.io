(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{5794:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return s(3201)}])},5583:function(t,e,s){"use strict";s.d(e,{h:function(){return x}});var n=s(5893),l=s(1664),r=s.n(l),c=s(1163),a=(s(7294),s(8684)),i=s(9294),x=function(){var t=(0,c.useRouter)(),e={home:"/"===t.pathname?"underline":"",posts:t.pathname.startsWith("/posts")?"underline":"",notes:t.pathname.startsWith("/notes")?"underline":""};return(0,n.jsx)("header",{className:"p-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 2xl:px-96",children:(0,n.jsxs)("nav",{className:"flex flex-row",children:[(0,n.jsx)(r(),{href:"/",title:"Home page",children:(0,n.jsx)("a",{children:(0,n.jsx)(a.Z,{level:1,className:e.home,children:"/dev/blog"})})}),(0,n.jsxs)("ul",{className:"flex flex-row flex-grow items-end justify-evenly",children:[(0,n.jsx)("li",{children:(0,n.jsx)(r(),{href:"/posts",title:"Posts",children:(0,n.jsx)("a",{children:(0,n.jsx)(i.Z,{className:e.posts,children:"Posts"})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(r(),{href:"/notes",title:"Notes",children:(0,n.jsx)("a",{children:(0,n.jsx)(i.Z,{className:e.notes,children:"Notes"})})})})]})]})})};e.Z=x},8684:function(t,e,s){"use strict";s.d(e,{X:function(){return l}});var n=s(5893),l=(s(7294),function(t){var e=t.level,s=t.children,l=t.className,r="".concat(l," text-slate-900 dark:text-slate-50");if("H1"===e||1===e)return(0,n.jsx)("h1",{className:"".concat(r," text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"),children:s});if("H2"===e||2===e)return(0,n.jsx)("h2",{className:"".concat(r," text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"),children:s});if("H3"===e||3===e)return(0,n.jsx)("h3",{className:"".concat(r," text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"),children:s});if("H4"===e||4===e)return(0,n.jsx)("h4",{className:"".concat(r," text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl"),children:s});if("H5"===e||5===e)return(0,n.jsx)("h5",{className:"".concat(r," text-lg font-semibold tracking-tight sm:text-xl md:text-2xl"),children:s});if("H6"===e||6===e)return(0,n.jsx)("h6",{className:"".concat(r," text-base font-medium tracking-tight sm:text-lg md:text-xl"),children:s});throw new Error("Unreachable")});e.Z=l},5392:function(t,e,s){"use strict";var n=s(5893);s(7294);e.Z=function(t){var e=t.children,s=t.start,l=t.numbered,r=t.className,c="".concat(r," ml-6 text-slate-900 dark:text-slate-50");return l||s?(0,n.jsx)("ol",{start:s,className:"".concat(c," list-decimal"),children:e}):(0,n.jsx)("ul",{className:"".concat(c," list-disc"),children:e})}},2825:function(t,e,s){"use strict";var n=s(5893);s(7294);e.Z=function(t){var e=t.children,s=t.className;return(0,n.jsx)("p",{className:"".concat(s," text-slate-900 dark:text-slate-50 text-sm sm:text-base xl:text-lg"),children:e})}},9294:function(t,e,s){"use strict";var n=s(5893);s(7294);e.Z=function(t){var e=t.children,s=t.className;return(0,n.jsx)("span",{className:"".concat(s," text-slate-900 dark:text-slate-50 text-sm sm:text-base xl:text-lg"),children:e})}},2309:function(t,e,s){"use strict";var n=s(5893),l=s(1664),r=s.n(l),c=(s(7294),s(8684)),a=s(2825),i=s(5392),x=s(9294);e.Z=function(t){var e=t.postList;return(0,n.jsx)(i.Z,{children:e.map((function(t){return(0,n.jsx)("li",{className:"mt-4",children:(0,n.jsxs)("div",{children:[(0,n.jsx)(r(),{href:"/posts/".concat(t.key),children:(0,n.jsx)("a",{children:(0,n.jsx)(c.X,{level:5,className:"inline hover:underline",children:t.title})})}),(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(x.Z,{className:"text-neutral-600 text-xs sm:text-sm xl:text-base",children:t.date}),(0,n.jsx)(x.Z,{className:"ml-2",children:t.description})]})]})},t.key)}))})}},4434:function(t,e,s){"use strict";var n=s(5893);s(7294);e.Z=function(t){var e=t.children;return(0,n.jsx)("main",{className:"flex flex-col justify-center p-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 2xl:px-96",children:e})}},3201:function(t,e,s){"use strict";s.r(e),s.d(e,{Posts:function(){return h},__N_SSG:function(){return d}});var n=s(5893),l=s(9008),r=s.n(l),c=s(7294),a=s(5583),i=s(8684),x=s(4434),o=s(2309),d=!0,h=function(t){var e=t.postList;return(0,n.jsxs)(c.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"/dev/blog - Posts"}),(0,n.jsx)("meta",{name:"description",content:"Articles and posts"})]}),(0,n.jsx)(a.Z,{}),(0,n.jsx)(x.Z,{children:(0,n.jsxs)("section",{className:"flex flex-col grow",children:[(0,n.jsx)(i.Z,{level:2,children:"Posts"}),(0,n.jsx)(o.Z,{postList:e})]})})]})};e.default=h}},function(t){t.O(0,[424,774,888,179],(function(){return e=5794,t(t.s=e);var e}));var e=t.O();_N_E=e}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{7684:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes",function(){return n(8886)}])},5583:function(e,t,n){"use strict";n.d(t,{h:function(){return x}});var s=n(5893),l=n(1664),r=n.n(l),c=n(1163),i=(n(7294),n(8684)),a=n(9294),x=function(){var e=(0,c.useRouter)(),t={home:"/"===e.pathname?"underline":"",posts:e.pathname.startsWith("/posts")?"underline":"",notes:e.pathname.startsWith("/notes")?"underline":""};return(0,s.jsx)("header",{className:"p-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 2xl:px-96",children:(0,s.jsxs)("nav",{className:"flex flex-row",children:[(0,s.jsx)(r(),{href:"/",title:"Home page",children:(0,s.jsx)("a",{children:(0,s.jsx)(i.Z,{level:1,className:t.home,children:"/dev/blog"})})}),(0,s.jsxs)("ul",{className:"flex flex-row flex-grow items-end justify-evenly",children:[(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"/posts",title:"Posts",children:(0,s.jsx)("a",{children:(0,s.jsx)(a.Z,{className:t.posts,children:"Posts"})})})}),(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"/notes",title:"Notes",children:(0,s.jsx)("a",{children:(0,s.jsx)(a.Z,{className:t.notes,children:"Notes"})})})})]})]})})};t.Z=x},8684:function(e,t,n){"use strict";n.d(t,{X:function(){return l}});var s=n(5893),l=(n(7294),function(e){var t=e.level,n=e.children,l=e.className,r="".concat(l," text-slate-900 dark:text-slate-50");if("H1"===t||1===t)return(0,s.jsx)("h1",{className:"".concat(r," text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"),children:n});if("H2"===t||2===t)return(0,s.jsx)("h2",{className:"".concat(r," text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"),children:n});if("H3"===t||3===t)return(0,s.jsx)("h3",{className:"".concat(r," text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"),children:n});if("H4"===t||4===t)return(0,s.jsx)("h4",{className:"".concat(r," text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl"),children:n});if("H5"===t||5===t)return(0,s.jsx)("h5",{className:"".concat(r," text-lg font-semibold tracking-tight sm:text-xl md:text-2xl"),children:n});if("H6"===t||6===t)return(0,s.jsx)("h6",{className:"".concat(r," text-base font-medium tracking-tight sm:text-lg md:text-xl"),children:n});throw new Error("Unreachable")});t.Z=l},5392:function(e,t,n){"use strict";var s=n(5893);n(7294);t.Z=function(e){var t=e.children,n=e.start,l=e.numbered,r=e.className,c="".concat(r," ml-6 text-slate-900 dark:text-slate-50");return l||n?(0,s.jsx)("ol",{start:n,className:"".concat(c," list-decimal"),children:t}):(0,s.jsx)("ul",{className:"".concat(c," list-disc"),children:t})}},9294:function(e,t,n){"use strict";var s=n(5893);n(7294);t.Z=function(e){var t=e.children,n=e.className;return(0,s.jsx)("span",{className:"".concat(n," text-slate-900 dark:text-slate-50 text-sm sm:text-base xl:text-lg"),children:t})}},6229:function(e,t,n){"use strict";var s=n(5893),l=n(8684),r=n(5392),c=n(9294),i=n(1664),a=n.n(i);n(7294);t.Z=function(e){var t=e.noteList;return(0,s.jsx)(r.Z,{children:t.map((function(e){var t;return e.description&&(t=(0,s.jsx)(c.Z,{className:"ml-1",children:e.description})),(0,s.jsx)("li",{className:"mt-4",children:(0,s.jsx)("div",{children:(0,s.jsx)(a(),{href:"/notes/".concat(e.key),children:(0,s.jsxs)("a",{children:[(0,s.jsx)(l.Z,{level:5,className:"inline",children:e.date}),t]})})})},e.key)}))})}},4434:function(e,t,n){"use strict";var s=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,s.jsx)("main",{className:"flex flex-col justify-center p-6 sm:px-12 md:px-24 lg:px-48 xl:px-60 2xl:px-96",children:t})}},8886:function(e,t,n){"use strict";n.r(t),n.d(t,{Notes:function(){return h},__N_SSG:function(){return d}});var s=n(5893),l=n(9008),r=n.n(l),c=n(7294),i=n(5583),a=n(8684),x=n(4434),o=n(6229),d=!0,h=function(e){var t=e.noteList;return(0,s.jsxs)(c.Fragment,{children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:"/dev/blog - Notes"}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(i.Z,{}),(0,s.jsx)(x.Z,{children:(0,s.jsxs)("section",{className:"flex flex-col grow",children:[(0,s.jsx)(a.Z,{level:2,children:"Notes"}),(0,s.jsx)(o.Z,{noteList:t})]})})]})};t.default=h}},function(e){e.O(0,[424,774,888,179],(function(){return t=7684,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{72001:function(e,t,r){Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.t.bind(r,38599,23)),Promise.resolve().then(r.t.bind(r,14758,23)),Promise.resolve().then(r.bind(r,19721)),Promise.resolve().then(r.t.bind(r,32472,23)),Promise.resolve().then(r.bind(r,42566)),Promise.resolve().then(r.bind(r,26630)),Promise.resolve().then(r.bind(r,32592)),Promise.resolve().then(r.bind(r,77738)),Promise.resolve().then(r.bind(r,83090)),Promise.resolve().then(r.bind(r,36466)),Promise.resolve().then(r.bind(r,78645)),Promise.resolve().then(r.bind(r,60700)),Promise.resolve().then(r.bind(r,55101)),Promise.resolve().then(r.bind(r,94110)),Promise.resolve().then(r.bind(r,62541)),Promise.resolve().then(r.bind(r,37915)),Promise.resolve().then(r.t.bind(r,62946,23)),Promise.resolve().then(r.t.bind(r,19092,23)),Promise.resolve().then(r.bind(r,14392)),Promise.resolve().then(r.t.bind(r,58473,23)),Promise.resolve().then(r.t.bind(r,94043,23)),Promise.resolve().then(r.bind(r,59524)),Promise.resolve().then(r.bind(r,41449)),Promise.resolve().then(r.bind(r,89480)),Promise.resolve().then(r.bind(r,1980)),Promise.resolve().then(r.bind(r,60675)),Promise.resolve().then(r.bind(r,31355)),Promise.resolve().then(r.bind(r,33597)),Promise.resolve().then(r.bind(r,49013)),Promise.resolve().then(r.bind(r,82398))},13472:function(e,t,r){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return i}});let n=r(15355);function i(e){let{createServerReference:t}=r(97355);return t(e,n.callServer)}},41449:function(e,t,r){"use strict";r.r(t),r.d(t,{ScrollSectionsList:function(){return l}});var n=r(3827),i=r(64090),o=r(34471),s=r(28310);function l(e){let{sections:t}=e,r=i.useMemo(()=>t.map(e=>e.id),[t]),l=(0,o.y)(r,{rootMargin:"-".concat(64,"px 0px -40% 0px"),threshold:.9});return(0,n.jsx)("ul",{className:(0,s.t)("border-l","border-dark/2","dark:border-light/1","space-y-1"),children:t.map(e=>(0,n.jsx)("li",{className:(0,s.t)("flex","flex-row"),children:(0,n.jsxs)("a",{href:"#".concat(e.id),className:(0,s.t)("flex","flex-row","items-baseline","left-[-1px]","relative","text-sm","py-1","ps-3","hover:text-primary","transition-all","border-l","border-transparent",e.depth>1?["ps-6","opacity-8"]:null,l===e.id?["text-primary","border-primary","dark:text-primary-400","dark:border-primary-400","opacity-[1]","[&>span]:bg-primary-400","dark:[&>span]:bg-primary-600","dark:[&>span]:text-dark"]:""),children:[e.tag?(0,n.jsx)("span",{className:"openapi-method openapi-method-".concat(e.tag.toLowerCase()),children:e.tag}):null,e.title]})},e.id))})}},1980:function(e,t,r){"use strict";r.r(t),r.d(t,{TrackPageView:function(){return s}});var n=r(98955),i=r(64090),o=r(23531);function s(e){let{apiHost:t,spaceId:r,pageId:n}=e;return i.useEffect(()=>{a(t,r,n)},[t,r,n]),null}let l=null;async function a(e,t,r){if(r===l)return;l=r;let i=await(0,o.OP)(),s={url:window.location.href,pageId:r,visitor:{anonymousId:i,userAgent:window.navigator.userAgent,language:window.navigator.language,cookies:n.Z.get()},referrer:document.referrer},a=new URL(e);a.pathname="/v1/spaces/".concat(t,"/insights/track_view");try{await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})}catch(e){console.error("Failed to track page view",e)}}},60675:function(e,t,r){"use strict";r.r(t),r.d(t,{PageFeedbackForm:function(){return u}});var n=r(3827),i=r(27826),o=r(64090),s=r(21945),l=r(41185),a=r(23531),c=r(28310);r(15355);var d=(0,r(13472).$)("4bd1c66a9d7f1266248a90f2b9d649d5d661a8d6");function u(e){let{orientation:t="vertical",spaceId:r,pageId:u,className:f}=e,p=(0,s.ZK)(),[m,v]=o.useState(!1),x=async e=>{v(!0);let t=await(0,a.OP)();await d({spaceId:r,pageId:u,visitorId:t,rating:e})};return(0,n.jsxs)("div",{className:(0,c.t)("flex","vertical"===t?["flex-col","items-start"]:["flex-row","items-center"],"gap-2",f),children:[(0,n.jsx)("p",{className:(0,c.t)("text-sm","text-dark/6","dark:text-light/5"),children:(0,l.t)(p,"was_this_helpful")}),(0,n.jsx)("div",{className:(0,c.t)("inline-flex","items-center","justify-center","flex-row","rounded-full","straight-corners:rounded-sm","ring-1","ring-inset","ring-dark/2","h-8","dark:ring-light/1"),children:m?(0,n.jsx)("p",{className:(0,c.t)("text-sm","px-4","text-dark/7","dark:text-light/6"),children:(0,l.t)(p,"was_this_helpful_thank_you")}):(0,n.jsxs)("div",{className:(0,c.t)("inline-flex","[&>*:last-child]:rounded-r-full","[&>*:first-child]:rounded-l-full","straight-corners:[&>*:last-child]:rounded-none","straight-corners:[&>*:first-child]:rounded-none"),children:[(0,n.jsx)(h,{rating:0,label:(0,l.F)(p,"was_this_helpful_negative"),onClick:()=>x(i.t0.Bad)}),(0,n.jsx)(h,{rating:1,label:(0,l.F)(p,"was_this_helpful_neutral"),onClick:()=>x(i.t0.Ok)}),(0,n.jsx)(h,{rating:2,label:(0,l.F)(p,"was_this_helpful_positive"),onClick:()=>x(i.t0.Good)})]})})]})}function h(e){let{rating:t,label:r,onClick:i}=e,o=0===t?(0,n.jsx)(f,{}):1===t?(0,n.jsx)(p,{}):2===t?(0,n.jsx)(m,{}):null;return(0,n.jsx)("button",{className:(0,c.t)("flex","flex-col","items-center","justify-center","h-8","w-8","rounded-sm","text-dark/6","hover:bg-primary/4","hover:text-primary-600","dark:text-light/5","dark:hover:text-primary-300","dark:hover:bg-primary-300/2"),"aria-label":r,title:r,onClick:i,children:o})}let f=()=>(0,n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("circle",{cx:"9",cy:"9",r:"9",fill:"currentColor",fillOpacity:"0.24"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.66782 13.3737C4.87421 13.5572 5.19025 13.5386 5.3737 13.3322C7.30371 11.1609 10.6963 11.1609 12.6263 13.3322C12.8098 13.5386 13.1258 13.5572 13.3322 13.3737C13.5386 13.1902 13.5572 12.8742 13.3737 12.6678C11.0459 10.049 6.9541 10.049 4.6263 12.6678C4.44284 12.8742 4.46143 13.1902 4.66782 13.3737ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z",fill:"currentColor"})]}),p=()=>(0,n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("circle",{cx:"9",cy:"9",r:"9",fill:"currentColor",fillOpacity:"0.24"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H13C13.2761 11.5 13.5 11.7239 13.5 12C13.5 12.2761 13.2761 12.5 13 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z",fill:"currentColor"})]}),m=()=>(0,n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("circle",{cx:"9",cy:"9",r:"9",fill:"currentColor",fillOpacity:"0.24"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 8.25C4.58579 8.25 4.25 7.91421 4.25 7.5V6C4.25 5.58579 4.58579 5.25 5 5.25C5.41421 5.25 5.75 5.58579 5.75 6V7.5C5.75 7.91421 5.41421 8.25 5 8.25ZM4.66782 11.6263C4.87421 11.4428 5.19025 11.4614 5.3737 11.6678C7.30371 13.8391 10.6963 13.8391 12.6263 11.6678C12.8098 11.4614 13.1258 11.4428 13.3322 11.6263C13.5386 11.8098 13.5572 12.1258 13.3737 12.3322C11.0459 14.951 6.9541 14.951 4.6263 12.3322C4.44284 12.1258 4.46143 11.8098 4.66782 11.6263ZM12.25 7.5C12.25 7.91421 12.5858 8.25 13 8.25C13.4142 8.25 13.75 7.91421 13.75 7.5V6C13.75 5.58579 13.4142 5.25 13 5.25C12.5858 5.25 12.25 5.58579 12.25 6V7.5Z",fill:"currentColor"})]})},23531:function(e,t,r){"use strict";r.d(t,{Bi:function(){return u},GQ:function(){return d},OP:function(){return a}});var n=r(98955),i=r(49079);let o="__gitbook_cookie_granted",s=null,l=null;async function a(){return s||(l||(l=c().finally(()=>{l=null})),s=await l),s}async function c(){if(u())return h();let e=n.Z.get("__session");if(e)return e;{var t;let e=h(),r=new URL(null!==(t=i.env.NEXT_PUBLIC_GITBOOK_APP_URL)&&void 0!==t?t:"https://app.gitbook.com");r.pathname="/__session",r.searchParams.set("proposed",e);try{let e=await fetch(r,{method:"GET",credentials:"include",cache:"no-cache",mode:"cors"}),{deviceId:t}=await e.json();return t}catch(t){return console.error("Failed to fetch visitor session ID",t),e}}}function d(e){n.Z.set(o,e?"yes":"no")}function u(){let e=n.Z.get(o);return"yes"!==e&&("no"===e||void 0)}function h(){return"undefined"!=typeof crypto&&crypto.randomUUID?"".concat(crypto.randomUUID(),"R"):"".concat(Math.random().toString(36).substring(2),"R")}},89480:function(e,t,r){"use strict";r.r(t),t.default={src:"https://static.gitbook.com/_next/static/media/default-page-cover.a2ccd7e9.svg",height:1081,width:1920,blurWidth:0,blurHeight:0}},98955:function(e,t,r){"use strict";/*!js-cookie v3.0.5 | MIT*/function n(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}r.d(t,{Z:function(){return i}});var i=function e(t,r){function i(e,i,o){if("undefined"!=typeof document){"number"==typeof(o=n({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var l in o)o[l]&&(s+="; "+l,!0!==o[l]&&(s+="="+o[l].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+s}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],n={},i=0;i<r.length;i++){var o=r[i].split("="),s=o.slice(1).join("=");try{var l=decodeURIComponent(o[0]);if(n[l]=t.read(s,l),e===l)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){i(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[752,769,982,717,663,132,971,681,744],function(){return e(e.s=72001)}),_N_E=e.O()}]);
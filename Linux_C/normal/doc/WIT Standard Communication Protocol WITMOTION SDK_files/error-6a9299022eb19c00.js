(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{40052:function(r,t,n){Promise.resolve().then(n.bind(n,83887))},83887:function(r,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var e=n(3827),i=n(53334),o=n(64090),a=n(31355),u=n(21945),c=n(28310);function s(r){let{error:t,reset:n}=r,s=(0,u.ZK)();return o.useEffect(()=>{i.Tb(t)},[t]),(0,e.jsx)("div",{className:(0,c.t)("fixed","w-full","h-full","flex","items-center","justify-center","p-7"),children:(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:(0,c.t)("text-2xl","font-semibold","mb-2"),children:(0,u.t)(s,"unexpected_error_title")}),(0,e.jsx)("p",{className:(0,c.t)("text-base","mb-4"),children:(0,u.t)(s,"unexpected_error")}),(0,e.jsx)("div",{children:(0,e.jsx)(a.Button,{onClick:()=>{n()},variant:"secondary",size:"small",children:(0,u.t)(s,"unexpected_error_retry")})})]})})}},31355:function(r,t,n){"use strict";n.r(t),n.d(t,{Button:function(){return a}});var e=n(3827),i=n(8792),o=n(28310);function a(r){let{href:t,onClick:n,children:a,variant:u="primary",size:c="default",className:s}=r,l=(0,o.t)("rounded-md","straight-corners:rounded-none","place-self-start","ring-1","ring-inset","grow-0","shrink-0","primary"===u?["bg-primary-600","text-white","ring-dark/2","hover:bg-primary-500","dark:ring-light/3","dark:bg-primary-600","dark:hover:bg-primary-700"]:["bg-dark/2","ring-dark/1","hover:bg-dark/3","dark:bg-light/2","dark:ring-light/1","dark:hover:bg-light/3"],"default"===c?["text-base","px-4","py-2"]:["text-xs","px-3 py-2"],s);return t?(0,e.jsx)(i.default,{href:t,className:l,children:a}):(0,e.jsx)("button",{onClick:n,className:l,children:a})}},21945:function(r,t,n){"use strict";n.d(t,{Ff:function(){return i.F},Xg:function(){return o},ZK:function(){return a},t:function(){return i.t}});var e=n(64090),i=n(41185);let o=e.createContext(null);function a(){let r=e.useContext(o);if(!r)throw Error("The hook useLanguage should be wrapped in a <TranslateContext>");return r}},41185:function(r,t,n){"use strict";n.d(t,{F:function(){return a},t:function(){return o}});var e=n(3827),i=n(64090);function o(r,t){for(var n=arguments.length,o=Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];let u=r[t];if(!u)throw Error('Translation not found for "'.concat(t,'"'));let c=[],s=u;return(o.forEach((r,t)=>{if("string"==typeof r)s=s.replace("${".concat(t+1,"}"),r);else{let[n,o]=s.split("${".concat(t+1,"}"));c.push((0,e.jsx)(i.Fragment,{children:n},"string-".concat(t))),c.push((0,e.jsx)(i.Fragment,{children:r},"arg-".concat(t))),s=o}}),c.length)?(0,e.jsxs)(e.Fragment,{children:[c,s]}):s}function a(r,t){for(var n=arguments.length,e=Array(n>2?n-2:0),i=2;i<n;i++)e[i-2]=arguments[i];return function r(t){if("string"==typeof t||"number"==typeof t||"boolean"==typeof t)return"".concat(t);if(null==t)return"";if(Array.isArray(t))return t.map(r).join("");if("props"in t)return t.props.children.map(r).join("");throw Error("Unsupported type ".concat(typeof t))}(o(r,t,...e))}},28310:function(r,t,n){"use strict";n.d(t,{t:function(){return i}});var e=n(51367);function i(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return(0,e.m6)(...t)}}},function(r){r.O(0,[769,971,681,744],function(){return r(r.s=40052)}),_N_E=r.O()}]);
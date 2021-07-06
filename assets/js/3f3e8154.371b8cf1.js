(self.webpackChunkbooster_js_org=self.webpackChunkbooster_js_org||[]).push([[564],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},429:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={},p="Upstream",s={unversionedId:"configuration/upstream",id:"configuration/upstream",isDocsHomePage:!1,title:"Upstream",description:"- domain: The domain name of the upstream server.",source:"@site/docs/configuration/01-upstream.md",sourceDirName:"configuration",slug:"/configuration/upstream",permalink:"/configuration/upstream",editUrl:"https://github.com/booster-labs/booster.js.org/edit/master/docs/configuration/01-upstream.md",version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/examples"},next:{title:"Cross-Origin Resource Sharing",permalink:"/configuration/cors"}},u=[],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upstream"},"Upstream"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domain"),": The domain name of the upstream server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"protocol"),": The protocol scheme of the upstream server. (optional, defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"'https'"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port"),": The port of the upstream server. (optional, defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"80")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"443")," based on ",(0,a.kt)("inlineCode",{parentName:"li"},"protocol"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path"),": The path of the upstream server. (optional, defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"'\\'"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout"),": The maximum wait time on a request to the upstream server. (optional, defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"10000"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const config = {\n  upstream: {\n    domain: 'httpbin.org',\n    protocol: 'https',\n    port: 443,\n    path: '/',\n    timeout: 10000,\n  },\n  /* ... */\n};\n")),(0,a.kt)("p",null,"To load balance HTTP traffic to a group of servers, pass an array of server configurations to ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream"),". Each request will be forwarded to a randomly selected server. Other load balancing algorithms will be implemented in the future."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const config = {\n  upstream: [\n    {\n      domain: 's1.example.com',\n      protocol: 'https',\n    },\n    {\n      domain: 's2.example.com',\n      protocol: 'https',\n    },\n    {\n      domain: 's3.example.com',\n      protocol: 'https',\n    },\n  ],\n  /* ... */\n};\n")))}m.isMDXComponent=!0}}]);
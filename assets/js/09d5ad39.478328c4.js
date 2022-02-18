"use strict";(self.webpackChunkreflare_js_org=self.webpackChunkreflare_js_org||[]).push([[30],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(f,s(s({ref:r},i),{},{components:t})):n.createElement(f,s({ref:r},i))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4381:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return i},default:function(){return m}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],p={sidebar_position:3},c="\ud83d\udcd4 Examples",l={unversionedId:"examples",id:"examples",title:"\ud83d\udcd4 Examples",description:"MDN Web Docs Mirror",source:"@site/docs/examples.md",sourceDirName:".",slug:"/examples",permalink:"/examples",editUrl:"https://github.com/xiaoyang-sde/booster.js.org/edit/master/docs/examples.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce6 Build and Deploy",permalink:"/deploy"},next:{title:"Routing",permalink:"/options/routing"}},i=[{value:"MDN Web Docs Mirror",id:"mdn-web-docs-mirror",children:[],level:2},{value:"WebSocket Proxy",id:"websocket-proxy",children:[],level:2},{value:"S3 Bucket with custom response headers",id:"s3-bucket-with-custom-response-headers",children:[],level:2}],u={toc:i};function m(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-examples"},"\ud83d\udcd4 Examples"),(0,a.kt)("h2",{id:"mdn-web-docs-mirror"},"MDN Web Docs Mirror"),(0,a.kt)("p",null,"Set up a reverse proxy for ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org"},"MDN Web Docs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  path: '/*',\n  upstream: {\n    domain: 'developer.mozilla.org',\n    protocol: 'https',\n  },\n}\n")),(0,a.kt)("h2",{id:"websocket-proxy"},"WebSocket Proxy"),(0,a.kt)("p",null,"Reflare could proxy WebSocket traffic to upstream services. Set up a reverse proxy for ",(0,a.kt)("a",{parentName:"p",href:"wss://echo.websocket.org"},"wss://echo.websocket.org"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  path: '/*',\n  upstream: {\n    domain: 'echo.websocket.org',\n    protocol: 'https',\n  },\n}\n")),(0,a.kt)("h2",{id:"s3-bucket-with-custom-response-headers"},"S3 Bucket with custom response headers"),(0,a.kt)("p",null,"Reflare could set custom headers to request and response. Set up a reverse proxy for ",(0,a.kt)("a",{parentName:"p",href:"https://example.s3.amazonaws.com"},"https://example.s3.amazonaws.com"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  path: '/*',\n  upstream: {\n    domain: 'example.s3.amazonaws.com',\n    protocol: 'https',\n  },\n\n  headers: {\n    response: {\n      'x-response-header': 'Hello from Reflare',\n    },\n  },\n\n  cors: {\n    origin: ['https://www.example.com'],\n    methods: ['GET', 'POST'],\n    credentials: true,\n  },\n}\n")))}m.isMDXComponent=!0}}]);
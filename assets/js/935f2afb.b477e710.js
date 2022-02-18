"use strict";(self.webpackChunkreflare_js_org=self.webpackChunkreflare_js_org||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\ud83d\ude80 Reflare","href":"/","docId":"intro"},{"type":"link","label":"\ud83d\udce6 Build and Deploy","href":"/deploy","docId":"deploy"},{"type":"link","label":"\ud83d\udcd4 Examples","href":"/examples","docId":"examples"},{"type":"category","label":"\u2699\ufe0f Options","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Routing","href":"/options/routing","docId":"options/routing"},{"type":"link","label":"Upstream","href":"/options/upstream","docId":"options/upstream"},{"type":"link","label":"load-balancing","href":"/options/load-balancing","docId":"options/load-balancing"},{"type":"link","label":"Firewall","href":"/options/firewall","docId":"options/firewall"},{"type":"link","label":"Headers","href":"/options/headers","docId":"options/headers"},{"type":"link","label":"Cross-Origin Resource Sharing (CORS)","href":"/options/cors","docId":"options/cors"},{"type":"link","label":"Optimization","href":"/options/optimization","docId":"options/optimization"}]},{"type":"link","label":"\ud83d\udef3\ufe0f Dynamic Route Definition (Experimental)","href":"/dynamic-routing","docId":"dynamic-routing"},{"type":"link","label":"\ud83c\udf0e Contributing","href":"/contributing","docId":"contributing"}]},"docs":{"contributing":{"id":"contributing","title":"\ud83c\udf0e Contributing","description":"- Request a feature: Create an issue with the Feature request template.","sidebar":"tutorialSidebar"},"deploy":{"id":"deploy","title":"\ud83d\udce6 Build and Deploy","description":"Start with reflare-template","sidebar":"tutorialSidebar"},"dynamic-routing":{"id":"dynamic-routing","title":"\ud83d\udef3\ufe0f Dynamic Route Definition (Experimental)","description":"Reflare could load the route definitions from Workers KV. Set the provider to kv and namespace to a Workers KV namespace (e.g. REFLARE) that binds to the current Worker. Reflare fetches the route definitions from namespace and handles each incoming request with the latest route definitions.","sidebar":"tutorialSidebar"},"examples":{"id":"examples","title":"\ud83d\udcd4 Examples","description":"MDN Web Docs Mirror","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"\ud83d\ude80 Reflare","description":"Header","sidebar":"tutorialSidebar"},"options/cors":{"id":"options/cors","title":"Cross-Origin Resource Sharing (CORS)","description":"- origin: Configures the Access-Control-Allow-Origin CORS header. (optional, defaults to false)","sidebar":"tutorialSidebar"},"options/firewall":{"id":"options/firewall","title":"Firewall","description":"Each incoming request is inspected against the firewall rules defined in the firewall property of the options object. The request will be blocked if it matches at least one firewall rule.","sidebar":"tutorialSidebar"},"options/headers":{"id":"options/headers","title":"Headers","description":"- request: Sets request header going upstream to the backend. Accepts an object. (optional, defaults to {})","sidebar":"tutorialSidebar"},"options/load-balancing":{"id":"options/load-balancing","title":"load-balancing","description":"To load balance HTTP traffic to a group of servers, pass an array of server configurations to upstream. The load balancer will forward the request to an upstream server based on the loadBalancing.policy option.","sidebar":"tutorialSidebar"},"options/optimization":{"id":"options/optimization","title":"Optimization","description":"Cloudflare Workers provides several optimization by default.","sidebar":"tutorialSidebar"},"options/routing":{"id":"options/routing","title":"Routing","description":"Reflare implements express-like route matching. Reflare matches the path and HTTP method of each incoming request with the list of route definitions and forwards the request to the first matched route.","sidebar":"tutorialSidebar"},"options/upstream":{"id":"options/upstream","title":"Upstream","description":"- domain: The domain name of the upstream server","sidebar":"tutorialSidebar"}}}')}}]);
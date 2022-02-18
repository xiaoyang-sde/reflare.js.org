---
sidebar_position: 5
---
# 🛳️ Dynamic Route Definition (Experimental)

Reflare could load the route definitions from Workers KV. Set the `provider` to `kv` and `namespace` to a Workers KV namespace (e.g. `REFLARE`) that binds to the current Worker. Reflare fetches the route definitions from `namespace` and handles each incoming request with the latest route definitions.

```ts
import useReflare from 'reflare';

declare const REFLARE: KVNamespace;

const handleRequest = async (
  request: Request,
): Promise<Response> => {
  const reflare = await useReflare({
    provider: 'kv',
    namespace: REFLARE,
  });
  return reflare.handle(request);
};

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
```

The route definitions should be stored as a JSON array in the `route-list` key of `namespace`. The KV namespace could be modified with [`wrangler`](https://developers.cloudflare.com/workers/cli-wrangler/commands#kvkey) or [Cloudflare API](https://api.cloudflare.com/#workers-kv-namespace-write-key-value-pair). The Reflare dashboard for route management is under development and will be released soon.

```console
wrangler kv:key put --binding=[namespace] 'route-list' '[{"path":"/*","upstream":{"domain":"httpbin.org","protocol":"https"}}]'
```
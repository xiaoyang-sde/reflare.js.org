---
sidebar_position: 2
---

# 📦 Build and Deploy

## Start with `reflare-template`

[Install `wrangler` CLI](https://github.com/cloudflare/wrangler#installation) and authorize `wrangler` with Cloudflare account.

```console
npm install -g @cloudflare/wrangler
wrangler login
```

Generate a new project from [reflare-template](https://github.com/xiaoyang-sde/reflare-template) and install the dependencies.

```console
wrangler generate reflare-app https://github.com/xiaoyang-sde/reflare-template
cd reflare-app
npm install
```

Edit or add route definitions in `src/index.ts`. Please read the examples and route definition section below for more details.

- Run `npm run dev` to preview Reflare with local development server provided by [Miniflare](https://miniflare.dev).
- Run `npm run deploy` to publish Reflare on Cloudflare Workers.

## Integrate with existing project

Install the `reflare` package.

```console
npm install reflare
```

Import `useReflare` from `reflare`. `useReflare` accepts an object of options.

- `provider`: The location of the list of route definitions. (optional, defaults to `static`)
  - `static`: Reflare loads the route definitions from `routeList`.
  - `kv`: Reflare loads the route definitions from [Workers KV](https://developers.cloudflare.com/workers/learning/how-kv-works). (Experimental)
- `routeList`: The initial list of route definitions. (optional, defaults to `[]`, **ignored if `provider` is not `static`**)
- `namespace`: The Workers KV namespace that stores the list of route definitions. (**required if `provider` is `kv`**)

`useReflare` returns an object with the `handle` method and `push` method.

- The `handle` method takes the inbound [Request](https://developers.cloudflare.com/workers/runtime-apis/request) to the Worker and returns the [Response](https://developers.cloudflare.com/workers/runtime-apis/request) fetched from the upstream service.
- The `push` method takes a route and appends it to `routeList`.

```ts
import useReflare from 'reflare';

const handleRequest = async (
  request: Request,
): Promise<Response> => {
  const reflare = await useReflare();

  reflare.push({
    path: '/*',
    upstream: {
      domain: 'httpbin.org',
      protocol: 'https',
    },
  });

  return reflare.handle(request);
};

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});
```

Edit the route definition to change the behavior of Reflare. For example, the route definition below let Reflare add the `Access-Control-Allow-Origin: *` header to each response from the upstream service.

```ts
{
  path: '/*',
  upstream: {
    domain: 'httpbin.org',
    protocol: 'https',
  },
  cors: {
    origin: '*',
  },
}
```

- Build and publish to Cloudflare Workers

```sh
wrangler build
wrangler publish
```

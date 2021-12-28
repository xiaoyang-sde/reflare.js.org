---
sidebar_position: 2
---

# 📦 Build and Deploy

## Start with templates

- [Install Wrangler CLI](https://github.com/cloudflare/wrangler#installation) and generate a project from the [rocket-booster-template](https://github.com/xiaoyang-sde/rocket-booster-template)

```sh
npm install -g @cloudflare/wrangler

wrangler generate booster-app https://github.com/xiaoyang-sde/rocket-booster-template
```

- Install dependencies and edit the options in `src/index.ts`

```sh
cd booster-app

npm install
```

- Login and publish to Cloudflare Workers

```sh
wrangler login

wrangler publish
```

## Integrate with existing project

- Install the `rocket-booster` package

```console
npm install --save rocket-booster
```

- Import the `useProxy` function from `rocket-booster`. The function returns an object with the `use()` method, which maps route patterns to configuration objects, and `apply()` method, which takes the inbound [Request](https://developers.cloudflare.com/workers/runtime-apis/request) to the Worker, and returns the [Response](https://developers.cloudflare.com/workers/runtime-apis/request) fetched from the upstream service.

```ts
import useProxy from 'rocket-booster';

addEventListener('fetch', (event) => {
  const proxy = useProxy();
  proxy.use('/', {
    upstream: {
      domain:  'example.com',
      protocol: 'https',
    },
  });

  const response = proxy.apply(event.request);
  event.respondWith(response);
});
```

- Edit the options object to change the request and response. For example, the options below will add the header `Access-Control-Allow-Origin: *` to each response from the upstream service, which allows any origin to access the service.

```ts
proxy.use('/', {
  upstream: {
    domain:  'example.com',
    protocol: 'https',
  },
  cors: {
    origin: '*',
  },
});
```

- Build and publish to Cloudflare Workers

```sh
wrangler build
wrangler publish
```

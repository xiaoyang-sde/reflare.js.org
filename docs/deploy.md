---
sidebar_position: 2
---

# Build and Deploy

## Integrate with existing project

- Install the `rocket-booster` package

```sh
npm install --save rocket-booster
```

- Import the `useProxy` function from `rocket-booster` and invoke it with a configuration object. The function returns an object with an `apply()` method, which takes an inbound [Request](https://developers.cloudflare.com/workers/runtime-apis/request) to the Worker, and returns the [Response](https://developers.cloudflare.com/workers/runtime-apis/request) fetched from the upstream server.

```ts
import useProxy from 'rocket-booster';

// Create a reverse proxy for 'https://example.com'
const config = {
  upstream: {
    domain:  'example.com',
    protocol: 'https',
  },
};

addEventListener('fetch', (event) => {
  const proxy = useProxy(config);
  const response = proxy.apply(event.request);
  event.respondWith(response);
});
```

- Edit the configuration object to change the request and response. For example, the configuration below will add the header `Access-Control-Allow-Origin: *` to each response from the upstream server, which allows any origin to access the server.

```ts
// Create a reverse proxy for 'https://example.com'
const config = {
  upstream: {
    domain:  'example.com',
    protocol: 'https',
  },
  cors: {
    // Set the 'Access-Control-Allow-Origin' CORS header to '*'.
    origin: '*',
  },
};
```

- Build and publish to Cloudflare Workers

```sh
wrangler build
wrangler publish
```

## Start from scratch

- [Install Wrangler CLI](https://github.com/cloudflare/wrangler#installation)

```sh
npm install -g @cloudflare/wrangler
```

- Generate from [rocket-booster-template](https://github.com/booster-labs/rocket-booster-template)

```sh
wrangler generate booster https://github.com/booster-labs/rocket-booster-template
```

- Install dependencies

```sh
cd booster
npm install
```

- Authenticate Wrangler with a Cloudflare API Token

```sh
wrangler login
wrangler config
```

- Edit the configuration object in `src/index.js`

- Build and publish to Cloudflare Workers

```sh
wrangler build
wrangler publish
```

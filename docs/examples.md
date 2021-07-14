---
sidebar_position: 3
---

# 📔 Examples

## Live Examples

### MDN Web Docs Mirror

```ts
// Create a reverse proxy for 'https://developer.mozilla.org'
const config = {
  upstream: {
    domain: 'developer.mozilla.org',
    protocol: 'https',
  },
};
```

[Live Demo](https://mozilla.readme.workers.dev/)

### DogeCoin Mirror

```ts
// Create a reverse proxy for 'https://dogecoin.com/'
const config = {
  upstream: {
    domain: 'dogecoin.com',
    protocol: 'https',
  },
};
```

[Live Demo](https://dogecoin.cornell.workers.dev/)

### Wikipedia Mirror

```ts
// Create a reverse proxy for 'https://en.wikipedia.org/'
const config = {
  upstream: {
    domain: 'https://en.wikipedia.org/',
    protocol: 'https',
  },
};
```

[Live Demo](https://template.lhhniubility.workers.dev/)

## And More...

### WebSocket Proxy

`rocket-booster` could proxy WebSocket traffic to upstream servers. No additional configuration is required.

```ts
// Create a reverse proxy for 'wss://echo.websocket.org'
const config = {
  upstream: {
    domain: 'echo.websocket.org',
    protocol: 'https',
  },
};
```
### S3 Bucket with custom response behavior

`rocket-booster` could set custom headers to request and response, add CORS header, or deliver custom error responses. Set up a reverse proxy for [https://example.s3.amazonaws.com](https://example.s3.amazonaws.com):

```ts
const config = {
  upstream: {
    domain: 'example.s3.amazonaws.com',
    protocol: 'https',
  },

  header: {
    response: {
      'x-response-header': 'Hello from rocket-booster',
    },
  },

  cors: {
    origin: ['https://www.example.com'],
    methods: ['GET', 'POST'],
    credentials: true,
  },

  error: [{
    errorCode: 404,
    responsePath: '/404.html',
  }],
};
```

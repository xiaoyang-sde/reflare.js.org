---
sidebar_position: 3
---
# 📔 Examples

## MDN Web Docs Mirror

Set up a reverse proxy for [https://developer.mozilla.org](https://developer.mozilla.org):

```ts
proxy.use('/', {
  upstream: {
    domain: 'developer.mozilla.org',
    protocol: 'https',
  },
});
```

[Live Demo](https://mozilla.readme.workers.dev/)

## WebSocket Proxy

`rocket-booster` could proxy WebSocket traffic to upstream services. Set up a reverse proxy for [wss://echo.websocket.org](wss://echo.websocket.org):

```ts
proxy.use('/', {
  upstream: {
    domain: 'echo.websocket.org',
    protocol: 'https',
  },
});
```

## S3 Bucket with custom response behavior

`rocket-booster` could set custom headers to request and response, add CORS header, or add basic authentication. Set up a reverse proxy for [https://example.s3.amazonaws.com](https://example.s3.amazonaws.com):

```ts
proxy.use('/', {
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
});
```

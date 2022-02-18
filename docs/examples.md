---
sidebar_position: 3
---
# 📔 Examples

## MDN Web Docs Mirror

Set up a reverse proxy for [MDN Web Docs](https://developer.mozilla.org):

```ts
{
  path: '/*',
  upstream: {
    domain: 'developer.mozilla.org',
    protocol: 'https',
  },
}
```

## WebSocket Proxy

Reflare could proxy WebSocket traffic to upstream services. Set up a reverse proxy for [wss://echo.websocket.org](wss://echo.websocket.org):

```ts
{
  path: '/*',
  upstream: {
    domain: 'echo.websocket.org',
    protocol: 'https',
  },
}
```

## S3 Bucket with custom response headers

Reflare could set custom headers to request and response. Set up a reverse proxy for [https://example.s3.amazonaws.com](https://example.s3.amazonaws.com):

```ts
{
  path: '/*',
  upstream: {
    domain: 'example.s3.amazonaws.com',
    protocol: 'https',
  },

  headers: {
    response: {
      'x-response-header': 'Hello from Reflare',
    },
  },

  cors: {
    origin: ['https://www.example.com'],
    methods: ['GET', 'POST'],
    credentials: true,
  },
}
```
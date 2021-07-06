---
sidebar_position: 3
---

# Examples

## MDN Web Docs Mirror

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

## WebSocket Proxy

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

---
sidebar_position: 3
---

# Examples

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

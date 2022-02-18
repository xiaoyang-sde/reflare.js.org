# Upstream

- `domain`: The domain name of the upstream server
- `protocol`: The protocol scheme of the upstream server (optional, defaults to `'https'`)
- `port`: The port of the upstream server (optional, defaults to `80` or `443` based on `protocol`)
- `timeout`: The maximum wait time on a request to the upstream server (optional, defaults to `10000`)
- `weight`: The weight of the server that will be accounted as part of the load balancing decision (optional, defaults to `1`)

```ts
reflare.push({
  path: '/*',
  upstream: {
    domain: 'httpbin.org',
    protocol: 'https',
    port: 443,
    timeout: 10000,
    weight: 1,
  },
  /* ... */
});
```
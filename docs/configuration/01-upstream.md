# Upstream

- `domain`: The domain name of the upstream server.
- `protocol`: The protocol scheme of the upstream server. (optional, defaults to `'https'`)
- `port`: The port of the upstream server. (optional, defaults to `80` or `443` based on `protocol`)
- `path`: The path of the upstream server. (optional, defaults to `'\'`)
- `timeout`: The maximum wait time on a request to the upstream server. (optional, defaults to `10000`)

```ts
const config = {
  upstream: {
    domain: 'httpbin.org',
    protocol: 'https',
    port: 443,
    path: '/',
    timeout: 10000,
  },
  /* ... */
};
```

To load balance HTTP traffic to a group of servers, pass an array of server configurations to `upstream`. Each request will be forwarded to a randomly selected server. Other load balancing algorithms will be implemented in the future.

```ts
const config = {
  upstream: [
    {
      domain: 's1.example.com',
      protocol: 'https',
    },
    {
      domain: 's2.example.com',
      protocol: 'https',
    },
    {
      domain: 's3.example.com',
      protocol: 'https',
    },
  ],
  /* ... */
};
```

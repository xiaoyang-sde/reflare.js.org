To load balance HTTP traffic to a group of servers, pass an array of server configurations to `upstream`. The load balancer will forward the request to an upstream server based on the `loadBalancing.policy` option.

- `random`: The load balancer will select a random upstream server from the server group. The optional `weight` parameter in the server configuration could influence the load balancing algorithm.
- `ip-hash`: The client's IP address is used as a hashing key to select the upstream server from the server group. It ensures that the requests from the same client will always be directed to the same server.

```ts
reflare.push({
  path: '/*',
  loadBalancing: {
    policy: 'random',
  },
  upstream: [
    {
      domain: 's1.example.com',
      protocol: 'https',
      weight: 20,
    },
    {
      domain: 's2.example.com',
      protocol: 'https',
      weight: 30,
    },
    {
      domain: 's3.example.com',
      protocol: 'https',
      weight: 50,
    },
  ],
  /* ... */
});
```

# Routing

The `proxy` object provides a `use` function that maps URL patterns to different options. The options object has an optional `methods` property that accepts a list of HTTP methods, which specifies the request methods the route will handle.

```ts
// Matches all requests
proxy.use('/', { /* ... */ });

// Matches GET and POST requests with path starting with `/api`
proxy.use('/api', {
  methods: ['GET', 'POST'],
});

// Matches GET requests with path ending with `.json` in `/data`
proxy.use('/data/*.json', {
  methods: ['GET'],
});
```

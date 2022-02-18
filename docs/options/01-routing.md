# Routing

Reflare implements express-like route matching. Reflare matches the path and HTTP method of each incoming request with the list of route definitions and forwards the request to the first matched route.

- `path`: The path that matches the route
- `methods`: The list of HTTP methods that matches the route

```ts
// Matches all requests
reflare.push({
  path: '/*',
  /* ... */
});

// Matches GET and POST requests with path `/api`
reflare.push({
  path: '/api',
  methods: ['GET', 'POST'],
});

// Matches GET requests with path ending with `.json` in `/data`
reflare.push({
  path: '/data/*.json',
  methods: ['GET'],
});
```

# Rewrite

- `location`: Rewrite the `location` header for responses with 3xx or 201 status if exists. (optional, defaults to `false`)

```ts
proxy.use('/', {
  /* ... */
  rewrite: {
    path: {
      '/api/user': '/user'
    },
  },
});
```

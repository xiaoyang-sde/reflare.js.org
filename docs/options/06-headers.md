# Headers

- `request`: Sets request header going upstream to the backend. Accepts an object. (optional, defaults to `{}`)
- `response`: Sets response header coming downstream to the client. Accepts an object. (optional, defaults to `{}`)

```ts
proxy.use('/', {
  /* ... */
  headers: {
    request: {
      'x-example-header': 'hello server',
    },
    response: {
      'x-example-header': 'hello client',
    },
  },
});
```

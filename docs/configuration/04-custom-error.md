# Custom Error Response

- `errorCode`: The HTTP status code to return a custom error response to the client. Excepts a valid HTTP status code or an array of valid status code.

- `responsePath`: The path and file name of the custom error page for this HTTP status code. For example: `/error-pages/403-forbidden.html`

- `responseCode`: The HTTP status code to return to the client along with the custom error page. (optional, defaults to the original error code)

```ts
const config = {
  /* ... */
  error: {
    errorCode: 404,
    responsePath: '/404.html',
  },
};
```

To customize the response of multiple error codes, pass an array of error response objects to `error`.

```ts
const config = {
  /* ... */
  error: [
    {
      errorCode: 404,
      responsePath: '/404.html',
    },
    {
      errorCode: [500, 501, 502, 503],
      responsePath: '/500.html',
      responseCode: 500,
    },
  ],
};
```

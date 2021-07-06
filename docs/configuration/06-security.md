# Security

- `forwarded`: Sets the `X-Forwarded-For`, `X-Forwarded-Host`, and `X-Forwarded-Proto` headers. (optional, defaults to `false`)
- `hidePoweredBy`: Removes the `X-Powered-By` header, which is set by default in some frameworks such as Express. (optional, defaults to `false`)
- `ieNoOpen`: Sets the `X-Download-Options` header, which is specific to Internet Explorer 8. It forces potentially-unsafe downloads to be saved, mitigating execution of HTML in the website's context. (optional, defaults to `false`)
- `xssFilter`: Sets the `X-XSS-Protection` header to `0` to disable browsers' buggy cross-site scripting filter. (optional, defaults to `false`)
- `noSniff`: Sets the `X-Content-Type-Options` header to `nosniff`. This mitigates MIME type sniffing which can cause security vulnerabilities. (optional, defaults to `false`)
- `setCookie`: Sets the `Domain` attribute of the `Set-Cookie` header to the domain of the worker.

```ts
const config = {
  /* ... */
  security: {
    fowarded: true,
    hidePoweredBy: true,
    ieNoOpen: true,
    xssFilter: true,
    noSniff: true,
    setCookie: true,
  },
};
```

# Optimization

- `minify`: Remove unnecessary characters (like whitespace, comments, etc.) from HTML, CSS, and JavaScript files. (optional, defaults to `false`)
- `mirage`: Detect screen size and connection speed to optimally deliver images for the current browser window. (optional, defaults to `false`)

```ts
const config = {
  /* ... */
  optimization: {
    mirage: true,
    minify: {
      javascript: true,
      css: true,
      html: true,
    },
  },
};
```

Several optimizations are enabled by default.

- [Brotli](https://brotli.org/): Speed up page load times for visitor’s HTTPS traffic by applying Brotli compression.
- [HTTP/2](https://developers.google.com/web/fundamentals/performance/http2): Improve page load time by connection multiplexing, header compression, and server push.
- [HTTP/3 with QUIC](https://en.wikipedia.org/wiki/HTTP/3): Accelerate HTTP requests by using QUIC, which provides encryption and performance improvements compared to TCP and TLS.
- [0-RTT Connection Resumption](https://blog.cloudflare.com/introducing-0-rtt/): Improve performance for clients who have previously connected to the website.

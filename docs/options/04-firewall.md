# Firewall

Each incoming request is inspected against the firewall rules defined in the `firewall` property of the options object. The request will be blocked if it matches at least one firewall rule.

- `field`: The property of the incoming request to be inspected
  - `asn`: The ASN number of the incoming request (`number`)
  - `ip`: The IP address of the incoming request, e.g. `1.1.1.1` (`string`)
  - `hostname`: The content of the `host` header, e.g. `github.com` (`string | undefined`)
  - `user-agent`: The content of the `user-agent` header, e.g. `Mozilla/5.0` (`string | undefined`)
  - `country`: The two-letter country code in the request, e.g. `US` (`string | undefined`)
  - `continent`: The continent of the incoming request, e.g. `NA` (`string | undefined`)
- `value`: The value of the firewall rule
- `operator`: The operator to be used to determine if the request is blocked
  - `equal`: Block the request if `field` is equal to `value`
  - `not equal`: Block the request if `field` is not equal to `value`
  - `match`: Block the request if `value` matches `field` (Expect `field` to be `string` and `value` to be `RegExp`)
  - `not match`: Block the request if `value` doesn't match `field` (Expect `field` to be `string` and `value` to be `RegExp`)
  - `in`: Block the request if `field` is in `value` (Expect `value` to be `Array`)
  - `not in`: Block the request if `field` is not in `value` (Expect `value` to be `Array`)
  - `contain`: Block the request if `field` contains `value` (Expect `field` and `value` to be `string`)
  - `not contain`: Block the request if `field` doesn't contain `value` (Expect `field` and `value` to be `string`)
  - `greater`: Block the request if `field` is greater than `value` (Expect `field` and `value` to be `number`)
  - `less`: Block the request if `field` is less than `value` (Expect `field` and `value` to be `number`)

```ts
reflare.push('/', {
  path: '/*',
  /* ... */
  firewall: [
    {
      field: 'ip',
      operator: 'in',
      value: ['1.1.1.1', '1.0.0.1'],
    },
    {
      field: 'user-agent',
      operator: 'match',
      value: /Chrome/,
    }
  ],
});
```
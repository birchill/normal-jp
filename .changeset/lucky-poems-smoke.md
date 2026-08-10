---
'@birchill/normal-jp': minor
---

Add a `maxVariants` option to `expandChoon` for bounding its output

`expandChoon` returns every combination of お-row long vowel expansion, so the
number of results — and the work done producing them — is 2^n in the number of
お-row long vowels in the input. A 40 character run of them produces over a
million strings and takes several seconds.

Callers passing arbitrary input can now cap that:

```js
expandChoon(input, { maxVariants: 16 });
```

Expansion stops once that many results have been generated, so the result is
truncated rather than complete. The default remains unlimited.

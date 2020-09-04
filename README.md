# Normal Japan

Various conversion utilities for Japanese text.

## `toNormalized`

Performs the following conversions:

* half-width katakana to full-width katakana (e.g. ｶﾞｰﾃﾞﾝ → ガーデン)
* decomposed characters to their composed equivalents
  (e.g. ダイエット → ダイエット)
* various enclosed characters into their plain form
  (e.g. ㋕ → カ)
* various combined characters into their expanded form
  (e.g. ㌀ → アパート, ㋿ → 令和)

_and_ return the mapping from positions in the output string to the input string
(using regular character indexing, not fancy codepoint indexing since the APIs
we want to use these results with don't know about about surrogate pairs).

## `katakanaToHiragana`

Converts full-width katakana characters to hiragana. It doesn't handle
half-width katakana so you should run the input through `toNormalized` first if
you want to handle that.

Note that the length of the output is equal to the length of the input so this
function does not returning the mapping from input string character offsets to
output string positions.

## Publishing

```
yarn release
git push --follow-tags origin main
yarn publish
```

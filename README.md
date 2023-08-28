# Normal Japan

Various conversion utilities for Japanese text.

## `toNormalized`

Performs the following conversions:

- half-width katakana to full-width katakana (e.g. ｶﾞｰﾃﾞﾝ → ガーデン)
- decomposed characters to their composed equivalents
  (e.g. ダイエット → ダイエット)
- various enclosed characters into their plain form
  (e.g. ㋕ → カ)
- various combined characters into their expanded form
  (e.g. ㌀ → アパート, ㋿ → 令和)
- variation selector characters are dropped
- characters encoded using radical codepoints are converted to equivalent kanji
  codepoints
  (e.g. ⽂/0x2F42 → 文/0x6587)

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

## `kyuujitaiToShinjitai`

Converts various 旧字体 (_kyuujitai_, old character forms) to 新字体 (_shinjitai_,
new character forms).

Based on the data in https://en.wikipedia.org/wiki/Kyūjitai but does not handle
_kyuujitai_ represented using variation selectors since these are stripped by
`toNormalized`.

As with `katakanaToHiragana` the length of the input and output is equal so this
function does not return the mapping between character offsets.

## `expandChoon`

Expands ー to the various vowels it may represent.

As with `katakanaToHiragana` the length of the input and output is equal so this
function does not return the mapping between character offsets.

## `moraCount`

Counts the number of mora in a hiragana/katakana string, e.g.

- `moraCount('とうきょう')` ⇒ 4
- `moraCount('いっぱい')` ⇒ 4

## `moraSubstring`

Like [`String.prototype.substring`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/substring) but takes mora indices instead, e.g.

- `moraSubstring('しゃけ', 0, 1)` ⇒ 'しゃ'
- `moraSubstring('しゃけ', 1)` ⇒ 'け'

## `halfToFullWidthNum`

Converts half-width numbers to full-width.

- `halfToFullWidthNum('第405号')` ⇒ '第４０５号'

## Publishing

```
yarn release-it
```

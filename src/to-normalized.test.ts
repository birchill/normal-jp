import { describe, expect, it } from 'vitest';

import { toNormalized } from './to-normalized.js';

describe('toNormalized', () => {
  it('converts half-width katakana to full-width', () => {
    // A typical case
    expect(toNormalized('ｶﾞｰﾃﾞﾝ')).toEqual(['ガーデン', [0, 2, 3, 5, 6]]);

    // The whole range
    expect(
      toNormalized(
        '｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ'
      )
    ).toEqual([
      '。「」、・ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン\u3099\u309a',
      // prettier-ignore
      [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 58, 59, 60, 61, 62, 63,
      ],
    ]);
  });

  it('converts decomposed characters to composed characters', () => {
    // A typical example
    expect(toNormalized('ダイエット')).toEqual([
      'ダイエット',
      [0, 2, 3, 4, 5, 6],
    ]);

    // The full range
    expect(
      toNormalized(
        '\u304b\u3099\u304d\u3099\u304f\u3099\u3051\u3099\u3053\u3099' +
          '\u3055\u3099\u3057\u3099\u3059\u3099\u305b\u3099\u305d\u3099' +
          '\u305f\u3099\u3061\u3099\u3064\u3099\u3066\u3099\u3068\u3099' +
          '\u306f\u3099\u3072\u3099\u3075\u3099\u3078\u3099\u307b\u3099' +
          '\u3046\u3099\u309d\u3099\u30ab\u3099\u30ad\u3099\u30af\u3099' +
          '\u30b1\u3099\u30b3\u3099\u30b5\u3099\u30b7\u3099\u30b9\u3099' +
          '\u30bb\u3099\u30bd\u3099\u30bf\u3099\u30c1\u3099\u30c4\u3099' +
          '\u30c6\u3099\u30c8\u3099\u30cf\u3099\u30d2\u3099\u30d5\u3099' +
          '\u30d8\u3099\u30db\u3099\u30a6\u3099\u30ef\u3099\u30f0\u3099' +
          '\u30f1\u3099\u30f2\u3099\u306f\u309a\u3072\u309a\u3075\u309a' +
          '\u3078\u309a\u307b\u309a\u30cf\u309a\u30d2\u309a\u30d5\u309a' +
          '\u30d8\u309a\u30db\u309a'
      )
    ).toEqual([
      '\u304c\u304e\u3050\u3052\u3054\u3056\u3058\u305a\u305c\u305e\u3060' +
        '\u3062\u3065\u3067\u3069\u3070\u3073\u3076\u3079\u307c\u3094\u309e' +
        '\u30ac\u30ae\u30b0\u30b2\u30b4\u30b6\u30b8\u30ba\u30bc\u30be\u30c0' +
        '\u30c2\u30c5\u30c7\u30c9\u30d0\u30d3\u30d6\u30d9\u30dc\u30f4\u30f7' +
        '\u30f8\u30f9\u30fa\u3071\u3074\u3077\u307a\u307d\u30d1\u30d4\u30d7' +
        '\u30da\u30dd',
      // prettier-ignore
      [
        0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
        36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68,
        70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100,
        102, 104, 106, 108, 110, 112, 114
      ],
    ]);
  });

  it('expands combined characters', () => {
    // A few common examples
    expect(toNormalized('㍍㍟㍿㋿')).toEqual([
      'メートル7点株式会社令和',
      [0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 4],
    ]);
    expect(toNormalized('㋈㋔㋱㋢㋣㋒')).toEqual([
      '9月オメテトウ',
      [0, 0, 1, 2, 3, 4, 5, 6],
    ]);
  });

  it('drops variation selectors', () => {
    expect(toNormalized('あ\u9038\ufe01\u798d\ufe00あ')).toEqual([
      'あ\u9038\u798dあ',
      [0, 1, 3, 5, 6],
    ]);
  });
});

import { describe, expect, it } from 'vitest';

import { kanaToKatakana } from './kana-to-katakana.js';

describe('kanaToKatakana', () => {
  it('converts hiragana', () => {
    expect(kanaToKatakana('がーでん')).toEqual('ガーデン');
    expect(kanaToKatakana('ゔゕゖ')).toEqual('ヴヵヶ');
  });

  it('converts iteration marks', () => {
    expect(kanaToKatakana('ゝゞ')).toEqual('ヽヾ');
  });

  it("does not convert hiragana which don't have katakana equivalents", () => {
    expect(kanaToKatakana('ゟ・ーか')).toEqual('ゟ・ーカ');
  });
});

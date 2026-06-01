import { describe, expect, it } from 'vitest';

import { hiraganaToKatakana } from './hiragana-to-katakana.js';

describe('hiraganaToKatakana', () => {
  it('converts hiragana', () => {
    expect(hiraganaToKatakana('がーでん')).toEqual('ガーデン');
    expect(hiraganaToKatakana('ゔゕゖ')).toEqual('ヴヵヶ');
  });

  it('converts iteration marks', () => {
    expect(hiraganaToKatakana('ゝゞ')).toEqual('ヽヾ');
  });

  it("does not convert hiragana which don't have katakana equivalents", () => {
    expect(hiraganaToKatakana('ゟ・ーか')).toEqual('ゟ・ーカ');
  });
});

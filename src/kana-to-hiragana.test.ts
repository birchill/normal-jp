import { describe, expect, it } from 'vitest';

import { kanaToHiragana } from './kana-to-hiragana';

describe('kanaToHiragana', () => {
  it('converts katakana', () => {
    expect(kanaToHiragana('ガーデン')).toEqual('がーでん');
    expect(kanaToHiragana('ヴヵヶ')).toEqual('ゔゕゖ');
  });

  it('converts iteration marks', () => {
    expect(kanaToHiragana('ヽヾ')).toEqual('ゝゞ');
  });

  it("does not convert katakana which don't have hiragana equivalents", () => {
    expect(kanaToHiragana('ヷヸヹヺ・ーア')).toEqual('ヷヸヹヺ・ーあ');
  });
});

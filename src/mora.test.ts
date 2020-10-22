import { countMora, moraSubstring } from './mora';

describe('countMora', () => {
  it('handles simple cases', () => {
    expect(countMora('しゃけ')).toEqual(2);
    expect(countMora('とうきょう')).toEqual(4);
    expect(countMora('いっぱい')).toEqual(4);
    expect(countMora('トウキョウ')).toEqual(4);
    // This is non-sense, but let's try to do something sensible
    expect(countMora('ゃや')).toEqual(2);
  });
});

describe('moraSubstring', () => {
  it('handles simple cases', () => {
    expect(moraSubstring('しゃけ', 0, 1)).toEqual('しゃ');
    expect(moraSubstring('しゃけ', -2, 1)).toEqual('しゃ');
    expect(moraSubstring('しゃけ', 0, 2)).toEqual('しゃけ');
    expect(moraSubstring('しゃけ', 0, 3)).toEqual('しゃけ');
    expect(moraSubstring('しゃけ', 0)).toEqual('しゃけ');
    expect(moraSubstring('しゃけ', -2)).toEqual('しゃけ');
    expect(moraSubstring('しゃけ', 3, 0)).toEqual('しゃけ');
    expect(moraSubstring('しゃけ', 3, 1)).toEqual('け');
    expect(moraSubstring('しゃけ', 1)).toEqual('け');
    expect(moraSubstring('しゃけ', 1, 5)).toEqual('け');
    expect(moraSubstring('しゃけ', 1, 1)).toEqual('');
    expect(moraSubstring('しゃけ', 0, 0)).toEqual('');
    expect(moraSubstring('しゃけ', 2)).toEqual('');
    expect(moraSubstring('しゃ', 1)).toEqual('');
    expect(moraSubstring('しゃ', 0, 1)).toEqual('しゃ');
    // This is non-sense, but let's try to make it match countMora
    expect(moraSubstring('ゃや', 0, 1)).toEqual('ゃ');
  });
});

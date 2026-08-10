import { describe, expect, it } from 'vitest';

import { expandChoon } from './expand-choon.js';

describe('expandChoon', () => {
  it('returns empty when nothing matches', () => {
    expect(expandChoon('ーね')).toEqual([]);
  });

  it('expands simple cases', () => {
    expect(expandChoon('ながーい')).toEqual(['ながあい']);
    expect(expandChoon('食べよー')).toEqual(['食べよう', '食べよお']);
    expect(expandChoon('オーサカ')).toEqual(['オウサカ', 'オオサカ']);
  });

  it('expands the i-row consistently for hiragana and katakana', () => {
    expect(expandChoon('ひー')).toEqual(['ひい']);
    expect(expandChoon('ヒーター')).toEqual(['ヒイタア']);
    expect(expandChoon('びー')).toEqual(['びい']);
    expect(expandChoon('ビール')).toEqual(['ビイル']);
  });

  it('expands extended cases', () => {
    expect(expandChoon('わーーーーーい')).toEqual(['わあああああい']);
  });

  it('expands all the combinations', () => {
    expect(expandChoon('食べよーーよー')).toEqual([
      '食べよううよう',
      '食べよううよお',
      '食べよおおよう',
      '食べよおおよお',
    ]);
    expect(expandChoon('トーキョー')).toEqual([
      'トウキョウ',
      'トウキョオ',
      'トオキョウ',
      'トオキョオ',
    ]);
  });

  describe('maxVariants', () => {
    it('truncates the result', () => {
      expect(expandChoon('トーキョー', { maxVariants: 2 })).toEqual([
        'トウキョウ',
        'トウキョオ',
      ]);
    });

    it('has no effect when it exceeds the number of expansions', () => {
      expect(expandChoon('トーキョー', { maxVariants: 100 })).toEqual(
        expandChoon('トーキョー')
      );
    });

    it('returns nothing for a limit of zero', () => {
      expect(expandChoon('トーキョー', { maxVariants: 0 })).toEqual([]);
    });

    it('bounds the work, not just the result', () => {
      // Unbounded this is 2^20 expansions and several seconds of work.
      const start = performance.now();
      expect(expandChoon('コー'.repeat(20), { maxVariants: 16 })).toHaveLength(
        16
      );
      expect(performance.now() - start).toBeLessThan(50);
    });
  });
});

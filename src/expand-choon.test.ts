import { describe, expect, it } from 'vitest';

import { expandChoon } from './expand-choon';

describe('expandChoon', () => {
  it('returns empty when nothing matches', () => {
    expect(expandChoon('ーね')).toEqual([]);
  });

  it('expands simple cases', () => {
    expect(expandChoon('ながーい')).toEqual(['ながあい']);
    expect(expandChoon('食べよー')).toEqual(['食べよう', '食べよお']);
    expect(expandChoon('オーサカ')).toEqual(['オウサカ', 'オオサカ']);
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
});

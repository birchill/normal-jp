import { halfToFullWidthNum } from './numbers';

describe('halfToFullWidthNum', () => {
  it('converts numbers', () => {
    expect(halfToFullWidthNum('第405号')).toEqual('第４０５号');
  });
  it('converts separators', () => {
    expect(halfToFullWidthNum('6,789')).toEqual('６，７８９');
    expect(halfToFullWidthNum('PM2.5')).toEqual('PM２．５');
  });
  it('converts minus', () => {
    expect(halfToFullWidthNum('-2.5')).toEqual('－２．５');
  });
});

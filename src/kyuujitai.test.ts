import { describe, expect, it } from 'vitest';

import { kyuujitaiToShinjitai } from './kyuujitai.js';

describe('kyuujitaiToShinjitai', () => {
  it('converts kyuujitai to shinjitai', () => {
    expect(kyuujitaiToShinjitai('街燈')).toEqual('街灯');
    expect(kyuujitaiToShinjitai('攪拌')).toEqual('撹拌');
    expect(kyuujitaiToShinjitai('隔靴搔痒')).toEqual('隔靴掻痒');
    expect(kyuujitaiToShinjitai('學校')).toEqual('学校');
    expect(kyuujitaiToShinjitai('戶')).toEqual('戸');
    expect(kyuujitaiToShinjitai('內')).toEqual('内');
  });
});

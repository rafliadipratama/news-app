import { reverseAlphaKeepNumber } from '../../algorithms/reverseAlpha';

describe('reverseAlphaKeepNumber', () => {
  it('should reverse letters and keep number at the end', () => {
    expect(reverseAlphaKeepNumber('NEGIE1')).toBe('EIGEN1');
  });
});

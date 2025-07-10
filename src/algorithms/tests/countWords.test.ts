import { countQueryWords } from '../../algorithms/countWords';

describe('countQueryWords', () => {
  it('should return count of query words in input array', () => {
    const input = ['xc', 'dz', 'bbb', 'dz'];
    const query = ['bbb', 'ac', 'dz'];
    expect(countQueryWords(input, query)).toEqual([1, 0, 2]);
  });
});

import { longestWord } from '../../algorithms/longestWord';

describe('longestWord', () => {
  it('should return the longest word in a sentence', () => {
    const sentence = 'Saya sangat senang mengerjakan soal algoritma';
    expect(longestWord(sentence)).toBe('mengerjakan');
  });
});

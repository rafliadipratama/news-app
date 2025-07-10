import { diagonalDifference } from '../../algorithms/diagonalDifference';

describe('diagonalDifference', () => {
  it('should return absolute difference of diagonals', () => {
    const matrix = [
      [1, 2, 0],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(diagonalDifference(matrix)).toBe(3);
  });
});

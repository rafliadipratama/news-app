export function diagonalDifference(matrix: number[][]): number {
  let primary = 0, secondary = 0;
  for (let i = 0; i < matrix.length; i++) {
    primary += matrix[i][i];
    secondary += matrix[i][matrix.length - i - 1];
  }
  return Math.abs(primary - secondary);
}

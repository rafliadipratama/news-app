export function reverseAlphaKeepNumber(input: string): string {
  const letters = input.replace(/[0-9]/g, '');
  const numbers = input.replace(/[^0-9]/g, '');
  return letters.split('').reverse().join('') + numbers;
}

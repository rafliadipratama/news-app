export function reverseAlphaKeepNumber(str: string): string {
  const letters = str.replace(/[0-9]/g, '');
  const numbers = str.replace(/[^0-9]/g, '');
  return letters.split('').reverse().join('') + numbers;
}

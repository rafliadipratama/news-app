export function reverseAlpha(str: string): string {
  const alpha = str.replace(/[0-9]/g, '');
  const num = str.replace(/[^0-9]/g, '');
  return alpha.split('').reverse().join('') + num;
}
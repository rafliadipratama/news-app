export function longestWord(sentence: string): string {
  return sentence
    .split(' ')
    .reduce((a, b) => (b.length > a.length ? b : a), '');
}
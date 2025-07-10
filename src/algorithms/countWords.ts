export function countQueryWords(input: string[], query: string[]): number[] {
  return query.map(q => input.filter(word => word === q).length);
}

export function fuzzySearch(query: string, list: any[]) {
  return list
    .map(item => ({
      ...item,
      score: similarity(query, item.size_name)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

function similarity(a: string, b: string) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  let matches = 0;

  for (let char of a) {
    if (b.includes(char)) matches++;
  }

  return matches / Math.max(a.length, b.length);
}

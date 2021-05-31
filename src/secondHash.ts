export const secondHash = (key: string, arrayLen: number): number => {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const val = key.charCodeAt(i) - 96;
    total = (total * WEIRD_PRIME + val) % arrayLen;
  }
  return total;
};

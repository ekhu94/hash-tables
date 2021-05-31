export const firstHash = (key: string, arrayLen: number): number => {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let val = key.charCodeAt(i) - 96;
    total = (total + val) % arrayLen;
  }
  return total;
};

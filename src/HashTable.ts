export class HashTable {
  keyMap: string[][];

  constructor(len = 53) {
    this.keyMap = new Array(len);
  }

  _hash(key: string): number {
    let idx = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let val = key.charCodeAt(i) - 96;
      idx = (idx * WEIRD_PRIME + val) % this.keyMap.length;
    }
    return idx;
  }
}

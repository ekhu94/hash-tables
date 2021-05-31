export class HashTable {
  keyMap: string[][][];

  constructor(len = 11) {
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

  set(key: string, value: string): void {
    const idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx] = [...this.keyMap[idx], [key, value]];
  }
}

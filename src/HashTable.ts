export class HashTable {
  keyMap: string[][][];

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

  set(key: string, value: string): void {
    const idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx] = [...this.keyMap[idx], [key, value]];
  }

  get(key: string): string | void {
    const idx = this._hash(key);
    if (this.keyMap[idx]) {
      const val = this.keyMap[idx].find(
        (arr: string[]): boolean => arr[0] === key
      );
      if (val) return val[1];
    }
    return undefined;
  }

  keys(): string[] {
    const output: string[] = [];
    const els = this.keyMap.filter((el: string[][] | void) => el);
    for (let el of els) {
      const keys = el.map((arr: string[]): string => arr[0]);
      output.push(...keys);
    }
    return output.filter(
      (key: string, i: number): boolean => output.indexOf(key) === i
    );
  }

  values(): string[] {
    const output: string[] = [];
    const els = this.keyMap.filter((el: string[][] | void) => el);
    for (let el of els) {
      const vals = el.map((arr: string[]): string => arr[1]);
      output.push(...vals);
    }
    return output.filter(
      (val: string, i: number): boolean => output.indexOf(val) === i
    );
  }
}

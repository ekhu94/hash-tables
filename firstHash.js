const hash = (string, arrayLen) => {
  let total = 0;
  for (let char of string) {
    total += char.charCodeAt(0) - 96;
  }
  return total % arrayLen;
};

console.log(hash('pink', 11));
console.log(hash('blue', 11));

/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {string}
 */
export function findTheDifference(s, t) {
  const hashTable = new Map();
  for (const char of t) {
    if (hashTable.has(char)) {
      const value = hashTable.get(char);
      hashTable.set(char, value + 1);
    } else {
      hashTable.set(char, 1);
    }
  }
  console.log("before >> ", hashTable);
  console.log("keys before >> ", hashTable.keys());
  for (const char of s) {
    if (hashTable.has(char)) {
      const value = hashTable.get(char);
      if (value === 1) {
        hashTable.delete(char);
      } else if (value > 1) {
        hashTable.set(char, value - 1);
      }
    }
  }
  // agak ribet juga buat dapetin key-nya
  return hashTable.keys().next().value;
}

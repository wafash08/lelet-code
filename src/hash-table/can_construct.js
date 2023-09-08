/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
export function can_construct(ransomNote, magazine) {
  const table = new Map();
  for (const char of magazine) {
    if (table.has(char)) {
      const valueOfChar = table.get(char);
      table.set(char, valueOfChar + 1);
    } else {
      table.set(char, 1);
    }
  }

  console.log("table >> ", table);
  for (const note of ransomNote) {
    const valueOfNote = table.get(note);
    console.log("valueOfNote >> ", valueOfNote);
    if (!valueOfNote) {
      // kalau value bernilai 0 atau undefined
      table.clear();
      return false;
    } else {
      // kalau value ada di table
      table.set(note, valueOfNote - 1);
      console.log("valueOfNote yang dikurangi>> ", valueOfNote);
    }
  }

  table.clear();
  console.log("table >> ", table);
  return true;
}

// console.log(can_construct("aa", "aab"));
console.log(can_construct("bb", "aab"));

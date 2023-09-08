/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {string}
 */
export function is_anagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const table = new Map();
  for (const char_s of s) {
    if (table.has(char_s)) {
      const value_of_char_s = table.get(char_s);
      table.set(char_s, value_of_char_s + 1);
    } else {
      table.set(char_s, 1);
    }
  }
  console.log("table >> ", table);
  for (const char_t of t) {
    const value_of_char_t = table.get(char_t);
    console.log("value char t >> ", value_of_char_t);
    if (!value_of_char_t) {
      table.clear();
      return false;
    } else {
      table.set(char_t, value_of_char_t - 1);
    }
  }
  table.clear();
  return true;
}

console.log(is_anagram("aacc", "ccac"));

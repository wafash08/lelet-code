/**
 *
 * @param {string} pattern
 * @param {string} s
 * @returns {boolean}
 */
export function word_pattern(pattern, s) {
  s = s.split(" ");
  if (pattern.length !== s.length) {
    return false;
  }
  console.log("splitted s >> ", s);
  const hash_table = new Map();
  let i = 0;
  while (i < pattern.length) {
    if (hash_table.has(pattern[i]) && hash_table.get(pattern[i]) !== s[i]) {
      return false;
    } else {
      hash_table.set(pattern[i], s[i]);
    }
    i++;
  }
  console.log("hash table >> ", hash_table);
  return true;
}

//Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// console.log(word_pattern("abba", "dog cat cat dog"));
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
// console.log(word_pattern("aaaa", "dog cat cat dog"));
console.log(word_pattern("abba", "dog dog dog dog")); // output: false

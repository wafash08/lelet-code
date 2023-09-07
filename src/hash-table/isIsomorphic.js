/**
 * Determine if the s and t are isomorphic
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
export function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  // bikin table untuk masing-masing string
  const tableS = new Map();
  const tableT = new Map();
  // iterasi seluruh karakter
  for (let i = 0; i < s.length; i++) {
    // ambil karakter yang sedang diiterasi dari masing2 string
    const charS = s[i];
    const charT = t[i];
    // apakah karakter sudah ada di dalam table?
    if (!tableS.has(charS) && !tableT.has(charT)) {
      // kalau belum simpan ke dalam masing2 table dan jadikan masing2 karakter sebagai key dan value
      tableS.set(charS, charT);
      tableT.set(charT, charS);
      console.log("tableS >> ", tableS);
      console.log("tableT >> ", tableT);
      // apakah karakter yang ada di table berbeda dengan karakter yang sedang diiterasi?
    } else if (tableS.get(charS) !== charT || tableS.get(charT) !== charS) {
      console.log("tableS >> ", tableS.get(charS));
      console.log("charS >> ", charS);
      console.log("tableT >> ", tableT.get(charT));
      console.log("charT >> ", charT);
      // kalau berbeda, return false
      return false;
    }
  }
  console.log("tableS >> ", tableS);
  console.log("tableT >> ", tableT);
  return true;
}

console.log(isIsomorphic("bar", "foo"));
// console.log(isIsomorphic("abc", "cde"));

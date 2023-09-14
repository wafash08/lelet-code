/**
 *
 * @param {number[]} nums
 * @return {number}
 */
export function singleNumber(nums) {
  const hashTable = new Map();

  for (const num of nums) {
    if (hashTable.has(num)) {
      const value = hashTable.get(num);
      hashTable.set(num, value + 1);
      //The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
      continue;
    }

    hashTable.set(num, 1);
  }

  console.log("hash table >> ", hashTable);
  for (const num of nums) {
    const value = hashTable.get(num);
    console.log("num >> ", num);
    console.log("value >> ", value);
    if (value === 1) {
      return num;
    }
  }

  return -1;
}

/*
Algoritma
1. iterasi nums dan simpan setiap elemen ke dalam hash table dengan elemen sebagai key dan 1 sebagai value
2. jika elemen yang sedang diiterasi sudah di dalam hash table, increment valuenya dengan 1
3. pada iterasi kedua, periksa apakah ada elemen yang memiliki value sama dengan 1
4. kalau ada, return elemen tersebut
*/

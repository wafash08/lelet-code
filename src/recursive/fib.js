/**
 *
 * @param {number} n
 * @param {object} memo
 * @returns {number}
 */
export function fib(n, memo = {}) {
  // console.log("Hello n >> ", n);
  if (n === 1 || n === 0) {
    return n;
  }
  if (memo[n] === undefined) {
    memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
  }
  console.log("memo >> ", memo);
  return memo[n];
}

/**
 *
 * @param {number} n
 * @returns {number}
 */
function fibWithLoop(n) {
  if (n === 0) {
    return 0;
  }
  let a = 0;
  let b = 1;
  for (let i = 1; i < n; i++) {
    let temp = a;
    a = b;
    b = temp + a;
    console.log("index", i);
    console.log("temp >> ", temp);
    console.log("a >> ", a);
    console.log("b >> ", b);
  }
  return b;
}

// console.log(fib(10));
console.log(fibWithLoop(5));

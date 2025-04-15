/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // TODO: Implement the function
  let res = calcPow(x, Math.abs(n))
  if (n > 0) return res;
  return 1 / res;
};

function calcPow(x, n) {
  if (x == 0) return 0
  if (n == 0) return 1
  let res = calcPow(x, Math.floor(n / 2))
  res = res * res;
  if (n % 2 == 1) {
    res = res * x;
  }
  return res;
}

// Example input
const x = 2.00000;
const n = 10;
const result = myPow(x, n);
console.log(result); // Expected output: 1024.00000

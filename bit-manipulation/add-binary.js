// bₙbₙ₋₁...b₂b₁b₀
// ->b₀ * 2⁰ + b₁ * 2¹ + b₂ * 2² + ... + bₙ * 2ⁿ

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // Your solution here
  let i = a.length - 1
  let j = b.length - 1
  let carry = 0;
  let result = ''

  while (i >= 0 || j >= 0) {
    const sum = ((+a[i] || 0) + (+b[j] || 0) + carry)
    const res = sum % 2;
    result = res + result;
    carry = Math.floor(sum / 2)
    i--;
    j--;
  }
  return carry == 1 ? '1' + result : result;

};

// Example input
// const a = "1011";
const a = "1010";
const b = "1011";

const result = addBinary(a, b);
console.log(result); // Expected: "100"

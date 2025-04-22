// Duyệt từng bit và dùng n & 1 để kiểm tra xem bit cuối là 1 hay 0.

// Dịch n sang phải (n >>>= 1) để kiểm tra tiếp bit tiếp theo.

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    count += n & 1;
    n >>>= 1; // unsigned right shift
  }
  return count;
};
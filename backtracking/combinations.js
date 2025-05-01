/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  // Hàm đệ quy backtracking
  function backtrack(start, currCombo) {
    // Nếu tổ hợp đạt kích thước k, thêm vào kết quả
    if (currCombo.length === k) {
      result.push([...currCombo]);
      return;
    }

    // Duyệt qua các phần tử từ start đến n
    for (let i = start; i <= n; i++) {
      // Thêm phần tử i vào tổ hợp hiện tại
      currCombo.push(i);
      // Gọi đệ quy với phần tử tiếp theo (i + 1) để tránh lặp
      backtrack(i + 1, currCombo);
      // Quay lui: loại bỏ phần tử i để thử lựa chọn khác
      currCombo.pop();
    }
  }
  // Bắt đầu backtracking với start = 1 và tập rỗng
  backtrack(1, []);
  return result;
};

// Example input
const n = 4;
const k = 2;
const result = combine(n, k);
console.log(result);

// Expected output:
// [
//   [2, 4],
//   [3, 4],
//   [2, 3],
//   [1, 2],
//   [1, 3],
//   [1, 4]
// ]

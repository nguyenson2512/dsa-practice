/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  // Your solution goes here
  const rows = matrix.length;
  const cols = matrix[0].length;
  let x = 0; // tọa độ cột (x)
  let y = 0; // tọa độ hàng (y)
  let dx = 1; // hướng đi theo trục x (ban đầu đi sang phải)
  let dy = 0; // hướng đi theo trục y
  const res = []; // mảng kết quả

  for (let i = 0; i < rows * cols; i++) {
    res.push(matrix[y][x]); // thêm phần tử hiện tại vào kết quả
    matrix[y][x] = ".";     // đánh dấu đã duyệt

    // kiểm tra nếu ô tiếp theo không hợp lệ hoặc đã đi qua
    const nextX = x + dx;
    const nextY = y + dy;

    if (!(0 <= nextX && nextX < cols && 0 <= nextY && nextY < rows) || matrix[nextY][nextX] === ".") {
      [dx, dy] = [-dy, dx];
    }

    // di chuyển đến ô tiếp theo
    x += dx;
    y += dy;
  }
  return res;

}

// Example input
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Function call
const result = spiralOrder(matrix);

// Output result
console.log('Result:', result); // Expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]

function isValidSudoku(board) {
  // Your solution goes here
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == '.') {
        continue
      }
      //tinh 1 diem (i,j) trong board thuoc box nao (co tat ca la 9 box)
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      //neu ton tai duplicate trong 9 sets about rows / cols / boxes
      if (rows[i].has(board[i][j]) || cols[j].has(board[i][j]) || boxes[boxIndex].has(board[i][j])) return false;

      rows[i].add(board[i][j])
      cols[j].add(board[i][j])
      boxes[boxIndex].add(board[i][j])
    }
  }
  return true
}





// Example input
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

// Function call
const result = isValidSudoku(board);

// Output result
console.log('Result:', result); // Expected: true
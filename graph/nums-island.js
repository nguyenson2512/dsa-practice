/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  // Your solution goes here
  islands = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == '1') {
        islands++;
        // dfsSearch(r, c, grid);
        // dfsSearchUsingStack(r, c, grid);
        bfsSearch(r, c, grid);
      }
    }
  }
  return islands;
}

// dfs search đẹ quy check các điểm top/down/right/left, update qua 0 khi duyệt qua island
const dfsSearch = (row, col, grid) => {
  grid[row][col] = '0';
  //down
  if (row + 1 < grid.length && grid[row + 1][col] == '1') {
    dfsSearch(row + 1, col, grid);
  }
  //top
  if (row - 1 >= 0 && grid[row - 1][col] == '1') {
    dfsSearch(row - 1, col, grid);
  }
  //right
  if (col + 1 < grid[0].length && grid[row][col + 1] == '1') {
    dfsSearch(row, col + 1, grid);
  }
  //left
  if (col - 1 >= 0 && grid[row][col - 1] == '1') {
    dfsSearch(row, col - 1, grid);
  }
};

const dfsSearchUsingStack = (row, col, grid) => {
  grid[row][col] = '0';
  const stack = [];
  //down
  if (row + 1 < grid.length && grid[row + 1][col] == '1') {
    stack.push([row + 1, col]);
  }
  //top
  if (row - 1 >= 0 && grid[row - 1][col] == '1') {
    stack.push([row - 1, col]);

  }
  //right
  if (col + 1 < grid[0].length && grid[row][col + 1] == '1') {
    stack.push([row, col + 1]);

  }
  //left
  if (col - 1 >= 0 && grid[row][col - 1] == '1') {
    stack.push([row, col - 1]);

  }

  while (stack.length) {
    dfsSearchUsingStack(...stack.pop(), grid);
  }
};

const bfsSearch = (r, c, grid) => {

  const queue = [[r, c]];
  while (queue.length) {
    const [row, col] = queue.shift();
    //down
    if (row + 1 < grid.length && grid[row + 1][col] == '1') {
      queue.push([row + 1, col]);
      grid[row + 1][col] = '0';

    }
    //top
    if (row - 1 >= 0 && grid[row - 1][col] == '1') {
      queue.push([row - 1, col]);
      grid[row - 1][col] = '0';
    }
    //right
    if (col + 1 < grid[0].length && grid[row][col + 1] == '1') {
      queue.push([row, col + 1]);
      grid[row][col + 1] = '0';
    }
    //left
    if (col - 1 >= 0 && grid[row][col - 1] == '1') {
      queue.push([row, col - 1]);
      grid[row][col - 1] = '0';
    }
  }

};

// Ví dụ input:
const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

// Function call
const result1 = numIslands(grid);

// Output result
console.log('Result1:', result1); // Expected: 1

// Một ví dụ nữa để rõ hơn:
const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
];

const result2 = numIslands(grid2);
console.log('Result2:', result2); // Expected: 3
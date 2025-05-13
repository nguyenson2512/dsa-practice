function searchMatrix(matrix, target) {
  // Your solution goes here
  const [m, n] = [matrix.length, matrix[0].length]
  let left = 0, right = m * n - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    console.log({ left, right, mid })
    const [row, col] = [Math.floor(mid / n), mid % n];
    console.log({ row, col })

    const guess = matrix[row][col];
    console.log({ guess })

    const isTarget = guess === target;
    if (isTarget) return true;

    const isTargetGreater = guess < target;
    if (isTargetGreater) left = mid + 1;

    const isTargetLess = target < guess;
    if (isTargetLess) right = mid - 1;
  }
  return false;
}

// Example input
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];
const target = 3;

// Function call
const result = searchMatrix(matrix, target);

// Output result
console.log('Result:', result); // Expected: true
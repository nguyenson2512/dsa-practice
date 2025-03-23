function climbStairs(n) {
  // Your solution goes here
  if (n == 1) return 1;
  if (n == 2) return 2
  let dp_1 = 1, dp_2 = 2;
  let i = 3, temp
  while (i <= n) {
    temp = dp_1 + dp_2;
    dp_1 = dp_2
    dp_2 = temp
    i++
  }
  return dp_2
}

// Example input
const n = 3;

// Function call
const result = climbStairs(n);

// Output result
console.log('Result:', result); // Expected: 3
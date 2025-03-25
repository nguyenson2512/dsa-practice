function tribonacci(n) {
  // Your solution goes here
  if (n == 0) return 0;
  if (n == 1 || n == 2) return 1;
  let dp_1 = 0, dp_2 = 1, dp_3 = 1, temp
  for (let i = 3; i <= n; i++) {
    temp = dp_1 + dp_2 + dp_3;
    dp_1 = dp_2
    dp_2 = dp_3
    dp_3 = temp

  }
  return dp_3
}

// Example input
const n = 25;

// Function call
const result = tribonacci(n);

// Output result
console.log('Result:', result); // Expected: 4
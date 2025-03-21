//DYNAMIC PROGRAMMING
//(optimal substructure)
//(overlapping sub problems) (EX: Fibonacci)

/* ------------------------------------------------------------------- */

// => Instead of recalculating the same subsequent problem,
//  DP stores the results of sub -problems to avoid excess calculation,
//  helping to improve significant performance.

/* ------------------------------------------------------------------- */


// Top-Down (Memoization - Recursion with Caching)
// Uses recursion to break a large problem into smaller subproblems.
// Uses an array (or object) to store computed results to avoid redundant calculations.
// When encountering a subproblem that has already been solved, simply return the stored result instead of recalculating it.

function fibonacciMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n]; // Nếu đã tính trước đó, trả về luôn

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo); // Lưu lại kết quả
  return memo[n];
}
/* ------------------------------------------------------------------- */


// Bottom-Up (Tabulation - Iterative Approach, Avoiding Recursion)
// Iterates from the smallest case to the largest.
// Uses an array to store results from the smallest subproblem up to the desired result.
// Avoids recursion by using a loop to prevent stack overflow errors.

//O(N) space complexity
function fibonacciDP(n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n]
}
console.log(fibonacciDP(10)); // 55

function fibonacciOptimized(n) {
  if (n <= 1) return n;
  let x = 0, y = 1;
  for (let i = 2; i <= n; i++) {
    let temp = x + y;
    x = y;
    y = temp;
  }
  return y
}
console.log(fibonacciOptimized(10)); // 55
function minCostClimbingStairs(cost) {
  // Your solution goes here
  const len = cost.length;
  if (len == 2) return Math.min(cost[1], cost[0]);
  const dp = []
  dp[0] = cost[0]
  dp[1] = cost[1]
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);
  }
  return Math.min(dp[len - 1], dp[len - 2])
}

// Example input
const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

// Function call
const result = minCostClimbingStairs(cost);

// Output result
console.log('Result:', result); // Expected: 6

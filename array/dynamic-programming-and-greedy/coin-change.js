/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Bottom-up (Tabulation)
var coinChange = function (coins, amount) {
  // dp[i] là số lượng coin ít nhất để tạo ra số tiền i.
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

// Example input
const coins = [1, 2, 5];
const amount = 11;
const result = coinChange(coins, amount);
console.log(result); // Expected output: 3
// Explanation: 11 = 5 + 5 + 1

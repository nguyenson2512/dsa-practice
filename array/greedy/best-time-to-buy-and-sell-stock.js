/*
Traverse from the beginning to the end of the array.
If the next number is greater than the previous one, increase the profit by the difference.
*/
function maxProfit(prices) {
  // Your solution goes here
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i]
    }
  }
  return profit;
}

// Example input
const prices = [7, 1, 5, 3, 6, 4];

// Function call
const result = maxProfit(prices);

// Output result
console.log('Result:', result); // Expected: 7

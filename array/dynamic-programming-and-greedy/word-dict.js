function wordBreak(s, wordDict) {
  // Your solution goes here
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  const set = new Set(wordDict)
  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true;
        break
      }
    }
  }
  return dp[s.length]
}

// Example input
const s = "leetcode";
const wordDict = ["leet", "code"];

// Function call
const result = wordBreak(s, wordDict);

// Output result
console.log('Result:', result); // Expected: true
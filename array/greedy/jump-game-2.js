//greedy approach
function jump(nums) {
  // currentEnd: The farthest index we can reach using the current number of jumps.
  let jumps = 0, maxReachIndex = 0, currentEnd = 0;
  // Your solution goes here
  for (let i = 0; i < nums.length - 1; i++) {
    maxReachIndex = Math.max(maxReachIndex, nums[i] + i);
    if (currentEnd == i) {
      jumps++;
      currentEnd = maxReachIndex;
    }
  }
  return jumps;
}

// Example input
// const nums = [2, 3, 1, 1, 4];
const nums = [7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3];

// Function call
const result = jump(nums);

// Output result
console.log('Result:', result); // Expected: 2

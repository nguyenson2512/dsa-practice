/*
f(0) = 1
f(1) = 2
f(2) = 3 + max(f(2-2))
f(3) = 1 + max(f(3-2), f(3-3))
-> f(n)= nums[n] + max( f(n-2), f(n-3), ..., f(0))
*/
function rob(nums) {
  // Your solution goes here
  const len = nums.length
  if (len == 1) return nums[0];

  //create an array to store max value at each index
  const maxList = new Array(len).fill(0);
  maxList[0] = nums[0]

  let result = nums[0];
  for (let i = 1; i < len; i++) {
    result = Math.max(result, nums[i] + (maxList[i - 2] || 0));
    maxList[i] = Math.max(result, maxList[i - 1]);
  }
  return result;
}

// Example input
const nums = [1, 2, 3, 4];

// Function call
const result = rob(nums);

// Output result
console.log('Result:', result); // Expected: 4
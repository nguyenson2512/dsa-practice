// giải bài toán "tổng dãy con liên tiếp lớn nhất"
function maxSubArray(nums) {
  // Your solution goes here
  let maxCurrent = nums[0]; //tổng lớn nhất kết thúc tại vị trí i.
  let maxSum = nums[0]; // tổng lớn nhất toàn cục tìm được cho đến hiện tại.

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(maxCurrent + nums[i], nums[i])
    maxSum = Math.max(maxCurrent, maxSum);
  }
  return maxSum;
}

// Example input
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Function call
const result = maxSubArray(nums);

// Output result
console.log('Result:', result); // Expected: 6


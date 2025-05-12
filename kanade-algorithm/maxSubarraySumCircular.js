/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  // TODO: Implement the solution here
  let maxCur = nums[0], maxKanadeSum = nums[0];
  let minCur = nums[0], minKanadeSum = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum += nums[i]
    maxCur = Math.max(maxCur + nums[i], nums[i]);
    maxKanadeSum = Math.max(maxKanadeSum, maxCur);
    minCur = Math.min(minCur + nums[i], nums[i]);
    minKanadeSum = Math.min(minKanadeSum, minCur);
  }

  //sum - minKanadeSum (max of circular) la gia tri can so sanh voi maxKanadeSum (max of no-circular)
  return maxKanadeSum > 0 ? Math.max(maxKanadeSum, sum - minKanadeSum) : maxKanadeSum
};

// Example input
const nums = [5, -3, 5];

// Expected output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10

const result = maxSubarraySumCircular(nums);
console.log(result); // Expected output: 10

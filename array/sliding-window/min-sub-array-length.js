/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // TODO: Implement the logic here
  let i = 0, curSum = 0, result = Infinity;
  for (let j = 0; j < nums.length; j++) {
    curSum += nums[j];
    while (curSum >= target) {
      result = Math.min(result, j - i + 1);
      curSum -= nums[i];
      i++;
    }
  }
  return result == Infinity ? 0 : result;
};

// Example input
const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
const result = minSubArrayLen(target, nums);

console.log(result); // Expected output: 2

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  // TODO: Implement the solution
  if (nums.length == 0) {
    return [];
  }
  let left = 0
  const result = []
  for (let right = 0; right < nums.length; right++) {
    if (nums[right + 1] !== nums[right] + 1) {
      result.push(left !== right ? `${nums[left]}->${nums[right]}` : `${nums[left]}`)
      left = right + 1
    }
  }
  return result;
};

// Example input
const nums = [0, 1, 2, 4, 5, 7];
const result = summaryRanges(nums);
console.log(result);
// Expected output: ["0->2", "4->5", "7"]

const nums2 = [0, 2, 3, 4, 6, 8, 9];
const result2 = summaryRanges(nums2);
console.log(result2);
// Expected output: ["0", "2->4", "6", "8->9"]

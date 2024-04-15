// https://leetcode.com/problems/sort-colors

var sortColors = function (nums) {
  let low = 0,
    high = nums.length - 1;
  for (let i = 0; i <= high; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[low]] = [nums[low], nums[i]];
      low++;
    }
    if (nums[i] === 2) {
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
      i--;
    }
  }
  return nums;
};

console.log(sortColors([2, 1, 2, 0, 0]));
// [0, 0, 1, 2, 2];

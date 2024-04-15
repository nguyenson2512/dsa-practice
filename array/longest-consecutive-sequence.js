//https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let len = 1;
      while (set.has(num + len)) {
        len++;
      }
      max = Math.max(max, len);
    }
  }
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
//4

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  // Your solution goes here
  let left = 0, right = nums.length - 1;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

// Example inputs and expected outputs:
const examples = [
  { nums: [3, 4, 5, 1, 2], expected: 1 },
  { nums: [4, 5, 6, 7, 0, 1, 2], expected: 0 },
  { nums: [11, 13, 15, 17], expected: 11 } // no rotation
];

examples.forEach(({ nums, expected }) => {
  const result = findMin(nums);
  console.log(result);
});
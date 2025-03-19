/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k %= nums.length;         // Normalize k
  if (k == 0) return;       // Early return if no rotation needed
  const t = nums.slice(-k); // Extract last k elements
  nums.splice(nums.length - k); // Remove last k elements
  nums.splice(0, 0, ...t);  // Insert t at the beginning
};

// Example input
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

// Function call
rotate(nums, k);

// Output result
console.log('Result:', nums); // Expected: [5,6,7,1,2,3,4]

var optimizeRotate = function (nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1); // Reverse toàn bộ mảng
  reverse(nums, 0, k - 1);           // Reverse k phần tử đầu
  reverse(nums, k, nums.length - 1); // Reverse phần còn lại
};

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

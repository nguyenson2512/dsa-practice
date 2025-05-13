function findPeakElement(nums) {
  // Your solution goes here
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    console.log({ mid, left, right })

    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else left = mid + 1

  }
  return left;
}

// Example input
const nums = [1, 2, 3, 1];

// Function call
const result = findPeakElement(nums);

// Output result
console.log('Result:', result); // Expected: 2 (nums[2] = 3 is a peak element)
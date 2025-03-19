function majorityElement(nums) {
  // Your solution goes here
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    count += (nums[i] === candidate) ? 1 : -1;
    if (count == 0) {
      candidate = nums[i];
      count = 1;
    }
  }
  return candidate;
}

// // Example input
const nums = [3, 2, 3, 3, 2, 2, 2, 2];

// Function call
const result = majorityElement(nums);

// Output result
console.log('Result:', result); // Expected: 2
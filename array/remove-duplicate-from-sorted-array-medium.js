function removeDuplicates(nums) {
  // Your solution goes here
  let left = 0, count = 0;
  for (let right = 1; right < nums.length; right++) {
    if (nums[left] == nums[right]) {
      count++;
    }
    if (count > 1) {
      count = 0;
      nums[right] = nums[right + 1]
    }
  }
}

// Example input
const nums = [1, 1, 1, 2, 2, 3];

// Function call
const result = removeDuplicates(nums);

// Output result and modified array
console.log('Result:', result); // Expected: 5
console.log('Modified nums:', nums); // Expected: [1,1,2,2,3,_] (underscore represents ignored values)

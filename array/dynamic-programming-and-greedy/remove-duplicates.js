function removeDuplicates(nums) {
  // Your solution goes here\
  let k = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[k - 2]) {
      nums[k] = nums[i]
      k++;
    }
  }
  return k
}

// Example input
const nums = [1, 1, 1, 2, 2, 3];

// Function call
const result = removeDuplicates(nums);

// Output result and modified array
console.log('Result:', result); // Expected: 5
console.log('Modified nums:', nums); // Expected: [1,1,2,2,3,_] (underscore represents ignored values)
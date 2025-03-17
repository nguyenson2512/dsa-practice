function removeDuplicates(nums) {
  // Your solution goes here
  let left = 0;
  for (let right = 1; right < nums.length; right++) {
    if (nums[left] != nums[right]) {
      left++;
      // const temp = nums[right];
      // nums[right] = nums[left];
      // nums[left] = temp;
      // note: no need to swap because right index is moving forward
      nums[left] = nums[right];
    }
  }
  console.log(nums)
  return left + 1;
}

// Example input
const nums = [1, 1, 2];

// Function call
const result = removeDuplicates(nums);

// Output result and modified array
console.log('Result:', result); // Expected: 2
console.log('Modified nums:', nums); // Expected: [1,2,_] (underscore represents ignored values)

//Optimized Code
var optimizedRemoveDuplicates = function (nums) {
  if (nums.length === 0) return 0; // Handle empty array case

  let left = 0; // Pointer for placing unique values

  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right]; // Move unique value forward
    }
  }

  return left + 1;
};

function threeSum(nums) {
  // Your solution goes here
  nums.sort((a, b) => a - b);
  let sum,
    result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    //check previous value is different from current value
    if (nums[i] !== nums[i - 1]) {
      let start = i + 1;
      let end = nums.length - 1;
      while (start < end) {
        sum = nums[i] + nums[start] + nums[end];
        if (sum === 0) {
          result.push([nums[i], nums[start], nums[end]]);
          // ensure the next sum is different from the current sum
          while (nums[start] === nums[start + 1]) {
            start++;
          }
          // ensure the next sum is different from the current sum
          while (nums[end] === nums[end - 1]) {
            end--;
          }
          //remove 2 pointer
          start++;
          end--;
        } else if (sum < 0) {
          start++;
        } else if (sum > 0) end--;
      }
    }
  }
  return result;
}

// Example input
const nums = [-1, 0, 1, 2, -1, -4];

// Function call
const result = threeSum(nums);

// Output result
console.log('Result:', result); // Expected: [[-1,-1,2],[-1,0,1]]
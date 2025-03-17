function removeElement(nums, val) {
  // Your solution goes here
  let count = 0, start = 0;
  const len = nums.length;
  for (let end = len - 1; end >= start;) {
    if (nums[end] === val) {
      count++;
      end--;
    } else {
      let temp = nums[end];
      nums[end] = nums[start];
      nums[start] = temp;
      start++;
    }
  }
  return len - count;
}

// Example input
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

// Function call
const result = removeElement(nums, val);

// Output result and modified array
console.log('Result:', result); // Expected: 2
console.log('Modified nums:', nums); // Expected: [2,2,_,_] (underscores represent ignored values)

//explain: uses the two-pointer technique to move all occurrences of val to the end of the array
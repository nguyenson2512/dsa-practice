function containsNearbyDuplicate(nums, k) {
  // Your solution goes here
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false
}

// Example input
const nums = [1, 0, 1, 1];
const k = 1;

// Function call
const result = containsNearbyDuplicate(nums, k);

// Output result
console.log('Result:', result); // Expected: true
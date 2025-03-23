function maxArea(height) {
  // Your solution goes here
  let left = 0, right = height.length - 1, maxArea = 0;
  while (left < right) {
    maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]))
    if (height[left] >= height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea
}

// Example input
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// Function call
const result = maxArea(height);

// Output result
console.log('Result:', result); // Expected: 49

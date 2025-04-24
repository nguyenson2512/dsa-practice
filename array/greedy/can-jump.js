/*
Greedy Approach
duyet mang tu dau den cuoi
neu gia tri maxReachIndex (max of (i + nums[i]) lon hon i thi return false) 
*/
function canJump(nums) {
  let maxReachIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReachIndex) return false
    maxReachIndex = Math.max(maxReachIndex, i + nums[i])
  }
  return true;
}

function canJumpDP(nums) {
  let finalIndex = nums.length - 1;
  for (let i = finalIndex - 1; i >= 0; i--) {
    if (i + nums[i] >= finalIndex) {
      finalIndex = i;
    }
  }
  return finalIndex == 0;
}

// Example input
const nums = [2, 3, 1, 1, 4];

// Function call
const result = canJump(nums);

// Output result
console.log('Result:', result); // Expected: true
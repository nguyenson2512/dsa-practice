
function productExceptSelf(nums) {
  // Your solution goes here
  const len = nums.length
  let result = Array(len), k = 1
  result[0] = 1
  for (let i = 1; i < len; i++) {
    result[i] = result[i - 1] * nums[i - 1]
  }
  console.log('==========', JSON.stringify(result)) //[1,1,2,6]
  // hiện mảng result đang lưu tích của các số liền trước nó
  //bên dưới sẽ đi vòng lặp từ cuối mảng về để nhân với tích của của các số liền sau nó
  for (let i = len - 2; i >= 0; i--) {
    result[i] = (nums[i + 1] * k)
    k *= nums[i + 1]
  }
  return result
}

// Example input
const nums = [1, 2, 3, 4];

// Function call
const result = productExceptSelf(nums);

// Output result
console.log('Result:', result); // Expected: [24,12,8,6]
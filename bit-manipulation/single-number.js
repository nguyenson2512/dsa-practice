/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // Your code goes here
  //XOR trả về 1 nếu hai bit khác nhau, còn nếu giống nhau thì trả về 0.
  let uniqNum = 0;
  for (let i = 0; i < nums.length; i++) {
    uniqNum = uniqNum ^ nums[i]
    console.log('uniqNum= ', uniqNum);
  }
  return uniqNum
};

const nums = [4, 1, 2, 1, 2];
const result = singleNumber(nums);
console.log(result); // Expected output: 4

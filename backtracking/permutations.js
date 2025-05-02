/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // TODO: Implement permutation logic
  const result = [];
  const len = nums.length
  const visited = new Array(len).fill(false)

  function backtrack(currCombo) {
    if (currCombo.length == len) {
      result.push([...currCombo])
      return;
    }
    for (let i = 0; i < len; i++) {
      if (visited[i]) {
        continue;
      }
      currCombo.push(nums[i])
      visited[i] = true
      console.log('before', { currCombo, visited });
      backtrack(currCombo)
      console.log('after', { currCombo, visited });

      currCombo.pop();
      visited[i] = false;
    }
  }

  backtrack([]);
  return result;
};

// Example input
const nums = [0, 1,];
// const nums = [1, 2, 3];
const result = permute(nums);

console.log(result);
// Expected output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

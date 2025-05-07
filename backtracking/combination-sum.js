/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // Your implementation here
  const result = [];

  function backtrack(index, combos, total) {
    if (total == target) {
      result.push([...combos]);
      return;
    }

    if (index >= candidates.length || total > target) {
      return;
    }

    combos.push(candidates[index]);
    // console.log(combos, '=');
    backtrack(index, combos, total + candidates[index])
    combos.pop();
    // console.log(combos);
    backtrack(index + 1, combos, total)
  }

  backtrack(0, [], 0)
  return result;
};

// Example input
const candidates = [2, 3, 6, 7];
const target = 7;

// Expected output: [[2, 2, 3], [7]]
console.log(combinationSum(candidates, target));

// https://leetcode.com/problems/top-k-frequent-elements/
var topKFrequent = function (nums, k) {
  //count appearance
  const hash = {};
  for (let num of nums) {
    hash[num] = hash[num] !== undefined ? hash[num] + 1 : 1;
  }
  let list = Object.entries(hash);
  list = list.sort((a, b) => b[1] - a[1]);
  const result = list.slice(0, k).map((item) => Number(item[0]));
  return result;
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
//[ 2, -1 ]

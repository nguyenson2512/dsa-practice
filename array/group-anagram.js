// https://leetcode.com/problems/group-anagrams/

//sort từng string để làm key, lưu các item là anagram
var groupAnagrams = function (strs) {
  const hash = {};
  for (let str of strs) {
    const chars = str.split("").sort();
    if (hash[chars]) {
      hash[chars] = [...hash[chars], str];
    } else {
      hash[chars] = [str];
    }
  }
  return Object.values(hash);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
//[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

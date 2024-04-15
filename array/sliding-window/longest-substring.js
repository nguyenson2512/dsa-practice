/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0,
    result = 0;
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash = {};
      hash[s[i]] = 1;
      left = i;
      result = Math.max(result, right - left);
    } else {
      hash[s[i]] = 1;
      right++;
      result = Math.max(result, right - left);
    }
  }
  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
//3

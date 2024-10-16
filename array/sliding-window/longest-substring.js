/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let set = new Set(), i = 0;
  for (let j = 0; j < s.length; j++) {
    while (set.has(s[j])) {
      set.delete(s[i])
      i++;
    }
    set.add(s[j])
    ans = Math.max(ans, j - i + 1);
  }
  return ans;
};

console.log(lengthOfLongestSubstring("pwwkew"));
//3
console.log(lengthOfLongestSubstring("bbbb"));
//1
console.log(lengthOfLongestSubstring("abcabcbb"));
//3
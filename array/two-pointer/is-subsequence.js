function isSubsequence(s, t) {
  // Your solution goes here
  const len = s.length;
  if (len === 0) return true

  let sIndex = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[sIndex]) {
      sIndex++;
    }
  }
  return sIndex == len
}

// Example input
const s = "abc";
const t = "ahbgdc";

// Function call
const result = isSubsequence(s, t);

// Output result
console.log('Result:', result); // Expected: true

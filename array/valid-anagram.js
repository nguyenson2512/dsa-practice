function isAnagram(s, t) {
  // Your solution goes here
  if (s.length !== t.length) return false
  const map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }
  for (let char of t) {
    const appearance = map.get(char);
    if (!appearance || appearance - 1 < 0) return false;
    map.set(char, appearance - 1)
  }
  return true
}

// Example input
const s = "anagram";
const t = "nagaram";

// Function call
const result = isAnagram(s, t);

// Output result
console.log('Result:', result); // Expected: true
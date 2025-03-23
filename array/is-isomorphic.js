function isIsomorphic(s, t) {
  // Your solution goes here
  if (s.length !== t.length) return false;
  const map1 = [], map2 = [];
  for (let i = 0; i < s.length; i++) {
    if (map1[s.charAt(i)] !== map2[t.charAt(i)]) return false;
    map1[s.charAt(i)] = i + 1;
    map2[t.charAt(i)] = i + 1;
  }

  return true;
}

// Example input
const s = "egg";
const t = "add";

// Function call
const result = isIsomorphic(s, t);

// Output result
console.log('Result:', result); // Expected: true

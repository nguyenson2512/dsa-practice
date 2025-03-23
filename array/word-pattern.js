function wordPattern(pattern, s) {
  // Your solution goes here
  const arr = s.split(' ');
  if (arr.length !== pattern.length) return false;
  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if ((map1.get(pattern[i]) && map1.get(pattern[i]) !== arr[i]) || (map2.get(arr[i]) && map2.get(arr[i]) !== pattern[i])) {
      return false;
    }
    map1.set(pattern[i], arr[i]);
    map2.set(arr[i], pattern[i]);
  }
  return true;
}

// Example input
const pattern = "abba";
const s = "dog dog dog dog";

// Function call
const result = wordPattern(pattern, s);

// Output result
console.log('Result:', result); // Expected: true
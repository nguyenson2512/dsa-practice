function reverseWords(s) {
  // Your solution goes here
  s = s.replace(/\s+/g, ' ').trim();
  return s.split(' ').reverse().join(' ')
}

// Example input
const s = "the sky is    blue";

// Function call
const result = reverseWords(s);

// Output result
console.log('Result:', result); // Expected: "blue is sky the"
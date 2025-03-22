function hIndex(citations) {
  // Your solution goes here
  citations.sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }

  }
  return h;
}

// Example input
const citations = [3, 0, 6, 1, 5];

// Function call
const result = hIndex(citations);

// Output result
console.log('Result:', result); // Expected: 3

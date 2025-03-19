function value(r) {
  if (r === 'I')
    return 1;
  if (r === 'V')
    return 5;
  if (r === 'X')
    return 10;
  if (r === 'L')
    return 50;
  if (r === 'C')
    return 100;
  if (r === 'D')
    return 500;
  if (r === 'M')
    return 1000;
  return -1;
}

function romanToInt(s) {
  // Your solution goes here
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length) {
      if (value(s[i]) < value(s[i + 1])) {
        result += (value(s[i + 1]) - value(s[i]))
        i++;
      } else {
        result += value(s[i])
      }
    } else {
      result += value(s[i])

    }

  }
  return result
}

// // Example input
const s = "IX";

// Function call
const result = romanToInt(s);

// Output result
console.log('Result:', result); // Expected: 9

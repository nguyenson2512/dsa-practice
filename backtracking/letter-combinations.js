/**
@param {string} digits
@return {string[]}

*/

var letterCombinations = function (digits) {
  if (!digits.length) {
    return [];
  }

  const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };


  const result = [];


  function backtrack(index, combos) {
    console.log({ index, combos })
    if (index == digits.length) {
      result.push(combos)
      return;
    }

    for (let letter of digitToLetters[digits[index]]) {
      backtrack(index + 1, combos + letter)
    }

  }

  backtrack(0, "");

  return result;

};

// Example input
const digits = "23";

// Function call
const result = letterCombinations(digits);

// Output the result
console.log(result); // Expected output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
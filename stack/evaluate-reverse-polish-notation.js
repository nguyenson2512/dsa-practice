/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // TODO: Implement the solution
  const stack = [];
  const operators = {
    '+': true,
    '-': true,
    '*': true,
    '/': true,
  }
  for (let item of tokens) {
    if (!operators[item]) {
      stack.push(item)
    } else {
      let num1 = +stack.pop();
      let num2 = +stack.pop();
      let result = calculate(num1, num2, item)
      stack.push(result)
    }
  }
  return +stack[0]
};

var calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num2 - num1
    case '/':
      return parseInt(num2 / num1)
    case '*':
      return num1 * num2
  }
}

// Example input
const tokens = ["2", "1", "+", "3", "*"];
// const result = evalRPN(tokens);
// console.log(result); // Expected output: 9

// Another example
const tokens2 = ["4", "13", "5", "/", "+"];
const result2 = evalRPN(tokens2);
console.log(result2); // Expected output: 6

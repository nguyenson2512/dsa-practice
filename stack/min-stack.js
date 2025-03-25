class MinStack {
  constructor() {
    this.stack = []
  }

  push(val) {
    const currMin = this.getMin()
    this.stack.push({ val, min: currMin === null ? val : currMin >= val ? val : currMin })
  }

  pop() {
    this.stack.pop()
    return null;
  }

  top() {
    const len = this.stack.length;
    if (len > 0) {
      return this.stack[len - 1].val
    } else return null
  }

  getMin() {
    const len = this.stack.length;
    if (len > 0) return this.stack[len - 1].min
    else return null
  }
}

// Example usage
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log('Min:', minStack.getMin()); // Expected: -3
minStack.pop();
console.log('Top:', minStack.top()); // Expected: 0
console.log('Min:', minStack.getMin()); // Expected: -2
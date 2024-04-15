class Stack {
  constructor(size = 20) {
    this.stack = [];
    this.capacity = size;
    this.top = -1;
  }

  push(item) {
    if (this.stack.length === this.capacity) {
      console.log("stack is full");
      return;
    }
    this.top++;
    return this.stack.push(item);
  }

  isEmpty() {
    return this.top === -1;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  get length() {
    return this.stack.length;
  }
}

const test = new Stack(10);
test.push(33);
test.push(4);
test.pop();
console.log(test);

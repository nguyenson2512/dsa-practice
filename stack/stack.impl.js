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

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class LinkedListBasedStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if(!this.top) {
      return null
    }
    const poppedValue = this.top.data
    this.top = this.top.next
    this.size--;
    return poppedValue
  }

  peek() {
    if(!this.top) {
      return null
    }
    return this.top.data
  }
}

const llStack = new LinkedListBasedStack();
llStack.push(1)
llStack.push(2)
console.log('==========', llStack);
llStack.pop()
console.log(llStack.peek());

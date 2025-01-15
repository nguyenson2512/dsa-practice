class Queue {
    constructor(size) {
      if(size <= 0) {
        throw new Error('Invalid size');
      }
      this.front = -1;
      this.rear = -1;
      this.size = size;
      this.items = new Array(size)
    }
  
    enqueue(item) {
      if(this.isFull()) {
        throw new Error('Queue is full');
      }
      if(this.front === -1) this.front = 0;
      this.rear++;
      this.items[this.rear] = item
    }
  
    dequeue() {
      if(this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      const element = this.items[this.front];
      this.front++;
      if(this.front > this.rear) {
        this.front = -1
        this.rear = -1
      }
      return element;
    }
  
    isFull() {
      return this.rear === this.size -1;
    }
  
    isEmpty() {
      return this.front === -1
    }
  
    display() {
      let result = ''
      for(let i = this.front;i<=this.rear;i++) {
        result += `${this.items[i]} `
      }
      console.log(result);
    }
  }
  
  const queue = new Queue(5);
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  queue.enqueue(4)
  queue.dequeue()
  queue.enqueue(5)
  queue.dequeue()
  queue.display()
  queue.enqueue(6)
  class Queue {
    constructor(size) {
      if(size <= 0) {
        throw new Error('Invalid size');
      }
      this.front = -1;
      this.rear = -1;
      this.size = size;
      this.items = new Array(size)
    }
  
    enqueue(item) {
      if(this.isFull()) {
        throw new Error('Queue is full');
      }
      if(this.front === -1) this.front = 0;
      this.rear++;
      this.items[this.rear] = item
    }
  
    dequeue() {
      if(this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      const element = this.items[this.front];
      this.front++;
      if(this.front > this.rear) {
        this.front = -1
        this.rear = -1
      }
      return element;
    }
  
    isFull() {
      return this.rear === this.size -1;
    }
  
    isEmpty() {
      return this.front === -1
    }
  
    display() {
      let result = ''
      for(let i = this.front;i<=this.rear;i++) {
        result += `${this.items[i]} `
      }
      console.log(result);
    }
  }
  
  const queue = new Queue(5);
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  queue.enqueue(4)
  queue.dequeue()
  queue.enqueue(5)
  queue.dequeue()
  queue.display()
  queue.enqueue(6)
    
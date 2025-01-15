class CQueue {
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
      //update rear index
      this.rear = (this.rear + 1) % this.size;
      this.items[this.rear] = item
    }
  
    dequeue() {
      if(this.isEmpty()) {
        throw new Error('Queue is empty');
      }
      const element = this.items[this.front];
      //Q has only one element, so we reset the queue after deleting it.
      if(this.front == this.rear) {
        this.front = -1
        this.rear = -1
      } else {
        //update front index
        this.front = (this.front + 1) % this.size;
      }
  
      return element;
    }
  
    isFull() {
      if(this.front == 0 && this.rear == this.size -1) return true
      if(this.front == this.rear + 1) return true
      return false
    }
  
    isEmpty() {
      return this.front === -1
    }
  
    display() {
      let result = ''
      let i = this.front;
      do {
        result += `${this.items[i]} `;
        i = (i + 1) % this.size;
      } while (i != this.rear + 1)
      console.log(result);
    }
  }
  
  const queue = new CQueue(5);
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  queue.enqueue(4)
  queue.dequeue()
  queue.enqueue(5)
  queue.enqueue(6)
  // queue.dequeue()
  queue.display()
  // queue.enqueue(6)
  
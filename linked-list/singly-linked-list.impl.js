class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add a node to the end of the list
    append(data) {
      const newNode = new Node(data)
      if (!this.head) {
        this.head = newNode;
      } else {
        let cur = this.head
        while (cur.next) {
          cur = cur.next
        }
        cur.next = newNode;
      }
      this.size++;
    }
  
    // Add a node to the beginning of the list
    prepend(data) {
      const newNode = new Node(data)
      if (!this.head) {
        this.head = newNode;
      } else {
        const temp = this.head;
        this.head = newNode;
        this.head.next = temp
      }
      this.size++;
    }
  
    // Delete a node by value
    delete(data) {
      if(!this.head) {
        return -1
      }
      let cur = this.head;
      if(cur.data === data) {
        this.head = cur.next;
        this.size--;
        return data;
      }
      while(cur.next) {
        if(cur.next.data === data) {
          cur.next = cur.next.next
          this.size--;
          return data;
        }
        cur = cur.next;
      }
      return -1
    }
  
    // Delete a node by value
    deleteByIndex(index) {
      let cur = this.head;
      if(index == 0){
        this.head = cur.next;
        this.size--;
        return
      }
      let count = 0;
      while (cur.next) {
        if(count + 1 === index) {
          cur.next = cur.next.next;
          this.size--;
          return
        }
        count++;
        cur = cur.next;
      }
      return -1;
    }
  
    getSize() {
      return this.size;
    }
  
    print() {
      let result = '';
      let cur = this.head;
      while (cur) {
        result += `${cur.data} -> `;
        cur = cur.next;
      }
      console.log(result + 'null');
    }
  }
  
  const list = new SinglyLinkedList();
  list.append(20);
  list.append(30);
  list.prepend(10);
  list.deleteByIndex(5);
  list.print();
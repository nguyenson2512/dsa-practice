class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    //them phan tu moi o cuoi cung cua mang
    this.heap.push(value);
    this._heapifyUp()
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    //dua phan tu cuoi cung len vi tri root -> thuc hien heapify down
    this.heap[0] = this.heap.pop();
    this._heapifyDown()
    return max;
  }
  peek() {
    return this.heap[0]
  }

  // O(log n)
  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
      index = parentIndex
    }
  }

  // O(log n)
  _heapifyDown() {
    let i = 0;
    let len = this.heap.length

    while (true) {
      let left = i * 2 + 1;
      let right = i * 2 + 2;
      let largest = i;

      if (left < len && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < len && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (i == largest) break;
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]]
      i = largest
    }
  }

  buildMaxHeap(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this._heapify(arr, n, i)
    }
    this.heap = arr;
  }
  _heapify(arr, n, i) {
    let largest = i;
    let left = i * 2 + 1
    let right = i * 2 + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [arr[largest], arr[i]] = [arr[i], arr[largest]]
      this._heapify(arr, n, largest)
    }
  }
}

const heap = new MaxHeap();
heap.insert(10);
heap.insert(4);
heap.insert(15);
heap.insert(1);

console.log(heap);

console.log(heap.peek());
console.log(heap.remove());
console.log(heap);
console.log(heap.peek());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap);
heap.buildMaxHeap([10, 4, 15, 1])
console.log(heap);
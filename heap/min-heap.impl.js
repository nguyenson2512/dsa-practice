// Heap data structure is a complete binary tree
// that satisfies the heap property, where any given node is

// max heap property:
// always greater than its child node/s and the key of the root node is the largest among all other nodes

// min heap property:
// always smaller than the child node/s and the key of the root node is the smallest among all other nodes.

// array-based implementation
// node with index i
// L(i) -> 2 * i + 1
// R(i) -> 2 * i + 2
// Parent(i) -> Math.floor((i - 1) / 2)

class MinHeap {
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

    const min = this.heap[0];
    //dua phan tu cuoi cung len vi tri root -> thuc hien heapify down
    this.heap[0] = this.heap.pop();
    this._heapifyDown()
    return min;
  }
  peek() {
    return this.heap[0]
  }

  // O(log n)
  _heapifyUp() {
    // index cua phan tu moi them vao mang heap
    let index = this.heap.length - 1;
    // swap vi tri dung tinh chat heap cho phan tu moi
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      // trong min heap, neu phan tu cha nho hon phan tu con thi k phai swap
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
      index = parentIndex
    }
  }

  // O(log n)
  _heapifyDown() {
    let index = 0;
    let len = this.heap.length;
    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      //set bien danh dau index co value nho hon khi so sanh voi 2 node con
      let smallest = index;
      if (left < len && this.heap[smallest] > this.heap[left]) smallest = left;
      if (right < len && this.heap[smallest] > this.heap[right]) smallest = right;

      // neu node o vi tri index co gia tri nho nhat thi dung vong lap
      if (smallest == index) break;
      //swap
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
      //tiep tuc heapify down cho item o vi tri smallest
      index = smallest
    }
  }

  // O(n)
  buildMinHeap(arr) {
    let n = arr.length;
    //Duyệt từ phần tử có chỉ số n/2 - 1 (vì tất cả các node sau đó đều là lá)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this._heapify(arr, n, i)
    }
    this.heap = arr;
  }

  _heapify(arr, n, i) {
    let smallest = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    if (left < n && arr[left] < arr[smallest]) {
      smallest = left;
    }
    if (right < n && arr[right] < arr[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      this._heapify(arr, n, smallest)
    };
  }
}

const heap = new MinHeap();
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
heap.buildMinHeap([10, 4, 15, 1])
console.log(heap);


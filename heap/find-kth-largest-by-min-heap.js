class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  pop() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._heapify(0);
    }
    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] <= this.heap[index]) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  _heapify(i) {
    const n = this.heap.length;
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
    if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this._heapify(smallest);
    }
  }
}

var findKthLargest = function (nums, k) {
  const heap = new MinHeap();

  for (let num of nums) {
    if (heap.size() < k) {
      heap.push(num);
    } else if (num > heap.peek()) {
      heap.pop();
      heap.push(num);
    }
  }

  return heap.peek();
};

console.log(findKthLargest([1, 2, 4, 3], 3))


// Max Heap + pop k lần	O(n + k log n)	K nhỏ và muốn tự cài dễ hiểu
// Min Heap size k	O(n log k)	Khi k nhỏ hơn rất nhiều so với n (hiệu quả hơn)
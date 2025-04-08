/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const maxHeap = buildMaxHeap(nums)

  while (k > 0) {
    const result = maxHeap[0];
    maxHeap[0] = maxHeap.pop()
    _heapify(maxHeap, maxHeap.length, 0)
    k--;
    if (k === 0) return result;
  }
  return result
};

var buildMaxHeap = function (arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    _heapify(arr, n, i)
  }
  return arr;
}

var _heapify = function (arr, n, i) {
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
    _heapify(arr, n, largest)
  }
}
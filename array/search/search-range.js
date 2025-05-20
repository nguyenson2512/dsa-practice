const { el } = require("date-fns/locale");

function searchRange(nums, target) {
  // Your solution goes here
  const binarySearch = (arr, target, isFindingLeft = true) => {
    let left = 0, right = arr.length - 1, idx = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (target < arr[mid]) {
        right = mid - 1
      } else if (target > arr[mid]) {
        left = mid + 1
      } else {
        idx = mid;
        if (isFindingLeft) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
    }
    return idx;
  }

  return [binarySearch(nums, target, true), binarySearch(nums, target, false)]
}

// Example input
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;

// Function call
const result = searchRange(nums, target);

// Output result
console.log('Result:', result); // Expected: [3, 4]
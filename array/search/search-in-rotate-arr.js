function search(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) return mid;
    //nếu nums[left] <= nums[mid] thì phần bên trái của mid đã được sort,
    //ngược lại là bên phải của mid được sort
    if (nums[left] <= nums[mid]) {
      //vì phần bên trái của mid đã được sort
      //nếu target nằm trong khoảng giá trị được sort đó, thu hẹp right về mid - 1
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1;
}

// Example input
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;

// Function call
const result = search(nums, target);

// Output result
console.log('Result:', result); // Expected: 4

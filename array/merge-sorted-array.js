function merge(nums1, m, nums2, n) {
  // Your solution goes here
  let i = m - 1, j = n - 1, k = m + n - 1
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
  }

  return nums1;
}

// Example input
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

// Function call
merge(nums1, m, nums2, n);

// Output nums1 to check results
console.log(nums1);
//[ 1, 2, 2, 3, 5, 6 ]

//explain: Two pointers moving backward
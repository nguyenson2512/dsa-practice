// dạng fixed size: như bên dưới hay tính các tổng của các bộ 3 liền kề,...
// Tìm chuỗi con có độ dài k có tổng lớn nhất
function findMaxSumSubArray(arr, k) {
  let i = 0;
  let sum = arr[0];
  let maxSum = 0;
  for (let j = 1; j < arr.length; j++) {
    if (j - i + 1 <= k) {
      sum += arr[j]
    } else {
      sum -= arr[i];
      sum += arr[j];
      i++;
    }
    maxSum = Math.max(sum, maxSum)

    console.log({ i, j, sum });
  }
  return maxSum;

};
let test1 = findMaxSumSubArray([2, 7, 5, 1, 9, 2], 3);
console.log(test1);

//dạng variable size: luôn có i = 0, j tiến đến arr's length , có vòng lặp while với 
// mục đích thu hẹp window
//Tìm chuỗi con không lặp lại dài nhất
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let max = 0;
  const hash = {};
  for (let j = 0; j < s.length; j++) {
    while (hash[s[j]]) {
      hash[s[i]] = null;
      i++;
    }
    hash[s[j]] = true;
    max = Math.max(max, j - i + 1)
  }
  return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));
//3
console.log(lengthOfLongestSubstring("bbbb"));
//1
console.log(lengthOfLongestSubstring("abcabcbb"));
//3

//Độ dài chuỗi con dài nhất có đúng k ký tự khác nhau.

function findSubStrKChar(s, k) {
  let i = 0;
  let max = 0;
  const hash = {};
  for (let j = 0; j < s.length; j++) {
    hash[s[j]] = (hash[s[j]] || 0) + 1;
    while (Object.keys(hash).length > k) {
      hash[s[i]] -= 1;
      if (hash[s[i]] < 1) {
        delete hash[s[i]];
      }
      i++;
    }
    max = Math.max(max, j - i + 1)
  }
  return max;
}

console.log(findSubStrKChar('arbaabbci', 2));
//4 araa

// Độ dài nhỏ nhất của chuỗi con có tổng các phần tử lớn hơn hoặc bằng S

function smallestSubarrayWithSum(arr, S) {
  let i = 0;
  let sum = 0;
  let minSize = Infinity;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
    //điều kiện thu hẹp window
    while (sum >= S) {
      minSize = Math.min(minSize, j - i + 1)
      sum -= arr[i];
      i++;
    }
  }
  return minSize === Infinity ? 0 : minSize
}

console.log(smallestSubarrayWithSum([2, 1, 5, 2, 3, 2], 7));

// Tìm chuỗi con dài nhất có tổng các phần tử nhỏ hơn hoặc bằng S

function longestSubarrayWithSum(arr, S) {
  let sum = 0;
  let maxSize = 0;
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
    while (sum > S) {
      sum -= arr[i];
      i++;
    }
    maxSize = Math.max(maxSize, j - i + 1)
  }
  return maxSize
}
console.log(longestSubarrayWithSum([3, 1, 2, 1, 1, 2], 5)); //4

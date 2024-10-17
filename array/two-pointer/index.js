function test(arr) {
  let i = 0;
  let result = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== arr[j + 1] - 1) {
      result.push(i == j ? `${arr[i]}` : `${arr[i]}->${arr[j]}`);
      i = j + 1;
    }
  }
  return result;
}

console.log(test([0, 1, 2, 4, 5, 7]));
console.log(test([0, 2, 3, 4, 6, 8, 9]));
//["0->2","4->5","7"]


const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr
};

console.log(reverseArray(['a', 's', 'o']));

function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = new Array(nums.length); // result array of the same length as nums
  let pos = nums.length - 1; // start filling the result array from the end

  while (left <= right) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[pos] = leftSquare;
      left++;
    } else {
      result[pos] = rightSquare;
      right--;
    }
    pos--;
  }

  return result;
}

// Test the function
console.log(sortedSquares([-4, -1, 0, 3, 10])); // Output: [0, 1, 9, 16, 100]

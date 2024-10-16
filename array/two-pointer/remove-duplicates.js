// Removing duplicates from sorted array
function removeDuplicates(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

const input = [1, 4, 5, 5, 7, 8, 8, 10];
const finalLen = removeDuplicates(input);

console.log(input.slice(0, finalLen));
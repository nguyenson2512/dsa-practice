function quickSort(arr) {
  if (arr.length <= 1) return arr;
  // chọn phần tử cuối làm pivot
  const left = [], right = [], pivot = arr[arr.length - 1];
  // duyệt các phần tử còn lại và chia vào left/right
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);  // nhỏ hơn pivot -> đẩy vào mảng left
    } else {
      right.push(arr[i]); // lớn hơn hoặc bằng pivot -> đẩy vào mảng right
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}



// 🔹 Example usage:
const input = [3, 6, 8, 10, 1, 2, 1];
const sorted = quickSort(input);
console.log(sorted); // Expected: [1, 1, 2, 3, 6, 8, 10]

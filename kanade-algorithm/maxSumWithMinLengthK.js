
function maxSumWithMinLengthK(arr, k) {
  const n = arr.length;

  // Bước 1: Tính prefix sum để dễ tính tổng nhanh
  const prefixSum = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i];
  }

  // Bước 2: Duyệt các cửa sổ từ độ dài = k trở đi
  let maxSum = -Infinity;

  // Khởi tạo currentMax để dùng kiểu Kadane mở rộng sau vị trí i
  let currentMax = prefixSum[k] - prefixSum[0]; // tổng đầu tiên có độ dài k
  maxSum = currentMax;

  for (let i = k; i < n; i++) {
    // arr[i] là phần tử mới thêm vào cửa sổ

    // Tính tổng từ i-k+1 đến i → độ dài đúng k
    const windowSum = prefixSum[i + 1] - prefixSum[i - k + 1];

    // Mở rộng Kadane từ trước
    currentMax = Math.max(currentMax + arr[i], windowSum);
    maxSum = Math.max(maxSum, currentMax);
  }

  return maxSum;
}
console.log(maxSumWithMinLengthK([1, 2, -1, 2, -3, 2, -5], 2));
// Output: 4 → dãy con: [1, 2, -1, 2]

// Dãy con có thể quay vòng	=> Kadane hai lần + tổng toàn mảng
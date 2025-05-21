// Chia để trị là một kỹ thuật thiết kế thuật toán gồm ba bước chính:

// Chia (Divide): Tách bài toán lớn thành nhiều bài toán con nhỏ hơn.

// Trị (Conquer): Giải quyết các bài toán con đó (thường là đệ quy).

// Hợp (Combine): Kết hợp kết quả từ các bài toán con để ra kết quả bài toán lớn ban đầu.


// Ý tưởng dùng Chia để trị:
// Mảng đã sắp xếp → phần tử giữa mảng nên là gốc của BST.

// Các phần tử bên trái → tạo cây con bên trái.

// Các phần tử bên phải → tạo cây con bên phải.

// Lặp lại đệ quy với mảng con.
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null
  const mid = Math.floor(nums.length / 2)
  console.log(mid)
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))
  return root
};

var sortedArrayToBST = function (nums) {
  const build = (left, right) => {
    if (left > right) return null
    const mid = Math.floor((right + left) / 2)
    const root = new TreeNode(nums[mid]);
    root.left = build(left, mid - 1)
    root.right = build(mid + 1, right)
    return root
  }
  return build(0, nums.length - 1)
};
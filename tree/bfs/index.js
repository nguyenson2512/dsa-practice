// Hàm duyệt BFS
//Dùng hàng đợi (queue) để giữ các node cần duyệt.
// -Lấy node đầu hàng đợi ra.
// -Đẩy node.left và node.right vào hàng đợi nếu tồn tại.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function bfs(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];  // Bắt đầu với root

  while (queue.length > 0) {
    const node = queue.shift();   // Lấy node đầu tiên
    result.push(node.val);        // Lưu giá trị

    if (node.left) queue.push(node.left);   // Thêm trái
    if (node.right) queue.push(node.right); // Thêm phải
  }

  return result;
}

const root = new TreeNode(1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

console.log(bfs(root));  // Kết quả: [1, 2, 3, 4, 5, 6]
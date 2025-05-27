// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function countNodes1(root) {
  // o(n)
  const res = [0]
  function traverse(root, res) {
    if (!root) return;
    res[0] = res[0] + 1;
    traverse(root.left, res);
    traverse(root.right, res);
  }
  traverse(root, res)
  return res[0]
}
function countLeftDepth(root) {
  if (!root) return 0
  return 1 + countLeftDepth(root.left)
}

function countRightDepth(root) {
  if (!root) return 0
  return 1 + countRightDepth(root.right)
}
function countNodes(root) {
  // Your solution goes here
  function traverse(root) {
    const leftDepth = countLeftDepth(root);
    const rightDepth = countRightDepth(root);
    // cây con hiện tại là cây nhị phân đầy đủ (perfect binary tree), ta tính nhanh số node bằng công thức:
    // 2^height - 1
    // và không cần đệ quy xuống nữa.
    if (leftDepth == rightDepth) {
      return Math.pow(2, leftDepth) - 1
    } else {
      return 1 + traverse(root.left) + traverse(root.right);
    }
  }
  return traverse(root)
}
// Example input:
// Tree structure:
//      1
//     / \
//    2   3
//   / \  /
//  4  5 6

const root = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4),
    new TreeNode(5)
  ),
  new TreeNode(3,
    new TreeNode(6),
    null
  )
);

// Function call
const result = countNodes(root);

// Output result
console.log('Result:', result); // Expected: 6
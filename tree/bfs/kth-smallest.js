// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function kthSmallest(root, k) {
  // Your solution goes here
  const res = []
  const dfs = (node) => {
    if (!node) return;
    if (node.left) {
      dfs(node.left)
    }
    res.push(node.val)
    if (node.right) {
      dfs(node.right)
    }
  }
  dfs(root)
  return res[k - 1]
}

// Example input:
// Tree structure:
//      3
//     / \
//    1   4
//     \
//      2

const root = new TreeNode(3,
  new TreeNode(1,
    null,
    new TreeNode(2)
  ),
  new TreeNode(4)
);

const k = 1;

// Function call
const result = kthSmallest(root, k);

// Output result
console.log('Result:', result); // Expected: 1

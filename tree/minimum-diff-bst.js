//vì input là binary search tree nên tính hiệu của từng cặp node theo thứ tự in-order -> ra min diff
var getMinimumDifference = function (root) {
  var prev = null;
  var res = Infinity
  const dfs = node => {
    if (!node) return;
    dfs(node.left)
    if (prev !== null) {
      res = Math.min(res, Math.abs(prev - node.val))
    }
    prev = node.val
    dfs(node.right)
  }
  dfs(root)
  return res
};

// Helper function to create a binary tree node
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Example input:
//     1
//      \
//       3
//      /
//     2
const root = new TreeNode(1);
root.right = new TreeNode(3);
root.right.left = new TreeNode(2);

// Function call
const result = getMinimumDifference(root);

// Output result
console.log('Result:', result); // Expected: 1
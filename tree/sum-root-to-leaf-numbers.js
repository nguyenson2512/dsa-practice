// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function sumNumbers(root) {
  // Your solution goes here
  const sum = (node, total) => {
    if (!node) return 0
    if (!node.left && !node.right) {
      return node.val + total * 10;
    }
    return sum(node.left, node.val + total * 10) + sum(node.right, node.val + total * 10)
  }
  return sum(root, 0)
}

// Example input:
// Tree structure:
//      1
//     / \
//    2   3

const root = new TreeNode(1,
  new TreeNode(2),
  new TreeNode(3)
);

// Function call
const result = sumNumbers(root);

// Output result
console.log('Result:', result); // Expected: 25
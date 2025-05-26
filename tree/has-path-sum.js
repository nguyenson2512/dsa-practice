// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function hasPathSum(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return targetSum === root.val
  }
  targetSum -= root.val;
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

// Example input:
// Tree structure:
//      5
//     / \
//    4   8
//   /   / \
// 11  13  4
// / \       \
//7   2       1

const root = new TreeNode(5,
  new TreeNode(4,
    new TreeNode(11,
      new TreeNode(7),
      new TreeNode(2)
    )
  ),
  new TreeNode(8,
    new TreeNode(13),
    new TreeNode(4,
      null,
      new TreeNode(1)
    )
  )
);

const targetSum = 22;

// Function call
const result = hasPathSum(root, targetSum);

// Output result
console.log('Result:', result); // Expected: true

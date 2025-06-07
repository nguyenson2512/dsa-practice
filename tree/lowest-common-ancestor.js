// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function lowestCommonAncestor(root, p, q) {
  // Your solution goes here
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) return right;  // p and q are in the right subtree
  if (!right) return left;  // p and q are in the left subtree
  return root;              // p is in one side and q is in the other
}

// Example input:
// Tree structure:
//      3
//     / \
//    5   1
//   / \ / \
//  6  2 0  8
//    / \
//   7   4

const root = new TreeNode(3,
  new TreeNode(5,
    new TreeNode(6),
    new TreeNode(2,
      new TreeNode(7),
      new TreeNode(4)
    )
  ),
  new TreeNode(1,
    new TreeNode(0),
    new TreeNode(8)
  )
);

// Nodes to find LCA for
const p = root.left; // Node with value 5
const q = root.left.right.right; // Node with value 4

// Function call
const result = lowestCommonAncestor(root, p, q);

// Output result
console.log('Result:', result ? result.val : null); // Expected: 5

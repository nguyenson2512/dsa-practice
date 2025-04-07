function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // TODO: Implement the solution

  return isMinorOfItself(root.left, root.right);
};

var isMinorOfItself = function (leftNode, rightNode) {
  if (!leftNode && !rightNode) return true;
  if (!leftNode || !rightNode) return false
  return leftNode.val == rightNode.val
    && isMinorOfItself(leftNode.right, rightNode.left)
    && isMinorOfItself(leftNode.left, rightNode.right)
}

// Example usage:

// Constructing the tree: [1,2,2,3,4,4,3]
const tree = new TreeNode(1);
tree.left = new TreeNode(2, new TreeNode(3), new TreeNode(4));
tree.right = new TreeNode(2, new TreeNode(4), new TreeNode(3));

const result = isSymmetric(tree);
console.log(result); // Expected output: true

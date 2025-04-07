// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // TODO: Implement the solution
  if (!p && !q) return true;
  if (!p || !q) return false;

  return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// Example input:
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Tree 1:     1
//            / \
//           2   3
// const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const p = new TreeNode(1, new TreeNode(2));

// Tree 2:     1
//            / \
//           2   3
// const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q = new TreeNode(1, undefined, new TreeNode(2));

const result = isSameTree(p, q);
console.log(result); // Expected output: true

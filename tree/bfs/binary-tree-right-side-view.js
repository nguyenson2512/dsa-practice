// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function rightSideView(root) {
  if (!root) return [];
  // Your solution goes here
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const queueLen = queue.length;
    for (let i = 0; i < queueLen; i++) {
      const node = queue.shift();
      if (i === queueLen - 1) {
        result.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}

// Example input:
// Tree structure:
//      1
//     / \
//    2   3
//     \    \
//      5    4

const root = new TreeNode(1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(4))
);

// Function call
const result = rightSideView(root);

// Output result
console.log('Result:', result); // Expected: [1, 3, 4]
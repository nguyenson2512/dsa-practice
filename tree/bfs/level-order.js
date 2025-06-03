function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function levelOrder(root) {
  // Your solution goes here
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const queueLen = queue.length;
    const items = [];
    for (let i = 0; i < queueLen; i++) {
      const node = queue.shift();
      items.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(items);
  }
  return result;
}

// Example input:
// Tree structure:
//      3
//     / \
//    9  20
//       / \
//      15  7

const root = new TreeNode(3,
  new TreeNode(9,),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7)
  )
);

// Function call
const result = levelOrder(root);

// Output result
console.log('Result:', result); // Expected: [[3], [9, 20], [15, 7]]
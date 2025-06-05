// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function zigzagLevelOrder(root) {
  // Your solution goes here
  if (!root) return [];
  const result = [];
  const queue = [root];
  let isLeftToRightOrder = true;
  while (queue.length > 0) {
    const len = queue.length;
    let items = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (isLeftToRightOrder) {
        items.push(node.val);

      } else {
        items = [node.val, ...items];

      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    isLeftToRightOrder = !isLeftToRightOrder;

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
  new TreeNode(9),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7)
  )
);

// Function call
const result = zigzagLevelOrder(root);

// Output result
console.log('Result:', result); // Expected: [[3], [20, 9], [15, 7]]


//optimize
var optimizeZigzagLevelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  let isLeftToRight = true;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = new Array(levelSize);

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      const index = isLeftToRight ? i : levelSize - 1 - i;
      currentLevel[index] = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
    isLeftToRight = !isLeftToRight;
  }

  return result;
};
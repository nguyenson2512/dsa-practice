// // Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function averageOfLevels(root) {
  // Your solution goes here
  const result = []
  const queue = [root]

  while (queue.length > 0) {
    //mỗi lần trong loop sẽ duyệt qua các node con của 1 level, tính sum rồi chia cho len
    //queueLen luôn cố định ợ đây là số node con của level hiện tại đang xét, dù bên dưới queue có push thêm node cháu vào
    const queueLen = queue.length;
    let sum = 0

    for (let i = 0; i < queueLen; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);   // Thêm trái
      if (node.right) queue.push(node.right); // Thêm phải
    }
    result.push(sum / queueLen)
  }
  return result
}

// Example input:
// Tree structure:
//      3
//     / \
//    9  20
//       / \
//      15  7

const root = new TreeNode(3,
  new TreeNode(9,
    new TreeNode(11),
    new TreeNode(3)
  ),
  new TreeNode(20,
    new TreeNode(15),
    new TreeNode(7)
  )
);

// Function call
const result = averageOfLevels(root);

// Output result
console.log('Result:', result); // Expected: [3, 14.5, 11]
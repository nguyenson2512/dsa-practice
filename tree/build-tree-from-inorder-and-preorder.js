// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
//inorder : left - root - right ( ^ model )
//preorder: root-left-right => the first item of preorder is the ROOT
function buildTree(preorder, inorder) {
  // // Your solution goes here
  // const build = (preOrder, inOrder) => {
  //   //dieu kien length inOrder neu empty thi chung to gap leaf (k con node in subtree)
  //   if (inOrder.length) {
  //     // tim index cua root (first item of preorder) de chia inorder voi ben trai cua index la left nodes | voi ben phai cua index la right nodes
  //     const index = inOrder.indexOf(preOrder.shift())
  //     const root = new TreeNode(inOrder[index])
  //     root.left = build(preOrder, inOrder.slice(0, index))
  //     root.right = build(preOrder, inOrder.slice(index + 1))
  //     return root;
  //   }
  //   return null
  // }
  // return build(preorder, inorder)

  //o(n^2)

  //o(n) dung Map de tim index trong inorder (thay cho indexOf)
  //dung preIndex de k dung shift
  const map = new Map()
  for (let index in inorder) {
    map.set(inorder[index], index);
  }
  let preIndex = 0;
  const build = (left, right) => {
    if (left > right) return null;
    const val = preorder[preIndex++];
    const inOrderIndex = map.get(val);
    const root = new TreeNode(val)
    root.left = build(left, +inOrderIndex - 1)
    root.right = build(+inOrderIndex + 1, right)
    return root;

  }
  return build(0, inorder.length - 1)
}

// Example input
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

// Function call
const result = buildTree(preorder, inorder);

// Output: [3,9,20,null,null,15,7]
// Output result
console.log('Result:', JSON.stringify(result)); // Expected: TreeNode representing the binary tree with structure:
//     3
//    / \
//   9  20
//      /  \
//     15   7
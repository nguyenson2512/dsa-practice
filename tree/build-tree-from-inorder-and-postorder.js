// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
//inorder : left - root - right ( ^ model )
//preorder: root-left-right => the first item of preorder is the ROOT
//postorder: left right root => the last item of preorder is the ROOT
function buildTree(inorder, postorder) {
  // Your solution goes here
  const indexMap = new Map();
  inorder.forEach((value, index) => {
    indexMap.set(value, index);
  });
  let rootIndex = postorder.length - 1
  //postorder ta dùng để lấy giá trị root ở cuối mảng
  //do inorder có dạng left root right nên cần dùng 1 map để lấy index của root value
  // tách inorder thành 2 dựa trên index vừa tìm đc trong map
  const build = (left, right) => {
    if (left <= right) {
      const val = postorder[rootIndex--]
      const root = new TreeNode(val)
      const inOrderIndex = indexMap.get(val);
      root.right = build(inOrderIndex + 1, right)
      root.left = build(left, inOrderIndex - 1)
      return root
    }
    return null
  }
  return build(0, inorder.length - 1)
}

// Example input
const inorder = [9, 3, 15, 20, 7];
//  3
// 9  20
//   15 7


const postorder = [9, 15, 7, 20, 3];

// Function call
const tree = buildTree(inorder, postorder);

// Output result
console.log('Constructed Binary Tree:', tree); // Expected: TreeNode structure representing the binary tree
// [3,9,20,null,null,15,7]

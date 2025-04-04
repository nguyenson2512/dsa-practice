function invertTree(root) {
  // Your solution goes here
  if (!root) return root

  if (root.right || root.left) {
    const temp = root.right;
    root.right = root.left;
    root.left = temp;
    invertTree(root.right)
    invertTree(root.left)
  }
  return root
}

// Example input (Binary Tree represented as nested objects)
const exampleTree = {
  val: 4,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null }
  },
  right: {
    val: 7,
    left: { val: 6, left: null, right: null },
    right: { val: 9, left: null, right: null }
  }
};

// Function call
const result = invertTree(exampleTree);

// Output result
console.log('Inverted Tree:', JSON.stringify(result, null, 2));
// Expected output: 
// The left and right subtrees of every node should be swapped.
// For root = 4: left becomes 7 subtree, right becomes 2 subtree
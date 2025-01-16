class Node {
    constructor(value) {
      this.item = value;
      this.left = null
      this.right = null
    }
  }
  
  //each tree node has a maximum of two children.
  //it can be used to search for the presence of a number in O(log(n)) time.
  class BinarySearchTree {
    constructor() {
      this.root = null
    }
  
    //left, right, root
    postOrder(root) {
      const result = [];
      function traversal(node) {
        if(node) {
          traversal(node.left)
          traversal(node.right)
          result.push(node.item)
        }
      }
      traversal(root)
      return result.join(' -> ')
    }
  
  
  }
  
  const tree = new BinarySearchTree()
  console.log('==========', tree);
  console.log(tree.postOrder(tree.root));
  
  
  
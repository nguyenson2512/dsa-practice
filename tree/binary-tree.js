class Node {
    constructor(value) {
      this.item = value;
      this.left = null
      this.right = null
    }
  }
  
  class BinaryTree {
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
  
  
    //left, root, right
    inOrder(root) {
      const result = [];
      function traversal(node) {
        if(node) {
          traversal(node.left)
          result.push(node.item)
          traversal(node.right)
        }
      }
      traversal(root)
      return result.join(' -> ')
    }
  
    //root, left, right
    preOrder(root) {
      const result = [];
      function traversal(node) {
        if(node) {
          result.push(node.item)
          traversal(node.left)
          traversal(node.right)
        }
      }
      traversal(root)
      return result.join(' -> ')
    }
  
    //full-binary-tree: each node must have 0 or 2 children
    isFullBinaryTree(root) {
      if(!root) return true
      if(!root.left && !root.right) return true
      if(root.left && root.right) {
        return this.isFullBinaryTree(root.left) && this.isFullBinaryTree(root.right)
      }
      return false
    }
  
    //perfect-binary-tree: every internal node has exactly two child nodes
    //  and all the leaf nodes are at the same level.
  
    //total nodes: 2^(h+1) - 1   (h: height)
    isPerfectBinaryTree(root, depth, level) {
      if(!root) {
        return true
      }
  
      //check case node don't have any child, is it the last level
      if(!root.left && !root.right) {
        return depth == level + 1
      }
  
      //return false if have only 1 node have child
      if(!root.left || !root.right) {
        return false
      }
  
      return this.isPerfectBinaryTree(root.left, depth, level + 1) && this.isPerfectBinaryTree(root.right, depth, level + 1)
    }
  
    getDepth(root) {
      if(!root) return 0;
      return 1 +  Math.max(this.getDepth(root.left), this.getDepth(root.left))
    }
  }
  
  const tree = new BinaryTree()
  tree.root = new Node(1);
  tree.root.left = new Node(12);
  tree.root.right = new Node(9);
  tree.root.right.left = new Node(10);
  tree.root.left.left = new Node(5);
  tree.root.left.right = new Node(6);
  
  console.log('==========', tree);
  console.log(tree.postOrder(tree.root));
  console.log('isFullBinaryTree:' + tree.isFullBinaryTree(tree.root));
  
  const depth = tree.getDepth(tree.root)
  console.log(depth);
  console.log('isPerfectBinaryTree:' + tree.isPerfectBinaryTree(tree.root, depth, 0));
  // console.log(tree.inOrder(tree.root));
  // console.log(tree.preOrder(tree.root));
  
  
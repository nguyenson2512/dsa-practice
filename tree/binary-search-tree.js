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
      if (node) {
        traversal(node.left)
        traversal(node.right)
        result.push(node.item)
      }
    }
    traversal(root)
    return result.join(' -> ')
  }

  insert(value) {
    this.root = this.insertValue(this.root, value)
  }

  insertValue(node, value) {
    if (!node) {
      return new Node(value)
    }
    if (value > node.item) {
      node.right = this.insertValue(node.right, value)
    } else if (value < node.item) {
      node.left = this.insertValue(node.left, value)
    }
    return node
  }

  search(node, value) {
    if (!node) {
      return -1
    }
    if (node.item > value) {
      return this.search(node.left, value)
    } else if (node.item < value) {
      return this.search(node.right, value)
    } else {
      return value;
    }
  }

  delete(value) {
    this.root = this.deleteValue(this.root, value)
  }
  deleteValue(node, value) {
    if (!node) {
      return node
    }

    if (value < node.item) {
      node.left = this.deleteValue(node.left, value)
    } else if (value > node.item) {
      node.right = this.deleteValue(node.right, value)
    } else {
      // If the node is with only one child or no child
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      // If the node has two children
      // Place the inorder successor in position of the node to be deleted
      node.item = this.minValue(node.right)

      // Delete the inorder successor
      node.right = this.deleteValue(node.right, node.item)
    }
    return node
  }

  minValue(node) {
    let minV = node.item;
    while (node.left) {
      minV = node.left.item
      node = node.left
    }
    return minV
  }
}

const tree = new BinarySearchTree()

tree.insert(5)
tree.insert(4)
tree.insert(6)
tree.insert(2)
console.log('==========', tree);
console.log(tree.postOrder(tree.root));
console.log('search value: ', tree.search(tree.root, 9));

tree.delete(4)
console.log(tree.postOrder(tree.root));

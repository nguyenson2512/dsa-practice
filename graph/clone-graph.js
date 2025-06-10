//clone-graph.js
// Definition for a Node in an undirected graph.
function Node(val, neighbors = []) {
  this.val = val;
  this.neighbors = neighbors;
}

/**
 * @param {Node | null} node
 * @return {Node | null}
 */
function cloneGraph(node) {
  // Your solution goes here
  if (!node) {
    return null;
  }
  const nodeMap = new Map();

  const dfs = (root) => {
    if (nodeMap.has(root.val)) {
      return nodeMap.get(root.val);
    }
    let newNode = new Node(root.val);
    nodeMap.set(root.val, newNode);
    for (let neighbor of root.neighbors) {
      newNode.neighbors.push(dfs(neighbor));
    }
    return newNode;
  };
  return dfs(node);
}

// Example graph (adjacency list representation):
// 1 -- 2
// |    |
// 4 -- 3
//
// Represented as:
// [
//   [2,4],  // neighbors of 1
//   [1,3],  // neighbors of 2
//   [2,4],  // neighbors of 3
//   [1,3]   // neighbors of 4
// ]

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

// Build the connections
node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

// Function call
const cloned = cloneGraph(node1);

// Output result
console.log('Cloned:', cloned);

// Expected: A deep clone of the original graph.
// Cloned should be a new graph where each Node has the same val
// and same neighbor relationships, but with no shared references.
// For example:
// cloned !== node1
// cloned.val === 1
// cloned.neighbors.map(n => n.val).sort() === [2,4]
// And similarly for the rest of the nodes.
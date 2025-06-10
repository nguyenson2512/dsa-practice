

//undirected-graph.js
class Graph {
  constructor() {
    this.adjacencyList = {};  // Danh sách kề (lưu đỉnh và danh sách các đỉnh kề)
    //example:
    // { A: [ 'B', 'C' ], B: [ 'A', 'C' ], C: [ 'A', 'B' ] }
  }

  // Thêm đỉnh mới vào đồ thị
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Thêm cạnh giữa hai đỉnh (đồ thị vô hướng)
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // Xoá cạnh giữa hai đỉnh
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }

  // Xoá đỉnh và toàn bộ các cạnh liên quan
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Duyệt DFS (Depth First Search) - đệ quy
  // dung de quy cho tung edge cua 1 vertex
  // dung visited {} de luu cac node da duyet

  dfsRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) dfs(neighbor);
      });
    }

    dfs(start);
    return result;
  }

  // Duyệt BFS (Breadth First Search)
  // duyet theo chieu ngang, voi 1 node, se duyet tiep den cac edge cua node do
  // dung queue de lan luot push cac node theo tuan tu
  // dung visited {} de luu cac node da duyet
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
console.log(g.adjacencyList);
console.log("DFS:", g.dfsRecursive('A'));
console.log("BFS:", g.bfs('A'));
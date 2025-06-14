/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
function calcEquation(equations, values, queries) {
  // Your solution goes here
  //build graph
  const graph = new Map();
  equations.forEach(([a, b], i) => {
    if (!graph.has(a)) graph.set(a, new Map());
    if (!graph.has(b)) graph.set(b, new Map());
    graph.get(a).set(b, values[i]);
    graph.get(b).set(a, 1 / values[i]);
  });
  console.log(graph);
  // Map(3) {
  //   'a' => Map(1) { 'b' => 2 },
  //   'b' => Map(2) { 'a' => 0.5, 'c' => 3 },
  //   'c' => Map(1) { 'b' => 0.3333333333333333 }
  // }

  const dfs = (src, dst, visited) => {
    //visited chua thong tin cac src da duyet qua
    //neu graph k chua src hay dst -> -1
    if (!graph.has(src) || !graph.has(dst)) return -1.0;

    //neu src = dst thi nhan voi 1 (voi cac case de quy)
    if (src == dst) return 1.0;

    //danh dau src da duyet qua
    visited[src] = true;
    for (const [neighbor, val] of graph.get(src)) {
      //de quy voi cac edge cua neighbor
      if (!visited[neighbor]) {
        const result = dfs(neighbor, dst, visited);
        if (result !== -1.0) return result * val;
      }
    }
    return -1.0;
  };
  return queries.map(([a, b]) => dfs(a, b, {}));
}

// Example input:
const equations = [["a", "b"], ["b", "c"]];
const values = [2.0, 3.0];
const queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]];

// Function call
const result = calcEquation(equations, values, queries);

// Output result
console.log('Result:', result);
// Expected: [6.0, 0.5, -1.0, 1.0, -1.0]
// Giải thích:
// "a/c" = a/b * b/c = 2.0 * 3.0 = 6.0
// "b/a" = 1 / (a/b) = 0.5
// "a/e" = -1.0 vì "e" không có trong hệ phương trình
// "a/a" = 1.0
// "x/x" = -1.0 vì "x" chưa định nghĩa :contentReference[oaicite:1]{index=1}
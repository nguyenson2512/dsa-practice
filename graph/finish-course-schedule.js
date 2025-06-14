/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  // Your solution goes here
  const preMap = {};
  const visited = {};

  // build the adacency list
  for (let prerequisite of prerequisites) {
    if (!preMap[prerequisite[0]]) {
      preMap[prerequisite[0]] = [prerequisite[1]];
    } else {
      preMap[prerequisite[0]].push(prerequisite[1]);
    }
  }
  console.log(preMap);
  const dfs = (node) => {
    if (visited[node]) return false; // Đã vào vòng lặp → có chu trình
    if (preMap[node] !== undefined) {
      if (preMap[node].length === 0) return true; // Đã duyệt xong node này
      visited[node] = true; // Đánh dấu đang duyệt node này
      for (let neighbor of preMap[node]) {
        if (!dfs(neighbor)) {
          return false;
        }
      }
      visited[node] = false; // Quay lui
      preMap[node] = []; // Đánh dấu node này đã xử lý xong
    }

    return true;
  };

  for (let key in preMap) {
    if (!dfs(key)) return false;
  }
  return true;
}

// Example 1:
const numCourses1 = 2;
const prerequisites1 = [[1, 0]];
// Giải thích: Course 1 cần course 0 => có thể hoàn thành
console.log(canFinish(numCourses1, prerequisites1)); // Expected: true

// Example 2:
const numCourses2 = 2;
const prerequisites2 = [[1, 0], [0, 1]];
// Giải thích: 1 → 0 và 0 → 1 tạo thành cycle => không thể hoàn thành
console.log(canFinish(numCourses2, prerequisites2)); // Expected: false

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // Your code here
  const stack = [];
  const directories = path.split("/");

  for (let dir of directories) {
    if (!dir || dir == '.') {
      continue
    } else if (dir == '..') {
      stack.pop()
    } else {
      stack.push(dir)
    }
  }

  return '/' + stack.join('/')
};

// Example input
const path = "/home//foo/";
const result = simplifyPath(path);
console.log(result); // Expected output: "/home/foo"

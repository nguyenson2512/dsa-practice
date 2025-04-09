/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length == 0) return [];
  // Sort intervals in ascending order based on the first number of each interval
  intervals.sort((a, b) => a[0] - b[0])
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    //use the last interval of result to compare while traversing
    let prev = result[result.length - 1];
    //if overlapping
    if (prev[1] >= intervals[i][0]) {
      result.pop();
      result.push([prev[0], Math.max(intervals[i][1], prev[1])])
    } else {
      result.push(intervals[i])
    }
  }
  return result
};

// Example input
const intervals = [[1, 4], [2, 3]];
const result = merge(intervals);
console.log(result);
// Expected output: [[1,6],[8,10],[15,18]]

// const intervals2 = [[1, 4], [4, 5]];
// Expected output: [[1,5]]

//[1,4],[2,3]

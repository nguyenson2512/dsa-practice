/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let i = 0, len = intervals.length;
  //insert item vao mang result nhung interval be hon newInterval
  while (i < len && newInterval[0] > intervals[i][1]) {
    result.push(intervals[i])
    i++;
  }
  // check nhung overlap interval voi gia tri start cua current interval so voi end cua newInterval
  while (i < len && newInterval[1] >= intervals[i][0]) {
    //update newInterval
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    i++
  }
  result.push(newInterval);

  // insert cac interval con lai
  while (i < len) {
    result.push(intervals[i]);
    i++
  }
  return result;
};

// Example input
const intervals = [[1, 3], [6, 9]];
const newInterval = [2, 5];
const result = insert(intervals, newInterval);
console.log(result);

// Expected output: [[1,5],[6,9]]

// const intervals2 = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
// const newInterval2 = [4, 8];
// const result2 = insert(intervals2, newInterval2);
// console.log(result2);

// Expected output: [[1,2],[3,10],[12,16]]

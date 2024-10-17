function binarySearch(arr, target) {
    let left = 0, right = arr.length -1;
    while(left <= right) {
      const mid = Math.floor((left + right) / 2);
      console.log(mid)
      if(arr[mid] < target) {
        left = mid + 1;
      } else if(arr[mid] > target) {
        right = mid - 1;
      } else {
        return mid
      }
    }
    return -1;
  }
  
  console.log(binarySearch([1,2,5,6,7,8,9,10,11], 8));
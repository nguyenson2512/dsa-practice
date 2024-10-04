//complexity: O(n^2)
function selectionSort(arr) {
    let minIndex;
    for(let i = 0; i< arr.length - 1; i++) {
      minIndex = i
      // Find the index of the smallest element 
      for(let j = i+1; j < arr.length - 1; j++) {
        if(arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
       // Swap the current element with the smallest element found
      if(i !== minIndex) {
         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
      }
    }
    return arr;
  }
  
function canCompleteCircuit(gas, cost) {
  let totalGas = 0, totalCost = 0, start = 0, difference = 0;
  for (let i = 0; i < gas.length; i++) {
    totalCost += cost[i]
    totalGas += gas[i]
    //difference luu gia tri chenh lenh giua gas va cost, set value cho start thuc su neu difference lon hon 0
    difference += gas[i] - cost[i];
    if (difference < 0) {
      start = i + 1;
      difference = 0
    }
  }
  return totalGas >= totalCost ? start : -1;
}

// Example input
const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

// Function call
const result = canCompleteCircuit(gas, cost);

// Output result
console.log('Result:', result); // Expected: 3

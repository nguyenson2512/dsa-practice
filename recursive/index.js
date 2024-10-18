function factorial(n) {
    if(n == 1) return 1;
    return n * factorial(n-1)
  }
  
  console.log(factorial(4))
  
  function sumArray(arr) {
    if(arr.length == 0) return 0;
    return arr[0] + sumArray(arr.slice(1))
  }
  
  console.log(sumArray([1, 2, 3, 4, 5]))
  
  // Recursion: By breaking a difficulty down into smaller problems of the same problem,
  //  a function calls itself to solve the problem until a specific condition is met.
  //Approach: top-down method in which the primary problem is broken down into more manageable subproblems.
  //Performance: might be slower due to the overhead of function calls and redundant calculations
  function fibonacci(n) {
    if(n==0) return 0
    if(n==1) return 1
    return fibonacci(n-1) + fibonacci(n-2);
  }
  
  console.log(fibonacci(4))
  // Time Complexity: O(2n), which is highly inefficient.
  // Auxiliary Space: Recursion consumes memory on the call stack for each function call,
  //  which can also lead to high space complexity. Inefficient recursive algorithms can lead to stack overflow errors.
  
  const len = 10;
  const fibonacciList = []
  for(let i = 0; i< len; i++) {
    fibonacciList.push(fibonacci(i))
  }
  console.log({fibonacciList})
  
  // Dynamic Programming:  breaks them into smaller problems and stores the results of these subproblems to avoid repeated calculations.
  //Approach: Using a bottom-up methodology, dynamic programming starts by resolving the smallest subproblems before moving on to the primary issue.
  //Performance: optimized subproblem solving and memoization.
  
  function fibonacci_dp(n) {
    const fib = new Array(n+1).fill(0);
    fib[1] = 1;
    for(let i = 2; i <=n; i++) {
      fib[i]=fib[i-1]+fib[i-2];
    }
    console.log({fib})
    return fib[n]
  }
  
  console.log(fibonacci_dp(3))
  //Time Complexity: O(n)
  // Auxiliary Space: DP may have higher space complexity due to the need to store results 
  // O(n) for the storage of the Fibonacci sequence.
  
  
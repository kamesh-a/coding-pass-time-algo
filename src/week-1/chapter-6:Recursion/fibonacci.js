// Ref: https://interviewcamp.io/courses/101687/lectures/2636882

// Time complexity O(n) with memoization, single depth is analyzed
// Space Complexity O(n) in call stack memory.

/*
f(5)
 -> f(4) + f(3)
    -> (f(3) + f(2)) + (f(2) + f(1))
        -> (f(2) + f(1)) 
*/
function fibo(n, map) {
  if (n) {
    if (n === 1 || n === 2) {
      return 1;
    }

    if (map.has(n)) {
      return map.get(n);
    }

    let result = fibo(n - 1, map) + fibo(n - 2, map);
    map.set(n, result);

    console.log(result);
    return result;
  }
  return 1;
}

fibo(5, new Map());

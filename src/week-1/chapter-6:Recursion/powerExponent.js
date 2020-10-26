// Ref: https://interviewcamp.io/courses/101687/lectures/2636882
// Time complexity O(log n)
// Space Complexity O(log n) in call stack memory.

// x^n
// 2^2 = 4
// 2^-2 = 0.25 => ( 1 / 2^2)

/**
 *
 * 2^16 = 2^8 * 2^8
 * 2^8 = 2^4 * 2^4
 * 2^4 = 2^2 * 2^2
 * 2^2 = 2^1 * 2^1
 */

function powerExponent(x, n) {
  let result = postivePower(x, Math.abs(n));
  // Negative power
  if (n < 0) {
    return 1 / result;
  }

  // X is negative and Power is odd.
  if (x < 0 && n % 2 !== 0) {
    return -1 * result;
  }

  return result;
}

// Base case and working towards base case, is recursion.
function postivePower(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  let result = postivePower(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return result * result;
  } else {
    return x * result * result;
  }
}

console.log(powerExponent(2, 2));
console.log(powerExponent(2, -2));

// https://interviewcamp.io/courses/101687/lectures/11742296

// Time Complexity: O(n) with memo or O(4^n)
// Space Complexity: O(n^2)

/**
 * Maze problem is simple 2D maze with 0,1
 * 0 - path
 * 1 - wall
 * Won - End of Maze
 * Failed - there is no path.
 *
 * HashMap to memoize
 *
 * left,
 * right,
 * top,
 * bottom
 *
 * Backtracking spaceship
 *  1. Idea,
 *  2. Split the steps
 *  3. Converge/collect the results
 *  4. Memoization should be applied
 *  5. Base cases should be applied.
 */
const VISITED = "VISITED";
const PATH_NOT_FOUND = "PATH_NOT_FOUND";

function initMaze(iArr) {
  if (!iArr || !iArr.length) {
    return false;
  }
  // Holds the memoization values for maze program.
  const memo = new Map();
  return recurseMaze(iArr, 0, 0, memo);
}

function outOfBounds(iArr, i, j) {
  return i < 0 || i >= iArr.length || j < 0 || j >= iArr[i].length;
}

function isWallAhead(iArr, i, j) {
  return iArr[i][j] === 1;
}

function recurseMaze(iArr, i, j, memo) {
  const memoKey = i + j;
  // Base cases - 1
  if (i === iArr.length - 1 && j === iArr[0].length - 1) {
    console.log(`paths: [${i},${j}]`, memo);
    // Reached end of maze
    return true;
  }

  // Base cases - 2
  if (outOfBounds(iArr, i, j) || isWallAhead(iArr, i, j)) {
    // We are crossing the index of 2d matrix
    return false;
  }

  // Base cases - 3
  if (memo.get(memoKey) === VISITED || memo.get(memoKey) === PATH_NOT_FOUND) {
    // Either is in current visiting stage or path is not found recorded previously.
    return false;
  }

  // Making the current step as visited, as of this is unvisited.
  if (!memo.get(memoKey)) {
    memo.set(memoKey, VISITED);
  }

  // Split the steps 4 directions
  const paths = {
    left: [i, j - 1],
    right: [i, j + 1],
    top: [i - 1, j],
    bottom: [i + 1, j],
  };

  for (const key in paths) {
    const points = paths[key];
    // Converge/collect results return true if any path is able to reach it.
    if (recurseMaze(iArr, points[0], points[1], memo)) {
      return true;
    }
  }

  // memoization
  memo.set(memoKey, PATH_NOT_FOUND);

  return false;
}

const input_1 = [
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [1, 1, 1, 0],
];

const input_2 = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [1, 1, 1, 0],
];

const output_1 = initMaze(input_1);
const output_2 = initMaze(input_2);
console.log(`input_1 able to reach end = ${output_1}`);
console.log(`input_2 able to reach end = ${output_2}`);

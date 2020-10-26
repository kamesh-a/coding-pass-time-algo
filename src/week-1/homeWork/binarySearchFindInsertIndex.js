/**
 * Homework Problem 1 (Level: Easy)
 * You are given a sorted array A and a target T. Return the index where T would be placed if inserted in order. For example,
 * A = [1,2,4,5,6,8] and T = 3, return index 2
 * A = [1,2,4,5,6,8] and T = 0, return index 0
 * A = [1,2,4,5,6,8] and T = 4, return index 3.
 * TODO: redo after a day
 *
 * Time O(log n)
 * Space: O(1)
 */

/**
 * Find least value.
 */
export default function binarySearchFindInsertIndex(i, t) {
  if (i && i.length) {
    let start = 0;
    let end = i.length - 1;
    while (start <= end) {
      let mid = Math.round((start + end) / 2);
      if (i[mid] <= t) {
        if (mid === i.length - 1) {
          return i.length;
        }
        start = mid + 1;
      } else {
        if (mid === 0 || i[mid - 1] <= t) {
          return mid;
        }
        end = mid - 1;
      }
    }
  }
  return "invalid input";
}

// console.log(binarySearchFindInsertIndex([1, 2, 4, 5, 6, 8], 3));
// console.log(binarySearchFindInsertIndex([1, 2, 4, 5, 6, 8], 0));
// console.log(binarySearchFindInsertIndex([1, 2, 4, 5, 6, 8], 4));

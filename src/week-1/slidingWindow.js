/**
 * Technique #2: Sliding Window using Two Pointers
 * Level: MediumGiven an array of positive integers, find a subarray that sums to a given number X.
 * For e.g, input = [1,2,3,5,2] and X=8,
 * Result = [3,5] (indexes 2,3)
 *
 * Ref: https://interviewcamp.io/courses/101687/lectures/11591108
 */

export default function slidingWindow(i, t) {
  let start = 0;
  let end = 0;
  let sum = i[start];
  while (start < i.length) {
    if (start > end) {
      end = start;
      sum = i[start];
    }

    if (sum < t) {
      if (end === i.length) {
        break;
      }
      end++;
      sum += i[end];
    } else if (sum > t) {
      sum -= i[start];
      start++;
    } else {
      return [start, end];
    }
  }
}

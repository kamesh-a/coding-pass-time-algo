/**
 * https://interviewcamp.io/courses/interview-academy/lectures/1678177
 *
 * Time O(log n)
 * Space: O(1)
 */

export default function binarySearch(i, t) {
  if (i && t) {
    let startIndex = 0;
    let endIndex = i.length - 1;
    while (startIndex <= endIndex) {
      let mid = Math.round((startIndex + (endIndex - startIndex)) / 2);
      if (i[mid] > t) {
        endIndex = mid - 1;
      } else if (i[mid] < t) {
        startIndex = mid + 1;
      } else {
        return mid;
      }
    }
  }
  return "invalid input";
}

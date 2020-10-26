/**
 * https://interviewcamp.io/courses/101687/lectures/11591108
 *
 * (Level: Medium) Given a String, find the longest substring with unique characters.
 *
 * For example: "whatwhywhere" --> "atwhy"
 */

function getCurrentLength(start, end) {
  return end - start + 1;
}

export default function slidingWindowFindLongestSubString(i) {
  let start = 0;
  let end = 0;
  let max = 1;
  let map = new Map();
  map.set(i[start], 0);
  let result = { start: 0, end: 0 };
  while (end < i.length) {
    end++;
    let char = i[end];
    if (map.has(char) && map.get(char) >= start) {
      start = map.get(char) + 1;
    }

    map.set(char, end);

    let currCount = getCurrentLength(start, end);
    if (currCount > max) {
      max = currCount;
      result.start = start;
      result.end = end;
    }
  }
  return i.substring(result.start, result.end + 1);
}

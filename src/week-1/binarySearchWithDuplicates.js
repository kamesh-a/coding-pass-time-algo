/**
 * 1. (Level: Easy)
 * Given a sorted array that can contain duplicates, find the first occurrence of a target element T.
 * For example, if A = [2,3,4,4,5,6] and T = 4, return index 2.
 *
 * src: https://interviewcamp.io/courses/interview-academy/lectures/2636427
 *
 * A = [1,3,4,6,6,6,7] and Target = 6, return index 3
 *
 */

export default function binarySeachWithDuplicates(i, t) {
  if (i && i.length && t) {
    let startI = 0;
    let endI = i.length - 1;
    while (startI <= endI) {
      // StartIndex = 2 and EndIndex = 2, mid =1 it goes in loop due to mid point selection
      // Let mid = Math.round((startI + (endI - startI)) / 2);
      let mid = Math.round((startI + endI) / 2);
      console.log(`startI[${startI}], endI[${endI}], mid[${mid}], t[${t}]`);
      if (i[mid] < t) {
        // mid value becomes start pointer
        console.log("start pointer");
        startI = mid + 1;
      } else if (i[mid] > t || (mid > 0 && i[mid] === t && i[mid - 1] === t)) {
        // mid value becomes end pointer
        console.log("end pointer");
        endI = mid - 1;
      } else {
        // equals case
        console.log("equal pointer");
        return mid;
      }
    }
  }
  return "invalid input";
}

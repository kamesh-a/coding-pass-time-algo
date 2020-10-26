/**
 * Level: Easy
 * Given a sorted array of Integers,
 * find the target. If the target is not found,return the element closest to the target.
 * For example,A = [1,2,4,5,7,8,9], Target = 6 -> Output Index = 3 or 4
 * (since both 5 and 7 are equally close )
 *
 * Time: O(log n)
 * Space: O(1)
 */

function recordTheClosest(i, result, mid, t) {
  if (!result) return mid;
  let previousClosest = Math.abs(i[result] - t);
  let current = Math.abs(i[mid] - t);
  if (current < previousClosest) {
    return mid;
  }

  return result;
}

export default function binarySearchToFindTheClosestTarget(i, t) {
  if (i && i.length) {
    let start = 0;
    let end = i.length - 1;
    let closest = null;
    while (start <= end) {
      let mid = Math.round((start + end) / 2);
      closest = recordTheClosest(i, closest, mid, t);
      if (i[mid] < t) {
        start = mid + 1;
      } else if (i[mid] > t) {
        end = mid - 1;
      } else {
        return mid;
      }
    }
    return closest;
  }
}

// console.log(binarySearchToFindTheClosestTarget(, 6));

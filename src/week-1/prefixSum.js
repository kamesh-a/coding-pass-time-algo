/**
 * Level: Medium
 * Given an array of integers, both -ve and +ve, find a contiguous subarray that sums to 0.
 * For example: [2,4,-2,1,-3,5,-3] --> [4,-2,1,-3]
 */

function getOutput(iArr, indices) {
  let output = [];
  for (let index = indices[0]; index <= indices[1]; index++) {
    output.push(iArr[index]);
  }
  return output;
}

export default function prefixSum(iArr, target) {
  if (iArr && typeof target == "number" && iArr.length) {
    let map = new Map();
    let sum = 0;
    for (let i = 0; i < iArr.length; i++) {
      const e = iArr[i];
      sum += e;
      console.log(sum);
      if (sum === target) {
        return getOutput(iArr, [0, i]);
      }

      // Sum is getting raised by X ( target value )
      // So, we are checking whether our hashMap has seen
      // sum value subtracted from target, if so we got the
      // start and end index.
      let key = sum - target;
      if (map.has(key)) {
        let startIndex = map.get(key);
        return getOutput(iArr, [startIndex + 1, i]);
      }
      map.set(sum, i);
    }
  }
  return "invalid input";
}

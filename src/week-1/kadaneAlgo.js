/**
 * Level: Medium
 * Given an array of integers that can be both +ve and -ve,
 * find the contiguous subarraywith the largest sum.
 * For example:  [1,2,-1,2,-3,2,-5]  -> first 4 elements have the largest sum.
 * Return (0,3)
 */

/**
 *
 * 1:
 *     m = 1
 *     o = 1 (1, 1)
 * 2:
 *     m = 3 [1+2, 2]
 *     o = 3 (3,1)
 * 3:
 *     m = 2 [3+(-1),-1]
 *     o = 3 (3,2)
 * 4:
 *     m = 4 [2+2, 2]
 *     o = 4 (3, 4)
 * 5:
 *     m = 1 [4+(-3), -3]
 *     o = 4 (4, 1 )
 *
 */

export default function kadaneAlgorithm(inputArr) {
  if (!inputArr || !inputArr.length) {
    throw new Error("Invalid input");
  }
  let output = inputArr[0];
  let maxAtEachInc = inputArr[0];
  for (let i = 1; i < inputArr.length; i++) {
    const e = inputArr[i];
    maxAtEachInc = Math.max(maxAtEachInc + e, e);
    output = Math.max(output, maxAtEachInc);
  }

  return output;
}

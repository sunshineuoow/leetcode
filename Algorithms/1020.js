// Partition Array Into Three Parts With Equal Sum


/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sum = A.reduce((prev, curr) => prev + curr, 0)
  if (sum % 3 !== 0) return false
  const middle = sum / 3
  let currSum = 0
  let count = 0
  for (let i = 0; i < A.length; i++) {
    currSum += A[i]

    if (currSum === middle) {
      count++
      currSum = 0
    }

    if (count > 3) return false
  }
  return count === 3
};

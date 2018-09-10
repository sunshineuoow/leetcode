// Monotonic Array

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  const length = A.length
  let same = increase = decrease = 0
  for (let i = 0; i < length - 1; i++) {
    if (A[i + 1] < A[i]) {
      decrease++
    } else if (A[i + 1] > A[i]) {
      increase++
    } else {
      same++
    }
  }
  return (same === length - 1 || !(increase && decrease))
}

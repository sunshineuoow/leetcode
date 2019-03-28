// N-Repeated Element in Size 2N Array

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  const set = new Set()
  for (let i = 0; i < A.length; i++) {
    const item = A[i]
    if (set.has(item)) {
      return item
    } else {
      set.add(item)
    }
  }
};
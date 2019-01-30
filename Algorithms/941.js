// Valid Mountain Array


/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if (A.length < 3) return false

  let i = 1
  let index = -1
  while(i < A.length - 1) {
    if ((A[i - 1] < A[i] && A[i] < A[i + 1]) || (A[i - 1] > A[i] && A[i] > A[i + 1])) {
      i++
    } else if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      if (index < 0) {
        index = i
        i++
      } else {
        return false
      }
    } else {
      return false
    }
  }
  return index !== -1
};

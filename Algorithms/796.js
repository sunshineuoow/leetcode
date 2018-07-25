// Rotate String

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A.length !== B.length) return false
  if (A === B) return true  
  let flag = false
  for (let i = 1; i < A.length; ++i) {
    A = A.slice(1) + A.charAt(0)
    if (A === B) {
      flag = true
      break
    }
  }
  return flag
};

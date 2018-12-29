// Reverse Only Letters


/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  const arr = S.split('')
  let index1 = 0
  let index2 = arr.length - 1
  const regexp = /[A-Za-z]/
  while (index1 < index2) {
    if (regexp.test(arr[index1])) {
      while(!regexp.test(arr[index2])) {
        index2--
      }
      const temp = arr[index1]
      arr[index1] = arr[index2]
      arr[index2] = temp
      index2--
    }
    index1++
  }
  return arr.join('')
};


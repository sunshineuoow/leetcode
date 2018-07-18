// Self Dividing Numbers

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  var result = []
  for(var i = left; i < right + 1; i++) {
    var flag = true
    i.toString().split('').forEach(function(item) {
      if (i % Number(item) !== 0) {
        flag = false 
      }
    })
    if (flag) {
      result.push(i)
    }
  }
  return result
};
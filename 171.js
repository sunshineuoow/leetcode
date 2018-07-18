// Excel Sheet Column Number

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var s_arr = s.split('').reverse()
  var result = 0
  s_arr.forEach((item, index) => {
    result += (item.charCodeAt(0) - 64) * Math.pow(26, index)
  })
  return result
};


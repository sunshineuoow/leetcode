// First Unique Character in a String

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; ++i) {
    if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
      return i
    }
  }
  return -1
};

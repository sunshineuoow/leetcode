// Longest Common Prefix


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const str = strs[0]
  if (str) {
    for (let i = 0; i < str.length; i++) {
      if (!strs.every(item => item[i] === str[i])) return str.substring(0, i)
    }
    return str
  } else {
    return ""
  }
};

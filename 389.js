// Find the Difference

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const s_arr = new Array(26).fill(0)
  const t_arr = new Array(26).fill(0)
  for (let i = 0; i < t.length; ++i) {
    if (i !== t.length - 1) {
      s_arr[s.charCodeAt(i) - 97] += 1
    }
    t_arr[t.charCodeAt(i) - 97] += 1
  }
  for (let i = 0; i <= 26; ++i) {
    if (s_arr[i] !== t_arr[i]) {
      return String.fromCharCode(i + 97)
    }
  }
};
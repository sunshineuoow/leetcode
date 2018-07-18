// Ransom Note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let ransomNote_arr = new Array(26).fill(0)
  let magazine_arr = new Array(26).fill(0)

  for (let i = 0; i < ransomNote.length; i++) {
    ransomNote_arr[ransomNote.charCodeAt(i) - 97]++
  }

  for (let i = 0; i < magazine.length; i++) {
    magazine_arr[magazine.charCodeAt(i) - 97]++
  }

  for (let i = 0; i < 26; i++) {
    if (magazine_arr[i] < ransomNote_arr[i]) return false
  }

  return true
};
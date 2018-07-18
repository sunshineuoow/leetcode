// Keyboard Row

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const letter_arr = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  return words.filter(str => {
    let flag = true
    let index = 0
    const str_arr = Array.from(new Set(str.toLowerCase().split('')))
    for(let j = 0; j < letter_arr.length; j++) {
      if (letter_arr[j].indexOf(str_arr[0]) !== -1) {
        index = j
      }
    }
    for(let i = 1; i < str_arr.length; i++) {
      if (letter_arr[index].indexOf(str_arr[i]) === -1) {
        flag = false
        break
      }
    }
    return flag
  })
};

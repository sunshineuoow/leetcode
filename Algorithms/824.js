// Goat Latin

/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  const arr = S.split(" ");
  let back = "ma"
  return arr.map(item => {
    back += "a"
    if (/^[aeiou]/i.test(item[0])) {
      return item + back
    } else {
      return (item.slice(1) + item[0] + back)
    }
  }).join(" ")
};
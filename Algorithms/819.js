// Most Common Word

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const arr = paragraph.toLowerCase().replace(/[\!\?',;\.]/g, '').split(' ')
  const stash = {}
  for (let i = 0; i < arr.length; i++) {
    if (banned.indexOf(arr[i]) > -1) continue
    if (!stash[arr[i]]) {
      stash[arr[i]] = 1
    } else {
      stash[arr[i]]++
    }
  }
  let result = null
  console.log(arr, stash)
  for (let key in stash) {
    if (result === null) result = key
    if (stash[key] > stash[result]) result = key
  }
  return result
};

console.log(mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]))
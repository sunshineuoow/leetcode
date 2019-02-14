// Can Place Flowers

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  // flowerbed = [0, ...flowerbed, 0]
  // for (let i = 1; i < flowerbed.length - 1 && n; i++) {
  //   if (flowerbed[i] + flowerbed[i - 1] + flowerbed[i + 1] === 0) {
  //     i++
  //     n--
  //   }
  // }
  // return n === 0

  let count = 0, i = 0
  while(i < flowerbed.length) {
    if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
      flowerbed[i] = 1
      count++
    }
    if (count >= n) return true
    i++
  }
  return false
};


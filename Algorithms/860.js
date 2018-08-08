// Lemonade Change

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  if (bills[0] !== 5) return false
  const change = {5: 0, 10: 0}
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      change[5]++
    } else if (bills[i] === 10) {
      change[5]--
      change[10]++
    } else if (bills[i] === 20) {
      if (change[10] > 0) {
        change[10]--
        change[5]--
      } else {
        change[5] -= 3
      }
    }
    if (change[5] < 0) return false
  }
  return true
};

// 一定是5元先消耗完
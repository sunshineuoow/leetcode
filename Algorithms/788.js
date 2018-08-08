// Rotated Digits

/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  // 数字必须由0125689这几个数字组成，并且必须包含2589这4个数字中的一个或者多个
  let count = 0
  for (let i = 1; i <= N; i++) {
    if (/^[0125689]+$/g.test(i) && /[2569]/g.test(i)) count++
  }
  return count
};

var rotatedDigits2 = function(N) {
  let count = 0
  for (let i = 1; i <= N; i++) {
    let temp = i;
    let flag = false
    while (temp > 0) {
      const mod = temp % 10
      if (mod === 3 || mod === 4 || mod === 7) {
        flag = false
        break
      }
      if (mod === 2 || mod === 5 || mod === 6 || mod === 9) flag = true
      temp = Math.floor(temp / 10)
    }
    if (flag) count++
  }
  return count
};
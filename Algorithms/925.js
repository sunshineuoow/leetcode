// Long Pressed Name


/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let right = 0, left = 0
  while (left < name.length) {
    let count = 1

    while (left < name.length - 1 && name[left] === name[left + 1]) {
      count++
      left++
    }

    while (count > 0 && right < typed.length && typed[right] === name[left]) {
      count--
      right++
    }

    if (count > 0) return false

    while (right < typed.length && typed[right] === name[left]) {
      right++
    }

    left++
  }
  return true
};

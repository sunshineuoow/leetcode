// Minimum Index Sum of Two Lists

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let sum = -1
  let result = []
  for (let i = 0; i < list1.length; i++) {
    const index = list2.indexOf(list1[i])
    if (index !== -1) {
      const sumIndex = i + index
      if (sum === -1) sum = sumIndex
      if (sum > sumIndex) {
        result = [list[i]]
      } else if (sum === sumIndex) {
        result.push(list1[i])
      }
    }
  }
  return result
};
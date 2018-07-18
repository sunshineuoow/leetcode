// Two Sum II - Input array is sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let index1 = 0, index2 = numbers.length - 1
  let result = []
  while(index1 < index2) {
    let sum = numbers[index1] + numbers[index2]
    if (sum < target) {
      index1++
    } else if (sum > target) {
      index2--
    } else {
      result.push(index1 + 1)
      result.push(index2 + 1)
      return result
    }
  }
};


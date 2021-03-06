// Array Partition I

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  // 先排序，后找双数索引值求和
  const arr = nums.sort((x, y) => x - y)
  let sum = 0
  for (let i = 0; i < arr.length; i += 2) {
    sum += arr[i]
  }
  return sum
}

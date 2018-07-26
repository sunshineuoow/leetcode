// Array Partition I

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  // 先排序，后找双数索引值求和
  const arr = nums.sort((x, y) => x < y ? -1 : x > y ? 1 : 0)
  console.log(arr)
  let sum = 0
  for (let i = 0; i < arr.length; i += 2) {
    sum += arr[i]
  }
  return sum
}

console.log(arrayPairSum([6214, -2290, 2833, -7908]))
// Shortest Unsorted Continuous Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let arr = [...nums]
  let indexArr = []
  arr.sort((a, b) => a - b)
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] !== nums[i]) indexArr.push(i)
  }

  if (indexArr.length <= 1) {
    return indexArr.length
  } else {
    return indexArr[indexArr.length - 1] - indexArr[0] + 1
  }
};

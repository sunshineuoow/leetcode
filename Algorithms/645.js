// Set Mismatch


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const arr = new Array(nums.length + 1)
  const result = [0, 0]
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] = (arr[nums[i]] || 0) + 1
  }
  for (let i = 1; i < arr.length; i++) {
    if (!arr[i]) result[1] = i
    if (arr[i] === 2) result[0] = i
  }
  return result
};

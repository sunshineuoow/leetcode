// Product of Array Except Self


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const result = []
  let value = 1
  for (let i = 0; i < nums.length; i++) {
      result[i] = value
      value *= nums[i]
  }

  value = 1
  for (let i = nums.length - 1; i >=0; i--) {
      result[i] *= value
      value *= nums[i]
  }
  return result
};

console.log(productExceptSelf([1,2,3,4])) 
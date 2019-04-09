// Array Nesting

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    for (let j = i; nums[j] >= 0; count++) {
      let stash = nums[j]
      nums[j] = -1
      j = stash
    }
    result = Math.max(count, result)
  }
  return result
};

console.log(arrayNesting([5,4,0,3,1,6,2]))
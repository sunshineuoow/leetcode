// Third Maximum Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER, max3 = Number.MIN_SAFE_INTEGER

  nums.forEach(num => {
    if (num > max1) {
      max3 = max2
      max2 = max1
      max1 = num
    } else if (num > max2 && num !== max1) {
      max3 = max2
      max2 = num
    } else if (num > max3 && num !== max1 && num !== max2) {
      max3 = num
    }
  })

  return max3 !== Number.MIN_SAFE_INTEGER ? max3 : max1
};

console.log(thirdMax([3,2,1]))

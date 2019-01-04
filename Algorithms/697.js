// Degree of an Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const map = {}
  let degree = 0
  let result = nums.length
  nums.forEach((item, index) => {
    if (map[item] !== undefined) {
      map[item].push(index)
    } else {
      map[item] = [index]
    }
  })

  for (let key of Object.keys(map)) {
    const d = map[key].length
    if (d >= degree) {
      const length = map[key][d - 1] - map[key][0] + 1
      if (d > degree) {
        degree = d
        result = length
      } else if (d === degree) {
        if (length < result) result = length
      }
    }
  }

  return result
};

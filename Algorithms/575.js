// Distribute Candies

/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  const length = Array.from(new Set(candies)).length
  if (length > candies.length / 2) {
      return candies.length / 2
  } else {
      return length
  }
};
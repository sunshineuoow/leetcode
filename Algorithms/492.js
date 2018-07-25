// Construct the Rectangle

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let item
  let dis = area - 1  
  const max = Math.sqrt(area)
  const result = []
  for (let i = 1; i <= max; ++i) {
    item = area / i
    if (item % 1 === 0) {
      if (item - i <= dis) {
        dis = item - i
        result[0] = item
        result[1] = i
      }
    }
  }
  return result
};
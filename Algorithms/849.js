// Maximize Distance to Closest Person


/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let result = 0
  let lastIndex = 0
  for (let i = 0; i < seats.length; i++) {
    if (seats[i]) {
      lastIndex = i
      continue
    }
    const nextIndex = seats.indexOf(1, i)
    let distance = i - lastIndex
    if (nextIndex > -1) distance = distance > 0 ? Math.min(distance, nextIndex - i) : nextIndex - i
    result = Math.max(result, distance)
  }
  return result
};

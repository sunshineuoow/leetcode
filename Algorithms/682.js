// Baseball Game

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let round = [], 
  sum = 0,
  points = 0
  for (let i = 0; i < ops.length; i++) {
    switch(ops[i]) {
      case "C":
        points = round.pop()
        sum -= points
        break
      case "D":
        points = 2 * round[round.length - 1]
        round.push(points)
        sum += points
        break
      case "+":
        points = round[round.length - 1] + round[round.length - 2]
        round.push(points)
        sum += points
        break
      default:
        round.push(Number(ops[i]))
        sum += Number(ops[i])
        break
    }
  }
  return sum
};

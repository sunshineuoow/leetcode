// Magic Squares In Grid

/**
 * check squares is magic
 * @param {number[][]} squares
 * @returns {boolean}
 */
function isMagicSquares(squares) {
  const arr = []
  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares[i].length; j++) {
      if (squares[i][j] < 1 || squares[i][j] > 9 || arr[squares[i][j]]) {
        return false
      } else {
        arr[squares[i][j]] = (arr[squares[i][j]] || 0) + 1
      }
    }
  }
  const sum = squares[0].reduce((prev, curr) => prev + curr, 0)
  let lineSum = 0
  for (let i = 1; i < squares.length; i++) {
    lineSum = squares[i].reduce((prev, curr) => prev + curr, 0)
    if (sum !== lineSum) return false
  }

  for (let i = 0; i < squares[0].length; i++) {
    lineSum = 0
    for (let j = 0; j < squares.length; j++) {
      lineSum += squares[j][i]
    }
    if (sum !== lineSum) return false
  }

  lineSum = 0
  for (let i = j = 0; i < squares.length && j < squares[0].length; ++i && ++j) {
    lineSum += squares[i][j]
  }
  if (sum !== lineSum) return false

  lineSum = 0
  for (let i = 0, j = squares.length - 1; i < squares[0].length && j >= 0; ++i && --j) {
    lineSum += squares[i][j]
  }
  return sum === lineSum
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  let count = 0
  for (let i = grid.length - 1; i >= 2; i--) {
    for (let j = grid[i].length - 1; j >= 2; j--) {
      const square = [
        grid[i - 2].slice(j - 2, j + 1),
        grid[i - 1].slice(j - 2, j + 1),
        grid[i].slice(j - 2, j + 1)
      ]
      if (isMagicSquares(square)) count++
    }
  }
  return count
};

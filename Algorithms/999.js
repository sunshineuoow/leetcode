// Available Captures for Rook

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let rook
  let result = 0
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') rook = { i, j }
    }
  }

  // up
  for (let i = rook.j; i >= 0; i--) {
    if (board[i][rook.j] === 'B') break
    if (board[i][rook.j] === 'p') {
      result++
      break
    }
  }

  // down
  for (let i = rook.j; i < board.length; i++) {
    if (board[i][rook.j] === 'B') break
    if (board[i][rook.j] === 'p') {
      result++
      break
    }
  }

  // left
  for (let j = rook.i; j >= 0; j--) {
    if (board[rook.i][j] === 'B') break
    if (board[rook.i][j] === 'p') {
      result++
      break
    }
  }

  // right
  for (let j = rook.i; j < board[rook.i].length; j++) {
    if (board[rook.i][j] === 'B') break
    if (board[rook.i][j] === 'p') {
      result++
      break
    }
  }

  return result
}


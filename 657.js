// Judge Route Circle

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  var move_obj = {}
  for (var i = 0; i < moves.length; i++) {
    if (!move_obj[moves[i]]) {
      move_obj[moves[i]] = 1
    } else {
      move_obj[moves[i]] += 1
    }
  }
  return move_obj['U'] === move_obj['D'] && move_obj['L'] === move_obj['R']
};
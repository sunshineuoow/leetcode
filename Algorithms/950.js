// Reveal Cards In Increasing Order

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  deck.sort((a, b) => a - b)
  const result = []
  for (let i = deck.length - 1; i >= 0; i--) {
    if (result.length < 2) {
      result.unshift(deck[i])
    } else {
      result.unshift(deck[i], result.pop())
    }
  }
  return result
}

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]))
// X of a Kind in a Deck of Cards


/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  const gcd = (a, b) => !b ? a : gcd(b, a % b)

  const obj = deck.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})
  return Object.values(obj).reduce((acc, cur) => gcd(acc, cur), 0) >= 2
};

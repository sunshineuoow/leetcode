// Best Time to Buy and Sell Stock II

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0
  let min = 0
  let max = 0
  for (let i = 0; i < prices.length; ++i) {
    if (prices[i + 1] > prices[i]) {
      min = prices[i]
    }
  }
};
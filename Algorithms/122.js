// Best Time to Buy and Sell Stock II

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0
  let min = prices[0]
  for (let i = 1; i < prices.length - 1; ++i) {
    if (prices[i] < min) min = prices[i]
    if (prices[i + 1] < prices[i]) {
      profit += prices[i] - min
      min = prices[i + 1]
    }
  }
  if (prices[prices.length - 1] > min) profit += prices[prices.length - 1] - min
  return profit > 0 ? profit : 0
};

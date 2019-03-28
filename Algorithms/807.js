// Max Increase to Keep City Skyline

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  const leftMax = []
  const topMax = []
  let result = 0
  for (let i = 0; i < grid.length; i++) {
    leftMax.push(Math.max(...grid[i]))
  }
  for (let i = 0; i < grid[0].length; i++) {
    let max = 0
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] > max) max = grid[j][i]
    }
    topMax.push(max)
  }
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      result += Math.min(leftMax[i], topMax[j]) - grid[i][j]
    }
  }

  return result
};

// Fibonacci Number

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0) return 0
  if (N === 1) return 1
  return fib(N - 1) + fib(N - 2)
};

var fibNew = function (N) {
  if (N < 2) return N

  let a = 0, b = 1
  for (let i = 1; i < N - 1; i++) {
    b = a + b
    a = b - a
  }
  return a + b
}

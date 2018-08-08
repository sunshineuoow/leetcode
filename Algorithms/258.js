// Add Digits

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  const result = num % 9
  return (result !== 0 || num === 0) ? result : 9
};

// (a_n * 10^n + a_n-1 ^ 10^n-1 + ... + a_1 * 10 + a_0) % 9 = (a_n + a_n-1 +... + a_1 + a_0) % 9
// because 10^n % 9 = 1
// (a_n + a_n-1 +... + a_1 + a_0) % 9 will eventually be a single digit

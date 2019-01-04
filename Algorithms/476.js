// Number Complement

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  return parseInt(num.toString(2).replace(/1/g, 't').replace(/0/g, '1').replace(/t/g, '0'), 2)
};



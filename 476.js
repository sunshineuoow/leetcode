// Number Complement

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  console.log(num.toString(2).replace(/0/g, '2').replace(/1/g, '0').replace(/2/g, '1'))
  return parseInt(num.toString(2).replace(/0/g, '2').replace(/1/g, '0').replace(/2/g, '1'), 2)
};

console.log(findComplement(20161211))


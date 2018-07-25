// Jewels and Stones

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var J_arr = J.split('');
    var S_arr = S.split('');
    var sum = 0;
    S_arr.forEach(function(s) {
        J_arr.forEach(function(j) {
           if(s === j)sum++;
        })
    })
    return sum;
};
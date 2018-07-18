// Unique Morse Code Words

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var morse_arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    words = words.map(function(item) {
        return item.split('').map(function(char) {
            return morse_arr[char.charCodeAt(0) - 97];
        }).join('');
    })
    var unique_obj = {};
    var result = 0;
    words.forEach(function(item) {
        if (!unique_obj[item]) {
            unique_obj[item] = true
            result++;
        }
    })
    return result;
};

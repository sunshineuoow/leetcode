// Student Attendance Record I

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  return !(/LLL|\S*A\S*A/).test(s)
};

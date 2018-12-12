// Unique Email Addresses


/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const result = []
  emails.forEach(email => {
    const newEmail = email.substring(0, email.indexOf('+')).replace(/\./g, '') + email.substring(email.indexOf('@'))
    if (!result.includes(newEmail)) result.push(newEmail)
  })
  return result.length
};

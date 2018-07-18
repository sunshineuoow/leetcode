// Subdomain Visit Count

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  var domain_obj = {}
  var result = []
  for (var i = 0; i < cpdomains.length; i++) {
    var arr = cpdomains[i].split(' ')
    var domain = arr[1].slice(arr[1].indexOf('.') + 1)
    var domain_1 = arr[1].slice(arr[1].lastIndexOf('.') + 1)
    var temp_arr = [...new Set([arr[1], domain, domain_1])]
    for (var j = 0; j < temp_arr.length; j++) {
      if (domain_obj[temp_arr[j]]) {
        domain_obj[temp_arr[j]] += Number(arr[0])
      } else {
        domain_obj[temp_arr[j]] = Number(arr[0])
      }
    }
  }
  for (var domain in domain_obj) {
    var domain_str = String(domain_obj[domain]) + ' ' + domain
    result.push(domain_str)
  }
  return result
};
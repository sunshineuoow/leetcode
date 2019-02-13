// Sum of Even Numbers After Queries

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
// var sumEvenAfterQueries = function(A, queries) {
//   return queries.map(item => {
//     A[item[1]] += item[0]
//     return A.reduce((sum, cur) => cur % 2 === 0 ? sum + cur : sum, 0)
//   })
// };

var sumEvenAfterQueries = function(A, queries) {
  const result = []
  let current = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) current += A[i]
  }

  for (let i = 0; i < queries.length; i++) {
    if (A[queries[i][1]] % 2 === 0) current -= A[queries[i][1]]

    A[queries[i][1]] += queries[i][0]
    if (A[queries[i][1]] % 2 === 0) current += A[queries[i][1]]
    result.push(current)
  }

  return result
}

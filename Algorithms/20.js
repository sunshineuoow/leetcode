// Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const arr = s.split('')
  const stack = []
  for (let i = 0; i < arr.length; i++) {
    item = arr[i]
    switch(item) {
      case '(':
      case '[':
      case '{':
        stack.push(item)
        break
      case ')':
        if (stack.pop() !== '(') return false
        break
      case ']':
        if (stack.pop() !== '[') return false
        break
      case '}':
        if (stack.pop() !== '{') return false
        break
      default:
        return false
    }
  }
  return stack.length === 0
};

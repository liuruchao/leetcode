/*
1. 利用栈结构，将左括号入栈，然后遇到右括号时，将栈顶一个括号出栈，判断两个括号是否匹配
*/
var isValid = function (s) {
  // 判断字符串个数是否偶数，不是，则一定不匹配
  if (s.length % 2 === 1) {
    return false
  }
  // 存放左括号的栈
  let leftBracketStack = []

  for (let i = 0; i < s.length; i++) {
    if (isLeftBracket(s[i])) {
      leftBracketStack.push(s[i])
    } else {
      if (!isMatching(leftBracketStack.pop(), s[i])) {
        return false
      }
    }
  }

  if (leftBracketStack.length) {
    return false
  } else {
    return true
  }
}

function isLeftBracket(s) {
  if (["(", "{", "["].indexOf(s) > -1) {
    return true
  } else {
    return false
  }
}

function isMatching(s1, s2) {
  switch (`${s1}${s2}`) {
    case "()":
      return true
    case "[]":
      return true
    case "{}":
      return true
    default:
      return false
  }
}

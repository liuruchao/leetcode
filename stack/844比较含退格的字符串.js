/*
1. 时间复杂度O(M+N),空间复杂度O(M+N),
*/
var backspaceCompare = function (S, T) {
  let sResultStack = []
  let tResultStack = []

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== "#") {
      sResultStack.push(S[i])
    } else {
      sResultStack.pop()
    }
  }
  for (let j = 0; j < T.length; j++) {
    if (T[j] !== "#") {
      tResultStack.push(T[j])
    } else {
      tResultStack.pop()
    }
  }

  return sResultStack.join("") === tResultStack.join("")
}

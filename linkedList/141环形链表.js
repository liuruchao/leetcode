/*
1. 如果是环状，则环内的节点会被遍历两次，第一次遍历时存储一个状态，环状的话，则会再次遍历到
*/
var hasCycle = function (head) {
  let currentNode = head
  let flag = false
  while (currentNode) {
    if (currentNode.sign) {
      flag = true
      break
    } else {
      currentNode.sign = 1
      currentNode = currentNode.next
    }
  }

  return flag
}

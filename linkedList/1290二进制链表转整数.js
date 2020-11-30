/*
1. 最先想到的是遍历该链表，然后拿到二进制数值，用js方法转成十进制，但是属于偷懒做法
*/

var getDecimalValue = function (head) {
  if (!head) return
  return parseInt(returnDigit(head), 2)
}

function returnDigit(node) {
  if (!node.next) {
    return node.val
  }

  return String(node.val) + String(returnDigit(node.next))
}

/* 
2. 想到递归到尾节点，然后依次返回数值乘以2的n次方，但这个n不好设置，看了其它人答案，可以从高位遍历乘2累加
*/

var getDecimalValue = function (head) {
  let result = 0

  while (head) {
    result = 2 * result + head.val
    head = head.next
  }

  return result
}

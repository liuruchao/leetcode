/*
 1. 递归，从头结点开始，然后开始反转，递归将未反转的链表和已反转的链表头节点作为入参
 到递归函数，然后先保存未反转链表头节点（currentNode）的下一个节点，然后取未反转链表的头结点，作为已反转
 链表的头节点，最后在递归调用该函数。

*/
function reverseNode(currentNode, prevNode) {
  if (!currentNode) return prevNode
  // 将下一个节点保存起来
  let nextNode = currentNode.next

  // 将当前节点后继指针指向上一个节点
  currentNode.next = prevNode

  return reverseNode(nextNode, currentNode)
}
var reverseList = function (head) {
  let prevNode = null
  return reverseNode(head, prevNode)
}

/*
 思路没想到，先将链表形成闭环，然后找到对应的头结点新位置，来切开链表
*/
var rotateRight = function (head, k) {
  if (!head || !k) {
    return head
  }

  let nodeCount = 1
  let currentNode = head
  // 找到尾结点，并将该链表形成闭环
  while (currentNode && currentNode.next) {
    nodeCount++
    currentNode = currentNode.next
  }
  currentNode.next = head

  // 新链表的尾节点在旧链表中的位置
  let newEndNodeIndex = Math.abs(nodeCount - (k % nodeCount))

  // 遍历旧链表找到该尾节点
  while (newEndNodeIndex > 1) {
    newEndNodeIndex--
    head = head.next
  }

  let newHead = head.next
  head.next = null
  return newHead
}

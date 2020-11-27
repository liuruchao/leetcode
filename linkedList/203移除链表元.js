var removeElements = function (head, val) {
  // 哨兵节点
  let guardNode = new ListNode(-1)
  guardNode.next = head
  // 前驱节点，用来删除匹配节点
  let preNode = guardNode
  let currentNode = head
  while (currentNode) {
    if (currentNode.val === val) {
      preNode.next = currentNode.next
    } else {
      preNode = currentNode
    }
    currentNode = currentNode.next
  }

  return guardNode.next
}

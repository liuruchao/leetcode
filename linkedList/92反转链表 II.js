var reverseBetween = function (head, m, n) {
  // 哨兵节点
  let guardNode = new ListNode(-1)
  guardNode.next = head

  // 慢指针
  let slowNode = guardNode
  // 快指针
  let fastNode = head
  // 节点位置
  let index = 0
  while (fastNode) {
    index++
    // 找到反转起始节点
    if (index === m) {
      let prevNode = null
      // 记录下待反转链表的初始节点
      let headNode = fastNode
      // 开始反转这段位置的链表
      while (index <= n) {
        // 记录下一个节点
        let nextNode = fastNode.next
        // 反转
        fastNode.next = prevNode

        prevNode = fastNode
        fastNode = nextNode
        index++
      }
      // 将m之前的链表和反转的链表相连
      slowNode.next = prevNode
      // 将反转了链表和后边未反转的链表相连
      headNode.next = fastNode
    } else {
      slowNode = slowNode.next
      fastNode = fastNode.next
    }
  }

  return guardNode.next
}

var deleteDuplicates = function (head) {
  // 添加哨兵节点
  let guardNode = new ListNode(null)

  guardNode.next = head

  // 慢指针
  let slowNode = guardNode
  // 快指针
  let fastNode = head

  while (fastNode && fastNode.next) {
    if (fastNode.val === fastNode.next.val) {
      let sameValue = fastNode.val
    // 当遇到值相等的节点时，继续向后遍历，直到下一个不相等节点
      while (fastNode && fastNode.val === sameValue) {
        fastNode = fastNode.next
      }
      // 将中间相等的节点删除
      slowNode.next = fastNode
    } else {
      fastNode = fastNode.next
      slowNode = slowNode.next
    }
  }

  return guardNode.next
}

/*
1. 快慢指针法
*/
var middleNode = function (head) {
  // 慢指针
  let lowPointer = head
  // 快指针
  let fastPointer = head

  while (fastPointer && fastPointer.next) {
    // 慢指针每次向后移一位
    lowPointer = lowPointer.next
    // 快指针每次向后移两位，奇数个节点链表，快指针可以移到最后一位，此时慢指针指向中间节点
    // 偶数个节点列表，快指针指向尾节点的后一位时，慢指针指向中间两个节点的第二个
    fastPointer = fastPointer.next.next
  }

  return lowPointer
}

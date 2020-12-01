/*
  1. 两个链表依次遍历一遍，然后后遍历的判断每个节点是否遍历过
 */
var getIntersectionNode = function (headA, headB) {
  while (headA) {
    headA.sign = true
    headA = headA.next
  }

  while (headB) {
    if (headB.sign) {
      return headB
    } else {
      headB = headB.next
    }
  }

  return null
}

/* 
 2. 借助一个数据结构
*/
var getIntersectionNode = function (headA, headB) {
  // 存储已遍历链表的节点
  let nodeMap = new Map()
  while (headA) {
    nodeMap.set(headA, 1)
    headA = headA.next
  }

  while (headB) {
    if (nodeMap.has(headB)) {
      return headB
    } else {
      headB = headB.next
    }
  }

  return null
}

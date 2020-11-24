/*
1. 遍历链表找到值不同与前驱节点那个节点，然后删除前面相同的，但该方法需要特殊处理最后一个节点，
因为有可能最后一段的链表是相同的值
*/
var deleteDuplicates = function (head) {
  // 存储几个相同值的节点中排序最靠前的一个
  let currentNode = head
  // 遍历用的节点
  let traverseNode = head
  while (traverseNode) {
    const nextNode = traverseNode.next
    if (!nextNode || nextNode.val !== traverseNode.val) {
      currentNode.next = nextNode
      currentNode = nextNode
    }

    traverseNode = nextNode
  }

  return head
}

/*
2. 判断相邻的两个节点值是否相同，相同则进行删除
*/

var deleteDuplicates = function (head) {
  let currentNode = head
  while (currentNode && currentNode.next) {
    if (currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next
    } else {
      currentNode = currentNode.next
    }
  }

  return head
}

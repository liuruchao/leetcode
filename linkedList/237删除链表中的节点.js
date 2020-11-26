/*
 常规删除节点的方式是，将被删除节点的前驱节点的next指向后继节点，
 但该题只给了一个删除节点，因此获取不到其前驱节点，所有将其后继节点的值换到该节点
 然后删除后继节点
*/
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}

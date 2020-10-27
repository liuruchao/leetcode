/* 
  1.使用递归，(我的答案，使用三点拓展符)
  递归公式  printNode = print(node) -> print(node.left) -> print(node.right)
  递归终止条件  node === null
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  return !root
    ? []
    : [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right),
      ]
}

/* 
  2.使用递归，(其他人答案，拼接数组，性能更快)
  递归公式  printNode = print(node) -> print(node.left) -> print(node.right)
  递归终止条件  node === null
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  return !root
    ? []
    : [root.val].concat(
        preorderTraversal(root.left),
        preorderTraversal(root.right)
      )
}

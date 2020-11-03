/* 
  1. 递归，反转二叉树可以将其拆解成每颗子树，进行反转，递归终止条件，仍然是遇到叶子节点后。

  该题比较简单，是我真正意义上自己独立解出来的第一道题
*/
var invertTree = function (root) {
  if (!root) return null

  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left),
  }
}

/* 
 2. 第一个写法，并不好，是直接返回了一颗新二叉树，应该在原树上进行反转
 */

var invertTree = function (root) {
  if (!root) return null

  let saveNode = invertTree(root.left)

  root.left = invertTree(root.right)

  root.right = saveNode

  return root
}

/* 3. 迭代 ，广度优先搜索

*/

var invertTree = function(root) {
    if(!root) return null
 
    // 申请一个队列
    let queue = []
    queue.push(root)
 
    // 迭代遍历
    while(queue.length){
        // 出队
        let node = queue.shift()
        // 该节点左右子树反转
        let saveNode = node.left
        node.left = node.right
        node.right = saveNode
        
        // 入队
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }
   return root
 };
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 이진트리가 주어지면, 전위 순회 결과를 반환
//전: 루트- 왼 -오
var preorderTraversal = function(root) {
    const result = [];
   
   function preorder(node) {
       if (!node) return;         
       result.push(node.val);  //현재   
       preorder(node.left);           
       preorder(node.right);          
   }
   
   preorder(root);
   return result;
};
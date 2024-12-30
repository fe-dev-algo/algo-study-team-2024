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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];

  function dfs(node, currentPath, currentSum) {
    if (!node) return;

    // 현재 노드 경로 추가 및 현재 합
    currentPath.push(node.val);
    currentSum += node.val;

    // 리프 노드일 때, 합이 targetSum과 일치하면 정답에 경로 추가
    if (!node.left && !node.right && currentSum === targetSum) {
      result.push([...currentPath]);
    }

    // 왼쪽, 오른쪽 자식으로 탐색
    dfs(node.left, currentPath, currentSum);
    dfs(node.right, currentPath, currentSum);

    // 탐색이 끝난 후 현재 노드를 경로에서 제거 (백트래킹)
    currentPath.pop();
  }

  // DFS 시작
  dfs(root, [], 0);

  return result;
};

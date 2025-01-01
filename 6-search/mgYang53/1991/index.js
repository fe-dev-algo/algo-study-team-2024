const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

function createTree(input) {
  const tree = {};

  input.forEach((line) => {
    const [parent, left, right] = line.split(" ");
    tree[parent] = {
      left: left !== "." ? left : null,
      right: right !== "." ? right : null,
    };
  });

  return tree;
}

function traverseTree(tree, root, order, result) {
  if (!root) return;

  const { left, right } = tree[root];

  // 전위 순회 : 현재 Root 먼저
  if (order === "pre") result.push(root);

  // 왼쪽 자식 노드 방문
  traverseTree(tree, left, order, result);

  // 중위 순회 : 왼쪽 자식 이후 현재 root
  if (order === "in") result.push(root);

  // 오른쪽 자식 노드 방문
  traverseTree(tree, right, order, result);

  // 후위 순회 : 양쪽 자식 이후 현재 root
  if (order === "post") result.push(root);
}

const tree = createTree(input.slice(1)); // 트리 생성
const rootNode = "A"; // 루트 노드는 항상 A

const preResult = []; // 전위순회 결과배열
const inResult = []; // 중위순회 결과배열
const postResult = []; // 후위순회 결과배열

traverseTree(tree, rootNode, "pre", preResult);
traverseTree(tree, rootNode, "in", inResult);
traverseTree(tree, rootNode, "post", postResult);

console.log(preResult.join(""));
console.log(inResult.join(""));
console.log(postResult.join(""));

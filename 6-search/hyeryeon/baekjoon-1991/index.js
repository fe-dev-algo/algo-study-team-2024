const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); 
const tree = {};

for (let i = 1; i <= N; i++) {
    const [node, left, right] = input[i].split(" ");
    tree[node] = { left, right };
}

// 순회 결과 저장
let preorderResult = "";  
let inorderResult = "";   
let postorderResult = ""; 

// 전위: 루트 -> 왼 -> 오
const preorder = (node) => {
    if (node === ".") return;
    preorderResult += node;
    preorder(tree[node].left);
    preorder(tree[node].right);
};

// 중위: 왼 -> 루트 -> 오
const inorder = (node) => {
    if (node === ".") return;
    inorder(tree[node].left);
    inorderResult += node;
    inorder(tree[node].right);
};

// 후위: 왼 -> 오 -> 루트
const postorder = (node) => {
    if (node === ".") return;
    postorder(tree[node].left);
    postorder(tree[node].right);
    postorderResult += node;
};

preorder("A");
inorder("A");
postorder("A");
console.log(preorderResult);
console.log(inorderResult);
console.log(postorderResult);

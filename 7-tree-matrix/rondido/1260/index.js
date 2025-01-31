// 그래프를 구현하는것부터 이미 막혔음.
// 노드와 간선에 대한 개념도 없었음.
//그래서 노드와 간선에 대한 개념부터 인지하고 트리 구조를 손으로 그려 봄.
// 하지만 이걸 코드로 구현하지 못함.
// chatgpt의 도움을 받아서 그래프를 구현
// dfs의 경우 재귀함수를 사용하여 구현해야 함.
// 이것 또한 개념만 알고 코드로 구현 하지 못함.
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [m, n, v] = input[0].split(" ").map(Number);
const lines = input.slice(1).map((line) => line.split(" ").map(Number));

let arr = Array.from({ length: m + 1 }, () => []);

lines.forEach(([u, v]) => {
  arr[u].push(v);
  arr[v].push(u);
});

let visited = Array(arr.length).fill(false);

function dfs(graph, v, visited) {
  visited[v] = true;
  // console.log(v);
  for (i of graph[v]) {
    console.log(i);
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

dfs(arr, v, visited);

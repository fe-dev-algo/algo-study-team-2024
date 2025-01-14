const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const computerLen = parseInt(input[0]);
const networkLen = parseInt(input[1]);

const visited = Array(computerLen + 1).fill(false); // 방문 여부 배열
let count = 0;

// 그래프 생성
const graph = Array.from({ length: computerLen + 1 }, () => []);

for (let i = 2; i < 2 + networkLen; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// dfs 탐색
function dfs(nodeNum) {
  visited[nodeNum] = true;
  for (const neighbor of graph[nodeNum]) {
    if (!visited[neighbor]) {
      count++;
      dfs(neighbor);
    }
  }
}

// 1번 컴퓨터부터 탐색 시작
dfs(1);

console.log(count);

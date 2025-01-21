let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]); //컴퓨터 수
let m = Number(input[1]); // 연결된 컴퓨터 쌍의 수
let startindex = 2;
let endindex = m + 1;

let graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = startindex; i <= endindex; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = [];
for (let i = 0; i <= n; i++) {
  visited.push(false); 
}
let count = 0;

function dfs(x) {
  visited[x] = true;
  count++;

  for (y of graph[x]) {
    if (!visited[y]) {
      dfs(y);
    }
  }
}

dfs(1);
console.log(count - 1);

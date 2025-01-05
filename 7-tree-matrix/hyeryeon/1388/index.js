const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(""));

const visited = [];
for (let i = 0; i < N; i++) {
  visited.push(Array(M).fill(false));
}

function dfs(x, y) {
  const type = board[x][y]; 
  visited[x][y] = true;

  let dx = 0;
  let dy = 0;

  if (type === "-") {
    dy = 1; // -는 열이 +1
  } else if (type === "|") {
    dx = 1; // |는 행이 +1
  }
  const nx = x + dx;
  const ny = y + dy;

  if (nx < N && ny < M && board[nx][ny] === type && !visited[nx][ny]) {
    //if (다음 칸이 배열 범위 내에 있고 &&다음 칸이 현재 칸과 같은 타입이며 &&다음 칸이 방문되지 않았다면) {
    dfs(nx, ny);
  }
}

let Count = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j]) {
      Count++;
      dfs(i, j);
    }
  }
}

console.log(Count);

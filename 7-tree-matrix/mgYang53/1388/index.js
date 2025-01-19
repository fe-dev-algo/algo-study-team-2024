const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const floor = input.map((line) => line.split(""));

const visited = Array.from({ length: N }, () => Array(M).fill(false)); // 방문 여부 배열
let count = 0;

// 방향 설정
const directions = {
  "-": [0, 1], // 가로: 오른쪽
  "|": [1, 0], // 세로: 아래쪽
};

// DFS 함수
function dfs(x, y, type) {
  visited[x][y] = true; // 현재 위치 방문

  const [dx, dy] = directions[type];
  const nextX = x + dx;
  const nextY = y + dy;

  // 현재 위치가 범위를 벗어나지 않고, 아직 방문하지 않은 곳, 다음 위치가 현재랑 같은 타입일 때
  if (
    nextX < N &&
    nextY < M &&
    !visited[nextX][nextY] &&
    floor[nextX][nextY] === type
  ) {
    dfs(nextX, nextY, type);
  }
}

// 전체 바닥 탐색
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j]) {
      count++;
      dfs(i, j, floor[i][j]);
    }
  }
}

console.log(count);

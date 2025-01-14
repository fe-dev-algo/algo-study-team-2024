const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]); // 지도의 크기
const map = input.slice(1).map((line) => line.split("").map(Number));

// 방문여부 배열
const visited = Array.from({ length: N }, () => Array(N).fill(false));

// 단지별 집의 수 배열
const complexes = [];

// 이동방향 (상, 하, 좌, 우)
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// 단지별 집의 수 찾는 bfs 함수
function bfs(x, y) {
  let count = 0;
  const queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length > 0) {
    const [currentX, currentY] = queue.shift();
    count++;

    for (const [dx, dy] of directions) {
      const nextX = currentX + dx;
      const nextY = currentY + dy;

      // 지도를 벗어나지 않고, 방문하지 않고, 집인 경우
      if (
        nextX >= 0 &&
        nextX < N &&
        nextY >= 0 &&
        nextY < N &&
        !visited[nextX][nextY] &&
        map[nextX][nextY] === 1
      ) {
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY]);
      }
    }
  }

  return count;
}

// 모든 노드 탐색, 단지 찾기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && map[i][j] === 1) {
      const complexSize = bfs(i, j);
      complexes.push(complexSize);
    }
  }
}

// 단지별 집의 수 오름차순 정렬
complexes.sort((a, b) => a - b);

console.log(complexes.length);
console.log(complexes.join("\n"));

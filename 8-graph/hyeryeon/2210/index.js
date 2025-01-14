const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 숫자판을 2차원 배열로 저장
const NumberBoard = [];
for (let i = 0; i < input.length; i++) {
  NumberBoard.push(input[i].split(" ").map(Number));
}

// 방문 방향 정의 (상, 하, 좌, 우)
const directions = [
  [-1, 0], // 위
  [1, 0], // 아래
  [0, -1], // 왼쪽
  [0, 1], // 오른쪽
];

const result = new Set(); // 결과를 저장할 Set (중복 제거)

function dfs(x, y, current) {
  // 6자리 숫자가 완성되면 Set에 추가
  if (current.length === 6) {
    result.add(current);
    return;
  }

  // 4방향으로 이동
  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    // 숫자판 범위 체크
    if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
      dfs(nx, ny, current + NumberBoard[nx][ny]);
    }
  }
}

// 숫자판의 모든 위치에서 DFS 시작
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j, NumberBoard[i][j].toString());
  }
}

console.log(result.size);

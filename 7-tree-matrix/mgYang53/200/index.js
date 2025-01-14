/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // 방문 체크 배열
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  let count = 0;

  // 이동 방향(상,하,좌,우)
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function bfs(i, j) {
    const queue = [[i, j]];
    visited[i][j] = true;

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === "1") {
          grid[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }

  // 모든 방향 탐색, 섬 찾기
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] === "1") {
        count++;
        bfs(i, j);
      }
    }
  }

  return count;
};

const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));

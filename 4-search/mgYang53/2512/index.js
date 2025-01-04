const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]); // 지방의 수
const budgets = input[1].split(" ").map(Number); // 각 지방의 예산 요청
const M = Number(input[2]); // 총 예산

let min = 0;
let max = Math.max(...budgets);
let result = 0;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum += Math.min(budgets[i], mid);
  }

  if (sum <= M) {
    result = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(result);

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [_, N] = input[0].split(" ").map(Number);
const lines = input.slice(1).map(Number);

let start = 1; // 최소 길이
let end = Math.max(...lines); // 최대 길이
let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2); // 중간 길이
  let cnt = 0;

  // mid 길이로 자를 수 있는 랜선 개수 계산
  for (const line of lines) {
    cnt += Math.floor(line / mid);
  }

  if (cnt >= N) {
    // 더 긴 길이 시도
    answer = mid; // 조건을 만족하는 길이 저장
    start = mid + 1;
  } else {
    // 더 짧은 길이 시도
    end = mid - 1;
  }
}

console.log(answer);

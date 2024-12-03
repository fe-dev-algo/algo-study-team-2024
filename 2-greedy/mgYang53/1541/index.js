const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

// '-' 기준으로 나눈다.
const splitByMinus = input.split("-");
let answer = 0;

for (let i = 0; i < splitByMinus.length; i++) {
  const stmt = splitByMinus[i];
  const sum = stmt.split("+").reduce((acc, cur) => acc + Number(cur), 0);

  if (i === 0) answer = sum; // 첫번째는 무조건 더하고
  else answer -= sum; // 다음부터 - 기준으로 나눠진 묶음을 더해서 총합에서 뺀다.
}

console.log(answer);

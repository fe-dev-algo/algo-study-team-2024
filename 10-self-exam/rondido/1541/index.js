const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const groups = input.toString().split("-");

let answer = 0;

for (let i = 0; i < groups.length; i++) {
  let cur = groups[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i == 0) answer += cur;
  else answer -= cur;
}

console.log(answer);

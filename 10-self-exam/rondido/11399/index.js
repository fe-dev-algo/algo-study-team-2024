const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const len = input.shift();

const arr = input
  .toString()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;
let summary = 0;
for (let i = 0; i < len; i++) {
  summary += arr[i];
  answer += summary;
}

console.log(answer);

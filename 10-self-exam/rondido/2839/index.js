const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

let n = Number(input);

let answer = 0;
let flag = 0;

while (n >= 0) {
  if (n === 0 || n % 5 === 0) {
    let cur = parseInt(n / 5);
    answer += cur;
    console.log(answer);
    flag = true;
    break;
  }
  n -= 3;
  answer += 1;
}

if (!flag) {
  console.log(-1);
}

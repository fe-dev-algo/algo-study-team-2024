const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./11047.txt")
  .toString()
  .trim()
  .split("\n");

let [len, result] = input.shift().split(" ").map(Number);

let num = input.map(Number).sort((a, b) => b - a);

let answer = 0;

for (let i = 0; i < len; i++) {
  answer += Math.floor(result / num[i]);
  result %= num[i];
}

console.log(answer);

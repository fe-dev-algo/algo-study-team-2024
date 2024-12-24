const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./13458.txt")
  .toString()
  .trim()
  .split("\n");

let answer = 0;

const n = Number(input[0]);

const a = input[1].split(" ");

const [b, c] = input[2].split(" ").map((value) => +value);

for (let i = 0; i < n; i++) {
  const admin = Math.floor((a[i] - b) / c);
  // 총 감독관이 1명만 필요한 경우

  if (a[i] <= b) {
    answer += 1;
  } else {
    //나머지가 있는 경우와 없는 경우
    answer += (a[i] - b) % c === 0 ? admin + 1 : admin + 2;
  }
}

console.log(answer);

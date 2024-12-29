const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let m = Number(input.shift()); // 상근이가 가지고 있는 카드 개수

const moc = input[0].split(" ").map(Number); // 각 카드의 숫자

let n = Number(input[1]); // 알아야할 카드 갯수

const resultArr = input[2].split(" ").map(Number); // 알아야할 각 카드의 숫자

let map = new Map();

let result = [];

for (x of moc) {
  if (map.has(x)) {
    map.set(x, map.get(x) + 1);
  } else {
    map.set(x, 1);
  }
}

for (a of resultArr) {
  if (map.has(a)) {
    result.push(map.get(a));
  } else {
    result.push(0);
  }
}

console.log(result.join(" "));

// console.log(map);

// let start = resultArr.reduce((a, b) => Math.min(a, b));
// let end = resultArr.reduce((a, b) => Math.max(a, b));

// console.log(start);

// while (start <= end) {
//   let mid = parseInt((start + end) / 2);
//   console.log(mid);
//   for (let j = 0; j < n; j++) {
//     if (result[j] === mid) result[j]++;
//   }
//   if (start <= end) {
//     // result = mid;
//     start = mid + 1;
//     // console.log(start);
//   } else {
//     end = mid - 1;
//   }
// }

// for (let i = 0; i < m; i++) {}

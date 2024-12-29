```
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

let result = Array(resultArr.length).fill(0);

for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if(moc[i] === result[j]) result[j]++;
  }
}

console.log(result.join(" "));
```

위처럼 코드를 작성하니까 시간 초과로 에러 발생

```
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

```

map을 사용하여 풀기

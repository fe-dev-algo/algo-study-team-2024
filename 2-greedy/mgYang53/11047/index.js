const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// N: 동전 종류 수, K: 금액 합, coins: 동전 값 종류
const N = input[0].split(" ")[0];
let K = input[0].split(" ")[1];
const coins = input.slice(1).map(Number);

// count: 사용한 동전 개수
let count = 0;

for (let i = N - 1; i >= 0; i--) {
  if (coins[i] > K) continue;
  if (K === 0) return;

  const currentCoins = Math.floor(K / coins[i]);

  count += currentCoins;
  K -= coins[i] * currentCoins;
}

console.log(count);

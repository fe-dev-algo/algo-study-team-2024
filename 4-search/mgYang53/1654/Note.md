## 첫 풀이

주어진 K개의 랜선 길이 중 가장 긴 것을 기준으로, 최대 길이를 1cm 씩 줄여가면서 각 랜선으로 N개를 만들 수 있는 길이를 찾도록 하였다.

```js
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [_, N] = input[0].split(" ").map(Number);
const lines = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

let answer = lines[0] + 1;
let cnt = 0;

while (N > cnt) {
  cnt = 0;
  answer--;

  for (const line of lines) {
    cnt += Math.floor(line / answer);
  }
}

console.log(answer);
```

이 경우 O(max(lines) \* K) 의 시간 복잡도가 나오고, 주어진 랜선의 최대 길이가 매우 길기 때문에 시간초과가 발생한다.

## 개선된 풀이

특정 길이를 기준으로 자를 수 있는 랜선 개수를 계산하며 조건을 만족하는 최대 길이를 찾는 문제이므로, 이진탐색을 사용해서 해결하도록 했다.

```js
// 생략..

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
```

이렇게 랜선의 최대 길이에 따른 탐색을 줄일 수 있고 시간복잡도는 O(log(max(lines)))가 되므로 입력 크기 제한에 통과할 수 있다.

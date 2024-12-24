## 풀이

주어진 문자열로 만들 수 있는 모든 조합의 숫자 배열을 만들어 소수 판별을 해야한다.
소수를 판별하기 위해서는 현재 숫자(N)을 양의 정수 중에서 1과 N을 제외하고 나눠지는 수가 없어야 한다.

주어진 문자열로 모든 조합의 숫자를 만드는 함수 구현이 중요하다.

### 첫 시도

```js
const numChars = numbers.split("").map(Number); // 각 숫자들
let newNumbers = []; // 모든 조합의 숫자들

const getAllNumbers = (permu, rests, output) => {
  if (rests.length == 0) {
    return output.push(Number(permu));
  }
  rests.forEach((v, idx) => {
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
    getAllNumbers([...permu, v].join(""), rest, output);
  });
};

getAllNumbers([], numChars, newNumbers);

// 중복제거, 배열로 변환, 2 이상만 취급
newNumbers = Array.from(new Set(newNumbers.concat(numChars))).filter(
  (n) => n > 1
);
```

위 코드로 진행했을 때 주어진 문자열의 길이에 따른 모든 자릿수가 경우에 포함되지 않았다.

### 수정 코드

```js
function generateCombinations(numbers) {
  const results = new Set(); // 중복 제거를 위해 Set 사용
  const digits = numbers.split(""); // 숫자를 하나씩 배열로 변환

  const permute = (current, remaining) => {
    if (current) {
      results.add(Number(current)); // 숫자로 변환하여 추가
    }
    for (let i = 0; i < remaining.length; i++) {
      permute(
        current + remaining[i],
        remaining.slice(0, i).concat(remaining.slice(i + 1))
      );
    }
  };

  permute("", digits);
  return [...results];
}

const newNumbers = generateCombinations(numbers).filter((n) => n > 1);
```

위와 같이 모든 조합의 숫자를 중복을 제거하고, 1보다 큰 숫자 배열을 만들었다.

그리고 아래와 같은 코드로 소수를 판별하여 해결하였다.

```js
for (let i = 0; i < newNumbers.length; i++) {
  let j = 2,
    isPrime = true;
  const curNum = newNumbers[i];

  // 1과 현재 숫자를 제외하고 소수 판별
  while (j < curNum) {
    if (curNum % j === 0) {
      isPrime = false;
      break;
    }
    j++;
  }

  if (isPrime) answer++;
}

return answer;
```

function solution(numbers) {
  let answer = 0;

  // 모든 조합의 숫자 만드는 함수
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
}

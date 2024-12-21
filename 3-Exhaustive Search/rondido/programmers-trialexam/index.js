function solution(answers) {
  var answer = [0, 0, 0];
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i % one.length]) answer[0] += 1;
    if (answers[i] === two[i % two.length]) answer[1] += 1;
    if (answers[i] === three[i % three.length]) answer[2] += 1;
  }

  let max = 0;
  for (let i = 0; i < answer.length; i++) {
    max = max < answer[i] ? answer[i] : max;
  }
  const result = [];
  for (let i = 0; i < answer.length; ++i) {
    if (max === answer[i]) {
      result.push(i + 1);
    }
  }
  return result.sort((a, b) => a - b);
}

//정점 위치
// 각 그래프의 종류에 대한 값 계산
function solution(edges) {
  var answer = [];
  let swtichEdges = edges.map(([a, b]) => ([a, b] = [b, a]));
  let donetCount = 0;
  let rodCount = 0;
  let eightCount = 0;
  answer.push(edges[0][0]);
  edges.sort((x, y) => x[0] - y[0]);

  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    const [c, d] = swtichEdges[i];
    //도넛
    if (a === b && b === a) {
      donetCount += 1;
    }
    console.log(swtichEdges[i], edges[i]);
    if (swtichEdges[i] == edges[i]) {
      rodCount += 1;
    }

    if (answer[0] === a) continue;
    else if (i < edges.length - 1 && edges[i][0] === edges[i + 1][0]) {
      eightCount += 1;
    }
  }
  answer.push(donetCount);
  answer.push(rodCount);
  answer.push(eightCount);

  return answer;
}

/**
 * 누가 준 선물인지와 누가 받은 선물인지를 알아야하기 때문에 Map class를 사용하여 관리
 * 선물 지수도 마찬가지로 친구마다 선물지수가 몇인지 알아야하기떄문에 Map class를 사용
 * 문제점
 * 요구사항에 맞는 분기처리 도중 준 선물과 받은 선물에 대한 map의 값들은 분기처리 사용할 수 없고 선물 지수 관리에만 필요하다.
 * 그렇다면 어떤식으로 요구 사항에 만족하는 분기처리를 진행할 수 있는가?
 * 총 풀이 시간:1시간 30분(풀지 못함)
 */

function solution(friends, gifts) {
  var answer = 0;
  // 준 선물
  let giveMap = new Map();
  //받은 선물
  let takeMap = new Map();
  //선물 지수
  let resultMap = new Map();
  for (let i = 0; i < friends.length; i++) {
    giveMap.set(friends[i], 0);
    takeMap.set(friends[i], 0);
    resultMap.set(friends[i], 0);
  }

  for (let i = 0; i < gifts.length; i++) {
    let [give, take] = gifts[i].split(" ");
    if (giveMap.has(give)) {
      result = giveMap.get(give);
      result += 1;
      giveMap.set(give, result);
    }
    if (takeMap.has(take)) {
      result = takeMap.get(take);
      result += 1;
      takeMap.set(take, result);
    }
  }
  for (let i = 0; i < gifts.length; i++) {
    let [give, take] = gifts[i].split(" ");
    // resultMap.set(give,(giveMap.get(give) - takeMap.get(give)))
    console.log(takeMap.get(take), giveMap.get(give));
    if (giveMap.get(give) > takeMap.get(take) - giveMap.get(give)) {
      resultMap.set(give, 0);
      result = resultMap.get(give);
      result += 1;
      resultMap.set(give, result);
    }
    if (
      (giveMap.get(give) === 0 && takeMap.get(take) === 0) ||
      giveMap.get(give) === takeMap.get(take)
    ) {
      if (giveMap.get(give) - takeMap.get(give)) {
        resultMap.set(give, 0);
        result = resultMap.get(give);
        result += 1;
        resultMap.set(give, result);
      }
    }
  }
  console.log(resultMap);
  // for(let i  = 0; i<gifts.length; i++){
  //     let [give,take] = gifts[i].split(" ")
  //     console.log(giveMap.get(give),takeMap.get(give))
  //     // if(giveMap.get(give) > takeMap.get(take)){
  //     //     answer +=1;
  //     // }else if(giveMap.get(give) === 0 && takeMap.get(take) === 0 || giveMap.get(give) =              == takeMap.get(take)){
  //     //     if(resultMap.get(give) > resultMap.get(take)){
  //     //         answer +=1;
  //     //     }else{
  //     //         answer +=0;
  //     //     }
  //     // }
  // }
  return answer;
}

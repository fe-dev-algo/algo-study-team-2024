function solution(friends, gifts) {
  const giftCount = {}; // 친구별 선물 기록
  const nextGiftCount = {}; // 다음 달 받을 선물 횟수

  // 각 객체 초기화
  friends.forEach((friend) => {
    giftCount[friend] = { given: 0, received: 0 };
    nextGiftCount[friend] = 0;
  });

  // 선물 기록 저장
  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(" ");
    giftCount[giver].given++;
    giftCount[receiver].received++;
  });

  // 계산
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const A = friends[i];
      const B = friends[j];

      // A가 B에게 준 횟수와 B가 A에게 준 횟수
      const giftsAB = gifts.filter((gift) => gift === `${A} ${B}`).length;
      const giftsBA = gifts.filter((gift) => gift === `${B} ${A}`).length;

      if (giftsAB > giftsBA) {
        nextGiftCount[A]++;
      } else if (giftsBA > giftsAB) {
        nextGiftCount[B]++;
      } else {
        // 선물 지수 비교
        const giftIndexA = giftCount[A].given - giftCount[A].received;
        const giftIndexB = giftCount[B].given - giftCount[B].received;

        if (giftIndexA > giftIndexB) {
          nextGiftCount[A]++;
        } else if (giftIndexB > giftIndexA) {
          nextGiftCount[B]++;
        }
      }
    }
  }

  return Math.max(...Object.values(nextGiftCount));
}

console.log(
  solution(
    ["muzi", "ryan", "frodo", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "ryan muzi",
      "ryan muzi",
      "ryan muzi",
      "frodo muzi",
      "frodo ryan",
      "neo muzi",
    ]
  )
);

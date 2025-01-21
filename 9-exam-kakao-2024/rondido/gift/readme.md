누가 준 선물인지와 누가 받은 선물인지를 알아야하기 때문에 Map class를 사용하여 관리
선물 지수도 마찬가지로 친구마다 선물지수가 몇인지 알아야하기떄문에 Map class를 사용
문제점
요구사항에 맞는 분기처리 도중 준 선물과 받은 선물에 대한 map의 값들은 분기처리 사용할 수 없고 선물 지수 관리에만 필요하다.
그렇다면 어떤식으로 요구 사항에 만족하는 분기처리를 진행할 수 있는가?
총 풀이 시간:1시간 30분(풀지 못함)

아래 이미지처럼 만드는게 핵심

![Image](https://github.com/user-attachments/assets/494b626e-cb0a-44b6-8e2c-25d11e1a8c5c)

// muzi ryan frodo neo
// muzi 0 0 2 0
// ryan 3 0 0 0
// frodo 1 1 0 0
// neo 1 0 0 0
//muzi - frodo frodo -> muzi 1
// ryan - muzi muzi -> ryan 1 neo -> ryan 1 ryan 2
// frodo - ryan rayn -> frodo 1
// neo - muzi muzi -> neo 1 frodo -> neo 1

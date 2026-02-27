/*
제로 (백준 10773)
- 난이도: 실버 4
- 0이 나오면 가장 최근 수를 지우고, 마지막에 남은 수들의 합 구하기
- 힌트: 0이면 pop(), 아니면 push()! 스택 기초 연습에 좋음

첫 번째 줄에 정수 K가 주어진다. (1 ≤ K ≤ 100,000)
이후 K개의 줄에 정수가 1개씩 주어진다. 
정수는 0에서 1,000,000 사이의 값을 가지며, 
정수가 "0" 일 경우에는 가장 최근에 쓴 수를 지우고, 아닐 경우 해당 수를 쓴다.
정수가 "0"일 경우에 지울 수 있는 수가 있음을 보장할 수 있다.
*/

// stack은 LIFO(Last In First Out) 자료구조
// 가장 최근에 추가된 요소가 가장 먼저 제거되는 구조

const fs = require('fs');
const input = fs.readFileSync('input1.txt').toString().trim().split('\n');

const K = Number(input[0]);
const stack = [];

for(let i = 0; i < K; i++){
    const number = Number(input[i + 1]);

    // 0이면 pop(), 아니면 push()
    if(number === 0){
        stack.pop();
    }else{
        stack.push(number);
    }
}

// reduce()를 사용하여 누적합 계산
console.log(stack.reduce((acc, num) => acc + num, 0));
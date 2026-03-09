/*
3번 카드2 (백준 2164), 실버 4

카드가 한 장 남을 때까지 반복하게 된다. 
우선, 제일 위에 있는 카드를 바닥에 버린다. 
그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.

예를 들어 N=4인 경우를 생각해 보자. 
카드는 제일 위에서부터 1234 의 순서로 놓여있다. 
1을 버리면 234가 남는다. 
여기서 2를 제일 아래로 옮기면 342가 된다. 
3을 버리면 42가 되고, 4를 밑으로 옮기면 24가 된다. 마지막으로 2를 버리고 나면, 남는 카드는 4가 된다

첫째 줄에 정수 N(1 ≤ N ≤ 500,000)이 주어진다.

힌트:
• 요세푸스랑 비슷한 패턴
• dequeue → enqueue 반복
*/

const fs = require('fs');
const input = fs.readFileSync('input3.txt').toString().trim();

const N = Number(input);

class Queue{
  constructor(){
    this.items = [];
    this.head = 0;
  }

  enqueue(item){
    this.items.push(item);
  }

  dequeue(){
    if(this.isEmpty()) return null;
    return this.items[this.head++]; // 가짜제거, 배열은 그대로지만 접근 위치만 이동
  }

  isEmpty(){
    return this.head >= this.items.length;
  }

  size(){
    return this.items.length - this.head;
  }

  front(){
    if(this.isEmpty()) return null;
    return this.items[this.head];
  }
}

const queue = new Queue();

for(let i = 0; i < N; i++){
  queue.enqueue(i + 1);
}

while(queue.size() > 1){
  queue.dequeue(); // 제일 위에 있는 카드 버리기
  queue.enqueue(queue.dequeue()); // 제일 위에있던 카드 다음 카드
}

console.log(queue.front());
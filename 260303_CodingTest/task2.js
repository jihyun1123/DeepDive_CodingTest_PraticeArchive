/*
2번 요세푸스 문제 (백준 1158), 실버 4

이제 순서대로 K번째 사람을 제거한다
명의 사람이 모두 제거될 때까지 계속된다. 
원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다. 
예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.
                                  // 제거된 순서
12'3'4567 -> 45'6'712 -> 71'2'45 -> 45'7'1 -> 14'5' -> '1'4 -> 4
첫째 줄에 N과 K가 빈 칸을 사이에 두고 순서대로 주어진다. 
(1 ≤ K ≤ N ≤ 5,000)
*/

const fs = require('fs');
const input = fs.readFileSync('input2.txt').toString().trim().split(' ');

const N = Number(input[0]);
const K = Number(input[1]);

class Queue{
  constructor(){
    this.items = [];
    this.head = 0;
  }

  enqueue(item){
    this.items.push(item);
  }

  /*
    처음 백준 제출했을 때, 메모리 초과가 발생하였다
    이유는 dequeue할 때, 실제 배열에서 제거를 하지않고 head만 이동시키는 구조로 되어있어서,
    head가 계속 증가하면서 items.length도 증가하게되므로 배열이 거대해져서 -> 메모리 초과 발생

    unshift는 사용하지않고 해결할 방안을 찾는 도중
    slice를 활용하여서 배열이 너무 커지면 앞에서 이미 사용한 부분을 잘라내는 방식을 생각하였다!

    items = items.slice(head)
    head = 0
  */
  dequeue(){
    if(this.isEmpty()) return null;
    
    const value = this.items[this.head++];

    // 일정 이상 head가 쌓이면 배열 정리
    if(this.head > 1000){
      this.items = this.items.slice(this.head);
      this.head = 0;
    }
    return value;
  }  

  front(){
    if(this.isEmpty()) return null;
    return this.items[this.head];
  }

  isEmpty(){
    return this.head >= this.items.length;
  }

  /* 
    this.head를 빼는 이유는 
    진짜 삭제를 안 하고 head만 앞으로 이동시키는 구조로,
    전체 개수 - 이미 사용한 개수
    items = [10,20,30,40]
    head = 2, 이미 10, 20은 사용했으므로, 
    남은 개수는 4 - 2 = 2
  */
  size(){
    return this.items.length - this.head;
  }
}

const queue = new Queue();
let result = [];

// 1부터 N까지의 숫자를 큐에 넣는다
for(let i = 0; i < N; i++){
  queue.enqueue(i + 1);
}

// K번째 사람을 제거하는 과정을 반복
// 이때, 큐에 남은 사람이 1명 이상일 때까지 반복한다
while(queue.size() > 1){
  // K-1번 사람을 앞으로 이동시킨다
  for(let i = 0; i < K - 1; i++){
    // K-1번 사람을 앞으로 이동시키기 위해, 큐에서 dequeue한 후 다시 enqueue한다
    queue.enqueue(queue.dequeue());
  }
  // K번째 사람을 제거한다
  result.push(queue.dequeue());
}
result.push(queue.front()); 
// 마지막 남은 사람을 결과에 추가한다

console.log('<'+result.join(', ')+'>');
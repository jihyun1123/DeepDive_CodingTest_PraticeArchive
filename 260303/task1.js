/*
1. 큐 (백준 10845), 실버 4

push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 
주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.
*/

const fs = require('fs');
const input = fs.readFileSync('input1.txt').toString().trim().split('\r\n');

class Queue{
  constructor(){
    this.items = [];
    this.head = 0;
  }

  enqueue(item){
    this.items.push(item);
  }

  dequeue(){
    if(this.isEmpty()) return -1;
    return this.items[this.head++]; // 가짜제거, 배열은 그대로지만 접근 위치만 이동
  }

  size(){
    if(this.isEmpty()) return 0;
    return this.items.length - this.head;
  }

  front(){
    if(this.isEmpty()) return -1;
    return this.items[this.head];
  }

  back(){
    if(this.isEmpty()) return -1;
    return this.items[this.items.length -1];
  }

  isEmpty(){
    return this.head >= this.items.length ? 1 : 0;
  }

}

/*
백준에 첫 제출할때, input에서 \r\n이 아니라 \n으로 split해야해서 틀렸었음. 아마도 백준은 리눅스 환경이라서 그런듯

2번째 제출때에는 "시간 초과" 발생
다시 코드를 보니, console.log의 개수가 많은 것 때문인 것 같아서, 출력할 결과를 배열에 담았다가 마지막에 한 번에 출력하도록 수정하니 통과했다!!
*/

const N = Number(input[0]);     // 명령의 수
const queue = new Queue();
const output = [];    // 출력할 결과를 담을 배열

for(let i = 0; i < N; i++){
  // 명령과 숫자를 분리
  const command = input[1 + i].split(' '); 

  switch(command[0]){
    case 'push':
      queue.enqueue(Number(command[1]));
      break;
    
    case 'pop':
      output.push(queue.dequeue());
      break;

    case 'size':
      output.push(queue.size());
      break;
    
    case 'empty':
      output.push(queue.isEmpty());
      break;
    
    case 'front':
      output.push(queue.front());
      break;
      
    case 'back':
      output.push(queue.back());
      break;
  }
}

// 결과를 한 번에 출력
console.log(output.join('\n'));
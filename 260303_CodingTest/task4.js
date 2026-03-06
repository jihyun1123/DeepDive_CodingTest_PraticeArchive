/*
1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
  3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.

  예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.

  해석 :
  !! 우선순위가 클수록 먼저 실행됨!  2 > 1
  1. 큐에서 A를 꺼냄
  2. B, C, D 중 A보다 우선순위가 높은 프로세스가 있는지 확인 -> C가 A보다 우선순위가 높음 -> A를 큐에 다시 넣음
  3. 큐에서 B를 꺼냄
  4. A, C, D 중 B보다 우선순위가 높은 프로세스가 있는지 확인 -> C, D가 B보다 우선순위가 높음 -> B를 큐에 다시 넣음
  5. 큐에서 C를 꺼냄
  6. A, B, D 중 C보다 우선순위가 높은 프로세스가 있는지 확인 -> 없음 -> C를 실행

  현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와, 
  몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 
  해당 프로세스가 "몇 번째로 실행되는지" return 하도록 solution 함수를 작성해주세요.

*/

const fs = require('fs');
const input = fs.readFileSync('input4.txt').toString().trim().split('\n');

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
    return this.items[this.head++];
  }

  isEmpty(){
    return this.head >= this.items.length;
  }

  size(){
    if(this.isEmpty()) return 0;
    return this.items.length - this.head;
  }
}

// 공백 기준으로 split 한 뒤 Number로 변환 
/*
[A, B, C, D]
[2, 1, 3, 2]
*/
const priorities = input[0].split(' ').map(Number);
const location = Number(input[1]);

function solution(priorities, location){
  let answer = 0;
  const queue = new Queue();

  // 큐에 [인덱스, 우선순위] 형태로 저장
  for(let i = 0; i < priorities.length; i++){
    queue.enqueue([i, priorities[i]]);
  }

  // 큐가 빌 때까지 반복
  while(queue.size() > 0){
    // 큐에서 가장 앞에 있는 프로세스 저장
    const current = queue.dequeue();

    // 큐에 남아있는 프로세스 중 current보다 우선순위가 높은 프로세스가 있는지 확인
    const higherPriority = queue.items
      .slice(queue.head)  // 이미 처리된 프로세스는 제외하고 확인
      // some은 배열의 요소 중 하나라도 조건을 만족하면 true 반환, 모두 만족하지 않으면 false 반환
      .some(item => item[1] > current[1]); // 우선순위가 높은 프로세스가 하나라도 있으면 true 반환, 여기서 item[1] = 우선순위

    // 만약 우선순위가 높은 프로세스가 있다면 current를 다시 큐에 넣음
    if(higherPriority){
      queue.enqueue(current);
      // 그렇지 않다면 current를 실행
    }else{
      // answer는 몇 번째로 실행되는지 세는 변수이므로 증가시킴
      answer++;
      // current이 우리가 찾는 프로세스라면 answer 반환
      if(current[0] === location) return answer;
    }
  }
  return answer;
}

console.log(solution(priorities, location));
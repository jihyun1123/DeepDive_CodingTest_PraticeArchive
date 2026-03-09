/*
1번 숨바꼭질 (백준 1697), 실버 1
문제 :
• 수빈이 위치 N, 동생 위치 K
• 이동: X-1, X+1, 또는 2*X
• 동생을 찾는 최소 시간?
    => 좌표가 아니라 숫자의 위치 x만 활용

첫 번째 줄에 수빈이가 있는 위치 N과 동생이 있는 위치 K가 주어진다. 
N과 K는 정수이다.
(0 ≤ N ≤ 100,000, 0 ≤ K ≤ 100,000)
힌트 :
• 위치 = 노드, 이동 = 엣지로 생각!
• 1차원 BFS, dx 대신 세 가지 이동
    => 최단 거리 문제 ( 간선 비용이 모두 같은 경우 )
*/

const fs = require('fs');
const input = fs.readFileSync('input1.txt').toString().trim().split(' ');


const N = Number(input[0]);
const K = Number(input[1]);

const Max = 100000;

function bfs(startX, resultX){
    const queue = [startX]; // 시작점 탐색
    const dist = new Array(Max+1).fill(-1); // 각 위치까지 도달하는 데 걸린 시간 저장
                                            // -1은 아직 방문하지 않았단 뜻
    let head = 0;

    dist[startX] = 0; // 시작 위치까지의 시간은 0초

    while(head < queue.length){
        // 큐에서 현재 위치 x를 꺼낸 뒤 다음 위치 가리키도록 head 증가
        const x = queue[head];
        head++;

        if(x === resultX) return dist[x]    // 동생을 찾는 최소 시간 반환

        const nextX = [x-1, x+1, x*2]; // 이동할 수 있는 세 가지 경우

        // 3가지 이동을 하나씩 확인
        for(const nx of nextX){
            if(nx < 0 || nx > Max) continue; // 범위를 벗어나면 무시
            if(dist[nx] !== -1) continue; // 이미 방문한 곳은 무시

            dist[nx] = dist[x] +1;  // 현재 위치까지 걸린 시간 +1초
            queue.push(nx); // 다음 탐색할 위치로 큐에 추가
        }
    }
}

console.log(bfs(N, K));
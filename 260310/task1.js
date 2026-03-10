/*
1번 DFS와 BFS (백준 1260), 실버 2

문제 :
• 그래프가 주어지면
• DFS, BFS 탐색 결과를 출력

첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 
간선의 개수 M(1 ≤ M ≤ 10,000), 
탐색을 시작할 정점의 번호 V가 주어진다

다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다.

1 ----- 2
| \     |
|  \    |
|   \   |
3 ----- 4

*/

const fs = require('fs');
const input = fs.readFileSync('input1.txt').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
/*
그래프 생성
그래프는 "인접 리스트" 방식으로 만든다.
예를 들어
1 → [2,3,4]
1번 정점은
2,3,4와 연결되어 있다
*/
const graph = [];

/*
정점 번호는 1부터 시작하기 때문에
N+1 크기로 만든다
graph[0]은 사용하지 않는다
*/
for(let i = 0; i < N + 1; i++){
    graph.push([]);
}

for(let i = 1; i < M; i++){
    const [a, b] = input[i].split(' ').map(Number);

    // 양방향 그래프이므로 서로 연결되어있음
    graph[a].push(b);
    graph[b].push(a);
}

// 정점 번호가 작은 것을 먼저 방문하기 위해서
// 각 정점에 연결된 정점들을 오름차순으로 정렬한다
for(let i = 1; i <= N; i++){
    graph[i].sort((a, b) => a - b);
}

// 정점 번호가 1부터 시작하기 때문에 N+1 크기로 만든다
let visited = new Array(N+1).fill(false);
let resultDFS = [];

function dfs(start){
    // 시작 정점 방문 처리
    visited[start] = true;
    resultDFS.push(start);
    
    // 현재 정점과 연결된 정점들을 순회하면서 
    //방문하지 않은 정점이 있으면 재귀적으로 방문한다
    for(const next of graph[start]){
        if(!visited[next]){
            // 다음 정점 방문 (재귀 호출)
            dfs(next);
        }
    }
}

// BFS를 위해 방문 배열 초기화
visited = new Array(N+1).fill(false);
let resultBFS = [];

function bfs(start){
    const queue = [];
    let head = 0;
    // 시작 정점 방문 처리
    visited[start] = true;

    while(head < queue.length){
        const current = queue[head];
        head++;

        resultBFS.push(current);

        // 현재 정점과 연결된 정점들을 순회하면서
        // 방문하지 않은 정점이 있으면 큐에 추가한다
        for(const next of graph[current]){
            if(!visited[next]){
                visited[next] = true;
                queue.push(next);
            }
        }

    }
}

dfs(V);
bfs(V);

console.log(resultDFS.join(' '));
console.log(resultBFS.join(' '));

/*
1 2
1 3
1 4
2 4
3 4

graph[1] = [2,3,4]
graph[2] = [1,4]
graph[3] = [1,4]
graph[4] = [1,2,3]

뜻
1 → 2,3,4
2 → 1,4
3 → 1,4
4 → 1,2,3

1️⃣ 그래프 저장
graph[정점] = 연결된 정점들
2️⃣ visited
이미 방문한 곳 다시 안가기
3️⃣ DFS
재귀 사용
깊이 우선
4️⃣ BFS
큐 사용
가까운 곳부터 탐색
*/
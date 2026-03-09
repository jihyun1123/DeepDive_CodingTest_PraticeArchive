/*
2번 미로 탐색 (백준 2178), 실버 1
문제 :
• N×M 미로 (1=이동가능, 0=벽)
• (1,1)에서 (N,M)까지 최단 거리

N×M크기의 배열로 표현되는 미로가 있다.

1	0	1	1	1	1
1	0	1	0	1	0
1	0	1	0	1	1
1	1	1	0	1	1

미로에서 1은 이동할 수 있는 칸을 나타내고, 
0은 이동할 수 없는 칸을 나타낸다.

힌트 :
• 격자 BFS + 거리 배열!
*/

const fs = require('fs');
const input = fs.readFileSync('input2.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const maze = [];
for(let i = 0; i < N; i++){
    // 문자열을 한 글자씩 잘라 숫자로 변환
    maze.push(input[1+i].split('').map(Number));
}

function GridBFS(grid){
    const n = grid.length;  // 행의 개수
    const m = grid[0].length;   // 열의 개수

    const dx = [-1, 1, 0, 0]; // 상하좌우 이동 방향
    const dy = [0, 0, -1, 1];

    // 큐에는 현재 위치 (x, y)를 저장 시작점부터 탐색
    const queue = [[0, 0]]; // 시작점 (0, 0)
    let head = 0;

    // dist 배열의 역할 : 방문 체크 + 거리 저장
    // -1 -> 아직 방문 안함, 0 이상 -> 방문 함
    const dist = [];
    for(let i = 0; i < N; i++){
        dist.push(new Array(m).fill(-1)); // 각 위치까지의 최단 거리 저장   
    }

    dist[0][0] = 1; // 시작 위치까지의 거리는 1 (문제에서 1부터 시작)

    while(head < queue.length){
        // 큐에서 현재 위치 꺼내기
        const [x, y] = queue[head];
        head++;

        // 4방향 탐색
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 범위 밖이면 무시
            if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

            // 벽이면 이동 불가능하므로 무시
            if(grid[nx][ny] === 0) continue;

            // 이미 방문한 곳이면 무시
            if(dist[nx][ny] !== -1) continue;

            // 거리 갱신, 현재 칸 거리 + 1
            dist[nx][ny] = dist[x][y] + 1;

            // 도착점 (N, M)
            // 배열은 0부터 시작하므로 (n-1, m-1) 위치가 도착점
            if(nx === n-1 && ny === m-1) return dist[nx][ny];

            // 큐에 다음 탐색 위치 추가
            queue.push([nx, ny]);
        }
    }
}

console.log(GridBFS(maze));
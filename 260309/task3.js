/*
3: 토마토 (백준 7576), 골드 5

문제 :
• 익은 토마토(1)가 인접한 안 익은 토마토(0)를 익힘
• 모든 토마토가 익는 최소 일수? (불가능하면 -1)

첫 줄에는 상자의 크기를 나타내는 두 정수 M, N이 주어진다. 
M은 상자의 가로 칸의 수, 
N은 상자의 세로 칸의 수를 나타낸다

둘째 줄부터는 하나의 상자에 저장된 토마토들의 정보가 주어진다. 
즉, 둘째 줄부터 N개의 줄에는 상자에 담긴 토마토의 정보가 주어진다.

힌트 :
• 다중 시작점 BFS!
• 익은 토마토(시작점)를 모두 큐에 넣고 시작

*/

const fs = require('fs');
const input = fs.readFileSync('input3.txt').toString().trim().split('\n');

// 상자의 가로, 세로 크기
const [M, N] = input[0].split(' ').map(Number);

// 토마토 정보 저장 = dist = box
const box = [];
for(let i = 0; i < N; i++){
    box.push(input[1+i].split(' ').map(Number));
}

function TomatoBFS(box){
    const n = box.length;
    const m = box[0].length;

    const dx = [-1, 1, 0, 0]; // 상하좌우 이동 방향
    const dy = [0, 0, -1, 1];

    const queue = [];
    let head = 0;
    
    // 익은 토마토(시작점)을 box에서 찾아 큐에 넣기
    // 다중BFS : 여러 시작점에서 동시에 탐색 시작
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(box[i][j] === 1){
                queue.push([i, j]);
            }
        }
    }

    while(head < queue.length){
        // 큐에서 현재 위치 꺼내기
        const [x, y] = queue[head];
        head++;

        for(let i = 0; i < 4; i++){
            // 다음 위치 계산
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue; // 범위 밖이면 무시
            if(box[nx][ny] !== 0) continue; // 안 익은 토마토만 익힐 수 있음

            // 토마토 익히기
            box[nx][ny] = box[x][y] + 1; // 익는 일수 계산 (익은 토마토의 일수 + 1)
            queue.push([nx, ny]);

        }

    }
    // 모든 토마토가 익는 최소 일수 계산
    let maxDays = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(box[i][j] === 0) return -1; // 안 익은 토마토가 있으면 -1 반환
            // 최대 일수 업데이트
            // max(a, b) : a와 b 중 큰 값 반환
            maxDays = Math.max(maxDays, box[i][j]);
        }
    }
    // 이미 첫 날 익은 토마토는 1로 시작하므로, 익는 일수는 maxDays - 1
    return maxDays - 1;
}

console.log(TomatoBFS(box));


    









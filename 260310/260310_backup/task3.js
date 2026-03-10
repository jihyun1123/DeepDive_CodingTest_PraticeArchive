/*
3번 유기농 배추 (백준 1012), 실버 2

문제 :
• 배추밭에서 연결된 배추 영역의 개수
= 필요한 배추흰지렁이 수

입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다. 
다음 줄 부터 첫째 줄에는 배추를 심은 배추밭의 가로길이 M(1 ≤ M ≤ 50)과 세로길이 N(1 ≤ N ≤ 50), 
그리고 배추가 심어져 있는 위치의 개수 K(1 ≤ K ≤ 2500)이 주어진다. 
그 다음 K줄에는 배추의 위치 X(0 ≤ X ≤ M-1), Y(0 ≤ Y ≤ N-1)가 주어진다. 두 배추의 위치가 같은 경우는 없다.
*/

const fs = require('fs');
const input = fs.readFileSync('./input3.txt').toString().trim().split('\n');

let index = 0;

// index++은 현재값 반환 후 index를 1 증가시킴
const T = Number(input[index++]);    // 테스트 케이스 수

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 테스트 케이스마다 배추밭 초기화
for (let t = 0; t < T; t++) {
    const [M, N, K] = input[index++].split(' ').map(Number);

    const map = [];
    for (let i = 0; i < N; i++) {
        map.push(new Array(M).fill(0));
    }

    const visited = [];
    for (let i = 0; i < N; i++) {
        visited.push(new Array(M).fill(false));
    }

    // 배추 위치 입력
    for (let j = 0; j < K; j++) {
        const [x, y] = input[index++].split(' ').map(Number);
        // 배추가 심어진 위치 표시
        // 배추밭의 가로길이 M, 세로길이 N이 주어지므로, 
        // x는 M 범위(0~M-1), y는 N 범위(0~N-1) 내에 있어야 함
        // x는 열, y는 행이므로 map[y][x]로 접근해야 함
        // 가로 = 열 = x, 세로 = 행 = y
        map[y][x] = 1;
    }

    // DFS 함수 정의 (테스트 케이스마다 map, visited 참조)
    // y, x인 이유는 map[y][x]로 접근하기 때문
    function DFS(y, x) {
        // 범위 체크 (y는 행(N), x는 열(M))
        if (y < 0 || y >= N || x < 0 || x >= M) return;

        // 배추가 없는 경우
        if (map[y][x] === 0) return;

        // 이미 방문한 배추인 경우
        if (visited[y][x]) return;

        // 방문 처리
        visited[y][x] = true;

        // 상하좌우 탐색
        for (let i = 0; i < 4; i++) {
            const ny = y + dx[i];
            const nx = x + dy[i];
            DFS(ny, nx);    // 재귀 호출로 연결된 배추 탐색
        }
    }

    // 지렁이 수
    let wormCount = 0;

    // 배추밭 전체 탐색
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (map[i][j] === 1 && !visited[i][j]) {
                DFS(i, j); // 연결된 배추 영역 탐색
                wormCount++; // 영역 하나당 지렁이 한 마리 필요
            }
        }
    }
    console.log(wormCount); // 필요한 지렁이 수 출력
}

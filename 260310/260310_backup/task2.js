/*
2번 단지번호붙이기 (백준 2667), 실버 1

문제 :
• N×N 지도에서 집(1)들이 연결된 단지 찾기
• 단지 수와 각 단지의 집 수 출력

첫 번째 줄에는 지도의 크기 N(정사각형이므로 가로와 세로의 크기는 같으며 5≤N≤25)이 입력되고, 
그 다음 N줄에는 각각 N개의 자료(0혹은 1)가 입력된다.

첫 번째 줄에는 총 단지수를 출력하시오. 그리고 
각 단지내 집의 수를 오름차순으로 정렬하여 한 줄에 하나씩 출력하시오.
*/

const fs = require('fs');
const input = fs.readFileSync('./input2.txt').toString().trim().split('\n');

const N = Number(input[0]);
const map = [];

for (let i = 1; i <= N; i++) {
    map.push(input[i].split('').map(Number));
}

// 현재 단지 수
let count = 0;

// 단지 내 집 수
const houseCounts = [];

// 상하좌우 이동 방향
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 방문 여부 체크 배열
const visited = [];
for(let i = 0; i < N; i++){
    visited.push(new Array(N).fill(false));
}

function dfs(x, y){
    // 범위 체크
    if(x < 0 || x >= N || y < 0 || y >= N) return;

    // 집이 없는 경우
    if(map[x][y] === 0) return;

    // 이미 방문한 집인 경우
    if(visited[x][y]) return;

    // 방문 처리
    visited[x][y] = true;
    count++;

    // 상하좌우 탐색
    // 방문 처리를 안 한뒤 탐색을 하면은 계속 서로를 호출하게됨 !!
    for(let i = 0; i < 4; i++){
        const nx = x + dx[i];
        const ny = y + dy[i];
        dfs(nx, ny);    // 재귀 호출로 연결된 집 탐색
    }
}

// 지도 전체 탐색
for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
        if(map[i][j] === 1 && !visited[i][j]){
            count = 0; // 새 단지 시작 전 집 수 초기화
            dfs(i, j); // 단지 탐색
            houseCounts.push(count); // 단지 내 집 수 저장
        }
    }
}

console.log(houseCounts.length); // 총 단지 수 출력
houseCounts.sort((a, b) => a - b); // 집 수 오름차순 정렬

// forEach로 각 단지 내 집 수 출력
houseCounts.forEach(count => console.log(count));

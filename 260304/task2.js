/*
2번 문자열 집합 (백준 14425), 실버 4

첫째 줄에 문자열의 개수 N과 M (1 ≤ N ≤ 10,000, 1 ≤ M ≤ 10,000)이 주어진다.
다음 N개의 줄에는 집합 S에 포함되어 있는 문자열들이 주어진다.
다음 M개의 줄에는 검사해야 하는 문자열들이 주어진다.
입력으로 주어지는 문자열은 알파벳 소문자로만 이루어져 있으며, 길이는 500을 넘지 않는다.
집합 S에 같은 문자열이 여러 번 주어지는 경우는 없다.

• 집합 S에 포함된 문자열 중
• 입력으로 주어진 M개 중 몇 개가 있는지

→ 힌트:
• 집합 S를 Set에 저장
• M개 문자열마다 has() 확인
• 있으면 카운트 +1
*/

// ⭐ Set vs Map
// Set : 존재 여부만 확인 -> 값 확인? 
// Map : 값에 대응되는 정보 저장 -> 정보 ex) key -> value

const fs = require('fs');
const input = fs.readFileSync('input2.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const S = new Set();    // 집합 S를 Set으로 만들어서, has()로 확인하는 방식으로 했음!!

// N개의 문자열을 Set에 저장
for(let i = 0; i < N; i++){
    S.add(input[1 + i]);
}

let resultcount = 0;

// M개의 문자열마다 has()로 확인
for(let j = 0; j < M; j++){
    // input에서 1 + N + j 번째 줄이 검사해야 하는 문자열이므로, searchString에 저장
    // 왜 1 + N + j 인가? 첫 번째 줄에는 N과 M이 있기 때문에, 
    // N개의 문자열이 시작하는 위치는 1부터 시작하고, 
    // 그 다음 M개의 문자열이 시작하는 위치는 1 + N부터 시작하기 때문임!!
    const searchString = input[1 + N + j];
    if(S.has(searchString)){
        resultcount++;
    }
}

console.log(resultcount);
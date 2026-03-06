/*
3번 완주하지 못한 선수 (프로그래머스), 레벨 1

• 참가자 명단과 완주자 명단이 주어짐
• 완주하지 못한 선수 1명 찾기

→ 힌트:
• 이름 → 카운팅 (Map)
• 완주자 명단으로 -1
• 카운트가 1인 사람이 정답

*/

const fs = require('fs');
const input = fs.readFileSync('input3.txt').toString().trim().split('\n');


// JSON.parse()로 문자열을 배열로 변환
const participant = JSON.parse(input[0]);
const completion = JSON.parse(input[1]);


function solution(participant, completion) {
    const counting = new Map();
    
    // 참가자 카운팅
    for(const name of participant){
        counting.set(name, (counting.get(name) || 0)+1);
    }
    
    // 완주자 카운팅
    for(const Fname of completion){
        counting.set(Fname, counting.get(Fname) -1);
    }
    
    // 비완주자 찾기
    for(const [name, count] of counting){
        if(count > 0){
            return name;
        }
    }
}

console.log(solution(participant, completion));




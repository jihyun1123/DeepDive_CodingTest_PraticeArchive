/*
4번. K번째 수 (프로그래머스), Level 1
문제 :
• 배열을 i ~ j까지 자르고 정렬한 후 k번째 수 구하기
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, 
commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 
나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

힌트 :
• slice()로 자르고 sort()로 정렬
• 인덱스 조심! (1-indexed vs 0-indexed)
*/ 
const fs = require('fs');
const input = fs.readFileSync('input4.txt').toString().trim().split('\n');

const array = JSON.parse(input[0]);
const commands = JSON.parse(input[1]);

function solution(array, commands) {
    const answer = [];
    // 구조 분해 할당으로 i, j, k를 commands의 각 원소에서 받아오기
    for([i, j, k] of commands){
        // i~j까지 자르기 (slice는 0-indexed이므로 i-1, j는 그대로)
        // ex : i=2, j=5 -> slice(1, 5) -> array[1], array[2], array[3], array[4] (총 4개)
        const sliced = array.slice(i - 1,j);
        sliced.sort((a,b) => a - b); // 오름차순 정렬
        // ex : sliced = [5, 2, 6, 3, 7] -> sort -> [2, 3, 5, 6, 7]
        answer.push(sliced[k-1]); // k번째 수 (0-indexed이므로 k-1)
    }
    return answer;
}
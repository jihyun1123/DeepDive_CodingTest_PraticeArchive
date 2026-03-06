/*
1. 숫자 카드 (백준 10815), 실버 5

• N개의 숫자 카드 중
• M개의 숫자가 있는지 확인하는 문제

힌트:
• N개의 카드를 Set에 저장
• M개의 숫자마다 has()로 확인
• O(N + M)으로 해결!
*/

const fs = require('fs');
const input = fs.readFileSync('input1.txt').toString().trim().split('\n');

const N = Number(input[0]);
const cards1 = new Set(input[1].split(' ').map(Number));

const M = Number(input[2]);
// 처음에 cards2를 Set으로 만들려고 했는데, 
// set으로 두면은 중복 숫자가 사라지고, 코드 방식(인덱스로 접근하는 코드는 배열에서만)이랑 안맞음
// 그래서 cards2는 배열로 만들어서, 질의할 때마다 has()로 확인하는 방식으로 했음!!
const cards2 = input[3].split(' ').map(Number);

const result = [];

// 집합.has(값) → O(1)으로 확인 가능, 값이 집합에 있냐?
for(let i = 0; i < M; i++){
    if(cards1.has(cards2[i])){
        result.push(1);
    }else{
        result.push(0);
    }
}

console.log(result.join(' '));



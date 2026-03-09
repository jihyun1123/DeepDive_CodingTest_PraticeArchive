/*
1번 수 정렬하기 (백준2750), 브론즈 2

N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

힌트 :
• sort() + comparator 사용
• 숫자 정렬 시 (a, b) => a - b 필수!
*/ 

const fs = require('fs');
const input = fs.readFileSync('input1.txt').toString().trim().split('\n');

const N = Number(input[0]);
const numbers = [];
for(let i = 0; i < N; i++){
    numbers.push(Number(input[1+i]));
}

numbers.sort((a, b) => a-b);
console.log(numbers.join('\n'));
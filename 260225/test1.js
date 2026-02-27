// N개의 숫자가 공백 없이 쓰여있다. 
// 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

// 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 
// 둘째 줄에 숫자 N개가 공백없이 주어진다.

const fs = require('fs');

const input = fs.readFileSync('input1.txt').toString().split('\n');

const count = Number(input[0]);
const numbers = input[1].split('');
let sum = 0;

for(let i = 0; i < count; i++) {
    sum += Number(numbers[i]);
}
console.log(sum);

/*
forEach와 map 함수를 이용한 풀이
const fs = require('fs');

const input = fs.readFileSync('input1.txt').toString().split('\n');

const count = Number(input[0]);
const numbers = input[1].split('').map(Number);
let sum = 0;

numbers.forEach(num => (sum += num));
console.log(sum);

*/ 
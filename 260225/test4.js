/*
대표값

첫째 줄부터 열 번째 줄까지 한 줄에 하나씩 자연수가 주어진다. 
주어지는 자연수는 1,000 보다 작은 10의 배수이다.

출력
평균
최빈값 if 최빈값이 2개 이상일 경우 그 중 하남나 출력한다
*/

const fs = require("fs");
const input = fs.readFileSync("input4.txt").toString().trim().split("\n");

const array = input.map(Number);

// 누적값 계산을 활용한 평균 계산
const average = Math.round(array.reduce((acc, num) => acc + num, 0) / array.length);

// 최빈값 저장 변수
let mode = 0;

// 최빈값 계산을 위한 Map 객체 생성
// Map 객체를 사용하여 각 숫자의 빈도수를 계산
const frequency = new Map();
for(const num of array){
    // set() 메서드는 Map 객체에 key, value 저장 메서드
    frequency.set(num, (frequency.get(num) || 0) +1);
}

// 최빈값 계산
let maxCount = 0;

// Map 객체의 entries() 메서드를 사용하여 각 숫자와 빈도수를 순회하면서 최빈값을 계산
// key는 숫자, value는 빈도수
for( const[key, value] of frequency){
    if(value > maxCount){
        maxCount = value;
        mode = key;
    }
}

console.log(`${average}\n${mode}`); 
const fs = require('fs');

const input = fs.readFileSync('input6.txt').toString().trim().split('\n');


// 기존 코드 31120KB -> 194596KB 개선
const repeatCount = Number(input[0]);
let result = [];

for(let i = 0; i < repeatCount; i++){
  // 시간초과가 발생하여서 split과 map을 이용하여 입력값을 숫자로 변환
  const [a, b] = input[i + 1].split(' ').map(Number);
  result.push(a + b);
}

// 결과값을 줄바꿈(엔터)으로 구분하여 출력
console.log(result.join('\n'));
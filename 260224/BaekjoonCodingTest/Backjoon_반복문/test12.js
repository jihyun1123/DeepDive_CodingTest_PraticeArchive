const fs  = require('fs');
const input = fs.readFileSync('input12.txt').toString().trim().split('\n');

// input의 길이만큼 반복문을 돌면서, 각 줄마다 a와 b를 분리해서 더한 값을 출력
for(let i = 0; i < input.length; i++){
  const[a,b] = input[i].split(' ').map(Number);
  console.log(a+b);
}
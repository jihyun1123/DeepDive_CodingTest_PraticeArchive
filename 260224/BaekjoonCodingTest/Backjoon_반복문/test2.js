const fs = require('fs');

const input = fs.readFileSync('input2.txt').toString().trim().split('\n');

const repeatCount = Number(input[0]);
for(let i = 0; i < repeatCount; i++){
  // split(' ')으로 나눠서 배열로 만들고, 
  // 0번째와 1번째 요소를 각각 num1과 num2로 선언
  let num1 = Number(input[1 + i].split(' ')[0]);  
  let num2 = Number(input[1 + i].split(' ')[1]);

  console.log(num1 + num2);
}
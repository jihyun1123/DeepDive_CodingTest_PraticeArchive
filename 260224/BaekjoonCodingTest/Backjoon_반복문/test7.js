const fs =  require('fs');
const input = fs.readFileSync('input7.txt').toString().trim().split('\n');

const repeatCount = Number(input[0]);

for(let i = 1; i < input.length; i++){
  // 배열구조분해
  const [a, b] = input[i].split(' ').map(Number);
  console.log(`Case #${i}: ${a+b}`);
}
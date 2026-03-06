const fs = require('fs');
const input = fs.readFileSync('input8.txt').toString().trim().split('\n');

const reapeatCount = Number(input[0]);
for(let i = 1; i <= reapeatCount; i++){
  const [a, b] = input[i].split(' ').map(Number);
  console.log(`Case #${i}: ${a} + ${b} = ${a+b}`);
}
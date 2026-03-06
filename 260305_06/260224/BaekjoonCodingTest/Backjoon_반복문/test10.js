const fs = require('fs');
const input = fs.readFileSync('input10.txt').toString().trim().split(' ');

const num = Number(input[0]);

for(let i = 1; i <= num; i++){
  console.log(' '.repeat(num - i) + '*'.repeat(i));
}
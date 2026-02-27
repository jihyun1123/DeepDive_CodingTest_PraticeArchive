const fs = require('fs');

const input = fs.readFileSync('input1.txt').toString().trim().split(' ');

const num = Number(input);

for(let i = 1; i < 10; i++){
  console.log(`${num} * ${i} = ${num*i}`);
}
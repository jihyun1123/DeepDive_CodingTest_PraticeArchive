const fs = require('fs');

const input = fs.readFileSync('input3.txt').toString().trim().split(' ');

const num = Number(input);
let count = 0;

for(let i = 1; i <= num; i++){
  count += i;
}

console.log(count);
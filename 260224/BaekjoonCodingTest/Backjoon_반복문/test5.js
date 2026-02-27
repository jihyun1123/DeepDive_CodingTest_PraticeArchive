const fs = require('fs');

const input = fs.readFileSync('input5.txt').toString().trim().split(' ');

const num = Number(input);
let result = '';

for(let i = 0; i < num/4; i++){
  result += 'long ';
}

console.log(result + 'int');
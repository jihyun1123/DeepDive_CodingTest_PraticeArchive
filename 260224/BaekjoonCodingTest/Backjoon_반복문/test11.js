const fs = require('fs');
const input = fs.readFileSync('input11.txt').toString().trim().split('\n');

let count = 0;

while(true){
  const [a, b] = input[0+count].split(' ').map(Number);
  if(a === 0 && b === 0){
    break;
  }
  console.log(a + b);
  count += 1;
}
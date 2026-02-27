const fs = require('fs');

const input = fs.readFileSync('input7.txt').toString().trim().split(' ');

const num1 = Number(input[0]);
const num2 = Number(input[1]);  
const num3 = Number(input[2]);

if(num1 === num2 && num2 === num3){
  console.log(10000 + num1 * 1000);
}else if(num1 === num2 || num1 === num3 || num2 === num3){
  if(num1 === num2){
    console.log(1000 + num1 * 100);
  } else if(num1 === num3){
    console.log(1000 + num1 * 100);
  } else if (num2 === num3){
    console.log(1000 + num2 * 100);
  }
}else {
  const maxNum = Math.max(num1, num2, num3);
  console.log(maxNum * 100);
}
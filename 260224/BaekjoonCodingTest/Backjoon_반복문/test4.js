const fs = require('fs');

const input = fs.readFileSync('input4.txt').toString().trim().split('\n');

const totalPrice = Number(input[0]);
const sumItem = Number(input[1]);
let totalItemPrice = 0;

for(let i = 0; i < sumItem; i++){
  let itemPrice = Number(input[2+i].split(' ')[0]);
  let itemCount = Number(input[2+i].split(' ')[1]);

  totalItemPrice += itemPrice * itemCount;
}

if( totalPrice === totalItemPrice){
  console.log('Yes');
}else {
  console.log('No');
}
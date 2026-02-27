const fs = require('fs');
const input = fs.readFileSync('input9.txt').toString().trim().split(' '); 

const num = Number(input[0]);

for(let i = 1; i <= num; i++){
  // *이 아니라 repeate를 사용하는 이유는 
  // '* 5'는 문자열이기 때문에 계산이 불가능하다 !!
  // 그러므로 '*'을 5번 반복하라는 의미로 repeat을 사용해야한다.
  console.log('*'.repeat(i));
}
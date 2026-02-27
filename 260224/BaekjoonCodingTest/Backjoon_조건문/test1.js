const fs = require('fs'); 
// 파일 시스템 모듈을 사용하여 입력을 읽어옴

const input = fs.readFileSync('input1.txt').toString().trim().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

if(A > B){
  console.log('>');
} else if(A < B) {
  console.log('<');
} else{
  console.log('==');
}
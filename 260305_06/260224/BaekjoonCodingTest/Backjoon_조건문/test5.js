const fs = require('fs');
const input = fs.readFileSync('input5.txt') // 백준 제출 시 0으로 바꿔야 함
  .toString().trim().split(' ');

const H = Number(input[0]);
const M = Number(input[1]);

// M이 45보다 작을 때, H가 0이면 23시로 바꿔주고, M은 15분 더해줌
if ( M < 45){
  if(H === 0){
    console.log(23, M + 15);
  } else {
    console.log(H - 1, M + 15);   
  }
}else{  // M이 45보다 크거나 같을 때, H는 그대로, M은 45분 빼줌
  console.log(H, M-45);
}
const fs = require('fs');
// 백준 제출 시 'input6.txt' -> 0으로 바꿔야됨 !!
const input = fs.readFileSync('input6.txt').toString().trim().split(' ');

// 변할 수 있기 때문에 let으로 선언
let currentHour = Number(input[0]);
let currentMinute = Number(input[1]);

const requireCookingTime = Number(input[2]);

// 현재 시간과 요리하는데 필요한 시간을 더해서 60분이 넘는 경우
if( currentMinute + requireCookingTime >= 60){
  const tempHour = Math.floor((currentMinute + requireCookingTime) / 60);  // 더하는 시간
  const tempMinute = (currentMinute + requireCookingTime) % 60; // 최종 분
  // 23시에서 1시간 더하면 0시로 바뀌는 경우
  if( currentHour === 23){
    currentHour = 0;
    console.log(currentHour, tempMinute);
  }else {
    currentHour += tempHour; // 기존 시간에 더하는 시간 더하기
    console.log(currentHour, tempMinute);
  }
}else {
  console.log(currentHour, currentMinute + requireCookingTime);
}
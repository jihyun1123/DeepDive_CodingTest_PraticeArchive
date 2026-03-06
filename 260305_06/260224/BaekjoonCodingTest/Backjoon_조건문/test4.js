const fs = require('fs');
const input = fs.readFileSync('input4.txt').toString().trim().split(' ');

const x = Number(input[0]);
const y = Number(input[1]);

if( x > 0 ){
  if(y > 0){
    console.log(1);
  }
  else{
    console.log(4);
  }
} else {    // x < 0
  if(y > 0){
    console.log(2);
  } else{
    console.log(3);
  }
}
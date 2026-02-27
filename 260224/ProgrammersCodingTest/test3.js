// 문자열 반복해서 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    // repeat() : 문자열을 주어진 횟수만큼 반복한 새로운 문자열을 반환
    console.log(str.repeat(n));
});
// 특수문자 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    // 특수문자 문자열 (이스케이프 처리 필수)
    const str = "!@#$%^&*(\\'\"<>?:;";

    // 그대로 출력
    console.log(str);
});
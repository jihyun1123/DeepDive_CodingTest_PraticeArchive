// 대소문자 바꿔서 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    let str = line;
    let result = '';
    
    for(let i = 0; i < str.length; i++){
        let ch = str[i];
        // 소문자 -> 대문자
        if(ch >= 'a' && ch <= 'z'){
            result += ch.toUpperCase();
        // 대문자 -> 소문자
        }else if(ch >= 'A' && ch <= 'Z'){
            result += ch.toLowerCase();
        }else {
            result += ch;
        }
    }
    console.log(result);
}).on('close',function(){
});
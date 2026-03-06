/*
RLE, RLD
압축 규칙 (Encoding)
 - 연속된 같은 문자를 1개 문자 + 반복 횟수로 바꿉니다.

복원 규칙 (Decoding)
 - 압축 문자열을 원래대로 문자 × 반복 횟수를 계산해서 복원합니다.

한 줄로 입력
첫 글자:
    E → 인코딩(압축)
    D → 디코딩(복원)

인코딩 메시지:
    대/소문자, _, ., ! 가능
    연속 반복 수는 최대 9 (1~9)

디코딩 메시지:
    길이가 짝수
    문자와 숫자가 번갈아 나옴 (예: H3 e2 l3 o1)
*/

const fs = require("fs");
const input = fs.readFileSync("input4.txt").toString().trim().split(" ");

const command = input[0];
const message = input[1];

function rleEncoding(message) {
    if (message.length === 0) return ""; // 빈 문자열 처리

    let result = "";
    let count = 1;

    for (let i = 0; i < message.length; i++) {
        if (message[i] === message[i + 1]) {
            count++;
        } else {
            result += message[i] + count;
            count = 1;
        }
    }
    return result;
}

function rleDecoding(encodeMessage) {
    let result = "";
    let i = 0;

    while (i < encodeMessage.length) {
        const char = encodeMessage[i]; // 문자 먼저
        i++;

        const count = parseInt(encodeMessage[i]); // 숫자는 항상 한 글자
        i++;

        result += char.repeat(count);
    }

    return result;
}

console.log(command === "E" ? rleEncoding(message) : rleDecoding(message));

/*
<< 백준 제출용 코드 >>
    - runtime error에서 typeError가 계속 발생해서 GPT를 통하여 입력 방식을 수정함
    - 입력이 한 줄로 들어오므로 split(" ") 대신 slice로 처리

const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 첫 글자(E/D)와 나머지 메시지 분리
const command = input[0];
const message = input.slice(2); // 0:E/D, 1:공백, 2~끝:메시지

function rleEncoding(str){
    let result = "";
    let count = 1;

    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            count++;
        } else{
            result += str[i] + count; // 문자+횟수
            count = 1;
        }
    }
    return result;    
}

function rleDecoding(str){
    let result = "";
    let i = 0;

    while(i < str.length){
        const char = str[i];  // 문자
        const count = parseInt(str[i+1]); // 숫자 1자리
        result += char.repeat(count);
        i += 2; // 문자+숫자 한 쌍 처리
    }
    return result;
}

console.log(command === "E" ? rleEncoding(message) : rleDecoding(message));


*/










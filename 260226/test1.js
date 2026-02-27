/*
문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성하시오. 
단, 단어의 순서는 바꿀 수 없다. 단어는 영어 알파벳으로만 이루어져 있다.

첫째 줄에 테스트 케이스의 개수 T가 주어진다. 
각 테스트 케이스는 한 줄로 이루어져 있으며, 문장이 하나 주어진다. 
단어의 길이는 최대 20, 문장의 길이는 최대 1000이다. 단어와 단어 사이에는 공백이 하나 있다.
*/

const fs = require('fs');
// \r : carriage return, 커서를 맨 앞으로 이동
const input = fs.readFileSync('input1.txt').toString().trim().split('\r\n');

const T = Number(input[0]);

for(let i = 0; i < T; i++){
    const sentence = input[i+1].split(' '); // 문장 → 단어 배열
    // 단어 뒤집기, 문자열(split) -> 배열 -> reverse -> join(문자열)
    const reversedSentence = sentence.map(word => word.split('').reverse().join(''));
    console.log(reversedSentence.join(' '));
}

/*
1차 split(' ')
문장 → 단어 배열

2차 split('')
단어 → 문자 배열

reverse()
문자 배열 뒤집기

join('')
문자열로 복원
*/

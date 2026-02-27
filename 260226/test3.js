/*
알파벳 소문자로만 이루어진 단어 S가 주어진다. 
각 알파벳이 단어에 몇 개가 포함되어 있는지 구하는 프로그램을 작성하시오.

첫째 줄에 단어 S가 주어진다. 
단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.
*/

// 💡 iterable : 반복할 수 있는 객체

const fs = require('fs');
const input = fs.readFileSync('input3.txt').toString().trim();
// 알파벳 개수를 저장할 Map 객체 생성
// key : 알파벳, value : 등장 횟수
const alphabetCountArray = new Map();

// a~z까지 모든 알파벳 0으로 초기화
for(const alphabet of 'abcdefghijklmnopqrstuvwxyz') {
    alphabetCountArray.set(alphabet, 0);
}

for(const alphabet of input){
    alphabetCountArray.set(alphabet, (alphabetCountArray.get(alphabet) || 0) + 1);
}

// Map의 value들은 iterator 객체로 반환되므로 바로 join 메서드를 사용할 수 없다.
// 그러므로 spread문법을 사용하여 하나씩 값을 펼친 뒤, []로 감싸서 배열로 만들어줌!
console.log([...alphabetCountArray.values()].join(' '));







/*
괄호 (백준 9012)
- 난이도: 실버 4
- 소괄호 `()`만 있는 문자열이 올바른지 판별
- 힌트: 여는 괄호면 push, 닫는 괄호면 pop. 마지막에 스택이 비어있으면 YES

입력 데이터는 표준 입력을 사용한다. 
입력은 T개의 테스트 데이터로 주어진다. 
입력의 첫 번째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다. 
각 테스트 데이터의 첫째 줄에는 괄호 문자열이 한 줄에 주어진다. 
하나의 괄호 문자열의 길이는 2 이상 50 이하이다. 
*/

const fs = require('fs');
const input = fs.readFileSync('input2.txt').toString().trim().split('\n');

const T = Number(input[0]);

// 입력이 괄호만 있어서 따로 pairs 객체를 선언하지않음 !!

for(let i = 0; i < T; i++){
    const parentheses = input[1 + i].trim();
    const stack = [];
    /* for문 안에서 오류가 발생했는지 추적하기 위하여 선언 
       처음에는 선언 안하고 코드를 적었는데, 나중에 출력결과를 보니, 
       처음 괄호들만 검사하고, 그 뒤의 나머지 괄호들은 검사하지 않았음
    */
    let isValid = true;

    for(let j = 0; j < parentheses.length; j++){
        const char = parentheses[j];
        if(char === '('){
            stack.push(char);
        }
        // 닫는 괄호가 나왔는데, 
        // 스택이 비어있다면은 짝이 맞지 않는 괄호이므로 false -> break
        else if(char === ')'){
            if(stack.length === 0){
                isValid = false;
                break;
            }
            stack.pop();
        }
    }
    if(isValid && stack.length === 0){
        console.log('YES');
    } else {
        console.log('NO');
    }
}





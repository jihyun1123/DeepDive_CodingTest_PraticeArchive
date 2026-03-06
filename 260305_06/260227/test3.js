
/*
균형잡힌 세상 (백준 4949)
- 난이도: 실버 4
- 소괄호 `()`와 대괄호 `[]` 두 종류가 섞인 버전
- 힌트: 괄호 검사 코드랑 비슷. 짝이 맞는지 확인!

각 문자열은 마지막 글자를 제외하고 
영문 알파벳, 공백, 소괄호("( )"), 대괄호("[ ]")로 이루어져 있으며, 
온점(".")으로 끝나고, 길이는 100글자보다 작거나 같다.
입력의 종료조건으로 맨 마지막에 온점 하나(".")가 들어온다.
*/

const fs = require('fs');
const input = fs.readFileSync('input3.txt').toString().trim().split('\n');
const pairs = {
    '(' : ')',
    '[' : ']'
}
// 전체 입력 검사
for(let i = 0; i < input.length; i++){
    const stack = [];
    const sentence = input[i];
    // 처음에 무의식적으로 const로 작성했는데, 
    // 나중에 재할당이 필요한 것을 깨닫고 let으로 수정
    let isValid = true;

    /* 
    처음에 코드를 작성할 때 온점 조건문을 중첩 for문 안에 넣고 
    return문으로 작성했는데, 출력 결과가 아무것도 안나와서 당황했다가
    return의 의미에 대해 다시 생각해보니, 함수를 종료시키는 역할이므로
    즉, 중첩 for문 안에서 return이 실행되면, 그 이후의 코드가 실행되지 않아서 
    아무것도 출력되지 않았던 것이었다. 
    그래서 온점 조건문을 밖으로 빼내서 break문으로 수정하니, 정상적으로 출력이 나왔다!!
    */
    if(sentence === '.'){
        break;
    }

    // 한 문장씩 검사
    for(let j = 0; j < sentence.length; j++){
        const char = sentence[j];

        // 여는 괄호인 경우
        if(char === '(' || char === '['){
            stack.push(char);

        // 닫는 괄호인 경우
        }else if(char === ')' || char === ']'){
            // stack이 비어있다면, char은 짝이 맞지 않은 괄호면 false -> break
            if(stack.length === 0){
                isValid = false;
                break;
            }

            const top = stack.pop();

            // char은 짝이 맞지 않는 괄호면 false -> break
            // ex) top이 '('인데 char이 ']'인 경우, 참고로 pairs[top]은 ')'
            // 짝이 맞지 않는 괄호이므로 false -> break
            if(pairs[top] !== char){
                isValid = false;
                break;
            }
        }
    };
    // 문장 검사 후, isValid가 true이고 stack이 비어있다면, YES 출력. 
    //그렇지 않으면 NO 출력
    if(isValid && stack.length === 0){
        console.log('yes');
    }else{
        console.log('no');
    }
}





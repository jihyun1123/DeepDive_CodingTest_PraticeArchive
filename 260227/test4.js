/*
**짝지어 제거하기 (프로그래머스)**
- 난이도: Level 2
- 연속된 같은 문자 두 개를 제거하고, 남은 게 있는지 확인
- 힌트: 스택 top과 현재 문자가 같으면 pop, 다르면 push!

예를 들어, 문자열 S = baabaa 라면
b aa baa → bb aa → aa →
의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.
*/


const fs = require('fs');
const input = fs.readFileSync('input4.txt').toString().trim();
const stack = [];

for(let i = 0; i < input.length; i++){
    const char = input[i];

    /* 스택이 비어있지 않고, 스택의 top과 char이 같으면 pop
       스택이 비어있지 않다는 뜻은 스택에 문자가 하나 이상 있다는 뜻으로,
       stack top이 있다는 뜻이다 !! 
       이때 stack top은 stack[stack.length - 1]로 표현할 수 있다 !! 
    */

    // stack이 비어있지 않고, stack top과 char이 같으면 pop
    if(stack.length > 0 && stack[stack.length - 1] === char){
        stack.pop();
    // stack이 비어있거나, stack top과 char이 다르면 push
    }else{
        stack.push(char);
    }
}

console.log(stack.length === 0 ? 1 : 0);



/*
프로그래머스 코드

function solution(s){
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        
        if(s.length > 0 && stack[stack.length - 1] === char){
            stack.pop();
        }else{
            stack.push(char);
        }
    }
    
    return (stack.length === 0 ? 1 : 0);
}

console.log(solution("baabaa"));


*/ 
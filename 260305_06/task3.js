/*
3번. 숫자 카드 2 (백준 10816), 실버4

문제 :
• N장의 카드에서 각 숫자가 몇 개 있는지 구하기

첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 
둘째 줄에는 숫자 카드에 적혀있는 정수가 주어진다. 

셋째 줄에는 M(1 ≤ M ≤ 500,000)이 주어진다. 
넷째 줄에는 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 M개의 정수가 주어지며, 
이 수는 공백으로 구분되어져 있다.

힌트 :
• Upper Bound(target 초과) - Lower Bound(target 이상) = 개수
• 또는 Map으로 카운팅
*/ 

const fs = require('fs');
const input = fs.readFileSync('input3.txt').toString().trim().split('\n');

const N = Number(input[0]);
const cards = input[1].split(' ').map(Number).sort((a,b) => a-b);
const M = Number(input[2]);
const targets = input[3].split(' ').map(Number);


function lowerBound(arr, target){
    let left = 0;
    /*
    right는 탐색범위에 포함되지않음 
    왜냐하면은 target이 배열의 모든 값보다 큰 경우 존재할 수 있기 때문
    */
    let right = arr.length;
    while(left < right){
        const mid = Math.floor((left + right) / 2);

        if(arr[mid] < target){
            /*
            arr[mid] < target 이면
            mid는 절대 정답이 될 수 없기 때문에
            mid + 1로 이동한다.
            */ 
            left = mid + 1;
        }else{
            /*
            arr[mid] >= target
            → mid가 정답일 수도 있음
            → 그래서 버리지 않고 right = mid
            */
            right = mid;
        }
    }
    return left;    // 탐색이 끝나면 left는 target 이상인 첫 번째 요소의 인덱스를 가리킴
}

function upperBound(arr, target){
    let left = 0;
    let right = arr.length;

    while(left < right){
        const mid = Math.floor((left + right) / 2);

        /*
        arr[mid] <= target
        → 아직 초과 아님
        → 오른쪽 탐색
        */
        if(arr[mid] <= target){
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }
    return left;
}

let result = [];

// targets 배열의 각 요소에 대해 Upper Bound와 Lower Bound를 이용하여 존재 개수 계산
for(let t of targets){
    // Upper Bound(target 초과) - Lower Bound(target 이상) = target 개수
    const count = upperBound(cards, t) - lowerBound(cards, t);
    result.push(count);
}

console.log(result.join(' '));



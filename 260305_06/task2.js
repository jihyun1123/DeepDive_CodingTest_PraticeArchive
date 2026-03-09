/*
2번 수 찾기 (백준 1920), 실버 4
N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 
이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

문제 :
• N개의 수 중에서 M개의 수가 있는지 확인
• 있으면 1, 없으면 0 출력
*/ 

const fs = require('fs');
const input = fs.readFileSync('input2.txt').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);
const M = Number(input[2]);
const targets = input[3].split(' ').map(Number);

// A 배열을 정렬
A.sort((a, b) => a-b);

// 이진 탐색 함수
function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

    // left가 right보다 작거나 같을 때까지 반복
    while(left <= right){
        const mid = Math.floor((left + right) / 2);

        if(arr[mid] === target){
            return 1; // 찾았을 때 1 반환
        }
        else if(arr[mid] < target){
            left = mid + 1; // 오른쪽 탐색, mid로 하지 않는 이유는 이미 mid는 탐색했기 때문!
        }
        else{
            right = mid - 1; // 왼쪽 탐색
        }
    }
    return 0; // 찾지 못했을 때 0 반환
}

let result = [];

// targets 배열의 각 요소에 대해 이진 탐색 수행
for(let t of targets){
    result.push(binarySearch(A, t));
}

console.log(result.join('\n')); // 결과 출력




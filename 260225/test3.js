/*
투 포인터 Two Pointer
⚠️ 배열이 정렬되어 있을 때만 이 논리가 성립한다 !!!!!!!!!!!!!!!!!!

n개의 서로 다른 양의 정수 a1, a2, ..., an으로 이루어진 수열이 있다. 
ai의 값은 1보다 크거나 같고, 1000000보다 작거나 같은 자연수이다. 자연수 x가 주어졌을 때, 
ai + aj = x (1 ≤ i < j ≤ n)을 만족하는 (ai, aj)쌍의 수를 구하는 프로그램을 작성하시오.

첫째 줄에 수열의 크기 n이 주어진다. 
다음 줄에는 수열에 포함되는 수가 주어진다. 셋째 줄에는 x가 주어진다. 
(1 ≤ n ≤ 100000, 1 ≤ x ≤ 2000000)
*/

const fs = require('fs');
const input = fs.readFileSync('input3.txt').toString().trim().split('\n');

const arrayLength = Number(input[0]);
// sort로 오름차순으로 배열 정리
const array = input[1].split(' ').map(Number).sort((a,b) => a - b);
const target = Number(input[2]);

let left = 0;
let right = arrayLength -1;
let correctCounter = 0;

while(left < right){
    const sum = array[left] + array[right];
    
    if(sum === target){
        correctCounter++;
        // 두 수가 같을 수 없으므로 left와 right 둘 다 이동
        left++; 
        right--;
    }else if(sum < target){
        left++;
    }else{
        right--;
    }
}

console.log(correctCounter);

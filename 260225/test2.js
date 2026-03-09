/*
구간 합 구하기
    -> prefix sum
수 N개가 주어졌을 때, i번째 수부터 j번째 수까지 합을 구하는 프로그램을 작성하시오.

첫째 줄에 수의 개수 N과 합을 구해야 하는 횟수 M이 주어진다. 
둘째 줄에는 N개의 수가 주어진다.  수는 1,000보다 작거나 같은 자연수이다. 
셋째 줄부터 M개의 줄에는 합을 구해야 하는 구간 i와 j가 주어진다.
*/

const fs = require('fs');
const input = fs.readFileSync('input2.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const prefixSum = [0];

// prefix sum 배열 생성
for(let i = 0; i < N; i++){
    prefixSum.push(prefixSum[i] + numbers[i]);
}

for(let i = 0; i < M; i++){
    const [left, right] = input[2 + i].split(' ').map(Number);
    // prefix sum 배열을 이용하여 구간 합 계산
    console.log(prefixSum[right] - prefixSum[left - 1]);
}



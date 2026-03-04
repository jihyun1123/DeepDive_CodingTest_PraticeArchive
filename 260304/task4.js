/*
4번 Two Sum (LeetCode), 레벨 : Easy


• 배열에서 합이 target인 두 수의 index 찾기

→ 힌트:
• O(n²) 풀이: 이중 for문 → 시간 초과 가능
• O(n) 풀이: Map으로 짝꿍 찾기
• target - nums[i] 값이 Map에 있는지 확인

ex)
[2,7,11,15]
9
=> [0,1] (2 + 7 = 9)
*/


const fs = require('fs');
const input = fs.readFileSync('input4.txt').toString().trim().split('\n');

const nums = JSON.parse(input[0]);
const target = Number(input[1]);

var twoSum = function(nums, target) {
    const map = new Map();

    for(let i = 0; i< nums.length; i++){
        // 짝꿍을 찾기 위하여 target에서 현재 숫자를 빼서 짝꿍이 되는 숫자를 구함
        const complement = target - nums[i];

        // 짝꿍이 Map에 있는지 확인
        if(map.has(complement)){
            // 짝꿍이 있다면, 짝꿍의 index와 현재 index를 반환
            // 이때 짝꿍의 index를 먼저 반환하는 이유는 
            // map에는 이전 값들만 들어 있기 때문에, 
            // 짝꿍의 index가 항상 현재 index보다 작음 그러므로 먼저 반환한다!!
            return [map.get(complement), i]
        }

        // 짝꿍이 없는 경우, 현재 숫자와 index를 Map에 저장
        map.set(nums[i], i);
    }
    return [];
};

console.log(twoSum(nums, target));
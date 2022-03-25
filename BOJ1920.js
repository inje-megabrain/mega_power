const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n') // BOJ에서 입력 받기 

let N = input[1].split(' ').map((e)=>parseInt(e)).sort((a,b)=>a-b) //이분 탐색을 위해 첫번째 배열은 SORT
let M = input[3].split(' ').map((e)=>parseInt(e))

const binarySearch = (list, target, left, right, mid) => {
    mid = Math.floor((left + right) / 2); //배열의 가장 중간부터 큰지 작은지 비교

  if (right < left) {// 범위 탐색이 끝났을 때 
    return list[mid] == target ? 1 : 0;
  }

  if (list[mid] > target) { // 만약에 중간 값이 TARGET하는 값보다 크다면 RIGHT를 줄임
    right = mid - 1;
  } else {
    left = mid + 1; // 반대로 LEFT를 줄여옴 
  }

  return binarySearch(list, target, left, right, mid);
  } //탐색 끝날 때 까지 재귀로 이분탐색


console.log((M.map(m => binarySearch(N, m, 0, N.length-1, 0))).join('\n')) //이분 탐색 후 출력
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../ans.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split("\n").map((e)=>+e);
function isPrime(a){ //소수일땐 a값을 출력하고, 소수가 아닐땐 0을 반환하는 함수
    for(let i =2; i**2 <= a; i++){ //루트까지 판별하기(약수의 중심을 구하는 방법)
        if(a % i === 0){
            return 0;
        }
    }
    if(a == 1) return 0
    return a;
}

for(let i = 1; i <= input[0]; i++){
    for(let j = input[i];; j++){
        let temp = isPrime(j);
        if(temp!=0){
            console.log(temp)
            break;
        }
    }
}
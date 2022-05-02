const filePath = process.platform === 'linux' ? '/dev/stdin' : '../ans.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split("\n").map((e)=>+e);
let fibonacci = [0, 1, 1]
for(let i = 3; i <= input; i++){
    fibonacci.push(BigInt(fibonacci[i-1]) + BigInt(fibonacci[i-2]))
}
console.log(BigInt(fibonacci[input]).toString())
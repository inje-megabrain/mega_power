const filePath = process.platform === 'linux' ? '/dev/stdin' : '../ans.txt';
let [input, ...inputs] = require('fs').readFileSync(filePath).toString().trim().split("\n");
[input, money] = input.split(" ").map((e)=>+e)
inputs = inputs.map((e)=>+e)

let cnt = 0

while(true){
    if(money == 0) break;
    for(let i = 0; i <input; i++){
        if(money < inputs[i]){
            cnt++
            money -= inputs[i - 1]
            break;
        }
        else if(input - 1 == i){
            cnt++
            money -= inputs[i]
        }
    }
}

console.log(cnt)
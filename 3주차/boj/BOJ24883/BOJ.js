const filePath = process.platform === 'linux' ? '/dev/stdin' : '../ans.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split("\n");
if(input == "n" || input == "N"){
    console.log("Naver D2")
}
else{
    console.log("Naver Whale")
}
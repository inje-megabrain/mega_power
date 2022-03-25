const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let Finput = input[0].split(' ')
let Sinput = input[1].split(' ')

console.log(Finput[0]/ Finput[1] > (Sinput[0]**2)*Math.PI/Sinput[1] ? "Slice of pizza": "Whole pizza")
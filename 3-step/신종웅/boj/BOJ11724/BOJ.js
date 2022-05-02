const filePath = process.platform === 'linux' ? '/dev/stdin' : '../ans.txt';
let [input, ...inputs] = require('fs').readFileSync(filePath).toString().trim().split("\n");
let [n, m] = input.split(" ").map((e)=>+e), graph = [], visited=new Array(n+1).fill(false)
let cnt = 0
for(let i = 1; i <= n; i++) graph[i] = []
for(let i = 0; i <inputs.length; i++){
    let [a, b] = inputs[i].split(" ").map((e)=>+e)
    graph[a].push(b)
    graph[b].push(a)
}   

for(let i = 1; i < n; i++){
    if(!visited[i]){
        DFS(i);
        cnt++;
    }
}

console.log(cnt)

function DFS(v){
    if(visited[v] == true)  return
    visited[v] = true
    for(let i = 0 ; i < graph[v].length; i++){
        if(visited[graph[v][i]] == false){
            DFS(graph[v][i])
        }
    }
}
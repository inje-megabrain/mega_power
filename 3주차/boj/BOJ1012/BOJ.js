const filePath = process.platform === 'linux' ? '/dev/stdin' : '../ans.txt';
let [testCase, ...inputs] = require('fs').readFileSync(filePath).toString().trim().split("\n");
let graph, visited, M, N ,K ,cnt, p = 0
for(let i = 0; i < inputs.length; i++) inputs[i] = inputs[i].split(" ").map((e)=>+e)


for(let i = 0; i < testCase; i++){
    [M, N, K] = inputs[p]
    graph = Array.from(Array(M), () => new Array(N).fill(0)), visited = Array.from(Array(M), () => new Array(N).fill(0))
    cnt = 0
    let temp = p
    for(p = p+1; p <= K + temp; p++){
        let [x, y] = inputs[p]
        graph[x][y] = 1
    }
    for(let j = 0; j < M; j++){
        for(let k = 0; k < N; k++){
            if(graph[j][k] == 1 && visited[j][k]==0){
                DFS(j,k)
                cnt ++
            }
        }
    }
    console.log(cnt)
}




function DFS(x,y){
    let dx=[0,1,0,-1], dy=[1,0,-1,0]
    visited[x][y] = 1
    for(let i = 0; i < 4; i++){
        let ax = x + dx[i], ay = y + dy[i]
        if(ax >= 0 && ay >= 0 && ax < M && ay < N){
            if(visited[ax][ay] == 0 && graph[ax][ay] == 1){
                DFS(ax, ay)
            }
        }
    }
}
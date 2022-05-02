const filePath = process.platform === 'linux' ? '/dev/stdin' : '../ans.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split("\n");
let cntOn =  -1, testCaseWidth = 0, testCaseHeight = 0, graph = [], visited = []

for(let i = 0;; i++){
    input[i] = input[i].split(" ").map((e)=>+e)
    if(cntOn >= 0){
        cntOn++
        for(let j = 0; j < testCaseWidth; j++){
            if(input[i][j] == 1){
                graph[cntOn - 1][j] = 1
            }
        }
        
        if(cntOn == testCaseHeight){
            let ansCnt = 0
            for(let n = 0; n < testCaseWidth; n++){
                for(let m = 0; m < testCaseHeight; m++){
                    if(graph[m][n] == 1 && visited[m][n] == 0){
                        DFS(m, n,testCaseHeight,testCaseWidth)
                        ansCnt++
                    }
                }
            }
            console.log(ansCnt)
            cntOn = -1;
        }
    }
    else{
        testCaseWidth = input[i][0]
        testCaseHeight = input[i][1]
        if(testCaseHeight == 0 && testCaseWidth == 0) break;
        cntOn++
        graph = Array.from(Array(testCaseHeight), () => new Array(testCaseWidth).fill(0))
        visited = Array.from(Array(testCaseHeight), () => new Array(testCaseWidth).fill(0))
    }
}


function DFS(x,y,M,N){
    let dx=[0,1,0,-1,1,1,-1,-1], dy=[1,0,-1,0,1,-1,1,-1]
    visited[x][y] = 1
    for(let i = 0; i < 8; i++){
        let ax = x + dx[i], ay = y + dy[i]
        if(ax >= 0 && ay >= 0 && ax < M && ay < N){
            if(visited[ax][ay] == 0 && graph[ax][ay] == 1){
                DFS(ax, ay, M, N)
            }
        }
    }
}
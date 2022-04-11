import sys
INF = int(99)
n=6;m=6
D =[[0,7,INF,11,INF,INF],
        [3,0,INF,INF,17,INF],
        [INF,6,0,INF,INF,INF],
        [INF,INF,INF,0,9,INF],
        [INF,5,15,16,0,2],
        [INF,INF,11,INF,8,0]]
P =[[0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,8,0]]
#0일때만 하는 반복문
print("k = ",0)
print("----------------")
for i in range(0,n):
    for j in range(0,n):
        print(D[i][j],end='|')
    print()
    print("----------------")
print()
#경로 찾기
for k in range(0, n):
    print("k = ",k+1)
    for i in range(0, n):
        print("----------------")
        for j in range(0, n):
            if(D[i][k]+D[k][j]<D[i][j]):
                P[i][j]=k
                D[i][j] = min(D[i][j], D[i][k] + D[k][j])
            print(D[i][j],end='|')
        print()
    print("----------------")
    print("")
print("P")
print("-------------")
for i in range(0,n):
    for j in range(0,n):
        print(P[i][j],end='|')
    print()
    print("-------------")
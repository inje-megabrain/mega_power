infinity = 99
n = 6
W = [[0,7,infinity,11,infinity,infinity],[3,0,infinity,infinity,17,infinity],
    [infinity,6,0,infinity,infinity,infinity],[infinity,infinity,infinity,0,9,infinity],
    [infinity,5,15,16,0,2],[infinity,infinity,11,infinity,8,0]]
D = W
P = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]

for k in range(n):
    for i in range(n):
        for j in range(n):
            if D[i][k] + D[k][j] < D[i][j]:
                P[i][j] = k
                D[i][j] = min(D[i][j],D[i][k]+D[k][j])
            if D[i][j] == 99:
                print('inf',end = " ")
            else:
                print(D[i][j],end=" ")
        print()
    print()

print('결과')
for i in range(n):
    for j in range(n):
        if D[i][j] == 99:
            print('inf',end=" ")
        else:
            print(D[i][j],end=" ")
    print()
print()

print('최단경로')
for i in range(n):
    for j in range(n):
        print(P[i][j],end=" ")
    print()

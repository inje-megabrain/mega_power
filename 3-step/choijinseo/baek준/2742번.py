num = int(input())
N = []
for i in range(1,num+1):
    N.append(i)
N.reverse()
for i in range(len(N)):
    print(N[i])
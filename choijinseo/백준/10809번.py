S = list(map(str, input())) # baekjoon
alpha = ['a','b','c','d','e','f','g','h','i','j','k','l'
,'m','n','o','p','q','r','s','t','u','v','w','x','y','z']
print(S)
for i in range(len(S)):
    for j in range(27):
        if S[i] == alpha[j]:
            print(alpha.index(j),end="")
        else:
            print("-1",end="")
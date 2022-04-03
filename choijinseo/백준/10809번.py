S = list(map(str, input()))
alpha = ['a','b','c','d','e','f','g','h','i','j','k','l'
,'m','n','o','p','q','r','s','t','u','v','w','x','y','z']
print(S)
for i in range(26):
    if S[i] == alpha[i]:
        print(alpha.index(alpha[i]),end="")
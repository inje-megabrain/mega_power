T = int(input())
for i in range(T):
    num, S = map(str, input().split())
    for j in range(0,len(S)): # num 값을 돌리는게 아니라 S의 길이만큼 돌려야한다.
        print(S[j]*int(num),end="")
    print()

T = int(input())
for i in range(T):
    num, S = map(str, input().split())
    for j in range(0,len(S)):
        print(S[j]*int(num),end="")
    print()
# 아직 오류를 못 잡음
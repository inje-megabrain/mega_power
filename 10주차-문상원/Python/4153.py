#4153번 피타고라스 정리
while True:
    a= list(map(int,input().split()))
    if sum(a)==0:break
    maxN = max(a)
    a.remove(maxN)
    if a[0]**2 + a[1]**2 ==maxN**2:
        print('right')
    else:print('wrong')
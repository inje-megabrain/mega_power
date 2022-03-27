A,B,C = map(int,input().split()) #A고정지출, B가변지출, C판매금
cnt=1
while cnt*C<=A+(B*cnt):
    if C==1:
        cnt=-1
        break
    if cnt*C>A+(B*cnt):
        break
    cnt+=1
print(cnt)
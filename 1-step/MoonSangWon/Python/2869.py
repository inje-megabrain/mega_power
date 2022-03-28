# 달팽이는 올라가고 싶다.
a,b,v = map(int,input().split())#a: 하루에 올라갈 수 있는 거리, b:저녁에 떨어지는 거리 v:총 높이
cnt =v-a 
if cnt%(a-b)==0:
    c = cnt//(a-b)
else:
    c = cnt//(a-b)+1
print(c+1)
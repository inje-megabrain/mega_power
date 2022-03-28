a,b,v = map(int,input().split())
cnt =v-a
if cnt%(a-b)==0:
    c = cnt//(a-b)
else:
    c = cnt//(a-b)+1
print(c+1)
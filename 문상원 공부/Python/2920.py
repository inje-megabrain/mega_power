c = list(map(int,input().split()))
a=0;result=""
for i in range(0,len(c)-1):
    a=c[i]-c[i+1]
    if a==-1:result=("ascending")
    elif a==1:result=("descending")
    else:result=("mixed");break
print(result)
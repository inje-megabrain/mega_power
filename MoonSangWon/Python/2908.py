#상수 
num = list(map(int,input().split()))
s = list(str(num[0]))
x = list(str(num[1]))
s.reverse();x.reverse();c='';b=''
for i in range(3):
    c += s[i]
    b += x[i]
if int(c) > int(b):
    print(c)
elif int(c)<int(b):
    print(b)

A = int(input())
B = int(input()) 
C = int(input())
num = str(A*B*C)
z = list(num)
for i in range(0,10):
    print(z.count(str(i)))
A1 = list()
A1=(list(map(str,input().split())))
num1 = int(A1[0][::-1])
num2 = int(A1[1][::-1])
if num1 > num2:
    print(num1)
else:
    print(num2)


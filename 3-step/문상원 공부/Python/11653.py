import sys
n = int(sys.stdin.readline())
i = 2
while n !=1:
    if n%i ==0:
        n = n / i
        print(i)
    else:
        i+=1
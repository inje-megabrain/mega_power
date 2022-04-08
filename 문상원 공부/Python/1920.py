import sys
m1=int(sys.stdin.readline())
li1 = set(map(int,input().split()))
m2=int(sys.stdin.readline())
li2 = list(map(int,input().split()))
for i in li2:
    if i in li1:
        print(1)
    else:print(0)
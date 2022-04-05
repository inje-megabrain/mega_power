num = int(input())
for i in range(num):
    for j in range(num-i-1):
        print(" ",end="")
        --j
    for z in range(i+1):
        print("*",end="")
    print()
n = int(input())
num = list(map(int,input().split()))
sam = 0
for j in range(0,len(num)):
    if num.count(num[j]) == 0:
        max = num[j]
        break
    if j != num:
        if num[j] > num[j+1]:
            max = num[j]
        elif num[j+1] > num[j]:
            max = num[j+1]
    else:
        break
for i in range(len(num)):
    sam += num[i]/max*100
print(sam/n)
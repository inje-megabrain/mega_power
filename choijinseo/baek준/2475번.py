num = list(map(int,input().split()))
sum1 = 0
for i in range(len(num)):
    sum1 += num[i]*num[i]
print(sum1%10)
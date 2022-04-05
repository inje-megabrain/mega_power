size = int(input())
number = input()
nums = list(map(int, number))

sum = 0
for i in range(0,size):
    sum += nums[i]
print(sum)
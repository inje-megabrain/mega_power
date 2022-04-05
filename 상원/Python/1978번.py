#소수 구하기
from genericpath import isfile
from inspect import isframe
from turtle import Turtle

cnt = int(input())
num = list(map(int,input().split()))
c=0
# for i in range(0,len(num)):
#     if num[i]%(2*(i+2))==0 or num[i]%(3*(i+2))==0 or num[i]==1:
#         continue
#     else:
#         c+=1
for i in num : # 1 3 5 7
    isPrime = 0
    if i>1:
        for j in range(2, i) : # 2~7 까지
            if i % j == 0: # 1 % 2 == 1
                isPrime +=1
        if isPrime == 0:
            c+=1
print(c)
    

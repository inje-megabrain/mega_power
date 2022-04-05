import sys
num = int(input())
input_num = sys.stdin.readline
for i in range(0,num):
    A,B = map(int,input_num().split())
    print(A+B)
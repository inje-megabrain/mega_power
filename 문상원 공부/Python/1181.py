#1181번 단어 크기대로 정렬
import sys
num = int(input())
li = []
for i in range(num):
    li.append(sys.stdin.readline().strip())#단어 입력 \n제거 input은 \n을 포함x
set_ = set(li)#중복 제거
li = list(set_)#다시 리스트로
li.sort()#정렬
li.sort(key=len)#길이별로 정렬
for i in li:
    print(i)

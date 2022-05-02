num = list(map(int,input().split()))
answer1 = []
answer2 = []
for i in range(1,len(num)+1):
    answer1.append(i)
    answer2.append(i)
answer2.reverse()
if num == answer1:
    print('ascending')
elif num == answer2:
    print('descending')
else:
    print('mixed')

num = list(map(str,input())) # baekjoon
alpha = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
print(num)
count = list()
for i in range(len(num)):
   for j in range(0,len(alpha)):
        if num[i] == alpha[j]:
            count.append(num.index(num[i]))
        else:
            count.append(-1)
print(count,end=" ")
## 5일째 푸는데 못 하겠습니다 ㄹㅇ... 내 머리통 부수고 싶네..

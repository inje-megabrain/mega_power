num = list(map(str,input())) # baekjoon
alpha = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
print(num)
count = list()
answer = list()
for i in range(len(num)):
    for j in range(len(alpha)):
        if num[i] == alpha[j]:
            answer.append(num.index(alpha[j]))
            break
print(answer,end=" ")
#a b c d e f g h i j k l m n o p q r s t u v w x y z
#1 0     2         4 3     7 5
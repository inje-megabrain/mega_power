num = int(input())
correct = list()
for i in range(num):
    test = list(map(str,input()))
    for j in range(len(test)):
        correct.append(test[j])
print(correct,end=" ")
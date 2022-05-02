num = int(input())
if 1 <= num <= 9:
    for i in range(1,10):
        print("{0} * {1} = {2}".format(num,i,num*i))
langs = int(input())
for _ in range(langs):
    c = list(input().split(' '))
    voca_list = list(c[1])
    for i in voca_list:
        print(int(c[0])*i,end='')
    print() 
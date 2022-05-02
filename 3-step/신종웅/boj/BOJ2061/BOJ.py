k, l =map(int, input().split())
t = False

for i in range(2,l):
    if(k % i == 0):
        print("BAD", i)
        t = True
        break
        
if t == False:
    print("GOOD")
import sys
tmp=[]
 
for i in range(3):
    for j in range(int(sys.stdin.readline())):
        tmp.append( int(sys.stdin.readline()))
    if sum(tmp)>0: print("+")
    if sum(tmp) == 0: print("0")
    if sum(tmp) < 0: print("-")
    tmp=[]

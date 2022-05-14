#2609번 최대공약수 최소공배수 구하기
a,b = map(int,input().split())
def gcd(a,b):
    while b>0:
        a,b = b,a%b
    return a
def lcm(a,b):
    return a*b//gcd(a,b)
print(f'{gcd(a,b)}')
print(f'{lcm(a,b)}')
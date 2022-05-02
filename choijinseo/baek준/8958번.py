import sys
num = int(input())
count = 0
sum1 = 0 # 현재 라인의 총 합을 담는 변수

for i in range(num):
    # 카운트를 기록하는 리스트
    counts = list()
    test = list(map(str,(sys.stdin.readline())))
    for j in range(len(test)):
        if j > 0 : # 이전 위치를 검사하므로, j 는 시작 위치를 벗어나야한다
            # 현재보다 1개 더 이전에 문자를 검사한다
            if test[j-1] == 'O': # 0 이면 연속된 문자이므로, count를 증가 시킨다
                count += 1
                counts.append(count)
            # 그 외 모든 경우는 연속되지 않으므로, count를 0, 그리고 리스트에 추가
            else :
                count = 0
                counts.append(count)
            # 마지막 숫자 체크
            if j == (len(test)-1) :
                if test[j] == 'O':
                    count+=1
                    counts.append(count)

    sum1 = sum(counts) # counts 배열의 총합을 넘긴다
    print(sum1) # 결과값 출력
    # 다시 재활용하기 위해, 초기화한다.
    sum1 = 0
    count = 0
    counts.clear()
#print(correct,end=" ")
#print(sam,end=" ")
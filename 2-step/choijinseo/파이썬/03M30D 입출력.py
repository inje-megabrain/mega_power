# print("Python","Java", sep=",",end="?")
# print("무엇이 더 재미있을까요?")

# # sep = 중간에 구분을 할 수 있게 한다
# # end = 줄바꿈 없이 작동

# from os import sep
# import sys
# print("Python","Java",file=sys.stdout)
# print("Python","Java",file=sys.stderr)

# # stdout 표준출력으로 출력
# # stderr 표준에러로 출력

# scores = {"수학":0, "영어":50, "코딩":100}
# for subject, score in scores.items(): # subject : key / score : value
#     print(subject.ljust(8),str(score).rjust(4),sep=":")  

# # ljust(8) 8칸 띄우고 왼쪽 정렬
# # rjust(4) 4칸 띄우고 오른쪽 정렬

# # 은행 대기순번표
# # 001, 002, 003, ...
# for num in range(1,21):
#     print("대기번호 : "+str(num).zfill(3))
# # zfill(3) = 3개의 공간을 확보하고 빈 자리에는 0으로 채움

# answer = input("아무 값이나 입력하세요 : ") # 문자열을 입력 받음
# print("입력하신 값은" + answer + "입니다.")

# # 빈 자리는 빈 공간으로 두고, 오른쪽 정렬을 하되, 총 10자리 공간을 확보
# print("{0: >10}".format(500))
# # 양수일 땐 +로 표시, 음수일 땐 -로 표시
# print("{0: >+10}".format(500))
# print("{0: >+10}".format(-500))
# # 왼쪽 정렬하고, 빈칸으로 _로 채움
# print("{0:_<+10}".format(500))
# # 3자리 마다 콤마를 찍어주기
# print("{0:,}".format(100000000))
# # 3자리 마다 콤마를 찍어주기, + - 부호도 붙이기
# print("{0:+,}".format(100000000))
# # 3자리 마다 콤마를 찍어주기, 부호도 붙이고, 자릿수도 확보하기
# # 돈이 많으면 행복하니까 빈 자리는 ^로 채워주기
# print("{0:^<+30,}".format(10000000))
# # 소수점 출력
# print("{0:f}".format(5/3))
# # 소수점 특정 자리수까지만 표시 (소수점 3째 자리에서 반올림)
# print("{0:.2f}".format(5/3))

# score.txt = 파일, w = 읽기목적
# score_file = open("score.text","w",encoding="utf-8")
# print("수학 : 0",file=score_file)
# print("영어 : 50",file=score_file)
# score_file.close()

# score_file = open("score.text","a",encoding="utf-8")
# score_file.write("과학 : 80")
# score_file.write("\n코딩 : 100")
# score_file.close()

# score_file = open("score.text","r",encoding="utf-8")
# print(score_file.read())
# score_file.close()

# score_file = open("score.text","r",encoding="utf-8")
# print(score_file.readline()) # 줄별로 읽기, 한 줄 읽고 커서는 다음 줄로 이동
# print(score_file.readline())
# print(score_file.readline())
# print(score_file.readline())
# score_file.close()

# score_file = open("score.text","r",encoding="utf-8")
# while True:
#     line = score_file.readline()
#     if not line:
#         break
#     print(line)
# score_file.close()
# score_file = open("score.text","r",encoding="utf-8")
# lines = score_file.readlines() # list 형태로 저장
# for line in lines:
#     print(line,end="")
# score_file.close()
#import pickle # 프로그램 상에서 우리가 사용하고 있는 데이터를 파일 형태로 저장
# profile_file = open("profile.pickle","wb") # 쓰기목적 b = binary
# profile = {"이름":"박명수","나이":30,"취미":["축구","골프","코딩"]}
# print(profile)
# pickle.dump(profile, profile_file) # profile에 있는 정보를 file에 저장
# profile_file.close()
# import pickle
# profile_file = open("profile.pickle","rb")
# profile = pickle.load(profile_file) # file에 있는 정보를 profile에 불러오기
# print(profile)
# profile_file.close()

import pickle

with open("profile.pickle","rb") as profile_file:
    print(pickle.load(profile_file))

with open("study.txt","w",encoding="utf-8") as study_file:
    study_file.write("파이썬을 열심히 공부하고 있어요")

with open("study.txt","r",encoding="utf-8") as study_file:
    print(study_file.read())
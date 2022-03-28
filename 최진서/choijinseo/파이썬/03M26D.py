# def profile(name, age, main_lang):
#     print("이름 : {0}\t나이: {1}\t주 사용 언어: {2}"\
#         .format(name,age,main_lang))

# profile("유재석",20,"파이썬")
# profile("김태호",25,"자바")

# # 같은 학교 같은 학년 같은 반 같은 수업

# def profile(name, age=17, main_lang="파이썬"):
#     print("이름 : {0}\t나이: {1}\t주 사용 언어: {2}"\
#         .format(name,age,main_lang))

# profile("유재석")
# profile("김태호")
# def profile(name, age=17, main_lang="파이썬"):
#     print(name,age,main_lang)

# profile(name="유재석",main_lang="파이썬",age=20)
# profile(main_lang="자바",age = 21,name="김태호")
def profile(name,age,lang1,lang2,lang3,lang4,lang5):
    print("이름 : {0}\t나이 : {1}\t".format(name,age),end=" ")
    # end = " " 프린트문이 줄 바꿈을 하지 않고 종료
    print(lang1,lang2,lang3,lang4,lang5)

profile("유재석",20,"python","java","c","c++","c#")
profile("김태호",25,"kotlin","swift","","","")

# def profile(name,age,*language):
#     print("이름 : {0}\t나이 : {1}\t".format(name,age),end=" ")
#     for lang in language:
#         print(lang,end=" ")
#     print()

# profile("유재석",20,"python","java","c","c++","c#","javascript")
# profile("김태호",25,"kotlin","swift")

# gun = 10 # 지역변수 X 

# def checkpoint(soldiers): # 경계근무
#     #gun = 20 # 지역변수 O
#     global gun # 전역 공간에 있는 gun 사용
#     gun = gun - soldiers
#     print("[함수 내] 남은 총 : {0}".format(gun))

# def checkpoint_ret(gun,soldiers):
#     gun = gun - soldiers
#     print("[함수 내] 남은 총 : {0}".format(gun))
#     return gun

# print("전체 총 : {0}".format(gun))
# #checkpoint(2) # 2명이 경계 근무 나감
# gun = checkpoint_ret(gun,2)
# print("남은 총 : {0}".format(gun))
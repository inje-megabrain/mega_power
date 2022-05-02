import sys
import discord
from discord.ext import commands, tasks
import os
import time
import datetime
import requests
from bs4 import BeautifulSoup


app = commands.Bot(command_prefix='/')

@app.event
async def on_ready():
    print('Done')
    await app.change_presence(status=discord.Status.online, activity=None)
    학식크롤링.start()
    인제대크롤링.start()




@tasks.loop(seconds=60)
async def 학식크롤링():
    channel = app.get_channel(채널코드)
    try:
        if datetime.datetime.now().hour == 10 and datetime.datetime.now().minute == 0:
            인제대학교response = requests.get(
                "https://www.inje.ac.kr/kor/Template/Bsub_page.asp?Ltype=5&Ltype2=3&Ltype3=3&Tname=S_Food&Ldir=board/S_Food&Lpage=s_food_view&d1n=5&d2n=4&d3n=4&d4n=0")

            인제대학교response.encoding = 'utf-8'
            인제대학교html = 인제대학교response.text
            인제대학교soup = BeautifulSoup(인제대학교html, 'html.parser')
            인제대학교정보 = 인제대학교soup.select('tr')
            spell = ['A', 'B', 'C']
            t = ['월', '화', '수', '목', '금']
            n = time.localtime().tm_wday
            d = datetime.datetime.today()
            today = str(d.year) +'년 ' + str(d.month)+'월 ' + str(d.day) +'일 학식 정보입니다.'
            await channel.send(f':shallow_pan_of_food:{today}')
            for i, 정보 in enumerate(인제대학교정보[1:4]):
                코너, 판매시간, 월, 화, 수, 목, 금 = 정보.select('td')
                if(t[n] == '월'):
                    for br in 월.find_all("br"):
                        br.replace_with(" ")
                    await channel.send(
                        f'```{spell[i]}: {월.text}```\n')
                elif(t[n] == '화'):
                    for br in 화.find_all("br"):
                        br.replace_with(" ")
                    await channel.send(
                        f'```{spell[i]}: {화.text}```\n')
                elif (t[n] == '수'):
                    for br in 수.find_all("br"):
                        br.replace_with(" ")
                    await channel.send(
                        f'```{spell[i]}: {수.text}```\n')
                elif (t[n] == '목'):
                    for br in 목.find_all("br"):
                        br.replace_with(" ")
                    await channel.send(
                        f'```{spell[i]}: {목.text}```\n')
                elif (t[n] == '금'):
                    for br in 금.find_all("br"):
                        br.replace_with(" ")
                    await channel.send(
                        f'```{spell[i]}: {금.text}```\n')
                else:
                    print("주말")



    except Exception as e:
        await channel.send(e)
        sys.exit(0)

@tasks.loop(seconds=3600)
async def 인제대크롤링():
    channel = app.get_channel(채널코드)
    try:
        인제대학교response = requests.get(
            "https://www.inje.ac.kr/kor/Template/Bsub_page.asp?Ltype=5&Ltype2=0&Ltype3=0&Tname=S_News&Ldir=board/S_News&SearchText=&SearchKey=&d1n=5&d2n=1&d3n=2&d4n=0&Lpage=Tboard_L")

        인제대학교response.encoding = 'utf-8'
        인제대학교html = 인제대학교response.text
        인제대학교soup = BeautifulSoup(인제대학교html, 'html.parser')

        인제대학교정보 = 인제대학교soup.select('tr')
        현제목 = 인제대학교정보[1].select('td')[2].get_text().strip()
        with open(os.path.join("/home/whddnd0728/pythonBot", 'latest.txt'), 'r+') as f_read:
            before = f_read.readline()
            if before != 현제목:
                for 정보 in 인제대학교정보[1:8]:
                    분류, 번호, 제목, 작성자, 작성일, 조회 = 정보.select('td')
                    if (제목.text.strip() == before):
                        break

                    embed = discord.Embed(title=f'{제목.text.strip()})', description=f'분류: {분류.text}\n작성일:{작성일.text}\n[더 보기](https://www.inje.ac.kr/{제목.a["href"]})', color=0x6E17E3)
                    code_block = await channel.send(embed=embed)
            f_read.close()

        with open(os.path.join("/home/whddnd0728/pythonBot", 'latest.txt'), 'w+') as f_write:
            f_write.write(현제목)
            f_write.close()

    except Exception as e:
        await channel.send(e)

@app.command()
async def 봇종료(ctx):
    sys.exit(0)


@app.command()
async def 학식(ctx):
    try:
            인제대학교response = requests.get(
                "https://www.inje.ac.kr/kor/Template/Bsub_page.asp?Ltype=5&Ltype2=3&Ltype3=3&Tname=S_Food&Ldir=board/S_Food&Lpage=s_food_view&d1n=5&d2n=4&d3n=4&d4n=0")

            인제대학교response.encoding = 'utf-8'
            인제대학교html = 인제대학교response.text
            인제대학교soup = BeautifulSoup(인제대학교html, 'html.parser')
            인제대학교정보 = 인제대학교soup.select('tr')
            spell = ['A', 'B', 'C']
            t = ['월', '화', '수', '목', '금']
            n = time.localtime().tm_wday
            d = datetime.datetime.now()
            today = str(d.year) +'년 ' + str(d.month)+'월 ' + str(d.day) +'일 학식 정보입니다.'
            await ctx.send(f':shallow_pan_of_food: {today}')
            for i, 정보 in enumerate(인제대학교정보[1:4]):
                코너, 판매시간, 월, 화, 수, 목, 금 = 정보.select('td')
                if(t[n] == '월'):
                    for br in 월.find_all("br"):
                        br.replace_with(" ")
                    await ctx.send(
                        f'```{spell[i]}: {월.text}```\n')
                elif(t[n] == '화'):
                    for br in 화.find_all("br"):
                        br.replace_with(" ")
                    await ctx.send(
                        f'```{spell[i]}: {화.text}```\n')
                elif (t[n] == '수'):
                    for br in 수.find_all("br"):
                        br.replace_with(" ")
                    await ctx.send(
                        f'```{spell[i]}: {수.text}```\n')
                elif (t[n] == '목'):
                    for br in 목.find_all("br"):
                        br.replace_with(" ")
                    await ctx.send(
                        f'```{spell[i]}: {목.text}```\n')
                elif (t[n] == '금'):
                    for br in 금.find_all("br"):
                        br.replace_with(" ")
                    await ctx.send(
                        f'```{spell[i]}: {금.text}```\n')
                else:
                    await ctx.send("학식 안하는 요일")



    except Exception as e:
        await ctx.send(e)



app.run('봇 토큰 자리')  # 개인 디스코드 봇 토큰 자리

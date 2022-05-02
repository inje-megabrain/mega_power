import discord
from discord.ext import commands, tasks
import os
import requests
import time
import re
import datetime
from bs4 import BeautifulSoup


app = commands.Bot(command_prefix='/')

cogs_path = 'Cogs'
abs_cogs_path = os.path.join(os.path.abspath(os.path.dirname("/app/Cogs")),
                             cogs_path)

for ext in os.listdir(abs_cogs_path):
    if ext.endswith(".py"):
        app.load_extension(f"Cogs.{ext.split('.')[0]}")



@app.event
async def on_ready():
    print('Done')
    await app.change_presence(status=discord.Status.online, activity=None)
    인제대크롤링.start()
    학식크롤링.start()


#tasks List
#학교 학식 크롤링
@tasks.loop(seconds=60)
async def 학식크롤링():
    channel_food = app.get_channel()
    channel_weather = app.get_channel()
    try:
        if datetime.datetime.now().hour == 9 and datetime.datetime.now().minute == 0:
            인제대학교response = requests.get(
                "https://www.inje.ac.kr/kor/Template/Bsub_page.asp?Ltype=5&Ltype2=3&Ltype3=3&Tname=S_Food&Ldir=board/S_Food&Lpage=s_food_view&d1n=5&d2n=4&d3n=4&d4n=0")

            인제대학교response.encoding = 'utf-8'
            인제대학교html = 인제대학교response.text
            인제대학교soup = BeautifulSoup(인제대학교html, 'html.parser')
            인제대학교정보 = 인제대학교soup.select('tr')
            weatherUrl = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=" + "어방동 날씨"
            날씨response = requests.get(weatherUrl)
            날씨response.encoding = 'utf-8'
            날씨html = 날씨response.text
            날씨soup = BeautifulSoup(날씨html, 'html.parser')
            최저기온 = re.findall("\d+",(날씨soup.select('.week_item.today'))[0].select('.lowest')[0].text)[0]
            최고기온 = re.findall("\d+",(날씨soup.select('.week_item.today'))[0].select('.highest')[0].text)[0]
            오늘날씨 = 날씨soup.select('span.weather')[0].text
            미세먼지 = 날씨soup.select('.item_today > a > span')[0].text
            초미세먼지 = 날씨soup.select('.item_today > a > span')[1].text
            강수확률 = 날씨soup.select('dd.desc')[0].text
            습도 = 날씨soup.select('dd.desc')[1].text

            spell = ['A', 'B', 'C']
            t = ['월', '화', '수', '목', '금', '토', '일']
            n = time.localtime().tm_wday
            d = datetime.datetime.today()
            if (4 >= n >= 0):
                today = '☀️좋은 아침 입니다! ' + str(d.year) + '년 ' + str(d.month) + '월 ' + str(d.day) + '일 학식입니다.'
                await channel_food.send(f'{today}')
                for i, 정보 in enumerate(인제대학교정보[1:4]):
                    코너, 판매시간, 월, 화, 수, 목, 금 = 정보.select('td')
                    if (t[n] == '월'):
                        for br in 월.find_all("br"):
                            br.replace_with(" ")
                        await channel_food.send(
                            f'```{spell[i]}: {월.text}```\n')
                    elif (t[n] == '화'):
                        for br in 화.find_all("br"):
                            br.replace_with(" ")
                        await channel_food.send(
                            f'```{spell[i]}: {화.text}```\n')
                    elif (t[n] == '수'):
                        for br in 수.find_all("br"):
                            br.replace_with(" ")
                        await channel_food.send(
                            f'```{spell[i]}: {수.text}```\n')
                    elif (t[n] == '목'):
                        for br in 목.find_all("br"):
                            br.replace_with(" ")
                        await channel_food.send(
                            f'```{spell[i]}: {목.text}```\n')
                    elif (t[n] == '금'):
                        for br in 금.find_all("br"):
                            br.replace_with(" ")
                        await channel_food.send(
                            f'```{spell[i]}: {금.text}```\n')
                    else:
                        print("주말 9시입니다 (학식크롤러)")

            d = datetime.datetime.now()
            today = str(d.year) + '년 ' + str(d.month) + '월 ' + str(d.day) + f'일 김해어방동 날씨 정보입니다.'
            embed = discord.Embed(title=f':sunny:  어방동 날씨',
                                  description=f"{today}",
                                  color=0xffff00)
            embed.add_field(name="어방동 날씨", value=f"{오늘날씨}", inline=False)
            embed.add_field(name="최저 기온", value=f"{최저기온}°C", inline=True)
            embed.add_field(name="최고 기온", value=f"{최고기온}°C", inline=True)
            embed.add_field(name="미세먼지", value=f"{미세먼지}", inline=True)
            embed.add_field(name="초미세먼지", value=f"{초미세먼지}", inline=True)
            embed.add_field(name="강수 확률", value=f"{강수확률}", inline=True)
            embed.add_field(name="습도", value=f"{습도}", inline=True)

            await channel_weather.send(embed=embed)

    except Exception as e:
        await channel_food.send(e)


#인제대 크롤링 task
@tasks.loop(seconds=2000)
async def 인제대크롤링():
    channel1 = app.get_channel()
    channel2 = app.get_channel()
    try:
        print("크롤러가동")
        인제대학교response = requests.get(
            "https://www.inje.ac.kr/kor/Template/Bsub_page.asp?Ltype=5&Ltype2=0&Ltype3=0&Tname=S_News&Ldir=board/S_News&SearchText=&SearchKey=&d1n=5&d2n=1&d3n=2&d4n=0&Lpage=Tboard_L")

        인제대학교response.encoding = 'utf-8'
        인제대학교html = 인제대학교response.text
        인제대학교soup = BeautifulSoup(인제대학교html, 'html.parser')

        인제대학교정보 = 인제대학교soup.select('tr')
        현제목 = 인제대학교정보[1].select('td')[2].get_text().strip()
        with open(os.path.join("/app", 'latest.txt'), 'r+') as f_read:
            before = f_read.readline()
            if before != 현제목:
                for 정보 in 인제대학교정보[1:8]:
                    분류, 번호, 제목, 작성자, 작성일, 조회 = 정보.select('td')
                    if (제목.text.strip() == before):
                        break

                    embed = discord.Embed(title=f'{제목.text.strip()}',
                                          description=f'분류: {분류.text}\n작성일:{작성일.text}\n[더 보기](https://www.inje.ac.kr/{제목.a["href"]})',
                                          color=0x6E17E3)
                    await channel1.send(embed=embed)
                    await channel2.send(embed=embed)
            f_read.close()

        with open(os.path.join("/app", 'latest.txt'), 'w+') as f_write:
            f_write.write(현제목)
            f_write.close()

    except Exception as e:
        await channel1.send(e)









app.run('')  # 개인 디스코드 봇 토큰 자리

import sys
import discord
from discord.ext import commands
import time
import datetime
import requests
from bs4 import BeautifulSoup


class Cafeteria(commands.Cog):

    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def 학식(self, ctx, args=None):
        try:
            인제대학교response = requests.get(
                "https://www.inje.ac.kr/kor/Template/Bsub_page.asp?Ltype=5&Ltype2=3&Ltype3=3&Tname=S_Food&Ldir=board/S_Food&Lpage=s_food_view&d1n=5&d2n=4&d3n=4&d4n=0")
            인제대학교response.encoding = 'utf-8'
            인제대학교html = 인제대학교response.text
            인제대학교soup = BeautifulSoup(인제대학교html, 'html.parser')
            인제대학교정보 = 인제대학교soup.select('tr')
            spell = ['A', 'B', 'C']
            t = ['월', '화', '수', '목', '금', '토', '일']
            n = time.localtime().tm_wday
            d = datetime.datetime.now()
            if args == None:
                today = str(d.year) + '년 ' + str(d.month) + '월 ' + str(d.day) + '일 학식 정보입니다.'
                await ctx.send(f':shallow_pan_of_food: {today}')
                for i, 정보 in enumerate(인제대학교정보[1:4]):
                    코너, 판매시간, 월, 화, 수, 목, 금 = 정보.select('td')
                    if (t[n] == '월'):
                        for br in 월.find_all("br"):
                            br.replace_with(" ")
                        await ctx.send(
                            f'```{spell[i]}: {월.text}```\n')
                    elif (t[n] == '화'):
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
                        await ctx.send("학식 안하는 요일인데요 ㅠㅠ")
                        break

            elif args == "어제":
                yesterday = '어제 기준 학식 정보입니다.'
                await ctx.send(f':shallow_pan_of_food: {yesterday}')
                for i, 정보 in enumerate(인제대학교정보[1:4]):
                    코너, 판매시간, 월, 화, 수, 목, 금 = 정보.select('td')
                    if (t[n] == '화'):
                        for br in 월.find_all("br"):
                            br.replace_with(" ")
                        await ctx.send(
                            f'```{spell[i]}: {월.text}```\n')
                    elif (t[n] == '수'):
                        for br in 화.find_all("br"):
                            br.replace_with(" ")
                        await ctx.send(
                            f'```{spell[i]}: {화.text}```\n')
                    elif (t[n] == '목'):
                        for br in 수.find_all("br"):
                            br.replace_with(" ")
                        await ctx.send(
                            f'```{spell[i]}: {수.text}```\n')
                    elif (t[n] == '금'):
                        for br in 목.find_all("br"):
                            br.replace_with(" ")
                        await ctx.send(
                            f'```{spell[i]}: {목.text}```\n')
                    elif (t[n] == '토'):
                        for br in 금.find_all("br"):
                            br.replace_with(" ")
                        await ctx.send(
                            f'```{spell[i]}: {금.text}```\n')
                    else:
                        await ctx.send("학식 안하는 요일인데요 ㅠㅠ")
                        break
            elif args == "오늘":
                today = '오늘 기준 학식 정보입니다.'
                await ctx.send(f':shallow_pan_of_food: {today}')
                for i, 정보 in enumerate(인제대학교정보[1:4]):
                    코너, 판매시간, 월, 화, 수, 목, 금 = 정보.select('td')
                    if (t[n] == '월'):
                        for br in 월.find_all("br"):
                            br.replace_with(" ")
                        await ctx.send(
                            f'```{spell[i]}: {월.text}```\n')
                    elif (t[n] == '화'):
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
                        await ctx.send("학식 안하는 요일인데요 ㅠㅠ")
                        break
            elif args == "내일":
                tommorow = '내일 기준 학식 정보입니다.'
                await ctx.send(f':shallow_pan_of_food: {tommorow}')
                for i, 정보 in enumerate(인제대학교정보[1:4]):
                    코너, 판매시간, 월, 화, 수, 목, 금 = 정보.select('td')
                    if (t[n] == '일'):
                        await ctx.send(
                            '아직 등록되지 않은 정보입니다.')
                    elif (t[n] == '월'):
                        for br in 화.find_all("br"):
                            br.replace_with(" ")
                        await ctx.send(
                            f'```{spell[i]}: {화.text}```\n')
                    elif (t[n] == '화'):
                        for br in 수.find_all("br"):
                            br.replace_with(" ")
                        await ctx.send(
                            f'```{spell[i]}: {수.text}```\n')
                    elif (t[n] == '수'):
                        for br in 목.find_all("br"):
                            br.replace_with(" ")
                        await ctx.send(
                            f'```{spell[i]}: {목.text}```\n')
                    elif (t[n] == '목'):
                        for br in 금.find_all("br"):
                            br.replace_with(" ")
                        await ctx.send(
                            f'```{spell[i]}: {금.text}```\n')
                    else:
                        await ctx.send("학식 안하는 요일인데요 ㅠㅠ")
                        break

            else:
                await ctx.send("⚠️아직 지원 하지 않는 키워드입니다!")





        except Exception as e:
            await ctx.send(e)


def setup(bot):
    bot.add_cog(Cafeteria(bot))

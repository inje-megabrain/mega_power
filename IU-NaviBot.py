import discord
from discord.ext import commands
import requests
from bs4 import BeautifulSoup
 
app = commands.Bot(command_prefix='/')
 
@app.event
async def on_ready():
    print('Done')
    await app.change_presence(status=discord.Status.online, activity=None)

@app.command()
async def 인제대(ctx):
    try:
        인제대학교response = requests.get("https://edu.inje.ac.kr/allusers/preprogramlist.aspx?rbtnVal=%")

        인제대학교response.encoding = 'utf-8'
        인제대학교html = 인제대학교response.text
        인제대학교soup = BeautifulSoup(인제대학교html, 'html.parser')

        인제대학교정보 = 인제대학교soup.select('ul.tab-list > li')
        
        for 정보 in 인제대학교정보[1:100]:
            디데이, 사진, 기관, 카테고리, 제목, 작성일 = 정보.select('a > span')
            await ctx.send(f'```기관 : {기관.text.strip()} 공지\n제목 : {제목.text.strip()}\n날짜 : {작성일.text.strip()}```\n마감일 : {디데이.text.strip()}\n\n\n')
            
    except:
        await ctx.send('인제대학교 IU-Navi 오류 발생')
    
app.run('토큰 가리기')
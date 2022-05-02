import discord
from discord.ext import commands
import datetime
import requests
import re
from bs4 import BeautifulSoup


class Weather(commands.Cog):

    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def 날씨(self, ctx, arg="어방동"):
        try:
            weatherUrl = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=" + arg + "날씨"
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


            d = datetime.datetime.now()
            today = str(d.year) + '년 ' + str(d.month) + '월 ' + str(d.day) + f'일 날씨 정보입니다.'
            embed = discord.Embed(title=f':sunny:  {arg} 날씨',
                                  description=f"{today}",
                                  color=0xffff00)
            embed.add_field(name=f"{arg} 날씨", value=f"{오늘날씨}", inline=False)
            embed.add_field(name="최저 기온", value=f"{최저기온}°C", inline=True)
            embed.add_field(name="최고 기온", value=f"{최고기온}°C", inline=True)
            embed.add_field(name="미세먼지", value=f"{미세먼지}", inline=True)
            embed.add_field(name="초미세먼지", value=f"{초미세먼지}", inline=True)
            embed.add_field(name="강수 확률", value=f"{강수확률}", inline=True)
            embed.add_field(name="습도", value=f"{습도}", inline=True)

            await ctx.send(embed=embed)

        except Exception as e:
            if str(e) == "list index out of range":
                await ctx.send("말씀 하신 곳이 어딘지 모르겠어요 ㅠㅠ")
            else:
                await ctx.send("오류 발생")
            print(e)

def setup(bot):
    bot.add_cog(Weather(bot))



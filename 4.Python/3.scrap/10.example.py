# https://www.pythonscraping.com/pages/page3.html

# 미션1. 해당 페이지를 요청한다
# 미션2. 해당 페이지를 파싱해서 상품명과 가격을 출력한다.

import requests
from bs4 import BeautifulSoup

url = "https://www.pythonscraping.com/pages/page3.html"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

products = soup.select('tr')

name1 = products[1].select_one('td:nth-of-type(1)').text.strip()
price1 = products[1].select_one('td:nth-of-type(3)').text.strip()

name2 = products[2].select_one('td:nth-of-type(1)').text.strip()
price2 = products[2].select_one('td:nth-of-type(3)').text.strip()

name3 = products[3].select_one('td:nth-of-type(1)').text.strip()
price3 = products[3].select_one('td:nth-of-type(3)').text.strip()

name4 = products[4].select_one('td:nth-of-type(1)').text.strip()
price4 = products[4].select_one('td:nth-of-type(3)').text.strip()

name5 = products[5].select_one('td:nth-of-type(1)').text.strip()
price5 = products[5].select_one('td:nth-of-type(3)').text.strip()

print("상품명:", name1, "| 가격:", price1)
print("상품명:", name2, "| 가격:", price2)
print("상품명:", name3, "| 가격:", price3)
print("상품명:", name4, "| 가격:", price4)
print("상품명:", name5, "| 가격:", price5)


# # https://www.pythonscraping.com/pages/page3.html

# # 미션1. 해당 페이지에 요청한다
# # 미션2. 해당 페이지를 파싱해서 상품명과 가격을 출력한다.

# import requests
# from bs4 import BeautifulSoup

# response = requests.get('https://www.pythonscraping.com/pages/page3.html')
# # print(response.text)

# soup = BeautifulSoup(response.text, 'html.parser')
# # print(soup)
# gifts = soup.select('#giftList > tr')
# print(len(gifts))

# for g in gifts[1:]: # 첫번째 빈 th를 제외하고 나머지...
#     tds = g.select('td')
#     title = tds[0].text.strip()
#     price = tds[2].text.strip()
        
#     print(f"상품명: {title:30} 가격: {price:20}")
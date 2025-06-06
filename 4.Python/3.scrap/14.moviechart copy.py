import requests
from bs4 import BeautifulSoup
import csv
import json

URL = 'https://www.moviechart.co.kr/rank/realtime/index/image'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
}

response = requests.get(URL, headers=headers)
response.raise_for_status()
soup = BeautifulSoup(response.text, 'html.parser')

movies = []
movies_json = []

movie_cards = soup.select('div.movieBox li.movieBox-item')
print('무비카드 개수:', len(movie_cards))

for card in movie_cards:
    title_tag = card.select_one('div.movie-title h3')
    img_tag = card.select_one('img')
    link_tag = card.select_one('a')

    title = title_tag.text.strip() if title_tag else '제목없음'
    image_url = img_tag['src'] if img_tag and img_tag.has_attr('src') else '이미지 없음'
    detail_link = 'https://www.moviechart.co.kr' + link_tag['href'] if link_tag else '링크없음'

    print(f"제목: {title}, 이미지: {image_url}, 상세페이지: {detail_link}")

    movies.append([title, image_url, detail_link])
    movies_json.append({
        "title": title,
        "image_url": image_url,
        "detail_link": detail_link
    })

csv_filename = 'movie_chart.csv'
with open(csv_filename, 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['제목', '이미지URL', '상세링크'])
    writer.writerows(movies)

print(f"CSV 저장 완료: {csv_filename}")

json_filename = 'movie_chart.json'
with open(json_filename, 'w', encoding='utf-8') as f:
    json.dump(movies_json, f, ensure_ascii=False, indent=4)

print(f"JSON 저장 완료: {json_filename}")

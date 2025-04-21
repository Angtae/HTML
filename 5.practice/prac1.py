letters = 'python'
print (letters[0], letters[2])

license_plate = "24가 2210"
print(license_plate[-4:])

string = "홀짝홀짝홀짝"
print(string[::2])

string = "PYTHON"
print(string[::-1])

phone_number = "010-1111-2222"
phone_number1 = phone_number.replace("-", " ")
print(phone_number1)

phone_number = "010-1111-2222"
phone_number1 = phone_number.replace('-', '')
print(phone_number1)

url = "http://sharebook.kr"
url_split = url.split('.')
print(url_split[-1])

# lang = 'python'
# lang[0] = 'p'
# print(lang)

string = 'abcd'
string.replace('b', 'B')
print(string)

a = "3"
b = "4"
print(a + b)

print("Hi" * 3)

print("-" * 80)

t1 = "python"
t2 = "java"
t3 = t1 + ' ' + t2 + ' '
print (t3 * 4)

name1 = "최수빈"
age1 = 10
name2 = "안태현"
age2 = 12
print("이름 : %s 나이: %d" % (name1, age1))
print("이름 : %s 나이: %d" % (name2, age2))

name1 = "최수빈"
age1 = 10
name2 = "안태현"
age2 = 12
print("이름 : {}, 나이: {}".format(name1, age1))
print("이름 : {}, 나이: {}".format(name2, age2))

name1 = "최수빈"
age1 = 10
name2 = "안태현"
age2 = 12
print(f"이름: {name1} 나이: {age1}")
print(f"이름: {name2} 나이: {age2}")

분기 = "2020/03(E) (IFRS연결)"
print(분기[:7])

data = "   삼성전자   "
data1 = data.strip()
print(data1)

ticker = "btc_krw"
ticker1 = ticker.upper()
print(ticker1)

ticker = "BTW_KRW"
ticker1 = ticker.lower()
print(ticker1)

a = "hello"
a = a.capitalize()

file_name = "보고서.xlsx"
file_name.endswith("xlsx")

file_name = "2020_보고서.xlsx"
file_name.startswith("2020")

a = "hello world"
a.split()

ticker = "btc_krw"
ticker.split("_")
print(ticker)

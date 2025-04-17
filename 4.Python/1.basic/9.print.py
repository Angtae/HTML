name = 'John'

#1. 기본 프린트 구현현
print("Hello",name)

print("Hello", name, "!")

print("Hello," + name + "!")

#2. f-문자열 (f-string) 표기법 <-- 이거 써라 
print(f"Hello, {name}!")

name = 'James'
age = 30

#3. 문자열 포멧팅팅
print("안녕하세요 {}님, 당신은 {}살 이군요." .format(name,age))

#4. % 연산자 사용
print('--- 4 ---')
print("Hello, %s! % name")

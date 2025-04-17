my_list = [1, 2, 3, 4, 5]

print(my_list)
print(len(my_list))

print(my_list[0])
print(my_list[4])
print(my_list[-1])

# 배열의 인덱스 범위는 -len 부터 len-1 까지 가능함

# 슬라이싱
print("[1:3]:", my_list[1:3]) # 인덱스 1은 포함하고 인덱스 3은 포함하지 않는다
print("[:3]:", my_list[:3])

# 리스트 추가
my_list.append(6)
print(my_list)

my_list.insert(2,99) #2번째 위치...
print(my_list)

my_list.remove(99) #특정 요소를 삭제
print(my_list)

popped_element = my_list.pop(3) # 3번째 인덱스의 요소를 빼내라
print("뽑아낸것:", popped_element)
print("남은 리스트:", my_list)

# 리스트 컴프리헨션
numbers = [x for x in range(10)] # 맨 앞의 변수(가칭:선택자)로 이 리스트의 요소를 채울거다
                                 # 뒤에가 x 가 만들어지는 조건...
print(numbers)

numbers = [x for x in range(1,5)]
print(numbers)

numbers = [x**2 for x in range(10)]
print(numbers)

numbers = [x for x in range(10) if x % 2 == 0] # 짝수만 남기기..
print(numbers)

numbers = [x for x in range(10) if x % 2 == 1] # 홀수만 남기기..
print(numbers)
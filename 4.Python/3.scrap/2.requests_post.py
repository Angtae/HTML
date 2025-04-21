import requests

url = 'https://jsonplaceholder.typicode.com/users'

#JS에서 불렀던 객체를, python에서는 Dict라고 부름름
new_post = {
    'userId': 1,
    "title": "hello",
    "body": "world"
}

response = requests.post(url, json=new_post)
print(response.json())

print("--- 수정 ---")

post_id = 1

updated_post = {
    'userId': 1,
    "title": "hello again",
    "body": "new world"
}

response = requests.put(f"{url}/{post_id}", json=updated_post)
print(response.json())

print("--- PATCH ---") # put 은 전체수정 , patch 는 부분수정
patch_data = {
    "title": "partial title update"
}

response = requests.patch(f"{url}/{post_id}", json=patch_data)
print(response.json())

print("--- DELETE ---")
response = requests.delete(f"{url}/{post_id}")
print(response.status_code)
print(response.json())


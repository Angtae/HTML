import os

# 현재 로그인한 사용자 계정 출력
print(os.getlogin())
current_dir = os.getcwd()
print("현재 작업 디렉토리:". current_dir)

new_dir = "new_directory다"
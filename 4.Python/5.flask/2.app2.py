from flask import Flask, request, jsonify

app = Flask(__name__)

users = [
    {'id': 1, 'name': 'Alice', 'age': 25, 'phone': '123-456-788'},
    {'id': 2, 'name': 'Bob', 'age': 30, 'phone': '222-456-719'},
    {'id': 3, 'name': 'Charlie', 'age': 35, 'phone': '193-436-719'},
    {'id': 4, 'name': 'Alice', 'age': 35, 'phone': '183-476-589'},
]

@app.route('/')
def main():
    return "메인"

@app.route('/users')
def get_users():
    return jsonify(users)

@app.route('/users/<int:user_id>')
def get_user_by_id(user_id):
    user = None
    for u in users:
        if u['id'] == user_id:
            user = u
            break  # 찾았으면 중단하는 게 효율적!

    # 위에 있는 5줄 코드를 한줄로 표현하기기
    # user = ((user for user in users if user['id'] == user_id), None)

    if user is not None:
        return jsonify(user)
    else:
        return jsonify({'error': 'User not found'}), 404

if __name__ == "__main__":
    app.run(debug=True)

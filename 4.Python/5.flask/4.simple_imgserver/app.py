from flask import Flask, jsonify
from flask_cors import CORS # pip install flask_cors
import random

app = Flask(__name__)
CORS(app) #누구든지 나의 서버로 정보를 보낼 수 있다.
cat_images = {
    "cat1.jpg",
    "cat2.jpg",
    "cat3.jpg",
}

@app.route('/random-cat')
def random_cat():
    random_image = random.choice(cat_images)
    # image_url = 'static/' + random_image
    image_url = url_for('static', filename=f'images/{random_image}', _external=True)
    print(image_url)

    return jsonify({"url": image_url})

if __name__ == "__main__":
    app.run(debug=True)
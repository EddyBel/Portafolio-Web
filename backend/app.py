from flask import Flask, jsonify
from flask_cors import CORS
from app.routes.about import about_pages

app = Flask(__name__)
CORS(app)

app.register_blueprint(about_pages, url_prefix="/about")


@app.route("/", methods=['GET'])
def getIndex():
    return jsonify({"msg": "Hello World"})


if __name__ == "__main__":
    app.run(port=3000, debug=True)

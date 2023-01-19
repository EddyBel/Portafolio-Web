from flask import Blueprint, jsonify

about_pages = Blueprint("about_pages", __name__)


@about_pages.route("/", methods=['GET'])
def getAboutInfo():
    response = {
        "msg": "About Sussefull",
        "name": "Eduardo Antonio Rangel Serrano",
        "age": 20,

    }
    return jsonify(response)

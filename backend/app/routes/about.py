from flask import Blueprint, jsonify
from util.files import read__file__json

about_pages = Blueprint("about_pages", __name__)


@about_pages.route("/", methods=['GET'])
def getAboutInfo():
    response = {
        "msg": "successful",
        "name": "Eduardo Antonio Rangel Serrano",
        "age": 20,

    }
    return jsonify(response)

@about_pages.route('/', methods=['GET'])
def getAboutDescription () :
    response = {}
    return jsonify(response)
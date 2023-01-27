import json


def read__file__json(name__file: str) -> str:
    '''
        Function that reads a json file and returns its content as a dictionary.

        Params:
            - (str): name__file -> Name of the file to be used.

        Returns:
            - (str): Contents of the json file.
    '''
    response: str
    with open(name__file) as file:
        response = json.load(file)

    return response

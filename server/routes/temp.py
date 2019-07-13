from flask_restful import Resource

class Temp(Resource):
    def get(self):
        return {'data': [0, 1, 2, 3, 4, 5]}

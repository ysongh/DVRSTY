from flask import Flask
from flask_restful import Resource, Api
from routes.temp import Temp
from routes.cotwo import COTwo
from routes.dp import Dp
from routes.humidity import Humidity

app = Flask(__name__)
api = Api(app)

api.add_resource(Temp, '/model/temp')
api.add_resource(COTwo, '/model/co2')
api.add_resource(Dp, '/model/dp')
api.add_resource(Humidity, '/model/humidity')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

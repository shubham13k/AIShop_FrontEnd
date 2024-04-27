from flask import Flask, jsonify, request, session
from flask_pymongo import PyMongo
import jwt
from flask_cors import CORS, cross_origin
from flask_jwt_extended import JWTManager

app = Flask(__name__)
CORS(app)

app.config['MONGO_URI'] = 'mongodb+srv://shubham123:shubham123@cluster0.eacy3zq.mongodb.net/EWebsite?retryWrites=true&w=majority&appName=Cluster0'
app.config['JWT_SECRET_KEY'] = 'this is secret key'
app.secret_key = 'secret key'

jwt = JWTManager(app)
mongo = PyMongo(app)

@app.route("/")
def hello_world():
    return 'Hello World!!!'

@app.route("/adminRegister", methods=['POST'])
def adminRegister():
    allusers = mongo.db.admins
    
    user= allusers.find_one({'email':request.json['email']})
    companyName = allusers.find_one({'companyName': request.json['companyName']})
    phone = allusers.find_one({'phone': request.json['phone']})

    if user: 
        return jsonify(message = 'Email already exists'),401
    if companyName: 
        return jsonify(message = 'companyName already exists'),401
    if phone: 
        return jsonify(message = 'Phone already exists'),401
    if request.json['password'] != request.json['cpassword']:
        return jsonify(message="Password is not Matching!!!"),401
    
    access_token = create_access_token(identify= request.json['email'])

    allusers.insert({
        'email': request.json['email'],
        'companyName': request.json['companyName'],
        'phone': request.json['phone'],
        'tokens' :[
            {
                'token': str(access_token)
            }
        ]
    })

    return jsonify(token= str(access_token))

@app.route("/adminLogin",methods=["POST"])
def adminLogin():
    allusers = mongo.db.admins
    user = allusers.find_one({'email': request.json['email']})

    if user:

        access_token =create_access_token(identify=request.json['email'])
        user['tokens'].append({'token': str(access_token)})
        allusers.save(user)
        return jsonify(token=str(access_token)),201

@app.route("/logoutAdmin",methods=['POST'])
def logoutAdmin():
    allusers = mongo.db.admins
    user = allusers.find_one({'tokens.token': request.json['auth']})

    if user:
        user['tokens']=[]
        allusers.save(user)
        return jsonify(message='Logout Successfully'),201
    return jsonify(message='Logout Failed'),401

if __name__ == '__main__':
    app.run(debug=True)

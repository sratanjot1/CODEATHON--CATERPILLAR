from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from bson import ObjectId

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb+srv://vansh15926:BocaWRY0bK0MAuXj@catbackend.ilsovmt.mongodb.net/?retryWrites=true&w=majority&appName=catbackend"
mongo = PyMongo(app)

# User Schema
def create_user(username, password, email):
    user = {
        "username": username,
        "password": generate_password_hash(password),
        "email": email,
        "created_at": datetime.utcnow()
    }
    return mongo.db.users.insert_one(user)

# Inspection Schema
def create_inspection(user_id, inspection_data):
    inspection = {
        "user_id": ObjectId(user_id),
        "truck_serial_number": inspection_data["truck_serial_number"],
        "truck_model": inspection_data["truck_model"],
        "inspection_id": inspection_data["inspection_id"],
        "inspection_name": inspection_data["inspection_name"],
        "inspection_employee_id": inspection_data["inspection_employee_id"],
        "date_time": datetime.utcnow(),
        "location": inspection_data["location"],
        "geo_coordinates": {
            "latitude": inspection_data["latitude"],
            "longitude": inspection_data["longitude"]
        },
        "service_meter_hours": inspection_data["service_meter_hours"],
        "inspector_signature": inspection_data["inspector_signature"],
        "customer_name": inspection_data["customer_name"],
        "customer_id": inspection_data["customer_id"],
        "created_at": datetime.utcnow()
    }
    return mongo.db.inspections.insert_one(inspection)

@app.route('/signup', methods=['POST'])
def register_user():
    try:
        data = request.get_json()
        username = data.get("InspectionEmail")
        password = data.get("password")
        email = data.get("email")
        create_user(username, password, email)
        
        return jsonify({"message": "User registered successfully"}), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/login', methods=['POST'])
def login_user():
    try:
        data = request.get_json()
        username = data.get("InspectionEmail")
        password = data.get("password")
        
        # Find the user by username
        user = mongo.db.users.find_one({"username": username})
        
        if user and check_password_hash(user['password'], password):
            return jsonify({"message": "Login successful", "user_id": str(user['_id'])}), 200
        else:
            return jsonify({"error": "Invalid username or password"}), 401
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/create_inspection', methods=['POST'])
def new_inspection():
    try:
        data = request.get_json()
        user_id = data.get("user_id")  # Ensure user_id is provided in the request
        inspection_data = {
            "truck_serial_number": data.get("truck_serial_number"),
            "truck_model": data.get("truck_model"),
            "inspection_id": data.get("inspection_id"),
            "inspection_name": data.get("inspection_name"),
            "inspection_employee_id": data.get("inspection_employee_id"),
            "location": data.get("location"),
            "geo_coordinates": {
                "latitude": data.get("latitude"),
                "longitude": data.get("longitude")
            },
            "service_meter_hours": data.get("service_meter_hours"),
            "inspector_signature": data.get("inspector_signature"),
            "customer_name": data.get("customer_name"),
            "customer_id": data.get("customer_id")
        }
        create_inspection(user_id, inspection_data)
        return jsonify({"message": "Inspection created successfully"}), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=3030)

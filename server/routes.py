from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
import joblib
import numpy as np
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='../frontend/build')
CORS(app)  # Enable CORS for all routes

app.config["MONGO_URI"] = "mongodb+srv://CAA:CAA@cluster0.ysjuzpr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongodb_client = PyMongo(app)
db = mongodb_client.db

# Import your other routes or functions
from credit_bot_flask import chat
from credit_simulator import simulate
from Credit_Score import predict_credit_score
from Loan_Prediction import predict
from alert import customer_dashboard,admin_dashboard
from Loan_Recommender import get_loan_rates

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    # send_static_file will guess the correct MIME type
    return send_from_directory(app.static_folder, path)

@app.route('/chat', methods=['POST'])
def chat_route():
    return chat()

@app.route('/simulate', methods=['POST'])
def simulate_route():
    return simulate()

@app.route('/creditScorePredictor', methods=['POST'])
def predict_route():
    return predict_credit_score()

@app.route('/loanEligibility', methods=['POST'])
def loanPredict_route():
    return predict()

@app.route('/customer', methods=['POST'])
def customer_details():
    return customer_dashboard()

@app.route('/admin', methods=['POST'])
def admin_panel():
    return admin_dashboard()

@app.route('/loan_recommend', methods=['POST'])
def loan_recommender():
    return get_loan_rates()

if __name__ == "__main__":
    app.run(debug=True, port=9000)

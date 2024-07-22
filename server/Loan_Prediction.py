from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the model and scaler
model = joblib.load('loan_predict.joblib')


def predict():
    
    data = request.get_json()
    
    features = np.array([
        data['dependants'],
        data['income'],
        data['loanAmount'],
        data['loanTerm'],
        data['cibilScore'],
        data['education'],
        data['selfEmployed']
    ]).reshape(1, -1)


    prediction = model.predict(features)

    return jsonify({'prediction': int(prediction[0])})

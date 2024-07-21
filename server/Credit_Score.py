from flask import Flask, render_template, jsonify, request
import joblib
import numpy as np
from flask_cors import CORS


model = joblib.load('model_3.joblib')
scaler = joblib.load('scaler.joblib')

app = Flask(__name__)
CORS(app)

def predict_credit_score():
    
    data = request.get_json()
    input_data = (np.array([data['delinq_2yrs'], data['pub_rec'], data['revol_bal'], data['revol_util'], data['days_with_cr_line'], data['inq_last_6mths']]).reshape(1, 6))
    input_data_normalized = scaler.transform(input_data)
    result = model.predict(input_data_normalized)

    return jsonify({'credit_score': result[0]})
    

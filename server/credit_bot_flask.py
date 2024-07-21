from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import pandas as pd
from difflib import SequenceMatcher

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Load the CSV file
# Update the path to your CSV file
qa_data = pd.read_csv('credit_score_info_full.csv')

# Convert the data into a dictionary for quick lookup
patterns_responses = dict(zip(qa_data['questions'], qa_data['answers']))

fallback_responses = [
    "I'm sorry, I didn't understand that. How can I assist you?",
    "I'm not sure I understand. Can you please rephrase that?"
]

def similar(a, b):
    return SequenceMatcher(None, a, b).ratio()

def respond(input_text):
    input_text = input_text.lower()
    max_similarity = 0
    best_match_response = random.choice(fallback_responses)
    for pattern, response in patterns_responses.items():
        similarity = similar(input_text, pattern.lower())
        if similarity > max_similarity:
            max_similarity = similarity
            best_match_response = response
    return best_match_response

# @app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_input = data.get('message')
        if not user_input:
            return jsonify({'response': "Please provide a message."}), 400
        response = respond(user_input)
        return jsonify({'response': response})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# if __name__ == '__main__':
#     app.run(port=9000, debug=True)

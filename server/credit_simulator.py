from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


class CreditScoreSimulator:
    def __init__(self, initial_score=650):
        self.credit_score = initial_score

    def apply_payment_history(self, on_time_payments, missed_payments):
        self.credit_score += (on_time_payments * 5) - (missed_payments * 15)

    def apply_credit_utilization(self, current_debt, credit_limit):
        utilization_ratio = current_debt / credit_limit
        if utilization_ratio < 0.3:
            self.credit_score += 20
        elif utilization_ratio < 0.6:
            self.credit_score -= 10
        else:
            self.credit_score -= 30

    def apply_length_of_credit_history(self, account_age_years):
        if account_age_years < 1:
            self.credit_score -= 20
        elif account_age_years < 5:
            self.credit_score += 10
        else:
            self.credit_score += 20

    def apply_new_credit(self, inquiries):
        self.credit_score -= inquiries * 5

    def apply_credit_mix(self, number_of_accounts):
        if number_of_accounts > 5:
            self.credit_score += 10
        elif number_of_accounts < 2:
            self.credit_score -= 10

    def simulate_condition(self, data):
        if 'on_time' in data and 'missed' in data:
            self.apply_payment_history(int(data['on_time']), int(data['missed']))
        if 'debt' in data and 'limit' in data:
            self.apply_credit_utilization(int(data['debt']), int(data['limit']))
        if 'age' in data:
            self.apply_length_of_credit_history(int(data['age']))
        if 'inquiries' in data:
            self.apply_new_credit(int(data['inquiries']))
        if 'accounts' in data:
            self.apply_credit_mix(int(data['accounts']))

        return self.credit_score

# @app.route('/simulate', methods=['POST'])
def simulate():
    data = request.json
    simulator = CreditScoreSimulator()
    final_score = simulator.simulate_condition(data)
    return jsonify({'final_score': final_score})

# if __name__ == '__main__':
#     app.run(debug=True, port=9000)

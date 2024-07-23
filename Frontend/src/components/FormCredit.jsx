import React, { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import ResultDisplay from "./ResultDisplay";
import LoanCard from "./LoanCard";
import DataPiece from "./DataPiece";
import LoanRecommender from "./LoanRecommender";

export default function FormCredit() {
  const [isValid, setIsValid] = useState(false);
  const [creditInput, setCreditInput] = useState({
    Customer_Name: ""
  });
  const [customerDetails, setCustomerDetails] = useState(null);
  const [creditScorePredictor, setCreditScorePredictor] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/customer`, creditInput);
      setCreditInput(response.data);
      setIsValid(response.data.isValid);
      if (response.data.customerDetails && response.data.customerDetails.length > 0) {
        setCustomerDetails(response.data.customerDetails[0]);
      }
    } catch (error) {
      console.error("ERROR :" + error);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setCreditInput((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  const handleCheckCreditScore = async (e) => {
    e.preventDefault();
    if (!customerDetails) {
      console.error("No customer details available");
      return;
    }

    const predictorData = {
      delinq_2yrs: customerDetails.delinq_2yrs,
      pub_rec: customerDetails.pub_rec,
      revol_bal: customerDetails.revol_bal,
      revol_util: customerDetails.revol_util,
      days_with_cr_line: customerDetails.days_with_cr_line,
      inq_last_6mths: customerDetails.inq_last_6mths,
    };

    try {
      const response = await axios.post("http://localhost:9000/creditScorePredictor", predictorData);
      setCreditScorePredictor(Math.floor(response.data.credit_score)); // Assuming the response contains the predicted credit score
    } catch (error) {
      console.error("Error sending credit score data:", error);
    }
  };

  const countStatuses = (payments) => {
    let onTimeCount = 0;
    let missedCount = 0;

    payments.forEach(payment => {
      if (payment.status === "on-time") {
        onTimeCount++;
      } else if (payment.status === "missed") {
        missedCount++;
      }
    });

    return { onTimeCount, missedCount };
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 border p-2 bg-body-secondary rounded-4">
          <form
            className="need-validation mt-5"
            noValidate
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="d-flex justify-content-center">
              <div className="col-md-11 p-3 d-flex justify-content-evenly">
                <div className="col-md-5 border p-3">
                  <FormInput
                    label="Username / Customer Name :"
                    type="text"
                    name="Customer_Name"
                    placeholder=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-5 border p-3">
                  <FormInput
                    label="Password :"
                    type="password"
                    name="Password"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="p-3 mt-3 d-flex justify-content-center">
              <button type="submit" className="btn btn-success rounded-5">
                <span className="">Find User Info</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {isValid && customerDetails && (
        <>
          <div className="mt-5 d-flex justify-content-center">
            <div className="col-md-11 border p-3 bg-body-secondary rounded-4">
              <div className="col-md-12 d-flex justify-content-between">
                <div className="col-md-5 p-5">
                  <h2 className="fw-bolder text-center">
                    {customerDetails.Customer_Name}
                  </h2>
                </div>
                <div className="col-md-5 p-5">
                  <h3 className="fw-bolder text-end">Notify</h3>
                </div>
              </div>
              <hr />
              <div className="my-5">
                <DataPiece
                  title="Annual Income"
                  info={customerDetails.loan_details[0].income_annum}
                />
                <DataPiece
                  title="On-Time Or Missed"
                  info={
                    "On-time: " + countStatuses(customerDetails.on_time_payments_or_missed).onTimeCount +
                    ", Missed: " + countStatuses(customerDetails.on_time_payments_or_missed).missedCount
                  }
                />
                <DataPiece
                  title="Current Debt Amt"
                  info={customerDetails.current_debt_amount}
                />
                <DataPiece
                  title="Interest Rate"
                  info={customerDetails.int_rate}
                />
                <DataPiece
                  title="Over Due Date"
                  info={creditInput.overdue_days}
                />
              </div>
              <br />
              <hr />
              <div className="col-md-12 d-flex justify-content-center p-3">
                <button
                  type="button"
                  className="btn btn-primary p-3 rounded-5"
                  onClick={handleCheckCreditScore}
                >
                  <span className="fs-5">Check Your Credit Score</span>
                </button>
              </div>
              <span className="col-md-12 d-flex justify-content-center fs-6 fw-lighter text-warning">
                Check your Credit score Below 👇
              </span>
            </div>
          </div>
          {creditInput.alert}
          <ResultDisplay statement={"Your CIBIL Score Is:"} information={creditScorePredictor} />
          <LoanRecommender creditScore={creditScorePredictor} />
        </>
      )}
    </>
  );
}

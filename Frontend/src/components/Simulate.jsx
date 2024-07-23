import React, { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import ResultDisplay from "./ResultDisplay";
import LoanRecommender from "./LoanRecommender";

export default function Simulate() {
  const [simulateScore, setSimulateScore] = useState({
    on_time: 0,
    missed: 0,
    debt: 0,
    limit: 0,
    age: 0,
    inquiries: 0,
    accounts: 0,
  });

  const [finalScore, setFinalScore] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting simulation data:", simulateScore); // Debug log
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/simulate`,
        simulateScore // Send simulateScore directly
      );
      console.log("Response data:", response.data); // Debug log
      setFinalScore(response.data.final_score);
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const intValue = parseInt(value, 10);
    if (!isNaN(intValue)) {
      setSimulateScore((prevVal) => ({
        ...prevVal,
        [name]: intValue,
      }));
      console.log(`Updated ${name} to`, intValue); // Debug log
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 border p-2 bg-body-secondary rounded-4">
          <form onSubmit={handleSubmit}>
            <div className="col-md-10 bg-body-secondary container">
              <div className="mt-3">
                <div className="col-md-12 d-flex justify-content-evenly p-3">
                  <div className="col-md-4 border p-1">
                    <FormInput
                      label="On-Time Payments :"
                      type="number"
                      name="on_time"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4 border p-1">
                    <FormInput
                      label="Missed Payments :"
                      type="number"
                      name="missed"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12 d-flex justify-content-evenly p-3">
                  <div className="col-md-4 border p-1">
                    <FormInput
                      label="Current Debt"
                      type="number"
                      name="debt"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4 border p-1">
                    <FormInput
                      label="Credit Limit :"
                      type="number"
                      name="limit"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12 d-flex justify-content-evenly p-3">
                  <div className="col-md-4 border p-1">
                    <FormInput
                      label="Account Age (years) :"
                      type="number"
                      name="age"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4 border p-1">
                    <FormInput
                      label="Credit Inquiries :"
                      type="number"
                      name="inquiries"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12 d-flex justify-content-around p-3">
                  <div className="col-md-4 border p-1">
                    <FormInput
                      label="No. of Credit Accounts :"
                      type="number"
                      name="accounts"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12 d-flex justify-content-center p-3">
                  <button type="submit" className="btn btn-primary">
                    Simulate
                  </button>
                </div>
                <p className="text-center fs-6 fw-lighter text-warning">
                  *Check Your Predicted Credit Score Here 👇*
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      {finalScore !== null && (
        <>
          <ResultDisplay
            statement={"Predicted Credit Score :"}
            information={finalScore}
          />
          <LoanRecommender creditScore={finalScore} />
        </>
      )}
    </>
  );
}

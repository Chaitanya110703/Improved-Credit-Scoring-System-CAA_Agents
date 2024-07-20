import React, { useState } from "react";
import FormInput from "./FormInput";

export default function Simulate() {
  const [simulateScore, setSimulateScore] = useState({
    "actions": [
      {
          "type": "payment_history",
          "params": {
              on_time: "",
              missed: "",
          }
      },
      {
          "type": "credit_utilization",
          "params": {
              debt: "",
              limit: "",
          }
      },
      {
          "type": "credit_history_length",
          "params": {
              age: "",
          }
      },
      {
          "type": "new_credit",
          "params": {
              inquiries: "",  
          }
      },
      {
          "type": "credit_mix",
          "params": {
              accounts: "",
          }
      }
  ]
  });

  function handleSubmit(e) {
    e.preventDefault();
    
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setSimulateScore(preVal => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
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
                {/* <h5>{simulateScore.on_time}</h5> */}
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
                  label="Current Depts"
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
                  label="Account Age(years) :"
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
          </div>
          
        </div>
      </form>
    </>
  );
}

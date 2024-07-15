import React from "react";
import Navigation from "../components/Navigation";
import CreditCard from "../components/CreditCard";
import FormCredit from "../components/FormCredit";

export default function CreditScore() {
  return (
    <main className="vh-100">
      <Navigation />
      <div className="container bg-body-tertiary mt-5">
        <h1 className="fw-bolder text-center p-3">
          Calculate Your <span className="text-info">Credit Scores</span>
        </h1>
        <hr />
        {/* Credit Score Form */}
        <FormCredit />
        <div className="col-md-12 d-flex justify-content-evenly mt-5 pb-5">
          <CreditCard title="Credit Score" />
          <CreditCard title="Strategy" />
          <CreditCard title="Loan Eligibilty" />
        </div>
      </div>
    </main>
  );
}

import React from "react";
// import Main from "./Main";
import Navigation from "../components/Navigation";
import LoanForm from "../components/LoanForm";

export default function Loan() {
  return (
    // <h1>Loan Eligibility</h1>
    <main className="vh-100">
      <Navigation />
      <div className="container bg-body-tertiary mt-5">
        <h1 className="fw-bolder text-center p-3">
          Know Your <span className="text-info">Credit Scores</span>
        </h1>
        <hr />
        <LoanForm />
      </div>
    </main>
  );
}

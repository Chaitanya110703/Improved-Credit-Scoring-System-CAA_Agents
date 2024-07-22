import React from "react";

export default function CreditCard(props) {
  return (
    <div className="col-md-3 border rounded p-2">
      <div className="d-flex justify-content-evenly align-items-center pt-2">
        <i className="fa-regular fa-credit-card p-1 fs-4"></i>
        <h5 className="fs-4 fw-bolder">{props.title}</h5>
      </div>
      <hr />
      <p className="mx-3 fs-5 fw-bold">Home Loan:&nbsp;&nbsp;<span>{props.hLoan}%</span></p>
      <p className="mx-3 fs-5 fw-bold">Personal Loan:&nbsp;&nbsp;<span className="text-Success">{props.pLoan}%</span></p>
    </div>
  );
};
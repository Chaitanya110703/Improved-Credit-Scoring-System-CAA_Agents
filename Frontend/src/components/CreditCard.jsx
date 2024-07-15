import React from "react";

export default function CreditCard(props) {
  return (
    <div className="col-md-3 border rounded d-flex justify-content-start p-2">
      <i className="fa-regular fa-credit-card p-1 mt-1"></i>
      <h5 className="p-1">{props.title}</h5>
    </div>
  );
}

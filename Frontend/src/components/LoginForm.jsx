import React from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

export default function LoginForm() {
  const nav = useNavigate();

  return (
    <div className="col-md-4 bg-body-tertiary m-5 align-item-center">
      <h2 className="text-center p-3">CAA Agents</h2>
      <hr />
      <h4 className="text-center">Login</h4>
      <form
        action=""
        method=""
        className="need-validation"
        enctype="multipart/form-data"
        novalidate
      >
        <div className="col-md-10 mx-4 p-3">
          <FormInput
            label="Email Address"
            name="emailId"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="col-md-10 mx-4 p-3">
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="col-md-10 mx-5 p-3">
          <button
            onClick={() => {
              nav("/home");
            }}
            className="btn btn-primary w-75 mx-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

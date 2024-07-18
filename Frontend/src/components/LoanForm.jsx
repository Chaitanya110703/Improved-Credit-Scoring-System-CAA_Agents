import React, { useState } from "react";
import FormInput from "./FormInput";

export default function LoanForm() {
  const [creditInput, setCreditInput] = useState({
    name: "",
    email: "",
  });
  const [inputInfo, setInputInfo] = useState([]);

  
  function handleChange(event) {
    const { name, value } = event.target;
    setCreditInput((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    setInputInfo((prevVal) => {
      return [...prevVal, creditInput];
    });
    console.log(inputInfo);
    event.preventDefault();
  }
  return (
    <form
      action=""
      method=""
      className="need-validation mt-5"
      noValidate
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      {/* <div className="d-flex justify-content-center"> */}
      <div className="  ">
        <div className="col-md-10 p-3 d-flex justify-content-evenly">
          <div className="col-md-3">
            <FormInput
              label="Number of Dependants"
              type="number"
              name="dependants"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          {/* Education */}
          <div className="col-md-4">
            <label
              htmlFor="education"
              className="col-md-10 form-label text-center"
            >
              Education
            </label>
            <div className="d-flex justify-content-center mt-1s">
              <div className="col-md-6">
                <input
                  className="form-check-input"
                  type="radio"
                  name="education"
                  id="Graduate"
                  value={"Graduate"}
                  onChange={handleChange}
                />
                <label htmlFor="Graduate" className="form-label">
                  Graduate
                </label>
              </div>
              <div className="col-md-6">
                <input
                  className="form-check-input"
                  type="radio"
                  name="education"
                  id="NotGraduate"
                  value={"Not Graduate"}
                  onChange={handleChange}
                />
                <label htmlFor="NonGraduate" className="form-label">
                  Non Graduate
                </label>
              </div>
            </div>
          </div>
          {/* Self Employed */}
        </div>
        <div className="col-md-8 p-3 d-flex justify-content-evenly">
          <div className="col-md-4 ">
            <label
              htmlFor="education"
              className="col-md-10 form-label text-center"
            >
              Self Employed
            </label>
            <div className="d-flex justify-content-center mt-1s">
              <div className="col-md-6">
                <input
                  className="form-check-input"
                  type="radio"
                  name="selfEmployed"
                  id="Yes"
                  value={"Yes"}
                  onChange={handleChange}
                />
                <label htmlFor="Graduate" className="form-label">
                  YES
                </label>
              </div>
              <div className="col-md-6">
                <input
                  className="form-check-input"
                  type="radio"
                  name="selfEmployed"
                  id="No"
                  value={"No"}
                  onChange={handleChange}
                />
                <label htmlFor="NonGraduate" className="form-label">
                  NO
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="p-3 d-flex justify-content-center">
        <button type="submit" className="btn btn-success">
          submit
        </button>
      </div>
    </form>
  );
}

//  No. of dependents
//  Education
//  Self employed
//  Income anum
//  Loan amount - kitna chahiye
//  Loan Term - no. of days
//  CIBIL Score

//  Loan status - eligible or not  - to be predicted

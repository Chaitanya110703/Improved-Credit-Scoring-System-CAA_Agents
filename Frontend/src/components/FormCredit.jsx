import React, { useState } from "react";
import FormInput from "./FormInput";

export default function FormCredit() {
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
      <div className="d-flex justify-content-center">
        <div className="col-md-10 p-3 d-flex justify-content-evenly">
          {/* <h5>{inputInfo}</h5> */}
          <div className="col-md-5">
            <FormInput
              label="Unknown Parameter :"
              type="text"
              name="name"
              placeholder="Anushka Bhai parameters dede bhai.. Please bhai!!!"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5">
            <FormInput
              label="Unknown Parameter again and sooo Onnn..."
              type="text"
              name="email"
              placeholder="Anushka😭😭🙏 Ab toh parameter dede bhai"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="p-3 d-flex justify-content-center">
        <button type="submit" className="btn btn-success">
          Calculate Credit Score... Nahi kar sakta bhai <br />
          Anushka ne parameters nahi diye
        </button>
      </div>
    </form>
  );
}

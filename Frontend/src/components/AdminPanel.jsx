import React, { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";

export default function AdminPanel() {
  const [isValid, setIsValid] = useState(false);
  const [creditInput, setCreditInput] = useState({
    Admin_Name: "",
  });
  const [resultData, setResultData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9000/admin",
        creditInput
      );
      setResultData(response.data.Customer_Info);
      setIsValid(response.data.Customer_Info.isValid === "true");
    } catch (error) {
      console.error("Error", error);
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

  const filteredAlerts =
    resultData?.alerts?.filter((alert) =>
      ["yellow", "orange", "red"].includes(alert.alert)
    ) || [];

    const bgStyle = null;
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 border p-2 bg-body-secondary rounded-4">
          <form
            action=""
            method=""
            className="need-validation mt-5"
            noValidate
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="d-flex justify-content-center">
              <div className="col-md-11 p-3 d-flex justify-content-evenly">
                <div className="col-md-5 border p-3">
                  <FormInput
                    label="Admin :"
                    type="text"
                    name="Admin_Name"
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
      {isValid && resultData && (
        <div className="mt-5 d-flex justify-content-center">
          <div className="col-md-11 border p-3 bg-body-secondary rounded-4">
            <div className="col-md-12 d-flex justify-content-between">
              <div className="col-md-5 p-3">
                <h1 className="fw-bolder text-center">Admin Panel</h1>
              </div>
              <div className="col-md-5 p-3">
                <h3 className="fw-bolder text-end">Notify</h3>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-center">
              <div className="col-md-10">
                <h3 className="py-3 text-danger">WARNINGS :</h3>
                <div className="col-md-8">
                  <table>
                    <thead>
                      <tr>
                        <th>Sr.</th>
                        <th>Defaulter Name</th>
                        <th>Current Debt Amount</th>
                        <th>Over Due Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAlerts.map((alert, index) => (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>{alert.customer}</td>
                          <td>{alert.current_debt_amount}</td>
                          <td>
                            {
                              resultData.customerDetails.find(
                                (customer) =>
                                  customer.Customer_Name === alert.customer
                              )?.due_date_current_debt

                              
                            }
                          </td>
                          
                          <td style={{backgroundColor: bgStyle ? alert.alert : ""}}>{alert.alert}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <hr />
            {/* table */}
            <div className="d-flex justify-content-center">
              <div className="col-md-10">
                <h3 className="py-3">All Customers</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Sr.</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Due Date Of Current Installments</th>
                      <th scope="col">Current Installment Amount</th>
                      <th scope="col">Status of Overdue</th>
                      <th scope="col">Alert</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultData.customerDetails ? (
                      resultData.customerDetails.map((customer, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{customer.Customer_Name}</td>
                          <td>{customer.due_date_current_debt}</td>
                          <td>{customer.installment}</td>
                          <td>
                            {customer.overdue_days_years.days > 0
                              ? "Overdue"
                              : "On Time"}
                          </td>
                          <td>
                            {resultData.alerts[index]
                              ? resultData.alerts[index].alert
                              : "No Alert"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <hr />
          </div>
        </div>
      )}
    </>
  );
}

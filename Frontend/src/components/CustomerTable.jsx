import React from "react";

export default function CustomerTable(props) {
  const resultLength = props.resultLength;
  const resultData = props.resultData;
  return (
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
            {resultData.customerDetails.length > 0 ? (
              resultData.customerDetails.flat().map((customer, index) => (
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
                      ? resultData.alerts[index].alert + " Warning"
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
  );
}
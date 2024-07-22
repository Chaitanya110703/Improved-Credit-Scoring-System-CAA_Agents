import React from "react";
import CreditCard from "./CreditCard";

export default function LoanRecommender(props) {
  const creditScore = props.creditScore;

  const loanRec = [
    {
      home_loan: 7.15,
      personal_loan: 14.49,
    },
    {
      home_loan: 6.95,
      personal_loan: 13.49,
    },
    {
      home_loan: 6.85,
      personal_loan: 12.49,
    },
    {
      home_loan: 6.75,
      personal_loan: 11.99,
    },
    {
      home_loan: 6.65,
      personal_loan: 11.49,
    },
  ];

  let loanEligible = [];

  if (creditScore >= 550 && creditScore <= 649) {
    loanEligible = [loanRec[4]];
  } else if (creditScore >= 650 && creditScore <= 699) {
    loanEligible = [loanRec[4], loanRec[3]];
  } else if (creditScore >= 700 && creditScore <= 749) {
    loanEligible = [loanRec[4], loanRec[3], loanRec[2]];
  } else if (creditScore >= 750 && creditScore <= 799) {
    loanEligible = [loanRec[4], loanRec[3], loanRec[2], loanRec[1]];
  } else if (creditScore >= 800 && creditScore <= 900) {
    loanEligible = [loanRec[4], loanRec[3], loanRec[2], loanRec[1], loanRec[0]];
  } else {
    loanEligible = [
      "Sorry, we couldn't find a loan suitable for you. Please feel free to try the AI Assistant to improve your credit score.",
    ];
  }

  return (
    <div>
      {/* <h3>Loan Recommendations</h3> */}
      <div className="mt-5 d-flex justify-content-center" id="cards">
        <div className="col-md-11 border p-3 bg-body-secondary rounded-4">
          <div className="col-md-12 p-3">
            <h3 className="mx-5 px-4">Loan Offers</h3>
            <div className="col-md-12 d-flex justify-content-evenly mt-4 pb-3">
              {loanEligible.map((loan, index) => (
                typeof loan === "string" ? (
                  <div key={index}>{loan}</div>
                ) : (
                  <CreditCard 
                    key={index}
                    title={"Loan Offers"}
                    hLoan={loan.home_loan}
                    pLoan={loan.personal_loan}
                  />
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

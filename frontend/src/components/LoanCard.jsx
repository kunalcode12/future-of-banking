import React from "react";

function LoanCard({ loan }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold">{loan.type}</h3>
      <p>Interest Rate: {loan.rate}</p>
      <p>Term: {loan.term}</p>
    </div>
  );
}

export default LoanCard;

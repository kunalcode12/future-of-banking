import React from "react";

function CompanyCard({ company }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold">{company.name}</h3>
      <p>Industry: {company.industry}</p>
      <p>Employees: {company.employees}</p>
    </div>
  );
}

export default CompanyCard;

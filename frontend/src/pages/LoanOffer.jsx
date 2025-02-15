import { motion } from "framer-motion";
import { Building2, Lock, Home } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

// Dummy data for the bank
const bankData = {
  name: "State Bank of India",
  interestRate: "8.5%",
  ltvRatio: "75%",
  applicantName: "John Doe",
  companyValue: "$1,000,000",
  loanAmount: "$750,000",
  tenure: "60 months",
};

export default function BankOfferDetails({ onBack }) {
  const navigate = useNavigate();
  const handleSelectOffer = () => {
    navigate("/terms-condition");
  };

  const location = useLocation();

  const bankDetails = location.state || {
    name: "State Bank of India",
    interestRate: "8.5%",
    ltvRatio: "75%",
    applicantName: "John Doe",
    companyValue: "$1,000,000",
    loanAmount: "$750,000",
    tenure: "60 months",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Building2
                className="w-10 h-10 text-blue-600 mr-4"
                aria-hidden="true"
              />
              <h1 className="text-3xl font-bold text-gray-800">
                {bankDetails.name}
              </h1>
            </div>
            <button
              onClick={onBack}
              className="text-blue-600 hover:text-blue-800 transition duration-300"
              aria-label="Go to home"
            >
              <Home className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">Interest Rate</p>
              <p className="text-lg font-semibold">{bankDetails.interest}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">LTV Ratio</p>
              <p className="text-lg font-semibold">{bankDetails.ltvRatio}</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">Company Name</p>
              <p className="text-lg font-semibold">{bankDetails.companyName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Company Value</p>
              <p className="text-lg font-semibold">{bankDetails.valuation}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Loan Amount</p>
              <p className="text-lg font-semibold">{bankData.loanAmount}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Tenure</p>
              <p className="text-lg font-semibold">{bankData.tenure}</p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <button
              onClick={handleSelectOffer}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out mb-4"
            >
              Select Offer
            </button>
            <p className="text-sm text-gray-600 flex items-center">
              <Lock className="w-4 h-4 mr-1" aria-hidden="true" />
              Protected by Finternet
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

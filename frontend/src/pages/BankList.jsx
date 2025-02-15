import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Building2, Landmark } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const banks = [
  {
    name: "State Bank of India",
    interestRate: "8.5%",
    ltvRatio: "75%",
    icon: Building2,
  },
  {
    name: "Punjab National Bank",
    interestRate: "8.7%",
    ltvRatio: "70%",
    icon: Landmark,
  },
  {
    name: "Bank of Baroda",
    interestRate: "8.6%",
    ltvRatio: "72%",
    icon: Building2,
  },
  {
    name: "Canara Bank",
    interestRate: "8.8%",
    ltvRatio: "68%",
    icon: Landmark,
  },
  {
    name: "Union Bank of India",
    interestRate: "8.9%",
    ltvRatio: "65%",
    icon: Building2,
  },
  {
    name: "Bank of India",
    interestRate: "8.7%",
    ltvRatio: "70%",
    icon: Landmark,
  },
  {
    name: "Indian Bank",
    interestRate: "8.6%",
    ltvRatio: "73%",
    icon: Building2,
  },
  {
    name: "Central Bank of India",
    interestRate: "8.8%",
    ltvRatio: "69%",
    icon: Landmark,
  },
];

export default function SelectOfferPage() {
  const [selectedBank, setSelectedBank] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const companyDetails = location.state || {
    companyName: "N/A",
    companyValuation: "N/A",
  };

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
  };

  const handleClosePopup = () => {
    setSelectedBank(null);
    navigate("/loan-offer", {
      state: {
        name: selectedBank.name,
        interest: selectedBank.interestRate,
        ltvRatio: selectedBank.ltvRatio,
        companyName: companyDetails.companyName,
        valuation: companyDetails.companyValuation,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Select an Offer
        </h1>
        <div className="space-y-4">
          {banks.map((bank, index) => (
            <motion.div
              key={bank.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
            >
              <div className="flex items-center space-x-4">
                <bank.icon
                  className="w-8 h-8 text-blue-600"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {bank.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Interest Rate: {bank.interestRate}
                  </p>
                  <p className="text-sm text-gray-600">
                    LTV Ratio: {bank.ltvRatio}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleBankSelect(bank)}
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 transition duration-300"
                aria-label={`Select ${bank.name}`}
              >
                <Check size={24} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBank && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  <selectedBank.icon
                    className="w-6 h-6 mr-2 text-blue-600"
                    aria-hidden="true"
                  />
                  {selectedBank.name}
                </h3>
                <button
                  onClick={handleClosePopup}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close popup"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-gray-700">
                  Interest Rate: {selectedBank.interestRate}
                </p>
                <p className="text-gray-700">
                  LTV Ratio: {selectedBank.ltvRatio}
                </p>
              </div>
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                onClick={handleClosePopup}
              >
                View Loan Offers
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

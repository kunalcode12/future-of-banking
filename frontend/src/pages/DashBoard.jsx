import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/UI/CustomCard";
import Button from "../components/Button";
import Input from "../components/UI/Input";
import { Lock, Home, Calculator, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CompanyTokenizationPage() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(12);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDocuments, setSelectedDocuments] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const companyDetails = location.state || {
    companyName: "N/A",
    companyGST: "N/A",
    companyValuation: "N/A",
  };

  const calculateEMI = () => {
    const r = interestRate / 12 / 100;
    const n = loanTerm;
    const emi =
      (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return emi.toFixed(2);
  };

  const handleGoToDashboard = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDocumentToggle = (document) => {
    setSelectedDocuments((prev) =>
      prev.includes(document)
        ? prev.filter((doc) => doc !== document)
        : [...prev, document]
    );
  };

  const handleViewOffers = () => {
    navigate("/banks", {
      state: {
        companyName: companyDetails.companyName,
        companyValuation: companyDetails.companyValuation,
      },
    });
  };

  const documents = [
    "Ownership Certificate",
    "Valuation",
    "No Objection Certificate",
    "Personal Details",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            <Home className="inline mr-2" />
            Home
          </h1>
        </header>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-8"
        >
          Your Verified Company
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="w-full bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Receipt
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="space-y-3"
                >
                  <div className="space-y-4 text-lg">
                    <p className="flex justify-between">
                      <span className="text-gray-600">Company ID:</span>
                      <span className="font-medium">
                        {companyDetails.companyId}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Company Name:</span>
                      <span className="font-medium">
                        {companyDetails.companyName}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Company GST Number:</span>
                      <span className="font-medium">
                        {companyDetails.companyGST}
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Company Valuation:</span>
                      <span className="font-medium">
                        ${companyDetails.companyValuation}
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center pt-6 space-y-4 bg-gray-50">
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                onClick={handleGoToDashboard}
              >
                Request Loan
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12"
        >
          <Card className="w-full bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-6">
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                <Calculator className="mr-2" />
                EMI Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Amount
                  </label>
                  <Input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interest Rate (%)
                  </label>
                  <Input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Term (months)
                  </label>
                  <Input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-xl font-semibold text-center">
                  Estimated Monthly EMI: ${calculateEMI()}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-600 flex items-center justify-center">
            <Lock className="w-4 h-4 mr-1" />
            Secured by Finternet
          </p>
        </motion.footer>
      </motion.div>

      <AnimatePresence>
        {showPopup && (
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
                <h3 className="text-xl font-bold">Share Company Documents</h3>
                <button
                  onClick={handleClosePopup}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-2">
                {documents.map((doc) => (
                  <div key={doc} className="flex items-center">
                    <input
                      type="checkbox"
                      id={doc}
                      checked={selectedDocuments.includes(doc)}
                      onChange={() => handleDocumentToggle(doc)}
                      className="mr-2"
                    />
                    <label htmlFor={doc}>{doc}</label>
                  </div>
                ))}
              </div>
              <Button
                onClick={handleViewOffers}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                View Offers
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

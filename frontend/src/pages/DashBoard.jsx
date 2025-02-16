import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home as HomeIcon, Building, Key, User, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);

  const { data, tokenId, totalAssetValue } = location.state || {};
  const userData = data || { fullName: "N/A", loanAmount: "N/A" };

  const interestRate = 8.5;
  const loanTerm = 20;
  const monthlyPayment = calculateMonthlyPayment(
    totalAssetValue || 0,
    interestRate,
    loanTerm
  );

  function calculateMonthlyPayment(principal, rate, years) {
    if (!principal || isNaN(principal)) return 0;

    const p = parseFloat(principal);
    const r = rate / 100 / 12;
    const n = years * 12;

    if (p <= 0 || r <= 0 || n <= 0) return 0;

    const monthlyPayment =
      (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return monthlyPayment;
  }

  const formatCurrency = (value) => {
    if (!value) return "N/A";
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return value;

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(numericValue);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleViewLoanOffers = () => {
    navigate("/banks");
  };

  const handleMakePayment = () => {
    setIsPaymentDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Top Navbar */}
      <nav className="w-full bg-white bg-opacity-5 backdrop-blur-sm fixed top-0 left-0 z-50 border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 space-x-4">
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={handleGoHome}
            >
              <HomeIcon className="w-5 h-5 text-white" />
              <span className="text-lg font-medium text-white hover:text-white hover:opacity-80 transition duration-200">
                Home
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-blue-400" />
              <span className="text-lg font-medium text-white">
                {userData.fullName}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto mt-20 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Building className="w-6 h-6 mr-2 text-blue-400" />
              Home Loan Dashboard
            </h1>
            <p className="text-white text-opacity-70">
              Manage your tokenized property and loan details
            </p>
          </div>
          <div className="flex space-x-4">
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              onClick={handleViewLoanOffers}
            >
              View Loan Offers
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              onClick={handleMakePayment}
            >
              Pay EMI
            </Button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Property & Loan Summary Card */}
          <Card className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-indigo-900 bg-opacity-50">
              <CardTitle className="flex items-center text-xl font-bold">
                <Building className="w-5 h-5 mr-2 text-blue-400" />
                Property & Loan Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-white text-opacity-70">Token ID:</span>
                  <span className="font-medium text-white">
                    {tokenId || "N/A"}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white text-opacity-70">
                    Loan Amount:
                  </span>
                  <span className="font-medium text-white">
                    {formatCurrency(totalAssetValue)}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white text-opacity-70">
                    Interest Rate:
                  </span>
                  <span className="font-medium text-white">
                    {interestRate}%
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white text-opacity-70">
                    Loan Tenure:
                  </span>
                  <span className="font-medium text-white">
                    {loanTerm} years
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-white text-opacity-70">
                    Monthly EMI:
                  </span>
                  <span className="font-medium text-green-400">
                    {formatCurrency(monthlyPayment)}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Property Token Information Card */}
          <Card className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 col-span-2">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-indigo-900 bg-opacity-50">
              <CardTitle className="flex items-center text-xl font-bold">
                <Key className="w-5 h-5 mr-2 text-blue-400" />
                Property Token Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-white text-opacity-70">
                      Token Status:
                    </span>
                    <span className="font-medium text-green-400">Active</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-white text-opacity-70">
                      Tokenized On:
                    </span>
                    <span className="font-medium text-white">
                      {new Date().toLocaleDateString()}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-white text-opacity-70">
                      Blockchain:
                    </span>
                    <span className="font-medium text-white">
                      Secure Property Chain
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-opacity-20 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Security Features</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Lock className="w-4 h-4 mr-2 text-blue-400" />
                    256-bit encryption
                  </li>
                  <li className="flex items-center">
                    <Lock className="w-4 h-4 mr-2 text-blue-400" />
                    Immutable blockchain record
                  </li>
                  <li className="flex items-center">
                    <Lock className="w-4 h-4 mr-2 text-blue-400" />
                    Smart contract protection
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-sm text-white text-opacity-70 flex items-center justify-center">
            <Lock className="w-4 h-4 mr-1" />
            Your home loan documents are secured by advanced blockchain
            technology
          </p>
        </footer>
      </div>

      {/* EMI Payment Dialog */}
      <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <DialogContent className="bg-gray-900 border border-white border-opacity-10 text-white p-0 rounded-2xl shadow-2xl max-w-md">
          <DialogHeader className="p-6 border-b border-white border-opacity-10">
            <div className="flex items-center justify-between w-full">
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Pay Home Loan EMI
              </DialogTitle>
              <DialogClose className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all">
                <Lock className="w-5 h-5" />
              </DialogClose>
            </div>
          </DialogHeader>
          <div className="p-6 space-y-6">
            <div className="bg-white bg-opacity-5 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white text-opacity-70">EMI Amount:</span>
                <span className="text-xl font-bold text-white">
                  {formatCurrency(monthlyPayment)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white text-opacity-70">Status:</span>
                <span className="font-medium text-yellow-400">Pending</span>
              </div>
            </div>
            <div className="text-center px-4">
              <p className="text-sm text-white text-opacity-70">
                Your EMI payment will be processed securely. A digital receipt
                will be generated and added to your property's blockchain
                record.
              </p>
            </div>
            <Button
              className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 rounded-xl text-lg transition-all duration-300"
              onClick={() => setIsPaymentDialogOpen(false)}
            >
              Confirm EMI Payment
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

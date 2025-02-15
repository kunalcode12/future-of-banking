import { useLocation, useNavigate } from "react-router-dom";
import { Home as HomeIcon, CheckCircle, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomeLoanTokenizationSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {
    fullName: "N/A",
    loanAmount: "N/A",
  };
  console.log(formData);

  // Generate token ID based on random values
  const tokenId = `TKN-${Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")}`;

  const handleGoToDashboard = () => {
    navigate("/dashboard", {
      state: { formData, tokenId },
    });
  };

  const handleGoHome = () => {
    navigate("/");
  };

  // Function to format currency values
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
            {/* Home Button */}
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={handleGoHome}
            >
              <HomeIcon className="w-5 h-5 text-white" />
              <span className="text-lg font-medium text-white hover:text-white hover:opacity-80 transition duration-200">
                Home
              </span>
            </div>

            {/* Dashboard Button */}
            <Button
              className="text-lg font-bold text-black bg-white hover:bg-white hover:bg-opacity-90 py-2 px-6 rounded-lg transition duration-200"
              onClick={handleGoToDashboard}
            >
              Dashboard
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Card Content */}
      <Card className="w-full max-w-2xl mx-auto mt-20 bg-white bg-opacity-5 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-white border-opacity-10 transform transition-all duration-500 hover:scale-105 relative z-10">
        <div className="absolute top-0 right-0 p-4">
          <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
        </div>

        <CardHeader className="space-y-1 flex flex-col items-center pt-12">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-center text-white px-4 tracking-wide leading-tight">
            Your Home Loan Assets Have Been Successfully Tokenized!
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-8">
          <div className="bg-white bg-opacity-5 rounded-2xl p-8 space-y-6 shadow-md border border-white border-opacity-10">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Lock className="w-5 h-5 mr-2 text-blue-400" />
              Token Details
            </h3>

            <div className="space-y-6 text-lg">
              <p className="flex justify-between items-center">
                <span className="text-white text-opacity-70">Token ID:</span>
                <span className="font-medium bg-white bg-opacity-10 px-4 py-1 rounded-full">
                  {tokenId}
                </span>
              </p>

              <p className="flex justify-between items-center">
                <span className="text-white text-opacity-70">Borrower:</span>
                <span className="font-medium">{formData.fullName}</span>
              </p>

              <p className="flex justify-between items-center">
                <span className="text-white text-opacity-70">Asset Value:</span>
                <span className="font-medium text-green-400">
                  {formatCurrency(formData.loanAmount)}
                </span>
              </p>

              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-opacity-20 rounded-xl p-4 mt-6">
                <p className="text-white text-center text-sm leading-relaxed">
                  Your home loan has been converted to a digital token on our
                  secure blockchain network. This enables faster processing,
                  better rates, and improved security.
                </p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center pt-8 pb-12 space-y-6">
          <Button
            className="w-full max-w-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-5 px-10 rounded-2xl text-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            onClick={handleGoToDashboard}
          >
            View Your Assets
          </Button>

          <p className="text-base text-white text-opacity-70 flex items-center">
            <Lock className="w-5 h-5 mr-2" />
            Secured by advanced blockchain technology
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

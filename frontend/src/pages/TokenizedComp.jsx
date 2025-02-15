import { useLocation, useNavigate } from "react-router-dom";
import { Home as HomeIcon, Lock } from "lucide-react";
import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/UI/CustomCard";
import { CheckCircle } from "lucide-react";

export default function TokenizationSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const companyDetails = location.state || {
    companyName: "N/A",
    companyGST: "N/A",
    companyValuation: "N/A",
  };

  const handleGoToDashboard = () => {
    navigate("/dashBoard", {
      state: {
        companyId: companyDetails.companyId,
        companyName: companyDetails.companyName,
        companyValuation: companyDetails.companyValuation,
        companyGST: companyDetails.companyGST,
      },
    });
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Navbar */}
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 space-x-4">
            {/* Home Button */}
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={handleGoHome}
            >
              <HomeIcon className="w-5 h-5 text-gray-600" />
              <span className="text-lg font-medium text-gray-600 hover:text-blue-600 transition duration-200">
                Home
              </span>
            </div>

            {/* Dashboard Button */}
            <div className="flex items-center">
              <Button
                className="text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg transition duration-200"
                onClick={handleGoToDashboard}
              >
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Card Content */}
      <Card className="w-full max-w-3xl mt-20 bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
        <CardHeader className="space-y-1 flex flex-col items-center animate-fade-in">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <CheckCircle className="w-16 h-16 text-white animate-bounce" />
          </div>
          <CardTitle className="text-3xl font-bold text-center text-gray-800 px-4 tracking-wide">
            You have successfully tokenized your company!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-8 space-y-6 shadow-md animate-slide-up">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Receipt
            </h3>
            <div className="space-y-4 text-lg">
              <p className="flex justify-between">
                <span className="text-gray-600">Company ID:</span>
                <span className="font-medium">{companyDetails.companyId}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Company Name:</span>
                <span className="font-medium">
                  {companyDetails.companyName}
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Company GST Number:</span>
                <span className="font-medium">{companyDetails.companyGST}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Company Valuation:</span>
                <span className="font-medium">
                  ${companyDetails.companyValuation}
                </span>
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center pt-8 space-y-6 animate-fade-in-delayed">
          <Button
            className="w-96 max-w-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-5 px-10 rounded-2xl text-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
            onClick={handleGoToDashboard}
          >
            Go to Dashboard
          </Button>
          <p className="text-base text-gray-500 flex items-center">
            <Lock className="w-5 h-5 mr-2" />
            Secured by Finternet
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/UI/Card";
import { useNavigate } from "react-router-dom";
import { Home, DollarSign, Shield } from "lucide-react";

export default function HomeLoanApplication() {
  // Generate a random application ID
  const applicationId =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  const navigate = useNavigate();

  const handleSubmitApplication = () => {
    navigate("/company-details", { state: { applicationId } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            Dream Home Financing
          </h1>
          <p className="text-xl text-gray-300">
            Your journey to homeownership starts here
          </p>
        </div>

        <Card className="bg-gray-800 border-gray-700 shadow-2xl">
          <CardHeader className="space-y-4">
            <CardTitle className="text-3xl text-white">
              New Loan Application
            </CardTitle>
            <CardDescription className="text-gray-300">
              Complete your application in just a few steps
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <Home className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Property Search
                </h3>
                <p className="text-gray-400">
                  Find and finance your perfect home with our comprehensive
                  search tools
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <DollarSign className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Competitive Rates
                </h3>
                <p className="text-gray-400">
                  Access industry-leading interest rates and flexible payment
                  terms
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <Shield className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Secure Process
                </h3>
                <p className="text-gray-400">
                  Your information is protected with bank-grade security
                  measures
                </p>
              </div>
            </div>

            {/* Application ID Section */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                Application Reference ID
              </label>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <code className="text-lg text-blue-400 font-mono">
                  {applicationId}
                </code>
              </div>
            </div>

            {/* Lender Information */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                Primary Lender
              </label>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-white">
                National Home Mortgage Bank
              </div>
            </div>

            {/* Declaration Checkbox */}
            <div className="flex items-center space-x-3 bg-gray-900 p-4 rounded-lg border border-gray-700">
              <input
                type="checkbox"
                id="declaration"
                className="w-4 h-4 text-blue-600 rounded border-gray-600 focus:ring-blue-500"
              />
              <label htmlFor="declaration" className="text-sm text-gray-300">
                I confirm that all information provided in this application is
                accurate and complete. I authorize the lender to verify my
                credit information.
              </label>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmitApplication}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Continue Application
            </button>
          </CardContent>
        </Card>

        {/* Footer Text */}
        <p className="text-center text-gray-400 text-sm">
          Protected by bank-grade encryption. Your information is always safe
          and secure.
        </p>
      </div>
    </div>
  );
}

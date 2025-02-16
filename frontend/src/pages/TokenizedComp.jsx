import { useLocation, useNavigate } from "react-router-dom";
import { Home as HomeIcon, CheckCircle, Lock, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setTotalAsset } from "@/store/data";

export default function HomeLoanTokenizationSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const assetData = location.state?.assets || [
    { id: 1, name: "Property Document 1", type: "document" },
    { id: 2, name: "Property Document 2", type: "document" },
    { id: 3, name: "Property Image 1", type: "image" },
  ];

  // Hardcoded asset values
  const assetValues = [
    { id: 1, value: 100000 },
    { id: 2, value: 120000 },
    { id: 3, value: 80000 },
  ];

  const data = useSelector((state) => state.auth.value);
  const formData = data || {
    fullName: "N/A",
    loanAmount: "N/A",
  };

  // Generate token ID based on random values
  const tokenId = `TKN-${Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")}`;

  const handleGoToDashboard = () => {
    dispatch(setTotalAsset(totalAssetValue));
    navigate("/dashboard", {
      state: { data, tokenId, totalAssetValue },
    });
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleViewAssets = () => {
    setIsDialogOpen(true);
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

  // Calculate total asset value
  const totalAssetValue = assetValues.reduce(
    (sum, asset) => sum + asset.value,
    0
  );

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
                  {formatCurrency(totalAssetValue)}
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
            onClick={handleViewAssets}
          >
            View Your Assets
          </Button>

          <p className="text-base text-white text-opacity-70 flex items-center">
            <Lock className="w-5 h-5 mr-2" />
            Secured by advanced blockchain technology
          </p>
        </CardFooter>
      </Card>

      {/* Asset Preview Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-4xl bg-gray-900 border border-white border-opacity-10 text-white p-0 rounded-2xl shadow-2xl">
          <DialogHeader className="p-6 border-b border-white border-opacity-10">
            <div className="flex items-center justify-between w-full">
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Your Tokenized Assets
              </DialogTitle>
              <DialogClose className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all">
                <X className="w-5 h-5" />
              </DialogClose>
            </div>
          </DialogHeader>
          <div className="p-6 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {assetData.map((asset, index) => (
                <div
                  key={asset.id}
                  className="bg-white bg-opacity-5 rounded-xl overflow-hidden border border-white border-opacity-10 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    {asset.type === "image" ? (
                      <img
                        src="/api/placeholder/300/200"
                        alt={asset.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-4">
                        <Lock className="w-12 h-12 mx-auto mb-2 text-white" />
                        <p className="text-white font-medium">{asset.name}</p>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{asset.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-opacity-70">Value:</span>
                      <span className="font-bold text-green-400">
                        {formatCurrency(assetValues[index]?.value)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white border-opacity-10">
              <div className="flex justify-between items-center">
                <span className="text-xl font-medium text-white text-opacity-80">
                  Total Asset Value:
                </span>
                <span className="text-2xl font-bold text-green-400">
                  {formatCurrency(totalAssetValue)}
                </span>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                onClick={() => setIsDialogOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

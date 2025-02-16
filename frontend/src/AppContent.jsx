import { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import SignUpModal from "./components/SignUpModal";
import LoginModal from "./components/LoginModal";
import AccountServices from "./pages/AccountServices";
import TokenizeCompany from "./pages/TokenizeCompany";
import { loanData } from "./data/loanData";
import AddCompanyDocuments from "./pages/AddCompanyDetails";
import TokenizationSuccess from "./pages/TokenizedComp";
import DashBoard from "./pages/DashBoard";
import BankList from "./pages/BankList";
import LoanOffer from "./pages/LoanOffer";
import TermsCondition from "./pages/TermsCondition";
import {
  ChevronRight,
  Home,
  Building2,
  Wallet,
  Users,
  Star,
  X,
  Menu,
} from "lucide-react";
import AssetUpload from "./pages/AssetUploading";

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Trigger initial animation
    setTimeout(() => setAnimationComplete(true), 500);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = (email) => {
    const finternentId = generateFinternentId(email);
    setUser({ email, finternentId });
    setShowLogin(false);
    navigate("/account");
  };

  const handleSignUp = (email) => {
    const finternentId = generateFinternentId(email);
    setUser({ email, finternentId });
    setShowSignIn(false);
    navigate("/account");
  };

  const generateFinternentId = (email) => {
    const username = email.split("@")[0];
    return `${username}@finternet`;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <nav
                className={`fixed w-full z-50 transition-all duration-700 ${
                  isScrolled
                    ? "bg-black/80 backdrop-blur-lg shadow-lg shadow-white/10"
                    : "bg-transparent"
                }`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center h-24">
                    <div className="flex items-center space-x-3 group">
                      <div className="relative">
                        <Home className="h-10 w-10 text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                        <div className="absolute -inset-2 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                      </div>
                      <span className="text-3xl font-bold bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent bg-size-200 animate-gradient">
                        BLOCKLONE
                      </span>
                    </div>
                    <div className="hidden md:flex space-x-6">
                      <button
                        onClick={() => setShowLogin(true)}
                        className="px-8 py-3 text-white text-lg font-medium relative overflow-hidden group hover:shadow-lg hover:shadow-white/20 transition-all duration-300 rounded-lg"
                      >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                          Login
                        </span>
                        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                      </button>
                      <button
                        onClick={() => setShowSignIn(true)}
                        className="px-8 py-3 bg-white text-black rounded-lg text-lg font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 relative overflow-hidden group"
                      >
                        <span className="relative z-10">Get Started</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </button>
                    </div>
                    <button
                      className="md:hidden transform transition-transform duration-300 hover:rotate-180"
                      onClick={() => setMobileMenu(!mobileMenu)}
                    >
                      {mobileMenu ? (
                        <X className="h-8 w-8" />
                      ) : (
                        <Menu className="h-8 w-8" />
                      )}
                    </button>
                  </div>
                </div>
              </nav>

              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Hero Section with enhanced animations */}
                <div className="text-center mb-24 pt-24">
                  <div className="relative inline-block">
                    <h1
                      className={`text-8xl font-bold mb-8 bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent leading-tight opacity-0 transform translate-y-10 transition-all duration-1000 ease-out ${
                        animationComplete ? "opacity-100 translate-y-0" : ""
                      }`}
                    >
                      Elevate Your Living <br />
                      Experience
                    </h1>
                    <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-white/20 to-white/10 blur-3xl -z-10 opacity-50 animate-pulse" />
                  </div>
                  <p
                    className={`text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed transform opacity-0 transition-all duration-1000 delay-300 ${
                      animationComplete
                        ? "opacity-100 translate-y-0"
                        : "translate-y-10"
                    }`}
                  >
                    Discover exclusive home financing solutions tailored to your
                    aspirations
                  </p>
                  <button
                    className={`px-12 py-6 bg-white text-black rounded-lg font-bold text-xl group relative overflow-hidden transform opacity-0 transition-all duration-1000 delay-500 hover:shadow-2xl hover:shadow-white/20 ${
                      animationComplete
                        ? "opacity-100 translate-y-0"
                        : "translate-y-10"
                    }`}
                  >
                    <span className="relative z-10 flex items-center">
                      Explore Premium Rates
                      <ChevronRight className="ml-3 h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-500" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-200 to-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </button>
                </div>

                {/* Features Section with enhanced animations */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                  {[
                    {
                      icon: Wallet,
                      title: "Elite Rates",
                      desc: "Access exclusive interest rates and flexible payment structures designed for distinction",
                    },
                    {
                      icon: Building2,
                      title: "Swift Process",
                      desc: "Experience our streamlined approval process with dedicated personal assistance",
                    },
                    {
                      icon: Users,
                      title: "Private Service",
                      desc: "Enjoy personalized support from our elite team of financial advisors",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className={`group bg-zinc-900/50 backdrop-blur-xl p-12 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 opacity-0 ${
                        animationComplete
                          ? "opacity-100 translate-y-0"
                          : "translate-y-10"
                      }`}
                      style={{
                        transitionDelay: `${index * 200}ms`,
                      }}
                    >
                      <feature.icon className="h-16 w-16 text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                      <h3 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent transition-all duration-500">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                        {feature.desc}
                      </p>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    </div>
                  ))}
                </div>

                {/* Loan Options Section with enhanced animations */}
                <section className="mb-24">
                  <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent bg-size-200 animate-gradient">
                    Premium Loan Solutions
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {loanData.map((loan, index) => (
                      <div
                        key={index}
                        className={`group bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-700 overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 opacity-0 ${
                          animationComplete
                            ? "opacity-100 translate-y-0"
                            : "translate-y-10"
                        }`}
                        style={{
                          transitionDelay: `${index * 200}ms`,
                        }}
                      >
                        <div className="p-8 relative">
                          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="flex items-center mb-4">
                            <Star className="h-6 w-6 text-white mr-2 transform group-hover:rotate-180 transition-transform duration-700" />
                            <span className="text-lg font-medium text-zinc-300">
                              {loan.type}
                            </span>
                          </div>
                          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent transition-all duration-500">
                            {loan.interestRate}% APR
                          </h3>
                          <p className="text-lg text-zinc-400 mb-6 leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                            {loan.description}
                          </p>
                          <div className="space-y-4">
                            {loan.features?.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center text-lg text-zinc-400 group-hover:text-zinc-300 transition-colors duration-500"
                              >
                                <ChevronRight className="h-5 w-5 text-white mr-3 transform group-hover:translate-x-2 transition-transform duration-500" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="px-8 py-6 border-t border-zinc-800">
                          <button className="w-full py-4 bg-white text-black rounded-lg font-bold text-lg transition-all duration-500 relative overflow-hidden group-hover:shadow-lg group-hover:shadow-white/20">
                            <span className="relative z-10">Learn More</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-zinc-200 to-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </main>

              {showSignIn && (
                <SignUpModal
                  setShowSignIn={setShowSignIn}
                  onSignUp={handleSignUp}
                />
              )}
              {showLogin && (
                <LoginModal setShowLogin={setShowLogin} onLogin={handleLogin} />
              )}
            </>
          }
        />

        {/* Other routes remain unchanged */}
        <Route
          path="/account"
          element={
            user ? <AccountServices user={user} /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/tokenize-company"
          element={
            user ? <TokenizeCompany user={user} /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/company-details"
          element={user ? <AddCompanyDocuments /> : <Navigate to="/" replace />}
        />
        <Route
          path="/asset-uploading"
          element={user ? <AssetUpload /> : <Navigate to="/" replace />}
        />
        <Route
          path="/tokenization-success"
          element={user ? <TokenizationSuccess /> : <Navigate to="/" replace />}
        />
        <Route
          path="/dashboard"
          element={
            user ? <DashBoard user={user} /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/banks"
          element={user ? <BankList /> : <Navigate to="/" replace />}
        />
        <Route
          path="/loan-offer"
          element={user ? <LoanOffer /> : <Navigate to="/" replace />}
        />
        <Route
          path="/terms-condition"
          element={user ? <TermsCondition /> : <Navigate to="/" replace />}
        />
      </Routes>

      {/* Add a global animation overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30 animate-pulse" />
      </div>

      {/* Add custom styles for animations */}
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
          background-size: 200% auto;
        }

        .bg-size-200 {
          background-size: 200% auto;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        /* Add smooth scrolling behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced blur effect for cards */
        .backdrop-blur-xl {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        /* Improved button hover effects */
        button:hover::before {
          transform: scaleX(1);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div>
  );
}

export default App;

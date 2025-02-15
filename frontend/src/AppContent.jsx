import { useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import SignUpModal from "./components/SignUpModal";
import LoginModal from "./components/LoginModal";
import AccountServices from "./pages/AccountServices";
import LoanCard from "./components/LoanCard";
import CompanyCard from "./components/CompanyCard";
import TokenizeCompany from "./pages/TokenizeCompany";
import { loanData } from "./data/loanData";
import { companyData } from "./data/companyData";
import AddCompanyDocuments from "./pages/AddCompanyDetails";
import TokenizationSuccess from "./pages/TokenizedComp";
import DashBoard from "./pages/DashBoard";
import BankList from "./pages/BankList";
import LoanOffer from "./pages/LoanOffer";
import TermsCondition from "./pages/TermsCondition";

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                setShowSignIn={setShowSignIn}
                setShowLogin={setShowLogin}
              />
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Available Loans
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {loanData.map((loan, index) => (
                      <LoanCard key={index} loan={loan} />
                    ))}
                  </div>
                </section>
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Featured Companies
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {companyData.map((company, index) => (
                      <CompanyCard key={index} company={company} />
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
    </div>
  );
}

export default App;

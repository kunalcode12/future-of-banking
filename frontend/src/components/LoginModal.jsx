import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

function LoginModal({ setShowLogin, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowLogin(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-gray-900 p-8 rounded-xl shadow-2xl max-w-md w-full border border-gray-800"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="loginEmail"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="loginEmail"
              name="email"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm 
                         text-gray-100 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent
                         transition duration-200"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="loginPassword"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="loginPassword"
              name="password"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm 
                         text-gray-100 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent
                         transition duration-200"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-gray-600 focus:ring-gray-600"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-400">
                Remember me
              </label>
            </div>
            <button type="button" className="text-gray-400 hover:text-gray-300">
              Forgot password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg shadow-sm text-sm font-medium text-white
                     bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 
                     focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-600
                     transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
LoginModal.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginModal;

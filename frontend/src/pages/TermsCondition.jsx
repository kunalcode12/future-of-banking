import { useState } from "react";
import Checkbox from "../components/UI/CheckBox";
import Button from "../components/Button";

const AgreementPage = () => {
  const [accepted, setAccepted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [walletId, setWalletId] = useState("");
  const [password, setPassword] = useState("");

  const handleCheckboxChange = (checked) => {
    setAccepted(checked);
  };
  const handleSignWithWallet = () => {
    setShowPopup(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing with wallet...", { walletId, password });
    // Implement wallet signing logic here
    setShowPopup(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Sign Agreement</h1>

      <div className="h-[400px] w-full rounded-md border p-4 overflow-y-auto mb-6">
        <div className="pr-4">
          <h2 className="text-lg font-semibold mb-4">Terms and Conditions</h2>

          <h3 className="text-md font-semibold mt-4 mb-2">
            1. Acceptance of Terms
          </h3>
          <p className="mb-2">
            By accessing and using this service, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>

          <h3 className="text-md font-semibold mt-4 mb-2">2. Use of Service</h3>
          <p className="mb-2">
            You agree to use this service for lawful purposes only and in a way
            that does not infringe the rights of, restrict or inhibit anyone
            elses use and enjoyment of the service.
          </p>

          <h3 className="text-md font-semibold mt-4 mb-2">
            3. Account Security
          </h3>
          <p className="mb-2">
            You are responsible for maintaining the confidentiality of your
            account and password. You agree to accept responsibility for all
            activities that occur under your account or password.
          </p>

          <h3 className="text-md font-semibold mt-4 mb-2">4. Privacy Policy</h3>
          <p className="mb-2">
            Your use of the service is also governed by our Privacy Policy.
            Please review our Privacy Policy, which also governs the site and
            informs users of our data collection practices.
          </p>

          <h3 className="text-md font-semibold mt-4 mb-2">
            5. Electronic Communications
          </h3>
          <p className="mb-2">
            When you use the service or send emails to us, you are communicating
            with us electronically. You consent to receive communications from
            us electronically. We will communicate with you by email or by
            posting notices on the site.
          </p>

          <h3 className="text-md font-semibold mt-4 mb-2">6. User Content</h3>
          <p className="mb-2">
            You retain all of your ownership rights in your content. However, by
            submitting the content to us, you grant us a worldwide,
            non-exclusive, royalty-free license to use, reproduce, distribute,
            prepare derivative works of, display, and perform your content in
            connection with the service.
          </p>

          <h3 className="text-md font-semibold mt-4 mb-2">7. Termination</h3>
          <p className="mb-2">
            We may terminate or suspend your account and bar access to the
            service immediately, without prior notice or liability, under our
            sole discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of the Terms.
          </p>

          <h3 className="text-md font-semibold mt-4 mb-2">8. Governing Law</h3>
          <p className="mb-2">
            These Terms shall be governed and construed in accordance with the
            laws, without regard to its conflict of law provisions.
          </p>

          <h3 className="text-md font-semibold mt-4 mb-2">
            9. Changes to Terms
          </h3>
          <p className="mb-2">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. What constitutes a material change will be
            determined at our sole discretion.
          </p>

          <h3 className="text-md font-semibold mt-4 mb-2">10. Contact Us</h3>
          <p className="mb-2">
            If you have any questions about these Terms, please contact us.
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <Checkbox
          id="terms"
          checked={accepted}
          onCheckedChange={handleCheckboxChange}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I have read and accept the terms and conditions
        </label>
      </div>

      <Button onClick={handleSignWithWallet} disabled={!accepted}>
        Sign using wallet
      </Button>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full transform transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-6">Sign with Wallet</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="walletId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Wallet ID
                </label>
                <input
                  type="text"
                  id="walletId"
                  value={walletId}
                  onChange={(e) => setWalletId(e.target.value)}
                  className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <Button type="submit">Submit</Button>
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgreementPage;

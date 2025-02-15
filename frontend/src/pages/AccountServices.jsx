import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet, Link, ChevronRight, User, Shield } from "lucide-react";
import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

// Buffer polyfill
import { Buffer } from "buffer";
window.Buffer = Buffer;
import PropTypes from "prop-types";

export default function AccountServices({ user }) {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState(null);
  const RECIPIENT_ADDRESS = "JCsFjtj6tem9Dv83Ks4HxsL7p8GhdLtokveqW7uWjGyi";
  const DEVNET_ENDPOINT = "https://api.devnet.solana.com";

  useEffect(() => {
    if (window.solana?.isPhantom && window.solana.isConnected) {
      // Add any necessary logic here
    }
  }, []);

  AccountServices.propTypes = {
    user: PropTypes.shape({
      finternentId: PropTypes.string.isRequired,
    }).isRequired,
  };

  const connectWallet = async () => {
    if (window.solana?.isPhantom) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (err) {
        console.error("Connection error:", err);
        alert("Wallet connection failed!");
      }
    } else {
      alert("Please install Phantom Wallet!");
    }
  };

  const handleTransferAndNavigate = async () => {
    if (!walletAddress) {
      alert("Connect Phantom Wallet first!");
      return;
    }

    try {
      const connection = new Connection(DEVNET_ENDPOINT, "confirmed");
      const fromPubkey = new PublicKey(walletAddress);
      const toPubkey = new PublicKey(RECIPIENT_ADDRESS);

      const balance = await connection.getBalance(fromPubkey);
      if (balance < 0.2 * LAMPORTS_PER_SOL) {
        alert(`Insufficient SOL! You need at least 0.2 SOL`);
        return;
      }

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey,
          toPubkey,
          lamports: 0.2 * LAMPORTS_PER_SOL,
        })
      );

      transaction.feePayer = fromPubkey;
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;

      const { signature } = await window.solana.signAndSendTransaction(
        transaction
      );

      console.log("Transaction Signature:", signature);
      await connection.confirmTransaction(signature, "confirmed");

      navigate("/tokenize-company");
    } catch (error) {
      console.error("Transaction error:", error);
      alert(`Transfer failed: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <header className="mb-12">
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-12 transform hover:scale-105 transition-all duration-500">
            <div className="flex flex-col items-center">
              {/* Profile Section */}
              <div className="relative group mb-8">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <User className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Account Info */}
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <div className="text-xl mb-2 text-zinc-300">
                {user.finternentId}
              </div>
              <div className="text-sm text-zinc-500 mb-8">
                Secured by Finternet
              </div>

              {/* Wallet Connection */}
              {!walletAddress ? (
                <button
                  onClick={connectWallet}
                  className="group relative px-8 py-4 bg-white text-black rounded-lg font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <Wallet className="w-5 h-5 mr-2" />
                    Connect Phantom Wallet
                  </span>
                  <div className="absolute inset-0 bg-zinc-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              ) : (
                <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-400/10 px-6 py-3 rounded-lg">
                  <Shield className="w-5 h-5" />
                  <span>
                    Connected: {walletAddress.slice(0, 4)}...
                    {walletAddress.slice(-4)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Services Section */}
        <main>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Premium Services
          </h2>
          <div className="grid gap-6">
            <div className="group bg-zinc-900 rounded-2xl border border-zinc-800 p-8 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-blue-600/20 rounded-lg">
                      <Link className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                      Invoice Tokenization
                    </h3>
                  </div>
                  <p className="text-lg text-zinc-400 mb-6 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    Transform your invoices into digital assets and unlock new
                    financial opportunities through our advanced tokenization
                    process.
                  </p>
                  <button
                    onClick={handleTransferAndNavigate}
                    className="flex items-center px-8 py-4 bg-white text-black rounded-lg font-bold text-lg group-hover:bg-zinc-200 transition-all duration-300"
                  >
                    Begin Tokenization
                    <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                <div className="hidden md:block w-48 h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full transform group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

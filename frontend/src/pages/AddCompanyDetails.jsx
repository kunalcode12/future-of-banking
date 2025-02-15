import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AddCompanyDocuments() {
  const location = useLocation();
  const navigate = useNavigate();
  const { companyId } = location.state || { companyId: "N/A" };

  const [companyName, setCompanyName] = useState("");
  const [companyValuation, setCompanyValuation] = useState("");
  const [companyGST, setCompanyGST] = useState("");
  const [invoiceFileName, setInvoiceFileName] = useState("No file chosen");
  const [noObjectionFileName, setNoObjectionFileName] =
    useState("No file chosen");

  const handleFileChange = (event, setFileName) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/tokenization-success", {
      state: {
        companyId,
        companyName,
        companyValuation,
        companyGST,
      },
    });
  };

  const buttonStyle = {
    cursor: "pointer",
    backgroundColor: "#3b82f6",
    color: "white",
    fontWeight: "bold",
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    marginTop: "4px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #dbeafe, #e0e7ff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "42rem",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#1f2937",
            marginBottom: "8px",
          }}
        >
          Add Company Documents
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#4b5563",
            marginBottom: "24px",
          }}
        >
          Please fill in the details and upload required documents
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <div>
            <label
              htmlFor="companyName"
              style={{
                color: "#374151",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              required
              style={inputStyle}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="companyValuation"
              style={{
                color: "#374151",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Company Valuation
            </label>
            <input
              id="companyValuation"
              type="number"
              required
              style={inputStyle}
              value={companyValuation}
              onChange={(e) => setCompanyValuation(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="companyGST"
              style={{
                color: "#374151",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Company GST Number
            </label>
            <input
              id="companyGST"
              type="text"
              required
              style={inputStyle}
              value={companyGST}
              onChange={(e) => setCompanyGST(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="invoiceImage"
              style={{
                color: "#374151",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Invoice Image
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <label htmlFor="invoiceImage" style={buttonStyle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                Choose File
              </label>
              <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                {invoiceFileName}
              </span>
              <input
                id="invoiceImage"
                type="file"
                accept="image/*"
                required
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e, setInvoiceFileName)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="noObjectionImage"
              style={{
                color: "#374151",
                display: "block",
                marginBottom: "4px",
              }}
            >
              No Objection Certificate Image
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <label htmlFor="noObjectionImage" style={buttonStyle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                Choose File
              </label>
              <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                {noObjectionFileName}
              </span>
              <input
                id="noObjectionImage"
                type="file"
                accept="image/*"
                required
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e, setNoObjectionFileName)}
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              ...buttonStyle,
              width: "100%",
              padding: "12px",
              background: "linear-gradient(to right, #2563eb, #4f46e5)",
            }}
          >
            Add Company Details
          </button>
        </form>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "4px" }}
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Secured by Finternet
          </p>
        </div>
      </div>
    </div>
  );
}

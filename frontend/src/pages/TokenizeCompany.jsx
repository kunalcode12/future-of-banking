import Button from "../components/Button";
import Checkbox from "../components/UI/CheckBox";
import Label from "../components/UI/Label";
import { useNavigate } from "react-router-dom";

export default function TokenizeCompany() {
  // Generate a random ID for the company
  const companyId =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  const navigate = useNavigate();

  const handleAddCompany = () => {
    navigate("/company-details", { state: { companyId } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Tokenize your company
          </h1>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <Label
              htmlFor="companyId"
              className="block text-sm font-medium text-gray-700"
            >
              Company ID
            </Label>
            <div className="mt-1">
              <div
                id="companyId"
                className="bg-gray-100 p-2 rounded-md text-gray-900 font-mono"
              >
                {companyId}
              </div>
            </div>
          </div>

          <div>
            <Label
              htmlFor="companyRegistrar"
              className="block text-sm font-medium text-gray-700"
            >
              Company Registrar
            </Label>
            <div className="mt-1">
              <div
                id="companyRegistrar"
                className="bg-gray-100 p-2 rounded-md text-gray-900"
              >
                State Company Registrar
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="declaration" />
            <Label htmlFor="declaration" className="text-sm text-gray-600">
              I hereby declare that all the information provided is true and
              correct to the best of my knowledge and belief.
            </Label>
          </div>

          <Button
            onClick={handleAddCompany}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Company Details
          </Button>
        </div>
      </div>
    </div>
  );
}

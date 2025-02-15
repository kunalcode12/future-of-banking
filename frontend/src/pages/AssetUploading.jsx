import { useState } from "react";
import { Plus, Loader } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AssetUpload() {
  const [assets, setAssets] = useState([{ type: "", file: null }]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const formData1 = location.state?.formData || {};

  const addAsset = () => {
    setAssets([...assets, { type: "", file: null }]);
  };

  const updateAsset = (index, field, value) => {
    const newAssets = [...assets];
    newAssets[index][field] = value;
    setAssets(newAssets);
  };

  const handleTokenize = () => {
    setIsLoading(true);
    // Simulate processing time before navigation
    setTimeout(() => {
      setIsLoading(false);
      navigate("/tokenization-success", {
        state: {
          ...formData1,
          assets: assets,
        },
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Upload Your Assets</h1>
      {assets.map((asset, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Asset Type"
              value={asset.type}
              onChange={(e) => updateAsset(index, "type", e.target.value)}
              className="flex-grow text-xl p-4 bg-black border-2 border-white rounded-md mr-4"
            />
            <button
              onClick={addAsset}
              className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center text-2xl font-bold hover:bg-white hover:text-black transition-colors"
            >
              <Plus size={24} />
            </button>
          </div>
          <div
            className="w-full h-40 border-2 border-white border-dashed rounded-md flex items-center justify-center cursor-pointer"
            onClick={() =>
              document.getElementById(`file-upload-${index}`).click()
            }
          >
            <input
              type="file"
              onChange={(e) =>
                updateAsset(index, "file", e.target.files?.[0] || null)
              }
              className="hidden"
              id={`file-upload-${index}`}
            />
            <div className="text-xl text-center">
              {asset.file ? (
                <div>
                  <p>{asset.file.name}</p>
                  <p className="text-sm text-gray-400">
                    {(asset.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              ) : (
                "Click to upload asset file"
              )}
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={handleTokenize}
        disabled={isLoading}
        className="mt-8 px-8 py-4 bg-white text-black rounded-md text-xl font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center">
            <Loader className="animate-spin mr-2" size={24} />
            Tokenizing...
          </div>
        ) : (
          "Tokenize Assets"
        )}
      </button>
    </div>
  );
}

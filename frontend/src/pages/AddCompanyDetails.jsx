import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/UI/input";
import Label from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Calendar } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export default function HomeLoanApplication() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState();
  const [formData, setFormData] = useState({
    fullName: "",
    panNumber: "",
    aadharNumber: "",
    email: "",
    phoneNumber: "",
    address: "",
    employmentType: "",
    annualIncome: "",
    loanAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigate("/asset-uploading", {
      state: { formData },
    });
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 tracking-tight">
          Home Loan Application
        </h1>
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="bg-white bg-opacity-5 p-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-10">
            <h2 className="text-3xl font-semibold mb-8 text-white">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div className="space-y-3">
                <Label htmlFor="fullName" className="text-xl text-white">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="h-14 text-xl bg-white bg-opacity-10 border-white border-opacity-20 focus:border-white focus:border-opacity-50 text-white placeholder-white placeholder-opacity-50"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="dateOfBirth" className="text-xl text-white">
                  Date of Birth
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "h-14 w-full justify-start text-left font-normal bg-white bg-opacity-10 border-white border-opacity-20 hover:bg-white hover:bg-opacity-20 text-white text-xl",
                        !date && "text-white text-opacity-50"
                      )}
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-black border-white border-opacity-20">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="bg-black text-white"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-3">
                <Label htmlFor="panNumber" className="text-xl text-white">
                  PAN Number
                </Label>
                <Input
                  id="panNumber"
                  name="panNumber"
                  type="text"
                  required
                  value={formData.panNumber}
                  onChange={handleChange}
                  className="h-14 text-xl bg-white bg-opacity-10 border-white border-opacity-20 focus:border-white focus:border-opacity-50 text-white placeholder-white placeholder-opacity-50"
                  placeholder="ABCDE1234F"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="aadharNumber" className="text-xl text-white">
                  Aadhar Number
                </Label>
                <Input
                  id="aadharNumber"
                  name="aadharNumber"
                  type="text"
                  required
                  value={formData.aadharNumber}
                  onChange={handleChange}
                  className="h-14 text-xl bg-white bg-opacity-10 border-white border-opacity-20 focus:border-white focus:border-opacity-50 text-white placeholder-white placeholder-opacity-50"
                  placeholder="1234 5678 9012"
                />
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-5 p-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-10">
            <h2 className="text-3xl font-semibold mb-8 text-white">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-xl text-white">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="h-14 text-xl bg-white bg-opacity-10 border-white border-opacity-20 focus:border-white focus:border-opacity-50 text-white placeholder-white placeholder-opacity-50"
                  placeholder="johndoe@example.com"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="phoneNumber" className="text-xl text-white">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="h-14 text-xl bg-white bg-opacity-10 border-white border-opacity-20 focus:border-white focus:border-opacity-50 text-white placeholder-white placeholder-opacity-50"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="sm:col-span-2 space-y-3">
                <Label htmlFor="address" className="text-xl text-white">
                  Current Address
                </Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="h-14 text-xl bg-white bg-opacity-10 border-white border-opacity-20 focus:border-white focus:border-opacity-50 text-white placeholder-white placeholder-opacity-50"
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-5 p-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-10">
            <h2 className="text-3xl font-semibold mb-8 text-white">
              Financial Information
            </h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div className="space-y-3">
                <Label htmlFor="employmentType" className="text-xl text-white">
                  Employment Type
                </Label>
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("employmentType", value)
                  }
                >
                  <SelectTrigger className="h-14 text-xl bg-white bg-opacity-10 border-white border-opacity-20 text-white">
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white border-opacity-20 text-white">
                    <SelectItem value="salaried">Salaried</SelectItem>
                    <SelectItem value="self-employed">Self-employed</SelectItem>
                    <SelectItem value="business">Business Owner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label htmlFor="annualIncome" className="text-xl text-white">
                  Annual Income
                </Label>
                <Input
                  id="annualIncome"
                  name="annualIncome"
                  type="number"
                  required
                  value={formData.annualIncome}
                  onChange={handleChange}
                  className="h-14 text-xl bg-white bg-opacity-10 border-white border-opacity-20 focus:border-white focus:border-opacity-50 text-white placeholder-white placeholder-opacity-50"
                  placeholder="100000"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="loanAmount" className="text-xl text-white">
                  Desired Loan Amount
                </Label>
                <Input
                  id="loanAmount"
                  name="loanAmount"
                  type="number"
                  required
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className="h-14 text-xl bg-white bg-opacity-10 border-white border-opacity-20 focus:border-white focus:border-opacity-50 text-white placeholder-white placeholder-opacity-50"
                  placeholder="500000"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto text-2xl py-8 px-16 bg-white text-black hover:bg-white hover:bg-opacity-90 transition-all duration-200"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                  Processing
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import Navigator from "../ui/Navigator";
import Button from "../ui/Button";
import BankAdded from "./BankAdded";
// import BankSetting from "./BankSettings";

export default function AddBankDetails() {
  const BankStepsMobile = [
    { label: "Settings", href: "/main/settings" },
    { label: "Bank Info", href: "/main/settings" },
    { label: "Add Bank Details", href: "/main/settings" },
  ];
  const BankStepsDesktop = [
    { label: "Bank Info", href: "/main/settings" },
    { label: "Add Bank Details", href: "/main/settings" },
  ];
  const [bankAddedOpen, setIsBankAddedOpen] = useState(false);
  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
    accountHolderName: "",
    bankAddress: "",
    beneficiaryAddress: "",
    swiftCode: "", // Optional
    routingNumber: "", // Optional
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission

    // Check required fields
    if (
      !formData.bankName ||
      !formData.accountNumber ||
      !formData.accountHolderName ||
      !formData.bankAddress ||
      !formData.beneficiaryAddress
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Retrieve the access token (assuming it's in localStorage)
    const token = localStorage.getItem("accessToken");

    if (!token) {
      alert("You must be logged in to add bank details.");
      return;
    }

    // API call to submit the form data
    try {
      const response = await fetch("https://api-royal-stone.softwebdigital.com/api/bank", {
        method: "POST",
        headers: { "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        
        body: JSON.stringify({
          bankName: formData.bankName,
          accountNumber: formData.accountNumber,
          accountName: formData.accountHolderName, // Map accountHolderName to accountName
          bankAddress: formData.bankAddress,
          swiftCode: formData.swiftCode || "", // Send empty string if not provided
          routingNumber: formData.routingNumber || "", // Send empty string if not provided
          beneficiaryAddress: formData.beneficiaryAddress,
        }),
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (response.ok) {
        setIsBankAddedOpen(true); // Show success modal
      } else {
        alert(result.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting bank details:", error);
      alert("Failed to submit bank details. Please check your connection.");
    }
  };

  return (
    <div className="flex flex-col bg-white lg:mr-8">
      {/* Mobile Navigator */}
      <div className="lg:hidden">
        <Navigator currentStep={2} steps={BankStepsMobile} />
      </div>
      <div className="flex flex-col justify-between my-6 w-full lg:my-0 lg:mt-[85px] lg:border-b lg:pb-4">
        <h1 className="text-color-zero text-base font-semibold ">
          Add Bank Details
        </h1>
        <p className="text-color-form text-sm mt-2 lg:hidden">
          Provide your bank account details
        </p>
      </div>
      {/* Desktop Navigator */}
      <div className="hidden lg:flex">
        <Navigator currentStep={1} steps={BankStepsDesktop} />
      </div>
      <p className="text-color-form text-sm my-4 hidden lg:flex">
        Provide your bank account details
      </p>
      <form
        className="flex flex-col space-y-8 lg:w-[300px] xl:w-[430px] 2xlg:w-[500px]"
        onSubmit={handleFormSubmit}
      >
        {/* Bank Name */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            required
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="Citi Bank"
          />
        </div>

        {/* Account Number */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Account Number</label>
          <input
            type="number"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="2010100191"
          />
        </div>

        {/* Account Holder Name */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Account Holder Name</label>
          <input
            type="text"
            name="accountHolderName"
            value={formData.accountHolderName}
            onChange={handleChange}
            required
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="Cooper Winterwind"
          />
        </div>

        {/* Bank Address */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Bank Address</label>
          <input
            type="text"
            name="bankAddress"
            value={formData.bankAddress}
            onChange={handleChange}
            required
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="21 Old Lane, Wall Street"
          />
        </div>

        {/* IBAN/SWIFT Code */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">IBAN/Swift Code (Optional)</label>
          <input
            type="number"
            name="swiftCode"
            value={formData.swiftCode}
            onChange={handleChange}
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="099794"
          />
        </div>

        {/* Routing Number */}
        <div className="flex flex-col gap-2">
          <label className="text-color-form text-sm">Routing Number (Optional)</label>
          <input
            type="number"
            name="routingNumber"
            value={formData.routingNumber}
            onChange={handleChange}
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="67897943"
          />
        </div>

        {/* Beneficiary Address */}
        <div className="flex flex-col gap-1">
          <label className="text-color-form text-sm">Beneficiary Address</label>
          <input
            type="text"
            name="beneficiaryAddress"
            value={formData.beneficiaryAddress}
            onChange={handleChange}
            required
            className="rounded-sm border-b border-slate-200 text-color-zero"
            placeholder="30 New Lane, Alabama"
          />
        </div>

        <Button
          ButtonText={"Save"}
          className={`py-3 lg:w-[300px] xl:w-[430px] 2xlg:w-[500px] bg-color-one hover:bg-green-700`}
          type="submit"
        />
      </form>

      {bankAddedOpen && (
        <BankAdded onClose={() => setIsBankAddedOpen(false)} textMessage="Bank Details Added" />
      )}
      
    </div>
  );
}
